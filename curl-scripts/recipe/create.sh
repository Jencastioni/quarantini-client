#!/bin/bash

curl "http://localhost:4741/recipe" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer ${TOKEN}" \
    --data '{
        "recipe": {
            "recipe": "'"${RECIPE}"'",
            "title": "'"${TITLE}"'",
            "comments": "'"${COMMENTS}"'"
        }
    }'

echo

