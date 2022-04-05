import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import './App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <Header />
     
     <Switch>
         <Route path="/" exact component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path='/notas' component={Notas} />  */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
