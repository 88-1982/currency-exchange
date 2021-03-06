import { error } from "jquery";

export function convertCurrency(rateResult, inputAmount, toCurrency){
  if (isNaN(rateResult) === true) {
    return rateResult;
  } else {
    return (`${rateResult * inputAmount} ${toCurrency}`);
  }
}

export function checkCurrency(conversionResponse, toCurrency,fromCurrency) {
  if (conversionResponse.result === "error" &&  conversionResponse["error-type"] === "unsupported-code") {
    return (`${fromCurrency} is not a currency in our database.`);
  }
  else if (toCurrency in conversionResponse.conversion_rates === false) {
    return (`${toCurrency} is not a currency in our database`);
  } else {
    let conversionRate = conversionResponse.conversion_rates[toCurrency];
    return (`${conversionRate}`);
  }
}