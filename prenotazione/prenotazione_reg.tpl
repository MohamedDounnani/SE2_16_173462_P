<!--
TEMPLATE PER LA PRENOTAZIONE" 
-->
<!DOCTYPE html>
<html>
<head><title>Prenotazione</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="controllo_pre_reg.js"></script>
</head>
<body background="immagine.png">
<nav class="navbar navbar-default">
  <div class="container-fluid">
   
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
        <a class="navbar-brand" href="login_home">Home</a>
    </div>

   
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       
        <div class ="navbar-form navbar-right"><b>(:username:)</b></div>
               
    </div>
  </div>
</nav><br><br>
<div  style="text-align: center">
    <div><h3>Trip Planner</h3></div>
<!--
FORM PER TRIP PLANNER
-->
<form action="" method='post' name="FormTrip_planner_reg">
    <div>
    <input type="text" value="" id="prenotazione_reg_start" name="prenotazione_reg_start" Placeholder="start">
    <input type="text" value="" id="prenotazione_reg_destination" name="prenotazione_reg_destination" Placeholder="destination">
    <input type="text" value="" id="prenotazione_reg_date" name="prenotazione_reg_date" Placeholder="date">
    </div><br>
    
    <div><input type="button" id="prenotazione_reg_button" value="Prenota" onclick="Controllo_Pre_reg()" class="btn btn-primary"></div>
    
</form>
    </div>
<div>(:table:)</div>

</body>

</html>