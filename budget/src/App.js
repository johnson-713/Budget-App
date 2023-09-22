import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//Routes
import Dashboard, { dashboardLoader } from './Pages/Dashboard';
import Error from './Pages/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
