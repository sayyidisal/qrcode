/**
 * @flow
 */
import { Typography, Colors, Assets } from 'react-native-ui-lib';
import { Dimensions } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import commonStyles from './common';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 350;
const guidelineBaseHeight: number = 680;

Colors.loadColors(colors);

Typography.loadTypographies({
  h1: {
    fontSize: 20,
    fontFamily: 'Muli',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'Muli-SemiBold',
  },
  h3: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: 'Muli',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: 'Muli',
  },
  p: {
    fontSize: 12,
    lineHeight: 20,
    fontFamily: 'Muli',
    fontWeight: '300',
  },
  button: {
    fontSize: 18,
    fontFamily: 'Muli',
    fontWeight: 'bold',
    color: colors.primary,
  },
});

Assets.loadAssetsGroup('images', {
  'bottom-bar-background': require('../../assets/images/bottom_bar_background.png'),
});

Assets.loadAssetsGroup('icons', {
  plus: require('../../assets/icons/plus.png'),
  'back-icon': require('../../assets/icons/back-icon.png'),
  history: require('../../assets/icons/history.png'),
  flashlight: require('../../assets/icons/flashlight.png'),
  'scan-area': require('../../assets/icons/scan-area.png'),
  'flashlight-on': require('../../assets/icons/flashlight-on.png'),
  'flashlight-off': require('../../assets/icons/flashlight-off.png'),
});

Assets.loadAssetsGroup('types', {
  text: require('../../assets/icons/types/text.png'),
  'text-white': require('../../assets/icons/types/text-white.png'),
});

Assets.loadAssetsGroup('tabbar-icons', {
  history: require('../../assets/icons/tabbar/history.png'),
  'history-active': require('../../assets/icons/tabbar/history-active.png'),
  plus: require('../../assets/icons/tabbar/plus.png'),
  'plus-active': require('../../assets/icons/tabbar/plus-active.png'),
  qrcode: require('../../assets/icons/tabbar/qrcode.png'),
  'qrcode-active': require('../../assets/icons/tabbar/qrcode-active.png'),
  settings: require('../../assets/icons/tabbar/settings.png'),
  'settings-active': require('../../assets/icons/tabbar/settings-active.png'),
});

const scale = (size: number): number => width / guidelineBaseWidth * size;
const verticalScale = (size: number): number => height / guidelineBaseHeight * size;
const moderateScale = (size: number, factor: number = 0.5): number => size + (scale(size) - size) * factor;

export {
  colors,
  fonts,
  scale,
  verticalScale,
  moderateScale,
  commonStyles,
};
