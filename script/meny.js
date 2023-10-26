//<div class="resten1"><a href="index.html">Start</a></div>


function buildMenu() {
    var links = [
        ["Startsidan", "index.html"],
        ["Produkter", "Produkter.html"],
        ["Kontakta oss", "Kontakt.html"],
        ["Media", "Media.html"],
        ["Om Oss", "omoss.html"]
    ];

    var menyHtml = "";
    for (var i = 0; i < links.length; i++) {
    //    menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>";
    menyHtml += "<div class='resten1'><a href='" + links[i][1] + "'>" + links[i][0] + "</a></div>"
    }

    var menyElement = document.getElementById("Meny");
    if (menyElement) {
        menyElement.innerHTML = menyHtml;
    }
}

// Anropa funktionen för att bygga menyn när sidan laddas
window.onload = buildMenu;