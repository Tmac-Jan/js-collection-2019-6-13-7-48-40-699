'use strict';
var map_to_four_multiples_add_one = function(collection){
     let collectionReturn =[];
     collection.map((element)=>{
           collectionReturn.push(element*4+1);
     })
  return collectionReturn;
};

module.exports = map_to_four_multiples_add_one;
