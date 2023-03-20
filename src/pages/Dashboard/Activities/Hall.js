import Activity from './Activity';

export default function Hall({ hall, setUpdate, update }) {
  return (
    <div>
      <h1> {hall.name} </h1>
      <div>
        {hall.Activity.map((activity) => (
          <Activity key={activity.id} activity={activity} capacity={hall.capacity} update={update} setUpdate={setUpdate}/>
        ))}
      </div>
    </div>
  );
}
