Code review per SE2_16_172023_P

author:
- Dounnani Mohamed 173462


# User Experience

Usando il link fornito nel README.md ho effettuato l'accesso al sito.
In generale, il sito è abbastanza intuitivo e user-friendly, al primo acesso ci vengono presentati 3 bottoni, tra cui solo uno per ora disponibile: ORDINAZIONE. Cliccando su quest'ultimo si apre un pagina in cui possiamo sccegliere il/i giorni della settimana in cui vogliamo mangiare. Una possibile critica è aver omesso una guida all'utilizzo di questa pagina, in quanto i clienti sono sopratutto anziani, e può non essere intuitivo il modo in cui è impostato il check-box. Inoltre avrei messo come bottone tutta il rettangolo "CONFERMA LA SCELTA FATTA" non soltanto la V e se non si sceglie nessun giorno e si clicca la conferma, non viene visualizzato alcun messaggio, come per esempio: "Bisogna scegliere un giorno altrimenti non è possibile andare avanti".
Nella pagina "scegli le pietanze per i giorni scelti" ho apprezzato il fatto di cliccare 2 volte sulla pietanza per una ricerca veloce su quest'ultima.
Per quanto riguarda il bottone conferma, si presenta di nuovo lo stesso problema, non viene visualizzato un messaggio se non si compila niente.
La pagina inviaci i tuoi dati per la conferma si presenta molto bene, probabilmente, ripetere la compilazione ogni settimana può risultare pesante, e bisogna dare per scontato che il cliente abbia una e-mail. Alla fine della compilazione viene visualizzato un messaggio in cui è scritto che tutto è andato bene e si viene reindirizzati alla Homepage
# Code review

Files considerati per la review:
- createHTML.js
- index.js 
- homepage (HTML)
- selezione_pasti (HTML)

Analisi del codice preso in esame:
-In createHTML, il codice è molto caotico, sarebbe stato più pulito, c'è un richiamo continuo della variabile text, anche se rende il tutto meno caotico di     quello che sarebbe con un unica chiamata.
- Il file index.js e' commentato adeguatamente ed è organizzato molto bene
- Il file selezione_pasti è impostato bene, l'unico difetto e' che il seguente codice <strong>Attenzione!</strong> Si deve selezionare almeno un giorno per     proseguire non viene mai eseguito.

Segue il template per la code review fornito a lezione

##	General
- [ ] MVC pattern used
- [x]	Images have been optimized

##	Markup
- [x]	Code does not contain inline style attributes
- [x]	Code does not contain deprecated elements & attributes
- [x]	Code is indented using hard tabs (alcuni files html non sono indentati correttamente)
- [x]	Tags and attributes are lowercase
- [x]	Tags are closed and nested properly (alcuni files html non sono indentati correttamente)
- [x]	Tables are only used to display tabular data
- [x]	Element IDs are unique
- [x]	Code validates against the W3C validator
- [ ]	All user input is “sanitized” (No: quando si ordina un pasto non si capisce se la richiesta e' stata processata con successo o meno)

##	Accessibility
- [ ]	Page has a proper outline (H1-H6 order)
- [ ]	Alt attributes exist on all <img> elements

##	CSS
- [x]	Style blocks are externalized to .css files
- [x]	Consistent naming conventions are used
- [x]	CSS validates against the W3C validator (CSS is mostly the bootstrap distribution)
- [x]	A print-friendly .css file is included in the page

##	Mobile
- [x]	Functions with JavaScript turned off
- [ ]	Image file sizes do not exceed 70kb
- [X]	Appropriate use of HTML inputs (e.g. email, phone, etc) to trigger corresponding on-screen keyboards (Only input field found is a login form)

##	JavaScript
- [ ]	Script blocks are externalized to .js files (Mixed: there is both inline and externalized js)
- [ ]	Consistent naming conventions are used 
- [ ]	Core page features function with JavaScript disabled
- [X ]	Script blocks are placed before the closing <body> tag
- [ ]	Code has been run through JSHint (jshint.com) (No: 7 warnings)

## Code Base Checks
- [x]  All code is checked into SVN or other source code repository
- [ ]	Client-side code is free of any references to development and staging environments, URLs, or other development settings
- [x]	Does the code completely and correctly implement the design?
- [ ]	Is the code well-structured, consistent in style, and consistently formatted? (MVC pattern is not used, html rendering is done by string concatenation)
- [ ]	Are there any uncalled or unneeded procedures or any unreachable code? (No)
- [ ]	Are there any leftover stubs or test routines in the code? (No)
- [x]	Can any code be replaced by calls to external reusable components or library functions? (Yes: template rendering engine)
- [x]	Are there any blocks of repeated code that could be condensed into a single procedure? (Yes: template rendering engine)
- [ ]	Are any modules excessively complex and should be restructured or split into multiple routines? 
- [x]	Are there any redundant or unused variables?

##	Loops and branches
- [x]	Are all loops, branches, and logic constructs complete, correct, and properly nested?
- [x]	Are the most common cases tested first in IF- -ELSEIF chains?
- [x]	Are all cases covered in an IF- -ELSEIF or CASE block, including ELSE or DEFAULT clauses?
- [x]	Does every case statement have a default?
- [x]	Are loop termination conditions obvious and invariably achievable?
- [ ]	Are indexes or subscripts properly initialized, just prior to the loop? (No: sometimes global variables are used)
- [ ]	Can any statements that are enclosed within loops be placed outside the loops?
- [x]	Does the code in the loop avoid manipulating the index variable or using it upon exit from the loop?

## Documentation
- [x]	Is the code clearly and adequately documented with an easy-to-maintain commenting style?
- [x]	Are all comments consistent with the code?
