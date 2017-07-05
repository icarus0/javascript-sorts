var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

var module = require('../sorts');

describe('JavaScript Sorts', function(){

  var evilArray = [10, 9 , 8 ,7, 6, 5, 4, 3, 2, 1];


  it('should quicksort an evil array', function(){
    var quickArray = evilArray;
    expect(quickArray).to.deep.equal([10,9,8,7,6,5,4,3,2,1]);
    quickArray = module.quicksort(quickArray);
    expect(quickArray[(quickArray.length - 1)]).to.equal(10);
    expect(quickArray).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should bubblesort an evil array', function(){
    var bubbleArray = evilArray;
    expect(bubbleArray).to.deep.equal([10,9,8,7,6,5,4,3,2,1]);
    module.bubblesort(bubbleArray);
    expect(bubbleArray[(bubbleArray.length - 1)]).to.equal(10);
    expect(bubbleArray).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should mergesort an evil array', function(){
    var mergArray = module.mergesort(evilArray);
    expect(mergeArray[(mergeArray.length - 1)]).to.equal(10);
    expect(mergeArray).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should insertionsort an evil array', function(){
    var insertionArray = module.insertionsort(evilArray);
    expect(insertionArray[(insertionArray.length - 1)]).to.equal(10);
    expect(insertionArray).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should selectionsort an evil array', function(){
    var selectionArray = module.selectionsort(evilArray);
    expect(selectionArray[(selectionArray.length - 1)]).to.equal(10);
    expect(selectionArray).to.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

});