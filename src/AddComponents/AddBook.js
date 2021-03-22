import React from 'react';
import './AddBook.css';
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
    handleSubmit(){
        const createBook = new createBook();
        createBook.append("caption",this.state.title)
        createBook.append("author",this.state.author)
        createBook.append("content",this.state.content)
        createBook.append("pages",this.state.pages);
        fetch("http://localhost:9000/book", {
            method:"POST",
            body:createBook,
        }).then((respon) => respon.json())
        .then(() => {
            this.props.toggledisplay();
        })
        .catch((error) => {
            console.log(error)
        });
    }
    render(){
        return(
            <div className="Addbookcontainer">
            <form onSubmit={this.handleSubmit}>
                <div className="formcontainer">
                <div className="formhead">
                <h2>Add Book Here</h2> 
                </div>
                <div className="input_container">
                <div className="title">
                <input onChange= {this.handleChange} type="text" name = "title" value={this.state.title} placeholder="title"/>
                </div>
                <div className="author">
                <input onChange= {this.handleChange} type="text" name = "author" value={this.state.author} placeholder="author"/>
                </div>
                <div className="description">
                <input onChange= {this.handleChange} type="text" name = "description" value={this.state.description} placeholder="description"/>
                </div>
                <div className="pages">
                <input onChange= {this.handleChange} type="text" name = "pages" value={this.state.pages} placeholder="pages"/>

                </div>
                </div>
                <div className="postsubmit">
                    <input type = "submit" value="Post" className= "post" disabled= {
                        !this.state.author ||
                        !this.state.description ||
                        !this.state.pages ||
                        !this.state.title
                    }/>
                </div>
                </div>
            </form>
            
            </div>
        )
    }
}
export default AddBook
