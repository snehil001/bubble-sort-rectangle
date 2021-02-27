let values = [];
let i = 0;
var swapped = false;

function setup() {
  createCanvas(500, 300);
  values = new Array(width / 10);
  background(0);
  for (var ndx = 0; ndx < values.length; ndx += 1) {
    values[ndx] = random(10, height);
  }
}



function draw() {
 if(i < values.length){
   for(let j = 0; j < values.length - i - 1; j++)
   {
     if(values[j] > values[j+1])
     {
       
     }
   }
 }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}