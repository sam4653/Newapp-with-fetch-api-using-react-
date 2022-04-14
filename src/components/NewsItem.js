import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl,newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJnb43MuKReMIG9fvcHJrOAupaJjzKCcEdyw&usqp=CAU"} className="card-img-top" alt="logo" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
