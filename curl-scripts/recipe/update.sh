#!/bin/bash

curl "http://localhost:4741/recipe/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
