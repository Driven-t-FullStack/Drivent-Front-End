import Activity from './Activity';

export default function Hall({ hall }) {
  return (
    <div>
      <h1> {hall.name} </h1>
      <div>
        {hall.Activity.map((activity) => (
          <Activity key={activity.id} activity={activity} capacity={hall.capacity} />
        ))}
      </div>
    </div>
  );
}
