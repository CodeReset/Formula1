import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 20,
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
  containerTextHeading: {
    alignSelf: 'flex-start',
    fontFamily: 'Formula1-Regular',
    color: '#fff',
    fontSize: 18,
  },
  copyRightWrapper: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 'auto',
    width: '100%',
  },
});
