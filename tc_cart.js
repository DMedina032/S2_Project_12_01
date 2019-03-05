"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Dajah Medina
   Date: 2.27.19   
   
   Filename: tc_cart.js
	
*/
// I declared the var attribut and gave it a varible of orderTotal and set the value of this to 0 to calulate a running total cost of the order initaly starting at 0.
var orderTotal = 0;
// For the next var, I declared the varible cartHTML to contain the html code for the shopping cart that will then look like a table for the user.
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// This is the for loop for the entires in the item array
for (var i = 0; i <= 3; i++) {
    // I declared the carHTML varible again this time for the value of the html code that is also concatinated to the varible.
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
    // I declared the varible catHTML again and gave it the value of the text string for the table data and conatinated that to the varbibles that go along with each symbloe or reprsentation.
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
    //by using the var attribute, I was then able to declare the varible of item cost and multiplyed the price by the quantity.
    var itemCost = itemPrice[i] * itemQty[i];
    //I declared the varible cartHTML again and gave it a value of the text string for the table data for the cost 
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    //I declared the varible orderTotal and gave it the value of the same varible along concatinating it to the itemCost varible
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//By using the docusment.getElementById it was able to go into the html document of the index and get the Id "cart" and called it back the the cartHTML varible.
document.getElementById("cart").innerHTML = cartHTML;