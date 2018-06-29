import { Component } from 'react'
import ReactGA from 'react-ga'

export default class extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {
      icon,
      name,
      url
    } = this.props
    return (
      <div className='ppl'>
        <style jsx>{`
          .ppl {
            width: 50%;
            padding-bottom: 20px;
          }
          .ppl a:hover {
            text-decoration: underline;
          }
          .ppl img {
            max-width: 23px;
            padding-bottom: 0px;
          }
          .ppl__img {
            padding-left: 5px;
            min-height: 30px;
          }
          @media (min-width: 30em) {
            .ppl {
              width: 33%;
            }
          }
          @media (min-width: 50em) {
            .ppl {
              width: 20%;
            }
          }
          @media (min-width: 80em) {
            .ppl {
              padding-bottom: 0;
            }
          }
          `}</style>
        <div className='ppl__img'>
          <img src={`/static/${icon}`} />
        </div>
        <a href={url} target='_blank' onClick={() => {
          console.log('yo clicky?')
          ReactGA.event({
            category: 'Portfolio',
            action: `Client clicked ${name} portfolio`,
            label: 'Team Click'
          })
        }}>{name}</a>
      </div>
    )
  }
}
