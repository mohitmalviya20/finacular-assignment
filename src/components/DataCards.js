import { MoreHoriz, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import "./css/DataCard.css"
function DataCards({heading,subHeading,Amount,updated,Icon,desc,graph,color}) {

   var graphs={ 
        series: [62],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ["% of income"],
        },
    }
    


    return (
        <div className="dataCard">
            <div className="dataCard_nav">
                <p className={color===true?"dataCard_heading1":"dataCard_heading2"}>{heading}</p>
                <MoreHoriz/>
            </div>
            <div className="data">
            <div className="data_left">
                <p>{subHeading}:</p>
                <div>
                <h2 className={color?"dataCard_heading3":"dataCard_heading4"}>{Amount}</h2>
                <p>{desc}: <span>{updated}</span></p>
              
                
                
                </div>
            </div>
                {
                color?
                <>
                <div className={graph?"data-none":"icon_active"}>
                {Icon}
                </div>
                <div className={graph===true?"data_graph":"data_none"}>
                <ReactApexChart options={graphs.options} series={graphs.series} type="radialBar" height={200} />
                </div>
                </>
                :
                <div className={graph===true?"data_none":"data_right"}>
                {Icon}
                </div>

                }
                
                

            {/* <ReactApexChart options={graph.options} series={graph.series} type="radialBar" height={150} /> */}

            

            </div>
        </div>
    )
}

export default DataCards
