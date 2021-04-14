import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../../constants/globalStyles';

// Third Party Packages Declare
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {TabView, TabBar} from 'react-native-tab-view';
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
  const [defaultSeletedDate] = useState<string | any>(
    moment().format('YYYY-MM-DD'),
  );
  const [markedPickupDate, setMarkedPickupDate] = useState<Array<50> | any>({});
  const [selectedPickupDate, setSelectedPickupDate] = useState<String | any>(
    '',
  );

  const [markedDropOffDate, setMarkedDropOffDate] = useState<Array<50> | any>(
    {},
  );
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
          key={index}
          current={
            index === 0
              ? selectedPickupDate
                ? selectedPickupDate
                : defaultSeletedDate
              : selectedDropOffDate
              ? selectedDropOffDate
              : defaultSeletedDate
          }
          // setSelectedDropOffDate
          minDate={index === 0 ? '' : selectedPickupDate}
          markedDates={
            index === 0
              ? JSON.parse(JSON.stringify(markedPickupDate))
              : JSON.parse(JSON.stringify(markedDropOffDate))
          }
          onDayPress={day => {
            if (index === 0) {
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
                    },
                  },
                },
              });
            } else {
              setSelectedDropOffDate(day.dateString);
              setMarkedDropOffDate({
                [day.dateString]: {
                  customStyles: {
                    container: {
                      backgroundColor: Colors.primaryMellow,
                      borderRadius: 5,
                    },
                    text: {
                      color: Colors.turquoiseSecondary,
                      fontWeight: '700',
                    },
                  },
                },
              });
            }
          }}
          markingType={'custom'}
          enableSwipeMonths
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
            textDisabledColor: '#7fb2c1',
          }}
        />
        <View style={styles.commonHeader}>
          <Text style={styles.commonHeaderText}>Pickup Time</Text>
        </View>
        <View style={styles.dateDisp}>
          <Text style={styles.dateDispText}>
            {index === 0
              ? selectedPickupDate &&
                moment(selectedPickupDate).format('Do MMM')
              : selectedDropOffDate &&
                moment(selectedDropOffDate).format('Do MMM')}
          </Text>
          <View style={styles.timeDisp}>
            {index === 0 && pickUpTime ? (
              <Text style={styles.timeDispText}>
                {pickUpTime ? allHour[pickUpTime] : allHour[19]}
              </Text>
            ) : null}
            {index === 1 && dropOffTime ? (
              <Text style={styles.timeDispText}>
                {dropOffTime ? allHour[dropOffTime] : allHour[19]}
              </Text>
            ) : null}
          </View>

          <View style={styles.alignCenter}>
            <View style={styles.yellowDot} />
            <View style={styles.vertLine} />
          </View>

          <HorizontalPicker
            data={allHour}
            renderItem={displayTimeSliderComponent}
            itemWidth={scale(50)}
            contentContainerStyle={styles.horizontalPicker}
            defaultIndex={
              index === 0
                ? pickUpTime
                  ? pickUpTime
                  : 19
                : dropOffTime
                ? dropOffTime
                : 19
            }
            onChange={data => {
              // setDropOffTime
              setTimeout(() => {
                if (index === 0) {
                  setpickUpTime(data);
                } else {
                  setDropOffTime(data);
                }
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
