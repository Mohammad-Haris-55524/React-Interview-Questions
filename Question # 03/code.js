function multiplyMatrices(A, B) {
    // let rows = A.length;
    // let cols = A[0].length;
    let result = [];
  
    // for (let i = 0; i < rows; i++) {
    //   result[i] = [];
    //   for (let j = 0; j < cols; j++) {
    //     result[i][j] = A[i][j] * B[i][j];
    //   }
    // }

      
    // for (let i = 0; i < A.length; i++) {
    //     result[i] = [];
    //     for (let j = 0; j < A[0].length; j++) {
    //       result[i][j] = A[i][j] * B[i][j];
    //     }
    //   }
  
  //   // return result;

    const newArr1 = A.flat()
    const newArr2 = B.flat()
    const maxLength = Math.max(newArr1.length, newArr2.length);
  //   console.log(newArr1, newArr2)
  //   for(i=0; i<=newArr1.length; i++){
  //     // console.log(i,newArr1)
  //     for(j=0; j<=newArr2.length; j++){
  //       result = newArr1[i] * newArr2[j];
  //   }
  // }
  // return result;

  for (let i = 0; i < maxLength; i++) {
    const val1 = newArr1[i] || 0;
    const val2 = newArr2[i] || 0;
    result.push(val1 + val2);
  }
  return result;
}
  
  // Example input
  const A = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
  ];
  
  const B = [
    [2, 4, 4, 4],
    [3, 2, 2, 2],
    [1, 5, 9, 1],
    [5, 5, 5, 5]
  ];
  
  const productMatrix = multiplyMatrices(A, B);
  console.log(productMatrix);
  


  let obj = {
    parent_name: 'Father',
    child1: 'Sumair'
  };
  
  let arr = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"];
  

for(const x in arr){
    // console.log(x, arr)
    // console.log(`child${x}: ${arr[x]}`)
    obj[`child${Number(x) + 2}`] = arr[x]
}

// arr.forEach((name,index)=>{
//     // console.log({child,name})
//     obj[`child${index + 2}`] = name

// })
// arr.map((name,index)=>{
//     //  console.log({name,index})
//     //  console.log(obj)
//      obj[`child${index + 2}`] = name
    
// })

  console.log(obj);
  

// Object =
// {
// parent_name: 'Father',
// child1: 'Sumair',
// child2: 'Hamza',
// child3: 'Shahbaz',
// child4: 'Jahanzaib',
// child5: 'Junaid',
// child6: 'Tabish',
// child7: 'Ahtisham',
// child8: 'Asghar',
// }
  

