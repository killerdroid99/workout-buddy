import { formatDistanceToNow } from "date-fns"
import { motion } from "framer-motion"
import { useMutation } from "react-query"
import { queryClient } from "../src/main"
import { deleteWorkout } from "../src/ReactQueryFuncs"

function Workout({ title, reps, load, time, uid }) {
  const mutation = useMutation(deleteWorkout, {
    onSuccess: () => queryClient.invalidateQueries('workouts')
  })

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0, scaleX: 0 }}
      className="workout" >
      {mutation.isLoading && <div className="overlay">
        <p>Deleting</p>
      </div>}
      <span>
        <strong>Title:</strong> <p>{title}</p>
      </span>
      <span>
        <strong>Reps: </strong> <p>{reps}</p>
      </span>
      <span>
        <strong>Load: </strong> <p>{load}</p>
      </span>
      <span>
        <time>{formatDistanceToNow(new Date(time), { addSuffix: true })}...</time>
      </span>
      <svg viewBox="0 0 24 24" onClick={() => mutation.mutate(uid)}>
        <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
      </svg>
    </motion.div>
  )
}

export default Workout