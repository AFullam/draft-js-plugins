import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';

import 'draft-js-hashtag-plugin/lib/plugin.css';
import './editorStyles.css';
import './hashtagStyles.css';

const hashtagPlugin = createHashtagPlugin({ theme: { hashtag: 'hashtag' }});
const plugins = [hashtagPlugin];
const text = 'In this editor, we can even apply our own styles … #design #theme';

export default class CustomHashtagEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className="editor" onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}
