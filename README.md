### ReadMe Placeholder with ERD/Planning
Letters I never sent message board

Thought dump, things you wish you could say or could have told to loved ones, people you don't. Letters, words, conversations you didn't have the courage to say out loud - you can post anonymously and receive the closure / resolution you've searched for from other users.

inspired by peak sad tumblr 2009

User Story:
As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to add a post/letter to the letter board.
As a signed in user, I would like to update my post on the letter board.
As a signed in user, I would like to delete my post on the letter board.
As a signed in user, I would like to see all my posts on the letter board.
As a signed in user, I would like to view all other users' posts on the letter board.
As a signed in user, I would like to comment on other users' posts on the letter board.
As a signed in user, I would like to edit my comment on other users' posts on the letter board.
As a signed in user, I would like to delete my comment on other users' posts on the letter board.
Allow users to comment on comments.

Version 2 / Stretch Goals
Chat feature with notifications

Wireframe
image
image
image

ERD
image

**Comments Schema **

use strict'
 const mongoose = require('mongoose')
 const Schema = mongoose.Schema
const commentSchema = new Schema({
   body: String,
   owner: {
  type: Schema.Types.ObjectId,
     ref: 'User',
   required: true
  }
}, {
  timestamps: true
})
module.exports = commentSchema
Technologies intend to implement
-Github
-Atom
-Javascript
-Express
-Mongoose
-Node
-CSS
-Boostrap
-HTML
###

###
Express + Browser

V1

As an unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a signed in user, I would like to add a post/letter to the letter board.
As a signed in user, I would like to update my post on the letter board.
As a signed in user, I would like to delete my post on the letter board.
As a signed in user, I would like to see all my posts on the letter board.
V2 option 0

modals and widgets
V2 option 1

socket.io and chat
V2 option 2

As a signed in user, I would like to view all other users' posts on the letter board.
As a signed in user, I would like to comment on other users' posts on the letter board.
As a signed in user, I would like to edit my comment on other users' posts on the letter board.
As a signed in user, I would like to delete my comment on other users' posts on the letter board.
V3

Allow users to comment on comments.
###
