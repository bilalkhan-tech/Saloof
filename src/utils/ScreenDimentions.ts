import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const sHight = (val: number) => {
  return (val / 100) * windowHeight;
};

const sWidth = (val: number) => {
  return (val / 100) * windowWidth;
};

export { sHight, sWidth };
