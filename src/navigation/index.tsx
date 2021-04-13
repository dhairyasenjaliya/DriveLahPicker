import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Define All Screen

import MainScreen from '../container/mainScreen';
import TripDateTimeSelectorScreen from '../container/tripDateTimeSelectorScreen';
import {SafeAreaView} from 'react-native-safe-area-context';

// Define End

const Stack = createStackNavigator();

class Navigator extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {/* Define All Screen As Component */}
            {/* <Stack.Screen name="mainScreen" component={MainScreen} /> */}
            <Stack.Screen
              name="tripDateTimeSelectorScreen"
              component={TripDateTimeSelectorScreen}
            />

            {/* Define All Screen As Component End */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default Navigator;
