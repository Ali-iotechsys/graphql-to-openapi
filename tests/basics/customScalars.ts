import { readFileSync } from 'fs';
import * as path from 'path';
import { graphqlToOpenApi } from '../../index';
import * as assert from 'assert';
import * as stringify from 'json-stable-stringify';

describe('customScalars', function () {
  const schemaString = readFileSync(
    path.join(__dirname, 'customScalarsSchema.graphql')
  ).toString();
  const inputQueryFilename = path.join(__dirname, 'customScalars.graphql');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const expectedOutput = require('./customScalars.json');
  const inputQuery = readFileSync(inputQueryFilename).toString();
  const scalarConfig = {
    CustomScalar: {
      type: 'string',
    },
  };
  const normalizedExpectedOutput = stringify(expectedOutput, { space: '  ' });

  it('should produce a valid openapi spec with a supplied scalarConfig', function () {
    const actualOutput = graphqlToOpenApi({
      schemaString,
      inputQuery,
      scalarConfig,
    }).openApiSchema;
    const normalizedActualOutput = stringify(actualOutput, { space: '  ' });
    assert.ok(!!actualOutput);
    assert.equal(normalizedActualOutput, normalizedExpectedOutput);
  });

  it('should produce a valid openapi spec with an onUnknownScalar function', function () {
    function onUnknownScalar(s) {
      return scalarConfig[s];
    }
    const actualOutput = graphqlToOpenApi({
      schemaString,
      inputQuery,
      onUnknownScalar,
    }).openApiSchema;
    const normalizedActualOutput = stringify(actualOutput, { space: '  ' });
    assert.ok(!!actualOutput);
    assert.equal(normalizedActualOutput, normalizedExpectedOutput);
  });

  it('should throw an exception when a custom scalar is unhandled', function () {
    try {
      const actualOutput = graphqlToOpenApi({
        schemaString,
        inputQuery,
      }).openApiSchema;
      assert.ok(false);
    } catch (err) {
      assert.ok(err);
    }
  });
});
