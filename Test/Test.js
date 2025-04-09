class SlotMachine {
    constructor() {
        this.Dinero = 300;
        this.Apuesta = 10;
        this.symbols = ['🍒', '🍋', '🍊', '🍇', '⭐'];
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
        if (this.Dinero >= this.Apuesta) {
            this.Dinero -= this.Apuesta;
            let results = [
                this.SimboloAleatorio(),
                this.SimboloAleatorio(),
                this.SimboloAleatorio()
            ];
            document.getElementById('S1').innerText = results[0];
            document.getElementById('S2').innerText = results[1];
            document.getElementById('S3').innerText = results[2];
            
            if (results[0] === results[1] && results[1] === results[2]) {
                this.Dinero += this.Apuesta * 5; // Premio 5x la apuesta
            }
            this.CambiarDisplay();
        }
    }

    SimboloAleatorio() {
        return this.symbols[Math.floor(Math.random() * this.symbols.length)];
    }
}

let game = new SlotMachine();
game.CambiarDisplay();
