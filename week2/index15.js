     var o1 = { foo: 'bar' };
     var o2 = { foo: 'bar' };
     var o3 = o2;
o2.foo="cat";
o1=o2;
console.log(o2);
console.log(o3);
console.log(o1);