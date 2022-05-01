import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
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
        {/* <Route path="/about" component={About} /> */}
        <Route path="/contacto" component={Contact} />
       {/*  <Route path='/notas' component={Notas} />  */}
      </Switch>
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
