import {
  PICK_UP_DATE,
  PICK_UP_TIME,
  DROP_OFF_DATE,
  DROP_OFF_TIME,
} from '../actionType/type';

export function changePickUpDate(Data: any) {
  return {
    type: PICK_UP_DATE,
    payload: Data,
  };
}

export function changePickUpTime(Data: any) {
  return {
    type: PICK_UP_TIME,
    payload: Data,
  };
}

export function changeDropOffDate(Data: any) {
  return {
    type: DROP_OFF_DATE,
    payload: Data,
  };
}

export function changeDropOffTime(Data: any) {
  return {
    type: DROP_OFF_TIME,
    payload: Data,
  };
}
