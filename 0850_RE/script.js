const modal = document.querySelector('#modal');
document.querySelector('#contactBtn').addEventListener('click', () => {
    modal.classList.add('is-open');
});

document.querySelector('#closeBtn').addEventListener('click', () => {
    modal.classList.remove('is-open');
});