import * as hotelApi from '../../services/hotelApi'; 
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function useHotel() {
  const [hotels, setHotels] = useState(null);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const fetchHotels = async() => {
      try {
        const ticket = await hotelApi.getHotels(token);
        setHotels(ticket.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    };

    fetchHotels();
  }, []);

  if (!hotels) {
    return hotels;
  }
}
