const disc_collection = ["aviar", "beast", "destroyer", "shryke", "tern", "mamba", "orc", "IT", "shark", "thunderbird"];

function get_new_disc() {
  let random_num;
 do{
  random_num = Math.floor(Math.random()*disc_collection.length ) ;
  console.log("Generated random number " + (random_num) + " which is disc " + disc_collection[random_num]);
 }
  while( disc_collection[random_num] == document.getElementById("disc_list").innerHTML);
 document.getElementById("disc_list").innerHTML = disc_collection [random_num];
  
}



window.onload = function () {
for(let index= 0; index<disc_collection.length; index++){
console.log("Disc at location " + index + "is " + disc_collection[index])
}

  get_new_disc();
//alert ("script.js has loaded!");
/*console.log(random_num);
console.log(disc_collection[random_num]);*/
};

document.getElementById("new_disc").addEventListener("click",get_new_disc);




