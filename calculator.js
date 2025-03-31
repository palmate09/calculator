const result = document.getElementById('result'); 
const c_button = document.getElementById('c-button'); 
const delete_button = document.getElementById('delete-button'); 
const calculation = document.getElementById('result1'); 
const percent = document.getElementById('percentage'); 
const divide = document.getElementById('divide'); 
const multiply = document.getElementById('multiply'); 
const addition = document.getElementById('addition'); 
const subtraction = document.getElementById('subtraction'); 
const answer = document.getElementById('answer'); 

c_button.addEventListener('click', () => {
    result.textContent = ''; 
    if (calculation.textContent !== '') {
        calculation.textContent = ''; 
    }
});

delete_button.addEventListener('click', () => {
    let text = calculation.textContent; 
    if (text.length > 0) {
        calculation.textContent = text.slice(0, -1); 
    }
});

percent.addEventListener('click', () => {
    calculation.append('%'); 
}); 

divide.addEventListener('click', () => {
    calculation.append('÷');
});

multiply.addEventListener('click', () => {
    calculation.append('×');
});

addition.addEventListener('click', () => {
    calculation.append('+'); 
});

subtraction.addEventListener('click', () => {
    calculation.append('-'); 
});

for (let i = 0; i <= 9; i++) {
    const number = document.getElementById(`num-${i}`);
    if (number) {
        number.addEventListener('click', () => {
            calculation.textContent += i; 
        });
    }
}


answer.addEventListener('click', () => {
    const expression = calculation.textContent;

    try {
        const sanitizedExpression = expression
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100'); 

        const resultValue = new Function(`return ${sanitizedExpression}`)();

        if (!isNaN(resultValue)) {
            result.textContent = resultValue;
        } else {
            result.textContent = 'Error';
        }
    } catch (error) {
        result.textContent = 'Error';
    }
});






