const button = document.getElementById("ripple")
const rippleEffect =  document.getElementsByClassName("ripple")

button.addEventListener("click", function(e){
    // console.log(e)

    clickY = e.clientY - e.target.offsetTop;
    clickX = e.clientX - e.target.offsetLeft;
    // console.log(e.clientX,e.clientY)
    // console.log(e.target.offsetTop, e.target.offsetLeft);
    console.log(clickX, clickY)
   const circle =  document.createElement('span')
   circle.classList.add('circle')
   circle.style.top = clickY+'px';
   circle.style.left = clickX+'px';
    // console.log(circle.style.top, clickY);
   this.appendChild(circle)

setTimeout(()=>circle.remove(),700)
})