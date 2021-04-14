import React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {DefaultImage} from '../../constants/globalStyles';
import styles from './style';

const ScreenHeader = (props: any) => {
  const {title, goBack} = props;
  return (
    <View style={styles.backContain}>
      {goBack && (
        <Image source={DefaultImage.backArrow} style={styles.backArrow} />
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
