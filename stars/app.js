$(function () {
	$("body").addClass("js");
  
	var $hamburger = $(".hamburger"),
	  $nav = $("#site-nav"),
	  $masthead = $("#masthead");
  
	$hamburger.click(function () {
	  $(this).toggleClass("is-active");
	  $nav.toggleClass("is-active");
	  $masthead.toggleClass("is-active");
	  return false;
	});
  });

  document.getElementById("cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
	  const rect = card.getBoundingClientRect(),
		x = e.clientX - rect.left,
		y = e.clientY - rect.top;
  
	  card.style.setProperty("--mouse-x", `${x}px`);
	  card.style.setProperty("--mouse-y", `${y}px`);
	}
  };

  
  