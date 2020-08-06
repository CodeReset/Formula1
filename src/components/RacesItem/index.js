import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './style';

const RacesItem = ({race}) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity style={styles.contentName}>
        <Text style={styles.contentNameText}>Sn: {race.season}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentNameRace}>
        <Text style={styles.contentTextRound}>Round: {race.round}</Text>
      </TouchableOpacity>
      <Text style={styles.contentDate}>
        Possition: {race.Results[0].position}
      </Text>
      {/* {race.Results[0].position === '1' ||
        race.Results[0].position === '2' ||
        (race.Results[0].position === '3' && (
          <Image source={require('../../assets/images/trophy.png')} />
        ))} */}
      <Text style={styles.contentDate}>Point: {race.Results[0].points}</Text>
    </View>
  );
};
RacesItem.propTypes = {
  race: PropTypes.object.isRequired,
};
export default RacesItem;
