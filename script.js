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
  console.log("Here is the list of discs:")
  /*
for(let index= 0; index<disc_collection.length; index++){
console.log("Disc at location " + index + " is " + disc_collection[index])
}*/

for (let disc of disc_collection){
console.log(disc);
}
console.log("End of list of discs")
  get_new_disc();
//alert ("script.js has loaded!");
/*console.log(random_num);
console.log(disc_collection[random_num]);*/
};

document.getElementById("new_disc").addEventListener("click",get_new_disc);


document.getElementById("enter_score").addEventListener("click", function() {
  if (document.getElementById("score_entry").value !="") {
const score_block= document.createElement("div");
score_block.className= "choreList";
score_block.innerHTML= "Average score of "+document.getElementById("score_entry").value;
document.getElementById("score_average").appendChild(score_block);

}
else {document.getElementById("score_error").innerHTML="Error in entering score"}
})



