import { StyleSheet } from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';
const triangleWidth = 15
const rate = 1.4
export default function (theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 6,
      alignItems: 'center'
    },
    dropDownVisible: {
      width: 0,
      height: 0,
      borderLeftWidth: triangleWidth / rate,
      borderRightWidth: triangleWidth / rate,
      borderBottomWidth: triangleWidth,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: '#00BCD4'
    },
    dropDownInVisible: {
      width: 0,
      height: 0,
      borderLeftWidth: triangleWidth / rate,
      borderRightWidth: triangleWidth / rate,
      borderTopWidth: triangleWidth,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: '#00BCD4'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {
      padding: 10,
      ...appStyle.arrowStyle
    },
    arrowImage: {
      tintColor: appStyle.arrowColor
    },
    disabledArrowImage: {
      tintColor: appStyle.disabledArrowColor
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
