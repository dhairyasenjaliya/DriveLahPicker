import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backArrowContain: {
    height: scale(30),
    width: scale(30),
    marginTop: scale(20),
    marginLeft: scale(10),
  },
  callIcon: {
    height: scale(25),
    width: scale(25),
    tintColor: Colors.greenCall,
  },
  contactContain: {
    backgroundColor: Colors.perlWhite,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    margin: scale(20),
    padding: scale(10),
    borderRadius: scale(10),
    elevation: 5,
  },
  contactNametext: {
    fontFamily: Fonts.helveticaNeueMedium,
    fontSize: scale(20),
    paddingVertical: scale(10),
  },
  profileContain: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(100),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: scale(40),
    width: scale(150),
    margin: scale(20),
    borderWidth: 1,
    color: Colors.carbonBlack,
    paddingHorizontal: scale(20),
  },
  flatListContain: {
    marginTop: scale(20),
  },
  labelContain: {
    width: '20%',
  },
});
