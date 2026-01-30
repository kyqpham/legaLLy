import './App.css'

function App() {

  return (
    <div className="App">
      <h1 style={{ fontSize: "20px", color: "goldenrod", alignItems: "center", padding: "20px" }}>Welcome to LegaLLy</h1>
      <input style={{ padding: "20px", width: "100%", borderRadius: "20px", marginBottom: "20px" }} type="text" placeHolder="How can I help you . . ." />
      <button style={{ padding: "30px"}}> Analyze Case </button>
    </div>
  )
}
export default App
