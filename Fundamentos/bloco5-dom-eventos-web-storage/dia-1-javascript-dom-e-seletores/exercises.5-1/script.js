title = document.getElementsByTagName('h1');
title[0].style.backgroundColor = '#03bb85';
title[0].style.padding = '20px';

function containerStyle(classTag, bgContainer, bgSubtitle) {
    document.getElementsByClassName(classTag)[0].style.backgroundColor = bgContainer;
}

function subtitleStyle(tag, bgSubtitle) {
    subtitleEmergency = document.querySelectorAll(tag + ' h3');
    for (let i of subtitleEmergency) {    
        i.style.backgroundColor = bgSubtitle;
    }
}

containerStyle('no-emergency-tasks', 'yellow');
containerStyle('emergency-tasks', 'orange',);
subtitleStyle('.no-emergency-tasks', 'black');
subtitleStyle('.emergency-tasks', 'pink');


document.getElementById('footer-container').style.backgroundColor = '#003153';