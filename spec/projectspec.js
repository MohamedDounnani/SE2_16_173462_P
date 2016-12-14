var request = require("request");
var base_url1 = "https://infinite-coast-33422.herokuapp.com/"
var base_url2 = "https://infinite-coast-33422.herokuapp.com/registrazione"

describe("Project Test", function(){    
    describe("GET /", function() {   
        it("returns status code 200", function(done) {     
            request.get(base_url1, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
      });

    });   

    });

});

describe("Project Test2", function(){    
    describe("POST/", function() {    
        it("returns status code 200", function(done) {     
            request.post(base_url2, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();

      });

        });    

    });

});
