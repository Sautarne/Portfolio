function handleSubmit(event) {
    event.preventDefault();
    
    const mail = 'christophe.perez690@gmail.com'
    const successMessage = document.querySelector('.success-message');
    const checkSuccessMessage = document.querySelector('.success-message-text');
    const item = `<h3 class="success-message-text">Votre message à été envoyé à ${mail}</h3>`;

    if (checkSuccessMessage == null){

        successMessage.insertAdjacentHTML("beforeend", item);
        document.querySelector('form').reset();

    }else{

        document.querySelector('form').reset();

    }
    return false;
}
    
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);