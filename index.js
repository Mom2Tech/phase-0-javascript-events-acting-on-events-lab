// // // Grabbing doger to be able to apply JS
// const dodger =document.getElementById("dodger");
// // dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";
// dodger.style.left ="0px";

// // document.addEventListener("keydown", function(event){
//     if(event.key ==="ArrowLeft") {
//         const leftNumbers = doger.style.left.replace("px", "");
//         const ledt = parseInt(leftNumbers,10);
        
//         doger.style.left = `${left - 1}px`;
//     }
// });
// addEventListener();


const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
    
    if (left > 0){
        dodger.style.left =`${left + 1}px`;
    }
}
document.addEventListener("keyright", function(e){
    if(e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
