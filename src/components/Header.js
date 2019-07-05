import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/lucianoAvatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi! I'm Luciano</strong>, a Web enthusiast and
            <br />
            &nbsp; passionate for new internet technologies &nbsp;
            <br />
            like{' '}
            <a href="https://en.wikipedia.org/wiki/Blockchain">
              Blockchain
            </a>{' '}
            and <br /> models of{' '}
            <a href="https://www.researchgate.net/publication/315919685_Blockchain_technology_and_decentralized_governance_Is_the_state_still_necessary">
              Decentralized Governance.
            </a>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
