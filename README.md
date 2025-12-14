# 🍄 Mario Jump Game

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-Game-orange)
![CSS3](https://img.shields.io/badge/CSS3-Animation-blue)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![License](https://img.shields.io/badge/license-MIT-green)

Jogo simples inspirado no **Mario**, desenvolvido com **HTML, CSS e JavaScript puro**, onde o personagem precisa **pular obstáculos** no momento certo para sobreviver.

Projeto criado com foco **educacional e de portfólio**, demonstrando:
- Manipulação do DOM
- Animações com CSS
- Lógica de jogo em JavaScript
- Controle de eventos de teclado


# 🎮 Demonstração

> O jogo roda diretamente no navegador, **sem dependências externas**.

📌 **Objetivo:**  
Pular os obstáculos no tempo correto e evitar colisões.


# 🕹️ Controles

- **Barra de espaço** → Pular


# 📌 Funcionalidades

- 🏃 Animação contínua do personagem
- 🚧 Obstáculos em movimento
- ⏱️ Detecção de colisão
- 💥 Game Over automático
- 🎨 Animações usando apenas CSS
- ⚡ JavaScript puro (sem frameworks)


# 🏗️ Arquitetura do Projeto

Fluxo simples e eficiente:

```

HTML (estrutura)
↓
CSS (estilo e animações)
↓
JavaScript (lógica do jogo)

```


# 📂 Estrutura de Diretórios

```

mario_jump/
├── images/                # Sprites e imagens do jogo
│   ├── mario.gif
│   └── pipe.png
│
├── index.html             # Estrutura principal do jogo
├── style.css              # Estilos e animações
├── script.js              # Lógica do jogo
└── README.md              # Documentação

````



# ⚙️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
  - Animações
  - Keyframes
- **JavaScript (ES6+)**
  - Manipulação do DOM
  - Eventos de teclado
  - Intervalos e timers


# 🚀 Como Executar o Projeto

## Opção 1 — Abrir direto no navegador
```bash
Abra o arquivo index.html no navegador
````

## Opção 2 — Usar Live Server (VSCode)

1. Instale a extensão **Live Server**
2. Clique com o botão direito no `index.html`
3. Selecione **Open with Live Server**



# 🧠 Lógica Principal (Resumo)

* O personagem recebe uma classe `jump` ao pressionar a tecla
* O obstáculo se move continuamente via CSS
* Um `setInterval` verifica colisão comparando posições
* Ao detectar colisão → **Game Over**


# 🚀 Possíveis Evoluções

* 🏆 Sistema de pontuação
* 🔊 Efeitos sonoros
* 📱 Suporte a mobile (toque na tela)
* 🔄 Reiniciar jogo sem recarregar
* 🎮 Aumento progressivo da dificuldade
