'use strict';
function map_to_even(collection){
   let collection2=[]
    collection.map((element)=>{
        if(element%2===0){
        collection.push(element);
        }
        });
   return collection2;
   }
module.exports = map_to_even;
