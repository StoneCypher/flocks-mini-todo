/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtCheckLabel = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (
      <span><input type="checkbox" onChange={this.props.changeHandler} /> {this.props.label}</span>
    );
  }

});
