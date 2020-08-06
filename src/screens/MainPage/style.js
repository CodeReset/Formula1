import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Formula1-Regular',
    fontSize: 18,
    color: '#fff',
    marginTop: 40,
    alignSelf: 'flex-start',
  },
  containerLoader: {
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '100%',
    height: 374,
    marginTop: 20,
  },
  copyRightWrapper: {
    position: 'absolute',
    bottom: 10,
  },
});
