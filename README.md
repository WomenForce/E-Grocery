![iconEgrocery](/assets/egrocery.png)

# E-grocery Salesforce
## Descrição
Online Store desenvolvida pelo grupo WomenForce como Projeto Final para a conclusão do curso de Salesforce Commerce Cloud oferecido pela  [Gama Academy](https://www.gama.academy/?gclid=CjwKCAjwj6SEBhAOEiwAvFRuKJi-KxKqLf8_ps8xhUZCthaOiIdt6Q9LiqhmeVCSfQou7_ojhwwY-xoCPrMQAvD_BwE) & [Accenture](https://www.accenture.com/br-pt)

Para visualizar a descrição completa do projeto, siga [E-grocery](/assets/desafio.pdf)

   > A ACN OF e suas 20 lojas espalhadas na grande São Paulo fazem a diferença. Com produtos organizados, atendentes super dispostos a ajudar, e com um ambiente tranquilo, amigável e aconchegante. Nada comparado a fazer compra em um mercado tradicional. Fazer compras na ACN OF virou hobby dos paulistanos aos sábados e domingos. Nesse sentido, O Business Case faz referência a chegada repentina e desastrosa do Covid-19, pois é fato que muitas empresas tiveram se reinventar para continuar entregando alimentos aos seus clientes, e com a ACN OF não foi diferente
   >Pensando nisso, A CEO da ACN OF, Julia Silva, precisa de uma solução rápida e eficiente para o desenvolvimento de uma Online Store para vender seus produtos orgânicos e continuar a manter a boa reputação da E-grocery no mercado.


# Sumário
=================
<!--ts-->
   * [Objetivos](#objetivos)
   * [Público-alvo](#publico-alvo)
   * [Aprendizados](#aprendizados)
   * [Arquitetura Model View Controller](#arquitetura)
   * [Metodologia](#metodologia)
   * [Instalação](#instalação)
      * [Pre Requisitos](#pré-requisitos)
      * [Tecnologias](#tecnologias)
      * [Features](#features)
   * [Sobre SFRA](#sobre-storefront-reference-architecture)
   * [Agradecimentos](#agradecimentos)
<!--te-->

## Objetivos

- Desenvolver uma Online Store para venda e compra de produtos orgânicos;


## Publico-alvo
Agentes interessados em consumir ou conhecer a loja:
- Clientes. 
- Novos Consumidores.
- Fornecedores.

## Aprendizados

Para a execução do projeto final, desenvolvemos uma loja online para venda de produtos orgânicos. Para acessar e tratar as operações, o código foi organizado em uma Arquitetura embasada no sistema Model View Controller (MVC) e o Front da store foi desenvolvido e estilizado com html e Sass
Durante o curso e desenvolvimento do projeto compreendemos a aplicação dos conceitos de programação nos diferentes ambientes da Salesforce Commerce Cloud e as possibilidades da ferramenta, sobretudo através da manipulação direto no Business Manager e Merchant Tools.


## Arquitetura

        Arquitetura MVC
        |
        \--📂 E-GROCERY-MAIN
            |   README.md  
            |   dw.json
            |   codeconcept.config.js
            |   
            \-- node_modules

            \--📂--cartridges
                |  
                |  
                |
                |
                📂---app_custom_siteEgrocery
                |     --cartridge 
                |      -client
                |      -config
                |      -controllers
                |      -experience
                |      -forms
                |      -models
                |      -scripts
                |      -static
                |      -templates
                |      -app_custom_siteEgrocery.properties    
                |
                📂---app_storefront_base
                |     --cartridge 
                |      -client
                |      -config
                |      -controllers
                |      -experience
                |      -forms
                |      -models
                |      -scripts
                |      -static
                |      -templates
                |      -app_storefront_base.properties           
                |       
                📂---modules
                |      -server
                |      *server.js"       
                |       
                |__      




## Metodologia

No primeiro momento realizamos o estudo do Case Business e desenvolvemos as estratégias para a construção da Store E-grocery.

* Quadro Kanban via trello para definição das atribuições
* Consulta a documentação SFCC
* Pair Programming para escrita de código e visualização de erros
* Avaliação de implementação e adaptação do processo de desenvolvimento da loja online E-grocery
* Compartilhamento de código via pull-request em repositório GitHub

## Instalação
* Para realizar download do projeto, siga as instruções;

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua mÃ¡quina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Sass](https://sass-lang.com/install) instalado globalmente.
Além disso, é importante possuir o editor de código [VSCode](https://code.visualstudio.com/)


## Tecnologias

Para a construção do projeto, as seguintes tecnologias utilizadas foram:

- [x] [Salesforce Commerce cloud](https://www.salesforce.com/br)
- [x] [SFRA](https://www.salesforce.com/br)
- [x] [Git/Github](https://github.com/)
- [x] [Node.js](https://nodejs.org/en/)
- [x] [JavaScript](https://www.javascript.com/)
- [x] [Sass]()
- [x] [Prophet Extension]()


## Features

Funcionalidades da aplicação

- [x] Front End - Content Slots
- [x] Busca por alimentos
- [x] Home com alimentos
- [x] Carrinho de compras
- [x] Button Whatsapp Contact Us
- [x] Mapa com endereço para retirada de produtos
- [x] Pagamento em Cartão
- [x] Cestas para clientes
- [x] Responsividade



[![Badge](https://img.shields.io/badge/heroku-deploy-green)](https://api-hogar.herokuapp.com/) ![Badge](https://img.shields.io/github/forks/camilapessoa/hogarapifinal) ![Badge](https://img.shields.io/github/issues/camilapessoa/hogarapifinal) ![Badge](https://img.shields.io/github/stars/camilapessoa/hogarapifinal)



## Sobre Storefront Reference Architecture

SFRA possui um cartridge base (`app_storefront_base`) fornecido pela Commerce Cloud que nunca pode ser diretamente customizado ou editado. Os cartridges customizados são colocados em camadas no início do cartridge base. Essa mudança visa permitir a adoção mais fácil de novos recursos e correções de bugs
Storefront Reference Architecture fornece um [plugin_applepay](https://github.com/SalesforceCommerceCloud/plugin-applepay) plugin cartridge para demonstrar como é a customização em camadas para a aplicação de referência.


### The latest version

The latest version of SFRA is 5.3.0

### Getting Started

1. Clone this repository.

2. Run `npm install` to install all of the local dependencies (node version 8.x or current LTS release recommended)

3. Run `npm run compile:js` from the command line that would compile all client-side JS files. Run `npm run compile:scss` and `npm run compile:fonts` that would do the same for css and fonts.

4. Create `dw.json` file in the root of the project:
```json
{
    "hostname": "your-sandbox-hostname.demandware.net",
    "username": "yourlogin",
    "password": "yourpwd",
    "code-version": "version_to_upload_to"
}
```

5. Run `npm run uploadCartridge`. It will upload `app_storefront_base`, `modules` and `bm_app_storefront_base` cartridges to the sandbox you specified in `dw.json` file.

6. Use https://github.com/SalesforceCommerceCloud/storefrontdata to zip and import site data on your sandbox.

7. Add the `app_storefront_base` cartridge to your cartridge path in _Administration >  Sites >  Manage Sites > RefArch - Settings_ (Note: This should already be populated by the sample data in Step 6).

8. You should now be ready to navigate to and use your site.

### NPM scripts
Use the provided NPM scripts to compile and upload changes to your Sandbox.

#### Compiling your application

* `npm run compile:scss` - Compiles all .scss files into CSS.
* `npm run compile:js` - Compiles all .js files and aggregates them.
* `npm run compile:fonts` - Copies all needed font files. Usually, this only has to be run once.

 If you are having an issue compiling scss files, try running 'npm rebuild node-sass' from within your local repo.

### Linting your code

`npm run lint` - Execute linting for all JavaScript and SCSS files in the project. You should run this command before committing your code.

### Watching for changes and uploading

`npm run watch` - Watches everything and recompiles (if necessary) and uploads to the sandbox. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.

#### Uploading

`npm run uploadCartridge` - Will upload `app_storefront_base`, `modules` and `bm_app_storefront_base` to the server. Requires a valid `dw.json` file at the root that is configured for the sandbox to upload.

`npm run upload <filepath>` - Will upload a given file to the server. Requires a valid `dw.json` file.

## Testing
### Running unit tests

You can run `npm test` to execute all unit tests in the project. Run `npm run cover` to get coverage information. Coverage will be available in `coverage` folder under root directory.

* UNIT test code coverage:
1. Open a terminal and navigate to the root directory of the mfsg repository.
2. Enter the command: `npm run cover`.
3. Examine the report that is generated. For example: `Writing coverage reports at [/Users/yourusername/SCC/sfra/coverage]`
3. Navigate to this directory on your local machine, open up the index.html file. This file contains a detailed report.

### Running integration tests
Integration tests are located in the `storefront-reference-architecture/test/integration` directory.

To run integration tests you can use the following command:

```
npm run test:integration
```

**Note:** Please note that short form of this command will try to locate URL of your sandbox by reading `dw.json` file in the root directory of your project. If you don't have `dw.json` file, integration tests will fail.
sample `dw.json` file (this file needs to be in the root of your project)
{
    "hostname": "devxx-sitegenesis-dw.demandware.net"
}

You can also supply URL of the sandbox on the command line:

```
npm run test:integration -- --baseUrl devxx-sitegenesis-dw.demandware.net
```

#### [Contributing to SFRA](./CONTRIBUTING.md)

    Page Designer Components for Storefront Reference Architecture
See: [Page Designer Components](./page-designer-components.md)


## Projeto em Construção

        Autenticação
        Sistema de compras com cestas
        Front End
        Área do comerciante

## Agradecimentos

Foram longas semanas de muito aprendizado e precisamos agradecer a todas as pessoas que foram responsáveis por nosso crescimento profissional e pessoal. Sem dúvida isso não seria possível sem a grande mentoria e ajuda de nossas queridas Priscila (grande profissional e uma pessoa incrível) e Deah (sempre um amor e disposta a nos ajudar). Também agradecemos a oportunidade de aprendizado e parabenizamos a iniciativa da Gama Academy & Accenture!!!
