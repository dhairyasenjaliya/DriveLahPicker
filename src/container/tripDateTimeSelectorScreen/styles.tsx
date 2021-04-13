import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  commonHeader: {
    height: scale(45),
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    paddingLeft: scale(30),
  },
  commonHeaderText: {
    color: '#026786',
    fontSize: scale(16),
    fontWeight: 'bold',
  },
});
