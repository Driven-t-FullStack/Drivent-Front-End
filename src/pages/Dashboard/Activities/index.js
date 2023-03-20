import { DataFilter, Page, NoPayment } from './style';
import useActivity from '../../../hooks/api/useActivity';
import { useState } from 'react';
import DateActivity from './DateActivity';
import { useEffect } from 'react';
import { getActivitiesBydate } from '../../../services/activitiesApi';
import useToken from '../../../hooks/useToken';
import ActivitiesContainer from './ActivitiesContainer';

export default function Activities() {
  const { activitiesData, activiesLoading } = useActivity();
  const [dateId, setDateId] = useState(null);
  const [showActivities, setShowActivities] = useState(false);
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState(true);
  const token = useToken();

  useEffect(() => {
    const fetchActivitiesBydate = async() => {
      try {
        const data = await getActivitiesBydate(dateId, token);
        setActivities(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    if (showActivities) {
      fetchActivitiesBydate();
    }
  }, [dateId, update]);

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
            Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de atividades{' '}
          </h3>
        </NoPayment>
      </Page>
    );
  }

  return (
    <Page>
      <div>
        <h1> Escolha de atividades </h1>
      </div>
      {activitiesData.isRemote === true && (
        <NoPayment>
          <h3>
            Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de atividades //{' '}
          </h3>
        </NoPayment>
      )}
      {activitiesData.isRemote === false && (
        <div>
          <h2> Primeiro, filtre pelo dia do evento: </h2>
          <DataFilter>
            {activitiesData.dates.map((dateActivity) => (
              <DateActivity
                key={dateActivity.id}
                dateActivity={dateActivity}
                dateId={dateId}
                setDateId={setDateId}
                setShowActivities={setShowActivities}
                setLoading={setLoading}
              />
            ))}
          </DataFilter>
          {showActivities && (
            <ActivitiesContainer loading={loading} activities={activities} update={update} setUpdate={setUpdate} />
          )}
        </div>
      )}
    </Page>
  );
}
