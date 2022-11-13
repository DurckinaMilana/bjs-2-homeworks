// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;
  for (let i = 0; i < arr.length; i++){
    sum+=arr[i];
     if (arr[i] < min){
    min = arr[i];
  }
     if (arr[i] > max){
    max = arr[i];
  }
 }
  avg = Number((sum/arr.length).toFixed(2));

  return {min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  // Ваш код
  for (let i = 0; i < arr.length; i++){
    sum+=arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = -Infinity;

   for (let i = 0; i < arrOfArr.length; i++){
    let sumOfElements = func(arrOfArr[i]);

    if (sumOfElements > max){
      max = sumOfElements;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return Math.abs(max - min);

}
