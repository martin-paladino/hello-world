// Run seed.
const db = require("./config/db");
const { User, Course, Cart } = require("./models");

const users = [

    {
        fullname: "martin",
        email: "martin@gmail.com",
        password: "passhasheada1",
        salt: "zxcvbnm1",
        isAdmin: true
    },
    {
        fullname: "benjamin",
        email: "benjamin@gmail.com",
        password: "passhasheada2",
        salt: "zxcvbnm2",
        isAdmin: false
    },
    {
        fullname: "luis",
        email: "luis@gmail.com",
        password: "passhasheada3",
        salt: "zxcvbnm3",
        isAdmin: false
    },
    {
        fullname: "gaston",
        email: "gaston@gmail.com",
        password: "passhasheada4",
        salt: "zxcvbnm4",
        isAdmin: false
    },
    {
        fullname: "rodrigo",
        email: "rodrigo@gmail.com",
        password: "passhasheada5",
        salt: "zxcvbnm5",
        isAdmin: false
    }

];


const courses = [

    {
        title: "Javascript: From Zero to Expert!",
        description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
        professor: "Pedro Perez",
        image: "https://html5hive.org/wp-content/uploads/2014/06/js_800x800.jpg",
        review: "Really, really well made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding.",
        rating: 4.5,
        price: 9.99,
        duration: 5,
        accessLink: "https://www.udemy.com/course/the-complete-javascript-course/",
        videoPreview: "https://www.udemy.com/course/the-complete-javascript-course/"
    },
    {
        title: "The Python Mega Course: Build 10 Real World Applications",
        description: "Go from zero to hero in weeks! Learn Python the easy way by building real-life Python programs from scratch!",
        professor: "Maria Ramirez",
        image: "https://www.freecodecamp.org/news/content/images/size/w600/2020/05/Python-language.png",
        review: "Great course with real-world examples. I would recommend to those who are starting to learn Python, as well as to those who want to do more complex programs.",
        rating: 4.7,
        price: 10.99,
        duration: 4,
        accessLink: "https://www.udemy.com/course/the-python-mega-course/",
        videoPreview: "https://www.udemy.com/course/the-python-mega-course/"
    },
    {
        title: "Java Programming for Complete Beginners",
        description: "Java Programming Course for Beginners to Java Object Oriented Programming. BONUS: Build REST API with Spring Boot. In more than 250 Steps, we explore the most important Java Programming Language Features",
        professor: "Laura Martinez",
        image: "https://japan.zdnet.com/storage/2021/09/15/765dc76ff8f55ce268feeb881011003f/t/584/438/d/java-logo_1280x960.jpg",
        review: "The teaching skills are really impressive, I have never seen this kind of brilliant sir who teaches such an easy way.",
        rating: 4.8,
        price: 8.99,
        duration: 3,
        accessLink: "https://www.udemy.com/course/java-programming-tutorial-for-beginners/",
        videoPreview: "https://www.udemy.com/course/java-programming-tutorial-for-beginners/"
    },
    {
        title: "React - The Complete Guide",
        description: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
        professor: "Juan Gonzalez",
        image: "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png",
        review: "An amazing course to start building React applications, the instructor is extremely great, he explains everything in different ways and shows us all the possible ways to work with React.",
        rating: 5,
        price: 11.99,
        duration: 7,
        accessLink: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
        videoPreview: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
    },
    {
        title: "NodeJS - The Complete Guide",
        description: "Master Node JS & Deno.js, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!",
        professor: "Sol Rodriguez",
        image: "https://logosvector.net/wp-content/uploads/2015/09/nodejs-logo.png",
        review: "Wonderful introduction to NodeJS with plenty of excellent resources for future learning. ",
        rating: 4.9,
        price: 14.99,
        duration: 10,
        accessLink: "https://www.udemy.com/course/nodejs-the-complete-guide/",
        videoPreview: "https://www.udemy.com/course/nodejs-the-complete-guide/"
    }
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
    }
];


db.sync()
.then(() => User.bulkCreate(users))
.then((users) => Cart.bulkCreate(carts))
.then((carts) => {
    return {
        coursePromise: Course.bulkCreate(courses),
        carts
    }
})
.then(({coursePromise, carts}) => {
    return coursePromise.then(courses => {
        return carts[0].addCourses(courses)
    })
})
.then( () => process.exit(0))
.catch(err => {
    console.log("Something went wrong on the seed process", err.message);
    process.exit(1);
});

// Cierra el proceso una vez completado con:
// process.exit();
