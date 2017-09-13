function vehicle(color,type, condition){
  if (type == 1){ 
    if (condition == 1){
    console.log('a '+color+'New car');}
    else console.log('a '+color+'Used car');
  }
  else if (type == 2){
       if (condition == 1){
    console.log('a '+color+'motorbike');}
    else console.log('a '+color+'Used motorbike');
  }
  else console.log('unknown');
}

vehicle("blue", 1, 5);
vehicle("blue", 2, 0);
vehicle("blue", 1, 0);
vehicle("blue", 2, 3);