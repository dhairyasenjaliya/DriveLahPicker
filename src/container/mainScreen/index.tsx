import React from 'react';
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
import ScreenHeader from '../../components/headerComponent';
import {GradientColors} from '../../constants/globalStyles';
import LinearGradient from 'react-native-linear-gradient';
import {request, PERMISSIONS} from 'react-native-permissions';

interface IProps {
  navigation: Object;
}
// Global Level Props To Identify Data Coming From Previos Screen

const MainScreen: React.FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('aaa')}
        style={styles.buttonPos}>
        <LinearGradient
          colors={GradientColors.buttonGradient}
          style={styles.accessContactButton}>
          <Text style={styles.accessButtonText}>{'View All My Contacts'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
export default MainScreen;
