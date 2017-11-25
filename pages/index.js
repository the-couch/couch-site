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
            padding-top: 50px;
          }
          .contact {
            padding-top: 40px;
          }
          .footer {
            padding-top: 40px;
          }
          `}</style>
        <div className='wrapper main'>
          <section className='content'>
            <p>We're a small digital studio based in Williamsburg, Brooklyn. We don't make furniture, we make websites (and apps and other things that live on the internet).</p>
            <p>That being said – we do think that websites are a lot like couches. You don't buy one everyday. So when you do, you're probably expecting it to last.</p>
          </section>
          <section className='contact'>
            <p>We want to work with you. Email <a href='mailto:meetus@thecouch.nyc'>meetus@thecouch.nyc</a> or call (347) 766–7033.</p>
          </section>
          <section className='footer'>
            <p className='small'><a href='http://districtdomain.com' target='_blank'>Kevin Green 🍝</a> - <a href='http://sam-faulkner.com' target='_blank'>Sam Faulkner 🔮</a> - <a href='http://zeuslives.com' target='_blank'>Costa Damaskos 🤔</a> - <a href='https://www.youtube.com/watch?v=Mw1tN-zfR9c'>Abby Muir 💀</a> - <a href='http://estrattonbailey.com/'>Eric Bailey 🍺</a></p>
          </section>
        </div>
      </Layout>
    )
  }
}
