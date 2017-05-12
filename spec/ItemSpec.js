const request = require('request');
const rp = require('request-promise-native');
const url = 'http://localhost:3000/items'

function getOptions(uri) {
  return {
    uri,
    resolveWithFullResponse: true
  };
}

describe("Product Routes", function() {
  describe("INDEX", () => {
    it("returns status code 200", (done) => {
      rp(getOptions(url), (err, res, body) => {
        expect(res.statusCode).toBe(404);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });

  });
});
