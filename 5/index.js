let count = 0;

let counterEl = document.getElementById("counter-display");

handleUpdate = () => {
    counterEl.innerHTML = count;
}
function increment() {
  if(count < 10){
    count ++ ;
    count > 0 ? document.getElementById("counter-display").style.color = "green" : document.getElementById("plus").style.background = "none" ;
    handleUpdate();
  }
}
function decrement() {
    if(count > -10){
        count --;
        count < 0 ?  document.getElementById("counter-display").style.color = "red" : document.getElementById("minus").style.background = "none";
        handleUpdate();
    }
   }
function reset() {
    count = 0;
    count === 0 ? document.getElementById("counter-display").style.color = "grey": document.getElementById("set").style.background = "none";
    handleUpdate();
}