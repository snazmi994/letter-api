// import our express library
const express = require('express')

// creating a router for this file
const router = express.Router()

// require the Post model so we can interact with our database
const Letter = require('../models/letter')

// require our function to handle 404 errors
const handle404 = require('../../lib/custom_errors')

const passport = require('passport')

const requireToken = passport.authenticate('bearer', { session: false })

router.post('/comments', requireToken, (req, res, next) => {
  // extract the comment from the request's data (body)
  const commentData = req.body.comment
  commentData.owner = req.user.id

  // extract the postId from the comment data
  const letterId = commentData.letterId

  // find the post by its id
  Letter.findById(letterId)
    .then(handle404)
    .then(letter => {
      // create a new comment in the comments subdocument array using the
      // request's commentData
      letter.comments.push(commentData)

      // save the post (which saves the new comment)
      return letter.save()
    })
    // responding with the updated post that includes our new comment
    .then(letter => res.status(201).json({ letter }))
    .catch(next)
})

router.delete('/comments/:commentId', requireToken, (req, res, next) => {
  // extract the comment's id from the url
  const commentId = req.params.commentId

  // extracting the post's id from the incoming request's data
  const letterId = req.body.comment.letterId

  Letter.findById(letterId)
    .then(handle404)
    .then(letter => {
      // select the comment subdocument with the id `commentId` (post.comments.id(commentId))
      // then remove it (delete it)
      letter.comments.id(commentId).remove()

      // save our deletion
      return letter.save()
    })
    // if successfully deleted, respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.patch('/comments/:commentId', requireToken, (req, res, next) => {
  const commentId = req.params.commentId

  // extract the comment data from our request's body
  const commentData = req.body.comment
  const letterId = commentData.letterId

  Letter.findById(letterId)
    .then(handle404)
    .then(letter => {
      // select the comment with the id `commentId`
      const comment = letter.comments.id(commentId)

      // update our comment, with the incoming request's data (commentData)
      comment.set(commentData)
      // save our changes, by saving the post
      return letter.save()
    })
    .then(() => res.sendStatus(204))
})

// exporting our router, so we can register (mount) our router
module.exports = router
