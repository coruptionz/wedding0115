function dropList(){
    document.getElementById('navContent').className -= "invisible"
    document.getElementById('navContent').className += " animated"
    document.getElementById('navContent').className += " bounceInDown"
}

$(".flower").velocity(
  "transition.fadeIn", 
              {stagger: 40, drag:true, duration:2000, delay:3000}
 );