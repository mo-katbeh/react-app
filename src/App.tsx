import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/icons/Like";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/form/Form";

import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import ProductList from "./ProductList";
import axios from "axios";

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
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    //immer
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {" "}
          {bug.title} {bug.fixed ? "Fixed" : "New"}{" "}
        </p>
      ))}

      {/* {drink.price} */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

function App4() {
  const [cartItem, setCartItem] = useState(["product1", "product2"]);
  return (
    <div>
      <NavBar countCartItem={cartItem.length}></NavBar>
      <Cart cartItem={cartItem} onClear={() => setCartItem([])}></Cart>
    </div>
  );
}
function ExerciseApp() {
  const [pizza, setPizza] = useState({
    name: "spicy",
    topping: ["mashrom"],
  });
  const handleClick = () => {
    setPizza({
      ...pizza,
      topping: [...pizza.topping, "peef"],
    });
  };
  const [cart, setCart] = useState({
    dicount: 0.1,
    items: [
      { id: 1, title: "p1", quantity: 1 },
      { id: 2, title: "p2", quantity: 1 },
    ],
  });
  const handleClick1 = () => {
    setCart({
      ...cart,
      items: {
        ...cart.items.map((item) =>
          item.id === 1 ? { ...item, quantity: 2 } : item
        ),
      },
    });
  };
  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>change name</button>
    </div>
  );
}
function App5() {
  return (
    <div>
      {" "}
      <ExpandableText>
        A navigation bar is a key part of any website or app. It helps users
        move easily between different sections, such as Home, About, Services,
        and Contact. Usually found at the top or side of the screen, the navbar
        can include links, buttons, a logo, and dropdown menus. On mobile
        devices, it often turns into a compact menu icon. A well-designed
        navigation bar improves user experience by making information easy to
        find. Developers often use HTML, CSS, and JavaScript or frameworks like
        React to build it. In mobile apps, libraries like React Navigation help
        create smooth and responsive navigation bars.
      </ExpandableText>{" "}
    </div>
  );
}

function App6() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "tttt", amount: 10, category: "Drinks" },
    { id: 2, description: "rrrr", amount: 10, category: "Drinks" },
    { id: 3, description: "fffff", amount: 10, category: "Drinks" },
    { id: 4, description: "tttt33", amount: 10, category: "Drinks" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpense([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
function App7() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HandMade">HandMade</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}
function App8() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  interface User {
    id: number;
    name: string;
  }
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
export default App8;
