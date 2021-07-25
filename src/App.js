import { Component } from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Notes from './pages/Notes/Notes';

class App extends Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.content}>
          <Notes />
        </main>
      </div>
    )
  }
}

export default App;
