const lightbulbSwitch = document.querySelector('#lightbulb-switch');
const lightbulbImg = document.querySelector('#lightbulb-img');

let isLightbulbOn = false;

lightbulbSwitch.addEventListener('click', function() {

    if (isLightbulbOn) {
        isLightbulbOn = false;
        lightbulbImg.src='on.png';
    }
    
    else {
        isLightbulbOn = true;
        lightbulbImg.src='on.png';
    }
    console.log(isLightbulbOn)
})
 