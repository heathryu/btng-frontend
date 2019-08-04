const initialState = { value: 0, exchangeRate: 0, loading: false, error: '' };

export default function destinationAmount(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DESTINATION_AMOUNT_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_DESTINATION_AMOUNT_SUCCESS':
      return {
        ...state,
        value: action.value,
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
