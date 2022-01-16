import { Line, Scatter } from "react-chartjs-2";
import { BarChart, LineChart } from "./Chart";
import { useState, useEffect } from "react";


function Center() {

    const [dataset1, setDataset1] = useState([]);
    const [dataset2, setDataset2] = useState([]);
    const [dataset3, setDataset3] = useState([]);
    const [dataset4, setDataset4] = useState([]);

    const updateDataset = () => {

        if (dataset1.length >= 5) {
            setDataset1([]);
            setDataset2([]);
            setDataset3([]);
            setDataset4([]);

            console.log("Clearing dataset array ",dataset1)
        } else {
            setDataset1([...dataset1, Math.random()]);
            setDataset2([...dataset2, Math.random()]);
            setDataset3([...dataset3, Math.random()]);
            setDataset4([...dataset4, Math.random()]);
        }

        console.log(dataset1);
        console.log(dataset2);
        console.log(dataset3);
        console.log(dataset4);
    }

    useEffect(() => {
    
        let periodicallyUpdateDataset = setInterval(updateDataset, 1000);
        return () => {
            clearInterval(periodicallyUpdateDataset);
        }
    }, [dataset1, dataset2, dataset3, dataset4]);

    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">

            <header className="flex my-5 justify-center">
                <h1 className="font-semibold font-sans underline decoration-dotted text-2xl text-white">Monitor System Haris</h1>
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
                    <button className="border-2 rounded-full py-1 px-2 text-white hover:underline">Button 1</button>
                    <button className="border-2 rounded-full py-1 px-2 text-white hover:underline">Button 2</button>
                </div>
            </div> 
        </div>
    )
}

export default Center
