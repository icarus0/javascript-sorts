var quicksort = function(array){

 if(array.length < 2){
    return array;
  }

  var left = [];
  var right = [];
  var pivot = array[0];

  for(var i = 1; i < array.length; i++){
    if(array[i] < pivot){
       left.push(array[i]);
    } else {
       right.push(array[i]);
    }
  }

  return quicksort(left).concat(pivot, quicksort(right));

};

var bubblesort = function(array){

  var i = 0;
  var j = 0;
  var temp = 0;

  for(i = 0; i < array.length - 1; i++){
    for(j = 0; j < array.length - 1 - i; j++){
      if (array[j+1] < array[j]){
        temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
  }

};

var merge = function(left, right){

  var array = [];

  while( left.length !== 0 || right.length !== 0 ){

    if( left.length !== 0 && right.length !== 0 ){

      if(left[0] < right[0] ){
        array.push( left.shift() );
      } else {
        array.push( right.shift() );
      }

    } else if( left.length !== 0) {
      array.push( left.shift() );
    } else if( right.length !== 0 ) {
      array.push( right.shift() );
    }

  }

  return array;

};

var mergesort = function(array){

  if( array.length < 2 ){
    return array;
  }

  var midpoint = Math.floor(array.length / 2);
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint, array.length);

  return merge( mergesort(left), mergesort(right) );


};

var insertionsort = function(array){

  var temp = 0;
  for(var i = 1; i < array.length; i++){

    while( (array[tally] >= 0) && (array[tally] > temp) ){

    }

  }

};

var selectionsort = function(array){

  for(var i = 0; i < array.length; i++){

    for(var j = i+1; j < array.length; j++){

    }
  }

};

module.exports = {
  quicksort: quicksort,
  bubblesort: bubblesort,
  mergesort: mergesort,
  insertionsort: insertionsort,
  selectionsort: selectionsort
};