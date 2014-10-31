/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTopBar = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    var uf          = this.context.flocks_updater.set,
        showdone    = this.props.showdone,
        showdeleted = this.props.showdeleted,

        toggleShowDeleted = function() {
          uf( ['config', 'showdeleted'], !showdeleted );
        },

        toggleShowDone = function() {
          uf( ['config', 'showdone'], !showdone );
        };

    return (
      <div id="topbar">
        <a target="_blank" href="https://github.com/StoneCypher/flocks-mini-todo" className="logo">Flocks Mini-Todo</a>
        <fmtCheckLabel checked={this.props.showdone} label="Show completed" changeHandler={toggleShowDone} />
        <fmtCheckLabel checked={this.props.showdeleted} label="Show deleted" changeHandler={toggleShowDeleted} />
        { this.props.showdeleted?
          <button id="emptyTrash">Empty Trash</button>
          : ''
        }
      </div>
    );

  }

});
