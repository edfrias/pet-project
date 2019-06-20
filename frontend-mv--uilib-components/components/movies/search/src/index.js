import React, {Component} from 'react'
// import PropTypes from 'prop-types'

class MoviesSearch extends Component {
  render() {
    return (
      <div className="mv-MoviesSearch">
        <AtomInput />
      </div>
    )
  }
}

MoviesSearch.displayName = 'MoviesSearch'

// Remove these comments if you need
// MoviesSearch.contextTypes = {i18n: PropTypes.object}
// MoviesSearch.propTypes = {}
// MoviesSearch.defaultProps = {}

export default MoviesSearch
