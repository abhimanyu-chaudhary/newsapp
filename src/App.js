import './App.css';
import NewsDisplay from './NewsDisplay';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <SpeedInsights/>
      <NewsDisplay/>
    </div>
  );
}

export default App;
