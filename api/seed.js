// Run seed.
const db = require("./config/db");
const { User, Course, Cart, Category } = require("./models");

const users = [
  {
    fullname: "martin",
    email: "martin@gmail.com",
    password: "passhasheada1",
    salt: "zxcvbnm1",
    isAdmin: true,
  },
  {
    fullname: "benjamin",
    email: "benjamin@gmail.com",
    password: "passhasheada2",
    salt: "zxcvbnm2",
    isAdmin: false,
  },
  {
    fullname: "luis",
    email: "luis@gmail.com",
    password: "passhasheada3",
    salt: "zxcvbnm3",
    isAdmin: false,
  },
  {
    fullname: "gaston",
    email: "gaston@gmail.com",
    password: "passhasheada4",
    salt: "zxcvbnm4",
    isAdmin: false,
  },
  {
    fullname: "rodrigo",
    email: "rodrigo@gmail.com",
    password: "passhasheada5",
    salt: "zxcvbnm5",
    isAdmin: false,
  },
];

const courses = [
  {
    title: "Javascript: de cero a experto!",
    description:
      "El curso moderno de JavaScript para todos. Domina JavaScript con proyectos, retos y teoría. ¡Muchos cursos en uno!",
    professor: "Pedro Perez",
    image: "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg",
    review:
      "Un curso muy, muy bien hecho. Super profundo, con grandes desafíos y proyectos que solidificarán su comprensión de Javascript.",
    rating: 4.5,
    price: 9.99,
    duration: 5,
    accessLink: "https://www.youtube.com/watch?v=RqQ1d1qEWlE&ab_channel=Fazt",
    videoPreview: "https://www.youtube.com/embed/eVr3hXiapBc"
    
  },
  {
    title: " El mega curso de Python: crea 10 aplicaciones del mundo real",
    description:
      "¡Pasa de cero a héroe en semanas! Aprenda Python de manera fácil construyendo programas Python de la vida real desde cero.",
    professor: "Maria Ramirez",
    image:
      "https://www.freecodecamp.org/news/content/images/size/w600/2020/05/Python-language.png",
    review:
      "Gran curso con ejemplos del mundo real. Lo recomendaría a aquellos que están empezando a aprender Python, así como a aquellos que quieren hacer programas más complejos.",
    rating: 4.7,
    price: 10.99,
    duration: 4,
    accessLink:
      "https://www.youtube.com/watch?v=DLikpfc64cA&ab_channel=freeCodeCampEspa%C3%B1ol",
    videoPreview:
    `https://www.youtube.com/embed/CjmzDHMHxwU`
      //"https://www.youtube.com/watch?v=CjmzDHMHxwU&ab_channel=codigofacilito",
  },
  {
    title: "Programación en Java para principiantes",
    description:
      "Curso de programación en Java para principiantes a la programación orientada a objetos en Java. BONUS: Construir API REST con Spring Boot. En más de 250 pasos, exploramos las características más importantes del lenguaje de programación Java",
    professor: "Laura Martinez",
    image:
      "https://japan.zdnet.com/storage/2021/09/15/765dc76ff8f55ce268feeb881011003f/t/584/438/d/java-logo_1280x960.jpg",
    review:
      "Las habilidades de enseñanza son realmente impresionantes, nunca he visto este tipo de señor brillante que enseña de una manera tan fácil.",
    rating: 4.8,
    price: 8.99,
    duration: 3,
    accessLink:
      "https://www.youtube.com/watch?v=Z8zAKYLZBqc&ab_channel=LucasMoy",
    videoPreview:
    "https://www.youtube.com/embed/nXgyVfVch1w"
      //"https://www.youtube.com/watch?v=nXgyVfVch1w&ab_channel=AprenderProgramacion",
  },
  {
    title: "React - La guía completa",
    description:
      "Sumérgete y aprende React.js desde cero. ¡Aprende Reactjs, Hooks, Redux, React Routing, Animaciones, Next.js y mucho más!",
    professor: "Juan Gonzalez",
    image:
      "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png",
    review:
      "Un curso increíble para empezar a construir aplicaciones React, el instructor es extremadamente grande, explica todo de diferentes maneras y nos muestra todas las formas posibles de trabajar con React.",
    rating: 5,
    price: 11.99,
    duration: 7,
    accessLink:
      "https://www.youtube.com/watch?v=zIY87vU33aA&t=9758s&ab_channel=Fazt",
    videoPreview:
    "https://www.youtube.com/embed/Mi3toIqESMc"
    //"https://www.youtube.com/watch?v=Mi3toIqESMc&ab_channel=codigofacilito",
  },
  {
    title: "NodeJS - La guía completa",
    description:
      "Domina Node JS y Deno.js, construye APIs REST con Node.js, APIs GraphQL, añade autenticación, usa MongoDB, SQL y mucho más.",
    professor: "Sol Rodriguez",
    image: "https://logosvector.net/wp-content/uploads/2015/09/nodejs-logo.png",
    review:
      "Maravillosa introducción a NodeJS con un montón de excelentes recursos para el aprendizaje futuro. ",
    rating: 4.9,
    price: 14.99,
    duration: 10,
    accessLink: "https://www.youtube.com/watch?v=BhvLIzVL8_o&ab_channel=Fazt",
    videoPreview:
    "https://www.youtube.com/embed/JZMZJhTajaY"  
//    "https://www.youtube.com/watch?v=JZMZJhTajaY&ab_channel=KODOTI",
  },
  {
    title: "Aprende Javascript, HTML5 y CSS3",
    description:
      "Este curso tiene como objetivo que usted aprenda JavaScript sin que sea programador. Revisaremos desde sus inicios la sintaxis del lenguaje, el manejo de sus variables, lo que es una sentencia condicional, los ciclos, las funciones, los arreglos y otros objetos, asi como la estructura DOM, que es fundamental para el manejo avanzado de las páginas, como es HTML5 y jQuerys.",
    professor: "Francisco Javier Arce Anguiano",
    image:
      "https://rolandocaldas.com/wp-content/uploads/2013/10/css3-html5-e1383236383597.png",
    review:
      "Curso muy completo para todos los que se inician y para los que quieren repasar y aprender nuevos conceptos!",
    rating: 4.7,
    price: 29.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=VG_upBADlRg&ab_channel=VidaMRR-Dise%C3%B1oydesarrolloweb",
    videoPreview:
    "https://www.youtube.com/embed/iWfncDG3M90"
    //"https://www.youtube.com/watch?v=iWfncDG3M90&ab_channel=Platzi",
  },
  {
    title: "PHP 8 y MYSQL: El Curso Completo, Práctico y Desde Cero !",
    description:
      "Bienvenido a PHP y MYSQL: El Curso Completo, Practico y Desde Cero el curso en el que aprenderás paso por paso y desde lo más básico a programar cualquier Aplicación o Sitio Web de una forma práctica y sencilla.Este curso es tu oportunidad de crear sitios en uno de los lenguajes más utilizados del mundo.",
    professor: "Carlos Arturo Esparza",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    review:
      "Muy buen curso, explica muy bien, desde lo más básico, con proyectos útiles, muy recomendable para los que no tenemos nada de conocimiento de php y mysql.",
    rating: 4.6,
    price: 84.99,
    duration: 8,
    accessLink: "https://www.youtube.com/watch?v=pn2v9lPakHQ&ab_channel=Fazt",
    videoPreview:
    "https://www.youtube.com/embed/1g7FFB-eaGI"
     // "https://www.youtube.com/watch?v=1g7FFB-eaGI&ab_channel=OpenWebinars",
  },
  {
    title: "Angular: De cero a experto (Legacy)",
    description:
      "Este curso se enfoca en llevarte de la mano desde cero hasta poder crear aplicaciones de todo tipo, que van desde páginas web de una sola página (SPA - single page application) hasta conectarnos a una base de datos para realizar proceso de inserción, actualización, eliminación y selección de información. Este curso contiene todo lo que tu necesitas para poder crear aplicaciones con este framework tan potente y veloz.",
    professor: "Fernando Herrera",
    image:
      "https://sg.com.mx/sites/default/files/styles/570x500/public/images/angular-logo.png?itok=_4hR0cNu",
    review:
      "Sin duda estoy muy contento de haberme enrolado en este curso. Me ha servido mucho, tanto profesional como laboralmente. Es cierto que es la versión Legacy, pero me ha sido de suma utilidad. Aún me encuentro en la recta final (30%) para concluirlo, pero me siento con confianza para dar mi opinión sobre él.    ",
    rating: 4.6,
    price: 84.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=i-oYrcNtc2s&ab_channel=DominiCode",
    videoPreview:
    "https://www.youtube.com/embed/0IxXZPJA3mU"
    //  "https://www.youtube.com/watch?v=0IxXZPJA3mU&ab_channel=Develoteca",
  },
  {
    title: "React Native: Aplicaciones nativas para IOS y Android",
    description:
      "Este curso completo de React Native tiene por objetivo enseñarte este framework de una forma sólida y robusta, con más de 42 horas de contenido en video (sin contar tareas y ejercicios). Es importante tener un base de React con Hooks para que este curso se sienta muy sencillo, ya que la idea de React Native, es que tomes tu conocimiento de aplicaciones de React y lo traslades a crear aplicaciones móviles.",
    professor: "Fernando Herrera",
    image:
      "https://estudioalfa.com/wp-content/uploads/2019/07/usar-react-native-crear-app.png",
    review:
      "Excelente curso! El mejor que he hecho de toda la plataforma sin dudar y el que ahora me permite estar tranquilamente en un puesto de trabajo, realizando tareas sin tantos problemas y haciendo lo que me gusta! No tengo más nada que decir, solo GRACIAS FERNANDO!",
    rating: 4.8,
    price: 84.99,
    duration: 8,
    accessLink: "https://www.youtube.com/watch?v=hXDMWeD0ERM&ab_channel=Fazt",
    videoPreview:
    "https://www.youtube.com/embed/YkYIZDoZhYw"
      //"https://www.youtube.com/watch?v=YkYIZDoZhYw&ab_channel=C%C3%B3digoconJuan",
  },
  {
    title:
      "Universidad CSS 2021 - Aprende CSS desde Cero hasta Experto!        ",
    description:
      "Universidad CSS. En este curso aprenderás todo lo referente a CSS para crear aplicaciones y sitios Web increíbles aplicando Cascading Style Sheets (Hojas de Estilo en Cascada).Desarrollaremos múltiples aplicaciones para poner en práctica todos los conceptos que estudiaremos a lo largo del curso.",
    professor: "Global Mentoring Ing. Ubaldo Acosta",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    review:
      "Excelente la forma de explicar, muy bueno que todo el curso va siguiendo un flujo y que sus clases sean tan dinámicas le agrega un gran valor adicional        ",
    rating: 4.7,
    price: 19.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=OWKXEJN67FE&ab_channel=SoyDalto",
    videoPreview:
    "https://www.youtube.com/embed/8cSo0ijtkzU"
      //"https://www.youtube.com/watch?v=8cSo0ijtkzU&ab_channel=BitechStudio",
  },
  {
    title: "Curso de HTML5 desde cero: El más completo en Español",
    description:
      "Bienvenido al Curso de HTML5 completo y desde cero, en el que aprenderemos todo lo necesario para dominar HTML5, crear tus primeras páginas web e iniciarte en el maravilloso mundo del desarrollo web.HTML5 es el lenguaje de marcas de hipertexto más importante de la web ya que todo sitio o aplicación web lo usa para definir la estructura y el contenido de sus páginas.",
    professor: "Víctor Robles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
    review:
      "Se ha centrado en las etiquetas más utilizadas para lograr el objetivo que es aprender a estructurar una página web. Estoy más que conforme con lo aprendido, ahora toca seguir practicando y aprendiendo cosas más específicas según la necesidad",
    rating: 4.7,
    price: 59.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=kN1XP-Bef7w&ab_channel=SoyDalto",
    videoPreview:
    "https://www.youtube.com/embed/10GHKjgQIR0"
      //"https://www.youtube.com/watch?v=10GHKjgQIR0&ab_channel=BitechStudio",
  },
  /* {
    title: "JavaScript: de cero hasta los detalles (ES5) ",
    description:
      "JavaScript es un lenguaje de programación moderno, quizá el más utilizado a nivel mundial cuando de web se trata. Pero no olvidemos que hoy en día existen tecnologías y frameworks cuya base es Javascript, tal es el caso de MongoDB, AngularJS, jQuery, ionic, NodeJS, entre otras.Este curso te hará comprender profundamente esta tecnología de programación, brindándote la base sólida que necesitas para entrar con paso firme a cualquier herramienta basada en JavaScript.",
    professor: "Fernando Herrera",
    image:
      "https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2018/08/que-es-javascript-1280x720.jpg",
    review:
      "Está explicado de una forma sencilla, clara y entendible, los ejemplos usados son sencillos lo cual hace que se entienda el tema sin enredarnos. Aunque ya se tenga conocimiento previo, es muy probable que se aprenda algo nuevo. ",
    rating: 4.6,
    price: 74.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=z95mZVUcJ-E&t=33188s&ab_channel=SoyDalto",
    videoPreview:
      "https://www.youtube.com/watch?v=riZbwRFMFuw&ab_channel=BitechStudio",
  }, */
  /*  {
    title: "Node JS: conceptos avanzados",
    description:
      "¡Vaya más allá de los conceptos básicos de Node! Este curso le brindará las habilidades necesarias para convertirse en un ingeniero de nodo superior.¿Almacenamiento en caché de consultas con Redis?  Lo aprenderás.  ¿El bucle de eventos de nodo ? Incluido.  ¿ Carga de archivos escalable ? ¡Por supuesto!",
    professor: "Stephen Grider",
    image: "https://ugeek.github.io/blog/images-blog/node.png",
    review:
      "Desde el principio, puedo sentir que este curso profundizará en cómo funciona nodejs y sus otros conceptos avanzados. ¡¡Realmente emocionado de aprender todo !!",
    rating: 4.8,
    price: 84.99,
    duration: 8,
    accessLink: "https://www.youtube.com/watch?v=sh-NanMOh1Q&ab_channel=Fazt",
    videoPreview: "https://www.youtube.com/watch?v=9U8EaVjuq6U&ab_channel=Fazt",
  },
  {
    title: "Universidad Java 2021 - De Cero a Experto! +106 hrs",
    description:
      "¡El Mejor y más completo curso de Java en todo Udemy! Actualizado 2021. Incluye +106 horas de video, +193,000 estudiantes, +31,000 reseñas de alumnos muy satisfechos. La Universidad Java es el mejor curso para aprender a programar en Java y en Español",
    professor: "Global Mentoring Ing. Ubaldo Acosta",
    image: "https://i.blogs.es/53044d/java/1366_521.jpg",
    review:
      "Ha sido un curso largo e intenso. Pero ni en la universidad he aprendido tanto de Java como con este curso.",
    rating: 4.7,
    price: 19.99,
    duration: 8,
    accessLink:
      "https://www.youtube.com/watch?v=Z8zAKYLZBqc&t=2115s&ab_channel=LucasMoy",
    videoPreview:
      "https://www.youtube.com/watch?v=crBLydQRUsk&ab_channel=BitechStudio",
  },
  {
    title: "Curso completo de Python 2021-De cero a Master con Python 3",
    description:
      "Bienvenido al Curso Completo de Python, desde Cero hasta Experto.Al terminar este curso completo de Python 2021, serás experto en Python, porque podrás hablar sin miedo de lenguaje de programación Python, con ese conocimiento  también podrás crear aplicación para escritorio, web y además podrás presentarte sin miedo a ofertas laborales como un experto desarrollador en Python.",
    professor: "Alex Roel Code",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/480px-Python-logo-notext.svg.png",
    review:
      "Muy buen curso, lo recomiendo para quien quiera aprender Python. muy buenos temas en el curso ",
    rating: 4.4,
    price: 19.99,
    duration: 8,
    accessLink: "https://www.youtube.com/watch?v=chPhlsHoEPo&ab_channel=Fazt",
    videoPreview:
      "https://www.youtube.com/watch?v=lc5JJTQa4r8&ab_channel=Develoteca",
  }, */
];

const categories = [
  { name: "javascript" },
  { name: "python" },
  { name: "java" },
  { name: "react" },
  { name: "node" },
  { name: "inicial" },
  { name: "php" },
  { name: "angular" },
  { name: "avanzado" },
  { name: "css" },
  { name: "html" },
  /* { name: "frontend" },
  { name: "backend" }, */
];

const carts = [
  {
    status: "pending",
    userId: 1,
  },
  {
    status: "pending",
    userId: 2,
  },
  {
    status: "pending",
    userId: 3,
  },
  {
    status: "pending",
    userId: 4,
  },
  {
    status: "pending",
    userId: 5,
  },
];

db.sync()
  .then(() => User.bulkCreate(users))

  .then(() => Cart.bulkCreate(carts))
  .then((carts) => {
    return {
      coursePromise: Course.bulkCreate(courses),
      categoryPromise: Category.bulkCreate(categories),
      carts,
    };
  })
  .then(({ coursePromise, carts, categoryPromise }) => {
    return coursePromise
      .then((courses) => {
        return { cartsPromise: carts[0].addCourses(courses), courses };
      })
      .then(({ courses }) => ({ categoryPromise, courses }))
      .then(({ categoryPromise, courses }) => {
        return categoryPromise.then((categories) => {
          const promiseArray = [];
          for (let i = 0; i < courses.length; i++) {
            promiseArray.push(courses[i].addCategory(categories[i]));
          }
          return Promise.all(promiseArray);
        });
      });
  })
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Something went wrong on the seed process", err.message);
    process.exit(1);
  });

///Asociar al curso con categoria
// Cierra el proceso una vez completado con:
// process.exit();
