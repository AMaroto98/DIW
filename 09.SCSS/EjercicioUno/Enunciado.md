Volem crear un mini-framework per CSS, per això, emprarem la tecnologia SASS on implementarem una sèrie d'estils que l'usuari podrà agafar per editar el seu codi. Així, creeu un arxiu SASS el qual compleixi les següents condicions:

ESTATS
Primer del tot, crearem 4 estils: success, warning, error i "normal" pels tags "P", "SPAN" i "H1, H2, H3, H4, H5 i H6". Aquests tags poden tenir qualsevol dels estats anteriors, per exemple, un p amb la classe success (<p class="success"), un span amb la classe error (<span class="error") o h3 amb la classe warning (<h3 class="warning"). L'estat "normal" no durà etiqueta, serà el que vingui per defecte si no podem res, és a dir, qualsevol "p" sense classe serà amb l'estil que definirem com a "normal", és a dir, <p class="normal"> NO EXISTEIX, seria <p>.

Respecte els tags, tinguin "estat" o no hem de saber que tots els "P" tindran el text justificat i tots els "Hx" tindran un tamany de font 2em i restant 0.2 progressivament fins a h6, és a dir, H1 = 2em, H2 = 1.8em, H3=1.6 em....

Respecte els estats, hem de saber que "success" té com a color el #2ecc72, "warning" té com a color "f1c40f", error té el color "e74c3c" i l'estil normal té el color "333333". Els seus respectius fons són un 25% més obscurs en el cas de success, warning i error i un 50% més clar en el cas de l'estat normal.

COLOR PERSONALITZAT
A més, l'usuari ha de ser capaç de configurar qualsevol color amb el percentatge de vermell, verd i blau a la classe. Així, color-30-40-10 vol dir un 30% de vermell, un 40% de verd i un 10% de blau, per tant, el primer color, és a dir, color-0-0-0 serà negre i el darrer, color-100-100-100 serà el blanc. A més, també s'ha de permetre per colors de fons mitjançant la classe "colorbg-x-x-x".

TAULES
Les taules han de tenir un borde a totes les cel·les i els bordes, entre ells, no s'han de solapar. Els bordes han de ser d'1px d'ample de color negre.


IMATGES
Les imatges tindran una vora rodona d'un 45% d'inclinació i un tamany de 300px per imatge. A més, les imatges poden tenir (o no) efectes, aquests efectes duraran 3 segons (comptant des de que comença l'efecte fins que fa l'efecte i torna a l'estat inicial). Els efectes seran els següents:
- Blanc i negre
- Sèpia
- Desenfocat: de 0px a 5px
- Tonalitat: de 0 graus a 150 graus - Invertit: de 0 a 0.8
- Obscur: de 1 a 0.5
- Contrast: de 0 a 2

WEBKIT I MOZ
Creeu un mixin el qual rebi 2 paràmetres: propietat i valor. Aleshores, aquest mixin ha de crear les propietats -webkit- i -moz- de les propietats que rebi per paràmetre. Apliqueu aquests mixin a les propietats CSS que ho requereixin.