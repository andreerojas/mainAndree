const radios = document.querySelectorAll('.form-check input[type="radio"]');
const downloadLink = document.querySelector('.modal-footer a');
const readSelectedLanguage = ()=>{
    const selectedRadio  = document.querySelector('.form-check input[type="radio"]:checked');
    const found = cvLinks.find( el => el.language === selectedRadio.value);
    downloadLink.setAttribute('href',found.cvLink);
}

for(let radio of radios){
    radio.addEventListener('input',readSelectedLanguage);
}

readSelectedLanguage();