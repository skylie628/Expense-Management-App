import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
    const montlyAmount = props.dataPoints.map(data => data.value)
    const totalMaximum = Math.max(...montlyAmount)
    return (
        <div className='chart'>
          {props.dataPoints.map((dataPoint) => (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          ))}
        </div>
      );
}
export default Chart;