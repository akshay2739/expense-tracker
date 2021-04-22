import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}

	const amountChangehandler = (e) => {
		setAmount(e.target.value)
	}

	const dateChangeHandler = (e) => {
		setDate(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()

		const expenseData = {
			title,
			amount: +amount,
			date: new Date(date),
		}

		props.onSaveExpense(expenseData)

		setTitle('')
		setDate('')
		setAmount('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={title} onChange={titleChangeHandler} />
				</div>

				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						value={amount}
						onChange={amountChangehandler}
						min='0.01'
						step='0.01'
					/>
				</div>

				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='date'
						value={date}
						onChange={dateChangeHandler}
						min='2019-01-01'
						max='2022-12-31'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
				<button
					type='submit'
					onClick={props.onCancelNewExpense}
					style={{ background: 'red' }}
				>
					Cancel
				</button>
			</div>
		</form>
	)
}

export default ExpenseForm
