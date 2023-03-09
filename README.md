# CSS Vuurwerkshow

Ik heb voor het vak Web App from Scratch gekozen voor de opdracht 'Food API'. Hierbij wil ik een product overview pagina, detail pagina en barcodescanner in bouwen.

## Gebruik
Een live versie van de opdracht kan worden bekeken via de onderstaande url.

Live versie: https://casperdennijs.github.io/foodie-webapp/

## Proces
Gedurende de 3 weken (exclusief vakantie) houd ik mijn proces bij van wat ik allemaal gedaan heb voor deze opdracht.

### Week 1 (13 t/m 17 februari)
Gedurende de eerste week ben ik bezig geweest met het maken van basis schetsen van hoe ik de app er ongeveer wil laten uitzien. Ik heb gekozen om dit meteen in Adobe XD te doen zodat ik ook meteen kleur, typografie en andere vormgeving meteen kan meenemen in het proces.

Vervolgens ben ik gestart met het basis van fetchen van de API en gegevens op te halen. De API zelf is erg traag en de endpoint die hun bieden doet er erg lang over. Het kon soms wel een minuut duren voordat er misschien data in laadde (als de poging niet al daarvoor afgebroken was).

Na wat zoeken en informatie van een klasgenoot was het dus ook mogelijk om de zoek url van de website zelf te gebruiken en die om te zetten in json door &json=true achter de url toe te voegen. Ondanks deze url ook niet heel snel inlaad was dit wel significant sneller dan de officiële endpoint die OpenFoodFacts aanbied.

Nadat het gelukt was met fetchen ben ik begonnen met de vormgeving te bouwen en heb ik een zoekfunctie toegevoegd waarbij er opnieuw gefetcht wordt met de zoekterm inbegrepen.

### Week 2 (20 t/m 24 februari)
In de tweede week ben ik bezig geweest met het tweaken van de zoekfunctie en ben ik gaan experimenteren met pagination. Aangezien de API al moeite heeft met 24 producten (default) in te laden en er 15000+ producten aanwezig zijn leek het me goed om pagina's toe te voegen. Hiervoor heb ik een nieuwe waarde aan de fetch toegevoegd die de pagina bij houd. 

Enkele vreemde problemen ontstonden wel wanneer je naar een vrij hoge pagina terecht wil komen, dit vind de API niet leuk en levert dan een CORS errror. Vanwege de complexiteit van het probleem heb ik besloten om deze verder achterwegen te laten en te focussen op de rest.

Vervolgens ben ik verder gegaan met het moduleren van alle JavaScript code. Het netjes opsplitten van alle code in verschillende modules en het importeren/exporteren van code naar elkaar.

### Week 3 (6 t/m 9 maart)
Aan het begin van week 3 ben ik begonnen met routing en de detail pagina. Wanneer je op meer info klikt of direct naar een product url gaat kom je terecht bij de detailpagina. Ook kan je nu via routing nu direct naar een producten zoeken om dan meteen de resultaten ingeladen te krijgen.

Verder ben ik nog bezig met de barcodescanner wat wel wat lastiger was. Mijn laptop + webbrowser support deze functie namelijk niet standaard en moest met een kleine omweg gebruikt kunnen worden. Dankzij een klasgenoot kwam ik bij polyfill terecht die dit redelijk eenvoudig dit kan oplossen.

Wanneer je nu een product scanned op de camera detecteert het de barcode en wordt je meteen redirect naar de detailpagina.

Het eindresultaat kan je zien bij de volgende link: https://casperdennijs.github.io/css-vuurwerkshow/

## Reflectie
<invullen>
