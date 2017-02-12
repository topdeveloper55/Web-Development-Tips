import React from 'react';
import CodeMirror from 'react-codemirror';
const isBrowser = typeof window !== 'undefined';
isBrowser ? require('codemirror/mode/javascript/javascript') : undefined;


class CodeEditor extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      code: this.props.defaultCode,
      output: ""
    }
  }
  updateCode(e) {
    this.setState({
      code: e
    })
  }
  evalCode() {
    this.setState({
      output: (() => {return eval(this.state.code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""))})()
    })
  }
  render() {
    let options = {
      lineNumbers: true,
      mode: 'javascript'
    }
    return (
      <div>
      <CodeMirror width="100%" height="300px" value={this.state.code} onChange={this.updateCode.bind(this)} options={options}/>
      <button onClick={this.evalCode.bind(this)}>Run</button>
      <p style={{background: "#eee",border: "1px solid #aaa"}}><small style={{color: "red",fontSize: "10px"}}>Output</small><br/>{this.state.output}</p>
      </div>
    )
  }
}

export default CodeEditor;