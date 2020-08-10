import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {styles} from './style';
import Logo from '../../assets/icons/f1_logo.svg';
import {getStartDrivers} from '../../store/actions/drivers';
import DriversList from '../../components/DriversList';
import Pagination from '../../components/Pagination';
import CopyRight from '../../components/CopyRight';
import {usePagination} from '../../helpers/usePagination';

const MainPage = ({navigation}) => {
  const loader = useSelector((state) => state.driversReducer.loader);
  const drivers = useSelector((state) => state.driversReducer.drivers);
  const totalDrivers = useSelector(
    (state) => state.driversReducer.totalDrivers,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStartDrivers());
  }, [dispatch]);

  const {nextPage, prevPage, count} = usePagination({
    actionSetter: getStartDrivers,
    total: totalDrivers,
  });

  const goToDetail = (info) => {
    navigation.navigate('driverinfo', {driverInfo: info});
  };
  const goToRaceInfo = (info) => {
    navigation.navigate('raceresults', {
      driverId: info.driverId,
      driverName: info.givenName + ' ' + info.familyName,
    });
  };
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerHeader}>
        <Text style={styles.heading}>All drivers</Text>
        <Text style={styles.heading}>Race</Text>
      </View>
      <View style={styles.contentContainer}>
        {loader ? (
          <View style={styles.containerLoader}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <DriversList
            drivers={drivers}
            goToDetail={goToDetail}
            goToRaceInfo={goToRaceInfo}
          />
        )}
      </View>
      <Pagination prevPage={prevPage} nextPage={nextPage} count={count} />
      <View style={styles.copyRightWrapper}>
        <CopyRight />
      </View>
    </View>
  );
};

export default MainPage;
