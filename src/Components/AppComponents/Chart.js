import React, { useState, useEffect } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";
import {Line } from 'react-chartjs-2'

const ChartDisplay = () => {

    const monthArr = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const [startDate, setStartDate] = useState(new Date('1/1/2020'));
    const [endDate, setEndDate] = useState(new Date());
    const [state, setState] = useState({})
    //console.log(state.labels)

    let confirmedData = [];
    let dateArray = [];

    useEffect(() => {



        let startdate = +moment(startDate).format('l').split('/')[1]
        let startmonth = +moment(startDate).format('l').split('/')[0]
        let startyear = +moment(startDate).format('l').split('/')[2]

        let enddate = +moment(endDate).format('l').split('/')[1]
        let endmonth = +moment(endDate).format('l').split('/')[0]
        let endyear = +moment(endDate).format('l').split('/')[2]


        fetch("")
            .then((res) => { return res.json() })
            .then((res) => {

                res.cases_time_series.forEach((ele) => {
                    // console.log(ele)
                    let date = +ele.date.split(" ")[0]
                    let month = monthArr.indexOf(ele.date.split(" ")[1]) + 1
                    let year = +ele.date.split(" ")[2]

                    //console.log(date,month,year,enddate,endmonth,endyear
                    // ,startdate,startmonth,startyear)
                    if (year < endyear && year > startyear) {
                        // console.log(date,month,year,startdate,startmonth,startyear,enddate,endmonth,endyear,'year');
                        //console.log("pushed")
                        confirmedData.push(+ele.dailyconfirmed);
                        dateArray.push(ele.date);
                        return
                    }
                    if (((month < endmonth && year === endyear) || (year < endyear)) && ((month > startmonth && year === startyear) || year > startyear)) {
                        //   console.log(date,month,year,startdate,startmonth,startyear,enddate,endmonth,endyear,'month'); 
                        // console.log("pushed")
                        confirmedData.push(+ele.dailyconfirmed);
                        dateArray.push(ele.date)
                        return
                    }
                    if ((date <= enddate && month === endmonth && year === endyear) || (date >= startdate && month === startmonth && year === startyear)) {
                        //    console.log(date,month,year,startdate,startmonth,startyear,enddate,endmonth,endyear,'date');
                        //console.log("pushed")
                        confirmedData.push(+ele.dailyconfirmed);
                        dateArray.push(ele.date)
                        return
                    }

                })

                setState({
                    labels: dateArray,
                    datasets: [
                        {
                            label: 'Daily Covid-19 Cases',
                            fill: true,
                            lineTension: 0.5,
                            backgroundColor: 'rgba(239, 68, 68,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 0,
                            scaleFontColor: "#FFFFFF",
                            data: confirmedData,
                        }
                    ]
                })

            })
        //console.log(confirmedData)


        //console.log(state)
        //console.log( dateArray, state.labels)

        //console.log(state)
        return () => {
            confirmedData = [];
            dateArray = [];
        }
    }, [startDate, endDate])


    return (
        <div className="w-11/12 md:w-2/3 mx-auto md:flex items-center justify-around">

            <div className="cursor-pointer w-11/12 md:w-4/5 text-white">
                <Line width="600" height="600" data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'India covid-19 Cases',
                            font: {
                                size: 30
                            }
                        },
                        legend: {
                            display: true,
                            position: 'left'
                        },
                        maintainAspectRatio: true,
                        responsive: true,
                        scales: {
                            xAxes: [{
                                display: true,
                                title: {
                                    display: true,
                                    text: "Timeline",
                                    font: {
                                        family: 'Times',
                                        size: 20,
                                        style: 'normal',
                                        lineHeight: 1.2
                                    }
                                },
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 6,
                                    beginAtZero: true,
                                    fontColor:"white"
                                }

                            }],
                            yAxes: [{
                                display: true,
                                title: {
                                    display: true,
                                    text: "Casualities",
                                    font: {
                                        family: 'Times',
                                        size: 20,
                                        style: 'normal',
                                        lineHeight: 1.2
                                    }
                                },ticks:{
                                    fontColor: "#CCC"
                                },
                                min: 0,
                                max: 500000
                            }]
                        },
                        pan: {
                            enabled: true,
                            mode: "xy",
                            speed: 10,
                        },
                        zoom: {
                            enabled: true,
                            drag:true,
                            mode: "xy",
                            rangeMax:{
                                x:new Date(),
                                y:700000
                            }
                        }
                    }} />

            </div>

            <div className="flex flex-col justify-center items-center text-center text-gray-400">
                <label htmlFor="">Starting Date</label>
                <DatePicker className="border-2 rounded-md bg-blue-500 text-white p-1 outline-none" dateFormat="dd/MM/yyyy" selectsStart startDate={startDate} endDate={endDate} selected={startDate} onChange={(date) => setStartDate(date)} />
                <label htmlFor="">Ending Date</label>
                <DatePicker className="border-2 rounded-md bg-blue-500 text-white p-1 outline-none" dateFormat="dd/MM/yyyy" selectsEnd endDate={endDate} startDate={startDate} selected={endDate} onChange={(date) => setEndDate(date)} />
            </div>

        </div>
    )
}
export default ChartDisplay
