import { CTA } from "./components/atoms/CTA/CTA";
import { Textfield } from "./components/atoms/Textfield/Textfield";
import "./input.css";

function App() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Textfield label="sasa" value="dsad" />
      <CTA>Send Application</CTA>
    </div>
  );
}

export default App;
