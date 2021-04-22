import React, { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

import expensesData from './Data/Expenses'

function App() {
	const [expenses, setExpenses] = useState(expensesData)

	// Behind the scene react
	// createElement(Component or tag name, any attribute,child,child,child,,,,,,,,)
	// return React.createElement(
	// 	'div',
	// 	{},
	// 	React.createElement(Expenses, { expenses: expenses })
	// )

	const onSaveExpenseHandler = (expense) => {
		// This is correct way to change state as it is dependent on previous state
		setExpenses((prevExpenses) => {
			const updatesExpensesList = [expense, ...prevExpenses]
			return updatesExpensesList
		})
	}

	return (
		<div className='app'>
			<NewExpense onSaveExpense={onSaveExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App
