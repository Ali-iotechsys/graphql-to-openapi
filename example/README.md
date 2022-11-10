# graphql-to-openapi Example
This example is to assess the tool for generating an openapi spec from graphql schema and query (included mutation and subscription).
To generate the api file, please run the following:
1. ensure have `docker` installed.
2. `~/graphql-to-openapi$ ./scripts/build.sh`
3. `~/graphql-to-openapi$ ./scripts/run.sh --yaml -s ./example/schema.graphql -q ./example/query.graphql > ./example/api.yaml`

We found The tool (at the current date) can only generate GET endpoints for graphql query. 
However, mutations are rendered as GET endpoints not POST as expected. 

## TODO 
1. Report issue in the original repo
2. Investigate other tools