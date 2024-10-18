document.getElementById('addNoteBtn').addEventListener('click', addNote);

function addNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.contentEditable = true;
    note.innerText = 'Nueva Nota';
    positionNote(note);
    document.getElementById('board').appendChild(note);
    makeDraggable(note);
}
function positionNote(note) {
    note.style.left = Math.random() * 80 + 'vw';
    note.style.top = Math.random() * 80 + 'vw';
}