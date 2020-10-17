// OPEN AND CLOSE POP-UP ON BUTTON CLICK

let currentButton, button, modal, close, i;
button = document.querySelectorAll('button[class^=learn]');

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        currentButton = this.className;
        // Split current button className to get className for other elements
        const buttonClass = currentButton.split(/-| /);
        // When the user clicks on the button, open the pop-up
        modal = document.querySelector(`.modal-${buttonClass[2]}`);
        modal.style.display = 'block';
        // When the user clicks on X, close the pop-up
        close = document.querySelector(`.close-${buttonClass[2]}`);
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        // When the user clicks anywhere outside of the pop-up, close it
        window.addEventListener('click', (e) => {
            if (e.target == modal) { modal.style.display = 'none'; };
        });
    });
};
