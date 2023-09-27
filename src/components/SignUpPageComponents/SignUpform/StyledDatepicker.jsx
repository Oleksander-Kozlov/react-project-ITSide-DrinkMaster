import {
  forwardRef, useState,
  // useState
} from 'react';
import {
  // Formik,
  setFieldValue
} from 'formik';
import { AiOutlineCalendar } from 'react-icons/ai';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper } from './StyledDatepicker.styled';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const StyledDatepicker = () => {
  // const { name, value } = field;
  // const { setFieldValue } = form;
const [selectedDate, setSelectedDate] = useState(Date.now());
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')} <AiOutlineCalendar />
        
      </TitleWrapper>
    );
  });
  CustomInput.displayName = 'CustomInput';
  return (
    <>
      <DatePicker
       
        selected={selectedDate}
       
        onChange={(date) => {
          setSelectedDate(date);
          setFieldValue('date', date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd/MM/yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;
