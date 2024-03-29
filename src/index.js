import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './Componentes/App';
//import AppCodigo from './Componentes/AppCodigo';
import AppNueva from './Componentes/AppNueva';
import AppNueva2 from './Componentes/AppNueva2';
import AppTipoCambio from './Componentes/AppTipoCambio';
import LoginFormNombreApellidos from './Componentes/LoginFormNombreApellidos';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import LoginForm from './Componentes/LoginForm';
import VistaTablaNuevo from './Componentes/VistaTablaNueva';
import VistaIntermedia from './Componentes/seleccion-intermedia';
import ComponenteEditable from './Componentes/ComponenteEditable';
import Formulario from './Componentes/formulario';
import VistaSeguimientoEgresado from './Componentes/VistaSeguimientoEgresado';

class Index extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <LoginForm />}
                path="/">
            </Route>
            
            <Route path="/:name" component={App}></Route>
            <Route path="/filtro/:name" component={VistaIntermedia}></Route>
            <Route path="/vista/nueva" component={AppNueva}></Route>
            <Route path="/vista/tipo-de-cambio" component={AppTipoCambio}></Route>
            <Route path="/vista/nueva2" component={AppNueva2}></Route>
            <Route path="/vista/tabla" component={ VistaTablaNuevo}></Route>
            <Route path="/vista/loginNyA" component={LoginFormNombreApellidos}></Route>
            <Route path="/vista/imprimir" component={ComponenteEditable}></Route>
            <Route path="/formulario/:codigo" component={Formulario}></Route>          
            <Route path="/:name/vista/egresado" component={VistaSeguimientoEgresado}></Route>
            
          </Router>
          )
      }
      
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();
=======
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 5d00202861137c787f5b6f92bb9c3ab58b440552
