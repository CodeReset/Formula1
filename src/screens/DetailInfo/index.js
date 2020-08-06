import React from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';

import {styles} from './style';
import CopyRight from '../../components/CopyRight';

const DetailInfo = ({route}) => {
  const {driverInfo} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.containerAvatar}
        source={require('../../assets/images/driver.png')}
      />
      <Text style={styles.containerText}>Name: {driverInfo.givenName}</Text>
      <Text style={styles.containerText}>
        FamilyName: {driverInfo.familyName}
      </Text>
      <Text style={styles.containerText}>Birth: {driverInfo.dateOfBirth}</Text>
      <Text style={styles.containerText}>
        Nationality: {driverInfo.nationality}
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL(driverInfo.url)}>
        <Text style={styles.containerTextLink}>Read more</Text>
      </TouchableOpacity>

      <View style={styles.copyRightWrapper}>
        <CopyRight />
      </View>
    </View>
  );
};

export default DetailInfo;
