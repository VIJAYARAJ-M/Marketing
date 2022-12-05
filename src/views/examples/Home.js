import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
  import ReactApexChart from "react-apexcharts";


const Ageseries4 = [{
    name: 'Age Count',
    data: [12, 8, 14, 6, 17, 7,10,5, 13, 9, 10,6]
  }]
  const Ageoptions = {
                  chart: {
                    type: 'bar',
                    height: 350,
                    toolbar: {
                      show: !1
                    },
                  },
                  title: {
                    text: 'Monthly sales',
                    align: 'center',
                    style:{
                      color:"black",
                    
                      
                    },
                    
                  },
                  colors:['#6f42c1'],
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      columnWidth: '55%',
                      endingShape: 'rounded'
                    },
                  },
                  dataLabels: {
                    enabled: false,
                    
                  },
                  stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                  },
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nev','Dec' ],
                    labels:{
                      style:{
                        colors:"black",
                        
                      },
                },
                  },
                  yaxis: {
                    /*title: {
                      text: "hi",
                      align: 'left',
                      margin: 10,
                      offsetX: 0,
                      offsetY: 0,
                      floating: false,
                      style: {
                        fontSize:  '14px',
                        fontWeight:  'bold',
                        fontFamily:  undefined,
                        color:  '#fff',
                      },
                  },*/
                    labels:{
                        style:{
                          colors:"black",
                          
                        },
                  },
                  },
                  fill: {
                    opacity: 1
                  },
                  tooltip: {
                    y: {
                      formatter: function (val) {
                        return  val + ""
                      }
                    }
                  }
                }
const Quarterseries = [{
  name: 'Age Count',
  data: [12, 8, 14, 6]
}]
const Quarteroptions = {
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: !1
    },
  },
  title: {
    text: 'Quarterly sales',
    align: 'center',
    style:{
      color:"black",
    
      
    },
    
  },
  colors:['#6f42c1'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false,
    
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Qua1', 'Qua2', 'Qua3', 'Qua4'],
    labels:{
      style:{
        colors:"black",
        
      },
},
  },
  yaxis: {
    /*title: {
      text: "hi",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#fff',
      },
  },*/
    labels:{
        style:{
          colors:"black",
          
        },
  },
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return  val + ""
      }
    }
  }
}
const series1 = [{
  name: 'Marine Sprite',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Striking Calf',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Tank Picture',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Bucket Slope',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Reborn Kid',
  data: [25, 12, 19, 32, 25, 24, 10]
}]
const options1= {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%'
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  title: {
    text: '100% Stacked Bar'
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetX: 40
  }
}
const countryseries= [
  {
    data: [
      {
        x: 'New Delhi',
        y: 218
      },
      {
        x: 'Kolkata',
        y: 149
      },
      {
        x: 'Mumbai',
        y: 184
      },
      {
        x: 'Ahmedabad',
        y: 55
      },
      {
        x: 'Bangaluru',
        y: 84
      },
      {
        x: 'Pune',
        y: 31
      },
      {
        x: 'Chennai',
        y: 70
      },
      {
        x: 'Jaipur',
        y: 30
      },
      {
        x: 'Surat',
        y: 44
      },
      {
        x: 'Hyderabad',
        y: 68
      },
      {
        x: 'Lucknow',
        y: 28
      },
      {
        x: 'Indore',
        y: 19
      },
      {
        x: 'Kanpur',
        y: 29
      }
    ]
  }
]
const countryoptions= {
  legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: 'Distibuted Treemap (different color for each cell)',
    align: 'center'
  },
  colors: [
    '#3B93A5',
    '#F7B844',
    '#ADD8C7',
    '#EC3C65',
    '#CDD7B6',
    '#C1F666',
    '#D43F97',
    '#1E5D8C',
    '#421243',
    '#7F94B0',
    '#EF6537',
    '#C0ADDB'
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
}
const targetseries= [75]
const targetoptions= {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: [' Sales Target '],
}



export default function Home(){

    return(
        <div>
            <div>
              
             <Row>
          <Col className="justify-content-center d-flex" style={{marginTop:""}}>
          <h2>Marketing</h2>
          </Col>
          
            
        </Row>
        <Row className="mt-3">
           <Col>
           <Card style={{backgroundColor:"#5694dd"}}>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="text-white">Renenue</h3>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="text-white">$6.01M</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:"#5694dd"}}>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="text-white">Profit</h3>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="text-white">$6.01M</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:"#5694dd"}}>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="text-white">Cost</h3>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="text-white">$6.01M</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:"#5694dd"}}>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="text-white">New Customer</h3>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="text-white">$10000</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:"#5694dd"}}>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="text-white">Number Of Sales</h3>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="text-white">115</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

          
           
        </Row>
        <Row className="mt-3">
                        <Col lg={6}>
                        <Card className="p-4" style={{backgroundColor:""}}>
                          <ReactApexChart options={Ageoptions} series={Ageseries4} type="bar" height={289} />
                        </Card>
                        </Col>
                        <Col lg={6}>
                        <Card className="p-4" style={{backgroundColor:""}}>
                          <ReactApexChart options={Quarteroptions} series={Quarterseries} type="bar" height={289} />
                        </Card>
                        </Col>
        </Row>

        <Row className="mt-3">
          <Col>
          <Card>
             <ReactApexChart options={options1} series={series1} type="bar" height={350} />

    
          </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
          <Card>
          <ReactApexChart options={countryoptions} series={countryseries} type="treemap" height={350} />

    
          </Card>
          </Col>
          <Col>
          <Card>
          <ReactApexChart options={targetoptions} series={targetseries} type="radialBar" height={350} />
          </Card>
          </Col>
        </Row>
            </div>
        </div>
    );

}