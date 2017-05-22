import React, { Component, createElement } from 'react'
import ReactDOM, { render } from 'react-dom'
import createStyledElement from 'create-styled-element'

const { Div, Section, H1 } = createStyledElement

class App extends Component {
  render() {
    return (
      <Div>
        <Section css={{ padding: 32 }}>
          <H1 css={{ color: `rgba(0, 0, 0, 0.75)` }}>
            Title
          </H1>
        </Section>
        <Div css={{ backgroundColor: 'rebeccapurple', color: '#fff' }}>
          We have styled divs!
        </Div>
      </Div>
    )
  }
}

render(<App />, document.getElementById('app'))
