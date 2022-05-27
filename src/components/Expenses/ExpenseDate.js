import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("pl-PL", { month: "long" }).toUpperCase();
  const day = date.toLocaleDateString("pl-PL", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
