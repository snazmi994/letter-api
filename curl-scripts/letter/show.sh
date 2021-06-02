#!/bin/sh

API="http://localhost:4741"
URL_PATH="/letter"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
