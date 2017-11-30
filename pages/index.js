import { Component } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
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

export default class extends Component {
  componentDidMount () {
    initGA()
    logPageView()
  }
  render () {
    const { data } = API
    console.log('stuff', data)
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
            max-width: 40px;
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
              {data.map((person) => (
                <Team {...person} />
              ))}
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
