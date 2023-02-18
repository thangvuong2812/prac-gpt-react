import React from 'react'
import './header.scss'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
function Header() {
  return (
        <div className='gpt3__header section__padding' id='home'>
          <div className="gpt3__header-content">
            <h1 className="gradient__text">
              Let's Build Something amazing with GPT-3 OpenAI
            </h1>

            <p>Yet bed for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing, Indulgence way everything joy alteration boi. Blah blah blah blah blah blah blah blah</p>

            <div className="gpt3__header-content__input">
              <input type="email" placeholder='Your Email Address' />
              <button type='button'>Get Started</button>
            </div>

            <div className="gpt3__header-content__people">
              <img src={people} alt="people" />
              <p>1,600 people requested access a visit 24 hours</p>
            </div>

            <div className="gpt__header-image">
              <img src={ai} alt="ai" />
            </div>
          </div>
        </div>
  )
}

export default Header