import { Shape } from './shape';
import * as $ from 'jquery';

const res = $('h1');

console.log(res);

const circle = new Shape.Circle();
const square = new Shape.Square();

console.log(circle);
console.log(square);
