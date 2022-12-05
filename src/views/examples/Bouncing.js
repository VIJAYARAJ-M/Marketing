import React from "react"
import ReactApexChart from "react-apexcharts";
import {Row, Col,Card } from "reactstrap";



const series= [{
    name: 'Count',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }]
const options= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar:{
         show:!1,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: 'Bounce Count'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }
export default function Bouncing(){
       return(
        <div>
            <h1 className="text-white">Bouncing</h1>
            <Row>
                <Col lg={6}>
                <Card className="p-3">
                    <Row>
                        <Col>
                        <Card style={{backgroundColor:"#e0e0e0"}}>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h1>31K</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h5>Send Count</h5>
                                </Col>
                            </Row>
                        
                        </Card>
                       
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#e0e0e0"}}>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h1>8</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h5>Bounce Count IB</h5>
                                </Col>
                            </Row>
                        
                        </Card>
                       
                        </Col>
                        <Col>
                        <Card style={{backgroundColor:"#e0e0e0"}}>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h1>0.30</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="justify-content-center d-flex">
                                <h5>Bounce Rate(%)</h5>
                                </Col>
                            </Row>
                        
                        </Card>
                       
                        </Col>

                        
                      
                    </Row>
                </Card>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col lg={6}>
                <Card>
                <ReactApexChart options={options} series={series} type="bar" height={350} />
    
                </Card>
                </Col>
            </Row>
        </div>
       );
} 