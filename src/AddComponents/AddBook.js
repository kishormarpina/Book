import React from 'react';
class AddBook extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            author:"",
            description:"",
            pages:""
        }
    }
    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }
    // handleSubmit(){
    //     createBook = new createBook();
    //     createBook.append("caption",this.state.title)
    //     createBook.append("author",this.state.author)
    //     createBook.append("content",this.state.content)
    //     createBook.append("pages",this.state.pages)
    // }
    render(){
        return(
            <div className="Addbookcontainer">
                <h2>Add Book Here</h2>
                <div>
                <input onChange= {this.handleChange} type="text" name = "title" value={this.state.title} placeholder="title"/>
                </div>
                <div>
                <input onChange= {this.handleChange} type="text" name = "author" value={this.state.author} placeholder="author"/>
                </div>
                <div>
                <input onChange= {this.handleChange} type="text" name = "description" value={this.state.description} placeholder="description"/>
                </div>
                <div>
                <input onChange= {this.handleChange} type="text" name = "pages" value={this.state.pages} placeholder="pages"/>
                </div>
            
            </div>
        )
    }
}
export default AddBook
