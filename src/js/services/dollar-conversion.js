export default class dollarconversion {
  static async getConversion(fromCurrency) {
    try {
      const convertResponse = await fetch(`https://v6.exchangerate-api.com/v6/553cb4601a051143412b80f6/latest/${fromCurrency}`);
      if (!convertResponse.ok) {
        throw Error(convertResponse);
      } else {
        return convertResponse.json();
      }
    } catch(error) {
      return error;
    }
  }
}