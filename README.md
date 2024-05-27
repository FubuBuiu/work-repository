Este projeto foi desenvolvido com base em boas práticas de engenharia de software, como Clean Code, SOLID, DDD, Atomic Design visando oferecer uma solução
robusta e de qualidade.

## 🚀 Tecnologias

Este projeto está utilizando as seguintes tecnologias:

- [React](https://react.dev/) (v18)
- [NextJs](https://nextjs.org/) (v14.2.3)
- [Node](https://nodejs.org/en) (v20.13.0)
- [Tailwind](https://www.npmjs.com/package/tailwindcss) (v3.4.1)
- [TypeScript](https://www.typescriptlang.org/) (v5)
- [Zod](https://www.npmjs.com/package/zod) (v3.23.7)
- [Hook Form](https://www.npmjs.com/package/react-hook-form) (v7.51.4)
- [React Icons](https://www.npmjs.com/package/react-icons) (v5.2.1)

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Rodando a aplicação

### Compilação

Para compilar o código TypeScript, utilize o seguinte comando:

```bash
npm run build
```

### Iniciar o servidor

Para iniciar o servidor em ambiente de produção, execute:

```bash
npm start
```

### Iniciar o servidor em modo de desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com suporte para reinicialização automática após alterações no código, execute:

```bash
npm run dev
```

Isso deve funcionar corretamente. Se precisar de mais alguma coisa, pode me enviar um email: edenilson.sza@gmail.com

## Diretórios Principais

```
📂 project_root
├──📁 public - Contém recursos estáticos públicos que são servidos pela aplicação.
├──📁 src - Pasta raiz do código-fonte da aplicação.
│   ├──📁 app - Contém componentes que representam páginas da aplicação.
│   |    ├──📄 layout.tsx - Ponto de entrada principal da aplicação.
│   |    ├──📄 page.tsx - Configuração das rotas da aplicação.
│   |    └──📄 globals.css
|   |    └──📄 favicon.ico
│   ├──📁 assets - Armazena recursos estáticos como imagens, arquivos de fonte, etc.
│   ├──📁 components - Reúne componentes reutilizáveis do React usados na interface.
│   ├──📁 config - Armazena arquivos de configuração, plugins, extensões, constantes globais (por exemplo, Reactotron).
│   ├──📁 helper - Funções que serão reaproveitadas e utilizadas em várias partes dos códigos.
│   ├──📁 hooks - Local para armazenar hooks personalizados.
│   ├──📁 services - Fornece serviços externos (por exemplo, APIs).
│   │   └──📄 Api.ts
│   ├──📁 store - Pode conter configurações relacionadas ao estado global (por exemplo, Redux).


├──📄 .gitignore
├──📄 .eslintrc
├──📄 .prettierrc
├──📄 next.config.mjs
├──📄 package.json
├──📄 README.md
├──📄 tailwind.config.ts
└──📄 tsconfig.ts
```

## 📁 **A Essência do Projeto: `src`**

Essa é a parte central do nosso projeto, onde todo o código-fonte vive. Dentro dele, temos diversas pastas importantes que desempenham papéis específicos.

🌟 **assets** - Destinada ao armazenamento de recursos estáticos que serão incorporados diretamente no código da sua aplicação.

🧩 **components** - Reúna componentes reutilizáveis que são compartilhados em várias partes da aplicação, promovendo a reutilização e a manutenção simplificada. Se um componente for destinado apenas a uma página específica, você pode organizá-lo dentro do diretório daquela página.

🛠️ **config** - Contém arquivos de configuração, plugins, extensões e constantes globais. Tudo o que você precisa para configurar sua aplicação.

🎣 **hooks** - Se você utiliza React Hooks personalizados, esta pasta é onde eles devem ser armazenados. Torna a lógica reutilizável e fácil de manter.

📃 **app** - A pasta `app` é um ponto crucial. Cada página da sua aplicação deve ter seu próprio diretório aqui, contendo pelo menos um arquivo `page.tsx` para a lógica da página.

🌐 **services** - Seu código de serviços e chamadas de API deve ser organizado nesta pasta para manter as interações com serviços externos bem estruturadas.

🧬 **store** - Se você estiver usando Redux ou outra solução de gerenciamento de estado global, esta pasta é o lugar certo para configurá-la. Mantenha tudo relacionado ao estado global organizado aqui.

🖌️ **styles** - Aqui encontramos os estilos globais, como os definidos em [`GlobalStyles.jsx`](https://gist.github.com/RochaGabriell/d941613b0a385fdf38abc0211ddf36b7). Além disso, dentro da pasta `themes`, podemos separar temas de cores ou estilos para facilitar a manutenção.

🧰 **Helper** - Abreviação de "utilities", é um repositório dedicado a armazenar funções e utilitários que fornecem funcionalidades genéricas e reutilizáveis em várias partes do código.


## ✅ **Personalização e Flexibilidade** - A estrutura proposta é uma sugestão para ajudar a organizar seu projeto de forma eficiente e escalável. No entanto, cada projeto é único e pode exigir ajustes para atender às suas necessidades específicas. Sinta-se à vontade para personalizar e adaptar a estrutura conforme necessário.