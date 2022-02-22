import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Clipboard,
  Dimensions,
  PixelRatio,
  Easing,
  Image,
  Platform,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import colors from '../utils/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import InputSpinner from 'react-native-input-spinner';
import moment from 'moment';
import StarRating from 'react-native-star-rating';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { useDispatch } from 'react-redux';

const { width: screenWidth } = Dimensions.get('window');
let {height} = Dimensions.get('window');
// let {width} = Dimensions.get('window');

const IconComponent = (props) => {
  if (props.type === 'antdesign') {
    return (
      <AntDesign
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'entypo') {
    return (
      <Entypo
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'evilicons') {
    return (
      <EvilIcons
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'feather') {
    return (
      <Feather
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'fontawesome') {
    return (
      <FontAwesome
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'fontawesome5') {
    return (
      <FontAwesome5
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'materialicons') {
    return (
      <MaterialIcons
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'materialcommunity') {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else if (props.type === 'zocial') {
    return (
      <Zocial
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  } else {
    return (
      <Ionicons
        name={props.name}
        size={props.size ? props.size : 20}
        color={props.color ? props.color : colors.primary}
        style={props.iconStyle}
      />
    );
  }
};

export const Button = (props) => {
  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={props.onPress}
      style={buttonStyles.buttonContainer}
      disabled={props.disabled}
    >
      <View
        style={[
          buttonStyles.button,
          !props.noShadow && buttonStyles.withShadow,
          !props.corner && buttonStyles.roundedBtn,
          props.topBorder && buttonStyles.topBorder,
          props.primary && buttonStyles.primaryBtn,
          props.payNow && buttonStyles.payNowBtn,
          props.canceled && buttonStyles.canceled,
          props.accepted && buttonStyles.accepted,
          props.completed && buttonStyles.completed,
          props.outlined && buttonStyles.outlinedBtn,
          props.outlined && props.dark && buttonStyles.outlinedBtnDark,
          props.danger && props.outlined && buttonStyles.outlinedBtnDanger,
          props.block && buttonStyles.blockBtn,
          props.small && buttonStyles.buttonHeightSmall,
          props.smallStyle && buttonStyles.buttonStyle,
          props.fb && buttonStyles.facebookBtn,
          props.margin && buttonStyles.margin,
        ]}
      >
        {props.icon && (
          <IconComponent
            name={props.icon}
            type={props.iconType}
            size={20}
            style={[buttonStyles.icons, props.iconStyle]}
          />
        )}
        {props.loading && (
          <ActivityIndicator
            size='small'
            color={props.outlined ? colors.primary : colors.btnTextWhite}
            style={buttonStyles.icons}
          />
        )}
        <Text
          style={[
            props.primary
              ? buttonStyles.buttonText
              : buttonStyles.buttonTextDark,
            props.outlined && buttonStyles.outlinedBtnText,
            props.outlinedOrange && buttonStyles.outlinedBtnTextOrange,
            props.outlinedCanceled && buttonStyles.outlinedBtnTextCanceled,
            props.outlined && props.dark && buttonStyles.outlinedBtnTextDark,
            props.danger &&
              props.outlined &&
              buttonStyles.outlinedBtnDangerText,
            props.large && buttonStyles.buttonTextLarge,
            props.completed && buttonStyles.completedText,
            props.canceled && buttonStyles.canceledText,
            props.accepted && buttonStyles.acceptedText,
            props.small && buttonStyles.buttonTextSmall,
            props.medium && buttonStyles.buttonTextMedium,
            props.payNow && buttonStyles.buttonTextpayNow,
          ]}
        >
          {props.children}
        </Text>
        {props.image && (
          <Image source={props.image} style={buttonStyles.buttonImage} />
        )}
      </View>
    </TouchableHighlight>
  );
};

export const FlatButton = (props) => {
  return (
    <TouchableOpacity underlayColor={'transparent'} onPress={props.onPress}>
      <View
        style={[
          buttonStyles.button,
          props.primary && buttonStyles.primaryBtn,
          props.completed && buttonStyles.completedText,
          props.topBorder && buttonStyles.topBorder,
          props.block && buttonStyles.blockBtn,
          props.outlined && buttonStyles.outlinedBtnPrimary,
          props.outlined && props.dark && buttonStyles.outlinedBtnDark,
          props.small && buttonStyles.buttonHeightSmall,
        ]}
      >
        {props.icon && (
          <IconComponent
            name={props.icon}
            type={props.iconType}
            size={20}
            style={[buttonStyles.icons, props.iconStyle]}
          />
        )}
        {props.loading && (
          <ActivityIndicator
            size='small'
            color={colors.btnBg}
            style={buttonStyles.icons}
          />
        )}
        <Text
          style={[
            props.primary
              ? buttonStyles.buttonText
              : buttonStyles.buttonTextDark,
            props.outlined && props.dark && buttonStyles.outlinedBtnTextDark,
          ]}
        >
          {props.children}
        </Text>
        {props.image && (
          <Image source={props.image} style={buttonStyles.buttonImage} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export const IconButton = (props) => {
  return (
    <View
      style={[
        buttonStyles.iconbutton,
        props.block && buttonStyles.blockBtn,
        {
          width: props.size ? props.size : 40,
          height: props.size ? props.size : 40,
        },
      ]}
    >
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={props.onPress}
        style={[
          {
            width: props.size ? props.size : 40,
            height: props.size ? props.size : 40,
          },
        ]}
      >
        <IconComponent
          name={props.icon}
          type={props.iconType}
          size={props.size ? props.size - 5 : 40}
          color={props.light ? colors.btnTextWhite : props.color}
          style={props.iconStyle && props.iconStyle}
        />
      </TouchableHighlight>
    </View>
  );
};

export const ImageButton = (props) => {
  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={props.onPress}
      style={!props.noPadding && buttonStyles.buttonContainer}
    >
      <View
        style={[
          buttonStyles.imagebtnWrapper,
          props.block && buttonStyles.blockBtn,
        ]}
      >
        <Image
          {...props.image}
          style={buttonStyles.imagebtn}
          fadeDuration={0}
        />
      </View>
    </TouchableHighlight>
  );
};

const buttonStyles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
  },
  button: {
    minWidth: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
  },
  icons: {
    marginRight: 20,
  },

  // button height
  buttonHeightSmall: {
    height: 45,
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: colors.primary,
  },

  // button text
  buttonText: {
    color: colors.btnTextWhite,
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextLarge: {
    color: colors.btnTextWhite,
    fontSize: 25,
    fontWeight: 'bold',
  },

  buttonTextMedium: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonTextpayNow: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },

  buttonTextSmall: {
    // color: colors.btnTextWhite,
    fontSize: 12,
    fontWeight: 'bold',
  },

  // typical button
  primaryBtn: {
    backgroundColor: colors.btnBg,
  },
  topBorder: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor: colors.btnTextDark,
        elevation: 4,
      },
      android: {
        borderWidth: 0,
      },
    }),
  },

  payNowBtn: {
    backgroundColor: colors.facebookBlue,
  },
  topBorder: {
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -3,
        },
        shadowColor: colors.btnTextDark,
        elevation: 4,
      },
      android: {
        borderWidth: 0,
      },
    }),
  },

  withShadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  buttonTextDark: {
    color: colors.btnTextDark,
  },

  // flatbutton

  // rounded button
  roundedBtn: {
    borderRadius: 8,
  },

  // outlined button
  outlinedBtn: {
    borderWidth: 1,
    borderColor: colors.btnBg,
    ...Platform.select({
      ios: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  outlinedBtnPrimary: {
    borderWidth: 1,
    borderColor: colors.btnBg,
  },
  outlinedBtnDanger: {
    borderWidth: 1,
    borderColor: colors.btnBgDanger,
  },
  outlinedBtnDangerText: {
    color: colors.btnBgDanger,
  },
  outlinedBtnDark: {
    borderWidth: 1,
    borderColor: colors.btnTextDark,
  },

  outlinedBtnTextDark: {
    color: colors.btnTextDark,
  },
  outlinedBtnText: {
    color: colors.btnBg,
    fontSize: 14,
    fontWeight: 'bold',
  },

  outlinedBtnTextOrange: {
    color: colors.btnTextOrange,
    fontSize: 14,
    fontWeight: 'bold',
  },
  outlinedBtnTextCanceled: {
    color: colors.Canceled,
    fontSize: 14,
    fontWeight: 'bold',
  },

  completed: {
    backgroundColor: colors.completed,
    marginBottom: -20,
  },

  completedText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  canceled: {
    backgroundColor: colors.canceled,
    marginTop: 20,
    marginBottom: -10,
  },

  canceledText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  accepted: {
    backgroundColor: colors.accepted,
    marginTop: 20,
    marginBottom: -10,
  },

  acceptedText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  // icon button
  iconbutton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  imagebtnWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  imagebtn: {
    resizeMode: 'contain',
    height: '50%',
    width: '50%',
  },
  buttonImage: {
    height: '35%',
    width: '20%',
    resizeMode: 'contain',
  },

  // block button
  blockBtn: {
    width: '100%',
  },

  // social button
  facebookBtn: {
    backgroundColor: '#3B5998',
  },
  margin: {
    marginTop: 10,
  },
});

// title
export const Title = (props) => {
  const generateStyles = () => {
    let styles = [];
    for (let key of Object.keys(props)) {
      if (key !== 'children' || key !== 'style') {
        styles.push(titleStyles[key]);
      }
    }
    return styles;
  };

  return (
    <Text
      style={[
        titleStyles.default,
        generateStyles(),
        props.style && props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};

const titleStyles = StyleSheet.create({
  default: {
    lineHeight: 15,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  large: {
    lineHeight: 55,
    fontSize: 50,
  },
  medium: {
    lineHeight: 45,
    fontSize: 40,
  },
  h1: {
    lineHeight: 35,
    fontSize: 30,
  },
  h2: {
    lineHeight: 30,
    fontSize: 25,
  },
  h3: {
    lineHeight: 25,
    fontSize: 20,
  },
  h4big: { lineHeight: 22, fontSize: 17 },
  h4: {
    lineHeight: 18,
    fontSize: 16,
  },
  h5: {
    lineHeight: 16,
    fontSize: 14,
  },
  h6: {
    lineHeight: 14,
    fontSize: 12,
  },
  xlFont: {
    lineHeight: 16,
    fontSize: 16,
    fontWeight: '500',
    color: colors.darkGrey,
  },
  xxlFont: {
    lineHeight: 20,
    fontSize: 20,
    fontWeight: '500',
    color: colors.darkGrey,
  },
  bold: {
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
  primary: {
    color: colors.primary,
  },
  accepted: {
    color: colors.accepted,
  },
  completed: {
    color: colors.completed,
  },
  white: {
    color: colors.btnTextWhite,
  },
  gray: {
    color: colors.lightGrey,
  },
  darkGrey: {
    color: colors.darkGrey,
  },

  canceled: {
    color: colors.canceled,
  },
  warning: {
    color: colors.canceled,
  },
  m0: {
    marginTop: 0,
    marginBottom: 0,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  mr10: {
    marginRight: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  m25: {
    margin: 25,
    marginTop: 20,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  justify: {
    textAlign: 'justify',
  },

  // with font family
  fontTrebuc: {
    fontFamily: 'Trebuchet MS',
  },
  fontGillsans: {
    fontFamily: 'GillSans',
  },
});

// divider
export const HorizontalLine = (props) => {
  if (props.children) {
    return (
      <View style={horizontalLineStyles.dividerText}>
        <View
          style={[
            horizontalLineStyles.dividerTextLeftLine,
            props.primary && horizontalLineStyles.primary,
            props.lineWhite && horizontalLineStyles.lineWhite,
            props.accepted && horizontalLineStyles.accepted,
            props.canceled && horizontalLineStyles.canceled,
            props.lineDouble && horizontalLineStyles.double,
          ]}
        />
        <View>
          <Text style={horizontalLineStyles.dividerTextChild}>
            {props.children}
          </Text>
        </View>
        <View
          style={[
            horizontalLineStyles.dividerTextRightLine,
            props.primary && horizontalLineStyles.primary,
            props.lineWhite && horizontalLineStyles.lineWhite,
            props.accepted && horizontalLineStyles.accepted,
            props.canceled && horizontalLineStyles.canceled,
            props.lineDouble && horizontalLineStyles.double,
          ]}
        />
      </View>
    );
  } else {
    return (
      <>
        {props.vertical ? (
          <View
            style={[
              horizontalLineStyles.verticalLine,
              props.lineWhite && horizontalLineStyles.white,
              props.primary && horizontalLineStyles.primary,
              props.accepted && horizontalLineStyles.accepted,
              props.canceled && horizontalLineStyles.canceled,
              props.lineDouble && horizontalLineStyles.double,
            ]}
          />
        ) : (
          <View
            style={[
              horizontalLineStyles.lineContainer,
              props.block && { width: '100%' },
              props.height && { height: props.height },
              props.mb && horizontalLineStyles.mb,
              props.style && props.style,
              props.lineWhite && horizontalLineStyles.white,
              props.primary && horizontalLineStyles.primary,
              props.accepted && horizontalLineStyles.accepted,
              props.canceled && horizontalLineStyles.canceled,
              props.lineDouble && horizontalLineStyles.double,
            ]}
          />
        )}
      </>
    );
  }
};

const horizontalLineStyles = StyleSheet.create({
  lineContainer: {
    height: 1,
    width: '95%',
    backgroundColor: colors.lineBGColor,
    alignSelf: 'center',
  },
  verticalLine: {
    height: '85%',
    width: 1,
    backgroundColor: colors.lineBGColor,
    alignSelf: 'center',
  },
  dividerText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  dividerTextChild: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
  dividerTextLeftLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lineBGColor,
  },
  dividerTextRightLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lineBGColor,
  },
  white: {
    backgroundColor: colors.backgroundWhite,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  accepted: {
    backgroundColor: colors.accepted,
  },

  canceled: {
    backgroundColor: colors.canceled,
  },

  completed: {
    backgroundColor: colors.completed,
  },
  double: {
    height: 2,
  },
  mb: {
    marginBottom: 10,
  },
  mt: {
    marginTop: 10,
  },
  mb20: {
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
});

// input components
export const Input = (props) => {
  let inputRef = useRef(null);

  return (
    <View style={inputStyles.inputWrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef.current.focus();
        }}
      >
        <View>
          <View style={inputStyles.inputContainer}>
            <Text style={inputStyles.label}>{props.label}</Text>
            <TextInput
              ref={inputRef}
              style={inputStyles.input}
              {...props}
              underlineColorAndroid='transparent'
            />
          </View>
          {props.error && (
            <Text style={inputStyles.inputError}>{props.error}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 10,
  },
  inputContainer: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    fontSize: 18,
  },
  label: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    color: colors.grey,
  },
  input: {
    paddingLeft: 10,
    width: '100%',
    fontSize: 18,
    height: 55,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderTopWidth: 0,
    color: colors.darkGrey,
  },
  inputError: {
    marginBottom: 5,
    fontSize: 10,
    color: colors.canceled,
  },
});

export const InputFlat = (props) => {
  let inputRef = useRef(null);

  return (
    <>
      {props.label && <Text style={inputFlatStyles.label}>{props.label}</Text>}

      <View
        style={[
          props.multiline
            ? inputFlatStyles.multiline
            : inputFlatStyles.inputContainer,
        ]}
      >
        <TextInput
          ref={inputRef}
          style={[
            inputFlatStyles.input,
            props.multiline && inputFlatStyles.multilineInput,
            props.small && inputFlatStyles.inputSmall,
          ]}
          {...props}
          underlineColorAndroid='transparent'
          {...props.maxLength}
        />
      </View>
      {props.error && (
        <Text style={inputFlatStyles.inputError}>{props.error}</Text>
      )}
    </>
  );
};

const inputFlatStyles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    color: colors.grey,
  },
  input: {
    paddingLeft: 10,
    width: '100%',
    fontSize: 18,
    height: 55,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderTopWidth: 0,
    color: colors.darkGrey,
  },
  inputSmall: {
    paddingLeft: 10,
    width: '100%',
    fontSize: 18,
    height: 45,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    borderTopWidth: 0,
  },
  multiline: {
    borderColor: colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    minHeight: 100,
    width: '100%',
    alignSelf: 'flex-start',
    height: 100,
    textAlignVertical: 'top',
  },
  multilineInput: {
    minHeight: 100,
    height: 100,
  },
  inputError: {
    marginBottom: 5,
    fontSize: 10,
    color: colors.canceled,
  },
  inputErrorImg: {
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 10,
    color: colors.canceled,
  },
});

export const InputDateTime = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [value, setValue] = useState(new Date());
  const [dateVisible, setDateVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [] = useState(Platform.OS === 'ios');

  console.log(moment(props.value).toDate());

  const handleConfirm = (e, date) => {
    // console.log('log-date', date);
    // console.log('log-date', date);
    if (date !== undefined) {
      setValue(date);
      props.onChangeText(
        moment(date, 'MM-DD-YYYY HH:mm:00 a').format('MM-DD-YYYY HH:mm:00 a')
      );
    }
    setDateVisible(false);
    setTimeVisible(false);
  };

  // useEffect(() => {
  //   let unsubscribe = () => {
  //     setValue(
  //       props.value
  //         ? moment(props.value, 'MM-DD-YYYY HH:mm:00 a').toDate()
  //         : moment().toDate()
  //     );
  //   };
  //   return unsubscribe();
  // }, [props]);

  return (
    <View style={[dateTimeStyles.inputWrapper]}>
      {props.label && <Text style={dateTimeStyles.label}>{props.label}</Text>}

      {Platform.OS === 'android' && (
        <View
          style={[
            {
              flexDirection: 'row',
              width: '100%',
              height: 50,
              backgroundColor: colors.primaryLight,
              borderRadius: 10,
              alignItems: 'center',
              padding: 2,
            },
            props.mode === 'date' && dateTimeStyles.dateStyle,
          ]}
        >
          <TouchableWithoutFeedback
            disabled={props.disabled}
            onPress={() => {
              setDateVisible(true);
            }}
            style={[dateTimeStyles.inputContainer, { flex: 1, marginRight: 5 }]}
          >
            <View>
              <Text
                style={[
                  dateTimeStyles.input,
                  props.small && dateTimeStyles.inputSmall,

                  {
                    alignSelf: 'center',
                  },
                  props.disabled && { color: colors.lightGrey },
                ]}
              >
                {moment(value).format('DD-MM-YYYY')}
              </Text>
            </View>
          </TouchableWithoutFeedback>

          {props.mode !== 'date' && (
            <TouchableWithoutFeedback
              disabled={props.disabled}
              onPress={() => {
                setTimeVisible(true);
              }}
              style={[
                dateTimeStyles.inputContainer,
                { flex: 1, marginRight: 5 },
              ]}
            >
              <View>
                <Text
                  style={[
                    dateTimeStyles.input,
                    props.small && dateTimeStyles.inputSmall,
                    {
                      alignSelf: 'center',
                    },
                    props.disabled && { color: colors.lightGrey },
                  ]}
                >
                  {moment(value).format('HH:mm')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          {React.useMemo(
            () =>
              dateVisible && (
                <DateTimePicker
                  {...props.specialProps}
                  textColor={colors.primaryLight}
                  value={
                    props.value !== ''
                      ? moment(props.value, 'MM-DD-YYYY HH:mm:00 a').toDate()
                      : value
                  }
                  mode='date'
                  is24Hour={true}
                  isDarkModeEnabled={isDarkMode}
                  display='default'
                  onChange={handleConfirm}
                />
              ),
            [dateVisible]
          )}

          {React.useMemo(
            () =>
              timeVisible && (
                <DateTimePicker
                  textColor={colors.primaryLight}
                  value={value}
                  mode='time'
                  is24Hour={true}
                  isDarkModeEnabled={isDarkMode}
                  display='default'
                  onChange={handleConfirm}
                />
              ),
            [timeVisible]
          )}
        </View>
      )}

      {Platform.OS === 'ios' && (
        <View style={[dateTimeStyles.inputContainer, { position: 'relative' }]}>
          {props.disabled && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
              }}
            />
          )}

          <DateTimePicker
            {...props.specialProps}
            textColor={colors.primaryLight}
            value={
              props.value !== ''
                ? moment(props.value, 'MM-DD-YYYY HH:mm:00 a').toDate()
                : value
            }
            mode={
              props.mode
                ? props.mode
                : Platform.OS === 'ios'
                ? 'datetime'
                : 'date'
            }
            is24Hour={true}
            isDarkModeEnabled={isDarkMode}
            display='default'
            onChange={handleConfirm}
            style={{
              margin: 10,
            }}
          />
        </View>
      )}
    </View>
  );
};

const dateTimeStyles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        width: '100%',
        backgroundColor: colors.primaryLight,
      },
    }),
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
    color: colors.grey,
  },
  dateStyle: {
    height: 55,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        color: colors.white,
        alignSelf: 'flex-start',
      },
      android: {
        color: colors.white,
        backgroundColor: colors.primaryMidLight,
        alignContent: 'space-between',
        fontSize: 18,
        lineHeight: 40,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingRight: 20,
        paddingLeft: 20,
        marginLeft: 5,
      },
    }),
  },
  inputSmall: {
    fontSize: 18,
    lineHeight: 35,
  },
  inputError: {
    marginBottom: 5,
    fontSize: 10,
    color: colors.canceled,
  },
});

export const QuantityInput = (props) => {
  return (
    <View style={[quantityinputStyles.container]}>
      <InputSpinner
        value={props.value}
        editable={false}
        buttonTextColor={colors.primary}
        skin='clean'
        shadow={false}
        style={{
          borderColor: colors.primary,
          borderWidth: 1,
          ...Platform.select({
            ios: {
              shadowColor: colors.btnTextDark,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowOpacity: 0.4,
              shadowRadius: 4,
            },
            android: {
              elevation: 4,
            },
          }),
        }}
        height={40}
        min={1}
        max={5}
        onChange={props.onChange}
      />
    </View>
  );
};

const quantityinputStyles = StyleSheet.create({
  container: {
    width: '35%',
    margin: 10,
  },
  actionButton: {},
  icon: {
    marginRight: 0,
    alignSelf: 'center',
  },
  quantityInput: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    height: 35,
  },
});

// image uploader
export const ImageUploader = (props) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(props.value ? props.value : null);

  const pickImage = async () => {
    if (props.onValidateForm) {
      if (!props.filepath) {
        props.onValidateForm();
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Ops!',
          text2: 'Please type and fill all above fields first!',
          autoHide: true,
          bottomOffset: 20,
        });
        return;
      }
    }

    ImagePicker.launchImageLibrary(
      {
        title: 'Select Image',
        type: 'library',
        options: {
          mediaType: 'photo',
          includeBase64: false,
        },
        quality: 0.6,
      },
      async (result) => {
        if (!result.didCancel) {
          setLoading(true);
          let imageext = result.uri.split('.').pop();
          let uploadpath = props.initialPath + props.filepath + '/';
          let imagename = props.name + '.' + imageext;
          const response = await fetch(result.uri);
          const blob = await response.blob();
          blob._data.name = imagename;
          let uploadTask = storageRef.child(uploadpath + imagename).put(blob);

          uploadTask.on(
            'state_changed',
            (snapshot) => {
              let progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              if (progress === 100) {
                setLoading(false);
              }
            },
            (error) => {
              Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Ops!',
                text2: error.message,
                autoHide: true,
                bottomOffset: 20,
              });
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                setImage(downloadURL);
                props.onChangeText(downloadURL);
              });
            }
          );
        }
      }
    );
  };

  return (
    <>
      <TouchableHighlight
        underlayColor={'transparent'}
        style={[
          imageUploadStyles.container,
          props.horizontal && imageUploadStyles.horizontal,
        ]}
        onPress={pickImage}
      >
        <>
          <Text
            style={[
              imageUploadStyles.label,
              props.horizontal && imageUploadStyles.horizontallabel,
              props.lightLabel && imageUploadStyles.labelLight,
            ]}
          >
            {props.label}
          </Text>
          {loading ? (
            <ActivityIndicator color={colors.primary} size={25} />
          ) : image ? (
            <View>
              <Image
                style={imageUploadStyles.imageStyle}
                source={{ uri: image }}
              />
            </View>
          ) : (
            <View style={imageUploadStyles.iconContainer}>
              <Feather name='plus' size={50} color={colors.lightGrey} />
            </View>
          )}
        </>
      </TouchableHighlight>
      {props.error && (
        <Text style={inputFlatStyles.inputErrorImg}>{props.error}</Text>
      )}
    </>
  );
};

const imageUploadStyles = StyleSheet.create({
  container: {
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizontallabel: {
    fontSize: 12,
  },
  labelLight: {
    fontWeight: 'normal',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  imageStyle: {
    resizeMode: 'stretch',
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
  },
});

export const Avatar = (props) => {
  const defaultSize = props.size ? props.size : 40;

  const generateStyles = () => {
    let styles = [];
    for (let key of Object.keys(props)) {
      if (key !== 'children' || key !== 'style') {
        styles.push(avatarStyles[key]);
      }
    }
    return styles;
  };

  return (
    <TouchableWithoutFeedback onPress={props.onPress} >
      <View elevation={15}
        style={[
          {
            width: defaultSize+4,
            height: defaultSize+4,
            marginHorizontal:10,
            borderColor:'#a4783f',
            borderWidth:2,
            borderShadow:10,
            shadowColor: 'black',
            shadowRadius: 20,
            shadowOpacity: 0.5,
            borderRadius: (defaultSize +4)/ 2,
          },
          generateStyles,
        ]}
      >
        <Image elevation={1}
          style={{
            width: defaultSize,
            height: defaultSize,
            
            borderRadius: defaultSize / 2,
          }}
          source={props.source && props.source}
          // source={aaa}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export const ProfAreaContainerHome = (props) => {
  const [] = useState([]);
  // const [active, setActive] = useState(0);  
//handling onPress action  
  // const carouselRef = useRef(null);
  // const [loadingImage, setLoadingImage] = useState(false);
  return (
    <>
      <View style={{flexDirection:'row', justifyContent:'space-between',paddingHorizontal:10}}>
        <Title  mt12 fontGillsans style={{color:'black',paddingHorizontal:7,}}>
          Professional in Area 
        </Title>
        <TouchableOpacity 
          onPress={()=>{props.navigation.navigate('ProfessionalsScreen')}}>
        <Text style={{ color:'#e8bf61', fontSize:12, fontStyle:'italic',  }}>
            View More
        </Text>
        </TouchableOpacity>
      </View>    
      <ScrollView horizontal
       style={{paddingHorizontal:7}}
       >
        <TouchableOpacity onPress={()=>{props.navigation.navigate('ProfessionalsScreen')}}>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), height: PixelRatio.roundToNearestPixel((screenWidth * 10) / 50), borderRadius: PixelRatio.roundToNearestPixel((screenWidth * 10) / 100), borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
        <View>
          <Image source={require('../../assets/avatar1.png')} style={{ width: 75, height: 75, borderRadius: 75/2, borderWidth: 2, borderColor:'#fa7c8a', margin: 3 }} />
          <View >
              <Text style={{textAlign:'center', fontSize:12, color:'#2e1505'}}>Mike West </Text>
              <Text style={{textAlign:'center', fontSize:10, color:'#857871'}}>Hair Style </Text>
              <Text style={{textAlign:'center', fontSize:9, color:'#f7d47d'}}>5.5km  </Text>
            </View>
        </View>
      </ScrollView>
      <View style={{flexDirection:'row', justifyContent:'space-between' , paddingHorizontal:10}}>
        <Title  mt10 fontGillsans style={{color:'black',paddingHorizontal:7,}} >
          Popular Home Service
        </Title>
        <Text onPress={()=>{props.navigation.navigate('ServiceScreen')}} style={{ color:'#e8bf61', fontSize:12, fontStyle:'italic' , marginTop:6 }}>
          View More
        </Text>
      </View>
      <View>
      {/* <ScrollView > */}
        <View style={{flex: 1, marginLeft:'2.5%', marginRight:'2.5%'}}>
          
        <FlatList  
                    data={[  
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'}, 
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'MIke West', src:'../../assets/waxing.png'},  
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},  
                        {key: 'MIke West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'MIke West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},  
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'MIke West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'},
                        {key: 'Mike West', src:'../../assets/waxing.png'}, {key: 'Mike West', src:'../../assets/waxing.png'}  
                    ]}  
                    renderItem={({item}) => 
                      <View style={{width:'30%', margin:'2%'}}>
                        <TouchableOpacity onPress={()=> {props.navigation.navigate('ServiceTypeScreen')}}>
                        <Image source={require('../../assets/waxing1.png')} style={{ width: '100%', height: PixelRatio.roundToNearestPixel((screenWidth * 24) / 100), borderRadius: 10/2, borderWidth: 0.5, borderColor:'#C0C0C0' }} />
                        <View>
                          <Text style={{textAlign:'center',marginTop:5, fontSize:12, color:colors.darkGrey}}> {item.key} </Text>
                        </View>
                        </TouchableOpacity>
                      </View>}
                    numColumns={3}
                    />  
          {/* <View style={{width:'30%'}}>
            <Image source={require('../../assets/waxing.png')} style={{ width: '100%', height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742' }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
             
            </View>
          </View> */}
        </View>



        {/* <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
             
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
          <View>
            <Image source={require('../../assets/waxing.png')} style={{ width: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), height: PixelRatio.roundToNearestPixel((screenWidth * 30) / 100), borderRadius: 10/2, borderWidth: 1, borderColor:'#f58742', margin: 3 }} />
            <View >
              <Text style={{textAlign:'center', fontWeight:'bold', fontSize:14, color:'#2e1505'}}>Mike West </Text>
            
            </View>
          </View>
        </View> */}
      {/* </ScrollView> */}
      </View>
      </>
  )
}

const avatarStyles = StyleSheet.create({});

export const ImageSlider = (props) => {
  const [] = useState([]);
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);
  const [loadingImage, setLoadingImage] = useState(false);
  console.log("Image Data here", props.data);
  const renderItem = ({ item }) => {
    console.log("Item Win.. ", item);
    return (
      <View style={sliderStyles.item}>
        <View style={sliderStyles.imageContainer}>
          {loadingImage ? (
            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                zIndex: 0,
              }}
            >
              <ActivityIndicator color={colors.primary} />
            </View>
          ) : (
            // <Text>{props.data}</Text>
            <Image
              style={[sliderStyles.image, { zIndex: 0 }]}
              source={
                props.data
                  ? { uri: item }
                  : require('../../assets/banner.png')
              }
            />
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={sliderStyles.container}>
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={3000}
        autoplayInterval={3000}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth / 2.2}
        itemWidth={screenWidth}
        data={props.data ? props.data : []}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={setActive}
      />
      <Pagination
        dotsLength={props.data ? props.data.length : 1}
        activeDotIndex={active}
        containerStyle={{
          paddingHorizontal: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: 'rgba(0,0,0,0.92)',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.7}
      />
    </View>
  );
};

const sliderStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    borderRadius: 6,
    marginBottom:10,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  item: {
    width: screenWidth - 20,
    height: screenWidth / 2.3,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: colors.backgroundWhite,
    borderRadius: 15,
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: null,
    height: null,
    borderRadius: 6,
    resizeMode: 'stretch',
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {},
    }),
  },
});

export const Service = (props) => {
  return (
    <View
      style={[
        ServiceStyles.container,
        props.show && { width: screenWidth / props.show },
        props.row && ServiceStyles.containerRow,
        props.style && props.style,
      ]}
    >
      <View style={[ServiceStyles.imageContainer]}>
        <Image
          source={props.imageUri}
          style={ServiceStyles.image}
          borderRadius={30}
          borderBottomRightRadius={0}
          borderTopLeftRadius={0}
        />
      </View>
      <View style={[ServiceStyles.title, ServiceStyles.titleRow]}>
        <View style={[ServiceStyles.secondaryTitle]}>
          <Title fontGillsans m0 style={[ServiceStyles.titleText]}>
            {props.name}
          </Title>
          <Title fontGillsans m0 style={[ServiceStyles.secondaryTitleText]}>
            From {props.price}$
          </Title>
        </View>
      </View>
    </View>
  );
};

const ServiceStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    width: screenWidth,
  },
  containerRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: colors.btnBg,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  title: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryTitle: {
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRow: {
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 12,
    fontWeight: '500',
  },
  secondaryTitleText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.grey,
  },
});

export const HorizontalSwiper = (props) => {
  const [serviceImages] = useState([
    require('../../assets/mani-padi.png'),
    require('../../assets/eyebrows.png'),
    require('../../assets/eyelash.png'),
    require('../../assets/waxing.png'),
  ]);
  const renderItems = () => {
    // return props.data.map((item, index) => {
      return (
        <Service
          key="1"
          show="1"
          imageUri={require('../../assets/mani-padi.png')}
          name="Nailzz"
          price="120$"
        />
      );
    // });
  };

  return (
    <View
      style={[horizontalswiperStyles.container, props.style && props.style]}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {/* {props.data && props.data.length > 0 ? ( */}
          {renderItems()}
        {/* // ) : (
        //   <Text>No data found</Text>
        // )} */}
      </ScrollView>
    </View>
  );
};

const horizontalswiperStyles = StyleSheet.create({
  container: {
    height: screenWidth / 3.5,
    marginTop: 5,
    //width: screenWidth,
  },
});

export const PromoCard = (props) => {
  return (
    <View style={promoCardStyles.container}>
      <TouchableOpacity
        onPress={() => {
          Clipboard.setString(props.code);
          Toast.show({
            type: 'info',
            position: 'bottom',
            text1: 'Awesome!',
            text2: 'Code has been copied to clipboard.',
            autoHide: true,
            bottomOffset: 20,
          });
        }}
      >
        <View style={promoCardStyles.containerInner}>
          <View style={promoCardStyles.code}>
            <Title h2 primary bold>
              {props.code}
            </Title>
            <Title>Tap to copy promo code</Title>
          </View>
          <Title bold center>
            {props.voucher ? props.value + ' CAD' : props.value + '%'} promotion
            one time code
          </Title>
          <Title bold center>
            {props.detail}
          </Title>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const promoCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundWhite,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    shadowColor: colors.btnTextDark,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  containerInner: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    width: '70%',
    borderWidth: 1,
    paddingVertical: 30,
    borderColor: colors.lightGrey,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    flex: 1,
    width: '100%',
    height: 10,
    backgroundColor: colors.veryLightGrey,
  },
});

export const ServiceCollapsible = (props) => {
  const [active, setActive] = useState(false);
  const rotateIcon = useRef(new Animated.Value(0)).current;

  const arrowAngle = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  useEffect(() => {}, [props.list]);

  return (
    <Collapse
      key={props.id}
      style={[collapsibleStyles.collapsible]}
      onToggle={(toggle) => {
        setActive(toggle);
        if (active) {
          Animated.timing(rotateIcon, {
            duration: 200,
            toValue: 0,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(rotateIcon, {
            duration: 200,
            toValue: 1,
            easing: Easing.bezier(0.4, 0.0, 0.2, 1),
            useNativeDriver: false,
          }).start();
        }
      }}

    >
      <CollapseHeader style={[collapsibleStyles.collapsibleHeader]}>
        <View style={[collapsibleStyles.collapsibleHeaderServices]}>
          <View style={[collapsibleStyles.imageContainer]}>
            <Image
              source={props.localImage}
              style={collapsibleStyles.image}
              borderRadius={30}
              borderBottomRightRadius={0}
              borderTopLeftRadius={0}
            />
          </View>
          <View style={[collapsibleStyles.titleContainer]}>
            <Title m0 bold xxlFont fontGillsans>
              {props.name}
            </Title>
          </View>
        </View>
        <Animated.View
          style={{ marginRight: 10, transform: [{ rotateZ: arrowAngle }] }}
        >
          <IconComponent
            type='feather'
            name='chevron-down'
            size={30}
            color={colors.lightGrey}
          />
        </Animated.View>
      </CollapseHeader>
      <CollapseBody style={[collapsibleStyles.collapsibleBody]}>
        {props.subServices &&
          props.subServices.map((sitem, sindex) => (
            <TouchableWithoutFeedback
              key={props.id + sindex}
              onPress={() => {
                props.onListClick(props, sitem);
              }}
            >
              <View style={[collapsibleStyles.collapsibleHeader]}>
                <View style={[collapsibleStyles.collapsibleHeaderItem]}>
                  <Title m0 bold fontGillsans>
                    {sitem.name}
                  </Title>
                </View>
                <View style={{ marginRight: 5 }}>
                  <IconComponent
                    type='feather'
                    name='chevron-right'
                    size={28}
                    color={colors.lightGrey}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
      </CollapseBody>
    </Collapse>
  );
};

const collapsibleStyles = StyleSheet.create({
  collapsible: {
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    marginBottom: 10,
    ...Platform.select({
      ios: {
        backgroundColor: colors.backgroundWhite,
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
      },
    }),
  },
  collapsibleHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  collapsibleHeaderItem: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    marginBottom: 20,
  },
  collapsibleHeaderServices: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  imageContainer: {
    backgroundColor: colors.btnBg,
    borderRadius: 30,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        borderWidth: 0,
        borderColor: colors.lightGrey,
      },
    }),
    width: screenWidth / 5,
    height: screenWidth / 6,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  titleContainer: {
    marginLeft: 10,
  },
  collapsibleBody: {
    padding: 5,
  },
});

export const ExtraServiceItem = (props) => {
  const [] = useState(false);
  const defaultSize = 25;
  const dispatch = useDispatch();

  return (
    <View style={extraserviceitemStyles.extraServiceContainer}>
      <View style={extraserviceitemStyles.serviceContainerInner}>
        <View style={extraserviceitemStyles.serviceContainerTitle}>
          <Title>{props.name}</Title>
          <Title gray ml10>
            + {props.time} min
          </Title>
        </View>
        <View>
          <Title>${props.price}</Title>
        </View>
      </View>
      <View
        style={[
          extraserviceitemStyles.serviceContainerInner,
          { marginBottom: 10 },
        ]}
      >
        <View style={extraserviceitemStyles.serviceContainerTitle}>
          <Title gray>{props.description}</Title>
        </View>
        <View style={{ flexDirection: 'row-reverse' }}>
          <InputSpinner
            buttonTextColor={colors.primary}
            skin='clean'
            style={{
              marginBottom: 10,
              borderColor: colors.primary,
              borderWidth: 1,
              ...Platform.select({
                ios: {
                  shadowColor: colors.btnTextDark,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 4,
                },
                android: {
                  overflow: 'hidden',
                  elevation: 4,
                },
              }),
            }}
            height={40}
            width={110}
            min={0}
            max={5}
            onChange={(num) => {
              AddonsSelection(
                num,
                props.name,
                props.price,
                props.time,
                dispatch
              );
            }}
          />
        </View>
      </View>

      <HorizontalLine />
    </View>
  );
};

const AddonsSelection = (num, name, price, time, dispatch) => {
  console.log(num, name, price, time);
  dispatch({
    type: 'ADDTOCART',
    payload: {
      id: name.replace(/[^A-Z0-9]/gi, '_').toLowerCase(),
      type: 'popular',
      name: name,
      quantity: num,
      price: parseInt(num) * parseInt(price),
      time: parseInt(num) * parseInt(time),
    },
  });
  dispatch({ type: 'COUNTTOTAL' });
};

const extraserviceitemStyles = StyleSheet.create({
  // extra services
  extraServiceContainer: {
    marginVertical: 5,
  },
  serviceContainerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  serviceContainerTitle: {
    flexDirection: 'row',
    width: '60%',
  },

  // radioButton
  radio: {
    backgroundColor: colors.backgroundWhite,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioActive: {
    backgroundColor: colors.btnBg,
  },
});

export const FixedFooter = (props) => {
  return <View style={[fixedfooterStyles.container]}>{props.children}</View>;
};

const fixedfooterStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? '10%' : '12%',
    left: 0,
    right: 0,
    backgroundColor: colors.backgroundWhite,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export const FlatCollapsible = (props) => {
  const [active, setActive] = useState(false);
  const rotateIcon = useRef(new Animated.Value(0)).current;

  const arrowAngle = rotateIcon.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  useEffect(() => {
    setActive(props.value);
  }, [props.value]);

  return (
    <>
      {props.onlyHeader ? (
        <TouchableWithoutFeedback
          disabled={props.disabled}
          type='checkbox'
          onPress={() => {
            setActive(!active);
            props.onChangeText(!active);
          }}
        >
          <View style={[flatcollapsibleStyles.collapsibleHeader]}>
            <View style={[flatcollapsibleStyles.collapsibleHeader]}>
              {props.showIcon && (
                <IconComponent size={25} {...props.showIcon} />
              )}
              <Title h4 m0 primary ml10>
                {props.name}
              </Title>
            </View>
            <View
              style={[
                {
                  margin: 10,
                  width: 25,
                  height: 25,
                },
              ]}
            >
              {active ? (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                  source={require('../../assets/checked.png')}
                />
              ) : (
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                  source={require('../../assets/unchecked.png')}
                />
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <Collapse
          isExpanded={props.isExpanded}
          onToggle={(toggle) => {
            setActive(toggle);
            if (active) {
              Animated.timing(rotateIcon, {
                duration: 200,
                toValue: 0,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
              }).start();
            } else {
              Animated.timing(rotateIcon, {
                duration: 200,
                toValue: 1,
                easing: Easing.bezier(0.4, 0.0, 0.2, 1),
                useNativeDriver: false,
              }).start();
            }
          }}
          style={[flatcollapsibleStyles.collapsible]}
        >
          <CollapseHeader style={[flatcollapsibleStyles.collapsibleHeader]}>
            <View style={[flatcollapsibleStyles.collapsibleHeader]}>
              {props.showIcon && (
                <IconComponent size={25} {...props.showIcon} />
              )}
              <Title h4 m0 primary ml10>
                {props.name}
              </Title>
            </View>
            {!props.hideArrow && (
              <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
                <IconComponent
                  type='feather'
                  name='chevron-down'
                  size={25}
                  color={colors.lightGrey}
                />
              </Animated.View>
            )}
          </CollapseHeader>
          <CollapseBody style={[flatcollapsibleStyles.collapsibleBody]}>
            {props.children}
          </CollapseBody>
        </Collapse>
      )}
    </>
  );
};

const flatcollapsibleStyles = StyleSheet.create({
  collapsible: {
    borderRadius: 10,
    marginVertical: 10,
  },
  collapsibleHeader: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  collapsibleBody: {
    padding: 10,
  },
});

export const FlatCollapsibleItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <View
          style={[
            flatcollapsibleitemStyles.flatContainer,
            flatcollapsibleitemStyles.mtb10,
          ]}
        >
          <Title h5>{props.name}</Title>
          <View style={[flatcollapsibleitemStyles.flatContainer]}>
            <Title h5 mr10>
              ${props.price}
            </Title>
            {props.active ? (
              <View
                style={[
                  flatcollapsibleitemStyles.roundToggle,
                  flatcollapsibleitemStyles.roundToggleActive,
                ]}
              >
                <Feather name='minus' size={20} color={colors.btnTextWhite} />
              </View>
            ) : (
              <View style={flatcollapsibleitemStyles.roundToggle}>
                <Feather name='plus' size={20} color={colors.lightGrey} />
              </View>
            )}
          </View>
        </View>
        <HorizontalLine block />
      </View>
    </TouchableOpacity>
  );
};

const flatcollapsibleitemStyles = StyleSheet.create({
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mtb10: {
    marginTop: 10,
    marginBottom: 10,
  },
  roundToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.primary,
    height: 25,
    width: 25,
    textAlign: 'center',
  },
  roundToggleActive: {
    backgroundColor: colors.primary,
  },
});

export const AppoinmentCard = (props) => {
  return (
    <View style={appoinmentCardStyles.container}>
      {(props.status === 'looking' || props.status === 'upcoming') && (
        <View>
          <Title h4 center primary bold>
            {props.customer
              ? 'Looking for a Professional'
              : 'Waiting for accept'}
          </Title>
          <HorizontalLine primary height={4} />
        </View>
      )}

      {props.status === 'canceled' && (
        <View>
          <Title h4 center completed canceled bold>
            Canceled
          </Title>
          <HorizontalLine completed canceled height={4} />
        </View>
      )}

      {props.status === 'accepted' && (
        <View>
          <Title h4 center accepted bold>
            Accepted
          </Title>
          <HorizontalLine accepted height={4} />
        </View>
      )}

      {props.status === 'completed' && (
        <View>
          <Title h4 center completed bold>
            Performed
          </Title>
          <HorizontalLine completed height={4} />
        </View>
      )}

      {props.status === 'confirmed' && (
        <View>
          <Title h4 center completed bold>
            Performed
          </Title>
          <HorizontalLine completed height={4} />
        </View>
      )}

      <Grid>
        <Row style={{ marginVertical: 5 }}>
          <Col size={25}>
            <Title h5 m0 center>
              {moment(props.orderDate, 'MM-DD-YYYY HH:mm:ss a').format('ddd')}
            </Title>
            <Title large bold center>
              {moment(props.orderDate, 'MM-DD-YYYY HH:mm:ss a').format('DD')}
            </Title>
            <Title h5 m0 center gray>
              {moment(props.orderDate, 'MM-DD-YYYY HH:mm:ss a').format('MMM')}
            </Title>
          </Col>
          <Col size={55}>
            {props.cart &&
              props.cart
                .filter((item) => item.type === 'main')
                .map((citem, cindex) => {
                  return (
                    <Title key={cindex.toString()} ml10 bold>
                      {citem.name}
                    </Title>
                  );
                })}
            <Title ml10>
              {moment(props.orderDate, 'MM-DD-YYYY HH:mm:ss a').format(
                'hh:mm a'
              )}{' '}
              -{' '}
              {moment(props.orderDate, 'MM-DD-YYYY HH:mm:ss a')
                .add(props.totalTime, 'minutes')
                .format('hh:mm a')}
            </Title>
            <Title ml10>{props.totalClient} person</Title>
          </Col>
          <Col size={25}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Title bold mr10>
                {props.customer ? props.total : props.freelancerBalance} CAD
              </Title>
              {props.customer && props.discount && (
                <Title bold gray mr10>
                  -{props.discount} CAD
                </Title>
              )}
              {props.status === 'looking' && (
                <ActivityIndicator animating size={25} />
              )}
            </View>
          </Col>
        </Row>

        <Row style={{ marginVertical: 5 }}>
          <Col size={15}>
            <IconComponent
              name='map-marker-outline'
              type='materialcommunity'
              size={30}
            />
          </Col>
          <Col size={40}>
            <Title ml10 bold>
              <Title darkGrey>Street:{'  '}</Title>
              {props.street}
            </Title>
            <Title ml10 bold>
              <Title darkGrey>Unit/Flat:{'  '}</Title>
              {props.unit ? props.unit : ''}
            </Title>
            <Title ml10 bold>
              <Title darkGrey>City:{'  '}</Title>
              {props.city}
            </Title>
            <Title ml10 bold>
              <Title darkGrey>Provice:{'  '}</Title>
              {props.state}
            </Title>
            <Title ml10 bold>
              <Title darkGrey>Postal Code:{'  '}</Title>
              {props.zip}
            </Title>
            <Title ml10 bold>
              <Title darkGrey>Country:{'  '}</Title>
              {props.country}
            </Title>
          </Col>
          <Col size={45}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 10,
                alignItems: 'flex-end',
              }}
            >
              {/* {props.customer && props.flinfo && props.flinfo.profilePic && (
                <View
                  style={{
                    ...Platform.select({
                      ios: {
                        shadowColor: colors.veryDarkGrey,
                        shadowOffset: {
                          width: 0,
                          height: 0,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                      },
                      android: {
                        borderWidth: 0.5,
                        borderColor: colors.lightGrey,
                      },
                    }),
                  }}
                >
                  <Image
                    source={{ uri: props.flinfo.profilePic }}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                    }}
                  />
                </View>
              )} */}
            </View>
          </Col>
        </Row>

        <Row style={{ marginVertical: 5 }}>
          <Col size={60} style={{ flexDirection: 'row' }}>
            <IconComponent name='hash' type='feather' size={25} />
            <Title ml5 bold primary h5>
              Order ID
            </Title>
          </Col>
          <Col size={40} style={{ flexDirection: 'row' }}>
            <Title>{props.orderId}</Title>
          </Col>
        </Row>

        <Row style={{ marginVertical: 5 }}>
          <Col size={60} style={{ flexDirection: 'row' }}>
            <IconComponent name='plus-circle' type='feather' size={25} />
            <Title ml5 bold primary h5>
              Another Service
            </Title>
          </Col>
          <Col size={40} style={{ flexDirection: 'row' }}>
            {props.cart.filter((item) => item.type === 'another')[0] ? (
              <Title>
                {props.cart
                  .filter((item) => item.type === 'another')
                  .map((anoitem) => {
                    return anoitem.name;
                  })
                  .join(', ')}
              </Title>
            ) : (
              <Title>None</Title>
            )}
          </Col>
        </Row>

        <Row style={{ marginVertical: 5 }}>
          <Col size={60} style={{ flexDirection: 'row' }}>
            <IconComponent name='star' type='feather' size={25} />
            <Title ml5 bold primary>
              POPULAR ADD-ONS
            </Title>
          </Col>
          <Col size={40}>
            {props.cart.filter((popitem) => popitem.type === 'popular')[0] ? (
              <Title>
                {props.cart
                  .filter((item) => item.type === 'popular')
                  .map((popitem) => {
                    return popitem.name;
                  })
                  .join(', ')}
              </Title>
            ) : (
              <Title>None</Title>
            )}
          </Col>
        </Row>

        <Row style={{ marginVertical: 5 }}>
          <Col size={60} style={{ flexDirection: 'row' }}>
            <IconComponent
              name='microsoft-onenote'
              type='materialcommunity'
              size={25}
            />
            <Title ml5 bold primary h5>
              Add Style Notes
            </Title>
          </Col>
          <Col size={40}>
            <Title>{props.styleNotes ? props.styleNotes : 'None'}</Title>
          </Col>
        </Row>

        {props.customer ? (
          <>
            <Row style={{ marginVertical: 5 }}>
              <Col size={60} style={{ flexDirection: 'row' }}>
                <IconComponent name='user' type='feather' size={25} />
                <Title ml5 bold primary h5>
                  Professional
                </Title>
              </Col>
              <Col size={40}>
                {props.flinfo ? (
                  <>
                    <Title bold h4>
                      {`${props.flinfo.firstName} ${props.flinfo.lastName}`}
                    </Title>
                    {props.flinfo.phone && (
                      <Title bold h4>
                        {props.flinfo.phone}
                      </Title>
                    )}
                  </>
                ) : (
                  <Title>None</Title>
                )}
              </Col>
            </Row>
            <Row style={{ marginVertical: 5 }}>
              <Col size={60} style={{ flexDirection: 'row' }}>
                <IconComponent name='pricetag-outline' size={25} />
                <Title ml5 bold primary h5>
                  Promo or gift code
                </Title>
              </Col>
              <Col size={40}>
                {props.couponCode ? (
                  <View style={appoinmentCardStyles.promoCard}>
                    <Title h4 primary center>
                      {props.couponCode}
                    </Title>
                  </View>
                ) : (
                  <View>
                    <Title>None</Title>
                  </View>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <Row style={{ marginVertical: 5 }}>
            <Col size={60} style={{ flexDirection: 'row' }}>
              <IconComponent name='user' type='feather' size={25} />
              <Title ml5 bold primary h5>
                Customer
              </Title>
            </Col>
            <Col size={40}>
              {props.csInfo ? (
                <>
                  {props.csInfo.firstName ? (
                    <Title bold h4>
                      {`${props.csInfo.firstName} ${props.csInfo.lastName}`}
                    </Title>
                  ) : (
                    <Title bold h4>
                      {`${props.csInfo.email}`}
                    </Title>
                  )}
                  {props.csInfo.phone !== '' && (
                    <Title bold h4>
                      {props.csInfo.phone}
                    </Title>
                  )}
                </>
              ) : (
                <Title>None</Title>
              )}
            </Col>
          </Row>
        )}
      </Grid>

      {props.status === 'confirmed' && (
        <>
          <HorizontalLine block />
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <Title h2 center>
              Rating
            </Title>
            <StarRating
              maxStars={5}
              rating={props.freelancerRating ? props.freelancerRating : 0}
              fullStarColor={colors.star}
              starStyle={{
                marginHorizontal: 5,
              }}
              selectedStar={(rating) =>
                props.customer && props.onStarRatingPress(rating)
              }
            />
          </View>
        </>
      )}

      <View
        style={{
          flex: 1,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {props.status === 'completed' && props.customer && (
          <Button
            loading={props.confirmedLoading}
            disabled={props.confirmedLoading}
            accepted
            onPress={() => {
              props.onConfirmed(props.total, props.id);
            }}
          >
            Confirm
          </Button>
        )}
      </View>

      <View
        style={{
          flex: 1,
          marginBottom: 10,
        }}
      >
        {props.status === 'completed' &&
          props.freelancer &&
          !props.freelancerRating && (
            <>
              <HorizontalLine block />
              <Title center bold mt20 h4 completed style={{ margin: 30 }}>
                Thanks for completing your order, please ask the customer to
                confirm the appointment.
              </Title>
            </>
          )}
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        {props.status === 'accepted' && props.freelancer && (
          <Button
            loading={props.acceptedLoading}
            disabled={props.acceptedLoading}
            completed
            onPress={() => {
              props.onDone(props.total, props.id);
            }}
          >
            Completed
          </Button>
        )}

        {((props.status === 'upcoming' && !props.freelancer) ||
          (props.status === 'accepted' && props.customer)) && (
          <Button
            loading={props.canceledLoading}
            disabled={props.canceledLoading}
            canceled
            onPress={() => {
              props.onCancel(props.id);
            }}
          >
            Cancel Order
          </Button>
        )}

        {props.status !== 'upcoming' &&
          props.status === 'accepted' &&
          props.freelancer &&
          !props.customer && (
            <Button
              loading={props.canceledLoading}
              disabled={props.canceledLoading}
              canceled
              onPress={() => {
                props.onCancel(props.id);
              }}
            >
              Cancel Order
            </Button>
          )}

        {props.status === 'upcoming' && props.freelancer && (
          <Button
            loading={props.acceptedLoading}
            disabled={props.acceptedLoading}
            accepted
            onPress={() => {
              props.onAccept(props.id);
            }}
          >
            Accept Order
          </Button>
        )}
      </View>
    </View>
  );
};

const appoinmentCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundWhite,
    margin: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: colors.btnTextDark,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  flatCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  flatCardContainerTitle: {
    flexDirection: 'row',
  },
  flatCardContainerTitleHeight: {
    height: 35,
  },
  flatCardData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  flatCardDataCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  promoCard: {
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    borderColor: colors.grey,
  },
});

export const EventContainer = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <IconComponent type='feather' name='plus' color={colors.btnTextWhite} />
    </View>
  );
};
