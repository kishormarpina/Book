import React from 'react';
import AddBook from '../AddComponents/AddBook';


class BookList extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			book: [],
			display: false,
		};
    }
    componentDidMount() {
        fetch("http://localhost:3000/books")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            this.setState({book : res});
        })
    }
    toggleDisplay = () => {
		this.setState({
			display: !this.state.display,
		});
    };
    render(){
        let ele = null;
        if(this.state.book && !this.state.display) {
            ele = this.state.book.map((item)=>{
                return (
                    <book title = {item.title} author = {item.author} description={item.description} pages={item.pages}/>
                )
            });
        }else{
            ele = <AddBook toggleDisplay={this.toggleDisplay}/>
        }
        return (
            <div className="booklistContainer">
                <ele/>
            </div>
        )
        
    }

}
export default BookList