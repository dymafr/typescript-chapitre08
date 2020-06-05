// declare const $$: MyLib;

// declare module 'mylib' {
//   export function double(number: number): number;
// }

/// <reference path="./mylib.d.ts" />

declare module 'mylib' {
  export const $$: MyLib;
}
