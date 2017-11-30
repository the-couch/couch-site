import { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import ReactGA from 'react-ga'

const initGA = () => {
  ReactGA.initialize('UA-96992953-1')
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export default class extends Component {
  componentDidMount () {
    initGA()
    logPageView()
  }
  render () {
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
            padding-top: 40px;
          }
          .contact__email {
            width: 28px;
          }
          .contact__rotate {
            width: 133px;
            animation: rotating 8s linear infinite;
            left: 30px;
            top: 30%;
            transform: translate(-50%, -50%);
          }
          @media (min-width: 45em) {
            .contact {
              position: fixed;
              width: 200px;
              height: 200px;
              right: 80px;
              top: 0px;
            }
            .contact__rotate {
              width: 165px;
              top: 24%;
              left: 20px;
            }
            .contact__email {
              width: 32px;
            }
          }
          .address {
            max-width: 40px;
          }
          .footer {
            padding-top: 40px;
            padding-bottom: 50px;
          }
          .footer__ppl {
            width: 50%;
            padding-bottom: 20px;
          }
          .footer__img {
            min-height: 30px;
          }
          @media (min-width: 30em) {
            .footer__ppl {
              width: 33%;
            }
          }
          @media (min-width: 50em) {
            .footer__ppl {
              width: 20%;
            }
          }
          @media (min-width: 80em) {
            .footer {
              max-width: 800px;
              width: 100%;
            }
            .footer__ppl {
              padding-bottom: 0;
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
          .footer__ppl img {
            max-width: 23px;
            padding-bottom: 0px;
          }
          @keyframes rotating {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          `}</style>
        <div>
          <div className='wrapper main'>
            <section className='content'>
              <h1 className='caps'>The Couch is a small brooklyn based digital studio that makes things for the internet.</h1>
            </section>
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
              <div className='footer__ppl'>
                <div className='footer__img'>
                  <img src='/static/Kevin.png' />
                </div>
                <a href='http://districtdomain.com' target='_blank'>Kevin Green</a>
              </div>
              <div className='footer__ppl'>
                <div className='footer__img'>
                  <img src='/static/Sam.png' />
                </div>
                <a href='http://sam-faulkner.com' target='_blank'>Sam Faulkner</a>
              </div>
              <div className='footer__ppl'>
                <div className='footer__img'>
                  <img src='/static/costa.png' />
                </div>
                <a href='http://zeuslives.com' target='_blank'>Costa Damaskos</a>
              </div>
              <div className='footer__ppl'>
                <div className='footer__img'>
                  <img src='/static/abby.png' />
                </div>
                <a href='https://www.youtube.com/watch?v=Mw1tN-zfR9c' target='_blank'>Abby Muir</a>
              </div>
              <div className='footer__ppl'>
                <div className='footer__img'>
                  <img src='/static/eric.png' />
                </div>
                <a href='http://estrattonbailey.com/'>Eric Bailey</a>
              </div>
            </div>
            <div className='address__info f aic jce fill-x'>
              <div>
                <p className='ar caps'>Available IRL @<br />87 Richardson St. Suite 6W,<br />Brooklyn, NY 11211</p>
              </div>
              <div>
                <img className='address px1' src='/static/Address.png' />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
