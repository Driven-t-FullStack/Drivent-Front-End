import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function ActivityDate({ dateActivity, dateId, setDateId, setShowActivities, setLoading }) {
  function formatDate() {
    const formattedDate = dayjs(dateActivity.date).locale('pt-br').format('dddd, DD/MM').replace('-feira', '');

    return formattedDate;
  }

  function handleFilterByDate(id) {
    if (id === dateId) {
      setDateId(null);
      setShowActivities(false);
      setLoading(false);
    } else {
      setDateId(id);
      setShowActivities(true);
      setLoading(true);
    }
  }

  return (
    <div
      style={{ background: dateId === dateActivity.id ? '#fed37d' : '' }}
      onClick={() => handleFilterByDate(dateActivity.id)}
    >
      <p> {formatDate()} </p>
    </div>
  );
}
