import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    errorMessage: PropTypes.string
  }

  static defaultProps = {
    errorMessage: "Something wen't wrong"
  }

  state = { hasError: false }

  static getDerivedStateFromError(error) {
    // eslint-disable-next-line
    console.log('getDerivedStateFromError:', error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line
    console.log('componentDidCatch:', error, errorInfo)
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{this.props.errorMessage}</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
