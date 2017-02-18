import React from 'react';
import CodeMirror from 'react-codemirror';

const isBrowser = typeof window !== 'undefined';
isBrowser ? function(){
  require('codemirror/mode/javascript/javascript');
}() : undefined;

import _ from 'underscore';

class CodeEditor extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      code: this.props.children,
      output: "",
      theme: 'tomorrow-night-bright',
      error: ""
    };
  }
  updateCode(e) {
    this.setState({
      code: e
    });
  }
  toggleTheme() {
    let newTheme = this.state.theme == 'tomorrow-night-bright' ? 'default' : 'tomorrow-night-bright';
    this.setState({
      theme: newTheme
    });
  }
  evalCode() {
    let newOutput = "";
    let code = this.state.code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,"");
    try{
      newOutput = (() => {return eval(code)})();
    } catch(e) {
      newOutput = "";
    }
    let error = "";
    if(this.props.test) {
      let include = this.props.test.include;
      let notInclude = this.props.test.notInclude || [];
      let expectedOutput = this.props.test.output;
      include = include.map(item => code.indexOf(item).toString());
      notInclude = notInclude.map(item => code.indexOf(item).toString());
      
      if(include.indexOf("-1") != -1) {
        console.log("You did not use the necessary items in this exercise.");
        error = <div className="editorError">You did not use the necessary items in this exercise.</div>;
      } else if(notInclude.indexOf("-1") == -1) {
        console.log("You still have some of following keywords in your program: " + notInclude);
        error = <div className="editorError">You still have some of following keywords in your program: {notInclude}</div>;
      } else if(_.isEqual(newOutput,expectedOutput) === false) {
        console.log("Oops, it looks like your output does not match expected output.");
        error = <div className="editorError">Oops, it looks like your output does not match expected output.</div>;
      } else {
        error = <div className="editorSuccess">Good Job!</div>;
      }
    }
    this.setState({
      output: newOutput,
      error: error
    });
  }
  render() {
    let outputClass = 'editorOutput';
    let buttonsClass = 'editorButtons';
    if(this.state.theme == 'default'){
      outputClass = 'editorOutput lightEditorOutput';
      buttonsClass = 'editorButtons lightEditorButtons';
    }
    
    let options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: this.state.theme,
      scrollbarStyle: 'null',
      lineWrapping: true,
      lint: true,
      gutters: [
        'CodeMirror-lint-markers',
      ]
    };
    return (
      <div className="editorContainer">
      <div className={buttonsClass}>
        <button onClick={this.evalCode.bind(this)}>Run</button>
        <button onClick={this.toggleTheme.bind(this)}>Toggle Light/Dark</button>
        {this.state.error}
      </div>
      <CodeMirror ref="editor" className="editor" value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
      <div className={outputClass}>
        <small style={{color: "red",fontSize: "10px"}}>Output</small><br/>{JSON.stringify(this.state.output)}
      </div>
      </div>
    );
  }
}

export default CodeEditor;