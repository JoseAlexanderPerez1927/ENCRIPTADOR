function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);

            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        encryptedText += char;
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);

            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
            }
        }
        decryptedText += char;
    }

    document.getElementById('outputText').value = decryptedText;
}