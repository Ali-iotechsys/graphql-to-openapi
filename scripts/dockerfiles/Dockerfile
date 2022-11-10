FROM node:14-buster-slim

COPY . /graphql-to-openapi
WORKDIR /graphql-to-openapi
RUN npm install # dependencies
RUN npm install typescript -g
RUN npm run prepare
RUN npm install -g

COPY ./scripts/entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
