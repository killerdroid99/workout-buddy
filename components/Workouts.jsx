import Workout from "./Workout"
import { useQuery } from 'react-query'
import { fetchWorkouts } from "../src/ReactQueryFuncs"
import { AnimatePresence } from "framer-motion"

function Workouts() {
  const { data, isLoading, error } = useQuery('workouts', fetchWorkouts)
  console.log(data);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>
  else {
    return (
      <div className="workouts">
        {data.map((workout) => (
          <AnimatePresence>
            <Workout
              key={workout._id}
              title={workout.title}
              reps={workout.reps}
              load={workout.load}
              time={workout.createdAt}
              uid={workout._id}
            />
          </AnimatePresence>
        ))}
        {data.length === 0 && <h2>No workouts 😢</h2>}
      </div>
    )
  }
}

export default Workouts