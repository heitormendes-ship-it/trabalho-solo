# Cuidar de Perto

Site de apoio à rotina, à memória e à segurança de pessoas idosas, com perda de memória (como no início do Alzheimer) ou limitação de movimento, e de seus cuidadores e familiares.

Projeto da disciplina **Desenvolvimento Front-end para Web**, do Centro Universitário de João Pessoa (UNIPÊ), com o professor Israel Cunha.

- **Autor:** Heitor Mendes Crispim
- **Tecnologias:** HTML, CSS e JavaScript

> **Aviso:** este site é um apoio para organizar a rotina e não substitui o acompanhamento médico. Todos os nomes, horários, doses e dados de exemplo são fictícios, e os formulários não enviam nem guardam nenhuma informação.

## Problema e público-alvo

Pessoas com perda de memória ou limitação de movimento esquecem remédios, consultas e rotinas, ficam desorientadas e, em emergências, nem sempre conseguem informar quem são. Quem cuida delas também precisa de organização e de um registro do dia.

- **Público principal:** pessoas idosas, com perda de memória ou limitação de movimento.
- **Público secundário:** cuidadores e familiares.

## Páginas

| Página | Arquivo | O que tem |
|---|---|---|
| Início | `index.html` | Apresentação, vídeo, data de hoje e atalhos |
| Sobre | `html/sobre.html` | Missão, público e citação |
| Meu dia | `html/meu-dia.html` | Tarefas com barra de progresso e agenda |
| Medicamentos | `html/medicamentos.html` | Tabela de horários e estoque |
| Memórias | `html/memorias.html` | Álbum com imagens, nomes e parentesco |
| Músicas | `html/musicas.html` | Players de áudio |
| Relaxamento | `html/relaxamento.html` | Vídeo e exercício de respiração |
| Emergência | `html/emergencia.html` | Cartão de emergência (formulário) |
| Cuidador | `html/cuidador.html` | Registro do dia (formulário) |
| Dúvidas | `html/duvidas.html` | Perguntas e respostas |
| Contato | `html/contato.html` | Formulário de contato e mapa |

Todas as páginas têm o mesmo cabeçalho e menu, com navegação entre elas.

## Estrutura de pastas

```
TRABALHO/
├── index.html
├── README.md
├── css/
│   └── estilo.css
├── js/
│   └── script.js
├── html/
│   └── (demais páginas)
├── img/
├── audio/
└── video/
```

## Recursos de HTML usados

- Tags semânticas em todas as páginas: `header`, `nav`, `main`, `section`, `article`, `aside` e `footer`
- Multimídia: `audio`, `video`, `figure`, `figcaption` e `iframe` (mapa)
- Formulários: `date`, `file`, `color`, `range`, `tel`, `email`, `select`, `radio`, `checkbox` e `textarea`, com `required` e `placeholder`
- `datalist` (parentesco, em Emergência)
- Elementos interativos: `details` e `summary`
- Marcação de texto: `mark`, `del`, `ins`, `abbr`, `blockquote`, `cite`, `progress` e `meter`
- Tabela com `caption`, `thead` e `tbody`

## CSS e JavaScript

- **CSS:** layout responsivo, cores com bom contraste, letras grandes e foco visível para navegação por teclado.
- **JavaScript:**
  - botões **A-** e **A+** para mudar o tamanho da letra;
  - botão de **alto contraste**;
  - data de hoje mostrada na página inicial e em Meu dia;
  - barra de progresso das tarefas do dia;
  - mensagem de confirmação nos formulários de exemplo;
  - valor do controle deslizante de humor (Cuidador).

As escolhas de letra e contraste ficam salvas no navegador.

## Como abrir

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

## Arquivos de mídia

Os players dependem destes arquivos, que devem ser colocados nas pastas indicadas:

- `video/apresentacao.mp4` (página inicial)
- `video/relaxamento.mp4` (Relaxamento)
- `audio/musica-1.mp3` e `audio/musica-2.mp3` (Músicas)

As imagens da página Memórias são ilustrações de exemplo e podem ser trocadas por fotos reais.

## Uso de IA

Este projeto foi desenvolvido com apoio de uma ferramenta de IA (Claude), conforme permitido pelo professor.