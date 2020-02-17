const path = require("path");
const TJS = require("typescript-json-schema");
const fs = require("fs");

// import * as Ajv from "ajv";
const Ajv = require("ajv");

// optionally pass ts compiler options
const compilerOptions = {
  strictNullChecks: true
};

// optionally pass argument to schema generator
const settings = {
  required: true
};

// const files = [path.resolve("myString.ts")];
const files = [path.resolve("myObject.ts")];

const schema = TJS.generateSchema(
  TJS.getProgramFromFiles(files, compilerOptions),
  "MyObject", //"MyString",
  settings
);
console.log("json-schema:", schema);
// ajv.validateSchema(actual);

// Try to export to a schema.json & import
const filename = "./json.schema";
fs.writeFileSync(filename, JSON.stringify(schema));
console.log("done");
//** start Ajv validation */

// const schemaStr = fs.readFileSync(filename, "utf8");
// const schema2 = JSON.parse(schemaStr)

// const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
// const validate = ajv.compile(schema2);

// console.log("test1-string")
// let data = "randomStr";
// let valid = validate(data);
// if (!valid)  {
//     console.log(validate.errors);
// } else {
//     console.log("ok");
// }

// console.log("test2-number")
// let data2 = 0;
// let valid2 = validate(data2);
// if (!valid2)  {
//     console.log(validate.errors);
// } else {
//     console.log("ok");
// }
