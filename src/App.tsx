import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/icons/Like";

function App() {
  const items = ["Paris", "London", "Makeh", "Iraq"];
  function handleSelectItem(item: string): void {
    console.log(item);
  }
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />{" "}
    </div>
  );
}
function App1() {
  return (
    <div>
      <Alert>
        <strong>You're too late</strong> you will missed out your bus!
      </Alert>
    </div>
  );
}

function App2() {
  return (
    <div>
      <Button color="dark">
        {" "}
        Dark <span>Button</span>{" "}
      </Button>
    </div>
  );
}

function App3() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <strong>You're too late</strong> you will missed out your bus!
        </Alert>
      )}
      <Button color="dark" onClick={() => setAlertVisibility(true)}>
        {" "}
        Dark <span>Button</span>{" "}
      </Button>
    </div>
  );
}

function LikeApp() {
  const [likeActive, setLikeDisActive] = useState(false);
  return (
    <div>
      <Like onClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default LikeApp;
