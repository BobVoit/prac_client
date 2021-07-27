import styles from './Notes.module.scss';
import { Component } from 'react';

import ListNotes from '../../components/ListNotes/ListNotes';
import FormNote from '../../components/FormNote/FormNote';

const notes = [
    { id: 1, text: 'Component. Are you OK?', importance: 4, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
    { id: 2, text: 'Component. Are you OK?', importance: 3, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
    { id: 3, text: 'Component. Are you OK? kfdgn kekrmlrektml verkldfgm ldfg, f.,g /.e, f', importance: 4, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
    { id: 4, text: 'Component. Are you OK?', importance: 2, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
    { id: 5, text: 'Component. Are you OK?', importance: 5, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
    { id: 6, text: 'Component. Are you OK?', importance: 1, dateCreated: '25.07.2021 22:47:28', dateUpdated: '25.07.2021  22:47:28'},
];

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openCreateNoteWindow: false,
        }

        this.openWindow = this.openWindow.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
    }

    openWindow() {
        this.setState({ openCreateNoteWindow: true });
    }

    closeWindow() {
        this.setState({ openCreateNoteWindow: false });
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={"container " + styles.notesContainer}>
                    <div className={styles.content}>
                        <div className={styles.head}>
                            <button 
                                type="button" 
                                className={styles.buttonAddNote}
                                onClick={this.openWindow}
                            >+</button>
                        </div>
                        <div className={styles.list}>
                            <ListNotes 
                                notes={notes}
                            />
                        </div>
                    </div>
                </div>
                <FormNote 
                    open={this.state.openCreateNoteWindow}
                    onClose={this.closeWindow}
                />
            </div>
        )
    }
}

export default Notes;