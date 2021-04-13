import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Contacts from 'react-native-contacts';

// Custom Component

import ScreenHeader from '../../components/headerComponent';
import DisplayContactInfo from '../../components/displayContactInfo';
import styles from './styles';

// Custom Component End
interface IProps {
  navigation: Object;
}

const ContactScreen: React.FC<IProps> = ({navigation}) => {
  const [contact, setContact] = useState<Object>([]);

  useEffect(() => {
    Contacts.getAll().then(data => {
      if (data) {
        if (data) {
          setContact(data);
        }
      }
      return {};
    });
  }, [contact]);

  return (
    <View style={styles.container}>
      <ScreenHeader title={'My Contacts'} />
      {/* Contact List With Custom Component */}
      <FlatList
        data={Object.values(contact)}
        renderItem={data => {
          return (
            <DisplayContactInfo data={data.item} navigation={navigation} />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* Contact List With Custom Component End */}
    </View>
  );
};
export default ContactScreen;
