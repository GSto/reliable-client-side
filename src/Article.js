$(document).ready(function() {
    $("body").on("click", ".post > .read-more", function(e) {
      $(this).siblings("article").show();
    });
}); 
