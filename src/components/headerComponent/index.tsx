import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './style';

const ScreenHeader = (props: any) => {
  const {title} = props;
  return (
    <View style={styles.backContain}>
      <SafeAreaView>
        <Text style={styles.headerText}>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

export default ScreenHeader;
