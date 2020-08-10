import React from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './style';

const RacesItem = ({race}) => {
  return (
    <View style={styles.containerItem}>
      <Text style={styles.contentName}>
        <Text style={styles.contentNameText}>Sn: {race.season}</Text>
      </Text>
      <Text style={styles.contentNameRace}>
        <Text style={styles.contentTextRound}>Round: {race.round}</Text>
      </Text>
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
