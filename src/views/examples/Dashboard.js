import React from "react";
import { useEffect, useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import {FcPicture} from "react-icons/fc"

import "../../views/Card.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import { NavDropdown, Tab, Tabs } from "react-bootstrap";

import "../../views/inter.css";
import 'bootstrap-daterangepicker/daterangepicker.css';
import FeaturedInfo from "Funnel/funnel";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { ProgressCircular, ProgressLinear } from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css'
import {BsFillPersonFill,BsStack,BsPersonLinesFill} from "react-icons/bs"
import ReactApexChart from "react-apexcharts";
//import 'react-date-range/dist/styles.css'; // main style file
//import 'react-date-range/dist/theme/default.css'; // theme css file
import Select from "react-select"
// import Home from "../views/examples/Home"
// import Dashboard from "./examples/Dashboard";
//import DateRangePicker from "../DatePicker/DateRange"

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes"

const options = [{
  "id": 1,
  "value": "9ce42304-b732-4791-9731-6f299b6df8c7",
  "label": "Infosys"
}, {
  "id": 2,
  "value": "90419f06-7d07-45c8-bcec-d675096fe27f",
  "label": "Zoho"
}, {
  "id": 3,
  "value": "a23521da-0a48-4ef6-baa2-d727704f65c2",
  "label": "Shiash"
}, {
  "id": 4,
  "value": "34b2b58a-0123-49e2-b2de-1eef0922139b",
  "label": "Wibro"
},]

const barlineseries= [{
  name: 'Email Engagement This Year',
  type: 'column',
  data: [1.4, 2, 2.5, 1.5, 2.5, 2.8]
}, {
  name: 'Email Engagement Last Year',
  type: 'column',
  data: [1.1, 3, 3.1, 4, 4.1, 4.9]
}, {
  name: 'EEI This year',
  type: 'line',
  data: [20, 29, 37, 36, 44, 45]
},
{
  name: 'EEI Last year',
  type: 'line',
  data: [20, 30, 37, 30, 44, 45]
},]

const barlineoptions= {
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    toolbar: {
      show: !1
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: 'Email Engagement Score & Index - This Year vs Last Year',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: ['Non-Member', 'Qualifying Member','Qualifying and Life Member','Former Member','Life Member' ,'Academy Member'],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Email Engagement Score",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "EEI This Year and EEI Last Year",
        style: {
          color: '#00E396',
        }
      },
    },
    
    
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
}
const series1 = [{
  name: 'High',
  data: [44, 55, 41, 37, 22, 43]
}, {
  name: 'Low',
  data: [53, 32, 33, 52, 13, 43]
}, {
  name: 'Mediun',
  data: [12, 17, 11, 9, 15, 11]
}, ]
const options1= {
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%',
    toolbar: {
      show: !1
    },
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
    text: 'Email Engagement Index by Member Type',
    align:'center',
  },
  xaxis: {
    categories: ['Former Member', 'Non-Member', 'Qualifying Member', 'Qualifying and Life Member','Life Member' ,'Academy Member'],
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
    position: 'bottom',
    horizontalAlign: 'center',
    offsetX: 40
  }
}


export default function Dash(){




  const [getdealdetails, setdealdetails] = useState ([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/core/demo',{
          method:"GET",
        })
        .then(Res=>Res.json())
        .then(response=>{
          const obj1 = JSON.stringify(response)
          const output1 = JSON.parse(obj1)
          
          setdealdetails(output1)
          console.log("result",output1)
          
        });
       
      },[])

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
  }, []);

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }

    return(
        <div>
            <div style={{backgroundColor:"#19335A", height:"auto" }}>
            <Row className="mt-4">
              <Col className="justify-content-start d-flex" style={{marginTop:""}}>
              <h2 className="text-white">All Time Cumulative Scores</h2>
              </Col>
            </Row>

            <Row className="mt-1">
              {getdealdetails.map((item, index)=>(
                <Col key={index}>
                <Card style={{backgroundColor:""}}>
                <Row>
                    <Col className="justify-content-center d-flex" >
                    <h1 className="">{item.firstname}</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="justify-content-center d-flex">
                    <h3 className="">Delivery Rate(%)</h3>
                    </Col>
                  </Row>
                
                
                </Card>
                  
                </Col>
              ))}

           <Col>
           <Card style={{backgroundColor:""}}>
           <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="">29.1</h1>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="">Open Rate(%)</h3>
              </Col>
            </Row>
           
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:""}}>
           <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="">10.2</h1>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="">Open to Click Rate(%)</h3>
              </Col>
            </Row>
            
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:""}}>
           <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="">26.2</h1>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="">Average Send Per Member</h3>
              </Col>
            </Row>
           
          
           </Card>
           </Col>

           <Col>
           <Card style={{backgroundColor:""}}>
           <Row>
              <Col className="justify-content-center d-flex">
              <h1 className="">0.04</h1>
              </Col>
            </Row>
            <Row>
              <Col className="justify-content-center d-flex">
              <h3 className="">Email Engagement Index</h3>
              </Col>
            </Row>
            
          
           </Card>
           </Col>

          
           
            </Row>

            <Row className="mt-4">
              <Col lg={2}>
              <Card>
                <Row>
                  <Col className="justify-content-center d-flex">
                
                  <h6>Sample Size</h6>
                 
                  </Col>
                  
                </Row>
                <Row>
                  <Col className="justify-content-center d-flex">
                  <h1>334K</h1>
                  </Col>
                </Row>
              </Card>
              </Col>
              <Col lg={2}>
                <Card>
                  <Row>
                    <Col>
                    <h5>Region Country</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <ReactMultiSelectCheckboxes
                                              options={[{ label: "All", value: "*" }, ...options]}
                                              placeholderButtonLabel="Select"
                                              getDropdownButtonLabel={getDropdownButtonLabel}
                                              value={selectedOptions}
                                              onChange={onChange}
                                              setState={setSelectedOptions}
                                            />
                    </Col>
                  </Row>
                </Card>
              </Col>

              <Col lg={2}>
                <Card>
                  <Row>
                    <Col>
                    <h5>Company</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <ReactMultiSelectCheckboxes
                                              options={[{ label: "All", value: "*" }, ...options]}
                                              placeholderButtonLabel="Select"
                                              getDropdownButtonLabel={getDropdownButtonLabel}
                                              value={selectedOptions}
                                              onChange={onChange}
                                              setState={setSelectedOptions}
                                            />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col>
              <Card className="p-3">
              <ReactApexChart options={barlineoptions} series={barlineseries} type="line" height={350} />

              </Card>
              </Col>
              <Col>
                <Card className="p-3">
                  <ReactApexChart options={options1} series={series1} type="bar" height={350} />

          
                </Card>
              </Col>
            </Row>


                 

                
            </div>
        </div>
    );
}