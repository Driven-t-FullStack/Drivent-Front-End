import * as hotelApi from '../../services/hotelApi';
import useAsync from '../useAsync';

export default function useRoom() {
  const { loading: roomLoading, act: fetchRooms, error: roomError, data: rooms } = useAsync(hotelApi.getRooms, false);

  return { roomLoading, fetchRooms, roomError, rooms };
}
