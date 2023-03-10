import * as hotelApi from '../../services/hotelApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useHotel() {
  const token = useToken();

  const {
    loading: hotelLoading,
    act: fetchHotels,
    error: hotelError,
    data: hotels,
  } = useAsync(() => hotelApi.getHotels(token));

  return {
    hotelLoading,
    fetchHotels,
    hotelError,
    hotels,
  };
}
