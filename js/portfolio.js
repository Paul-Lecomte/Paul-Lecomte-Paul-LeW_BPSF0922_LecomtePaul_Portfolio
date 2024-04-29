// used to go directly to the contact info
function contactFunction() {
    document.documentElement.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth",
    }); 
}


const accordionContent = document.querySelectorAll('.accordion-content')

//on boucle sur tous les accordeons de la page
accordionContent.forEach((accordion, index) => {
    //on récup le header de chaque accordéon
    let header = accordion.querySelector('header')

    //on écoute le clique sur le header
    header.addEventListener('click', () => {
        //on ajoute la classe open a notre accordeon
        accordion.classList.toggle('open')

        //on récupère la description de l'accordeon dans une variable
        let description = accordion.querySelector('.description')
        //si l'accordéon est open on affiche la descriotion, sinon c'est caché
        if (accordion.classList.contains(`open`)) {
            description.style.height = `${description.scrollHeight}px`
            accordion.querySelector('i').classList.replace('fa-plus', 'fa-minus')
        } else {
            description.style.height = `0px`
            accordion.querySelector('i').classList.replace('fa-minus', 'fa-plus')
        }
        //on appelle la fonction removeOpen en lui passant l'index de l'accordion
        removeOpen(index)
    })
})


//fonction pour enlever la classe open a un accordéon selon son index
function removeOpen(index) {
    //pour chaque accordéon
    accordionContent.forEach((accordionSelected, i) => {
        //si l'index reçu n'est pas égal a l'index da la boucle
        if (index !== i){
            //on supprime la classe open, on réduit la descrition, est on change le + en -
            accordionSelected.classList.remove('open')
            let desc = accordionSelected.querySelector('.description')
            desc.style.height = '0px'
            accordionSelected.querySelector('i').classList.replace('fa-minus', 'fa-plus')
        }
    })
}


let slideIndex = 1;
showSlides(slideIndex);

//controle autoplay
let autoplayCheck = true
console.log(autoplayCheck)

let autoplay = setInterval(function autoplayPlay(){
    document.getElementById("next").click()
}, 6000)

//fonction de pause & play
function stopAutoplay(){
    let image = document.getElementById('stop')
    if (autoplayCheck === false){
        autoplayCheck = true
        autoplay = setInterval(function autoplayPlay(){
            document.getElementById("next").click()
        }, 6000)
        image.src = "assets/pause-circle.svg"
    } else {
        image.src = "assets/play-circle.svg"
        clearInterval(autoplay)
        autoplayCheck = false
    }
    console.log(autoplayCheck)
}


// controle pour + ou - des slides
function nextSlide(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//création de la fonction pour le slider
function showSlides(n) {
    //déclaration de i
    let i;
    //récupérations de la classe .container-projects
    let slides = document.getElementsByClassName("container-projects");
    //si n est plus haut que slides.length, slideIndex est égal à 1
    if (n > slides.length) {slideIndex = 1}
    //si n est plus bas que 1 slideIndex est égal é slides.length
    if (n < 1) {slideIndex = slides.length}
    //si i est égal a zéro on cache la slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //on affiche la slides qui est active en changeant le style none en flex
    slides[slideIndex-1].style.display = "flex"
}



//récupération de tous les id du formulaire
let firstName = document.getElementById('submit-form-firstname')
let surName = document.getElementById('submit-form-surname')
let adress = document.getElementById('submit-form-adress')
let postal = document.getElementById('submit-form-postal')
let city = document.getElementById('submit-form-city')
let email = document.getElementById('submit-form-email')
let phone = document.getElementById('submit-form-phone')
let textArea = document.getElementById('text-contact')


//tous les regex qui seront utilisé
let regExName = /^[A-Za-z]*\s?[A-Za-z]+$/
let regExAdress = /^[#.0-9a-zA-Z\s,-]+$/
let regExEmail = /^[A-Za-z0-9\-.,_]+@[A-Za-z]+\.[a-z]{2,}$/
let regExPhone = /^(\+|00)?(41)?\s?(0?[0-9][0-9])\s?.?([0-9]{2})?([0-9]{3})\s?.?([0-9]{2})\s?.?([0-9]{2})$/
let regExPostal = /^[0-9]{4,}$/

//déclaration d'une fonction pour gagner du temps sur la modification des bordure
function style(input, color){
    input.style.cssText = `border: 1px solid ${color};`
}

//check l'input de l'utilisateur après qu'il soit sortis du champ
surName.addEventListener('blur', function (){
    if (regExName.test(surName.value)){
        console.log(true)
        style(surName, 'green')
        document.getElementById("message2").textContent = 'This name is valid'
    } else if (surName.value === '') {
        console.log('empty')
        style(surName, 'orange')
        document.getElementById("message2").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(surName, 'red')
        document.getElementById("message2").textContent = 'This name is invalid'
    }
})

firstName.addEventListener('blur', function (){
    if (regExName.test(firstName.value)){
        console.log(true)
        style(firstName, 'green')
        document.getElementById("message1").textContent = 'This name is valid'
    } else if (firstName.value === '') {
        console.log('empty')
        style(firstName, 'orange')
        document.getElementById("message1").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(firstName, 'red')
        document.getElementById("message1").textContent = 'This name is invalid'
    }
})

adress.addEventListener('blur', function (){
    if (regExAdress.test(adress.value)){
        console.log(true)
        style(adress, 'green')
        document.getElementById("message3").textContent = "This address is valid"
    } else if (adress.value === '') {
        console.log('empty')
        style(adress, 'orange')
        document.getElementById("message3").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(adress, 'red')
        document.getElementById("message3").textContent = "This address is invalid"
    }
})

postal.addEventListener('blur', function (){
    if (regExPostal.test(postal.value)){
        console.log(true)
        style(postal, 'green')
        document.getElementById("message4").textContent = "This postal code is valid"
    } else if (postal.value === '') {
        console.log('empty')
        style(postal, 'orange')
        document.getElementById("message4").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(postal, 'red')
        document.getElementById("message4").textContent = "This postal code is invalid"
    }
})

city.addEventListener('blur', function (){
    if (regExName.test(city.value)){
        console.log(true)
        style(city, 'green')
        document.getElementById("message5").textContent = "This town name is valid"
    } else if (city.value === '') {
        console.log('empty')
        style(city, 'orange')
        document.getElementById("message5").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(city, 'red')
        document.getElementById("message5").textContent = "This town name is invalid"
    }
})

email.addEventListener('blur', function (){
    if (regExEmail.test(email.value)){
        console.log(true)
        style(email, 'green')
        document.getElementById("message6").textContent = "This email is valid"
    } else if (email.value === '') {
        console.log('empty')
        style(email, 'orange')
        document.getElementById("message6").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(email, 'red')
        document.getElementById("message6").textContent = "This email is invalid"
    }
})

phone.addEventListener('blur', function (){
    if (regExPhone.test(phone.value)){
        console.log(true)
        style(phone, 'green')
        document.getElementById("message7").textContent = "This phone number is valid"
    } else if (phone.value === '') {
        console.log('empty')
        style(phone, 'orange')
        document.getElementById("message7").textContent = 'This field need to be filled'
    } else {
        console.log(false)
        style(phone, 'red')
        document.getElementById("message7").textContent = "This phone number is invalid"
    }
})

textArea.addEventListener('blur', function(){
    if(textArea.value === ''){
        console.log('empty')
        style(textArea, 'orange')
        document.getElementById("message8").textContent = 'This field need to be filled'
    } else{
        console.log(true)
        style(textArea, 'green')
        document.getElementById("message8").textContent = "Thank you"
    }
})