//Escucha el evento click en el boton con el id 'addNoteBtn' y llama a la funcion 'addNote' al hacer click.
document.getElementById('addNoteBtn').addEventListener('click', addNote);

//Esta funcion crea una Nota
function addNote() {
    //crea un nuevo elemento div
    const note = document.createElement('div');
    //Le asigna la clase 'note' al nuevo elemento para qu tenga el estilo correspondiente (definidas en la hoja CSS).
    note.className = 'note';
    //Habilita la edicion del contenido directamente sobre el elemento (pudiendo editarse el contenido para escribir)
    note.contentEditable = true;
    //Acá se establece el texto inicail de la nueva nota.
    note.innerText = 'Nueva Nota';
    //Va a posicionar la nota en lugar aleatorio en la pantalla 
    positionNote(note);
    //Agrega el nuevo elemento 'note' al elemento con el id 'board' (donde se muestran las notas en el HTML)
    document.getElementById('board').appendChild(note);
    //Le permite al usuario arrastrar las notas reciente creada 
    makeDraggable(note);
}

//Esta funcion va posicionar la nota en un lugar aleatorio dentro de la ventana.
function positionNote(note) {
    //Asigna una posicion horizontal aleatoria con la unidad relativa al ancho de la ventana.
    note.style.left = Math.random() * 80 + 'vw';
    //Asigna una posicion vertical aleatoria con la unidad relativa a la altura de la ventana.
    note.style.top = Math.random() * 80 + 'vh';
}

//Con esta funcion se arrastra la nota la nota por la ventana de parte del usuario.
function makeDraggable(note) {
    //Entonces se va a ejecutar cuando el usuario presione con el mouse la nota.
    note.onmousedown = function(event) {
        //Se calcula la diferencia entre la posicion del mouse y la posicion de la nota en el eje X.
        let shiftX = event.clientX - note.getBoundingClientRect().left;
        //Se calcula la diferencia entre la posicion del mouse y la posicion de la nota en el eje Y.
        let shiftY = event.clientY - note.getBoundingClientRect().top;

        //Esta funcion interna mueve la nota a la nueva posicion (según el mouse) en la ventana.
        function moveAt(pageX, pageY) {
            //Ajusta la posicion hoizontal de la nota basandose en la posicion actual del mouse.
            note.style.left = pageX - shiftX + 'px';
            //Ajusta la posicion vertical de la nota basandose en la posicion actual del mouse.
            note.style.top = pageY - shiftY + 'px';
        }

        //Funcion que se llama constantemente mientras el mouse se mueve, para arrastrar la nota.
        function onMouseMove(event) {
            //Mueve la nota a la nueva posición del mouse.
            moveAt(event.pageX, event.pageY);
        }

        //Añade un Listener de 'mousemove' al documento para que la nota siga el movimiento del mouse
        document.addEventListener('mousemove', onMouseMove);

        //Cuando se suelta el botón del mouse se finaliza el arrastre.
        document.onmouseup = function() {
            //Acá se elimina el evento 'mousemove' para que la nota deje de moverse con el mouse.
            document.removeEventListener('mousemove', onMouseMove);
            //Limpia el evento 'onmouse' para eitar que se dispare nuevamente después de soltar el mouse.
            documet.onmouseup = null;
        };
    };

    //Previne que la nota quede aderida al mouse.
    note.ondragstart = function() {
        return false;//Previene que el elemento sea arrastrado como si fuera un archivo o imagen.
    };
}

console.log(document.body)