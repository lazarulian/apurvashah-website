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
            title="Cog Sci @ UCLA"
            img_url="https://pyxis.nymag.com/v1/imgs/7a6/825/edd93dff41c44f61a2452a119f29fedee2-ucla-.jpg" 
            text="I'm currently a Junior at UCLA studying Cognitive Science Specializing in Computer Science."/>
            <AboutCard
            title="Studying Abroad"
            img_url="https://www.douglasandgordon.com/media/1903330/aerial-view-ancient-architecture-672532.jpg?crop=0,0.0963568052496329,0,0.15584583792217319&cropmode=percentage&width=1024&height=512&rnd=132506791710000000" 
            text="As of Spring 2023, I am currently studying abroad in the cities of London & Paris."/>
          </div>
        </div>
      </div>
    );
}

export default AboutInformation
