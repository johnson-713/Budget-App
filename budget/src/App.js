import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// actions
import { logoutAction } from './actions/Logout';

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard';
import Error from './Pages/Error';

// layouts
import Main, { mainLoader } from './layouts/Main';

// toaster
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction,
        element: <p>logged out!</p>
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
