import axios from 'axios';

const toNgn = {
  USD: 361.5,
  GBP: 439.54,
  NGN: 1
};

const fromNgn = {
  USD: 0.0028,
  GBP: 0.0023,
  NGN: 1
};

export const conversion = conversion => amount => conversion * amount;

export const getExchangeRate = async (originCurrency, destCurrency) => {
  const originUpper = originCurrency.toUpperCase();
  const destUpper = destCurrency.toUpperCase();

  let exchangeRate;

  if (originUpper === 'NGN') {
    exchangeRate = fromNgn[destUpper];
  } else if (destUpper === 'NGN') {
    exchangeRate = toNgn[originUpper];
  } else {
    const resp = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${originCurrency}`
    );

    exchangeRate = resp.data.rates[destCurrency];
  }
  return exchangeRate;
};

export const getDonationAmount = async (rawAmount, donationLimit) => {

  const roundedAmount = Math.ceil(rawAmount / 1000) * 1000;
  let donationAmount = roundedAmount - rawAmount;

  if (donationAmount <= 0) {
    donationAmount += donationLimit;
  } else {
    donationAmount += (donationLimit - 1000);
  }

  return donationAmount;
};
