import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Inicio from './components/Inicio/Inicio';
import MySkills from './components/MySkills/MySkills';
import Nav from './components/Navbar/Nav';
import Proyectos from './components/Proyectos/Proyectos';
import ProyectoDetail from './components/Proyectos/ProyectoDetail';
import FusionaJob from "../src/assets/imgs/FusionaJob.png";
import Tasksync from "../src/assets/imgs/TasksyncCaptura1.jpg";

import DiscoverTheWorld from "../src/assets/imgs/DiscoverTheWorld.png"
import CalculadoraApp from "../src/assets/imgs/CalculadorApp.png"
import DMArquitectura from "../src/assets/imgs/DMArquitectura.png"
import HAMaderas from "../src/assets/imgs/HAMaderas.png"
import myfavdrins from "../src/assets/imgs/myfavouritesdrinks.PNG"


function App() {
  const proyectos = [
    {
     name: "Tasksync",
     image: Tasksync,
     text: " TaskSync es una aplicación de gestión de tareas diseñada para ayudarte a organizar tus actividades diarias de manera eficiente ",
     textComplete:" TaskSync es una aplicación de gestión de tareas diseñada para ayudarte a organizar tus actividades diarias de manera eficiente. Con una interfaz fácil de usar y características poderosas, TaskSync te permite mantener el control de tus tareas en un solo lugar.   Características : Interfaz Intuitiva: Una interfaz de usuario simple y amigable que facilita la gestión de tus tareas. Gestión de Proyectos: Crea y organiza tus proyectos y tareas de forma estructurada.Listas Personalizadas: Crea listas personalizadas para organizar tus tareas de acuerdo a tus necesidades. Arrastrar y Soltar: Funcionalidad de arrastrar y soltar para una organización fácil y rápida de tareas",
     tecnologias:[
       "react","redux","tailwind","NodeJS","ExpressJs","PostgresSQL","Sequelize"
     ],
     link:"https://trello-clone-client.onrender.com"
   },
   {
     name: "FusinaJob",
     image: FusionaJob,
     text: "Fusionajob es un portal de empleos que conecta postulantes y reclutadores de empresas . Los usuarios pueden crear un perfil y postularse a ofertas de trabajo, y los reclutadores pueden crear perfiles de empresa y publicar ofertas de empleo....",
     textComplete:"Fusionajob es un portal de empleos que conecta postulantes y reclutadores de empresas . Los usuarios pueden crear un perfil y postularse a ofertas de trabajo, y los reclutadores pueden crear perfiles de empresa y publicar ofertas de empleo. La plataforma también ofrece un dashboard para administrar el sitio de manera eficiente. Fusionajob es una solución eficiente para el proceso de selección de personal en línea y es útil tanto para los postulantes como para los reclutadores.",
     tecnologias:[
       "react","redux","tailwind","Material UI","NodeJS","ExpressJs","PostgresSQL","Sequelize"
     ],
     link:"https://fusionajob.vercel.app/"
   },
   {
     name: "Estudio de Arquitectura DM",
     image: DMArquitectura,
     text: " Desarrollé esta página web para un grupo de arquitectos que buscaban promocionar sus servicios y ...",
     textComplete:"Desarrollé esta página web para un grupo de arquitectos que buscaban promocionar sus servicios y destacar sus proyectos realizados. La página web es totalmente responsive, adaptándose de manera óptima a diferentes dispositivos",
     tecnologias:[
       "ReactJs React-icons",
     ],
     link:"https://dmarquitectura.netlify.app"
   },
   {
       name: "HA maderas",
       image: HAMaderas,
       text: "Pagina web desarrollada para empresa que importa ...",
       textComplete:"Pagina web desarrollada para empresa que importa y vende puertas y zocalos a todo Paraguay ",
       tecnologias:[
         "ReactJs React-icons"
       ],
       link:"https://hamaderas.com"
       
   },{
     name:"My Favourites Drinks",
     image : myfavdrins,
text:"Se trata de una sencilla aplicación en la que el usuario puede guardar recetas de bebidas en su colección de favoritos o crear nuevas. Se utiliza el stack MERN ",
     textComplete:"Se trata de una sencilla aplicación en la que el usuario puede guardar recetas de bebidas en su colección de favoritos o crear nuevas. Se utiliza el stack MERN (MongoDB, Express, React y Node.js) y se implementa la autenticación de usuarios con bcrypt y jwtoken . El usuario puede buscar bebidas según si contienen o no alcohol, ingredientes, tipo de copa o vaso, y categoría.",
     tecnologias:[
       "ReactJs","Mongodb","nodejs","expressjs","mongoose","bcrypt","jwtoken"
     ],
     link:"https://my-favourites-drinks.onrender.com"
   },
   {
     name: "Discover the world",
     image: DiscoverTheWorld,
     text: " aplicación web de turismo que utiliza las siguientes tecnologías: React, Redux, Express, Sequelize y Postgres.El home ofrece un campo de búsqueda, una lista de países con opciones de filtros, ordenamientos y paginación. Además...",
     textComplete:"",
     link:"https://discoverthewolrd.onrender.com",
     tecnologias:[
       "react","redux","NodeJS","ExpressJs","PostgresSQL","Sequelize"
     ]
   },
   {
     name: "Calculadora App",
     image: CalculadoraApp,
     text: "La calculadora es totalmente funcional, con todas las operaciones básicas y una pantalla que muestra los números y las operaciones ingresadas , y ademas tiene interruptor de cambio de tema con tres opciones diferentes",
     textComplete:"",
     tecnologias:[
       "ReactJs"
     ],
     link:"https://helpful-salamander-f76ba2.netlify.app"
   },
   
 ];
  return (
    <div >
     
<Routes>
  <Route path='/' element={<>
    <div className='inicio-nav-container'>
          <Nav/>
          <Inicio/>
        </div>
     <Proyectos proyectos={proyectos}/>
     <MySkills/>
     <Contacto />
          

  </>}/>
  
  <Route path='/projects/:idProject' element={<ProyectoDetail proyectos={proyectos}/>}/>
 
</Routes>
    </div>
  );
}

export default App;
