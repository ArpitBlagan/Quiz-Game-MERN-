import React from 'react'

const Text = () => {
  return (
    <div className='grid  grid-cols-1 gap-2 m-5 mt-10 mb-10'>
        <div className='font-mono font-extralight text-gray-800  text-2xl  text-center bg-white rounded-md shadow-md'>
          <div className='text-center text-gray-900 font-semibold'>About the app</div>
          <p className='break-words m-2'>* You can register or login yourself as a admin or as a student by clicking on <span className='underline font-light'>register/login</span> button on navbar. After that</p>
          <p className='break-words m-2' >* Students <span className='underline font-light'>cannot upload</span> questions.</p>
          <p className='break-words m-2'>* If you register yourself <span className='underline font-light'>as a admin</span> you can <span className='underline font-light'>upload</span> questions.</p>
          <p className='break-words m-2'>* You see the scoreboard by clicking on the <span className='underline font-light'>Scoreboard button</span> on navbar.</p>
          <p className='break-words m-2'>* For giving the quiz select the language and difficulty than start the quiz by <span className='underline font-light'>clicking on start button</span>.</p>
          <p className='break-words m-2'>* There are total 5 level of difficulty for every language and <span className='underline font-light'>best score for each difficulty</span> is counted and added to your total score.</p>
          <p className='break-words m-2'>* There will be <span className='underline font-light'> 5 question</span> in each difficulty language.</p>
          <p className='break-words m-2'>* As a admin you can see the questions that you have <span className='underline font-light'> uploaded and edit them.</span></p>
          <p className='break-words m-2'>* You can see your progress by clicking on <span className='underline font-light'>My progress in navbar.</span></p>
        </div>
    </div>
  )
}

export default Text