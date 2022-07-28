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