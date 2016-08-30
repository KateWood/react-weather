var React = require('react')

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {location, temp} = this.props
//     return (
//       <p>It's {temp} in {location}.</p>
//     )
//   }
// })

// var WeatherMessage = (props) => {
//   var {location, temp} = props
//   return (
//     <p>It's {temp} in {location}.</p>
//   )
// }

// Object destructuring in the fucking args, WHAAAAAAAATTTT???!!!
var WeatherMessage = ({location, temp}) => {
  return (
    <p>It's {temp} in {location}.</p>
  )
}

module.exports = WeatherMessage
