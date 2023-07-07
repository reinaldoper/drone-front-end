import Navbar from '../Navbar';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { drones, deleteDrones } from '../../service/reducer';
import './drone.css';
import { showAlert, showAlertSucces } from '../../service/alerts/alert';

function Drones({ dronesId }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState('');
  const [seller, setSeller] = useState(0);
  const [dronesIds, setDrones] = useState([]);
  useEffect(() => {
    const load = () => {
      setDrones(dronesId);
    }
    load();
  }, [latitude, longitude, dronesId, dronesIds]);


  const handleChange = async () => {
    if (latitude.length === 0 || longitude.length === 0) {
      showAlert('Error', 'Faltam dados!!!');
    } else {
      const result = {
        latitude,
        longitude,
      }
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        },
        body: JSON.stringify(result),
      };
      const { Message } = await drones(options);
      showAlertSucces('success', Message);
      setLatitude('');
      setLongitude('');
    }

  }

  const handleDelete = async () => {
    if (seller === 0) {
      showAlert('Error', 'Faltam dados!!!');
    } else {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        },
      };
      const { Message, error } = await deleteDrones(options, seller);
      if (error) {
        showAlert('Error', error);
      } else {
        showAlertSucces('success', Message);
        setSeller(0);
      }

    }
  }

  return (
    <>
      <Navbar />
      <div className="div-class">
        <div className="form">
          <strong>Class Drone</strong>
          <select className="select-checkout"
            type="select"
            value={seller}
            onChange={(e) => setSeller(e.target.value)}>
            <option>Selecione um ID</option>
            {dronesIds.map(drone =>
              <option key={drone.id} value={drone.id}>{drone.id}</option>

            )}
          </select>
          <input type="text"
            className="input-group-text"
            placeholder="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
          <input type="text"
            className="input-group-text"
            placeholder="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={handleChange}>Submity</button>
          <button type="button" id='delete'
            className="btn btn-outline-warning"
            onClick={handleDelete}>DeleteId</button>
        </div>
      </div>
    </>

  )
}

Drones.propTypes = {
  dispatch: PropTypes.func.isRequired,
  dronesId: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  dronesId: state.reducerFetch.drones,
});

export default connect(mapStateToProps)(Drones);


