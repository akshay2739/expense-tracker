import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
	const [addNewExpense, setAddNewExpense] = useState(false)

	const onSaveExpenseHandler = (expenseData) => {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		}
		props.onSaveExpense(expense)
	}

	const cancelNewExpense = () => {
		setAddNewExpense(false)
	}

	return (
		<div className='new-expense'>
			{addNewExpense ? (
				<ExpenseForm
					onSaveExpense={onSaveExpenseHandler}
					onCancelNewExpense={cancelNewExpense}
				/>
			) : (
				<div
					className='new-expense__actions'
					style={{ display: 'flex', justifyContent: 'center' }}
				>
					<button onClick={() => setAddNewExpense(true)}>Add Expense</button>
				</div>
			)}
		</div>
	)
}

export default NewExpense
