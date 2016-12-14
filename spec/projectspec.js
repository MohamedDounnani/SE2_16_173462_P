var request = require("request");
var base_url = "https://infinite-coast-33422.herokuapp.com/";

var array_base_urls = [base_url+'/registrazione' , base_url+'/logout', base_url+'/register', base_url+'/login_home', base_url+'/prenotazione', base_url+'/prenotazione_effettuata' , base_url+'/my_prenotazioni'];

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

/*for(i=0;i<7;i++){
        describe("Project Test2", function(){    
            describe("POST/", function() {    
                it("returns status code 200", function(done) {     
                    request.post(array_base_urls[i], function(error, response, body) {
                    expect(response.statusCode).toBe(200);
                    done();

              });

                });    

            });

        });
}*/


