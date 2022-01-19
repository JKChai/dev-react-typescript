import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
    const fullname = {
        first: 'Mike',
        last: 'Lord'
    }

    const personList = [
        {
            first:'dear',
            last:'lies'
        },
        {
            first: 'hello',
            last: "world"
        },
        {
            first: "homie",
            last: 'god'
        }
    ]

  return (
    <div className="App">
        <Greet value="This is it!!" count={5} condition={false}/>
        <Person name={fullname}/>
        <PersonList names={personList}/>
    </div>
  );
}

export default App;
