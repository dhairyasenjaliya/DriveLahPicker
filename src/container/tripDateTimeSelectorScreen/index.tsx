import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  useWindowDimensions,
  FlatList,
  SectionList,
} from 'react-native';
import styles from './styles';
import {CalendarList, Calendar} from 'react-native-calendars';
import moment from 'moment';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

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

  const allHour = [
    '1AM',
    '2AM',
    '3AM',
    '4AM',
    '5AM',
    '6AM',
    '7AM',
    '8AM',
    '9AM',
    '10AM',
    '11AM',
    '12AM',
    '1PM',
    '2PM',
    '3PM',
    '4PM',
    '5PM',
    '6PM',
    '7PM',
    '8PM',
    '9PM',
    '10PM',
    '11PM',
    '12PM',
  ];

  const [routes] = React.useState([
    {key: 'pickUp', title: 'Pickup'},
    {key: 'dropOff', title: 'Drop Off'},
  ]);

  console.log('pickUpDate', pickUpDate);
  // (moment(momentObj).format('YYYY-MM-DD')).toString();

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
        <View style={{alignItems: 'center', paddingVertical: 30}}>
          <Text>21st Jan</Text>
          <View
            style={{
              backgroundColor: '#fdd654',
              height: 32,
              width: 90,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text>8:00 AM</Text>
          </View>

          <FlatList
            data={allHour}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    height: 15,
                    borderLeftWidth: 2,
                    // alignSelf: 'center',
                    borderColor: '#026786',
                  }}
                />
              );
            }}
            contentContainerStyle={{
              borderTopWidth: 2,
              marginTop: 20,
              borderColor: '#026786',
            }}
            horizontal
            pagingEnabled
            renderItem={data => {
              return (
                <TouchableOpacity
                  onPress={() => {}}
                  style={{width: 50, alignItems: 'center'}}>
                  <View
                    style={{
                      height: 30,
                      borderLeftWidth: 2,
                      alignSelf: 'center',
                      borderColor: '#026786',
                    }}
                  />
                  <Text style={{color: '#026786', marginTop: 10}}>
                    {data.item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
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
    let whichTab = props.navigationState.index;
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
