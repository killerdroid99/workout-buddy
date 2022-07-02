import { useState } from "react"
import { useMutation } from "react-query"
import { queryClient } from "../src/main"
import { addWorkout } from "../src/ReactQueryFuncs"

function WorkoutForm() {
  const [newWorkout, setNewWorkout] = useState({
    title: "",
    reps: 0,
    load: 0
  })

  const mutation = useMutation(addWorkout, {
    onSuccess: () => queryClient.invalidateQueries('workouts')
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newWorkout.reps >= 0 && newWorkout.load >= 0) {
      mutation.mutate(newWorkout)
    }
  }

  return (
    <form className="workoutForm" onSubmit={handleSubmit}>
      <div className="inputgroup">
        <label htmlFor="title">Title: </label>
        <input id="title" type="text" value={newWorkout.title} onChange={(e) => setNewWorkout({ ...newWorkout, title: e.target.value })} maxLength={25} />
      </div>
      <div className="inputgroup">
        <label htmlFor="reps">Reps: </label>
        <input id="reps" type="number" value={newWorkout.reps} onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })} />
      </div>
      <div className="inputgroup">
        <label htmlFor="load">Load: </label>
        <input id="load" type="number" value={newWorkout.load} onChange={(e) => setNewWorkout({ ...newWorkout, load: e.target.value })} />
      </div>
      <button>Add workout</button>
      {newWorkout.reps < 0 && <small className="error">reps should not be negative</small>}
      {newWorkout.load < 0 && <small className="error">load should not be negative</small>}
      {newWorkout.title.length === 0 && <small className="error">title should not be empty</small>}
      {mutation.isLoading && newWorkout.title.length !== 0 && newWorkout.reps >= 0 && newWorkout.load >= 0 && <small className="loading">Adding new workout</small>}
    </form>
  )
}

export default WorkoutForm