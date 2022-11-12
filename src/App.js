import './App.css';
import PrincipalComponent from './exercise-4/principal-component';
import DataComponent from './exercise-1/data-componentA';
import Clock1 from './exercise-2/class-component';
import Clock2 from './exercise-2/function-component';
import ViewContactsList from './exercise-3/view-contacts-list';
import IndexChuck from './exercise-5/index-chuck';
import TodosContainer from './exercise-6/components/containers/todo-container';
import TodoFormContainer from './exercise-6/components/containers/todo-form-container';
import FilterOptions from './exercise-6/components/pure/filtersOptions';

function App() {
  return (
    <div className="App">
     {/* <DataComponent />
      <Clock1 />
      <Clock2 />
      <PrincipalComponent />
      <IndexChuck />
      <ViewContactsList />*/}
      <TodosContainer />
      <TodoFormContainer />
      <FilterOptions />
    </div>
  );
}

export default App;
