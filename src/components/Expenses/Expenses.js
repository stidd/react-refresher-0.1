import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  //create a state handler function and pass via props to ExpensesFilter and store the data in state here
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveFilterChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilterChange={saveFilterChange}
          selected={selectedYear}
        />
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
