import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingBottom: 5,
  },
  nameLabel: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  emailLabel: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  email: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default styles;