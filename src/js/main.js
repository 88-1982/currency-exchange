import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import dollarconversion from './services/dollar-conversion.js';
import {convertCurrency, checkCurrency} from './currency-functions.js';


//Checks to see if a number was inputted. Otherwise displays conversion in HTML.
function emptyInput(inputAmount, fromCurrency, convertedAmount) {
  if (inputAmount === "") {
    $("#new-currency").append("Please input an amount");
  } else {
    $("#new-currency").append(`• <br> • <br> • <br><br> ${inputAmount} ${fromCurrency} = ${convertedAmount}`);
  }
}

//Looks for any errors with 200 ok status and displays them in HTML.
function checkAllErrors(conversionResponse) {
  
  if (conversionResponse["result"] === "succuess") {
    
    return conversionResponse;
  } else {
    $("#new-currency").append(`${conversionResponse.result} ${conversionResponse["error-type"]}<br>`);
    return conversionResponse;
  }
}

$(document).ready(function () {
  $(".container").slideDown("slow");
  $("#currency-form").submit(async function (event) {    
    event.preventDefault();
    $("#new-currency").empty();
    let inputAmount = $("input#input-amount").val();
    let fromCurrency = $("#from-currency").val();
    let toCurrency = $("#to-currency").val();
    try {
      console.log();
      let conversionResponse = await dollarconversion.getConversion(fromCurrency);
      console.log(conversionResponse);
      if (conversionResponse === Error) {
        throw Error();
      } else {
        checkAllErrors(conversionResponse);
        
        const rateResult = checkCurrency(conversionResponse, toCurrency, fromCurrency);
        let convertedAmount = convertCurrency(rateResult, inputAmount, toCurrency);
        emptyInput(inputAmount, fromCurrency, convertedAmount);
        // $("#new-currency").slideDown("slow");
        $("#new-currency").text(convertedAmount);
      }
    } catch (error) {
      $("#new-currency").append(`${error["error-type"]}`);
      $("#new-currency").slideDown("slow");
    }
  });
});
