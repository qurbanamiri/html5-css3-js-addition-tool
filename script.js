const firstNoArea = document.querySelector('.firstNo');
const secondNoArea = document.querySelector('.secondNo');
const clickButton = document.querySelector('button');
const resultArea = document.querySelector('.result');

function collect(){
    firstNoArea.select();
    let firstNumber = parseFloat(firstNoArea.value);

    secondNoArea.select();
    let secondNumber = parseFloat(secondNoArea.value);
    
    resultArea.innerHTML = firstNumber + secondNumber;
    
    if(!firstNumber || !secondNumber){
        return alert('Please put the first and second numbers!')
    };
    resultArea.style.display = 'block'
    clickButton.style.backgroundColor = 'rgba(157, 211, 76, 0.705)';
    clickButton.innerHTML = 'The numbers have been added';
    
    setTimeout(() => {
        clickButton.style.backgroundColor = 'rgb(228, 244, 249)';
        clickButton.innerHTML = 'Addition of numbers';
    }, 1600);

};

clickButton.addEventListener('click', collect);

function checkInput(){
    if(!firstNoArea.value || !secondNoArea.value){
        resultArea.style.display = 'none';
    };
};

firstNoArea.addEventListener('keyup', checkInput);
secondNoArea.addEventListener('keyup', checkInput);