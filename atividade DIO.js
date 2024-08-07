class classePersonagem {
	constructor(nome, idade, tipo) {
		this.nome = nome
		this.idade = idade
		this.tipo = tipo
	}
	
	atacar() {
		let ataque
		switch(this.tipo) {
			case 'guerreiro':
				ataque = 'espada'
				break
                
			case 'mago':
				ataque = 'magia'
				break
                
			case 'monge':
            	ataque ='artes marciais'
            break
            
            case 'ninja':
            	ataque = 'shuriken'
            break
           
			default:
				ataque = 'ataque básico'
		}
		console.log(`O ${this.tipo} atacou usando ${ataque}`)
	}
}

let personagem = new classePersonagem('Gustavo', 20, 'guerreiro')

personagem.atacar()
