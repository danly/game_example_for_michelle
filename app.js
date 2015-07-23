$(document).keyup(function(e){
  if(e.keyCode === 37){
    $('.player').animate({"left": "-=20px"}, "fast")   
  } else if (e.keyCode === 39){
    $('.player').animate({"left": "+=20px"}, "fast")   
  }
})

window.setInterval(function(){
  console.log('here')
  $('.cloud').animate({"right": "+=20px"}, 'fast')
}, 20)