
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className='container'>
      <div className='card'>
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={45}
        hairColor="Black"
      />
      </div>
      <div className='card'>
      <PersonCard
        firstName="John"
        lastName="Smith"
        age={88}
        hairColor="Brown"
      />
      </div>
      <div className='card'>
      <PersonCard
        firstName="Millard"
        lastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      </div>
      <div className='card'>
      <PersonCard
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
      </div>
    </div>
  );
}

export default App;
