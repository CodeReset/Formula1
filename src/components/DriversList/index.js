import React from 'react';
import {FlatList} from 'react-native';

import PropTypes from 'prop-types';
import {styles} from './style';
import DriversItem from '../DriversItem';

const DriversList = ({drivers, goToDetail, goToRaceInfo}) => {
  return (
    <FlatList
      data={drivers}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({item, index}) => (
        <DriversItem
          driver={item}
          index={index}
          goToDetail={goToDetail}
          goToRaceInfo={goToRaceInfo}
        />
      )}
      keyExtractor={(driver) => driver.driverId}
      showsVerticalScrollIndicator={false}
    />
  );
};
DriversList.propTypes = {
  drivers: PropTypes.array.isRequired,
  goToDetail: PropTypes.func,
  goToRaceInfo: PropTypes.func,
};
export default DriversList;
