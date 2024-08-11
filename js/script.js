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
