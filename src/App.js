import React from 'react';
import { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';
import Content1 from "./content1";

import Content5 from './content5';
import ListGroup from 'react-bootstrap/ListGroup';
import { Bar } from 'react-chartjs-2'
import { CDBContainer } from 'cdbreact';
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Line } from 'react-chartjs-2';



import { faArrowDown, faArrowUp, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "leaflet/dist/leaflet.css";
import { Container } from 'react-bootstrap';




let sortOrder = 0;
let sortOrderlast = 0;


export default function App() {

  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
  const [data2, setData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(71, 225, 167, 0.5)',
        pointHoverBorderColor: 'rgb(71, 225, 167)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  });

  useEffect(() => {
    setInterval(function () {
      var oldDataSet = data.datasets[0];
      var newData = [];

      for (var x = 0; x < data.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }

      var newDataSet = {
        ...oldDataSet,
      };

      newDataSet.data = newData;

      var newState = {
        ...data,
        datasets: [newDataSet],
      };

      setData(newState);
    }, 5000);
  });
  const [data3] = useState({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  const [mainTable, setMainTable] = useState("main_1");
  const [chart, setchart] = useState("Bar_chart");

  const [listData, setListData] = useState([]);
  const [firstnames, setFirstNames] = useState('');
  const [lastnames, setLastNames] = useState('');
  const [photo, setPhoto] = useState('');
  const [filter, setFilter] = useState('');
  const [filters, setFilters] = useState('');
  const [filterss, setFilterss] = useState('');

  document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Define the data for the chart

    // Create the bar chart
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });



  // console.log('aboutpage', firstnames, lastnames);   
  const customIcon = new Icon({
    iconUrl: require("./image/marker9.png"),
    iconSize: [30, 30]
  })


  useEffect(() => {
    console.log('myweb before fetch init')

    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    try {
      fetch("https://reqres.in/api/users", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          const listDataFetch = result.data;
          window.abz = listDataFetch;
          setListData(listDataFetch);
          setFirstNames(listDataFetch[0].first_name);
          setLastNames(listDataFetch[0].last_name);
          setPhoto(listDataFetch[0].avatar);
        });
    } catch (error) {
      console.log('myweb fetch', error)
    }

  }, []);
  
  // useEffect(() => {
  //   console.log('myweb before fetch init')

  //   const requestOptions = {
  //     method: "GET",
  //     redirect: "follow"
  //   };

  //   try {
  //     fetch("https://webclient.humanicaerp.com/b1s/v1/ChartOfAccounts", requestOptions)
  //       .then((response) => response.json())
  //       .then((result) => {
  //       console.log('result',result)
  //       });
  //   } catch (error) {
  //     console.log('myweb fetch', error)
  //   }

  // }, []); 





  function sortFunction2() {
    if (sortOrder % 2 === 0) {
      listData.sort((a, b) => a.first_name.localeCompare(b.first_name));


    } else {
      listData.sort((a, b) => b.first_name.localeCompare(a.first_name));

    }

    setFirstNames(listData[0].first_name); // Update the first name state with the first name of the sorted list
    sortOrder++;
  }

  // function sortFunction1() {

  //     if (sortOrder % 2 === 0) {
  //         listData.sort((a, b) => a.id.localeCompare(b.id));

  //     } else {
  //         listData.sort((a, b) => b.id.localeCompare(a.id));

  //     }

  //     sortID(listData[0].id); // Update the first name state with the first name of the sorted list
  //     sortOrder++; 

  // }
  function sortFunction3() {

    if (sortOrderlast % 2 === 0) {
      listData.sort((a, b) => a.last_name.localeCompare(b.last_name));

    } else {
      listData.sort((a, b) => b.last_name.localeCompare(a.last_name));

    }

    setLastNames(listData[0].last_name); // Update the first name state with the first name of the sorted list
    sortOrderlast++;

  }
  function sortFunction4() {

    if (sortOrder % 2 === 0) {
      listData.sort((a, b) => a.email.localeCompare(b.email));

    } else {
      listData.sort((a, b) => b.email.localeCompare(a.email));

    }

    setFirstNames(listData[0].email); // Update the first name state with the first name of the sorted list
    sortOrder++;

  }



  // const sortFunction_2 = (params) => {
  //     console.log('clicked', params)
  //     setCountSort(countSort + 1);
  //     setSortID(params)

  //     console.log('countSort', countSort)
  //     console.log('sortID', sortID)
  // }


  return (



    <React.Fragment>


      <section>

        <div className="layout text-2xl text-white">

          <div className="content5">
            <Content5 firstnames={firstnames} lastnames={lastnames} />
          </div>
          <div className="content1">
            <ListGroup>

              <ListGroup.Item onClick={() => setMainTable('main_1')} action variant={mainTable === 'main_1' ? 'primary' : 'secondary'} >Home</ListGroup.Item>
              <ListGroup.Item onClick={() => setMainTable('main_2')} action variant={mainTable === 'main_2' ? 'primary' : 'secondary'}>Chart</ListGroup.Item>
              <ListGroup.Item onClick={() => setMainTable('main_3')} action variant={mainTable === 'main_3' ? 'primary' : 'secondary'}>About</ListGroup.Item>
              <ListGroup.Item onClick={() => setMainTable('main_4')} action variant={mainTable === 'main_4' ? 'primary' : 'secondary'}>Table</ListGroup.Item>
              <ListGroup.Item onClick={() => setMainTable('main_5')} action variant={mainTable === 'main_5' ? 'primary' : 'secondary'}>Map</ListGroup.Item>

            </ListGroup>

            <Content1 />
          </div>


          {
            mainTable === 'main_1' ?

              <div className="Mytable">
                <InputGroup className="mb-3">
                  <InputGroup.Text className=".bg-light.bg-gradient">Global sreach</InputGroup.Text>
                  Search : {' '}
                  <Form.Control value={filterss || ''} onChange={(e) => setFilterss(e.target.value)} />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text className=".bg-light.bg-gradient">First name and last name</InputGroup.Text>
                  Search : {' '}
                  <Form.Control value={filter || ''} onChange={(e) => setFilter(e.target.value)} />

                  Search : {' '}
                  <Form.Control value={filters || ''} onChange={(e) => setFilters(e.target.value)} />
                </InputGroup>


                <Table striped bordered hover variant="white" >
                  <thead>

                    <tr>
                      <th className="text-center" onClick={() => sortFunction2('id')}># </th>
                      <th className="text-center" onClick={() => sortFunction2('first_name')}>

                        First Name  {sortOrder % 2 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}


                      </th>
                      <th className="text-center" onClick={() => sortFunction3('last_name')}>Last Name
                        {sortOrderlast % 2 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}  </th>
                      <th className="text-center" onClick={() => sortFunction4('email')}>Username
                        {sortOrder % 2 ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />}  </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listData

                      .filter((item) => {
                        let clone = structuredClone(item);
                        delete clone["photo"];
                        return filterss.toLowerCase().trim() === ''
                          ? clone :
                          JSON.stringify(clone).toLowerCase().trim().includes(filterss.toLowerCase().trim())
                      })

                      .filter((item) => {
                        return filter.toLowerCase().trim() === ''
                          ? item :
                          item.first_name.toLowerCase().trim().includes(filter.toLowerCase().trim())
                      })
                      .filter((item) => {
                        return filters.toLowerCase().trim() === ''
                          ? item :
                          item.last_name.toLowerCase().trim().includes(filters.toLowerCase().trim())
                      })
                      .map((e, index) => (
                        <tr key={e.id}>
                          <td>{e.id}</td>
                          <td>{e.first_name}</td>
                          <td>{e.last_name}</td>
                          <td>{e.email}</td>
                        </tr>
                      ))}
                  </tbody>

                </Table>



              </div>
              : mainTable === 'main_5' ?
                <div className="Mytable">
                  <MapContainer center={[13.746443162866017, 100.52244136191749]} zoom={18} scrollWheelZoom={true} style={{ padding: '100px', height: '500px', width: '100%' }}>
                    <TileLayer
                      url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                      maxZoom={20}
                      subdomains={['mt1', 'mt2', 'mt3']}
                    />
                    <Marker position={[13.746443162866017, 100.52244136191749]} icon={customIcon}>
                      <Popup>
                        HUMAN
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                : mainTable === 'main_3' ?
                  <div className="Mytable">
                    <Card className="Card1 centered" style={{ width: '12rem' }}>
                      <Card.Img variant="top" src={photo} />
                      <Card.Body>
                        <Card.Title>{firstnames} {lastnames}</Card.Title>
                        <Card.Text>
                          the best person on the world
                        </Card.Text>

                      </Card.Body>
                    </Card>
                    <CardGroup>
                      {listData.map((e, index) => (
                        <Card className="Card2" style={{ width: '8rem' }}>
                          <Card.Img onClick={() => {

                            setFirstNames(e.first_name)
                            setLastNames(e.last_name)
                            setPhoto(e.avatar)
                          }}
                            variant="top" src={e.avatar} />
                          <Card.Body>
                            <Card.Title >{e.first_name} {e.last_name}</Card.Title>
                            <Card.Text>
                              the best person on the world
                            </Card.Text>

                          </Card.Body>
                        </Card>
                      ))}
                    </CardGroup>



                  </div>
                  : mainTable === 'main_2' ?
                    <div className="Mytable">

                      <ButtonGroup aria-label="Basic example">
                        <Button onClick={() => setchart('Bar_chart')} action variant={chart === 'Bar_chart' ? 'info' : 'light'}  style={{ top: "10px" }}>Bar chart</Button>
                        <Button onClick={() => setchart('line_chart')} action variant={chart === 'line_chart' ? 'info' : 'light'} style={{ top: "10px" }}>Line chart</Button>
                        <Button onClick={() => setchart('pie_chart')} action variant={chart === 'pie_chart' ? 'info' : 'light'} style={{ top: "10px" }}>Radar chart</Button>
                      </ButtonGroup>
                      {
                        chart === 'Bar_chart' ?
                          <CDBContainer style={{ height: '500px', width: '100%' }}>
                            <Bar data={data} options={{ responsive: true }} style={{ height: '500px', width: '100%' }} />
                          </CDBContainer>
                          : chart === 'line_chart' ?
                            <CDBContainer style={{ height: '500px', width: '100%' }}>
                              <Line data={data} options={{ responsive: true }} style={{ height: '500px', width: '100%' }} />
                            </CDBContainer>
                            :
                            <CDBContainer style={{ height: '500px', width: '100%', marginLeft: '13%' }}>
                              <h3>Radar chart</h3>
                              <Radar data={data} options={{ responsive: true }} style={{ width: '100%', marginLeft: '13%' }} />
                            </CDBContainer>
                      }

                    </div>
                    : <div className="Mytable">
                      <div>33333333333</div>
                    </div>

          }
        </div>
      </section>

    </React.Fragment>


  );
};


