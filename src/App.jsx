import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountryStart } from './redux/action/country.action';

function App() {
  const countries = useSelector(state => state.countries);
  const error = useSelector(state => state.error);
  const loading = useSelector(state => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryStart("rahul"))
  }, [])

  if (loading) {
    return (
      <div className='container mt-4 text-center'>
        <div class="spinner-border text-info" role="status" style={{
          height: "250px",
          width: "250px"
        }}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }


  if (error) {
    return (
      <div className='container mt-4'>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    )
  }


  return (
    <div className="container mt-4">
      <div className='row'>
        {
          countries.length > 0 && countries.map((country, index) => (
            <div className='col-sm-3' key={index}>
              <div className="card" >
                <img src={country.flags.svg} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

