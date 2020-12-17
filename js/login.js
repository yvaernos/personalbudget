function getNodeValues() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunction(this);
        }
    };
    //open file
    xmlHttpRequest.open("GET", "xml/login.xml", true);
    //send resquest
    xmlHttpRequest.send();

    function myFunction(xml) {
        var document = xml.responseXML;
        var email = document.getElementsByTagName('email')[0];
        var password = document.getElementsByTagName('password')[0];

        var nodeEmail = email.childNodes[0];
        var nodePassword = password.childNodes[0];

        document.getElementById("button").innerHTML = nodeEmail.nodeValue;
        document.getElementById("button").innerHTML = nodePassword.nodeValue;
    }
}