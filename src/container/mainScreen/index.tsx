import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/headerComponent';
import moment from 'moment';

import {useSelector, RootStateOrAny} from 'react-redux';

import {CustomHour} from '../../constants/utilsConst';
import styles from './styles';

function MainScreen({navigation}: any) {
  const pickUpTime = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.pickupTime;
  });

  const dropOffTime = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.dropOffTime;
  });

  const selectedPickupDate = useSelector((state: RootStateOrAny) => {
    console.log(
      'state.dateTimeReducer.pickupDate;',
      state.dateTimeReducer.pickupDate,
    );
    return state.dateTimeReducer.pickupDate;
  });

  const selectedDropOffDate = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.dropOffDate;
  });

  // const [pickUpTime, setpickUpTime] = useState<String | any>(0);
  // const [dropOffTime, setDropOffTime] = useState<String | any>(0);
  // const [selectedPickupDate, setSelectedPickupDate] = useState<String | any>(
  //   '',
  // );
  // const [selectedDropOffDate, setSelectedDropOffDate] = useState<String | any>(
  //   '',
  // );

  // useSelector((state: RootStateOrAny) => {
  //   console.log('useSelector', state);
  //   // pickUpTime = state.dateTimeReducer.pickupDate;
  //   // if (state.dateTimeReducer.pickupDate) {
  //   //   setSelectedPickupDate(state.dateTimeReducer.pickupDate);
  //   // }
  //   // if (state.dateTimeReducer.pickupTime) {
  //   //   setpickUpTime(state.dateTimeReducer.pickupTime);
  //   // }
  //   // if (state.dateTimeReducer.dropOffTime) {
  //   //   setDropOffTime(state.dateTimeReducer.dropOffTime);
  //   // }
  //   // if (state.dateTimeReducer.dropOffDate) {
  //   //   setSelectedDropOffDate(state.dateTimeReducer.dropOffDate);
  //   // }
  // });

  // useEffect(async () => {
  //   console.log('pickUpTime', pickUpTime);
  //   return () => {};
  // }, []);
  const fetchDateTime = (selectedDate: any, selectedTime: any) => {
    let validateDate = selectedDate
      ? moment(selectedDate).format('DD MMM')
      : '';
    let validateTime = selectedTime
      ? CustomHour[selectedTime].replace(' ', ':00 ')
      : '';
    let displayDateTime =
      validateDate && validateTime ? validateDate + ', ' + validateTime : '';
    return displayDateTime;
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={'Date and Time selector'} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('tripDateTimeSelectorScreen', {
            index: 0,
          })
        }
        style={styles.buttonPos}>
        <Text style={styles.titleText}>{'Pickup'}</Text>
        <Text style={styles.subTitleText}>
          {fetchDateTime(selectedPickupDate, pickUpTime)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('tripDateTimeSelectorScreen', {
            index: 1,
          })
        }
        style={styles.buttonPos}>
        <Text style={styles.titleText}>{'Dropoff'}</Text>
        <Text style={styles.subTitleText}>
          {fetchDateTime(selectedDropOffDate, dropOffTime)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default MainScreen;
