import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// actions
import { logoutAction } from './actions/Logout';

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from './Pages/Dashboard';
import { expenseAction, expenseLoader } from './Pages/ExpensesPage';
import Error from './Pages/Error';

// layouts
import Main, { mainLoader } from './layouts/Main';

// toaster
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage from './Pages/ExpensesPage';
import BudgetPage, { budgetAction, budgetLoader } from './Pages/BudgetPage';
import { deleteButton } from './actions/deleteButton';




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
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteButton,
          }
        ]
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expenseLoader,
        action: expenseAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction,
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
