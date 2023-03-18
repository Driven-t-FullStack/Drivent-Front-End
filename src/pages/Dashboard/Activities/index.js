import { Page, NoPayment } from './style';
import useActivity from '../../../hooks/api/useActivity';

export default function Activities() {
  const { activitiesData, activiesLoading } = useActivity();
  // se o getActivities tiver uma validação de pagamentos
  // assim como o getHotels tem
  // a requisição é o suficiente pra fazer a validação
  console.log(activitiesData);

  if (activiesLoading) {
    return <div>Loading...</div>;
  }

  if (activitiesData === null) {
    return (
      <Page>
        <div>
          <h1> Escolha de atividades </h1>
        </div>
        <NoPayment>
          <h3>
            {' '}
            Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de atividades{' '}
          </h3>
        </NoPayment>
      </Page>
    );
  } else {
    return (
      <Page>
        <div>
          <h1> Escolha de atividades </h1>
        </div>
        {activitiesData.ticketType ? (
          <h2> Você não precisa escolher as atividades! </h2>
        ) : (
          <div>
            <h2> Primeiro, filtre pelo dia do evento: </h2>
            <div>{/* tables */}</div>
          </div>
        )}
      </Page>
    );
  }
}
