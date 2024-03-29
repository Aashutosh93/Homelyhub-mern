
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
     <h1 className='bg-red text-black text-4xl'>Ganeshay namah</h1>
    </div>
  );
}

export default App;
