const initialState = {
  destCurrency: '',
  destCurrencySymbol: '',
  destTransferAmount: 0,
  destDonationamount: 0,
  destTotal: 0,
  originCurrency: '',
  originCurrencySymbol: '',
  originTransferAmount: 0,
  originDonationamount: 0,
  originTotal: 0,
  loading: false
};

export default function destinationAmount(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TRANSFER_DETAILS_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_TRANSFER_DETAILS_SUCCESS':
      return {
        destCurrency: action.destCurrency,
        destCurrencySymbol: action.destCurrencySymbol,
        destTransferAmount: action.destTransferAmount,
        destDonationAmount: action.destDonationAmount,
        destTotal: action.destTotal,
        originCurrency: action.originCurrency,
        originCurrencySymbol: action.originCurrencySymbol,
        originTransferAmount: action.originTransferAmount,
        originDonationamount: action.originDonationamount,
        originTotal: action.originTotal,
        loading: false
      };
    case 'FETCH_TRANSFER_DETAILS_FAILED':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
