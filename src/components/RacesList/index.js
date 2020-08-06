import React from 'react';
import {FlatList} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './style';
import RacesItem from '../RacesItem';

const RacesList = ({races}) => {
  return (
    <FlatList
      data={races}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({item}) => <RacesItem race={item} />}
      keyExtractor={(item, index) => index + 'race'}
      showsVerticalScrollIndicator={false}
    />
  );
};
RacesList.propTypes = {
  races: PropTypes.array.isRequired,
};
export default RacesList;
