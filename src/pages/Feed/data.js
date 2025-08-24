// Mock de autores
export const ana = {
    id: 1,
    name: "Ana Paula",
    username: "anapaula_dev",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
};

export const bruno = {
    id: 2,
    name: "Bruno Silva",
    username: "brunodev",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
};

export const carla = {
    id: 3,
    name: "Carla Souza",
    username: "carlacodes",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
};

export const diego = {
    id: 4,
    name: "Diego Martins",
    username: "diegomartins",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
};

const allAuthors = [ana, bruno, carla, diego];

// Função utilitária para gerar comentários mockados
function mockComments(postId, count = 2) {
    const texts = [
        "Ótimo post! Muito esclarecedor.",
        "Parabéns pelo conteúdo!",
        "Me ajudou bastante, obrigado(a)!",
        "Tenho uma dúvida sobre esse ponto...",
        "Excelente explicação, continue assim.",
        "Gostei do exemplo prático.",
        "Muito bom, vou aplicar no meu projeto.",
        "Ficou alguma dúvida, mas vou pesquisar mais.",
        "Show! Compartilhando com amigos.",
        "Amei o post, ansioso(a) por mais!"
    ];
    const comments = [];
    for (let i = 0; i < count; i++) {
        const author = allAuthors[Math.floor(Math.random() * allAuthors.length)];
        comments.push({
            id: postId * 100 + i + 1,
            text: texts[Math.floor(Math.random() * texts.length)],
            createdAt: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
            updatedAt: new Date(Date.now() - Math.floor(Math.random() * 100000000)).toISOString(),
            authorId: author.id,
            author: {
                id: author.id,
                name: author.name,
                username: author.username,
                avatar: author.avatar
            }
        });
    }
    return comments;
}

// Função utilitária para gerar likes aleatórios
function randomLikes() {
    return Math.floor(Math.random() * 100) + 1;
}

export const posts = [
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
    "title": "Introdução ao React",
    "slug": "introducao-ao-react",
    "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
    "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
    "author": ana,
    "likes": randomLikes(),
    "comments": mockComments(1, 3)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/css-grid-na-pratica.png",
    "title": "CSS Grid na Prática",
    "slug": "css-grid-na-pratica",
    "body": "Aprenda a criar layouts responsivos com CSS Grid. Este post aborda desde a definição de grid até a criação de layouts complexos de forma simples e eficaz.",
    "markdown": "```css\n.grid-container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n```",
    "author": bruno,
    "likes": randomLikes(),
    "comments": mockComments(2, 2)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/vuejs-para-iniciantes.png",
    "title": "Vue.js para Iniciantes",
    "slug": "vuejs-para-iniciantes",
    "body": "Vue.js é um framework progressivo para a construção de interfaces de usuário. Este guia inicial cobre as funcionalidades essenciais do Vue.",
    "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Olá Vue!'\n  }\n})\n```",
    "author": carla,
    "likes": randomLikes(),
    "comments": mockComments(3, 4)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/dicas-de-acessibilidade-web.png",
    "title": "Dicas de Acessibilidade Web",
    "slug": "dicas-de-acessibilidade-web",
    "body": "Explorando a importância da acessibilidade na web, este post oferece dicas práticas para tornar seus sites mais acessíveis a todos os usuários.",
    "markdown": "```html\n<a href=\"#\" aria-label=\"Saiba mais sobre acessibilidade\">Saiba mais</a>\n```",
    "author": diego,
    "likes": randomLikes(),
    "comments": mockComments(4, 2)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-typescript.png",
    "title": "Introdução ao TypeScript",
    "slug": "introducao-ao-typescript",
    "body": "Este post é um guia introdutório ao TypeScript, explicando como ele aumenta a produtividade e melhora a manutenção do código JavaScript.",
    "markdown": "```typescript\nfunction greeter(person: string) {\n  return 'Hello, ' + person;\n}\n```",
    "author": ana,
    "likes": randomLikes(),
    "comments": mockComments(5, 3)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/otimizacao-de-performance-no-react.png",
    "title": "Otimização de Performance no React",
    "slug": "otimizacao-de-performance-no-react",
    "body": "Discutindo técnicas avançadas para otimizar a performance de aplicações React, este post aborda conceitos como memoização e lazy loading.",
    "markdown": "```javascript\nconst MemoizedComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});\n```",
    "author": bruno,
    "likes": randomLikes(),
    "comments": mockComments(6, 2)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/explorando-flexbox-no-css.png",
    "title": "Explorando Flexbox no CSS",
    "slug": "explorando-flexbox-no-css",
    "body": "Este post detalha o uso do Flexbox para criar layouts responsivos e flexíveis no CSS, com exemplos práticos para um entendimento fácil.",
    "markdown": "```css\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n}\n```",
    "author": carla,
    "likes": randomLikes(),
    "comments": mockComments(7, 3)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/angular-primeiros-passos.png",
    "title": "Angular: Primeiros Passos",
    "slug": "angular-primeiros-passos",
    "body": "Ideal para iniciantes, este post introduz o Angular, um poderoso framework para desenvolvimento de aplicações web, com um exemplo básico.",
    "markdown": "```typescript\n@Component({\n  selector: 'my-app',\n  template: '<h1>Olá Angular</h1>'\n})\nexport class AppComponent { }\n```",
    "author": diego,
    "likes": randomLikes(),
    "comments": mockComments(8, 2)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/gerenciamento-de-estado-com-redux.png",
    "title": "Gerenciamento de Estado com Redux",
    "slug": "gerenciamento-de-estado-com-redux",
    "body": "Abordando um dos aspectos cruciais no desenvolvimento de aplicações React, este post ensina como gerenciar o estado de forma eficiente com Redux.",
    "markdown": "```javascript\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ACTION_TYPE':\n      return { ...state, ...action.payload };\n    default:\n      return state;\n  }\n};\n```",
    "author": ana,
    "likes": randomLikes(),
    "comments": mockComments(9, 3)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/sass-simplificando-o-css.png",
    "title": "Sass: Simplificando o CSS",
    "slug": "sass-simplificando-o-css",
    "body": "Este post explora como o pré-processador Sass pode simplificar e melhorar a escrita de CSS, através de variáveis, mixins e funções.",
    "markdown": "```scss\n$primary-color: #333;\nbody {\n  color: $primary-color;\n}\n```",
    "author": bruno,
    "likes": randomLikes(),
    "comments": mockComments(10, 2)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/webpack-um-guia-para-iniciantes.png",
    "title": "Webpack: Um Guia para Iniciantes",
    "slug": "webpack-um-guia-para-iniciantes",
    "body": "Aprenda a configurar o Webpack, uma poderosa ferramenta de empacotamento de módulos, neste guia passo a passo para iniciantes.",
    "markdown": "```javascript\nmodule.exports = {\n  entry: './path/to/my/entry/file.js'\n};\n```",
    "author": carla,
    "likes": randomLikes(),
    "comments": mockComments(11, 3)
},
{
    "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/construindo-spa-com-vuejs.png",
    "title": "Construindo SPA com Vue.js",
    "slug": "construindo-spa-com-vuejs",
    "body": "Este post oferece um tutorial detalhado sobre como construir uma Single Page Application (SPA) eficiente e interativa usando o framework Vue.js.",
    "markdown": "```javascript\nnew Vue({\n  el: '#app',\n  data: {\n    message: 'Bem-vindo à sua SPA Vue.js!'\n  }\n});\n```",
    "author": diego,
    "likes": randomLikes(),
    "comments": mockComments(12, 2)
}
];