## TS-JSON-SCHEMA

## Prerequisite

1. Install yarn. https://yarnpkg.com/zh-Hans/
1. ~Install TypeScript globally [recommended way]. `yarn add global typescript`~
1. Execute `yarn` or `yarn install` in project root.

## In command line to use typescript-json-schema lib to generate json schema

`yarn run typescript-json-schema myString.ts MyString`

result in stdout, add `-o test.schema` to redirect to a file

## Test example.ts (master branch) to generate json scheman, and use AJV to validate (in js/ts), interface: myString.ts

1. Compile TypeScript to JavaScript, `yarn run build example.ts`
2. Test, `node example.js`, result in json.schema

## Test example.ts (bdd branch) to generate json schema, and use python to validate, interface: myObject.ts

1. `yarn run build example.ts`
2. `node example.js`
3. `pip install jsonschema`, it not installed
4. `python test.py` to validate

## TODO

1. ~~Test required/optional field case~~
2. Test https://quicktype.io/, GraphQL -> json-schema
3. Import json-schema in other language.
