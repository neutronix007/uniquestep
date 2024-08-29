function validateCredentials() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials and corresponding folder links
    const credentials = {
        'autism': { password: 'autism1', link: 'https://drive.google.com/drive/folders/AUTISM_FOLDER_ID' },
        'covid': { password: 'covid1', link: 'https://drive.google.com/drive/folders/COVID_FOLDER_ID' },
        'tech': { password: 'tech1', link: 'https://drive.google.com/drive/folders/TECH_FOLDER_ID' },
        'gaming': { password: 'gaming1', link: 'https://drive.google.com/drive/folders/GAMING_FOLDER_ID' },
        'design': { password: 'design1', link: 'https://drive.google.com/drive/folders/DESIGN_FOLDER_ID' }
    };

    if (credentials[username] && credentials[username].password === password) {
        // Redirect to the corresponding Google Drive link
        window.location.href = credentials[username].link;

        alert('Login Successful! You are being redirected');
    } else {
        alert('User does not exist');
    }
}


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
// }

