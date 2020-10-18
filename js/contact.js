const copyButton = document.querySelector('.copy-btn');
const emailDOM = document.querySelector('.email');

copyButton.addEventListener('click', () => {
    copyText(emailDOM);
});

const copyText = (e) => {
    let elementText = e.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();

    document.execCommand('copy');

    inputElement.parentNode.removeChild(inputElement);
};