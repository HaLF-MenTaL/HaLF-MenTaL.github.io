// get images src onclick
const images = document.querySelectorAll(".column img");
let image;
let imgSrc;
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        image = e.target;

        //run modal function
        imgModal(imgSrc);
    });

});

//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector("#gallery").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);

    //check the screen orientation and apply style to image
    if (screen.availHeight > screen.availWidth) {
        //for potrait screen
        newImage.setAttribute("style", "width: 80%");
    }
    else {
        //for landscape screen
        if (image.naturalHeight > image.naturalWidth) {
            //if picture potrait
            newImage.setAttribute("style", "width: 55vh");
        } else {
            //if picture landscape
            newImage.setAttribute("style", "width: 85vh");
        }
    }

    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};


