import { connect } from "react-redux"
import { getEntregasDrone } from "../../service/reducer";
import PropTypes from 'prop-types';
import { useState } from "react";
import Navbar from "../Navbar";

function GetEntregasDrone() {
  const [entregas, setEntregas] = useState([]);
  const [id, setId] = useState(0);
  const load = async () => {
    const options = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      },
    };
    const result = await getEntregasDrone(options, id);
    if (result.error){
      alert(result.error);
      setEntregas([]);
    } else {
    setEntregas(result);
    }
  }

  const renderEntregas = entregas.map(entrega => (
    <div key={entrega.id} className='div-li'>
      <li><strong>Id: </strong>{entrega.id}</li>
      <li><strong>Data: </strong>{entrega.dataHora}</li>
      <li><strong>Status: </strong>{entrega.status}</li>
      <li><strong>Video: </strong>{entrega.video.nomeArquivo}</li>
    </div>
  ))
  return (
    <>
    <Navbar />
      <div className="div-class">
        <div className="form">
          <strong>Get_Entrega_Drone</strong>
          <input type="number"
            className="input-group-text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={load}>Submity</button>
          {renderEntregas.length > 0 ? <ol>{renderEntregas}</ol> : null }
        </div>
        
      </div>
    </>
  )
}
GetEntregasDrone.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(GetEntregasDrone);
