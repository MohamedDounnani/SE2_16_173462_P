var request = require("request");
var bind = require('bind');
var base_url = "https://infinite-coast-33422.herokuapp.com"
var Urls = [];
Urls.push('/registrazione');
Urls.push('/login_home');
Urls.push('/logout');
Urls.push('/prenotazione');




describe("Project Test", function(){    
    describe("GET /", function() {   
        it("returns status code 200", function(done) {     
            request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
      });

    });   

    });

});

describe("Project Test 1", function() {
  	describe("Status code test suite", function() {
		for(i in Urls){
    		it("returns status code 200", function(done) {
      			request.post(base_url+Urls[i], function(error, response, body) {
        			expect(response.statusCode).toBe(200);
					done();
      			});
    		});
		}
  	});
});
