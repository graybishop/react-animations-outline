import './App.css';
import CSSTransitionGroupExample from './components/CSSTransitionGroupExample.js';
import FramerMotionExample from './components/FramerMotionExample.js';
import GSAPExample from './components/GSAPExample.js';


function App() {

  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8 bg-gray-600' >
      <h1 className='text-3xl'>Testing happens below</h1>
      <CSSTransitionGroupExample/>
      <GSAPExample/>
      <FramerMotionExample/>
    </div>
  );
}

export default App;
