// JavaScript to highlight active navigation link
$(document).ready(function() {
  var currentPath = window.location.pathname;
  var currentPage = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // Remove the "active" class from all navigation links
  $(".navbar-nav .nav-item").removeClass("active");

  // Find the navigation link with the href matching the current page and add "active" class
  $(".navbar-nav .nav-item a[href='" + currentPage + "']").parent().addClass("active");
});

