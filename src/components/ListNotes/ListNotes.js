import styles from './ListNotes.module.scss';

import Note from '../Note/Note';


const ListNotes = ({ notes }) => {
    console.log(notes)
    return (
        <div className={styles.wrapper}>
            {notes && notes.map(note => <Note 
                key={note.id} 
                note={note} 
            />)}
        </div>
    )
}

export default ListNotes;