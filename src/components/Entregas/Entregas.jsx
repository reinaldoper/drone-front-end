import { connect } from "react-redux"
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { entregas } from '../../service/reducer';
import Navbar from "../Navbar"

function Entregas() {
  const [status, setStatus] = useState('');
  const [droneId, setDroneId] = useState(0);
  const [videoId, setVideoId] = useState(0);
  useEffect(() => {
  }, [status, droneId, videoId]);

  const handleChange = async () => {
    const result = {
      status,
      droneId,
      videoId,
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
    const { Message, error } = await entregas(options);
    if (error) {
      alert(error);
    } else {
      alert(Message);
      setStatus('');
      setDroneId(0);
      setVideoId(0);
    }

  }
  return (
    <>
      <Navbar />
      <div className="div-class">

        <div className="form">
        <strong>Add entregas</strong>
          <input type="text"
            className="input-group-text"
            placeholder="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input type="number"
            className="input-group-text"
            placeholder="droneId"
            value={droneId}
            onChange={(e) => setDroneId(e.target.value)}
          />
          <input type="number"
            className="input-group-text"
            placeholder="videoId"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={handleChange}>Submity</button>
        </div>
      </div>
    </>

  )
}

Entregas.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Entregas)
