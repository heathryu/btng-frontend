const initialState = { value: 0, loading: false, error: '' };

export default function statusPoint(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_STATUS_POINT_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_STATUS_POINT_SUCCESS':
      return {
        ...state,
        value: action.value,
        loading: false
      };
    case 'FETCH_STATUS_POINT_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
