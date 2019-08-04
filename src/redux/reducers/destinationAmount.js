const initialState = { destinationAmount: 0, exchangeRate: 0, loading: false, error: '' };

export default function destinationAmount(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DESTINATION_AMOUNT_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_DESTINATION_AMOUNT_SUCCESS':
      console.log('success', action);
      return {
        ...state,
        destinationAmount: action.destinationAmount,
        exchangeRate: action.exchangeRate,
        loading: false
      };
    case 'FETCH_DESTINATION_AMOUNT_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
