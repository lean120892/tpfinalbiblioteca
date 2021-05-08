
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // Para realizar ruteo

import Inicio from './vistas/inicio.jsx';
import Categorias from './vistas/categorias.jsx'
import Libros from './vistas/libros.jsx'
import Personas from './vistas/personas.jsx'
import NotFound from './vistas/notfound'


function App() {
 
 
  return (
    <div className="App">

       <Router>
           <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/categoria" component= {Categorias} />
              <Route exact path="/personas" component={Personas} />
              <Route exact path="/libros" component={Libros} />
              <Route component={NotFound} />
          </Switch>
       </Router>

    </div>
  );
}

export default App;
