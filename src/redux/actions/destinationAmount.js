import axios from 'axios';

export const getDestinationAmount = (
  originCurrency,
  destCurrency,
  originAmount
) => {
  return async dispatch => {
    dispatch({ type: 'FETCH_DESTINATION_AMOUNT_LOADING' });

    try {
      // TODO: Point it to mock that allows Niara NGN currency
      const resp = await axios.get(
        `https://api.exchangeratesapi.io/latest?base=${originCurrency}`
      );

      const exchangeRate = resp.data.rates[destCurrency];
      const destinationAmount = exchangeRate * originAmount;

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
