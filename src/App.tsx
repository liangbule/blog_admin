import "antd/dist/antd.css";
import "./App.css";
import { Button, DatePicker, version } from "antd";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </header>
    </div>
  );
}

export default App;
