import { createNote } from './notes';
import { setFilters } from './filters';
import { renderNotes } from './views';

renderNotes();

document.querySelector('#createNote').addEventListener('click', (e) => {
    const id = createNote();
    // When the note is created, it is redirected to edit.html directly
    location.assign(`/edit.html#${id}`);
});

document.querySelector('#searchText').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    });
    renderNotes();
});

document.querySelector('#filterBy').addEventListener('change', (e) => {
    setFilters({
        sortBy: e.target.value
    });
    renderNotes();
});

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        renderNotes();
    }
});
