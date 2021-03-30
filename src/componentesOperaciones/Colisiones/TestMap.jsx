import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Container, Grid } from '@material-ui/core';
import swal from 'sweetalert';
import { useParams } from 'react-router';
const useStyles = makeStyles({
    mapContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
    sidebar: {
        backgroundColor: 'rgba(35, 55, 75, 0.9)',
        color: '#ffffff',
        padding: '6px 12px',
        font: '15px/24px monospace',
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: '12px',
        borderRadius: '4px',
    }
});

function TestMap(){
    const classes = useStyles();
    
    mapboxgl.workerClass = MapboxWorker;
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJid29yIiwiYSI6ImNrbHR0eTl5ejI5bDgycHBtcG80cHpzemIifQ.gC54A-9RdqnmcN0dnAwKVg';

    const mapContainer = useRef();
    const [lng, setLng] = useState(-99.146792);
    const [lat, setLat] = useState(19.504911);
    const [zoom, setZoom] = useState(13);

    let {tagTipo} = useParams();

    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom,
        });
        //var marker = new mapboxgl.Marker(, {anchor: 'bottom');
        var marker = new mapboxgl.Marker({
            //anchor: 'bottom-left',
            //draggable: true
            //offset: [.485 * 1000, -(15 + 165)],
        });
        marker.setLngLat([lng, lat]);

        map.on('click', function(e) {
            // The event object (e) contains information like the
            // coordinates of the point on the map that was clicked.
            console.log('A click event has occurred at ' + e.lngLat);
            setLng(e.lngLat.lng);
            setLat(e.lngLat.lat);
            marker.setLngLat([e.lngLat.lng, e.lngLat.lat]);
            var lngLat = marker.getLngLat();
            // Print the marker's longitude and latitude values in the console
            console.log('marker Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat );
            // save coords on database related with event and colision
            swal({
                title: "¿Guardar punto seleccionado en el mapa?",
                text: `Longitud ${lngLat.lng} Latitud ${lngLat.lat}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    localStorage.setItem('coords',JSON.stringify({lat:lngLat.lat,long:lngLat.lng}));
                    window.location.href = "/colisiones-form";
                  swal("Punto guardado exitosamente", {
                    icon: "success",
                  });
                } else {
                  swal("Punto no guardado");
                }
              });
        });

        marker.addTo(map);
        return () => map.remove();
    }, []);
    
    return (
        <Container component="main">
            <Grid container spacing={4}>                
                <Grid item lg={12}>
                    <Card>
                        <CardContent>
                            <div className={classes.sidebar}>
                                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                            </div>
                            <div id={"mapContainer"} className= {classes.mapContainer} ref={mapContainer}/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
        
    );
}//TestMap

export default TestMap;