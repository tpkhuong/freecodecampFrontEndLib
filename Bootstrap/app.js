/*** 
 * const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput = "",
      toDoList = []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(','); <=== spliting the text of the textarea in to an array. saving that array to itemsArray
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(function printToDos(eachItem){
      
    }); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
 * 
 * 
 * ***/

const items = this.state.toDoList.map(function listOfToDos(eachItem) {
  /*** we want to render an <li> for each item enter in the text area
   * eachItem will be a string that we want to render as an <li>
   * ***/
  return <li>{eachItem}</li>;
});

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function uniqueNumber() {
  return Math.random() * 10;
}

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(function liWithUniqueId(
    eachitem
  ) {
    return <li key={uniqueNumber()}>{eachItem}</li>;
  }); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

/***
 *
 * Second Challenge
 *
 * ***/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }
  render() {
    const usersOnline = this.state.users.filter(function filterOnline(
      eachItem
    ) {
      return eachItem.online === true;
    }); // Change this line
    const renderOnline = null; // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

var state = {
  users: [
    {
      username: "Jeff",
      online: true,
    },
    {
      username: "Alan",
      online: false,
    },
    {
      username: "Mary",
      online: true,
    },
    {
      username: "Jim",
      online: false,
    },
    {
      username: "Sara",
      online: true,
    },
    {
      username: "Laura",
      online: true,
    },
  ],
};

const usersOnline = state.users
  .filter(function filterOnline(eachItem) {
    return eachItem.online === true;
  })
  .map(function makeLi(eachValue) {
    console.log(eachValue.username);
    return {
      key: uniqueNumber(),
      username: eachValue.username,
    };
  }); // Change this line
