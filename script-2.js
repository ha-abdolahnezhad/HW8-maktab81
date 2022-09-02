const backgroundSetter = (elem) => {
    elem.style.backgroundColor = "cyan";
    elem.innerText = "123456789";
}

function elementCreator(element, callback) {
    
    element = document.createElement(element);
    document.querySelector('body').appendChild(element);
    
    callback(element);
}

elementCreator('div', backgroundSetter);