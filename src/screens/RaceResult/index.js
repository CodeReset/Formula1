import React, {useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {getDriverRaceInfo} from '../../store/actions/races';
import {styles} from './style';
import {usePagination} from '../../helpers/usePagination';
import Pagination from '../../components/Pagination';
import RacesList from '../../components/RacesList';
import CopyRight from '../../components/CopyRight';

const RaceResult = ({route, navigation}) => {
  const {driverId, driverName} = route.params;
  const dispatch = useDispatch();

  const loader = useSelector((state) => state.driversReducer.loader);
  const races = useSelector((state) => state.racesReducer.races);
  const totalRaces = useSelector((state) => state.racesReducer.totalRaces);

  useEffect(() => {
    dispatch(getDriverRaceInfo(driverId));
  }, [dispatch, driverId]);

  const {nextPage, prevPage, count} = usePagination({
    actionSetter: getDriverRaceInfo,
    total: totalRaces,
    driverId: driverId,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.containerTextHeading}>{driverName} all races</Text>
      <View style={styles.contentContainer}>
        {loader ? (
          <View style={styles.containerLoader}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <RacesList races={races} />
        )}
      </View>
      <Pagination prevPage={prevPage} nextPage={nextPage} count={count} />
      <View style={styles.copyRightWrapper}>
        <CopyRight />
      </View>
    </View>
  );
};

export default RaceResult;
