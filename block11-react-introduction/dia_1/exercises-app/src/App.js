import './App.css';

const appointments = ['boxe', 'trybe', 'lionbridge', 'test']


const Task = (value) => { // referencia: https://stackoverflow.com/questions/41374572/how-to-render-an-array-of-objects-in-react
    const listItems = appointments.map((appointment) => <li> {appointment} </li>);
  return ( // a funçao map vai retorna uma nova array mas no formato de lista pela sintax JSX
        <div>{listItems}</div>
  )
}

function App() {
  return Task(appointments);
}

export default App;

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// exercicios react:
// https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element