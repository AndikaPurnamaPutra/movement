function copyFunction(elementId) {
    const copyText = document.getElementById(elementId).textContent;
    const textArea = document.createElement("textarea");
    textArea.textContent = copyText;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}
