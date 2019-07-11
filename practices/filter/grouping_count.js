'use strict';

function grouping_count(collection) {
     let obj ={};
     collection.forEach((element)=>{
         if(obj[element]){
           obj[element]+=1
         }else{
         obj[element]=1;
         }
     });
     return obj;
}

module.exports = grouping_count;
