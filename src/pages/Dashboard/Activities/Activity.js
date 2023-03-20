import { GiExitDoor } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { InsideActivity } from './style';
import styled from 'styled-components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
dayjs.extend(utc);

export default function Activity({ activity, capacity }) {
  const [vacancies, setVacancies] = useState(computeVacancies());

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

  return (
    <InsideActivity boxHeight={computeBoxHeight()}>
      <div>
        <h2> {activity.name} </h2>
        <p>{formatTime()} </p>
      </div>
      <div>
        {vacancies === 0 ? <CrossCircle style={{ pointerEvents: vacancies === 0 ? 'none' : '' }} /> : <ExitDoor />}
        <p> {vacancies === 0 ? 'Esgotado' : computeVacancies()} </p>
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
