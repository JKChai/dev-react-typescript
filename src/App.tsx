import './App.css';
import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
import { Heading } from './components/Heading';
import { Status } from './components/Status';
import { Oscar } from './components/Oscar';


// Advanced Props: Union,
function App() {
    return (
        <div className='App'>
            <Status status='loading' />
            <Heading>Placeholder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Leornado Dicarpio!!</Heading>
            </Oscar>
            <Greet value='Vishwas' condition={ false } />
        </div>
    )
}


//// Greet | Person | PersonList comps examples
// function App() {
//     const fullname = {
//         first: 'Mike',
//         last: 'Lord'
//     }

//     const personList = [
//         {
//             first:'dear',
//             last:'lies'
//         },
//         {
//             first: 'hello',
//             last: "world"
//         },
//         {
//             first: "homie",
//             last: 'god'
//         }
//     ]

//   return (
//     <div className="App">
//         <Greet value="This is it!!" count={5} condition={false}/>
//         <Person name={fullname}/>
//         <PersonList names={personList}/>
//     </div>
//   );
// }

export default App;
