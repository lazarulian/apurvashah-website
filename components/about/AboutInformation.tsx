import React from 'react'
import AboutCard from './AboutCard';


function AboutInformation() {
    return (
      <div className='mx-auto md:w-2/3'>
        <div className='text-left'>
          <p className=''>
            Hi everyone, I'm Apurva. I'm
            currently studying in Los Angeles, CA. In my free time, I enjoy backpacking, trying new foods, 
            watching football, and reading new books.
            <br/>
            <br/>
            Some things that I am really passionate about are vegetarianism, improving my community, and social reform. If you are interested in talking with me about any of that or just want to grab a coffee, please reach out to me.
            I would love to get to know you 😁
            <br />
            <br />
          </p>
          <div className='flex flex-wrap md:flex-row flex-col items-center justify-center'>
            <AboutCard
            title="CS @ UCLA"
            img_url="https://pyxis.nymag.com/v1/imgs/7a6/825/edd93dff41c44f61a2452a119f29fedee2-ucla-.jpg" 
            text="I'm currently a Junior at UCLA studying Cognitive Science and Computer Science."/>
            <AboutCard
            title="Interning at Tanium"
            img_url="https://s.hdnux.com/photos/01/21/11/14/21271334/13/1200x0.jpg" 
            text="As of Summer 2023, I am currently working as a Software Engineer Intern on Tanium's Patch Team"/>
          </div>
        </div>
      </div>
    );
}

export default AboutInformation
