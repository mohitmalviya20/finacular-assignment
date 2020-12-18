import { EmojiTransportation, ShoppingCart, TrendingUp } from '@material-ui/icons'
import React from 'react'
import "./css/Body.css"
import DataCards from './DataCards'
import Graph from './Graph'
import Navbar from './Navbar'

function Body() {
    return (
        <div className="body">
            <Navbar/>
            <div className="graph_container">
                <div className="title">
                <h2>Annual Projection</h2>
                <div className="years">
                    <div className="active">
                        <p>10y</p>

                    </div>
                    <div className="non-active">
                    <p>20y</p>
                        
                    </div>
                    <div className="active">
                    <p>30y</p>
                        
                    </div>
                </div>
                </div>
                <div className="graph_data">
                <Graph/>
                </div>
            </div>
            <div className="horizontal_cards">
            <div className="graph_cards">
            <DataCards heading="Asset Balance" subHeading="Enter Amount" desc="Last Updated" Amount="₹ 1,25,000" updated="3 Dec" Icon={<EmojiTransportation/> } graph={false}/>
            <DataCards heading="Finincial Independence" subHeading="Age" desc="Optimized" Amount="45 Years" updated="Yes/No" Icon={<ShoppingCart/>} graph={false}/>
            </div>
            <div className="graph_cards">
            <DataCards heading="Growth Rate" subHeading="Enter Growth Rate" desc="Inflation" Amount="9.3%" updated="6%" Icon={<TrendingUp/>} graph={false} color/>
            <DataCards heading="Average Expenses" subHeading="Amount" desc="3 months average" Amount="₹ 40000" updated="6%" graph={true} color/>
            </div>
            <div className="graph_cards2">
            <DataCards heading="Major Investments" subHeading="Returns generated / Month" desc="Last Updated" Amount="₹ 1,25,000" updated="3 Dec" Icon={<EmojiTransportation/> } graph={false}/>
            </div>
            </div>
            
        </div>
    )
}

export default Body
