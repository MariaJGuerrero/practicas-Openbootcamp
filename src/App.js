import './App.css';
import DataComponent from './exercise-1/data-componentA';
import Clock1 from './exercise-2/class-component';
import Clock2 from './exercise-2/function-component';
import ViewContactsList from './exercise-3/view-contacts-list';

function App() {
  return (
    <div className="App">
      <DataComponent />
      <Clock1 />
      <Clock2 />
      <ViewContactsList />
    </div>
  );
}

export default App;
