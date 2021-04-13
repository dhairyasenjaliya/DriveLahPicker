import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Colors, Fonts} from '../../constants/globalStyles';

export default StyleSheet.create({
  mainContact: {
    backgroundColor: Colors.perlWhite,
    margin: scale(10),
    borderRadius: scale(10),
    padding: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  headerText: {
    fontSize: scale(15),
    alignSelf: 'center',
    fontFamily: Fonts.helveticaNeueMedium,
  },
  mainGroup: {
    flexDirection: 'row',
  },
  infoContain: {
    paddingHorizontal: scale(10),
    justifyContent: 'center',
  },
  profileContain: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(100),
  },
  nameGroup: {
    fontSize: scale(16),
    fontFamily: Fonts.helveticaNeueCondensedBold,
  },
  numberText: {
    fontSize: scale(14),
    fontFamily: Fonts.helveticaNeueThin,
    color: Colors.greyText,
  },
});
