
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Allrest from './Components/Allrest/Allrest';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Viewrest from './Components/Viewrest/Viewrest';

function App() {
  return (
    <div className="App">
     
      <Header/>
      <Routes>
        {/* localhost: 3000 - Atleat component */}
        <Route path='/'element={<Allrest/>}/>
        {/* view a particular restaurant localhost:3000/view.2 */}
        <Route path='/view/:id' element={<Viewrest/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
