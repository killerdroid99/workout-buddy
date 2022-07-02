import { formatDistanceToNow } from "date-fns"

function Workout({ title, reps, load, time }) {
  return (
    <div className="workout">
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
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
      </svg>
    </div>
  )
}

export default Workout