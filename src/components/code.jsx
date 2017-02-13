import React from 'react';
import CodeMirror from 'react-codemirror';
const isBrowser = typeof window !== 'undefined';
isBrowser ? require('codemirror/mode/javascript/javascript') : undefined;


class CodeEditor extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      code: this.props.defaultCode,
      output: "",
      theme: 'tomorrow-night-bright'
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
    try{
      newOutput = (() => {return eval(this.state.code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""))})();
    } catch(e) {
      newOutput = "";
    }
    this.setState({
      output: newOutput 
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
      lineWrapping: true
    };
    return (
      <div className="editorContainer">
      <div className={buttonsClass}>
        <button onClick={this.evalCode.bind(this)}>Run</button>
        <button onClick={this.toggleTheme.bind(this)}>Toggle Light/Dark</button>
      </div>
      <CodeMirror ref="editor" className="editor" value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
      <div className={outputClass}>
        <small style={{color: "red",fontSize: "10px"}}>Output</small><br/>{this.state.output}
      </div>
      </div>
    );
  }
}

export default CodeEditor;