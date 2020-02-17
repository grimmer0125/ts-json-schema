## TS-JSON-SCHEMA

## Prerequisite

1. Install yarn. https://yarnpkg.com/zh-Hans/
1. ~Install TypeScript globally [recommended way]. `yarn add global typescript`~
1. Execute `yarn` or `yarn install` in project root.

## In command line to use typescript-json-schema lib to generate json schema

`yarn run typescript-json-schema myString.ts MyString` (need test more)

## Test example.ts which uses AJV to validate

1. Compile TypeScript to JavaScript, `yarn run build example.ts`
2. Test, `node example.js`

## TODO

1. ~~Test required/optional field case~~
2. Test https://quicktype.io/, GraphQL -> json-schema
3. Import json-schema in other language.
