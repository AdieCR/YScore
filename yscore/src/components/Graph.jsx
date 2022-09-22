import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import { Box } from '@chakra-ui/layout';
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
					{ x: new Date(2021, 0), y: 500 },
					{ x: new Date(2021, 1), y: 520 },
					{ x: new Date(2021, 2), y: 600 },
					{ x: new Date(2021, 3), y: 635 },
					{ x: new Date(2021, 4), y: 600 },
					{ x: new Date(2021, 5), y: 650 },
					{ x: new Date(2021, 6), y: 670 },
					{ x: new Date(2021, 7), y: 643 },
					{ x: new Date(2021, 8), y: 680 },
					{ x: new Date(2021, 9), y: 700 },
					{ x: new Date(2021, 10), y: 720 },
					{ x: new Date(2021, 11), y: 755 },
					{ x: new Date(2022, 0), y: 755 },
					{ x: new Date(2022, 1), y: 720 },
					{ x: new Date(2022, 2), y: 600 },
					{ x: new Date(2022, 3), y: 655 },
					{ x: new Date(2022, 4), y: 620 },
					{ x: new Date(2022, 5), y: 630 },
					{ x: new Date(2022, 6), y: 670 },
					{ x: new Date(2022, 7), y: 643 },
					{ x: new Date(2022, 8), y: 680 },
					{ x: new Date(2022, 9), y: 700 }
				]
			}]
		}
		return (
		<Box mt="3rem" width="100%">
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</Box>
		)
	}
}
                         