import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth.actions';
import { eventLogout } from '../../actions/events.actions';

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(eventLogout());
    dispatch(startLogout());
  };

  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
      <span className='navbar-brand'>{name}</span>
      <button className='btn btn-outline-danger' onClick={handleLogout}>
        <i className='fas fa-sign-out-alt'></i>
        <span> Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
