import Navbar from "../Navbar"
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { videos, deleteVideos } from '../../service/reducer';
import { useEffect, useState } from 'react';
import './videos.css';
import { showAlert, showAlertSucces } from '../../service/alerts/alert';

function Videos({ videosId }) {
  const [nomeArquivo, setNomeArquivo] = useState('');
  const [videosIds, setVideos] = useState([]);
  const [remuve, setRemuve] = useState(0);
  useEffect(() => {
    const load = () => {
      setVideos(videosId);
    }
    load();
  }, [nomeArquivo, videosId]);

  const handleChange = async () => {
    const result = {
      nomeArquivo,
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
    const { Message } = await videos(options);
    showAlertSucces('success', Message);
    setNomeArquivo('');
  }
  const handleDelete = async () => {
    if (remuve === 0) {
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
      const { Message, error } = await deleteVideos(options, remuve);
      if (error) {
        showAlert('Error', error);
      } else {
        showAlertSucces('success', Message);
        setRemuve(0);
      }

    }
  }
  return (
    <>
      <Navbar />
      <div className="div-class">

        <div className="form">
          <strong>Class Videos</strong>
          <select className="select-checkout"
            type="select"
            value={remuve}
            onChange={(e) => setRemuve(e.target.value)}>
            <option>Selecione um ID</option>
            {videosIds.map(videos =>
              <option key={videos.id} value={videos.id}>{videos.id}</option>

            )}
          </select>
          <input type="text"
            className="input-group-text"
            placeholder="Id-video-youtube" aria-label="Username"
            value={nomeArquivo}
            onChange={(e) => setNomeArquivo(e.target.value)}
          />
          <button type="button"
            className="btn btn-outline-primary"
            onClick={handleChange}>Submity</button>
          <button type="button" id='delete'
            className="btn btn-outline-warning"
            onClick={handleDelete}>DeleteId</button>
        </div>
      </div>
    </>

  )
}
Videos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  videosId: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  videosId: state.reducerFetch.videos,
});
export default connect(mapStateToProps)(Videos);

