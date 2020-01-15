import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import MapView from '../components/mapView'
import CurrentLocationMap from '../components/currentLocationMap'

const PubSearchResults = (props) => (

<Layout titleName={"Map View"}>
  <h1>Map!</h1>
    <CurrentLocationMap/>

  </Layout>

);

export default PubSearchResults;
