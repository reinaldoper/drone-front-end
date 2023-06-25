import { requiredVideos, requiredDrones, requiredEntregas } from '../redux/actions/action';
import { videos, drones, entregas } from '../service/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import './navbar.css';



function Navbar({dispatch}) {
  useEffect(() => {
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
      const result2 = await entregas(options);
      dispatch(requiredEntregas(result2));
      const result1 = await drones(options);
      dispatch(requiredDrones(result1));
      const result = await videos(options);
      dispatch(requiredVideos(result));
    }
    load();
  }, [dispatch]);

  return (
    <div className="sidebar">
          <Link to='/' className='active'><i>LIST_ALL</i></Link>
          <Link to='/videos' className='link'>VIDEOS</Link>
          <Link to='/drones' className='link'>DRONES</Link>
          <Link to='/entregas' className='link'>ENTREGAS</Link>
          <Link to='/entregas/delete' className='link'>DEL_STATUS_ENTREGAS</Link>
          <Link to='/entregas/drone' className='link'>GET_ENTREGAS_DRONE</Link>
        </div>
      
  );
}
Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Navbar);
