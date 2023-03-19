import { GiExitDoor } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { InsideActivity } from './style';
import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Activity({ activity }) {
  const isSold = activity.vacancies === 0;

  function computeBoxHeight() {
    const diff = dayjs(activity.endTime).diff(dayjs(activity.startTime), 'hours');
    return `${diff * 80}px`;
  }

  function formatTime() {
    const startTime = dayjs(activity.startTime).format('HH:mm');
    const endTime = dayjs(activity.endTime).format('HH:mm');

    return `${startTime} - ${endTime}`;
  }

  return (
    <InsideActivity boxHeight={computeBoxHeight()}>
      <div>
        <h2> {activity.name} </h2>
        <p>{formatTime()} </p>
      </div>
      <div>
        {isSold ? <CrossCircle style={{ pointerEvents: isSold ? 'none' : '' }} /> : <ExitDoor />}
        <p> {isSold ? 'Esgotado' : activity.vacancies} </p>
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
`;
