/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'

const Heading = ({ children }) => <h3>{children}</h3>
Heading.propTypes = {
  children: PropTypes.node
}
const Span = ({ children }) => <span>{children}</span>
Span.propTypes = {
  children: PropTypes.node
}

const withFlexContainer = WrappedComponent => props => (
  <div style={{ display: 'flex' }}>
    <WrappedComponent {...props} />
  </div>
)

const withColoredText = WrappedComponent => {
  return class extends React.Component {
    state = {
      color: 'red'
    }

    changeColor = () => {
      this.setState({
        color: 'green'
      })
    }

    render() {
      return (
        <div style={{ color: this.state.color }}>
          <WrappedComponent {...this.props} />
          <button onClick={this.changeColor}>Change Color</button>
        </div>
      )
    }
  }
}

export const FlexHeading = withFlexContainer(Heading)
export const ColoredHeading = withColoredText(FlexHeading)
export const ColoredSpan = withColoredText(Span)
