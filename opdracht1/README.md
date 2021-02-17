# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel

<b>Gekozen user case:</b> "In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken."

Ik heb gekozen om een desktop versie te maken met vier films voorgetoond. Elke film kan aan de lijst worden toegevoegd door op de knop de drukken. Het hartje veranderd naar een ingevuld hartje. 

En voeg een link naar je demo toe.

## interface
Leg de interface uit. In de demo heb je de interface design principles 04 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

<b>Keep users in control</b><br>
De gebruiker kan er voor kiezen om de film toe te voegen aan zijn/haar lijst. Maar er kan ook worden gekozen om deze weer uit te lijst te verwijderen. Zo heeft de gebruiker controle over de acties die worden toegepast. 

<b>Strong visual hierarchies work best</b><br>
Er zijn vier films uitgelicht. Deze vallen onder de "Populair Movies". De gebruiker weet zo dat andere films op dezelfde manier zijn ingedeeld als deze sectie. De films zijn horizontaal op desktop ingedeed.

## code
In v.2 was het alleen mogelijk om op het eerste hart icoontje te klikken inplaats van op de knop zelf. Daarnaast deden de andere knoppen het ook niet. Dit kwam onder andere omdat ik een id gebruikte. Je kunt geen ids voor HTML elementen hergebruiken. Ze moeten uniek zijn. Ook omdat de event handler alleen ingesteld was op het hartje, luistert de button niet naar de klik. Om de hele button te selecteren heb ik querySelectorAll gebruikt. Dit is in v.3 opgelost. 
