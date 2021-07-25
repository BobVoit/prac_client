import styles from './Notes.module.scss';
import { Component } from 'react';

import ListNotes from '../../components/ListNotes/ListNotes';

class Notes extends Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.list}>
                            <ListNotes />
                        </div>
                        <div className={styles.create}>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notes;