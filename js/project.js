//fonction pour que la croix servent a fermer l'image sélectionner
function closeImage(){
    let container = document.getElementById("expanded-image");
    container.parentElement.style.display = "none"
}


//sert a mettre en plein écrans les image qui sont cliqués sur la gallerie
function openImage(imgs) {
    let expandImage = document.getElementById("expanded-image");
    expandImage.src = imgs.src;
    expandImage.parentElement.style.display = "flex"
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    }); 
}