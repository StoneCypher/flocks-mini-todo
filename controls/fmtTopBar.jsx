/** @jsx React.DOM */
/* jshint node: true */

'use strict';

var fmtTopBar = React.createClass({

  mixins: [ window.flocksjs.member ],

  render: function() {

    console.log(this.fctx());

    var uf          = this.context.flocks_updater.set,
        showdone    = this.fctx().showdone,
        showdeleted = this.fctx().showdeleted,

        toggleShowDeleted = function() {
          uf('showdeleted', !showdeleted);
        },

        toggleShowDone = function() {
          uf('showdone', !showdone);
        };

    return (
      <div id="topbar">
        <a target="_blank" href="https://github.com/StoneCypher/flocks-mini-todo" className="logo">Flocks Mini-Todo</a>
        <fmtCheckLabel checked={showdone} label="Show completed" changeHandler={toggleShowDone} />
        <fmtCheckLabel checked={showdeleted} label="Show deleted" changeHandler={toggleShowDeleted} />
        { showdeleted? <button id="emptyTrash">Empty Trash</button> : '' }
      </div>
    );

  }

});
