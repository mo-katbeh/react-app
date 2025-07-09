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
function TestApp() {
  //update objects
  // const [drink, setDrink] = useState({
  //   type: "Tea",
  //   price: 9,
  // });
  //update nested objects
  const [customer, setCustomer] = useState({
    name: "moh",
    address: {
      city: "damas",
      zipCode: 123,
    },
  });
  // update array
  const [tags, setTags] = useState(["happy", "charful"]);
  // update array of objects
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // const newDrink = {
    //   type: drink.type,
    //   price: 5,
    // };
    // setDrink(newDrink);
    // setDrink({ ...drink, price: 10 });
    //  update nested objects
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 1234 },
    });
    // Array
    //add
    setTags([...tags, "boring"]);
    //remove
    setTags(tags.filter((tag) => tag !== "happy"));
    // update
    setTags(tags.map((tag) => (tag === "happy" ? "exciting" : tag)));
    // update array of objects
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {/* {drink.price} */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default TestApp;
