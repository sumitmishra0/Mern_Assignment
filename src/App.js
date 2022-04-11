
import './App.css';
import { Books } from './components/books';
import {Route,Routes} from "react-router-dom"
import { Form } from './components/form';
import { Navbar } from './components/Navbar';


function App() {


  return (
    <div className="App">
 
   <div><Navbar/></div>
    <div>
    <Routes>
    <Route path='/' element={<Books/>}/>
    <Route path='/save/:id' element={<Form/>}/>
    </Routes>
    </div>
   
    </div>
  );
}

export default App;
