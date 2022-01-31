import Card from '../ui/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2020')

    const filterYearChangeHandler = (year) => {
        console.log("From Expenses: " + year);
        setFilterYear(year)
    };

    const filteredExpenses = props.items.filter(item => item.date.getFullYear() === parseInt(filterYear));
    console.log("Expenses rendered.................");


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filterYear} onFilterYearChange={filterYearChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses