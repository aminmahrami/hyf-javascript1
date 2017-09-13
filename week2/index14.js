    var x = [1,2,3];
    var y = [1,2,3];
    var z = y;
console.log(x==y);
console.log(x===y);
console.log(z==y);
console.log(z==x);

//This will compare whether x and y are the same array object in memory, which is not.
//in order to compare , we need to check the length.
//x==y true => this is true because we assigned x to y
function arraysAreIdentical(i, j){
    if (i.length !== j.length){console.log(false);} 
    for (var b = 0, len = i.length; b < len; b++){
        if (i[b] !== j[b]){
            console.log(false);
        }
    }
     console.log(true); 
}

arraysAreIdentical(x, y);
arraysAreIdentical(x, z);
arraysAreIdentical(z, x);