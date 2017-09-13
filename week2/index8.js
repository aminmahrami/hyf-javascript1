let vehicles = ["motorbike", "caravan", "bike"];


function vehicle(color,type, condition){

  vehiclesType = (vehicles[type]);
  
  let vehicleCond = '';
  
	if(condition == 0){
       vehicleCond = "New";}
  else if (condition > 0){
    vehicleCond = "Used";}

  
  console.log('a '+color+' '+vehicleCond+' '+vehiclesType);
}

vehicle("blue", 1, 0);
vehicle("blue", 2, 2);
vehicle("blue", 0, 1);
vehicle("blue", 2, 3);



