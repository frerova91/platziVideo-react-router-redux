# 1. Primero vamos a crear y configurar un carpeta llamada routes dentro de src con un archivo App.js que va a manejar las rutas del proyecto las rutas que añadamos debemos definirlas con el componente Route y estas deben estar encapsuladas dentro del componente _BrowserRouter_ del paquete de react-router-dom. Para definir una ruta con el componente Route debemos pasarle las props de:

    -. path: para indicar la url.
    -. exact: si queremos que funcione única y exactamente con la url que le digamos.
    -. component: para indicarle el componente que va a renderizar.

# 2. Ahora vamos a configurar multiples rutas para este proyecto en este cruso vamos a trabajar con las carpetas de iniciar sesion y registros del githurepo, creando componentes (de login, sesion,etc) con la info de los archivos que tiene para trabajar mas rapido.

    -.Creamos el component Login en containers, creando un componente presentacional es decir uno que solo presenta lo que se ve sin logica.
    -. Pegas el codigo del iniciar-sesion.html que coresponde al login y corregismo los erros recuerda que con control  d seleccionamos multiples campos con un mismo nombre y cerrar adecuadamente las etiquetas html.
    -. Por ultimo importa y agrega las imagenes de twitter y icon y crear un scss e importarlo con los datos que hay githubrepo de css para login.
    -. Ahora hay que importar el archivo en App.js en la carpeta routes e invocar una ruta y luego prepara el proyecto para

    -. Por ultimo configuremos Webpack para el uso de rutas con esto justo antes de los plugins.

    devServer: {
    historyApiFallback: true,
    },
    esto permite hacer seguimiento en la aplicaion.

    y verificamos hiendo a la ruta (localhost:8080/login) en el navegador una vez ejecutado el server y el proyect.

# 3. Aqui crearemos la parte del registro en Register.jsx y hacemos lo mismo que el paso 2.

    .- <Switch/> es un componente que nace de react-router-dom, nos permite manejar switch como normalmente lo hariamos e la logica de javascript, este empujara la seccion que necesitamos segun el path al que llamamos.

# 4. Creando un componente NotFound Error 404 en container y asignandolo en App.js .

# 5. Ahora vamos a crear nuestro componente de Layout donde vivira los componentes que queremos mantener atravez de la app como el footer y header ademas un prop children para manejar logica de donde empujar el componente segun la ruta.

    . importamos en app.js y encamsulamos el switch

# 6. Manejando Enlaces y configuraciones como en links a platziVideo,etc

    .- Si nosotros usamos href="/path" esto causara que la pagina se recargue y es exactamente lo que queremos evitar.
    .- Por lo contrario si usamo <Link to=""path></link> es una buena practica de react y no cargara otra vez la pagina de forma inecesaria.

    .- ahora vamos a hacerle los cambios a nuestros componentes.

# 7. En este paso ya entendido lo basico de Redex y que es vamos a proceder a instalarlo:

    npm install redux react-redux --save

    redux: contiene todo la logica de como trabajamos con el.
    react-redux: nos va  a ayudar a implementarlo mas facil en el proyecto.

    1.- Vamos a proceder a crear 2 carpeta en src actions y reducers, y en cada una crear un index.js para empezar el proyecto.

    2.- Vamos a index.js el principal del proyecto y añadimos redux y react-redux.

    NOTA:"El paquete react-redux nos proporciona un Provider para poder encapsular nuestros componentes por medio de un connect para poder transmitir la información que necesitemos del store a cada componente."

# 8. Creando el Store de redux para nuestra app vamos a usar el elemnto que teniamos para trabajar con nuestra fake api la vamos a mandar a nuestro proyecto para hacer un inicial state lo cual nos permitira tener esa info inicial para el proyecto y poder usarla por medio del conect().

    1.- Procedamos a crear un estado inicla para redux copiando el contenido del initialstate.json y le vamos a hacerle unas modificaciones. Vamos a copiarlo en index.js como una constante para este caso en particular.

    const initialState = {...................}

    2.- Vamos a crear ahora un nuevo store para poder pasarselo a nuestro provider

    const store = createStore(reducer, initialState);

    3.- Ahora ahy que pasarselos al provider

    <Provider store={store}>.....</Provider>

    Con esto preparamos a nuestra app para recivir su estado inicial y con conect() vamos a poder extraer la informacionpara presentarla en la aplicacion.

    4.- ahora vamos a ir al componente padre de nuestra app (determinado por la ruto "/") en este caso es Home y aqui vamos import connect para la final del documento conectarlo con el estado de redux.

        definimos una contante que traera cada uno de los elementos del estado y solo hay que traer lo que sean necesarios en este caso myList, trends y originals.

        const mapStateToProps = state =>{
            return{
               props: state.props
               .........
               .........
            }
        }

        definimos un nuevo export como:
        export default connect(props, actions)(Home)
        export default connect(mapStateToProps, null)(Home)
