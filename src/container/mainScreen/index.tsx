import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Third Party Packages Declare
import {useSelector, RootStateOrAny} from 'react-redux';
import moment from 'moment';
// End Third Party Packages Declare

// Custom Packages Declare
import CustomHeader from '../../components/headerComponent';
import {CustomHour} from '../../constants/utilsConst';
import styles from './styles';
// End Custom Packages Declare

function MainScreen({navigation}: any) {
  const pickUpTime = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.pickupTime;
  });

  const dropOffTime = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.dropOffTime;
  });

  const selectedPickupDate = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.pickupDate;
  });

  const selectedDropOffDate = useSelector((state: RootStateOrAny) => {
    return state.dateTimeReducer.dropOffDate;
  });

  const fetchDateTime = (selectedDate: any, selectedTime: any) => {
    let validateDate = selectedDate
      ? moment(selectedDate).format('DD MMM')
      : '';
    let validateTime = selectedTime ? CustomHour[selectedTime] : '';
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
