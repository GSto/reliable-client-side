beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });
  
  jasmine.getFixtures().fixturesPath = 'spec/fixtures/html';
  jasmine.getStyleFixtures().fixturesPath = 'spec/fixtures/css';
  jasmine.getJSONFixtures().fixturesPath = 'spec/fixtures/json';
});
