import styles from './Note.module.scss';

const Note = ({ note }) => {
    
    const { text, importance, dateCreated, dateUpdated } = note;

    const dateCreatedSplit = dateCreated.split(' ');
    const [date, time] = dateCreatedSplit;
    const [hours, minutes] = time.split(':');

    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <div className={styles.date}>
                    {date}
                </div>
                <div className={styles.time}>
                    {`${hours}:${minutes}`}
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.text}>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
            <div className={styles.footer}>
                Последние изменения в &nbsp;
                {dateUpdated && <div className={styles.dateUpdated}>{dateUpdated}</div>}
            </div>
        </div>
    )
}

export default Note;