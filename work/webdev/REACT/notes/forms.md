# Forms is React
- In React, form data is usually handled by the `Components`.
- In HTML, form data is usually handled by the `DOM`.


## Adding forms in react
```jsx
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
```


## Controlled Component
- React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a `“controlled component”`.

```jsx
import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
        // smart way to handle forms using a single `useState` by making it into objects
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
                // [event.target.name] - recognizing the object
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        </form>
    )
}

```

- Just remember to add the value of the inputs as the state used to identify it in React
..i.e value={statenameUsed}
```jsx
 <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
    />
```
This way it becomes a controlled component

## Textarea
- In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to mange the value of the textarea
- It's a self closing tag in React , unlike as in html
```html
HTML
<textarea>
  Content of the textarea.
</textarea>
```
```jsx
JSX
<textarea value={stateNameUsed} />
```

Eg: 
```jsx
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />)
```

## CheckBox

- The `htmlFor` property (used in react) sets or returns the value of the `for` attribute of a label.
- The `for` attribute specifies which form element a label is bound to.
```html
HTML

`for`
<input type="radio" id="isFriendly" >
<label for="isFriendly">Friendly ?</label>
```

```jsx
JSX

`htmlFor`
<input type="checkbox" id="isFriendly"/>
<label htmlFor="isFriendly">Friendly ?<label/>
```


- The value here would be `boolean`
- So instead of a `value` property , a `checked` property is used 
- When the `checked` property is `"not-empty"` , it is checked else unchecked
```jsx
// non-empty `checked`

 <input 
                type="checkbox" 
                id="isFriendly" 
                checked={"Hi"}
            />
            
//empty `checked`
 <input 
                type="checkbox" 
                id="isFriendly" 
                checked={""}
            />
    
```

## Radio buttons
- Here again , we use `values` and `checked` for radio buttons
- Names and values are added for controlled components

```jsx
<input type="radio"  
       id="part-time"
       
       name="employment"
       value="unemployed"
       // name and value added for controlled components
       checked={formData.employment === "part-time"}
       //check only if it is true
       onChange={handleChange}
/>
```

## Select and options
```jsx
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
```

---

### Signup Form
```jsx
import React from "react"

export default function App() {
    const [data, setData] = React.useState({
        email:"",
        pwd:"",
        cnpwd:"",
        checked:false
    })
    
    function handleChange(e){
        const {name,value,checked} = e.target
        
        setData( prev =>{
           return {
               ...prev,
               [name]: name == "checked" ? checked : value
           }            
        })
        
    }
    
    function checkData(){
                
        const {pwd,cnpwd,checked}=data
        let sp = "", nl=""
        pwd == cnpwd ? sp="Successfully signed up" : sp = "Passwords to not match" 
        console.log(sp) 
        
        
        pwd == cnpwd ? checked ? nl="Thanks for signing up for our newsletter!" : "" : "Sign Up first" 
        console.log(nl) 
    }
    
    function handleSubmit(event) {
        
        event.preventDefault()
        checkData()
                
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="pwd"
                    value={data.pwd}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="cnpwd"
                    value={data.cnpwd}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="checked"
                        value={data.checked}
                        onClick={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

```