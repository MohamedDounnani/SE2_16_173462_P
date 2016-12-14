var request = require("request");
var base_url = "https://infinite-coast-33422.herokuapp.com/";

var array_base_urls = [base_url+'registrazione' , base_url+'logout', base_url+'register', base_url+'login_home', base_url+'prenotazione'];

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

console.log(array_base_urls[0]);
console.log(array_base_urls[1]);
console.log(array_base_urls[3]);
console.log(array_base_urls[4]);
console.log(array_base_urls[5]);
console.log(array_base_urls[6]);
/*describe("Project Test2", function(){    
            describe("POST/", function() { 
            for(i=0;i<array_base_urls.length;i++){
                it("returns status code 200", function(done) {     
                    request.post(array_base_urls[i], function(error, response, body) {
                    expect(response.statusCode).toBe(200);
                    done();

              });

                }); 
            }

            });

        });*/



