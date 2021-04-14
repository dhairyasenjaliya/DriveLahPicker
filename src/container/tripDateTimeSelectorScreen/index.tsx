import React, {useState, useEffect} from 'react';
import {View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {scale} from 'react-native-size-matters';

interface IProps {
  navigation: Object;
}
// Global Level Props To Identify Data Coming From Previos Screen

const TripDateTimeSelectorScreen: React.FC<IProps> = ({navigation}) => {
  const [pickUpDate, setPickUpDate] = useState<Date>(
    moment().format('YYYY-MM-DD'),
  );
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [pickUpTime, setpickUpTime] = React.useState(0);

  const allHour = [
    '1 AM',
    '2 AM',
    '3 AM',
    '4 AM',
    '5 AM',
    '6 AM',
    '7 AM',
    '8 AM',
    '9 AM',
    '10 AM',
    '11 AM',
    '12 AM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM',
    '6 PM',
    '7 PM',
    '8 PM',
    '9 PM',
    '10 PM',
    '11 PM',
    '12 PM',
  ];

  const [routes] = React.useState([
    {key: 'pickUp', title: 'Pickup'},
    {key: 'dropOff', title: 'Drop Off'},
  ]);

  console.log('pickUpDate', pickUpDate);
  // (moment(momentObj).format('YYYY-MM-DD')).toString();

  const rednerItem = (item, index) => {
    // pickUpTime
    return (
      <View>
        <View style={{width: 60, alignItems: 'center'}}>
          <View
            style={{
              height: 30,
              borderLeftWidth: 2,
              alignSelf: 'center',
              borderColor: '#026786',
              zIndex: 100,
            }}
          />
          <Text style={{color: '#026786', marginTop: 10}}>{item}</Text>
        </View>
      </View>
    );
  };

  const pickUpCalander = () => {
    return (
      <View style={{backgroundColor: '#FFF'}}>
        <Calendar
          // current={pickUpDate}
          onDayPress={day => {
            // console.log('da', day);
            setPickUpDate(day.dateString);
          }}
          // markingType={'multi-dot'}
          // monthFormat={'MMMM'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          showWeekNumbers={false}
          enableSwipeMonths={true}
          theme={{
            selectedDayBackgroundColor: '#00adf5',
            // calendarBackground: '#ffffff',
            // textSectionTitleColor: '#b6c1cd',

            // selectedDayTextColor: '#ffffff',
            // todayTextColor: '#00adf5',
            // dayTextColor: '#2d4150',
            // textDisabledColor: '#d9e1e8',
            // // dotColor: '#00adf5',
            // selectedDotColor: '#026786',
            arrowColor: '#026786',
            // // disabledArrowColor: '#d9e1e8',
            monthTextColor: '#026786',
            // // indicatorColor: 'blue',
            // textDayFontWeight: '300',
            // textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          style={{
            height: 370,
          }}
          markingType={'custom'}
          markedDates={{
            '2021-04-15': {
              customStyles: {
                container: {
                  backgroundColor: '#fdd654',
                  borderRadius: 5,
                },
                text: {
                  color: '#026786',
                  fontWeight: 'bold',
                },
              },
            },
          }}
        />
        <View style={styles.commonHeader}>
          <Text style={styles.commonHeaderText}>Pickup Time</Text>
        </View>
        <View style={{alignItems: 'center', paddingTop: 10}}>
          <Text>21st Jan</Text>
          <View
            style={{
              backgroundColor: '#fdd654',
              height: 32,
              width: 90,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 10,
              zIndex: 200,
            }}>
            <Text>8:00 AM</Text>
          </View>

          <View style={{alignContent: 'center'}}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: '#fdd654',
                position: 'absolute',
                borderRadius: 50,
                alignSelf: 'center',
                top: scale(10),
                // zIndex: 900,
              }}
            />
            <View
              style={{
                borderWidth: 1,
                position: 'absolute',
                top: scale(-30),
                // right: scale(24),
                height: scale(40),
                borderColor: '#026786',
              }}
            />
          </View>

          <HorizontalPicker
            data={allHour}
            renderItem={rednerItem}
            itemWidth={60}
            style={{}}
            contentContainerStyle={{
              borderTopWidth: 2,
              marginTop: 20,
              borderColor: '#026786',
              paddingHorizontal: scale(150),
            }}
            defaultIndex={pickUpTime}
            onChange={data => {
              console.log(data);
              setTimeout(() => {
                setpickUpTime(data);
              }, 100);
            }}
          />
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Text>Slide to select hour</Text>
          </View>
          <TouchableOpacity
            style={{
              // position: 'absolute',
              // bottom: 0,
              backgroundColor: '#00a4ad',
              height: scale(40),
              width: '90%',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: scale(20),
            }}>
            <Text>Save & Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const PickUpDateTime = () => pickUpCalander();

  const DropOffDateTime = () => pickUpCalander();

  const renderScene = SceneMap({
    pickUp: PickUpDateTime,
    dropOff: DropOffDateTime,
  });

  const _renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: Animated.Adaptable<number>;
  }) => {
    // let whichTab = props.navigationState.index;
    // const {theme} = this.props.appTheme;
    return (
      <View style={{opacity: 10, backgroundColor: 'red'}}>
        <TabBar
          {...props}
          indicatorStyle={{
            backgroundColor: '#00a4ad',
            height: 5,
            borderRadius: 10,
          }}
          style={{
            // height: scale(40),
            backgroundColor: '#FFF',
            // alignItems: 'flex-end',
            // borderTopLeftRadius: scale(15),
            // borderTopRightRadius: scale(15),
          }}
          renderLabel={({route, focused, color}) => {
            return (
              <View>
                <Text
                  style={{color: '#026786', fontWeight: '700', fontSize: 18}}>
                  {'21 Jan, 8:00 PM'}
                </Text>
                <Text
                  style={{color: '#408ca3', fontWeight: '500', fontSize: 12}}>
                  {route.title === 'Pickup'
                    ? 'Pickup Date & Time'
                    : 'Drop-off Date & Time'}
                </Text>
              </View>
            );
          }}
        />
        <View style={styles.commonHeader}>
          <Text style={styles.commonHeaderText}>
            {index === 0 ? 'Pickup Date' : 'Drop-off Date'}
          </Text>
        </View>
        {/* <View style={{backgroundColor: 'red', flex: 1}} /> */}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      swipeEnabled={false}
      renderTabBar={_renderTabBar}
      style={{backgroundColor: '#FFF'}}
    />
  );
};
export default TripDateTimeSelectorScreen;
