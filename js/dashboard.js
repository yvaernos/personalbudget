/*
    Author: Leonardo Amancio
    Student ID: 2017401
    Group: A
    Subject: Interactive Web Applications
    Lecturer: Mikhail Timofeev
    Code version: 1.0.0 - 02 Dec, 2020
*/

function loadXMLDoc() {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    xmlHttpRequest.open("GET", "xml/inventory.xml" , true);
    xmlHttpRequest.send();
}
function myFunction(xml) {
    let i;
    let xmlDoc = xml.responseXML;
    let table="<tr>" +
        "<th>SKU</th>" +
        "<th>Name</th>" +
        "<th>Product URL</th>" +
        "<th>Thumbnail URL</th>" +
        "<th>Price</th>" +
        "<th>Retail Price</th>" +
        "<th>Search Keywords</th>" +
        "<th>Description</th>" +
        "<th>Category</th>" +
        "<th>Category ID</th>" +
        "<th>Brand</th>" +
        "<th>Colour</th>" +
        "<th>Width</th>" +
        "<th>Length</th>" +
        "<th>Inventory Count</th>" +
        "<th>Date</th>" +
        "</tr>";

    let x = xmlDoc.getElementsByTagName("product");
    for (i = 0; i <x.length; i++) {
        table +=
            "<tr><td>" +
            x[i].getElementsByTagName("sku")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("product_url")[0].childNodes[0].nodeValue +
            "</td><td>"+
            x[i].getElementsByTagName("thumbnail_url")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("retail_price")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("search_keywords")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("category_id")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("colour")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("width")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("length")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("inventory_count")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("date_created")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}