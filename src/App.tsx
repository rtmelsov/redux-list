import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SideBar, ErrorPage, Menu } from '@/components'
import {
  Box
} from '@chakra-ui/react'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <SideBar>
      <Box bg='white' borderRadius='8px' p={4}>
        <Menu />
        <RouterProvider router={router} />
      </Box>
    </SideBar>
  )
}

export default App