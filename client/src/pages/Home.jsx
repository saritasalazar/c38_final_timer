import React from 'react';
//import Navigation from '../components/Navigation';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Home = () => {
  return (
    <MDBContainer fluid>
      <MDBRow></MDBRow>
      <h1>Hi</h1>
      <MDBRow>
        <MDBCol
          md="3"
          className="block-example border border-info border-weight rounded mb-0"
        >
          HOME
        </MDBCol>
        <MDBCol
          md="6"
          className="block-example border border-info rounded mb-0"
        >
          HOME
        </MDBCol>
        <MDBCol
          md="3"
          className="block-example border border-info rounded mb-0"
        >
          HOME
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Home;
