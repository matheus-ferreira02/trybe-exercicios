saveButton = document.getElementById('save');
resetButton = document.getElementById('reset-style')
textSection = document.querySelector('#texts');

window.onload = function () {
    if (localStorage.length > 0) {
        styles = JSON.parse(localStorage.getItem('styles'));
        apply(styles);
    }
}

saveButton.addEventListener('click', function () {
    checkBackground();
    checkColor();
    checkFontSize();
    checklineHeight();
    checkFontFamily();
    saveStyles();
    localStorage.setItem('styles', JSON.stringify(styles));
    apply(styles);
});

resetButton.addEventListener('click', function () {
    localStorage.clear();
    textSection.removeAttribute('style');
});

function checkBackground() {
    textBackground = document.getElementsByName('backgroundColor');
    for (let i = 0; i < textBackground.length; i += 1) {
        if (textBackground[i].checked) {
            textBackground = textBackground[i].value;
        }
    }
}

function checkColor() {
    colorText = document.getElementsByName('color');
    for (let i = 0; i < colorText.length; i += 1) {
        if (colorText[i].checked) {
            colorText = colorText[i].value;
        }
    }
}

function checkFontSize() {
    fontSize = document.getElementsByName('fontSize');
    for (let i = 0; i < fontSize.length; i += 1) {
        if (fontSize[i].checked) {
            fontSize = fontSize[i].value;
        }
    }
}

function checklineHeight() {
    lineHeight = document.getElementsByName('lineHeight');
    for (let i = 0; i < lineHeight.length; i += 1) {
        if (lineHeight[i].checked) {
            lineHeight = lineHeight[i].value;
        }
    }
}

function checkFontFamily() {
    fontFamily = document.getElementsByName('fontFamily');
    for (let i = 0; i < fontFamily.length; i += 1) {
        if (fontFamily[i].checked) {
            fontFamily = fontFamily[i].value;
        }
    }
}

function saveStyles() {
    styles = {
        'backgroundColor': textBackground,
        'color': colorText,
        'fontSize': fontSize,
        'lineHeight': lineHeight,
        'fontFamily': fontFamily,
    };
};

function apply(styles) {
   for (i in styles) {
        switch (i) {
            case 'backgroundColor':
                textSection.style.backgroundColor = styles[i];
                break;
            case 'color':
                textSection.style.color = styles[i];
                break;
            case 'fontSize':
                textSection.style.fontSize = styles[i];
                break;
            case 'lineHeight':
                textSection.style.lineHeight = styles[i];
                break;
            case 'fontFamily':
                textSection.style.fontFamily = styles[i];
                break;
        }
    }
};
