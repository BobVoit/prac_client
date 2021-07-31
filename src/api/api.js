import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3001",
});


export const notesAPI = {
    getAllNotes() {
        return instance.get('/notes/all');
    },
    addNewNote(text, importance) {
        return instance.post('/notes/add', {
            text, importance
        });
    },
    updateNoteById({ id, text, importance }) {
        return instance.post(`/notes/update/${id}`, {
            text, importance
        });
    },
    deleteNote(id) {
        return instance.get(`/notes/delete/${id}`);
    },
    changeCompleted(id, completed) {
        return instance.pos(`/notes/completed/${id}`, {
            completed
        })
    }
};