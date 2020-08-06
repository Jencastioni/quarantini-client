#!/bin/bash

curl "http://localhost:4741/recipe/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
