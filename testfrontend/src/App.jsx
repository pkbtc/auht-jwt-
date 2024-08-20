import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Get from './component/Get';
function App() {
  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/login',element:<Login/>},
    {path:'/signup',element:<SignUp/>},
    {path:'/get',element:<Get/>}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
