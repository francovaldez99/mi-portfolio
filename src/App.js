import './App.css';
import Contacto from './components/Contacto/Contacto';
import Inicio from './components/Inicio/Inicio';
import MySkills from './components/MySkills/MySkills';
import Nav from './components/Navbar/Nav';
import Proyectos from './components/Proyectos/Proyectos';



function App() {
  return (
    <div >
        <div className='inicio-nav-container'>
          <Nav/>
          
                <Inicio/>
        </div>
     <MySkills/>
     <Proyectos/>
     <Contacto/>

    </div>
  );
}

export default App;
