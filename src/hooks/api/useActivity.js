import * as activitiesApi from '../../services/activitiesApi'; 
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function useActivity() {
  const [activities, setActivities] = useState(null);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const fetchActivities = async() => {
      try {
        const ticket = await activitiesApi.getActivities(token);
        setActivities(ticket.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    };

    fetchActivities();
  }, []);

  if (activities !== null) {
    return activities;
  }
}
