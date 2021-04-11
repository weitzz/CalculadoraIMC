//pegar as infos dos inputs
function app() {
    const form = document.querySelector('.form');


    form.addEventListener('submit', event => {
        event.preventDefault();
        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const weightValue = parseFloat(weight.value)
        const heightValue = parseFloat(height.value)


        if (!weightValue) {
            showResult('Peso inválido', false)
            return
        }
        if (!heightValue) {
            showResult('Altura inválida', false)
            return
        }

        const imc = myIMC(weightValue, heightValue)
        const levelIMC = getClassIMC(imc)

        console.log(imc, levelIMC)

        const msg = `Seu IMC é ${imc} (${levelIMC})`

        showResult(msg, true)
    });

    function getClassIMC(imc) {
        const level = ['Abaixo do Peso',
            'Peso Normal',
            'Sobrepeso',
            'Obesidade Grau I',
            'Obesidade Grau II',
            'Obesidade Grau III ou Móbida'
        ]
        if (imc >= 39.9) {
            return level[5]
        }
        if (imc >= 34.9) {
            return level[4]
        }
        if (imc >= 29.9) {
            return level[3]
        }
        if (imc >= 24.9) {
            return level[2]
        }
        if (imc >= 18.5) {
            return level[1]
        }
        if (imc < 18.5) {
            return level[0]
        }
    }
    function myIMC(weight, height) {
        //peso / altura*2
        const calcIMC = weight / height ** 2;
        return calcIMC.toFixed(2)

    }
    //cria elemento html
    function createText() {
        const message = document.createElement('p');
        return message
    }

    function showResult(msg, isValid) {
        const message = document.querySelector('.message');
        message.innerHTML = ''

        const result = createText()
        isValid ? result.classList.add('text-result') :
            result.classList.add('error')
        result.innerHTML = msg
        message.appendChild(result)

    }

}

app()

