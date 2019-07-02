import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "./Map.css";

const GOOGLE_API_KEY = "your_api_key"; //change this

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    console.log("MapContainer", this.props.proper);

    this.state = {
      showingInfoWindow: false, //hides or shows the info window
      activeMarker: {}, //shows the active marker on click
      selectedPlace: {} //shows the infoWindow to the selected place upon a marker
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onClose(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <section className="map">
        <div className="">
          <Map
            google={this.props.google}
            zoom={15}
            initialCenter={this.props.initialCenter}
          >
            <Marker onClick={this.onMarkerClick} name={"KICC"} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({ apiKey: GOOGLE_API_KEY })(MapContainer);
