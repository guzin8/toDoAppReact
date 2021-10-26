import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ToDoItems from './pages/ToDoItems';
import { Route} from 'react-router';
import Main from './pages/Main';
import AddItem from './pages/AddItem'
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div className="App">
     <ToastContainer position = "bottom-right" >
     </ToastContainer>
        <Route exact path = "/" component = {Main}></Route>
        <Route exact path = "/itemsList" component = {ToDoItems}></Route>
        <Route exact path = "/addItem" component = {AddItem}></Route>
       
    </div>
  );
}

export default App;
