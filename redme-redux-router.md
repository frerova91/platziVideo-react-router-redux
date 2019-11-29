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

# 7. En este paso ya entendido lo basico de Redux y que es vamos a proceder a instalarlo:

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

    4.- ahora vamos a ir al componente padre de nuestra app (determinado por la ruta "/") en este caso es Home y aqui vamos import connect para la final del documento conectarlo con el estado de redux.

        definimos una constante que traera cada uno de los elementos del estado y solo hay que traer lo que sean necesarios en este caso myList, trends y originals.

        const mapStateToProps = state =>{
            return{
               props: state.props
               .........
               .........
            }
        }

        definimos un nuevo export como:
        //export default connect(props, actions)(Home) ejemplo.
        export default connect(mapStateToProps, null)(Home)

# 9. Para manejar ahora el flujo de la informacion de nuestra aplicacion vamos a trabajar ahora con los actiosn y los reducers, en particular en la lista de los items.

    1.- vamos a actions a crear un index.js el primero que se encarga de describir la informacion que vamos a crear y pasar un objeto que va ir dentro de los reducer para que luego tome la accion para evaluar como lo va a guardar en el estado.

    2.- Actualizamos index.js en reducers para que utilize lo que da los actions.

    3.-Ahora vamos a carouselItems y conectamos con los actions y reducers.

# 10. Finalizando reducers y eliminar favoritos agreguemos esta funcionalidad de eliminar por medio de los reducers y los actions y el componente carouselItem.

    1.-Vamos a loa actions y creamos una funcion para delete.

    export const deleteFavorite = payload => ({
        type: "DELETE_FAVORITE", // cuidado con los nombres al llamr en los reducers debe ser exactam,ente los mismo
        payload
    });

    2.- Vamos a los reducer y añadimos el case de delete.

    3.- Ahora vamos al CarouselItem para implementar delete.

# 11. Tal y como esta la app en este momento tenemos un bug que nos permite agregar infinitamente a la lista tarjetas vamos a corregirlo.

    1.-Vamos al componente home.jsx y a agregamos un boolean que nos permitira saber qu estamos en un lista isList={true}

    2.- Luego en CarouselItem agregamos la logica on un operador tenario y pasando en los props isList.

# 12 Ahora vamoa crear el login necesitamos capturar la infon del usuario y luego mandarla al flujo de la info.

    1.- vamos a areglar unos problemas con los estilos scss de login y search.scss

    2.- vamos al componente login y vamos a capturar la data de los imputs con un hooks. vamos a crear un estado.

# 13. Aqui conectaremos nuestro formulario de login con redux.

    .-importamos connect y creamos el expor adecuado para redux
    .-creamos nuestro mapDispatchToProps para usar los actions
    .- Vamos a la carpeta de action y index.js creamos el action para hacer login.
    .-importamos en el componente login el action loginRequest.
    .-ahora pasamos por medio de props para pasar el form hacia el estado usarlo en el handelsubmit.
    .- asi podemos pasar al estado la info que capturamos en el login para simular que nos logeamos.
    .-Ahora vamos a enviar al usuario a home con una de las propiedades de react-router (history), la cual esta disponible porque encapsulamos nuestra aplicacion en el bowserRouter que se encarga de la navegacion de la app y con el metodo push nos movemos a donde sea necesario.
    .- hay que crear nuestro reducer que se encargara de manejar la info y ponerla en el estado.

# 14. Creando un Servicio para Gravatar(Servicio de almacenamiento de imagenes) creado por automatic mismo empresa de qe creo wordpress en us sitio web esta la docu para la implementacion o en npm sirve tambien aunque no es la mejor opcion. En este caso Vamos a anlizar el paquete de npm para gravatar entrando en su pagina de github y vamos a la carpeta de lib(librerias) y vemos la logica de ese unico archivo para comprender como funciona md5 y como podemos implementarlo nosotros mismos.

    1.- Vamos a crear una carpeta util dentro de src la cual contendra un archivo gravatar.js que es donde tendremos nuestra logic para traer este servicio.

    Nota:"md5 es un algoritmo criptografico que crea un hash a partir de un correo electronico de esta forma no almacenamos el correo sino un hash vinculado a la imagen"

    2.- Instalamos gravatar: npm install md5 --save

    3.- creamos una constante gravartaer la cual contendra una funcion que recibe un email, establece la ruta de la comunicacion, formatea el email para usarlo y finalmente crea el hash de gravartar.

# 15. Usando Gravatar en el proyecto vamos a header.jsx y lo vamos a conectar con redux para usar el estado de nuestro usuario,

    recuerda que tienes que registrarte en gravatar para usar bien la api registrando un gravatar para el correo.

# 16. Validacion de Login y logOut vamos a trabajar en Header.jsx en el menu.

    .-hay que crear la logica en html y la funcion handleLogout
    .-Como estamos en redux y necesitamos trabajar con el estado tenemos que crear un action.
    .-lo creamos e importamos en Header.jsx.
    .-Ahora necesitamos mapear este action con un mapDispatchToProps y pasarlo como segundo argumento del export defaul connect(null,null)(componente).
    .-Tambien tenemos que crear nuestro reducer.
    .- recuerda tambien mapear lel estado con mapStateToProps.

# 17. Register actualizanolo scss y creando validaciones.

    .-Asi como lo hicimos con login lo vamos a hacer con el registro usaremos react hooks para manejar los impuuts.

# 18. Register con Redux continuamos con lo anterior pero le agregamos redux a este componente.

    .-conectamos con redux
    .-creamos un action y un reducer
    .-le pasamos los props al componente
    .-establecemos un mpaDispatchToProps para los actions
    .- manejamos con handleSubmit y handleImput los eventos
    .- E inicializamos el estado local del componente con useState

# 19. Aqui vamos a crear un container Player el cual tendra el metodo para la reproduccion de los videos.

    .-Se crear el componente de Player con su respectivos estilos.
    .-se crea una ruta en app.js para manejar el componente y pasar por la direccion un id que sirve de referencia.
    .-en CarouselItem importamos <Link> de react-router-dom para el redireccionamiento de la pagina encapsulando la imagen de play, para que al darle click redireccione hacia el video.

# 20. Configurando el Player o agregando funcionalidad.

    .-Debido a que nuestra app esta encapsula en los react-router somos capaces de obtener ciertas funcionalidad por medio de los props como lo es onClick={() => props.history.goBack()} para manejar el redireccionamiento. Esto nos permitira ir hacia atras en el reproductor de video pero para ellos hay que pasarle los props al componente.

    .- En webpack configuramos una ruta publica para poder  acceder directamente a las direcciones de los vide con su id ejem: http://localhost:8080/player/2 de otra forma nos da error debido a que usamos boundle.js y no encuetra esas rutas sin la config.

# 21. Ya que estamos obteniendo el id en el componente pódemos por medio de un action pasarlo al flujo de informacion, obtenerlo con nuestro reducer y filtrar esta info para obtener cual es el elemento que necesitamos y asi tener el source del video y poder presentarlo.

    .- se crea la logica para obtener el id destructurado de los parametros que biene en url
    .- se crea la logica para retornar el componente de video o notFound
    .- se crea un action y su correspondiente reducer que evaluara si en el estado inicial existe un id exactamente igual l traido con actions.payload para comprobar que hay algo que podamos reproducir algo que pertenece a la base de datos como ejemplo.
    .-usamos useEffect para obtener el id para el estado local.

# 22. Validaciones de UI

    .- Aqui simplemente se arreglaron unos stilos css.
    .- Ademas se agrego una validacion en search.jsx para cambiar los estilos de forma dinamica del input segun donde esta se uso un paquete llamado classnames
    .- npm i classnames --save
    .- se pasa un prop que indica donde modificar en este caso se paso en Home.jsx asi:
    <Search isHome >

# 23. Redux Dev Tools nos va a servir mucho para entender mejor el flujo de nuestra información en nuestra aplicación y poder realizar debugging de manera sencilla.
