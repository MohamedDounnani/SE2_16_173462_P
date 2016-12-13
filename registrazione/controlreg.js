//CONTROLLI PER USERNAME E PASSWORD ED EMAIL

function Controllo_Reg() {
    // Variabili associate ai campi del modulo
    
    var username = document.FormRegistrazione.username_reg.value;
    var password = document.FormRegistrazione.password_reg.value;
    var clonepassword = document.FormRegistrazione.clonepassword_reg.value;
    var email = document.FormRegistrazione.email_reg.value;
    
    // ESPRESSIONE REGOLARE PER ACCETTARE SOLO EMAIL DELL'UNIVERSITA' DI TRENTO
    
    var filtro = /^([A-Za-z0-9_\-\.])+\@(studenti)\.(unitn)\.(it)$/;
    
      
    //Effettua il controllo sul campo USERNAME E PASSWORD
    
        if(username==""){
        alert("Il campo USERNAME non puo' essere VUOTO");
        document.FormRegistrazione.username_reg.focus();
        return false;
        }
    
     
    else if(password==""){
        alert("Il campo PASSWORD non puo' essere VUOTO");
        document.FormRegistrazione.password_reg.focus();
        return false;
        }
    else if(clonepassword!=password){
        alert("Il campo REPEAT PASSWORD deve essere uguale a PASSWORD");
        document.FormRegistrazione.clonepassword_reg.focus();
        return false;
        }
    else if(!filtro.test(email)){
        
        alert("Email non accettata, registrarsi con l'indirizzo email dell'università");
        document.FormRegistrazione.email_reg.focus();
        return false;
        }
    
    
    
    //INVIA IL MODULO
    else {
        document.FormRegistrazione.action = "/register";
        document.FormRegistrazione.submit();
    }
}

