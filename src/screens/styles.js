import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

let {height} = Dimensions.get('window');
let {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewOuter: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius:10,
    borderColor: '#e4b343',
  },
  viewBtnLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    height: PixelRatio.roundToNearestPixel((height * 5) / 100),
    // height: 25,
    width: PixelRatio.roundToNearestPixel((width * 8) / 100),
    borderWidth: 1,
    borderColor: '#eeeeee',
    borderTopLeftRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
    borderBottomLeftRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
  },
  viewBtnRight: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eeeeee',
    height: PixelRatio.roundToNearestPixel((height * 5) / 100),
    // height: 25,
    width: PixelRatio.roundToNearestPixel((width * 8) / 100),
    borderTopRightRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
    borderBottomRightRadius: PixelRatio.roundToNearestPixel((height * 1) / 100),
  },
  viewTextInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#eeeeee',
    height: PixelRatio.roundToNearestPixel((height * 5) / 100),
    // height: 25,
    width: PixelRatio.roundToNearestPixel((width * 8) / 100),
  },
  labelStyle:{
    fontSize: 10,
    color:'#e4b343'
  },
});
export default styles;