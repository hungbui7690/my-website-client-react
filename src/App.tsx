import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AddProjectPage,
  AddTagPage,
  ErrorPage,
  LoginPage,
  ProjectsPage,
  ContactPage,
  SharedLayout,
  LandingPage,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },

      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'add-project',
        element: <AddProjectPage />,
      },
      {
        path: 'add-tag',
        element: <AddTagPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
