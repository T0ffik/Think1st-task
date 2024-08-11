import {
  TimeSlots,
  Textfield,
  CTA,
  DeteleIcon,
  RangeInput,
  Calendar,
} from "./components";
import "./input.css";

function App() {
  return (
    <div className="flex flex-col items-center h-[100vh]">
      <Textfield label="sasa" value="dsad" />
      <CTA>Send Application</CTA>
      <TimeSlots />
      <DeteleIcon />
      <RangeInput />
      <Calendar />
    </div>
  );
}

export default App;
