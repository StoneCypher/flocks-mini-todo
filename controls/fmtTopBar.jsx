/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTopBar = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf          = this.context.updater.set,
        done        = this.props.done,
        showdeleted = this.props.showdeleted,

        toggleShowDeleted = function() {
          uf( ['config', 'showdeleted'], !showdeleted )
        },

        toggleShowDone = function() {
          uf( ['config', 'showdone'], !showdone )
        };

    return (
      <div id="topbar">
        <a target="_blank" href="https://github.com/StoneCypher/flocks-mini-todo" className="logo">Flocks Mini-Todo</a>
        <fmtCheckLabel checked={this.props.showdeleted} label="Show deleted" changeHandler={toggleShowDeleted} />
      </div>
    );

  }

});
