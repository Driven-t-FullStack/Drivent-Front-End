import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelApi from '../../services/hotelApi'; 

export default function useHotel() {
  const token = useToken();

  const {
    data: hotels,
    loading: eventLoading,
    error: eventError,
  } = useAsync(hotelApi.getHotels(token));

  return {
    hotels,
    eventLoading,
    eventError
  };
}
