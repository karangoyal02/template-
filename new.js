$(document).ready(function () {
  $("#b").click(function () {
      $(myModal).show();

  });
  $('#c').click(function () {
      $(myModal).hide();
  });
})

$(document).ready(function () {
  $("#b2").click(function () {
      $(myModal2).show();

  });
  $('#c2').click(function () {
      $(myModal2).hide();
  });
})

$(document).ready(function () {
  $("#b3").click(function () {
      $(myModal3).show();

  });
  $('#c3').click(function () {
      $(myModal3).hide();
  });
})

window.onscroll=function(){myfunction()};
var header=document.getElementById("myHeader");
var sticky=header.offsetTop;
function myfunction(){
  if(window.pageYOffset>=sticky){
    header.classList.add("sticky");
  }
  else{
    header.classList.remove("sticky");
  }
}


