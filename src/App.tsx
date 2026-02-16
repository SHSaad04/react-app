import "./App.css";
import "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
let items = [
  "Dheri",
  "Lalkurti",
  "Bakra Mandi",
  "Tench Bhatta",
  "Dhok Sayedan",
  "Blue Area",
];
const handleSelectItem = (item: string) => {
  console.log(item);
};
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello Saad</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
