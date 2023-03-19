import Hall from './Hall';
import { ActiviesDashBoard } from './style';

export default function ActivitiesContainer({ loading, activities }) {
  if (loading) {
    return <ActiviesDashBoard>Loading</ActiviesDashBoard>;
  }
  if (!activities) {
    return <ActiviesDashBoard>Error..</ActiviesDashBoard>;
  }

  return (
    <ActiviesDashBoard>
      {activities.map((hall) => (
        <Hall key={hall.id} hall={hall} />
      ))}
    </ActiviesDashBoard>
  );
}
