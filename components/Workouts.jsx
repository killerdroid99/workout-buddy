import Workout from "./Workout"
import { useQuery } from 'react-query'
import { fetchWorkouts } from "../src/ReactQueryFuncs"

function Workouts() {
  const { data, isLoading, error } = useQuery('workouts', fetchWorkouts)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  else {
    return (
      <div className="workouts">
        {data.map((workout) => (
          <Workout
            title={workout.title}
            reps={workout.reps}
            load={workout.load}
            key={workout._id} />
        ))}
      </div>
    )
  }
}

export default Workouts