import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import './App.css';
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
 
]);
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;



