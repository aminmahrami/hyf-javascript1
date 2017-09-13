function vehicleType(x,y){
  if (y == 1){
    console.log('a '+x+' car');
  }
  else if (y == 2){
    console.log('a '+x+' motorbike');
  }
  else console.log('unknown');
}

vehicleType("blue", 1);