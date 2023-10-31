function criaCalculadora() {

    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.calculando();
                }
            });
        },

            calculando() {
                //pegando texto do display
                let conta = this.display.value;

                try {
                    conta = eval(conta);

                    if (!conta) {
                        alert('Conta inválida');
                        return;
                    }
                    this.display.value = String(conta);
                } catch (e) {
                    alert('Conta inválida');
                    return;
                }
            },

            clearDisplay() {
                this.display.value = '';
            },

            remove() {
                this.display.value = this.display.value.slice(0, -1);
            },

            clickBotoes() {
                //this -> calculadora
                document.addEventListener('click', e => {
                    const el = e.target;//qual botao
                    //console.log(this);-Testando

                    if (el.classList.contains('but-num')) {
                        this.butSetDisplay(el.innerText);//enviando qual Botao
                    }

                    if (el.classList.contains('but-clear')) {
                        this.clearDisplay();
                    }

                    if (el.classList.contains('but-del')) {
                        this.remove();
                    }

                    if (el.classList.contains('but-eq')) {
                        this.calculando();
                    }
                });//setCalculadora
            },

            butSetDisplay(valor) {
                this.display.value += valor;
            }
        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();
