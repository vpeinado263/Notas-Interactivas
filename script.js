document.getElementById('addNoteBtn').addEventListener('click', addNoteBtn);

function addNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.contentEditable = true;
    note.innerText = 'Nueva Nota';
    positionNote(note);
    document.getElementById('board').appendChild(note);
    makeDraggable(note);
}