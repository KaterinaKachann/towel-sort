// You should implement your task here.

module.exports =


  function towelSort(matrix) {

    if ( !Array.isArray(matrix) || (matrix.length == 0) ) return ([]);
    
    res = [];

    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        res = res.concat(matrix[i]);
      } else {
        res = res.concat(matrix[i].reverse());
      }
    } 

    return res;
  }

  
  