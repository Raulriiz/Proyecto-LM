class SlotMachine {
    constructor() {
        this.Dinero = 300;
        this.Apuesta = 10;
        this.Symbolos = ['🍒', '🍋', '🍊', '🍇', '⭐'];
    }

    CambiarDisplay() {
        document.getElementById('Dinero').innerText = this.Dinero;
        document.getElementById('Apuesta').innerText = this.Apuesta;
    }

    AumentarApuesta() {
        if (this.Apuesta + 10 <= this.Dinero) {
            this.Apuesta += 10;
            this.CambiarDisplay();
        }
    }

    DisminuirApuesta() {
        if (this.Apuesta > 10) {
            this.Apuesta -= 10;
            this.CambiarDisplay();
        }
    }

    Girar() {
        if (this.Dinero < this.Apuesta) return;

        this.Dinero -= this.Apuesta;
        this.CambiarDisplay();

        const S1 = document.getElementById('S1');
        const S2 = document.getElementById('S2');
        const S3 = document.getElementById('S3');

        let giro = setInterval(() => {
            S1.innerText = this.SimboloAleatorio();
            S2.innerText = this.SimboloAleatorio();
            S3.innerText = this.SimboloAleatorio();
        }, 100); 

        
        setTimeout(() => {
            clearInterval(giro);

            const resultado = [
                this.SimboloAleatorio(),
                this.SimboloAleatorio(),
                this.SimboloAleatorio()
            ];

            S1.innerText = resultado[0];
            S2.innerText = resultado[1];
            S3.innerText = resultado[2];

            if (resultado[0] === resultado[1] && resultado[1] === resultado[2]) {
                this.Dinero += this.Apuesta * 5;
            }

            this.CambiarDisplay();
        }, 1000);
    }

    SimboloAleatorio() {
        return this.Symbolos[Math.floor(Math.random() * this.Symbolos.length)];
    }
}

let game = new SlotMachine();
game.CambiarDisplay();