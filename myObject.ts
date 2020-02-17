// https://github.com/YousefED/typescript-json-schema/blob/master/test/schema.test.ts
// https://github.com/YousefED/typescript-json-schema/blob/master/test/programs/optionals/main.ts

import { Shape } from "./myShape";

// optional case
interface MyObject {
  requiredField?: number;
  optionalField?: number;
  shapeField?: Shape;
}

// export interface Shape {
//   /**
//    * The size of the shape.
//    *
//    * @minimum 0
//    * @TJS-type integer
//    */
//   size: number;
// }
