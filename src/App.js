import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import SignUp from './pages/SignUp';
import { actions } from './store/counterSlice';
import LogIn from './pages/LogIn';
import Test from './pages/Test';
import Edit from './pages/Edit';
// import {actions} from './store/index';


function App() {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(actions.increment());
  // };
  // const decrement = () => {
  //   dispatch(actions.decrement());
  // };
  // const addBy = () => {
  //   dispatch(actions.addBy(5))
  // }
  // const adddBy = () => {
  //   dispatch(actions.addBy(10))
  // }
  return (
    <div>
      <Routes>
          <Route path="/" element={<LogIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/Books" element={<Books/>}/>
          <Route path="/profile" element={<Test/>}/>
          <Route path="/Edit/:id" element={<Edit/>}/>
      
       
        </Routes>
      
    </div>
  );
}

export default App;