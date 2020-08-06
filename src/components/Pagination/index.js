import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';

import {styles} from './style';

const Pagination = ({prevPage, nextPage, count}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => prevPage()}>
        <Image source={require('../../assets/icons/prev.png')} />
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity onPress={() => nextPage()}>
        <Image source={require('../../assets/icons/next.png')} />
      </TouchableOpacity>
    </View>
  );
};
Pagination.propTypes = {
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
export default Pagination;
