# 1. inicializar un proyecto en git local

    git init

# 2. inicializar el proyecto en npm con el flag -y(preconfigura)

    npm init -y

# 3. Ahora empezamos a crear nuestro proyecto siempre siguiendo el estandar de como organizar el proyecto para estar acorde con las buenas practicas del mercado como programador

    en el documento de la calse hay un foto de como debe ser la estructura.

    src: (develop){

        components:{
            HelloWord.jsx
        }
        index.js
    }

    public: (production){
        index.html
    }

    OTROS ARCHIVOS DE CONFIG.

# 4. instalemos React con: (verifica si hay vulnerabilidades y tomo una desicion sobre usar el fix o no)

    npm install react react-dom

# 5. Procedemos a configurar index.js con la ruta con la cual react va a renderizar la app

    import React from "react";
    import ReactDOM from "react-dom";
    import HelloWord from "./components/HelloWorld.jsx";

    // Render recibe 2 parametros el componente y donde lo va a mostar.
    ReactDOM.render(<HelloWord />, document.getElementById(app));

# 6. Recuerda tambien configurar el html para que funcione

    <body>
    <div id="app"></div>
    </body>

# 7. Babel de javaScript moderno a navegadores antiguos.

    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

# 8. Configurar babel crearemos un archivo llamado .babelrc

    babelcore: las herramientas necesaria para transpilar el codigo.
    babel-loader: se encarga de trabajar con webpack.
    babel-preset: se encargan dde entender y tranformar el codigo de javascript y react

# 9. instalando Webpack herramienta para coilar multiples archivos(html,css,javascript, multimedia(imagener,videos)).

    npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev

# 10. Creando un archivo de configuracionde webpack llamado

    webpack.config.js

# 11. Luego de configurar webpack con sus plugins y la copilacion de los archivos recuerda agregarlos en npm para produccion. Ejemplo:

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production"
    },

# 12. En la carpeta dist se ubicaran todos los archivos mimificados y transpilados para la web claro antes hay que correr el script

    npm run build (en este caso uno lo especifica)

# 13. Preparando SASS con webpack

    npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

    mini-css-extract-plugin: permite exxtraer el css del boundle resultante para poder crear un nuevo archivo de css.
    css-loader: se encarga de trabajar con webpack.
    node-sass: añadimos la compatibilidad con sass.
    sass-loader: para trabajar con webpack.

# 14. Ahora hay que añadir la regla en webpack para css.

    1.-creamos una constante para requerir un plugin ya instalado eje:
        const MiniCssExtractPlugin = require("html-webpack-plugin");

    2.- Tenemos que añadir en los modules o modulos el tipo de archivo que vamos a convertir con:

        test: /\.(s*)css$/, (expresion regular para identificar la extension de los archivos)
        use: [
          {
            loader: MiniCssExtractPlugin.loader (aqui le indicamos el loader a usar para el plugin)
          },
          "css-loader", (loader)
          "sass-loader" (loader)

    3.-Inicializamos una instancia del plugin que queremos usar y la ruta a la cual se creara el archivo y su nombre y extension. Cada uno tendra algo en especisifico como dir de archivos nombre, output and 	|imput,etc hay que ver la documentacion de los pugins.

        new MiniCssExtractPlugin({
         filename: "assets/[name].css"
        })

# 15. Recuerda agregar webpack-dev-server para trabajar en development y agregargo al package.json de npm.

    1.- npm install --save-dev webpack-dev-server

    2.- Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

    {
    ""scripts"": {
        ""build"": ""webpack --mode production"",
        ""start"": ""webpack-dev-server --open --mode development""
    },
    }
    (webpack-dev-server hay muchos tipos de flags tienes que ver cuales te son de utilidad)

# 16. Crearemos una carpeta assets dentro de src, la cual forma parte de una estrutura de buenas practicas y adentro crearemos una carpeta styles y dentro nuestros css o sass.

    src:{
        assets:{
            styles:{
                index.scss
            }
        }
    }

    como esta referenciado en webpack, lo va a copilar y con el plugin lo va  a separa y lo va a guardar donde debe estar la referencia real.

# 17. Ahora vamos a hacerle un import "../assets/styles/App.scss" en el archivo HelloWorld.jsx

# 18. Eslint vamos a instalar esta herramienta que nos permitira evitar errores y a crear nuestro archivo gitignore para luego madar todo a github.

    npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

    eslint-config-airbnb: utilizamos este porque vamos a utilizar unas reglas definidas por ellos para crear proyectos en javascript

    gitignore y eslint las reglas recomendadas por platzi estan en los enlaces de:
    https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544
    https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a

    GITHUB

    Quick setup — if you’ve done this kind of thing before

    Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

    …or create a new repository on the command line

    echo "# a" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:frerova91/a.git
    git push -u origin master

    …or push an existing repository from the command line

    git remote add origin git@github.com:frerova91/a.git
    git push -u origin master

    …or import code from another repository

    You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

# 19. Ahora vamos a identificar las partes pertientes de una paginaweb como componenetes de react para platzi video. En la carpeta de githubrepo esta platzivideo de ejemplo ya terminado el cual vamos a interpretar para crear el nuestro.

# 20. Crearemos el header del proyecto implementando lo visto en platzivideo, por lo que vemos a crea un componente presentacion uno que solo ingresa html.

    1.- ahora vamos a primero a cambiar class por className para seleccionar todos los campos con el numbre class usamos [control + d o control + ,]

    2.- Recuerda cerrar todas la etiquetas de forma adecuada ejem: <img  />

    3.- ahora para verlo lo importamos en index.js pero esta no es la mejor opcion a continuacion vamos a crear:

        -una carpeta llamada containers dentro de src donde viviran los contenedores que se encargan de presentar nuestros componentes.

        -vamos a crear dentro de esa carpeta App.jsx y en este archivo vamos a traer nuestro componentes.

        - y este archivo lo importamos en index.js y lo utilizamos.

# 21. Vamos a crear nuestros estilos a continuacion con la referencias de la carpeta githubrepo dentificando lo que es general y lo que es de un componente para separarlo en archvios en la carpeta de assets e inportamos ese archivo en nuestros componentes.

    Nota: mantengamos en la carpeta de los estilos la gerarquia una carpeta para los componentes otra para los containers,etc. Es recomendable colocarle a los archivos que no son js o jsx la extension para no perdernos o confundirnos.
    Recuerda importar los archivos scss en sus respectivos conmponentes.

# 22. Crearemos nuestro Search.jsx representado en el html de jrmplo con la clase de main, de la misma forma que el paso 21 con los ejemplos de githubrepo.

    Nota: es buena practica nombrar la funcion definida como const _func_ = () => (); con el nombre del componenete

# 23. Crearemos ahora los componentes del carrucel(section="carrucel"), las categoria(en este caso es un <h3> antes del carrucel)y los items(son aquellos que crean los elementos del carucel), con los mismos procedimientos que antes. Con una diferencia:

    1.- Al carrucel y las categorias vamos a destructurarles como un prop en la funcion e incluirlos en el curpo de la misma un prop llamaod {children}. para invocar esos items dentro de estos componentes.

    2.-luego hay que comunicarlos dentro App.js.

    3.- y por ultimo recuerda agregarle sus estilos.

    Nota: Recuerda que al importa el codigo de otra parte hay que estar pendiente de elementos mal cerrados u etiquetas que faltan.

# 24. Aqui crearemos el footer con los mismos procedimientos de antes eso es todo.

# 25. Ahora vamos a añadir fotos con webpack para ello vamos a utilizar File Loader

    1.- npm install --save-dev file-loader

    2.- Vamos a añadir las reglas en la configuracion de webpack en el archivo webpack.config.js

        rules: [
        {
            test: /\.(png|gif|jpg)$/, //expresion regular
            use: [ // esta es la configuracion
            {
                loader: 'file-loader',
                options: { name: 'assets/[hash].[ext]' },
                // config como se llama el archivo usaremos un hash para no tener que preocuparnos del nombre
            }
            ],
        },
        ],

    3.- Ahora vamos a la carpeta de assets de githubrepo y los copiamos, para llevarlos a una nueva carpeta que vamos a crear dentro de assets de nuestro proyecto llamada static.

    4.- Lo que falta es ir a los archivos correspondientes y importar nuestras imagenes como :

        -import _name_ from './path/name.jpg'

        - y remplazamos en las etiquetas de imagen las "" por src={_name_}

    5.- ahora vamos simplemente hacer unas listas o mas listas de el carousel duplicandolo en app.jsx
    pero vamos a modificar el componente de categories para pasar un nuevo prop en el cual vamos a  cambiar el nombre segun el nombre del carousel correspondiente desde app.js

# 26. Ahora vamos a comodar algunos aspectos de la pagina vamos a colo las fonts y colores en un archivo de variables de scss en la carpeta de style, para estar organizado y tener codigo reutilizable ademas tambien arreglaremos el aspecto de el search.

    Recuerda importar las variables en App.scss para terlas disponibles en todo el proyecto

    Tambien vamos a crear un archivo para manejar el responsive de nuestro sitio Media.scss la info del css esta en el css de guthubrepo y lo llamamos en app.js.

# 27. Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

    Instalación de JSON Server:
    npm install json-server  (de forma local)

    hay que crear un archivo llamado initialState.json donde viviran los datos de nuestra fake api

    y luego ejecutamos el server que correra en paralelo a nuestro proyecto con:

    json-server initialState.json

    nota: se puede agregar como dependencia de desarrollo y modificar el script start de la siguiente forma:
    "start": "json-server --watch initialState.json -q & webpack-dev-server --open --mode development"

# 28. En esta clase vamos a aprender a trabajar con React Hooks estado y ciclo de vida para las funciones, lo que ayuda con el manejo de estado de los componente y hace menos confuso el como pasar los props en react. Cuidado con su implementacion en proyectos ya en proceso que no los tengan puede tener incompatibilidades.

    "NOTA": AHORA VAMOS A ACTUALIZAR LOS COMPONENTES A REACT HOOKS. DEJAEMOS UN DUPLICADO A LOS QUE MODIFICAREMOS PARA RECORDAR

    useState(): manejaremos los estados

    useEffect(): vamos a realizar las peticiones de apis o eventos entre los componentes y escuchamos al que tiene que pasar (eventos).

    en este paso se transformo app.js a app.jsx con react hooks.

# 29. Ya tenemos la informacion de la api ahora lo que vamos a hacer es transmitirle esa informacion a los componentes, personalizadolos con la info de la api ya no necesitaremos llamar varias veces al componente carousel porque vamos a iterar sobre el.

    Para entender que es lo que le vamos a pasar a los componentes como props y eso es necesario ver la api para entender como se llaman los datos, de que tipo son, etc.

    crearemos unas validacion de si en caso de que la lista no tenga elementos no sea mostrada

    Aqui tambien actualizaremos nuestro componentes carousel item

# 30. Custom Hooks esto nos permitira separa la logica de los componentes en una funcion reutilizable la cual podemos llamar en cualquiera de nuestros componentes.

    ejemplo: vamos a quitar la logica de conectar con el api del app.jsx y colocaremos nuestros custom hooks en una carpeta unico dentro de src se llama hooks.

    Por convencion todos los custom hooks deben de ser llamados con use[nombre de mi hook] para ser identificados como un hook siempre.

    si tu hook no maneja jsx no es necesario colocarle jsx solo js

    Ahora tambien vamos a actualizar los componentes de mi lista y platzi video.

# 31. Prop Types son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, tambien tenemos la opcion de psarlos como requeriados o con valor por defecto. Nos ofrece una forma dinamica de verificar el tipo de valor de los props de nuestros componentes (Un problema que podriamos reolver implementando TypeScript).

    Instalación de PropTypes:
    npm install --save prop-types

    Ahora vamos a  añadir props types a nuestro componente de carousel.

    Implementando typescript con react y webpack: ""esto es opcional""
    https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

# 32. Debuggeando React con React DevTools React DevTools es una herramienta muy parecida al Inspector de Elementos. Nos permite visualizar, analizar e interactuar con nuestros componentes de React desde el navegador.

# BUENO QUE SIGUE ?

# Felicitaciones por terminar el Curso Práctico de React JS!

# En este curso aprendimos a crear interfaces web como la aplicación de Platzi Video usando componentes de React.

# No olvides resolver los ejercicios, completar el examen, darle 5 estrellas al profesor y compartir tu proyecto, notas, dudas o comentarios en la sección de discusiones.

# Te recomendamos continuar tu ruta de aprendizaje profesional con los siguientes cursos de la Escuela de JavaScript:

# Curso de React Router y Redux

# Curso de Server Side Render con Express
