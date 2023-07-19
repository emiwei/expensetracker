import React from "react";
import Navbar from "./components/navbar";
import overallSummary from "./components/overallsummary";
import spendSummary from "./components/spendsummary";
import NetWorth from "./components/networth";
import OverallSummary from "./components/overallsummary";
import './dashboard.css'

function Dashboard() {
    return (
        <div className="fullpage">
            <Navbar/>
            <div className="dashfull">
                <h1 className="pageheader">Dashboard</h1>
                <h2 className="pagedescription">Here's a summary of all your finances</h2>
                <div className="cards">
                    <NetWorth/>
                    <div className="smallcards">
                        <OverallSummary/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;