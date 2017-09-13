var obj1 = {
        a: 1, 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    };
    var obj2 = {
        a: '1', 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    };


function compare(obj_1, obj_2) {
     for (let i in obj_1) {
          if (obj_1.i == obj_2.i)
               return true;
     }
     return false;
}

function dubblecompare(obj_1, obj_2) {
     for(i in obj_1) {
          if (obj_1.length === obj_2.length){
            return true;
          }
          }
     return false;
     }
     

console.log(compare(obj1, obj2));
console.log(dubblecompare(obj1, obj2));
