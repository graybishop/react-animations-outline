import './App.css';
import FramerMotionExample from './components/FramerMotionExample.js';


function App() {

  return (
    <div className='bg-gray-600'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8 text-white' >
        <h1 className='text-3xl'>An Exploration of Framer Motion</h1>
        <div className='flex flex-col gap-2'>
          <p>
            Proudly proclaiming to be a motion library with 'production-ready declarative animations' resulting in 'less code' which makes your codebase 'easier to read and maintain' <span className='font-bold'>Framer Motion </span> is a library available for React that let's us design animations.
          </p>
          <h2 className='text-2xl'>
            Let's quickly explore their use of the word 'declarative'
          </h2>
          <p>
            Thru defining the endpoints of our animation (also known as 'variants' within Framer, and 'keyframes' in general animation). In other words, if we wanted to have a button that turns from blue to green, we would define a variant where the button is blue, and another when the button is green.
          </p>
          <div className='bg-red-300'>
            COOL EXAMPLE HERE WITH CODE NEXT TO IT?
          </div>
          <p>
            React follows the same language when describing it's features. They say, 'Declarative views make your code more predictable and easier to debug.' In practice, that means we build react components by telling the library what our components look like.

            We can boil their use of 'declarative' to mean this: 'Tell us what you want, not how you think it needs to happen.'
          </p>
        </div>
        <FramerMotionExample />
      </div>
    </div>
  );
}

export default App;
