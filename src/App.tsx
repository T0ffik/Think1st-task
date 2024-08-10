import { TimeSlots, Textfield, CTA, DeteleIcon } from "./components";
import "./input.css";

function App() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Textfield label="sasa" value="dsad" />
      <CTA>Send Application</CTA>
      <TimeSlots />
      <DeteleIcon />
    </div>
  );
}

export default App;
