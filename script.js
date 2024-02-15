function encrypt() {
    var message = document.getElementById('message').value;
    var encryptedMessage = message.replace(/e/g, 'enter');
                                .replace(/i/g, 'imes');
                                .replace(/a/g, 'ai');
                                .replace(/o/g, 'ober');
                                .replace(/u/g, 'ufat');
    document.getElementById('message').value = encryptedMessage;
}

function decrypt() {
    var message = document.getElementById('message').value;
    var decryptedMessage = message.replace(/enter/g, 'e');
                                    .replace(/imes/g, 'i');
                                    .replace(/ai/g, 'a');
                                    .replace(/ober/g, 'o');
                                    .replace(/ufat/g, 'u');
    document.getElementById('message').value = decryptedMessage;
}

function clearText() {
    document.getElementById('message').value = '';
}

function copyText() {
    var copyText = document.getElementById('message');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Texto copiado')
}
