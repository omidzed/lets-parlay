import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from './Hamburger/Spinner';

export const Rankings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.open('https://www.ufc.com/rankings', '_blank');
      navigate('/');
    }, 500);
  }, [navigate]);

  return <Spinner />;
};
