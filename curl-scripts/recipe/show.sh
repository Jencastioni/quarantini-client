#!/bin/sh

curl "http://localhost:4741/recipe/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo