class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value,
      message: this.state.messages,
    });
  }

  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          onChange={this.handleChange.bind(this)}
          value={this.state.input}
        />
        <button onClick={this.submitMessage.bind(this)}>Submit</button>

        <ul>
          {this.state.messages.map((eachValue, index) => {
            return <li key={index}>{eachValue}</li>;
          })}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = "ADD";

function addMessage(message) {
  return {
    type: ADD,
    message,
  };
}

function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

var store = Redux.createStore(messageReducer);

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages />
      </Provider>
    );
  }
  // Change code above this line
}

const state = [];

// Change code below this line

function mapStateToProps(state) {
  return {
    messages: state,
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: (message) => {
      return dispatch(addMessage(message));
    },
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage));
    },
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:

var Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: "",
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// Change code above this line

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line

/*** second go at redux ***/

const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

var store = Redux.createStore(reducer);

const store = Redux.createStore((state = 5) => state);

// Change code below this line

var currentState = store.getState();

var action = {
  type: "LOGIN",
};

/*** action creator is a JS functions that returns an action. action is an JS obj with a type of that action ***/

function actionCreator(action) {
  return action;
}

const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:

store.dispatch(loginAction());

/*** reducer let the Redux store know how to respond to the actionCreators and action object. ***/

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type == "LOGIN") return { login: true };
  return state;
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case "LOGIN":
      return { authenticated: true };
    case "LOGOUT":
      return { authenticated: false };
    default:
      return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

const LOGIN = "LOGIN";

const LOGOUT = "LOGOUT";

function incrementCount(countVar) {
  return (count += 1);
}

store.subscribe(incrementCount);

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here

  handleChange(event) {
    this.setState({
      input: event.target.value,
      messages: this.state.messages,
    });
  }

  submitMessage() {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <button onClick={this.submitMessage}></button>
        <ul>
          {this.state.messages.map(function (eachValue, index) {
            return <li key={index}>eachValue</li>;
          })}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

const ADD = {
  type: "ADD",
};

function addMessage(message) {
  return {
    type: ADD,
    message,
  };
}

function messageReducers(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    <Provider store={store}>
      <DisplayMessages />
    </Provider>;
  }
  // Change code above this line
}

const state = [];

// Change code below this line

function mapStateToProps(state) {
  return {
    messages: state,
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line

function mapDispatchToProps(dispatch) {
  return {
    submitMessage: function (message) {
      return dispatch(addMessage(message));
    },
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage));
    },
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.props.submitMessage(this.state.input);
    this.setState((state) => ({
      input: "",
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// Change code above this line

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.input.value,
      messages: this.state.messages,
    });
  }
  submitMessage(event) {
    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}></button>
        <ul>
          {this.state.messages.map(function renderLi(eachElement, index) {
            return <li key={index}>eachElement</li>;
          })}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

const addMessage = function formMessage(message) {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = function ourReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

// Use ES6 default paramter to give the 'previousState' parameter an initial value.
const messageReducer = (previousState = [], action) => {
  // Use switch statement to lay out the reducer logic in response to different action type
  switch (action.type) {
    case ADD:
      // Use ES6 spread operator to return a new array where the new message is added to previousState
      return [...previousState, action.message];

    default:
      // A default case to fall back on in case if the update to Redux store is not for this specific state.
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    <Provider store={store}>
      <DisplayMessages />
    </Provider>;
  }
  // Change code above this line
}

const state = [];

// Change code below this line

function mapStateToProps(state) {
  return {
    messages: state,
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

// Change code below this line

function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: (message) => {
      return dispatch(addMessage(message));
    },
  };
}

const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

const connect = ReactRedux.connect;
// Change code below this line

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: "",
        messages: state.messages.concat(currentMessage),
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
      dispatch(addMessage(newMessage));
    },
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Define the Container component here:

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);
class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Complete the return statement:
    <Provider store={store}>
      <Container />
    </Provider>;
    return null;
  }
}

// Redux:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  submitMessage() {
    this.props.submitMessage(this.state.input);
    this.setState((state) => ({
      input: "",
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}
// Change code above this line

const mapStateToProps = (state) => {
  return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    },
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
