import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        //console.log(expenseData);
        props.onAddExpanse(expenseData);
        setIsEditing(false);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseData={stopEditingHandler}/>}
    </div>
}

export default NewExpense