import React from 'react'

function AboutCard({img_url, text, title}) {
    return (
        <div
        className="block max-w-[22rem] h-96 rounded-lg bg-fun-pink-dark my-3 lg:mx-3 dark:bg-neutral-700">
          <img
            className="rounded-t-lg w-full h-56"
            src={img_url}
            alt="" 
            />
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-white">
            {text}
          </p>
        </div>
      </div>
    );
}

export default AboutCard