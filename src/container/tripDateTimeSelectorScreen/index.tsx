import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Third Party Packages Declare
import {Calendar, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {TabView, TabBar} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import {scale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

// End Third Party Packages Declare

// Custom Packages Declare
import styles from './styles';
import HeaderCoponent from '../../components/headerComponent';
import {CustomHour} from '../../constants/utilsConst';
import {Colors} from '../../constants/globalStyles';

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

function TripDateTimeSelectorScreen({navigation, route}) {
  // Used For Tab Size
  const layout = useWindowDimensions();

  // Declare All Local State Used
  const [index, changeTab] = React.useState(route.params.index);
  // Time Set
  const [pickUpTime, setpickUpTime] = React.useState(19);
  const [dropOffTime, setDropOffTime] = React.useState(21);
  // Date Set
  const [defaultSeletedDate] = useState<string | any>(
    moment().format('YYYY-MM-DD'),
  );
  const [markedPickupDate, setMarkedPickupDate] = useState<Array<50> | any>({
    [moment().format('YYYY-MM-DD')]: {
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
  const [selectedPickupDate, setSelectedPickupDate] = useState<String | any>(
    moment().format('YYYY-MM-DD'),
  );

  const [markedDropOffDate, setMarkedDropOffDate] = useState<Array<50> | any>({
    [moment().add(1, 'day').format('YYYY-MM-DD')]: {
      // Custom Style Object We Cant Access From Styles.tsx
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
  const [selectedDropOffDate, setSelectedDropOffDate] = useState<String | any>(
    moment().add(1, 'day').format('YYYY-MM-DD'),
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

  const displayTimeSliderComponent = item => {
    let validateTime = item && item.replace(' ', '');
    return (
      <View>
        <View style={styles.timeComponentMain}>
          <View style={styles.timeSecondaryComp} />
          <Text style={styles.hourText}>{validateTime}</Text>
        </View>
      </View>
    );
  };

  const saveTripDates = async () => {
    try {
      await AsyncStorage.setItem('pickUpTime', pickUpTime.toString());
      await AsyncStorage.setItem('pickUpDate', selectedPickupDate);
      await AsyncStorage.setItem('dropOffTime', dropOffTime.toString());
      await AsyncStorage.setItem('DropOffDate', selectedDropOffDate);
      navigation.goBack();
    } catch (e) {
      console.log('Error In Saving ');
      // saving error
    }
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
              setSelectedDropOffDate(day.dateString);
              setMarkedPickupDate({
                [day.dateString]: {
                  // Custom Style Object We Cant Access From Styles.tsx
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
            } else {
              setSelectedDropOffDate(day.dateString);
              setMarkedDropOffDate({
                [day.dateString]: {
                  // Custom Style Object We Cant Access From Styles.tsx
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
            dayTextColor: Colors.primaryTeal,
            textDisabledColor: Colors.disableDate,
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
                {pickUpTime ? CustomHour[pickUpTime] : CustomHour[19]}
              </Text>
            ) : null}
            {index === 1 && dropOffTime ? (
              <Text style={styles.timeDispText}>
                {dropOffTime ? CustomHour[dropOffTime] : CustomHour[19]}
              </Text>
            ) : null}
          </View>

          <View style={styles.alignCenter}>
            <View style={styles.yellowDot} />
            <View style={styles.vertLine} />
          </View>

          <HorizontalPicker
            key={index}
            data={CustomHour}
            renderItem={displayTimeSliderComponent}
            itemWidth={scale(50)}
            snapTimeout={50}
            contentContainerStyle={styles.horizontalPicker}
            defaultIndex={
              index === 0
                ? pickUpTime
                  ? pickUpTime
                  : 19
                : dropOffTime
                ? dropOffTime
                : 21
            }
            onChange={data => {
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
          <TouchableOpacity
            onPress={() => {
              index === 0 ? changeTab(1) : saveTripDates();
            }}
            style={styles.customButton}>
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
            // console.log(route);
            return (
              <View>
                <Text style={styles.tabTitle}>
                  {
                    // '21 Jan, 8:00 PM
                    route.title === 'Pickup'
                      ? selectedPickupDate &&
                        moment(selectedPickupDate).format('DD MMM') +
                          `${
                            pickUpTime
                              ? ', ' +
                                CustomHour[pickUpTime].replace(' ', ':00 ')
                              : ''
                          }`
                      : selectedDropOffDate &&
                        moment(selectedDropOffDate).format('DD MMM') +
                          `${
                            dropOffTime
                              ? ', ' +
                                CustomHour[dropOffTime].replace(' ', ':00 ')
                              : ''
                          }`
                  }
                </Text>
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
      <HeaderCoponent
        onPress={() => navigation.goBack()}
        goBack={true}
        title={'Select your trip dates'}
      />
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
