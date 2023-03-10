import * as hotelApi from '../../services/hotelApi';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function useHotel() {
  const [hotels, setHotels] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const fetchHotels = async() => {
      try {
        const ticket = await hotelApi.getHotels(token);

        setHotels(ticket);
        setLoading(false);
      } catch (err) {
        // eslint-disable-next-line no-console
        setError(true);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, error, loading };
}
