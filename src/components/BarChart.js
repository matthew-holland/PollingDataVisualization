import React from 'react';
import {BarChart, ScatterPlot, LineChart, Tooltip} from 'react-d3-components'
import data from '../assets/MOCK_DATA_150.json'
import './App.css';
import ToolTip from './ToolTip/tooltip'
import SideNav from './SideNav/SideNav'

// var dat0 = [
//   {
//     label: "Answer",
//     values: [
//       { x: 'data 1', y: 10 },
//       { x: "data 2", y: 5 },
//       { x: "data 3", y: 15 }
//     ]
//   }
// ];

// const style = {
//   fill: '#61dafb',
//   fillOpacity: '0.125'
// }

var tooltipScatter = (x, y) =>  {
  return (
    data.map((item, index) => {
      return (
       <ToolTip  key={index}
         first_name={data.first_name}
         last_name={data.last_name}
         gender={data.gender}
         starting_salary={data.starting_salary}
         current_salary={data.current_salary}
       />
      )
    })
  )
};

function App() {
  let d9 = data.map(s => {
    return {
      x: parseFloat(s.previous_salary.slice(1)),
      y: parseFloat(s.current_salary.slice(1)),
    }
  })
  let dF = d9

  dF.sort((a,b)=> a.x - b.x)

  console.log("dF",dF)

  let dP = {
    label: 'somethingC',
    values: [...dF]
  }

  let d0 = data.map(s => {
    return {
      x: parseFloat(s.current_salary.slice(1)),
      y: parseFloat(s.previous_salary.slice(1)),
    }
  })

  let dG = d0

  dG.sort((a,b) => a.x - b.x)

  console.log("dG",dG)
  
  let dY = [].concat(...(data.map(s => {
    return [
      {
        x: 'somethingA',
        y: parseFloat(s.previous_salary.slice(1)),
      },
      {
        x: 'somethingB',
        y: parseFloat(s.current_salary.slice(1)),
      }
    ]
  })))

  let dX = {
    label: 'somethingA',
    values: [...dG]
  }

  let dZ = {
    label: 'somethingA',
    values: [...dY]
  }

  console.log(dX)
  return (
    <div >
    <SideNav/>
      {/* <BarChart 

        data={dZ} 
        width={800}
        height={600}
        margin={{ top: 10, bottom: 50, left: 0, right: 10 }}
      /> */}
      <hr />
        <div className="sp">
        <ScatterPlot
                data={dX}
                width={980}
                height={600}
                // style={style}
                tooltipHtml={tooltipScatter}
                margin={{top: 10, bottom: 50, left: 60, right: 10}}/>
        </div>
      <hr/>
      {/* <LineChart
                data={dP}
                width={1200}
                height={600}
                margin={{top: 10, bottom: 50, left: 60, right: 5}}/> */}
    </div>
  );
}

export default App;
