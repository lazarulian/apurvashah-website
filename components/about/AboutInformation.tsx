import React from 'react'


function AboutInformation() {
    return (
      <div className='mx-auto md:w-2/3'>
        <div className='text-left'>
          <p className=''>
            Hi everyone, I'm Apurva. I'm
            currently a Junior at UCLA studying Cognitive Science Specializing
            in Computer Science. In my free time, I enjoy backpacking, trying new foods, 
            watching football, and reading new books.
            <br/>
            <br/>
            Some things that I am really passionate about are vegetarianism, improving my community, and social reform. If you are interested in talking with me about any of that or just want to grab a coffee, please reach out to me.
            I would love to get to know you 😁
            <br />
            <br />
            Some quick facts about me:
            <ul className='list-disc pl-5'>
              <li>My favorite book is <span className='italic'>When Breath Becomes Air</span></li>
              <li>My favorite food is Chipotle</li>
              <li>I budget in my freetime with YNAB</li>
              <li>I used to work at Duffl, a startup at UCLA</li>
            </ul>
          </p>
        </div>
      </div>
    );
}

export default AboutInformation
