/* define functions here */

function calculateTotal(quantity, price){
	totalPrice = quantity * price;
	return totalPrice;
}

function outputCartRow(file, title, quantity, price, total){
	document.write('<tr>');
	document.write('<td><img src = "images/' + file +'"></td>');
	document.write('<td>' + title + '</td>');
	document.write('<td class="center">' + quantity + '</td>');
	document.write('<td class="right"> $' + price.toFixed(2) + '</td>');
	document.write('<td class="right"> $' + total.toFixed(2) + '</td>');
	document.write('</tr>')
}



var costs = 0;

function wirteSubtotal(){
	for(var i = 0; i < filenames.length; i++){
		costs += calculateTotal(quantities[i], prices[i]);
	}
	document.write('<tr class="totals">');
	document.write('<td colspan="4"> Subtotal </td>');
	document.write('<td> $' + costs.toFixed(2) + '</td>');
	document.write('</tr>');
}


var taxRate = 0.1;



function calculateTax(amount, taxRate){
	var tax = amount * taxRate;
	return tax;
}



function writeTax(){
	document.write('<tr class="totals">');
	document.write('<td colspan="4"> tax </td>');
	document.write('<td> $' + calculateTax(costs, taxRate).toFixed(2) + '</td>');
	document.write('</tr>');
}

var shippingPrice = 40;
function writeShipping(){
	if(costs > 1000){
		shippingPrice = 0;
	}

	document.write('<tr class="totals">');
	document.write('<td colspan="4"> Shipping </td>');
	document.write('<td> $' + shippingPrice.toFixed(2) + '</td>');
	document.write('</tr>');
}

function grandTotalPrice(subtotal, tax, shipping){
	var gtp = subtotal+tax+shipping;
	return gtp.toFixed(2);
}


function writeGrandTotal(){
	document.write('<tr class="totals focus">');
	document.write('<td colspan="4"> Grand Total </td>');
	document.write('<td> $' + grandTotalPrice(costs, calculateTax(costs, taxRate), shippingPrice) + '</td>');
	document.write('</tr>');
}

