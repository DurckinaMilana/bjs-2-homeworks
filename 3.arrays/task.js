function compareArrays(arr1, arr2) {
  let result;

  result = arr1.length == arr2.length && arr1.every((value, index) => value === arr2[index]); 
  
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;


  const sortArr = arr.filter((number) => number > 0);
  const sortArr2 = sortArr.filter((number) => number % 3 === 0);
  resultArr = sortArr2.map((number) => number * 10);
  return resultArr; // array
}
