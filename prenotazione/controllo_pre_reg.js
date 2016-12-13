/*CONTROLLI CHE SI INNESCANO NEL MOMENTO DELLA PRENOTAZIONI
START , DESTINATION  E DATE NON POSSONO ESSERE VUOTI
*/
function Controllo_Pre_reg() {
    // Variabili associate ai campi del modulo
    var start = document.FormTrip_planner_reg.prenotazione_reg_start.value;
    var date = document.FormTrip_planner_reg.prenotazione_reg_date.value;
    var destination = document.FormTrip_planner_reg.prenotazione_reg_destination.value;
    
    
    // ESPRESSIONE REGOLARE PER ACCETTARE SOLO EMAIL DELL'UNIVERSITA' DI TRENTO
           
      
    //Effettua il controllo sul campo USERNAME E PASSWORD
    
        if(start==""){
        alert("Il campo START non puo' essere VUOTO");
        document.FormTrip_planner_reg.prenotazione_reg_start.focus();
        return false;
        }
    
     
    else if(date==""){
        alert("Il campo DATE contiene un errore");
        document.FormTrip_planner_reg.prenotazione_reg_date.focus();
        return false;
        }
    else if(destination==""){
        alert("Il campo DESTINATION non puo' essere VUOTO");
        document.FormTrip_planner_reg.prenotazione_reg_destination.focus();
        return false;
        }
   
     
    
    
    //INVIA IL MODULO
    else {
        document.FormTrip_planner_reg.action = "/prenotazione_effettuata";
        document.FormTrip_planner_reg.submit();
    }
}
