import { ActiviesDashBoard, DataFilter, InsideActivity, Page } from './style';
import useActivity from '../../../hooks/api/useActivity';
import { useState } from 'react';
import { GiExitDoor } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import styled from 'styled-components';

export default function Activities() {
  const { activitiesData, activiesLoading } = useActivity();
  const [activity, setActivity] = useState('');
  // console.log(activitiesData);

  // if (activiesLoading) {
  //   return <div>Loading...</div>;
  // }

  const dates = [
    {
      date: 'Sexta, 22/10',
      activity: 'minecraft'
    },
    {
      date: 'Sábado, 23/10',
      activity: 'two'
    },
    {
      date: 'Domingo, 24/10',
      activity: 'three'
    }
  ];

  // if (activitiesData === null) {
  //   return (
  //     <Page>
  //       <div>
  //         <h1> Escolha de atividades </h1>
  //       </div>
  //       <NoPayment>
  //         <h3> 
  //           Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de atividades
  //         </h3>
  //       </NoPayment>
  //     </Page>
  //   );
  // } else {
  return (
    <Page>
      <div>
        <h1> Escolha de atividades </h1>
      </div>
      {/* {activitiesData.ticketType ? (
        <h2> Você não precisa escolher as atividades! </h2>
      ) : ( */}
      <div>
        <h2> Primeiro, filtre pelo dia do evento: </h2>
        <DataFilter>
          {dates.map((e, i) => (
            <div key={i} onClick={() => setActivity(e.activity)}>
              <p> {e.date} </p>
            </div>
          ))}
        </DataFilter>
        <ActiviesDashBoard>
          <div>
            <h1> Auditório Principal </h1>
            <div>
              <InsideActivity>
                <div>
                  <h2> Title </h2>
                  <p> Time </p>
                </div>
                <div></div>
                <div>
                  <ExitDoor/>
                  <p> n vagas </p>
                </div>
              </InsideActivity>
            </div>
          </div>
          <div>
            <h1> Auditório Principal </h1>
            <div>
              <InsideActivity>
                <div>
                  <h2> Title </h2>
                  <p> Time </p>
                </div>
                <div></div>
                <div>
                  <ExitDoor/>
                  <p> n vagas </p>
                </div>
              </InsideActivity>
            </div>
          </div>
          <div>
            <h1> Auditório Principal </h1>
            <div>
              <InsideActivity>
                <div>
                  <h2> Title </h2>
                  <p> Time </p>
                </div>
                <div></div>
                <div>
                  <CrossCircle/>
                  <p> n vagas </p>
                </div>
              </InsideActivity>
            </div>
          </div>
        </ActiviesDashBoard>
      </div>
      {/* )} */}
    </Page>
  );
  // }
}

const ExitDoor = styled(GiExitDoor)`
  color: #078632;
  font-size: 25px;
  margin-bottom: 5px;
`;
const CrossCircle = styled(AiFillCloseCircle)`
  color: #CC6666;
  font-size: 25px;
  margin-bottom: 5px;
`;
