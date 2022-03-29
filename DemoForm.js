import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            comment: '',
            language: 'vue',
            languages: [],
            radiobtn: ''
        }
    }
    onRadiobuttonChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
    onCheckboxChange = e => {
        const isChecked = e.target.checked;
        if (isChecked) {
            this.setState({ languages: [...this.state.languages, e.target.value] });
        } else {
            const index = this.state.languages.indexOf(e.target.value);
            this.state.languages.splice(index, 1);
            this.setState({ languages: this.state.languages });
        }
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                            <h1>React Form</h1>

                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comments: </label>
                    <textarea value={this.state.comment} id="comment" onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language</label>
                    <select value={this.state.language} id="language" onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    <p>Select Languages</p>
                    <input type="checkbox" name="languages" value="French" onChange={this.onCheckboxChange} />
                    <label htmlFor='language1'>French</label><br />
                    <input type="checkbox" name="languages" value="Spanish" onChange={this.onCheckboxChange} />
                    <label htmlFor='language2'>Spanish</label><br />
                    <input type="checkbox" name="languages" value="German" onChange={this.onCheckboxChange} />
                    <label htmlFor='language3'>German</label><br />
                </div><br />
                <div>
                <p>Choose Operating System</p>
                    <input
                        id="windows"
                        value="windows"
                        name="radiobtn"
                        type="radio"
                        onChange={this.onRadiobuttonChange}
                    /> Windows<br />                  
                    <input
                        id="mac"
                        value="mac"
                        name="radiobtn"
                        type="radio"
                        onChange={this.onRadiobuttonChange}
                    />Mac<br />                
                    <input
                        id="linux"
                        value="linux"
                        name="radiobtn"
                        type="radio"
                        onChange={this.onRadiobuttonChange}
                    />Linux<br />
                </div><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
