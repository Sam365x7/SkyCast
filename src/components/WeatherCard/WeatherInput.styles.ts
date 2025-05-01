import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  city: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  temp: {
    fontSize: 46,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 30,
  },
  iconBox: {
    backgroundColor: '#6699cc',
    borderRadius: 50,
    padding: 12,
    marginTop: 8,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  status: {
    fontSize: 25,
    marginTop: 6,
    color: 'black',
    fontWeight: '500',
    marginRight: 10,
  },
  feelLike: {
    fontSize: 22,
    marginTop: 6,
    color: 'black',
    fontWeight: '400',
  },
  bundleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
