import { DateRange } from 'react-date-range'

const DatePicker = ({ value }) => {
  return (
    <DateRange
      rangeColors={['#F43F5E']}
      showDateDisplay={false}
      direction='vertical'
      // minDate={value.startDate}
      // maxDate={value.endDate}
      ranges={[value]}
      // onChange={handleSelect}
      // date={value.startDate}
    />
  );
};

export default DatePicker;