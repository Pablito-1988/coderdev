import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Fighters from './components/Fighters/Fighters';
import FighterDetail from './components/Fighters/FighterDetail';
import Interviews from './components/Interviews/Interviews';
import Me from './components/Me/Me';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import { Suspense } from "react";


function App() {
  return (
    <div >
      <Suspense fallback={null}>
      <Header />
     <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/contato" component={Contact} />
        <Route path="/peleadores" component={Fighters} />
        <Route path="/lutadores" component={Fighters} />
        <Route path="/peleador/:id" component={FighterDetail} />
        <Route path="/lutador/:id" component={FighterDetail} />
        <Route path='/entrevistas' component={Interviews} /> 
        <Route path='/about' component={Me} /> 
      </Switch>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
