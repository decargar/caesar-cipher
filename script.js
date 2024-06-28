// Function to encrypt the message using Caesar Cipher
function caesarCipherEncrypt(text, shift) {
    shift = shift % 26;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= 'A' && char <= 'Z') {
            let code = text.charCodeAt(i);
            let encryptedChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            result += encryptedChar;
        } else if (char >= 'a' && char <= 'z') {
            let code = text.charCodeAt(i);
            let encryptedChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            result += encryptedChar;
        } else {
            result += char;
        }
    }

    return result;
}

// Function to decrypt the message using Caesar Cipher
function caesarCipherDecrypt(text, shift) {
    return caesarCipherEncrypt(text, -shift);
}

// Function to handle encryption
function encryptText() {
    const plaintext = document.querySelector('.enc #plaintext').value;
    const shift = parseInt(document.querySelector('.enc #shift').value);
    const encryptedText = caesarCipherEncrypt(plaintext, shift);
    document.getElementById('encrypted').innerText = encryptedText;
}

// Function to handle decryption
function decryptText() {
    const plaintext = document.querySelector('.dec #plaintext').value;
    const shift = parseInt(document.querySelector('.dec #shift').value);
    const decryptedText = caesarCipherDecrypt(plaintext, shift);
    document.getElementById('decrypted').innerText = decryptedText;
}
