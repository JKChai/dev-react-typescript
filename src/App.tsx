import './App.css';
import { CustomButton } from './components/html/Button';
// import { Toast } from './components/templateliterals/Toast';
// import { RandomNumber } from './components/restriction/RandomNumber';
// import { List } from './components/generics/List';
// import { Counter } from './components/class/Counter';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Container } from './components/Container';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Heading } from './components/Heading';
// import { Status } from './components/Status';
// import { Oscar } from './components/Oscar';

// wrapping html elements
function App() {
    return(
        <div className='App'>
            <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
                Primary Button
            </CustomButton>
        </div>
    )
}

// // template literals & exclude
// function App() {
//     return <div className='App'>
//         <Toast position='center' />
//     </div>
// }

// // Restricting Props
// // making use of never type
// function App() {
//     return <div className='App'>
//         <RandomNumber value={10} isPositive/>
//     </div>
// }

// // Generic Props
// function App() {
//     return (
//     <div className='App'>
//         <List 
//             items={['Batman', 'Superman', 'Wonder Woman']}
//             onClick={(item) => console.log(item)}    
//         />
//         <List items={[1,2,3]} onClick={(item) => console.log(item)} />
//         <List 
//             items = {[
//                 {
//                     first: 'Bruce',
//                     last: 'Wayne',
//                 },
//                 {
//                     first: 'Clark',
//                     last: 'Kent',
//                 },
//                 {
//                     first: 'Princess',
//                     last: 'Diana',

//                 },
//             ]}
//             onClick={(item) => console.log(item)}
//         />
//     </div>
//     )
// };

// // Component props
// import './App.css'
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';

// function App() {
//     return (
//     <div className='App'>
//         <Private isLoggedIn={true} component={Profile} />
//     </div>
//     )
// };

// // Class components
// function App() {
//     return <div className='App'>
//         <Counter message='The count value is '/>
//     </div>
// }


// // useContext for event
// function App() {
//     return <div className='App'>
//         <UserContextProvider>
//             <User />
//         </UserContextProvider>
//     </div>
// }

// // useContext
// function App() {
//     return <div className='App'>
//         <ThemeContextProvider>
//             <Box />
//         </ThemeContextProvider>
//     </div>
// }

// style props
// function App() {
//     return <div className='App'>
//         <Container styles={{ border: '1px solid black', padding: '1rem' }} />
//     </div>
// }

// // Event props: Button & Events
// function App() {
//     return (
//         <div className='App'>
//             <Button
//                 handleClick={ (event, id) => {
//                     console.log('Button clicked', event, id)
//               }}
//             />
//             <Input value='' handleChange={(event) => console.log(event)} />
//         </div>
//     )
// }


// Advanced Props: Union, Child Components, optional props
// function App() {
//     return (
//         <div className='App'>
//             <Status status='loading' />
//             <Heading>Placeholder text</Heading>
//             <Oscar>
//                 <Heading>Oscar goes to Leornado Dicarpio!!</Heading>
//             </Oscar>
//             <Greet value='Vishwas' condition={ false } />
//         </div>
//     )
// }


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