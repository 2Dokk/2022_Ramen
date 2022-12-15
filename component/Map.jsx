import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50%",
  left: "0",
};

const MyComponent = (props) => {
  const center = {
    lat: Number(props.props.lat),
    lng: Number(props.props.lng),
  };
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  const apiKey = "AIzaSyDNikTB4dl2anKMqtQRQCEw9eTjwtAw_j0";
  console.log(props);
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MyComponent);
