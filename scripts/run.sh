#!/bin/sh

docker run -v $(pwd):$(pwd) -w $(pwd) --rm aliiotechsys/graphql-to-openapi:1.0 "$@"
