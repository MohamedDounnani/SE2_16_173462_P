var request = require("request");
var base_url = "https://infinite-coast-33422.herokuapp.com/"

describe("Project Test", function(){
    
    describe("GET /", function() {
    
        
    for(i=0;i<5;i++){
        it("returns status code 200", function(done) {     
            request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();

      });

        });
    }

    });

});