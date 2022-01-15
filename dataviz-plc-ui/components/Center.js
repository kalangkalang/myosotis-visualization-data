import { Line, Scatter } from "react-chartjs-2"
import { BarChart, LineChart } from "./Chart"


function Center() {
    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">

            <header className="flex my-5 justify-center">
                <h1 className="font-bold font-mono text-white">Monitor System Haris</h1>
            </header>

            <div className="space-y-4">
                <div className="flex justify-center space-x-5">
                    <LineChart titleChart={"Title 1"} />
                    <LineChart titleChart={"Title 2"} />
                </div>
                <div className="flex justify-center space-x-5">
                    <BarChart titleChart={"Title 3"} />
                    <BarChart />
                </div>
            </div>

            <div className="sticky bottom-0">
                <div className="flex justify-start bg-slate-900 p-5 space-x-2">
                    <button className="border-2 rounded-full py-1 px-2 text-white">Button 1</button>
                    <button className="border-2 rounded-full py-1 px-2 text-white">Button 2</button>
                </div>
            </div> 
        </div>
    )
}

export default Center
