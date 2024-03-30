
import './App.css';

import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from 'react-router-dom';

import Main from './Components/Home/Main';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Main/>} exact></Route>

    )
  )
  return (
    <div className="App">
      <RouterProvider router= {router}/>
    
    </div>
  );
}

export default App;
