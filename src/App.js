import Expenses from "./components/Expenses/Expenses";
import NewEspense from "./components/NewExpense/NewEspense";

function App() {
  const expenseList = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance 2",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance 3",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewEspense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenseList}></Expenses>
    </div>
  );
}

export default App;
