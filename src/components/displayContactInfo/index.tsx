import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {DefaultImage} from '../../constants/globalStyles';

import styles from './style';

const DisplayContactInfo = (props: any) => {
  const {data, navigation} = props;

  const {
    givenName,
    familyName,
    phoneNumbers,
    hasThumbnail,
    thumbnailPath,
  } = data;

  // Check If Contact Has Image!
  let checkImage = hasThumbnail
    ? {uri: thumbnailPath}
    : DefaultImage.userDefault;

  const displayAvailableNumber = (contactSubData: any) => {
    const {label, number} = contactSubData.item;
    return (
      <View>
        <Text style={styles.numberText}>{label + ' : ' + number}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('contactInfoScreen', {contactData: {data}})
      }
      style={styles.mainContact}>
      <View style={styles.mainGroup}>
        <Image style={styles.profileContain} source={checkImage} />
        <View style={styles.infoContain}>
          <View style={styles.mainGroup}>
            <Text style={styles.nameGroup}>{givenName + ' '}</Text>
            <Text style={styles.nameGroup}>{familyName}</Text>
          </View>
          {/* Find Avaiable Number type */}
          <FlatList
            data={phoneNumbers}
            renderItem={(contactData: Object) => {
              return displayAvailableNumber(contactData);
            }}
          />
          {/* Find Avaiable Number Type End */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DisplayContactInfo;
