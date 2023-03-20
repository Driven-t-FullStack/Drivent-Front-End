import { GiExitDoor } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { InsideActivity } from './style';
import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState, useEffect } from 'react';
import { postUserActivity } from '../../../services/activitiesApi';
import useToken from '../../../hooks/useToken';
dayjs.extend(utc);

export default function Activity({ activity, capacity, setUpdate, update }) {
  const [loading, setLoading] = useState(false);
  const [activityStatus, setActiviesStatus] = useState(determineActivityStatus());
  const token = useToken();

  useEffect(() => {
    setActiviesStatus(determineActivityStatus());
  }, [activity]);

  function determineActivityStatus() {
    if (activity.isEnrolled) {
      return 'enrolled';
    } else if (computeVacancies() === 0) {
      return 'soldout';
    } else {
      return 'available';
    }
  }

  function computeVacancies() {
    const soldAmount = activity.UserOnActivity.length;
    const availableVacancies = capacity - soldAmount;
    return availableVacancies;
  }

  function computeBoxHeight() {
    const diff = dayjs(activity.endTime).diff(dayjs(activity.startTime), 'hours');
    return `${diff * 80}px`;
  }

  function formatTime() {
    const startTime = dayjs(activity.startTime).utc().format('HH:mm');
    const endTime = dayjs(activity.endTime).utc().format('HH:mm');

    return `${startTime} - ${endTime}`;
  }

  async function enrollOnActivity() {
    setLoading(true);
    try {
      const body = { activityId: activity.id };
      await postUserActivity(token, body);
      setLoading(false);
      setUpdate(!update);
    } catch (err) {
      alert(err.response.data.message);
      setLoading(false);
    }
  }

  return (
    <InsideActivity
      boxHeight={computeBoxHeight()}
      style={{ pointerEvents: loading ? 'none' : '' }}
      activityStatus={activityStatus}
    >
      <div>
        <h2> {activity.name} </h2>
        <p>{formatTime()} </p>
      </div>
      <div>
        {activityStatus === 'enrolled' && <CheckCircle />}
        {activityStatus === 'soldout' && <CrossCircle />}
        {activityStatus === 'available' && (
          <ExitDoor onClick={enrollOnActivity} style={{ pointerEvents: loading ? 'none' : '' }} />
        )}
        <p> {activityStatus === 'soldout' ? 'Esgotado' : computeVacancies()} </p>
      </div>
    </InsideActivity>
  );
}

const ExitDoor = styled(GiExitDoor)`
  color: #078632;
  font-size: 25px;
  margin-bottom: 5px;
  cursor: pointer;
`;
const CrossCircle = styled(AiFillCloseCircle)`
  color: #cc6666;
  font-size: 25px;
  margin-bottom: 5px;
  cursor: pointer;
  pointer-events: none;
`;
const CheckCircle = styled(IoCheckmarkCircleOutline)`
  color: #078632;
  font-size: 25px;
  margin-bottom: 5px;
  cursor: pointer;
`;
