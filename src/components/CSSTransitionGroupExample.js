import { CSSTransitionGroup } from 'react-transition-group'

const CSSTransitionGroupExample = () => {
  
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl'>Example using react-transition-group's CSSTransitionGroup</h2>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionLeaveTimeout={300}>
        <p className=''>Let's start with 1</p>
        <p className=''>Let's start with 2</p>
        <p className=''>Let's start with 3</p>
        <p className=''>Let's start with 4</p>
      </CSSTransitionGroup>
    </div>
  )
}

export default CSSTransitionGroupExample