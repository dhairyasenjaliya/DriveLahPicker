import React, {useEffect, useState, useFocusEffect} from 'react';
import {
  PermissionsAndroid,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import CustomHeader from '../../components/headerComponent';
import moment from 'moment';
import {CustomHour} from '../../constants/utilsConst';

interface IProps {
  navigation: Object;
}
// Global Level Props To Identify Data Coming From Previos Screen

function MainScreen({navigation}) {
  const isFocused = useIsFocused();

  const [pickUpTime, setpickUpTime] = useState<String | any>('');
  const [dropOffTime, setDropOffTime] = useState<String | any>('');
  const [selectedPickupDate, setSelectedPickupDate] = useState<String | any>(
    '',
  );
  const [selectedDropOffDate, setSelectedDropOffDate] = useState<String | any>(
    '',
  );

  useEffect(async () => {
    // effect
    try {
      let pickUpTime = await AsyncStorage.getItem('pickUpTime');
      let pickUpDate = await AsyncStorage.getItem('pickUpDate');
      let dropOffTime = await AsyncStorage.getItem('dropOffTime');
      let dropOffDate = await AsyncStorage.getItem('DropOffDate');
      setpickUpTime(pickUpTime);
      setDropOffTime(dropOffTime);
      setSelectedPickupDate(pickUpDate);
      setSelectedDropOffDate(dropOffDate);
      // console.log('pickUpTime', pickUpTime);
      // value previously stored
    } catch (e) {
      // error reading value
    }
    return () => {};
  }, [isFocused]);

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
        {/* <Text style={styles.subTitleText}>{'21 Jan, 8:00 PM'}</Text>
         */}
        <Text style={styles.subTitleText}>
          {moment(selectedPickupDate).format('DD MMM') +
            `, ` +
            CustomHour[pickUpTime].replace(' ', ':00 ')}
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
          {moment(selectedDropOffDate).format('DD MMM') +
            `, ` +
            CustomHour[dropOffTime].replace(' ', ':00 ')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default MainScreen;
