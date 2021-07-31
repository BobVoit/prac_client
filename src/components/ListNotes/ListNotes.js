import styles from './ListNotes.module.scss';

import Note from '../Note/Note';


const ListNotes = ({ notes, updateNote, changeCompleted }) => {
    return (
        <div className={styles.wrapper}>
            {notes && notes.map(note => <Note 
                key={note.id} 
                note={note} 
                updateNote={updateNote}
                changeCompleted={changeCompleted}
            />)}
        </div>
    )
}

export default ListNotes;