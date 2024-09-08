import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AddProjectPage,
  AddTagPage,
  NotFoundPage,
  LoginPage,
  ProjectsPage,
  ContactPage,
  SharedLayout,
  LandingPage,
} from './pages'
import { createContext, useContext, useState } from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <NotFoundPage />,
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

interface AppProviderState {
  tagID: string[]
  tagName: string[]
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTagID: React.Dispatch<React.SetStateAction<string[]>>
  setTagName: React.Dispatch<React.SetStateAction<string[]>>
}

export const AppProviderContext = createContext<AppProviderState | undefined>(
  undefined
)

// eslint-disable-next-line
export const useGlobalContext = () => {
  const context = useContext(AppProviderContext)

  if (context === undefined)
    throw new Error('useGlobalContext must be used within a ThemeProvider')

  return context
}

function App() {
  const [tagID, setTagID] = useState<string[]>([])
  const [tagName, setTagName] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <AppProviderContext.Provider
      value={{ tagID, setTagID, tagName, setTagName, isOpen, setIsOpen }}
    >
      <RouterProvider router={router} />
    </AppProviderContext.Provider>
  )
}

export default App
