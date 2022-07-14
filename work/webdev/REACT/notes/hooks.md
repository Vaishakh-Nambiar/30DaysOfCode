# Hooks
Hooks allow function components to have access to state and other React features. Because of this, `class components` are generally no longer needed.
- In the latest versions of React, `function components` can do everything that class components can do. In most cases, however, function components offer a more elegant, concise way of creating React components. 

### Function Components and props :
- Even function components can recieve props
- We do not have to use `this` as in class components to access props here.
```jsx
function Smcomponent(props){
    return (
        <div>props.propName</div>
    );
}

ReactDOM.render(<Smcomponent propName = 'vaishakh'/>, document.getElementById('app'))
```

### Purpose of Hooks
`Hooks` simply allows us to use `function components` instead of `class components` for ease of use
- React Hooks, plainly put, are functions that let us manage the `internal state of components` and `handle post-rendering side effects` directly from our `function components`.
- Hooks do not completely replace class components and don’t work inside classes — they let us use fancy React features `without classes`.

# State Hooks
## useState()
- The React useState Hook allows us to `track state` in a function component.
```jsx
import React , {useState} from 'react';
```

- On being called, it returns an array with 2 values: 
  - `current state` - current value of state
  - `state setter` - function that can be called to update the value of this state
```jsx
const [toggle, setToggle] = useState();
// using deferencing as it returns an array with 2 values
```
useState() :
```jsx
import React, { useState } from "react";
 
function Toggle() {
  const [toggle, setToggle] = useState();
 
  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}
```
- Notice how the state setter function, setToggle(), is called by our onClick event listeners. To update the value of toggle and re-render this component with the new value, all we need to do is call the setToggle() function with the next state value as an argument.
- If using classes, we had to take care of binding , constructors ,etc... Hooks makes it easier as all these steps need not be taken care of!!

eg: Counter 

```jsx
import { useState } from "react";

function App() {
  var [count, setCount] = useState(0);
  //initial state = 0
    
  //setCount(value) sets the value of count as we cannot directly change the value of state but use setState()!!

  return (
    <>
      <button onClick={() => setCount(++count)}>+</button>

      <div>{count}</div>

      <button onClick={() => setCount(--count)}>-</button>
    </>
  );
}
```

### Set from Previous state:
- The next values of a state is most oftenly based on its previous value, so as a best practice it is recommended to use previous values of state while calculations
  
```jsx
import React,{useState} from 'react'
import ReactDOM from 'react-dom'

function App() {

var [count,setCount] = useState(0);


  return (
    <>

      <button onClick={() => setCount((prevCount)=> {
        prevCount = prevCount +1;
      })}>
      +
      </button>

      <div>{count}</div>

      <button onClick={() => setCount((prevCount)=> {
        prevCount = prevCount -1;
      })}>
      -
      </button>

    </>
  );
}

ReactDOM.render(<App/> , target);
```

### Arrays in State 
-  including `Array` as State:  

```jsx
import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
const [cart,setCart] = useState([]);
// setting cart as an empty array and a callback state setter function

  const addItem = (item) => {
    // returning item + pre elements of the array
    setCart((prev)=> {
      return [item, ...prev];
    });

  };

  const removeItem = (targetIndex) => {

    setCart((prev)=> {
        return prev.filter((t,index) => index !==(targetIndex))
    })

  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}

```

### Objects in States:
- including `Objects` as States:

```jsx
function Login() {
  // setting an empty object and statesetter callback
  const [formState, setFormState] = useState({});
 
  const handleChange = ({ target }) => {
    
    const { name, value } = target;

    // remember to always try changing values wrt previous values!!
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));

  };
 
  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}
```

---

## useEffect()
- Run when the DOM or component data is 
  - loaded/ mounted
  - when state changes

- The `useEffect()` function calls its first argument (the effect) after each time a component renders.
- it runs on each update
- - [] - dependencies : decides when and how many times to run
  - [count] : means that it should run only when count is updated
  - empty [] tells that it should run only once
  - else it goes on for an infinite loop 



 ```jsx
import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'

export default function Example{
  const [count,setCount]=useState(0)

  useEffect(()=>{
    document.title = `Clicked: ${count} times`
  },[])
  // [] - dependencies : decides when and how many times to run
  // empty [] tells that it should run only once
  // else it goes on for an infinite loop 

  const click = () =>{
    setCount((count)=>count+1)
  }

  return (
    <div>
      <button onClick={click}>
        Click me
      </button>
    </div>
  )
}

ReactDOM.render(</Example>,target)
```
Every time the button is clicked,DOM re-renders and `useEffect` senses it and changes the ui accordingly