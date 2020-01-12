import React, { Component } from 'react';
import Geolocation from './geolocation'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';



// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {pubs:[],
      centerLat: 51.516967,
      centerLng: -0.073133,
      zoom: 14}
  }



  componentDidMount(){
    console.log("Method runs!")
    fetch(`/api/pubs`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.myJson.results
      this.setState({pubs:pubsArray})
    } );

  }

  static defaultProps = {
    centerLat: 51.516967,
    centerLng: -0.073133,
    zoom: 14
  }


   render() {
     const GoogleMapContainer = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = { { lat: this.state.centerLat, lng: this.state.centerLng } }
          defaultZoom = { this.state.zoom }>
          {this.state.pubs.map(pub => (
            <Marker position={{ lat: pub.geometry.location.lat, lng: pub.geometry.location.lng }} />
          ))}

      </GoogleMap>
      ));

       return(
          <div>

            <GoogleMapContainer
              containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />

          </div>
       );
   }

};



export default MapView;
