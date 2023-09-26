import React from "react";
// rrd imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { createBudget, fetchData, wait } from "../helpers";
import Intro from "../components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../components/AddBudgetForm";
import AddExpenseForm from "../components/AddExpenseForm";

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

// action
export async function dashboardAction({ request }) {
  await wait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account");
    }
  }

  // new budget creation
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!");
    } catch (e) {
      throw new Error("There was a problem creating a new budget");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();
  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back,
            <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {
              budgets && budgets.length > 0
              ? (
                <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
              </div>
              )
              : (
                <div className="grid-sm">
                  <p>Personal budgeting is the secret
                    to the financial freedom.
                  </p>
                  <p>
                    Create a budget to get started!
                  </p>
                  <AddBudgetForm />
                </div>
              )
            }
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
