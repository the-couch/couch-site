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
          .contact__rotate {
            width: 133px;
            animation: rotating 8s linear infinite;
          }
          @media (min-width: 45em) {
            .contact {
              position: fixed;
              right: 20px;
              top: 0px;
            }
          }
          .contact__email {
            width: 23px;
          }
          .footer {
            padding-top: 40px;
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
        <div className='wrapper main'>
          <section className='content'>
            <h1 className='caps'>The Couch is a small brooklyn based digital studio that makes things for the internet.</h1>
          </section>
          <section className='pt2'>
            <p>We want to work with you.</p>
          </section>
          <section className='contact jcc aic f mha'>
            <a href='mailto:meetus@thecouch.nyc' className='abs z1 fill-a fit-a' />
            <img className='contact__rotate abs' src='/static/icon/text.png' />
            <img className='contact__email' src='/static/icon/Email.png' />
          </section>
          <section className='footer'>
            <p className='small'><a href='http://districtdomain.com' target='_blank'>Kevin Green 🍝</a> - <a href='http://sam-faulkner.com' target='_blank'>Sam Faulkner 🔮</a> - <a href='http://zeuslives.com' target='_blank'>Costa Damaskos 🤔</a> - <a href='https://www.youtube.com/watch?v=Mw1tN-zfR9c'>Abby Muir 💀</a> - <a href='http://estrattonbailey.com/'>Eric Bailey 🍺</a></p>
          </section>
        </div>
      </Layout>
    )
  }
}
