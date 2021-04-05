# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Demo omschrijving
Random kattenplaatjes met de cat API Mijn site bestaat uit een carousel waarvan de afbeeldingen uit JSON data wordt gehaald. Er zijn 100 random kattenplaatjes te zien en je kan de carousel bedienen met je muis en linker en rechter keys. 

https://jessieverburg.github.io/frontend-voor-designers-2021/opdracht3/v2/

## interface
Leg de interface uit.

<b> In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan? </b>
  
<b>04. Keep users in control</b>  
  
Ik heb de een icon in de knoppen gebruikt zodat de gebruiker weet dat er naar links en rechts kan worden genavigeerd. Onder de carousel is aangegeven dat er ook de linker en rechter keys kan worden gebruikt. 
  
<b>08. Provide a natural next step</b>  

<b>09. Appearance follows behavior</b>  
  
<b>11. Appearance follows behavior</b>  
  

<b>In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?</b> <br>
In de demo is een MouseEvent en een KeyboardEvent aanwezig. Het MouseEvent 
  
  
IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?


## code
Leg de code uit.

In de comments heb ik geprobeerd de code voor mijzelf duidelijker te maken en zal hier wat dieper op in gaan. Ik had besloten om niet verder te gaan met mijn vorige carousel van opdracht 2 maar om een carousel plugin te gebruiken van uit de jQuery libraries. Ik heb zelf nooit eerder met jQuery gewerkt maar omdat ik dit regelmatig voorbij zie komen, besloot ik jQuery te gebruiken voor deze opdracht. De code voor de carousel is een bestaande code gevonden op Codepen, waarvan ik de slides heb vervangen door de afbeeldingen in de Cat API. In mijn eerste versie ging ik aan de slag met de XMLHttpRequest maar heb in mijn uiteindelijke versie Fetch gebruikt. .....dwdwdwejii 

Bronnen:
https://codepen.io/doodlemarks/pen/aFcly?editors=1010

De HTML bestaat uit een script tag om de jQuery carousel plugin in te laden. In de slider div zijn de rechter en linker knoppen aangegeven door een code (&gt; >) (&lt <) die in de Javascript code aangestuurd worden. Daarnaast bestaat de HTML uit een andere div waarin een checkbox wordt gemaakt om de autoplay aan en uit te zetten, dit wordt ook in Javascript aangestuurd.

``````html
<body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  
    <h1>Random cat pics</h1>
  
    <div id="slider">
        <a href="#" class="control_next">&gt;</a>
        <a href="#" class="control_prev">&lt;</a>
        <ul id="sliderUL"></ul>
    </div>

    <div class="slider_option">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">Autoplay Slider</label>
    </div>

    <div class="text">
        <p>Gebruik je muis of de linker en rechter keys om te navigeren.</p>
    </div>

    <script src="script.js"></script>

</body>

``````

In de code komen dollar tekens voor. Dit is omdat jQuery gebruikt wordt in de code. De dollar teken is een aanduiding voor variabelen en functies. 
De eerste regels code bestaan uit de autoplay. De checkbox wordt geselecteerd en er wordt een change event meegegeven. Hierdoor wordt de checkbox geselecteerd wanneer je erop klikt. De setInterval() methode roept een functie aan en voert deze uit op basis van de intervallen, in dit geval 3000 (3 sec). MoveRight zorgt ervoor dat de afbeelding de rechterkant op gaan. 

Daarna worden er 4 variabelen aangemaakt, let slideCount, slideWidth, slideHeight, sliderUlWidth. Deze worden even later gedefinieerd. 

De derde stap wordt er fetch gebruikt voor het ophalen van de API. Het is een JSON bestand met 100 verschillende kattenplaatjes. Eerst wordt er een .json bestand opgehaald. Wanneer de fetch succesvol is, wordt de data gelezen en geparst met json() zodat het gebruikt kan worden. 
Door $('#sliderUL').html wordt de sliderUL uit de HTML opgehaald. De map methode maakt een nieuwe array aan. De url wordt opegaald en de join() methode geeft de array terug als een string. Daarna worden de let slideCount, slideWidth, slideHeight, sliderUlWidth gedefinieerd. De eigenschap .lenght

``````javascript
// Functie voor de autoplay
$(function () {
    // De checkbox wordt geselecteerd. Een interval van 3000 wordt meegegeven
    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000);
    });
    
    let slideCount, slideWidth, slideHeight, sliderUlWidth

    fetch('https://api.thecatapi.com/v1/images/search?limit=100&mime_types=&order=Random&size=small&page=0&sub_id=demo-de0f69')
        .then(response => response.json())
        .then(data => {
            $('#sliderUL').html(data.map(({
                url
            }) => `<li><img src="${url}" /></li>`).join(""));
            slideCount = $('#slider ul li').length;
            console.log($('#slider ul li').length)
            slideWidth = $('#slider ul li').width();
            slideHeight = $('#slider ul li').height();
            sliderUlWidth = slideCount * slideWidth;
            $('#slider').css({
                width: slideWidth,
                height: slideHeight
            });

            $('#slider ul').css({
                width: sliderUlWidth,
                marginLeft: -slideWidth
            });
            $('#slider ul li:last-child').prependTo('#slider ul');
        });

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    $(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".a.control_prev").click();
       moveLeft();
    }
    if (e.keyCode === 39) {
       // Next
       $(".a.control_next").click();
       moveRight();
    }
});

});

