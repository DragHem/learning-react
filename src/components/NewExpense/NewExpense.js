import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} />
    </div>
  );
};

export default NewExpense;
