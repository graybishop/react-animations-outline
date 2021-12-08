import './App.css';
import CSSTransitionGroupExample from './components/CSSTransitionGroupExample.js';


function App() {

  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8' >
      <h1 className='text-3xl'>Testing happens below</h1>
      <CSSTransitionGroupExample/>
    </div>
  );
}

export default App;
