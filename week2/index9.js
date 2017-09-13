let vehicles = ["motorbike", "caravan", "bike"];


function joesAdv(){
	let adv = "Amazing Joe's Garage, we service ";
	for(let i=0;i< vehicles.length;i++){
		if(i > 0 && i < vehicles.length -1)
			adv += " ," ;
		else if(i == vehicles.length -1)
			adv += " and " ;
		adv += vehicles[i];	
	}
	advertisement_str += ".";
	console.log(advertisement_str);
}
joesAdv();
