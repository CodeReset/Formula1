import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginTop: 3,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  containerItemIndex: {
    width: 20,
    textAlign: 'right',
  },
  containerItemFlag: {
    width: 30,
    height: 30,
  },
  contentName: {
    marginLeft: 15,
  },
  contentNameRace: {},
  contentNameText: {
    fontFamily: 'Formula1-Regular',
    fontSize: 12,
  },
  contentDate: {
    marginLeft: 15,
    fontSize: 11,
    fontFamily: 'Formula1-Regular',
  },
  contentImageRaceRoad: {
    width: 55,
    height: 35,
  },
  contentTextRound: {
    fontSize: 11,
    textAlign: 'right',
    fontFamily: 'Formula1-Regular',
  },
});
