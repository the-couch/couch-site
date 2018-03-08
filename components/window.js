import { Component } from 'react'
import Draggable from 'react-draggable'



export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zIndex: 2
    }
  }
  render () {

    const height = window.innerHeight
    const width = window.innerWidth
    const top = (height / 2 * Math.random())
    const left = (width / 1.4 * Math.random())

    return (
      <Draggable
        grid={[10, 10]}>
        <div className='window' onClick={() => console.log('stuff')}d>
          <style jsx>{`
            .window {
              position: fixed;
              top: ${top}px;
              left: ${left}px;
              background-color: white;
              color: black;
              max-width: 400px;
              border: 1px solid #000;
              z-index: ${this.state.zIndex};
            }
            .window img {
              width: 100%;
            }
            .window__header {
              width: 100%;
              text-align: center;
              padding: 8px;
              cursor: move;
              border-bottom: 1px solid #000;
            }
            .window__header h5 {
              margin: 0;
              padding: 0;
              cursor:
            }
            .window__close {
              position: absolute;
              left: 4px;
              top: 4px;
              height: 24px;
              width: 24px;
              border: 1px solid #000;
            }
            .window__close:after {
              position: absolute;
              content: '';
              width: 100%;
              height: 1px;
              background-color: #000;
              left: 0;
              top: 50%;
              transform: rotate(45deg);
            }
            .window__close:before {
              position: absolute;
              content: '';
              width: 100%;
              height: 1px;
              background-color: #000;
              left: 0;
              top: 50%;
              transform: rotate(-45deg);
            }
          `}</style>
          <div className='window__header'>
            <div className='window__close' onClick={() => this.props.close()}></div>
            <h5>Window</h5>
          </div>
          {this.props.children}
        </div>
      </Draggable>
    )
  }
}