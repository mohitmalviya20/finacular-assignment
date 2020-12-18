import React, { useState } from 'react'
import "./css/Graph.css"
import Chart from "react-apexcharts"
function Graph() {
    const [options,setOptions]=useState({
        options: {
            chart: {
              id: "basic-bar"
            },
            
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            gradientToColors: [ '#133B8A','#2F4879', '#7D8BB6',],
            
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#133B8A"]
          
        },
        
        xaxis: {
              text:"hello",
              categories: [1,2,3,4,5,6,7,8,9,10]
            }
          },
    })
    const [series, setSeries]=useState([
      
        {
          
          data: [10,20,30,40,50,60,70,80,90,100]
        }
      ])
    return (
        <div className="graph">
            <Chart
              className="chart"
              options={options}
              series={series}
              type="bar"
              height="300"
            />
            
        </div>
    )
}

export default Graph
