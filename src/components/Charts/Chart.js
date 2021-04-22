import './Chart.css'
import Chartbar from './Chartbar'

const Chart = (props) => {
	const dataPointsvalues = props.dataPoints.map((dataPoint) => dataPoint.value)
	const maxValue = Math.max(...dataPointsvalues)
	return (
		<div className='chart'>
			{props.dataPoints.map((datapoint) => (
				<Chartbar
					key={datapoint.label}
					id={datapoint.label}
					value={datapoint.value}
					maxValue={maxValue}
					label={datapoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
