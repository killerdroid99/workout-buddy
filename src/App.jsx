import Navbar from "../components/Navbar"
import WorkoutForm from "../components/WorkoutForm"
import Workouts from "../components/Workouts"

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Workouts />
      <WorkoutForm />
    </div>
  )
}

export default App
