

/* Que 5: Unit Conversion
 a. 1ft = 12 in then 42 in = ? ft
 b. Rectangular Plot of 60 feet x 40 feet in meters
 c. Calculate area of 25 such plots in acres
 */

console.log("Convert 42 inches in ft");
console.log("1 ft = 12 inches");
let valueInFt = 42/12;
console.log("42 inch in feet : "+valueInFt);

console.log("Convert Area in meter square");
let rectangleArea = 60 * 40;
console.log("Aea of Plot in feet : " + rectangleArea + "ft");
console.log("1 ft = 0.3046 mtr");
let rectangleAreaInMeter = rectangleArea*0.3046;
console.log("Area of Plot in Meter Square :"+rectangleAreaInMeter+" sqmt");
console.log("Calculate Area of 25 such Plots");
let totalAreaInFeet = rectangleArea * 25;
console.log("Area of 25 Plot in feet: " + totalAreaInFeet + " ft");
let totalAreaInMeters = rectangleAreaInMeter * 25;
console.log("Area of 25 Plot in meter square: " + totalAreaInMeters + " sqmt");




