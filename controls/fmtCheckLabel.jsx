/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtCheckLabel = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (
      <span className="fmtCheckLabel"><input type="checkbox" checked={this.props.checked} onChange={this.props.changeHandler} /> {this.props.label}</span>
    );
  }

});
