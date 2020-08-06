import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'red',
  },
  copyRightWrapper: {
    position: 'absolute',
    bottom: 10,
    marginLeft: 'auto',
    width: '100%',
  },
  containerText: {
    color: '#fff',
    fontFamily: 'Formula1-Regular',
    marginTop: 10,
  },
  containerTextLink: {
    color: '#fff',
    fontFamily: 'Formula1-Regular',
    textDecorationLine: 'underline',
    marginTop: 25,
  },
  containerAvatar: {
    alignSelf: 'center',
    marginBottom: 40,
  },
});
