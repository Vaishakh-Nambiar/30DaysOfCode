# States
- Dynamic information is information that can change.
- There are `two ways` for a component to get dynamic information: `props and state`.
  
`Note:` Besides props and state, every value used in a component should always stay exactly the same.

## Setting and Accessing state
- Unlike `prop`, `states aren't passed` from outside to a component.
- each component has its own state and it is declared inside a constructor using `this.state`.
- `states` are always defined as an `object`
  
- like props, `states` are also accessed by using `this.state.stateName`

```jsx
class MyComp extends React.Component {
    constructor(props){
        super(props)
        this.state = {myState : 'good'}
    }

    render(){
        return <h1> I am feeling {this.state.myState}
    }
}
```

## Updating states - `this.setState`
- A component can also change it's state by using `this.setState` 
- Syntax: `this.setState(object, callBack)`
  - CallBack isnt mostly used

```jsx
// All are in the same component

//In Constructor
 this.state = {
      mood:   'great',
      hungry: false
    };
---------------

//Maybe in some other function but in the same component
this.setState({hungry : true})

---------------

// the actual change
this.state = {
      mood:   'great',
      hungry: true
    };
```
- just the part of object which is mentioned in the `this.setState` is affected and rest is merged

- We could call `this.setState` fom other functions too
```jsx
class MyComponent extends React.Component{
  constructor (props){
    super(props)
    this.state = {mood : 'good'}
    this.changing = this.changing.bind(this)
    // Now why did we use bind(this)????
  }

  changing(){
    this.setState({mood : 'bad'})
  }
}
```
`Note:` Check out the <a href="notes/bind.md">bind(this)</a> here

Example :

```jsx
import React from 'react';
import ReactDOM from 'react-dom'

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {

  constructor(props){
    super(props)
    this.state = {color:green}

    this.changeColor = this.changeColor.bind(this);
    // since we used `this` in method
  }

  changeColor(){
  this.setState(
    {
      color: this.state.color == green ? yellow : green
    }
  )  
  }

  render() {
    return (
      <div style = {
        {
          background: this.state.color
        }
      }>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))
``` 

`Note:`
Any time that you call `this.setState()`, this.setState() `AUTOMATICALLY calls .render()` as soon as the state has changed.

Think of this.setState() as actually being two things: this.setState(), immediately followed by .render().

- That is why `you can’t call this.setState() from inside of the .render() method!`.
- this.setState() automatically calls .render(). `If .render() calls this.setState(), then an infinite loop is created.`

### Setting Multiple States
Yes , we can set multiple properties using `this.setState`

```jsx
/* Given this state */
this.state = {
  key1: value1,
  key2: value2,
  key3: value3
}

/* We could use code like the following to update specific properties */
this.setState({ key1: newValue1, key3: newValue3 });
```

# Props vs State
<img src="capture.jpg">

# Using States correctly
3 important things to keep in mind

### Don not update the state directly
this is wrong
```jsx
this.state.smstate = smvalue
```
instead use `setState()`
```jsx
this.setState({smstate = smvalue})
```
`Note:` The only place where you can assign `this.state` is the `constructor`.

### State update maybe Asynchronous!
- Do not depend on the previous values of state because `this.state` and `this.props` may be `update asynchronously`
  
- React may `batch multiple setState()` calls into a `single update` for performance.

```jsx
// this is wrong
this.setState({
  counter : this.state.counter + this.props.increment
})
```
- For this we need to use a different version of setState

```jsx
this.setState((state,props)=> 
  ({
    counter : this.state.counter + this.props.increment
  })
)

//OR
// just like a normal function

function fn (state , props){
  return {
    counter : state.counter + props.increment
  }
}
```

## State updates are merged
- React merges objects for perfomance when we use setState()

```jsx
constructor(props){
  super(props)
  this.state = {
    state1 : [],
    state2 : []
  }
}

//react merges these
```
But we can update them independently by using setState()

