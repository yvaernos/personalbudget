<?xml version="1.0" encoding="UTF-8"?>

<!--
    Student Name: Leonardo Amancio
    Student ID: 2017401
    Group: A
    Subject: Interactive Web Applications
    Lecturer: Mikhail Timofeev
    Author: Leonardo Amancio
    Code version: 1.0.0 02 Dec, 2020
    Availability: https://github.com/yvaernos/retail-stock
-->

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="">
            <head>
                <title>Dashboard</title>
                <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0"/><!--
                <link rel="stylesheet" href="css/login.css"/>
                <script src="js/login.js"/>
                -->
            </head>
            <body>
                <div id="container">
                    <table>
                        <thead>
                            <tr>
                                <th>products.product.1._id</th>
                                <th>products.product.0.sku</th>
                                <th>products.product.0.name</th>
                                <th>products.product.0.product_url</th>
                                <th>products.product.0.thumbnail_url</th>
                                <th>products.product.0.price</th>
                                <th>products.product.0.retail_price</th>
                                <th>products.product.0.search_keywords</th>
                                <th>products.product.0.description</th>
                                <th>products.product.0.category</th>
                                <th>products.product.0.category_id</th>
                                <th>products.product.0.brand</th>
                                <th>products.product.0.color</th>
                                <th>products.product.0.width</th>
                                <th>products.product.0.length</th>
                                <th>products.product.0.inventory_count</th>
                                <th>products.product.0.date_created</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="copyright">Leonardo Amancio - 2017401 - 2020</div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>