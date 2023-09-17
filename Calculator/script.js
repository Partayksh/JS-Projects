let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonText === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (buttonText === "C") {
            string = "";
            input.value = string;
        }

        else {
            string += buttonText;
            input.value = string;
        }


    })

})
