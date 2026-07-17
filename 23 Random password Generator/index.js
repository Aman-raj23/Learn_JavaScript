function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    if (length < 6) {
        return `Password length should be at least 6 characters.`;
    }
    else {
        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
        }
        return `Random Password: ${password}`;
    }
}

console.log(generatePassword(6));
