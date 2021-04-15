import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {DefaultImage} from '../../constants/globalStyles';
import styles from './style';

const ScreenHeader = (props: any) => {
  const {title, goBack, onPress} = props;
  return (
    <View style={styles.backContain}>
      {goBack && (
        <TouchableOpacity onPress={onPress}>
          <Image source={DefaultImage.backArrow} style={styles.backArrow} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
