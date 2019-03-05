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
    // i declared the carHTML varible again this time for the value of the html code that is also concatinated to the varible.
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='item'/></td>";
    // 
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

    //
    var itemCost = itemPrice[i] * itemQty[i];
    //
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    //
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

//
document.getElementById("cart").innerHTML = cartHTML;