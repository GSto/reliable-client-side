describe('article', function() {
  var content = null;

  beforeEach(function() {
    loadStyleFixtures("post.css");
    content = $(readFixtures("post.html"));
    $('body').append(content);
  });

  afterEach(function() {
    $('body').remove('.post');
  });
  
  it('should not display the content by default', function() {
    expect(content.find("article")).toBeHidden();
  });
  
  it('should display the article when you click "read more"', function() {
    content.find(".read-more").click();
    expect(content.find("article")).toBeVisible();
  });

});
