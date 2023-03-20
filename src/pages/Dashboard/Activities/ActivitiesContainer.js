import Hall from './Hall';
import { ActiviesDashBoard } from './style';

export default function ActivitiesContainer({ loading, activities, setUpdate, update }) {
  if (loading) {
    return <ActiviesDashBoard>Loading</ActiviesDashBoard>;
  }
  if (!activities) {
    return <ActiviesDashBoard>Error..</ActiviesDashBoard>;
  }
  
  return (
    <ActiviesDashBoard>
      {activities.map((hall) => (
        <Hall key={hall.id} hall={hall} update={update} setUpdate={setUpdate}/>
      ))}
    </ActiviesDashBoard>
  );
}
