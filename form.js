document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Form submitted succesfully! I promise. Absoulutely. Mhm. Did not go to the shredder. Nuh uh.');
    });
});