import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {
	const expenses = props.expenses
	const [filteredExpenses, setFilteredExpenses] = useState(
		expenses.filter(
			(expense) => expense.date.getFullYear().toString() === '2021'
		)
	)

	const onSaveSelectedYear = (year) => {
		setFilteredExpenses(
			expenses.filter(
				(expense) => expense.date.getFullYear().toString() === year
			)
		)
	}

	return (
		<Card className='expenses'>
			<ExpenseFilter saveSelectedYear={onSaveSelectedYear} />
			<ExpenseChart expenses={filteredExpenses} />
			{filteredExpenses.length === 0 ? (
				<h1 style={{ color: 'white', textAlign: 'center' }}>
					No Expense Found! &#128516;
				</h1>
			) : (
				filteredExpenses.map((item) => (
					<ExpenseItem
						key={item.id}
						title={item.title}
						date={item.date}
						amount={item.amount}
					/>
				))
			)}
		</Card>
	)
}

export default Expenses
