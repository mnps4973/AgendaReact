import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '@/app/ui/dashboard/agenda/calendarheader.module.css';

export default function MyCalendar() {
    return (
        <>
            <div className={styles.header}>
                
            </div>
            <Calendar />
        </>
        
    );
}