import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesBydate(dateId, token) {
  const response = await api.get(`/activities/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
