import { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Window from '../components/window'
import ReactGA from 'react-ga'
import Team from '../components/team'

import API from '../api/team'

const initGA = () => {
  ReactGA.initialize('UA-96992953-1')
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      plantOne: false,
      plantTwo: false
    }
  }
  componentDidMount () {
    initGA()
    logPageView()
  }
  toggleOffice () {
    this.setState({
      plantOne: true,
      plantTwo: true
    })
  }
  audio (playing) {
    const audio = document.getElementById('Audio')
    playing ? audio.play() : audio.pause()
  }
  render () {
    const { data } = API
    const newArray = shuffle(data)
    console.info("%c We're using Next.js for this because we got bored", 'background: #021993; color: #fff')
    console.info("%c The code's up on our git: https://github.com/the-couch/couch-site", 'background: #021993; color: #fff')
    return (
      <Layout>
        <Header />
        <style jsx>{`
          .main {
            padding-top: 10px;
          }
          .contact {
            position: relative;
            width: 200px;
            height: 200px;
          }
          .contact__email {
            width: 28px;
          }
          .contact__rotate {
            width: 133px;
            animation: rotating 8s linear infinite;
            left: 30px;
            top: 36px;
            transform: translate(-50%, -50%);
          }
          @media (min-width: 45em) {
            .contact {
              position: fixed;
              width: 200px;
              height: 200px;
              right: 80px;
              top: 20px;
            }
            .contact__rotate {
              width: 165px;
              top: 20px;
              left: 20px;
            }
            .contact__email {
              width: 32px;
            }
          }
          .address {
            max-width: 70px;
          }
          .footer {
            padding-top: 40px;
            padding-bottom: 50px;
          }
          @media (min-width: 80em) {
            .footer {
              max-width: 800px;
              width: 100%;
            }
            .footer__wrapper {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
          @media (min-height: 900px) and (min-width: 700px) {
            .footer__wrapper {
              position: fixed;
              bottom: 40px;
              width: calc(100% - 160px);
            }
          }
          @keyframes rotating {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .period {
            max-width: 8px;
          }
          .period:hover {
            animation: rotating 0.5s linear infinite;
          }
          @media (min-width: 40em) {
            .period {
              max-width: 14px;
            }
          }
          @media (min-width: 60em) {
            .period {
              max-width: 18px;
            }
          }
          @media (min-width: 80em) {
            .period {
              max-width: 22px;
            }
          }
          `}</style>
        <div>
          {this.state.plantOne && (<Window close={() => this.setState({plantOne: false})}><img style={{width: '100%'}} src='/static/palm.png' /></Window>)}
          {this.state.plantTwo && (<Window close={() => this.setState({plantTwo: false})}><img style={{width: '100%'}} src='/static/paradise.png' /></Window>)}
          <div className='wrapper main'>
            <section className='content'>
              <h1 className='caps'>The Couch is a small brooklyn based digital studio that makes things for the internet
              <img onMouseOver={() => this.audio(true)} onMouseLeave={() => this.audio(false)} className='period' src='/static/CD.png' /></h1>
            </section>
            <audio id='Audio' src='/static/8_bit.mp3' />
            <section className=''>
              <p className='small'>We want to work with you.</p>
            </section>
            <section className='contact jcc aic f mha'>
              <a href='mailto:meetus@thecouch.nyc' className='abs z1 fill-a fit-a' />
              <img className='contact__rotate abs' src='/static/text.png' />
              <img className='contact__email' src='/static/Email.png' />
            </section>
          </div>
          <div className='footer__wrapper'>
            <div className='footer caps f fw jcs fill-x'>
              {newArray.map((person, i) => (
                <Team key={i} {...person} />
              ))}
            </div>
            <div className='address__info f aic jce fill-x'>
              <div>
                <p className='ar caps'>Available IRL @<br />87 Richardson St. Suite 6W<br />Brooklyn, NY 11211</p>
              </div>
              <div onClick={() => this.toggleOffice()}>
                <img className='address px1' src='/static/Address.png' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
