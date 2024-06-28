# Teste Econverse: Vaga Desenvolvedor Front-End Jr

### Vem ser #Econverse!

Segue abaixo as instruções para a execução do teste.

## Instruções

- Faça um fork desse projeto para a sua conta pessoal do GitHub.
- Desenvolva a página conforme as **Especificações Técnicas**
- Crie um README com as instruções para compilar, testar e rodar o projeto.
- O link do repositório deverá ser enviado para o e-mail ana.nascimento@econverse.com.br, joao.victor@econverse.com.br e eduardo.rodrigues@econverse.com.br com o título **Teste Vaga FrontEnd Jr**

## Especificações Técnicas

- Desenvolver a pagina em React e TypeScript conforme o [layout](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1). Para conseguir pegar os elementos do Figma, basta copiar o layout para sua conta que terá acesso de edição.
- Montar a [vitrine](https://app.econverse.com.br/teste-front-end/junior/tecnologia/layout/vitrine-produtos.png) de produtos consumindo as informações dos produtos em json atraves desse [Link](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
- Desenvolver a interação ao clicar em um produto conforme layout. A interação consiste em abrir um modal com as principais informações do produto presente no arquivo [JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json) conforme o produto que clicar.
- Utilizar Pré-processador Sass, Less ou Stylus.
- Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- Não Utilizar bibliotecas UI como Bootstrap, Foundation, ou afins.

## Pontos Extras

- Utilizar Boas práticas de SEO
- Uso de HTML semântico

## O que avaliaremos em seu teste

- Organização do projeto
- Lógica do código
- Componentização
- Alcance dos objetivos propostos

**Boa sorte! ;)**

# Teste Front-End Jr - Econverse

Este projeto é um teste para a vaga de Front-End Jr na Econverse, desenvolvido com React, TypeScript e Sass. O objetivo é criar uma página de e-commerce simples, seguindo um layout fornecido.

## Funcionalidades

- Cabeçalho com navegação e informações da loja.
- Banner de promoção em destaque.
- Seção de categorias com ícones e nomes.
- Seção de produtos relacionados com um carrossel customizado.
- Modal para exibir detalhes do produto ao clicar.

## Tecnologias Utilizadas

- React
- TypeScript
- Sass
- CSS Modules
- Vite

## Como rodar o projeto

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/vitorwhois/teste-front-end-jr.git]
    ```

2.  **Instale as dependências:**

    ```bash
    cd teste-front-end-jr
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

4.  **Acesse no navegador:**
    Abra o navegador e acesse `http://localhost:5173/` para visualizar a página.

## Estrutura do Projeto

- `public/`: Arquivos estáticos (imagens, ícones, etc.).
- `src/`: Código fonte da aplicação.
  - `components/`: Componentes React.
  - `styles/`: Arquivos de estilo Sass.
  - `types/`: Definições de tipos TypeScript.
  - `App.tsx`: Componente principal da aplicação.
  - `main.tsx`: Arquivo de entrada principal.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Inicia um servidor local para visualizar a versão de produção.

## Considerações

- Este projeto foi desenvolvido como um teste para a vaga de Front-End Jr na Econverse.
- O carrossel de produtos e as features foi implementado de forma customizada, sem o uso de bibliotecas externas.
- Os estilos foram criados com Sass e CSS Modules para garantir modularidade e reutilização.
