import React, { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getWeather } from "../store/features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("London"));
  }, [dispatch]);

  return (
    <div className="App d-flex align-items-center">
      <Container className="homepage">
        <Col className="text-center mt-4">
          <h1>{weather?.name || "Loading..."}</h1>
        </Col>
        <Col className="mx-3">
          <select className="search-bar rounded-pill"></select>
        </Col>
        <Col className="d-flex justify-content-center mt-3">
          <Row className="status-container bg-body d-flex justify-content-center align-items-center">
            <Col className="status-left m-1 d-flex align-items-center">
              {/* <Col className="ms-4 fs-2 text">{data.heat}°C</Col> */}
              <Col className="fs-5">
                {/* <div>Precipitation:{data.precipitation}</div> */}
                {/* <div>Moisture:{data.moisture}</div> */}
                {/* <div>Wind:{data.wind}</div> */}
              </Col>
            </Col>
            <Col className="status-right m-1 fs-5">
              {/* <h3>Weather Forecast</h3> */}
              {/* <div>{data.day}</div> */}
              {/* <div>{data.weather}</div> */}
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mt-2">
          <div className="days bg-body">
            <div className="pt-4 fs-3 d-flex justify-content-center align-items-center"></div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default HomePage;
