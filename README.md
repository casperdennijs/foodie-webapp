# Foodie WebApp

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

## Activity Flow Diagram
![Activity Flow Diagram](https://user-images.githubusercontent.com/56598338/224024411-803f5396-89f5-4a20-b000-3952b3010c3d.png)
Na afloop van het eindgesprek heb ik een globale Activity Flow Diagram uitgewerkt wat er per "pagina" gebeurd. Voor alle belangrijke functies geef ik hieronder een uitleg van wat het doet.

### createSkeletons()
Deze functie wordt altijd voor het fetchen uitgevoerd om gedurende fetch een loading state te tonen. Dit gebeurd als je op de pagina komt, je iets aan het zoeken bent of naar de volgende pagina toe gaat. In createSkeletons() wordt er elementen gemaakt die als tijdelijke vervangen bieden voor de data die nog ingeladen worden.
```js
export function createSkeleton() {
    items.innerHTML = "";
    for (let i = 0; i < config.default.count; i++) {
        // Create div
        const item = document.createElement("div");
        item.classList.add("skeleton-item");
        items.appendChild(item);

        // Create image inside div
        const image = document.createElement("div");
        image.classList.add("skeleton-img");
        item.appendChild(image);

        // Create title inside div
        const title = document.createElement("p");
        title.classList.add("skeleton-p");
        item.appendChild(title);

        // Create button inside div
        const button = document.createElement("button");
        button.classList.add("skeleton-button");
        item.appendChild(button);
    }
}
```

### getProducts()
Hiermee fetch ik alle producten (maximaal 24 per pagina) op en laat ik ze vervolgens renderen. Mocht dit niet lukken wordt de render vervangen met een Error. Zoals je ook kan zien begint deze functie met het eerst uitvoeren van de loading state functie createSkeleton().
```js
export function getProducts() {
    createSkeleton();
    fetch("https://nl.openfoodfacts.org/cgi/search.pl?search_terms=" + config.default.searchQuery + "&page=" + config.default.currentPage + "&json=true")
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.page_count == 0) {
                renderEmpty(data);  
            } else {
                renderData(data);
            }
        })
        .catch(err => {
            console.log(err);
            renderError(err);
        });
}
```

### createVideo()
Wanneer je op de Scannen button drukt wordt de createVideo() functie uitgeroepen. Hiermee wordt er een video element gemaakt in de HTML die vervolgens als source je camera pakt. Daarnaast wordt de functie scanProducts() geactiveerd die met een interval van 3 seconden uitgevoerd wordt. Deze functie sluit ook alles weer af als je voor een tweede keer op de button drukt.
```js
export function createVideo() {
    if (cameraStatus == 0) {
        const videoElement = document.createElement("video");
        videoElement.setAttribute("id", "video");
        videoElement.autoplay = true;
        scanSection.appendChild(videoElement);
        scanSection.classList.add("enable");
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const constraints = { 
                video: true,
                audio: false
            }
            navigator.mediaDevices.getUserMedia(constraints).then(stream => videoElement.srcObject = stream);
        }
        scanInterval = setInterval(scanProducts, 3000)
        cameraStatus = 1;
    } else {
        const video = document.querySelector("#video");
        const mediaStream = video.srcObject;
        const tracks = mediaStream.getTracks();
        tracks.forEach(track => track.stop());
        scanSection.classList.remove("enable");
        clearInterval(scanInterval)
        scanSection.innerHTML = ""
        cameraStatus = 0;
    }
}
```

### showDetails(id)
Als je op de Meer info button drukt wordt een id gevraagd die meegenomen wordt op de button en voegt het de style Enabled toe aan de modal element. Vervolgens wordt ook de getProduct() functie opgeroepen waarin de id wordt meegenomen.
```js
export function showDetails(id) {
    modal.classList.add("enabled");
    getProduct(id);
}
```

### getProduct(id)
Deze functie is heel erg vergelijkbaar met getProducts() en fetch ook informatie van de API. Bij deze fetch wordt alleen data van één specifiek product opgehaald, de product die opgehaald wordt is bepaald door de mee gegeven id. Wanneer de fetch is uitgevoerd wordt de data gerenderd op de pagina.
```js
export function getProduct(id) {
    createSkeleton();
    fetch("https://nl.openfoodfacts.org/api/v0/product/" + id + ".json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            renderDetail(data);
        })
        .catch(err => {
            console.log(err);
        });
}
```

### scanProducts()
Met deze functie wordt er gebruik gemaakt van de BarcodeDetector Web API. Hierin maak ik gebruik van de eerdere aangemaakt video en controleert het op barcodes in de stream. Om te voorkomen dat er spam aan detecties gedaan kunnen worden is ervoor gekozen dat de functie in een interval van 3 seconden uitgevoerd wordt. Wanneer er een product gescanned is wordt de gebruiker direct geredirect naar de product detail van de gescande product.
```js
function scanProducts() {
    const video = document.querySelector("#video");

    barcodeDetector
    .detect(video)
    .then((barcodes) => {
        if (barcodes.length == 0) {
            console.log("No barcode found...")
        } else {
            barcodes.forEach((barcode) => {
                console.log(barcode.rawValue);

                const video = document.querySelector("#video");
                const mediaStream = video.srcObject;
                const tracks = mediaStream.getTracks();
                tracks.forEach(track => track.stop());
                scanSection.classList.remove("enable");
                clearInterval(scanInterval)
                scanSection.innerHTML = ""
                cameraStatus = 0;
        
                window.location.hash = "#product/" + barcode.rawValue;
            });
        }
    })
    .catch((err) => {
        console.log(err);
    });
}
```
