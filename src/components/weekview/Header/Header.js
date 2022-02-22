import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import {
  availableNumberOfDays,
  calculateDaysArray,
  getFormattedDate,
  getFormattedDay,
} from '../utils';
import styles from './Header.styles';

const getDayTextStyles = (numberOfDays) => {
  const fontSize = numberOfDays === 7 ? 14 : 16;
  return {
    fontSize,
  };
};

const Column = ({
  column,
  numberOfDays,
  format,
  style,
  textStyle,
  showDayName,
}) => {
  return (
    <View style={[styles.column, style]}>
      <Text style={[getDayTextStyles(numberOfDays), textStyle]}>
        {getFormattedDate(column, format)}
      </Text>
      {showDayName && (
        <Text style={[getDayTextStyles(numberOfDays), textStyle]}>
          {getFormattedDay(column)}
        </Text>
      )}
    </View>
  );
};

const Columns = ({
  columns,
  numberOfDays,
  format,
  style,
  textStyle,
  showDayName,
}) => {
  return (
    <View style={styles.columns}>
      {columns.map((column) => {
        return (
          <Column
            style={style}
            textStyle={textStyle}
            key={column}
            column={column}
            numberOfDays={numberOfDays}
            format={format}
            showDayName={showDayName}
          />
        );
      })}
    </View>
  );
};

const WeekViewHeader = ({
  numberOfDays,
  initialDate,
  formatDate,
  style,
  textStyle,
  rightToLeft,
  showDayName,
}) => {
  const columns = calculateDaysArray(initialDate, numberOfDays, rightToLeft);
  return (
    <View style={styles.container}>
      {columns && (
        <Columns
          format={formatDate}
          columns={columns}
          numberOfDays={numberOfDays}
          style={style}
          textStyle={textStyle}
          showDayName={showDayName}
        />
      )}
    </View>
  );
};

WeekViewHeader.propTypes = {
  numberOfDays: PropTypes.oneOf(availableNumberOfDays).isRequired,
  initialDate: PropTypes.string.isRequired,
  formatDate: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  rightToLeft: PropTypes.bool,
  showDayName: PropTypes.bool,
};

WeekViewHeader.defaultProps = {
  formatDate: 'MMM D',
};

export default React.memo(WeekViewHeader);
