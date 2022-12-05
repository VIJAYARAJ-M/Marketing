/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
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
// core components
import Header from "components/Headers/Header.js";

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
                    color:"white",
                  
                    
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
                      colors:"white",
                      
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
                        colors:"white",
                        
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

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      
      
  <Container className="" fluid style={{backgroundColor:"#24344e"}}>
        {/* Table */}
        <Row>
          <Col className="justify-content-center d-flex" style={{marginTop:"90px"}}>
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
              <h1 className="text-white">$6.01M</h1>
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
              <h1 className="text-white">$6.01M</h1>
              </Col>
            </Row>
          
           </Card>
           </Col>

          
           
        </Row>
        <Row className="">
                        <Col>
                        <Card className="p-4" style={{backgroundColor:"#00072b"}}>
                          <ReactApexChart options={Ageoptions} series={Ageseries4} type="bar" height={289} />
                        </Card>
                        </Col>
                      </Row>
      </Container>
    </>
  );
};

export default Icons;
