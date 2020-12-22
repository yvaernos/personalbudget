<?xml version="1.0" encoding="UTF-8"?>

<!--
    Author: Leonardo Amancio
    Student ID: 2017401
    Group: A
    Subject: Interactive Web Applications
    Lecturer: Mikhail Timofeev
    Code version: 1.0.0 - 02 Dec, 2020
-->

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="">
            <head>
                <title>Dashboard</title>
                <meta charset="UTF-8" name="viewport" content="width=device-width,
                initial-scale=1.0"/>
                <link rel="stylesheet" href="css/dashboard.css"/>
                <script src="js/dashboard.js"/>
            </head>
            <body>
                <div id="container">
                    <button type="button" onclick="loadXMLDoc()">Get my collection</button>
                    <br/>
                    <table id="demo"/>
                </div>
                <div id="copyright">Leonardo Amancio - 2017401 - 2020</div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>