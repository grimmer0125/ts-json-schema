// https://github.com/YousefED/typescript-json-schema/blob/master/test/schema.test.ts
// https://github.com/YousefED/typescript-json-schema/blob/master/test/programs/optionals/main.ts

// optional case
// interface MyObject {
//     required:number;
//     optional?:number;
// }

export interface Shape {
  /**
   * The size of the shape.
   *
   * @minimum 0
   * @TJS-type integer
   */
  size: number;
}
