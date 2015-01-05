describe('AwwService', function() {

  describe('query Function', function() {

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    beforeEach(function(done) {

      AwwService.query(function(results) {
        AwwService.displayTopResult(results);
        done();
      });

      var responseText = JSON.stringify({
        data : {
          children : [
            {
              data : {
                url: "http://i.imgur.com/3rYHhEu.jpg"
              }
            }
          ]
        }
      });


      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 200,
        'content/type': 'application/javascript',
        'responseText': responseText
      });
    });

    afterEach(function() {
      $("body").remove("img");
      jasmine.Ajax.uninstall();
    });

    it('should run the callback provided', function() {
      expect($("body").find("img").length).toBe(1);
      expect($("body").find("img").first().attr("src")).toEqual("http://i.imgur.com/3rYHhEu.jpg");
    });
  });

});
