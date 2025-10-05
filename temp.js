let tof = document.getElementById("tof");
let toc = document.getElementById("toc");
let click = document.getElementById("click");
const input = document.getElementById("input");
const result = document.getElementById("result");

let temp; 
function convert(){
  if(tof.checked){
    temp=Number(input.value);
    temp=temp*9/5 +32;
    result.textContent=temp.toFixed(1) + "°F";

  }
  else if(toc.checked){
     temp=Number(input.value);
    temp=(temp-32)*(5/9);
    result.textContent=temptoFixed(1) + "°C";

  }
  else{
    result.textContent="Select a unit";
  }

}
