import React from "react";

class Book extends React.Component {
    render() {
        return (
            <div className="big-blue__book">
                <p>{this.props.book.title}</p>
                <img src={this.props.book.img} alt={this.props.book.title}></img>
            </div>
        )
    }
}

export default Book