import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Graph extends Component {
	render() {
		const options = {
			animationEnabled: true,
            
			// title:{
			// 	text: "Monthly Sales - 2017"
			// },
            toolbar: {

                buttonBorderColor:  "#3EE3BB",
                fontColor:"#d8d7da",
           
                
              },
			axisX: {
              
				// valueFormatString: "MMM"
			},
			axisY: {
                minimum: 300,
                maximum: 850,
                gridThickness: 0,
                
            },
			// 	title: "Score",
			// 	// prefix: "$"
			// },
			data: [{
				yValueFormatString: "###",
				xValueFormatString: "MMMM",
				type: "spline",
                color: "#3DE6B9",
                lineThickness: 10,
				dataPoints: [
					{ x: new Date(2017, 0), y: 500 },
					{ x: new Date(2017, 1), y: 520 },
					{ x: new Date(2017, 2), y: 600 },
					{ x: new Date(2017, 3), y: 635 },
					{ x: new Date(2017, 4), y: 600 },
					{ x: new Date(2017, 5), y: 650 },
					{ x: new Date(2017, 6), y: 670 },
					{ x: new Date(2017, 7), y: 643 },
					{ x: new Date(2017, 8), y: 680 },
					{ x: new Date(2017, 9), y: 700 },
					{ x: new Date(2017, 10), y: 720 },
					{ x: new Date(2017, 11), y: 755 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
                         