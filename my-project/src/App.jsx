import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Users from './user/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(

    <Route >
    <Route  path='/' element={<MainNavigation/>}/>
  <Route path='/users' element={<Users/>}/>
  <Route path='/places/new' element={<NewPlaces/>}/>
    


  </Route>
  

  ))
  return (
    <>
<RouterProvider router={router}/>    </>
  )
}

export default App
