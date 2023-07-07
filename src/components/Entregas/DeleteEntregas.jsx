import { connect } from "react-redux"
import Navbar from "../Navbar";
import PropTypes from 'prop-types';
import { deleteEntregas, putStatus } from "../../service/reducer";
import { useState } from "react";
import { showAlert, showAlertSucces } from '../../service/alerts/alert';

function DeleteEntregas({entregasIds}) {
  const [entregas, setEntregas] = useState(0);
  const [status, setStatus] = useState('');

  const handleDelete = async () => {
    if (entregas === 0) {
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
      const { Message, error } = await deleteEntregas(options, entregas);
      if (error) {
        showAlert('Error', error);
      } else {
        showAlertSucces('success', Message);
        setEntregas(0);
        setStatus('');
      }

    }
  }
  const handleStatus = async () => {
    if (entregas === 0 || status === "") {
      showAlert('Error', 'Faltam dados!!!');
    } else {
      const options = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Authorization",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        },
      };
      const { Message, error } = await putStatus(options, entregas, status);
      if (error) {
        showAlert('Error', error);
      } else {
        showAlertSucces('success', Message);
        setStatus('');
      }

    }
  }
  return (
    <>
    <Navbar />
    <div className="div-class">

        <div className="form">
        <strong>Delete entregas</strong>
          <select className="select-checkout"
            type="select"
            value={entregas}
            onChange={(e) => setEntregas(e.target.value)}>
            <option>Selecione um ID</option>
            {entregasIds.map(entrega =>
              <option key={entrega.id} value={entrega.id}>{entrega.id}</option>

            )}
          </select>
          <input type="text"
            className="input-group-text"
            placeholder="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <button type="button" className="btn btn-outline-primary" onClick={handleStatus}>Status</button>
          <button type="button" className="btn btn-outline-warning" onClick={handleDelete}>DeleteId</button>
        </div>
      </div>
    </>
  )
}

DeleteEntregas.propTypes = {
  videosIds: PropTypes.array.isRequired,
  dronesIds: PropTypes.array.isRequired,
  entregasIds: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  entregasIds: state.reducerFetch.entregas,
});


export default connect(mapStateToProps)(DeleteEntregas);
