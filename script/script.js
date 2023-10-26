function buildMenu()

{
    var links = [
        ["Startsidan", "index.html"],
        ["Produkter", "Produkter.html"],
        ["Kontakta oss", "Kontakt.html"],
        ["Media", "Media.html"],
        ["Om Oss", "omoss.html"]

    ]

    var menyHtml =""
    for(var i = 0; i < links.length; i = i + 1)

    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"

    }

    document.getElementById("Meny").innerHTML = menyHtml

}
