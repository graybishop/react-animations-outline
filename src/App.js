import './App.css';
import CSSTransitionGroupExample from './components/CSSTransitionGroupExample.js';
import GSAPExample from './components/GSAPExample.js';


function App() {

  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8' >
      <h1 className='text-3xl'>Testing happens below</h1>
      <CSSTransitionGroupExample/>
      <GSAPExample/>
    </div>
  );
}

export default App;
