/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTopBar = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    return (
      <div id="topbar">
        <a target="_blank" href="https://github.com/StoneCypher/flocks-mini-todo" className="logo">Flocks Mini-Todo</a>
      </div>
    );

  }

});
