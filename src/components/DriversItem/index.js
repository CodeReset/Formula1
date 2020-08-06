import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './style';

const DriversItem = ({driver, index, goToDetail, goToRaceInfo}) => {
  return (
    <View style={styles.containerItem}>
      <Image
        style={styles.containerItemFlag}
        source={{
          uri: `https://www.countryflags.io/${driver.nationality.slice(
            0,
            2,
          )}/flat/64.png`,
        }}
      />
      <TouchableOpacity
        onPress={() => goToDetail(driver)}
        style={styles.contentName}>
        <Text style={styles.contentNameText}>
          {driver.givenName} {driver.familyName}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToRaceInfo(driver)}
        style={styles.contentNameRace}>
        <Image
          style={styles.contentImageRaceRoad}
          source={require('../../assets/images/raceroad.png')}
        />
      </TouchableOpacity>
      <Text style={styles.contentDate}>{driver.dateOfBirth}</Text>
    </View>
  );
};
DriversItem.propTypes = {
  driver: PropTypes.object.isRequired,
  goToDetail: PropTypes.func,
};
export default DriversItem;
