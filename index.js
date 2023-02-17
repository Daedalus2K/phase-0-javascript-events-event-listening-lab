function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
         alert('I was clicked!'); //Two arguments:the name of the EVENT to listen for, and
                                    //a CALLBACK function to "handle" the event
        }
        input.addEventListener('click', clickAlert);
        console.log(addingEventListener);
}

