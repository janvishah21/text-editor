import '../TextEditor.css';
import alignLeftLogo from '../assets/Icon-align-left.svg';
import alignRightLogo from '../assets/Icon feather-align-right.svg';
import alignCenterLogo from '../assets/Icon-align-center.svg';
import alignJustifyLogo from '../assets/Icon-align-justify.svg';

function TextEditor() {
    return (
        <div className="container">
            <div className="action-btns">
                <button onClick={() => window.execCmd('bold')} className="action-btn">
                    <i className="fa fa-bold"></i>
                </button>
                <button onClick={() => window.execCmd('italic')} className="action-btn">
                    <i className="fa fa-italic"></i>
                </button>
                <button onClick={() => window.execCmd('underline')} className="action-btn">
                    <i className="fa fa-underline"></i>
                </button>
                <button onClick={() => window.execCmd('strikeThrough')} className="action-btn">
                    <i className="fa fa-strikethrough"></i>
                </button>
                <span className="action-btn">
                    <select className="select-option" onChange={(e) => window.execCommandWithArg('fontName', e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                        <option value="Courier">Courier</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                </span>
                <span className="action-btn">
                    <select className="select-option" defaultValue="4" onChange={(e) => window.execCommandWithArg('fontSize', e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </span>
                <span className="action-btn">
                    <label htmlFor="font-color">Font Color : </label>
                    <input type="color" id="font-color" onChange={(e) => window.execCommandWithArg('foreColor', e.target.value)} />
                </span>
                <span className="action-btn">
                    <label htmlFor="highlight-color">Highlight Color : </label>
                    <input type="color" id="highlight-color" onChange={(e) => window.execCommandWithArg('hiliteColor', e.target.value)} />
                </span>
                <button onClick={() => window.execCmd('justifyLeft')} className="action-btn">
                    <img src={alignLeftLogo} alt="alignLeftLogo"/>
                </button>
                <button onClick={() => window.execCmd('justifyCenter')} className="action-btn">
                    <img src={alignCenterLogo} alt="alignCenterLogo"/>
                </button>
                <button onClick={() => window.execCmd('justifyRight')} className="action-btn">
                    <img src={alignRightLogo} alt="alignRightLogo"/>
                </button>
                <button onClick={() => window.execCmd('justifyFull')} className="action-btn">
                    <img src={alignJustifyLogo} alt="alignJustifyLogo"/>
                </button>
                <br></br>
                <button onClick={() => window.execCmd('insertUnorderedList')} className="action-btn">
                    <i className="fa fa-list-ul"></i>
                </button>
                <button onClick={() => window.execCmd('insertOrderedList')} className="action-btn">
                    <i className="fa fa-list-ol"></i>
                </button>
                <button onClick={() => window.execCmd('cut')} className="action-btn">
                    <i className="fa fa-cut"></i>
                </button>
                <button onClick={() => window.execCmd('copy')} className="action-btn">
                    <i className="fa fa-copy"></i>
                </button>
                <button onClick={() => window.execCmd('indent')} className="action-btn">
                    <i className="fa fa-indent"></i>
                </button>
                <button onClick={() => window.execCmd('outdent')} className="action-btn">
                    <i className="fa fa-outdent"></i>
                </button>
                <button onClick={() => window.execCmd('undo')} className="action-btn">
                    <i className="fa fa-undo"></i>
                </button>
                <button onClick={() => window.execCmd('redo')} className="action-btn">
                    <i className="fa fa-redo"></i>
                </button>
                <button onClick={() => window.toggleEdit()} className="action-btn">
                    <i className="fa fa-edit"></i>
                </button>
            </div>
            <iframe 
                id="editor"
                title="text editor"
                name="richTextField"
                allow="fullscreen"></iframe>
        </div>
    )
}

export default TextEditor
