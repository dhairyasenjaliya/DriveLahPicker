import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import {DefaultImage} from '../../constants/globalStyles';
import call from 'react-native-phone-call';
interface IProps {
  navigation: Object;
  route: Object;
}

const ContactInfoScreen: React.FC<IProps> = ({navigation, route}) => {
  const [contactData] = useState<Object>([route.params.contactData.data]);

  useEffect(() => {}, []);

  const listAllPhoneNumber = (contactNumberAll: any) => {
    const {label, number} = contactNumberAll.item;
    const args = {
      number: number,
      prompt: true,
    };
    return (
      <View style={styles.flexRow}>
        <Text style={styles.labelContain}>{label}</Text>
        <TextInput
          style={styles.textInput}
          value={number}
          onChangeText={() => {
            Alert.alert('Contact Not Editable');
          }}
        />
        <TouchableOpacity
          onPress={() => {
            call(args).catch(console.error);
          }}>
          <Image source={DefaultImage.call} style={styles.callIcon} />
        </TouchableOpacity>
      </View>
    );
  };

  const displayAllInfo = (contactDetail: any) => {
    const {
      displayName,
      hasThumbnail,
      phoneNumbers,
      thumbnailPath,
      givenName,
      familyName,
    } = contactDetail.item;
    // Check If Contact Has Image!
    let checkImage = hasThumbnail
      ? {uri: thumbnailPath}
      : DefaultImage.userDefault;

    return (
      <View style={styles.contactContain}>
        <Image style={styles.profileContain} source={checkImage} />
        <Text style={styles.contactNametext}>
          {givenName + ' ' + familyName}
        </Text>
        {/* Display All Available Contact Number */}
        <FlatList
          data={Object.values(phoneNumbers)}
          renderItem={phone => {
            return listAllPhoneNumber(phone);
          }}
        />
        {/* Display All Available Contact Number End */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={DefaultImage.backArrow}
          style={styles.backArrowContain}
        />
      </TouchableOpacity>
      {/* Display Contact Info */}
      <FlatList
        data={Object.values(contactData)}
        renderItem={data => {
          return displayAllInfo(data);
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContain}
      />
      {/* Display Contact Info End */}
    </SafeAreaView>
  );
};
export default ContactInfoScreen;
