import React from 'react';
import CodeMirror from 'react-codemirror';
import ReactGA from 'react-ga';

const isBrowser = typeof window !== 'undefined';
import _ from 'underscore';


class CodeEditor extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      javascript: this.props.children.javascript || "",
      html: this.props.children.html || "",
      css: this.props.children.css || "",
      tab: this.props.modes[0],
      theme: 'tomorrow-night-bright',
      error: ""
    };
    
    this.addModes();
  }
  addModes(){
    isBrowser ? (() => {
      require('codemirror/mode/javascript/javascript');
      require('codemirror/mode/htmlmixed/htmlmixed');
      require('codemirror/mode/css/css');
      require('codemirror/addon/lint/lint.js');
      require('codemirror/addon/lint/javascript-lint.js');
    })() : undefined;
  }
  updateCode(e) {
    if(this.state.tab == "javascript"){
      this.setState({
        javascript: e
      });
      
    } else if(this.state.tab == "css"){
      this.setState({
        css: e 
      });
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = e;
      $(this.refs.iframe).contents().find('head').html(style);
      $(this.refs.iframe).contents().find('body').html(this.state.html.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""));
    } else if(this.state.tab == "html"){
      this.setState({
        html: e
      });
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = this.state.css;
      $(this.refs.iframe).contents().find('head').html(style);
      $(this.refs.iframe).contents().find('body').html(e.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""));
    }
  }
  changeTab(tab, e){
    ReactGA.event({
      category: 'CodeEditors',
      action: tab,
      label: tab + " tab pressed"
    })
    this.setState({
      tab: tab
    });
  }
  toggleTheme() {
    let newTheme = this.state.theme == 'tomorrow-night-bright' ? 'default' : 'tomorrow-night-bright';
    this.setState({
      theme: newTheme
    });
    
    if(newTheme == 'default'){
      if(this.onlyJavaScript() === false){
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `*{color: black; background: #eee; font-family: monospace;}`;
        $(this.refs.iframe).contents().find('head').html(style);
      }
    } else {
      if(this.onlyJavaScript() === false){
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `*{color: white; background: #222; font-family: monospace;}`;
        $(this.refs.iframe).contents().find('head').html(style);
      }
    }
  }
  evalCode() {
    ReactGA.event({
      category: 'CodeEditors',
      action: 'run',
      label: 'run tab pressed'
    })
    let newOutput = "";
    let javascript = this.state.javascript.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,"");
    if(this.refs.iframe){
      let iframe = this.refs.iframe,
      iwindow = iframe.contentWindow;
      if(this.props.modes.length === 1 && this.props.modes[0] == "javascript"){
        iwindow.console = {
          log: function(input){
            console.log(input);
            if(typeof input == 'object'){
              iwindow.document.querySelector('body').innerHTML += `> ${JSON.stringify(input)}<br/>`;
            } else {
              iwindow.document.querySelector('body').innerHTML += `> ${input}<br/>`;
            }
            iwindow.scrollTo(0, document.body.scrollHeight);
          }
        };
        iwindow.code = {
          submit: function(input){
            iwindow.console.log(input);
            newOutput = input;
          }
        };
      }
      iwindow.eval(javascript);
    }
    
    //Testing code for challenges
    let error = "";
    if(this.props.test) {
      let include = this.props.test.include;
      let notInclude = this.props.test.notInclude || [];
      let expectedOutput = this.props.test.output;
      include = include.map(item => javascript.indexOf(item).toString());
      notInclude = notInclude.map(item => javascript.indexOf(item).toString());
      
      if(include.indexOf("-1") != -1) {
        console.log("You did not use the necessary items in this exercise.");
        error = <div className="editorError">You did not use the necessary items in this exercise.</div>;
      } else if(notInclude.indexOf("-1") == -1) {
        console.log("You still have some of following keywords in your program: " + notInclude);
        error = <div className="editorError">You still have some of following keywords in your program: {notInclude}</div>;
      } else if(_.isEqual(newOutput,expectedOutput) === false) {
        console.log(newOutput,expectedOutput)
        console.log("Oops, it looks like your output does not match expected output.");
        error = <div className="editorError">Oops, it looks like your output does not match expected output.</div>;
      } else {
        error = <div className="editorSuccess">Good Job!</div>;
      }
    }
    this.setState({
      error: error
    });
    
    //Update css and html on run.
    if(this.props.modes.indexOf('css') != -1){
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = this.state.css;
        $(this.refs.iframe).contents().find('head').html(style);
    }
    if(this.props.modes.indexOf('html') != -1){
      $(this.refs.iframe).contents().find('body').html(this.state.html.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$|(<script>)|eval|XMLHttpRequest|document\.write/gm,""));
    }
  }
  componentDidMount() {
    if(this.props.modes.indexOf("html") != -1){
      this.updateCode(this.state.html)
    }
    if(this.onlyJavaScript() === false){
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = `*{color: white; background: #222; font-family: monospace;}`;
      $(this.refs.iframe).contents().find('head').html(style);
    }
  }
  onlyJavaScript(){
    return this.props.modes.indexOf('javascript') != -1 && this.props.modes.length > 1;
  }
  render() {
    let buttonsClass = 'editorButtons';
    if(this.state.theme == 'default'){
      buttonsClass = 'editorButtons lightEditorButtons';
    }
    
    let languageButtons = [];
    this.props.modes.forEach(mode => {
      languageButtons.push(<button onClick={this.changeTab.bind(this, mode)}>{mode}</button>);
    });
    let mode = (this.state.tab == 'html') ? 'htmlmixed' : this.state.tab;
    let options = {
      lineNumbers: true,
      mode: mode,
      theme: this.state.theme,
      scrollbarStyle: 'null',
      lineWrapping: true,
      lint: true,
      gutters: [
        'CodeMirror-lint-markers',
      ]
    };
    
    let tabInput = this.state[this.state.tab];
    return (
      <div className="editorContainer">
      <div className={buttonsClass}>
        <button onClick={this.evalCode.bind(this)}>Run</button>
        <button onClick={this.toggleTheme.bind(this)}>Toggle Light/Dark</button>
        {languageButtons}
        {this.state.error}
      </div>
      <CodeMirror ref="editor" className="editor" value={tabInput} onChange={this.updateCode.bind(this)} options={options}/>
      <iframe id="htmlOutput" ref="iframe" className="editorOutput" frameBorder="0" sandbox='allow-same-origin allow-scripts'>
        
      </iframe>
      </div>
    );
  }
}

export default CodeEditor;