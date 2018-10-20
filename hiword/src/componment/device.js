import Device from 'react-native-device-detection';
import { StyleSheet } from 'react-native';

module.exports = {
  width: Device.width,
  height: Device.height,
  isIos: Device.isIos,
  isAndroid: Device.isAndroid,
  isPhone: Device.isPhone,
  isTablet: Device.isTablet,
  // 单位像素
  hairlineWidth: StyleSheet.hairlineWidth,
};