const path = require('path');
const TJS  = require("typescript-json-schema")

// optionally pass ts compiler options
const compilerOptions = {
    strictNullChecks: true
}

// optionally pass argument to schema generator
const settings = {
    required: true
};

const files = [path.resolve("myString.ts")];
const actual = TJS.generateSchema(TJS.getProgramFromFiles(files, compilerOptions), "MyString", settings);
console.log("actual:", actual);
