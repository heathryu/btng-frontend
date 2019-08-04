import { getExchangeRate } from '../../utils';

export const getDestinationAmount = (
  originCurrency,
  destCurrency,
  originAmount
) => {
  return async dispatch => {
    dispatch({ type: 'FETCH_TRANSFER_DETAILS_LOADING' });

    try {
      const exchangeRate = await getExchangeRate(originCurrency, destCurrency);
      console.log("exchnage rate", exchangeRate, originAmount, originCurrency)
      const destinationAmount = (exchangeRate * originAmount).toFixed(2);

      dispatch({
        type: 'FETCH_DESTINATION_AMOUNT_SUCCESS',
        exchangeRate,
        destinationAmount
      });
    } catch (err) {
      dispatch({ type: 'FETCH_DESTINATION_AMOUNT_FAILED', error: err.message });
    }
  };
};
