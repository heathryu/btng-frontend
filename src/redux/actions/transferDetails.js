import { getExchangeRate } from '../../utils';

const currencyToSymbol = {
  GBP: '£',
  NGN: '₦',
  USD: '$'
};

export const getTransferDetails = (
  originCurrency,
  destCurrency,
  originAmount,
  destAmount
) => {
  return async dispatch => {
    dispatch({ type: 'FETCH_TRANSFER_DETAILS_LOADING' });
    console.log('fetch started');
    try {
      const destCurrencyUpper = destCurrency.toUpperCase();
      const originCurrencyUpper = originCurrency.toUpperCase();

      const destCurrencySymbol = currencyToSymbol[destCurrencyUpper];
      const originCurrencySymbol = currencyToSymbol[originCurrencyUpper];

      // TODO: Calculate suitable destDonationAmount
      const destDonationAmount = 3000

      const destTotal = destAmount + destDonationAmount;

      const exchangeRateReversed = await getExchangeRate(destCurrencyUpper, originCurrencyUpper);

      const originDonationAmount = (exchangeRateReversed * destDonationAmount).toFixed(2);

      const originTotal = originAmount + originDonationAmount;

      dispatch({
        type: 'FETCH_TRANSFER_DETAILS_SUCCESS',
        destCurrency: destCurrencyUpper,
        destCurrencySymbol,
        destTransferAmount: destAmount,
        destDonationAmount,
        destTotal,
        originCurrency: originCurrencyUpper,
        originCurrencySymbol,
        originTransferAmount: originAmount,
        originDonationAmount,
        originTotal
      });
    } catch (err) {
      dispatch({ type: 'FETCH_TRANSFER_DETAILS_FAILED', error: err.message });
    }
  };
};
