import React, { Component } from 'react';
import resumeData from '../resumeData';
import Modal from 'react-awesome-modal';

export default class Porfolio extends Component {

  state = {
    modal: {},
    visible: false
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    const { modal } = this.state
    return (<section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item, i) => {
                return (
                  <div key={i} className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => this.setState({ modal: item })} style={{ cursor: 'pointer' }}>
                        <img src={`${item.imgurl}`} className="item-img" alt="img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>  
          <Modal
            visible={modal && modal.name}
            width="400"
            height="300"
            effect="fadeInUp"
            onClickAway={() => this.closeModal()}
          >
            <div className="modal">
              <h1>{modal.title}</h1>
              <p>{modal.fullDescription}</p>
              <button onClick={() => this.closeModal()}>Close</button>
              <a href={modal.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
              <i></i>
            </div>

          </Modal>
    </section>);
  }
}
