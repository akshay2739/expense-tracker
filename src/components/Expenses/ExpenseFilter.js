import { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
	const [selectedYear, setSelectedYear] = useState(2021)

	const yearChangeHandler = (e) => {
		setSelectedYear(e.target.value)
		props.saveSelectedYear(e.target.value)
	}

	return (
		<div className='expense-filter'>
			<h1>Filter by year</h1>
			<select value={selectedYear} onChange={yearChangeHandler}>
				<option value='2021'>2021</option>
				<option value='2020'>2020</option>
				<option value='2019'>2019</option>
				<option value='2018'>2018</option>
			</select>
		</div>
	)
}

export default ExpenseFilter
