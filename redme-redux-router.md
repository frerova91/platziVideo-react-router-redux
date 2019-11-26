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
