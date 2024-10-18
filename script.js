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
    note.style.left = Math.random() * 80 + 'vh';
    note.style.top = Math.random() * 80 + 'vh';
}
function makeDraggable(note) {
    note.onmousedown = function(event) {
        let shiftX = event.clientX - note.getBoudingClientRect().left;
        let shiftY = event.clientY - note.getBoudingClientRect().top;

        function moveAt(pageX, pageY) {
            note.style.left = pageX - shiftX + 'px';
            note.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        note.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            note.onmouseup = null;
        };
    };

    note.ondragstart = function() {
        return false;
    };
}