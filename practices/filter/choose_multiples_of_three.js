'use strict';

function choose_multiples_of_three(collection) {

    collection.map((element)=>{
          return element = element*3;
   });
   return collection;
}

module.exports = choose_multiples_of_three;
