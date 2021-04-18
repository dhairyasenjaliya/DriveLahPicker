import {
  PICK_UP_DATE,
  PICK_UP_TIME,
  DROP_OFF_DATE,
  DROP_OFF_TIME,
} from '../actionType/type';

const initialData = {};

export default function dateTimeReducer(state = initialData, action: any) {
  switch (action.type) {
    case PICK_UP_DATE:
      return {
        ...state,
        pickupDate: action.payload,
      };
    case PICK_UP_TIME:
      return {
        ...state,
        pickupTime: action.payload,
      };
    case DROP_OFF_DATE:
      return {
        ...state,
        dropOffDate: action.payload,
      };
    case DROP_OFF_TIME:
      return {
        ...state,
        dropOffTime: action.payload,
      };

    default:
      return state;
  }
}
