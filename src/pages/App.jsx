import './app.css';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import drone from '../assets/image/drone.avif';
import { useState } from 'react';

function App({ drones, videos, entregas }) {
  const [summary, setSummary] = useState(false);
  const [summary1, setSummary1] = useState(false);
  const [summary2, setSummary2] = useState(false);
  const opts = {
    height: '300',
    width: '330',
  };
  const renderVideos = videos.map(video => (
    
    <li key={video.id}><YouTube videoId={video.nomeArquivo} opts={opts} /></li>

  ));
  const renderDrones = drones.map(drones => (
    <div key={drones.id} className='div-li'>
      <li><strong>Id: </strong>{drones.id}</li>
      <li><strong>Latitude: </strong>{drones.latitude}</li>
      <li><strong>Longitude: </strong>{drones.longitude}</li>
    </div>
  ));
  const renderEntregas = entregas.map(entrega => (
    <div key={entrega.id} className='div-li'>
      <li><strong>Id: </strong>{entrega.id}</li>
      <li><strong>Data: </strong>{entrega.dataHora}</li>
      <li><strong>Status: </strong>{entrega.status}</li>
      <li><strong>Video: </strong>{entrega.video.nomeArquivo}</li>
    </div>
  ))
  const clickSummary = () => {
    setSummary(!summary);
  }
  const clickSummary1 = () => {
    setSummary1(!summary1);
  }
  const clickSummary2 = () => {
    setSummary2(!summary2);
  }

  return (
    <>
      <Navbar />
      <div className='div-h1'>
        <div className='div-details'>
          <details>
            <summary onClick={clickSummary}><strong>ENTREGAS</strong></summary>
            {entregas.length > 0 ? <ol>{renderEntregas}</ol> : <h2>Not_delivery.</h2>}
          </details>
          <details>
            <summary onClick={clickSummary1}><strong>DRONES</strong></summary>
            {drones.length > 0 ? <ol>{renderDrones}</ol> : <h2>Not_drone.</h2>}
          </details>
          <details className='details-videos'>
            <summary onClick={clickSummary2}><strong>VIDEOS</strong></summary>
            {videos.length > 0 ? <ol>{renderVideos}</ol> : <h2>Not_video.</h2>}
          </details>
        </div>
      </div>
      {!summary && !summary1 && !summary2 ? <img src={drone} alt='drone' className='drone' /> : null}

    </>
  )
}
App.propTypes = {
  videos: PropTypes.array.isRequired,
  drones: PropTypes.array.isRequired,
  entregas: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  drones: state.reducerFetch.drones,
  videos: state.reducerFetch.videos,
  entregas: state.reducerFetch.entregas,
});

export default connect(mapStateToProps)(App)
