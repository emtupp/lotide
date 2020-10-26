const tail = function(array2){
  let newArray = [];
  for (let i = 0; i < array2.length; i++){
    if (i === 0){
      continue;
    } else {
      newArray.push(array2[i]);
    }
  }
  console.log(newArray);
}