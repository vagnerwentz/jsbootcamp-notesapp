import { initializeEditPage, generateLastEdited } from './views';
import { updateNote, removeNote } from './notes';

const titleElement = document.querySelector('#noteTitle');
const bodyElement = document.querySelector('#noteBody');
const removeElement = document.querySelector('#removeNote');
const dateElement = document.querySelector('#lastEdited');
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    });
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    });
    dateElement.textContent = generateLastEdited(note.updatedAt);
});

removeElement.addEventListener('click', (e) => {
    removeNote(noteId);
    location.assign('/index.html');
});

// When any of the data in the local storage changes this is going
// to allow us to update what the user sees
window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId);
    }
});
