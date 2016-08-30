var React = require('react')
var {Link} = require('react-router')

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// })

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Centreville">Centreville, VA</Link>
        </li>
        <li>
          <Link to="/?location=New%20York">New York, NY</Link>
        </li>
        <li>
          <Link to="/?location=Los%20Angeles">Los Angeles, CA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples
