class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }

    atacar() {
        if (this.tipo === "mago") {
            this.ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            this.ataque = "usou espada";
        } else if (this.tipo === "monge") {
            this.ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            this.ataque = "usou shuriken";
        }
    }
        
    escrever() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let NewHero = new Hero("José", "23 ANOS", "guerreiro");

NewHero.atacar();
NewHero.escrever();