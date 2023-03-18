import { getActivities } from '../../services/activitiesApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useActivity() {
  const token = useToken();

  const {
    data: activitiesData,
    loading: activiesLoading,
    error: activitiesError,
  } = useAsync(() => getActivities(token));

  return { activitiesData, activiesLoading, activitiesError };
}
