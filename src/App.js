import './App.css';
import ButtonExample from './components/ButtonExample.js';
import FramerMotionExample from './components/FramerMotionExample.js';


function App() {

  return (
    <div className='bg-gray-600'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-4 py-8 text-white' >
        <h1 className='text-3xl'>An Exploration of Framer Motion</h1>
        <div className='flex flex-col gap-2'>
          <p>
            Proudly proclaiming to be a motion library with 'production-ready declarative animations' resulting in 'less code' which makes your codebase 'easier to read and maintain' <span className='font-bold'>Framer Motion </span>is a library available for React that let's us design animations. Skip the foreword, and get to to some code snippets(LINK TO A SECTION BELOW)
          </p>
          <h2 className='text-2xl text-center'>
            Let's quickly explore their use of the word 'declarative'
          </h2>
          <p>
            React follows the same language when describing it's features. They say, 'Declarative views make your code more predictable and easier to debug.' In practice, that means we build React components by telling the library what we want our components to look like, not how they should be built. 
          </p>
          <p>
            Following that line of thought, it's also typically good practice to avoid Refs, to avoid attempts to manipulate the DOM, and to avoid directly editing state. These are all practices that lead us to tell React how to do something, not what we want the result to be. 
          </p>
          <p>
            We can boil React's and Framer Motion's use of 'declarative' to mean: 'Tell us what you want, not how you think it needs to happen.'
          </p>
          <h2 className='text-2xl text-center'>
            Back to Framer Motion
          </h2>
          <p>
            Thru defining the endpoints (also known as 'variants' within Framer, and 'keyframes' in general animation), we can build our animations. We don't need to tell Framer how to transform a property, we just need to tell it the results. In other words, if we wanted to have a button that turns from blue to green, we would define a variant where the button is blue, and another when the button is green. Here's an example:
          </p>
          <div className='bg-red-900 flex flex-col items-center p-4'>
            <ButtonExample/>
          </div>
        </div>
        <FramerMotionExample />
      </div>
    </div>
  );
}

export default App;
