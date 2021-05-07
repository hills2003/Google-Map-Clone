import React,{useEffect} from 'react';
import "./test.css"


function App(props) {

  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

  useEffect(()=>{
    const success=(position)=>{
      mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsbHMiLCJhIjoiY2tvOGNncDVxMjRwazJxbHlkbG55OXk5aCJ9.E9W-GsOb5UkqqF3pcGdutw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
      });   
       
  
      map.addControl(new mapboxgl.NavigationControl());
  
            new mapboxgl.Marker()
        .setLngLat([position.coords.longitude,position.coords.latitude])
        .addTo(map);
    }

    const Eror =()=>{
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsbHMiLCJhIjoiY2tvOGNncDVxMjRwazJxbHlkbG55OXk5aCJ9.E9W-GsOb5UkqqF3pcGdutw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });   
     

    map.addControl(new mapboxgl.NavigationControl());

          new mapboxgl.Marker()
      .setLngLat([0.127758,51.507351])
      .addTo(map);
    }
    navigator.geolocation.getCurrentPosition(success,Eror,{enableHighAccuracy:true})
    
  },[])
        
     
    return (
        <>
          <div id ="map" className="map">


         </div>  
        </>
    );
}

export default App;