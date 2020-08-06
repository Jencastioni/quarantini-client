#!/bin/sh

curl "http://localhost:4741/recipe" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
