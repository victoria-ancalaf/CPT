import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'

const Graficos = () => {

    const data={
        labels:['Chile','Argentina','Brazil','Otros'],
        datasets:[{
            data:[10.54,9.42,5.42,74.56],
            backgraundColor:['#FFFF00','blue','green','#FF0000'],
        }]
    }

    const opciones={
        responsive:true
    }

    const chartData = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'apples',
          data: [12, 19, 3, 17, 6, 3, 7],
          backgroundColor: "rgba(153,255,51,0.6)"
        }, {
          label: 'oranges',
          data: [2, 29, 5, 5, 2, 3, 10],
          backgroundColor: "rgba(255,153,0,0.6)"
        }]
      }
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col">
           <h1>Nuestro compromiso es tener</h1>
            <h2><strong>Seguridad Alimentaria </strong> para 2030</h2> 
           <Pie data={data} options={opciones}/>
           <Line data={chartData} width={500} height={250}></Line>
        </div>
        </div> 
        
        </div>

      

        </div>
        
         
    )
}

export default Graficos
