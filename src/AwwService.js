var AwwService = {};
AwwService.query = function(callback) {
  $.ajax({
    url: "http://www.reddit.com/r/aww/top.json",
    data : {
      "sort" : "top",
      "t" : "month"
    },
    success: callback
  });
}

AwwService.displayTopResult = function(listings) {
  var img = $("<img>").attr("src",listings.data.children[0].data.url);
  $("body").append(img);
}
