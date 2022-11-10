#!/bin/sh
. ./scripts/env.sh

docker build --no-cache --tag aliiotechsys/graphql-to-openapi:1.0 --file ./scripts/dockerfiles/Dockerfile .