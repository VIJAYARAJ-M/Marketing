import React from "react"
import { Col, Row, Card } from "reactstrap";
import ReactApexChart from "react-apexcharts";

const series= [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }]
  const options= {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: !1
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
    title:{
        text: 'Broadcast Volume By Email Category',
        align:'center',
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
        text: 'Count of Category'
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
 const series1= [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ]
const options1= {
    chart: {
      type: 'boxPlot',
      height: 350,
      toolbar:{
        show: !1
      },
    },
    title: {
      text: 'Delivery Rate(%) Over Time',
      align: 'center',
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: '#00e396',
          lower: '#008ffb'
        }
      }
    }
  }
const series2= [{
    name: 'Count',
    data: [44, 55, 41, 67, 22, 43]
  }]
const options2= {
    
    chart: {
      height: 350,
      type: 'bar',
      toolbar:{
        show: !1
      },
    },
    title: {
        text: 'Recordable Outcome by Email Category',
        align: 'center',
      },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
    },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        rotate: -45
      },
      categories: ['Open', 'Click', 'Bounce', 'Webform', 'Unsubcribe', 'Reply',
       
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'Count of Gategoty',
      },
    },
    fill: {
      type: 'gradient',
      //colors:'#00e396',
      gradient: {
        shade: 'light',
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100]
      },
    }
  }

export default function Broad(){
    return(
        <div>
           
            <Row className="mt-3">
             <Col className="justify-content-center d-flex">
            <h2 className="text-white">Broadcast</h2>
            </Col> 
            </Row>
            
            <Row className="mt-3">
                <Col lg={4}>
                <Card>
                <ReactApexChart options={options} series={series} type="bar" height={350} />
                </Card>
                </Col>
                <Col>
                <Card>
                <ReactApexChart options={options1} series={series1} type="boxPlot" height={350} />
                </Card>
                </Col>
            </Row>

            <Row className="mt-3">
             <Col>
             <Card>
             <ReactApexChart options={options2} series={series2} type="bar" height={350} />
             </Card>
             </Col>
            </Row>

           
        </div>
    );
}