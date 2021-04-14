import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors, Fonts} from '../../constants/globalStyles';

// Third Party Packages Declare
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {scale} from 'react-native-size-matters';
// End Third Party Packages Declare

// Custom Packages Declare
import styles from './styles';
import HeaderCoponent from '../../components/headerComponent';
// End Custom Packages Declare

// LocaleConfig.locales['fr'] = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'Octobre',
//     'Novembre',
//     'Décembre',
//   ],
//   monthNamesShort: [
//     'Janv.',
//     'Févr.',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juil.',
//     'Août',
//     'Sept.',
//     'Oct.',
//     'Nov.',
//     'Déc.',
//   ],
//   dayNames: [
//     'Dimanche',
//     'Lundi',
//     'Mardi',
//     'Mercredi',
//     'Jeudi',
//     'Vendredi',
//     'Samedi',
//   ],
//   dayNamesShort: ['loda.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//   today: "Aujourd'hui",
// };
// LocaleConfig.defaultLocale = 'fr';

// Global Level Props To Identify Data Coming From Previos Screen
interface IProps {
  navigation: Object;
}

function TripDateTimeSelectorScreen({navigation}) {
  // Used For Tab Size
  const layout = useWindowDimensions();

  // Declare All Local State Used
  const [index, changeTab] = React.useState(0);
  // Time Set
  const [pickUpTime, setpickUpTime] = React.useState(0);
  const [dropOffTime, setDropOffTime] = React.useState(0);
  // Date Set
  const [defaultSeletedDate, setdefaultSeletedDate] = useState<string | any>(
    moment().format('YYYY-MM-DD'),
  );
  const [markedPickupDate, setMarkedPickupDate] = useState<Array | any>({});
  const [selectedPickupDate, setSelectedPickupDate] = useState<String | any>(
    '',
  );

  const [markedDropOffDate, setMarkedDropOffDate] = useState<Array | any>({});
  const [selectedDropOffDate, setSelectedDropOffDate] = useState<String | any>(
    '',
  );

  // End of Declared Local State Used

  useEffect(() => {
    return () => {};
  }, [pickUpTime]);

  // Route Parameters
  const [routes] = React.useState([
    {key: 'pickUp', title: 'Pickup'},
    {key: 'dropOff', title: 'Drop Off'},
  ]);
  // Route Parameters End

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

  const displayTimeSliderComponent = item => {
    return (
      <View>
        <View style={styles.timeComponentMain}>
          <View style={styles.timeSecondaryComp} />
          <Text style={styles.hourText}>{item}</Text>
        </View>
      </View>
    );
  };

  const pickUpCalander = () => {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.pickUpCal}>
        <Calendar
          // onMonthChange={month => {
          //   // console.log('month changed', month);
          // }}
          onDayPress={day => {
            setSelectedPickupDate(day.dateString);
            setMarkedPickupDate({
              [day.dateString]: {
                customStyles: {
                  container: {
                    backgroundColor: Colors.primaryMellow,
                    borderRadius: 5,
                  },
                  text: {
                    color: Colors.turquoiseSecondary,
                    fontWeight: '700',
                    // fontFamily: Fonts.MuseoSansRounded3,
                  },
                },
              },
            });
          }}
          markingType={'custom'}
          enableSwipeMonths
          current={selectedPickupDate ? selectedPickupDate : defaultSeletedDate}
          markedDates={JSON.parse(JSON.stringify(markedPickupDate))}
          hideExtraDays={true}
          style={styles.calenderHeight}
          firstDay={1}
          showWeekNumbers={false}
          monthFormat={'MMMM'}
          theme={{
            arrowColor: Colors.turquoiseSecondary,
            textDayFontSize: 18,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 18,
            monthTextColor: Colors.turquoiseSecondary,
            dayTextColor: Colors.turquoiseSecondary,
            textDisabledColor: 'grey',
            // textMonthFontFamily: Fonts.MuseoSansRounded5,
          }}
        />
        <View style={styles.commonHeader}>
          <Text style={styles.commonHeaderText}>Pickup Time</Text>
        </View>
        <View style={styles.dateDisp}>
          <Text style={styles.dateDispText}>21st Jan</Text>
          <View style={styles.timeDisp}>
            <Text style={styles.timeDispText}>8:00 AM</Text>
          </View>

          <View style={styles.alignCenter}>
            <View style={styles.yellowDot} />
            <View style={styles.vertLine} />
          </View>

          <HorizontalPicker
            data={allHour}
            renderItem={displayTimeSliderComponent}
            itemWidth={scale(50)}
            style={{}}
            contentContainerStyle={styles.horizontalPicker}
            defaultIndex={pickUpTime ? pickUpTime : 19}
            onChange={data => {
              setTimeout(() => {
                setpickUpTime(data);
              }, 100);
            }}
          />
          <View style={styles.slideTextContain}>
            <Text style={styles.slideText}>Slide to select hour</Text>
          </View>
          <TouchableOpacity style={styles.customButton}>
            <Text style={styles.buttonText}>{`Save & Continue`}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  const _renderTabBar = (props: {
    navigationState: {routes: any[]};
    position: Animated.Adaptable<number>;
  }) => {
    return (
      <View>
        <TabBar
          {...props}
          indicatorStyle={styles.tabIndicatorStyle}
          style={styles.tabStyle}
          renderLabel={({route}) => {
            // focused, color
            return (
              <View>
                <Text style={styles.tabTitle}>{'21 Jan, 8:00 PM'}</Text>
                <Text style={styles.tabSubTitle}>
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
      </View>
    );
  };

  return (
    // InternalTab View
    <View style={styles.container}>
      <HeaderCoponent goBack={true} title={'Select your trip dates'} />
      {/* {pickUpCalander()} */}
      <TabView
        navigationState={{index, routes}}
        renderScene={({route}) => {
          switch (route.key) {
            case 'pickUp':
              return pickUpCalander();
            case 'dropOff':
              return pickUpCalander();
          }
        }}
        onIndexChange={changeTab}
        initialLayout={{width: layout.width}}
        swipeEnabled={false}
        renderTabBar={_renderTabBar}
        style={styles.tabStyle}
      />
    </View>
  );
}
export default TripDateTimeSelectorScreen;
