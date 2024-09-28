import {Calendar} from "@nextui-org/calendar";
import {parseDate} from '@internationalized/date';
import styles from '@/app/ui/dashboard/agenda/mycalendar.module.css';


export default function MyCalendar() {
    return (
        <div className={styles.customCalendar} >
            <Calendar calendarWidth="70vw" showMonthAndYearPickers />
        </div>
    );
}