import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, urlToImage, url, author, date,source } = this.props;
    return (
      <div className ="my-3">
        <div className ="card" style={{ width: "18rem" }}>
        <span className ="position-absolute top-0  translate-middle badge rounded-pill " style={{ backgroundColor: '#DB0007' , left:'90%', zIndex:'1' }}>
              {source}
             
            </span>
          <img src={!urlToImage ? "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" : urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text"><small className="text-body-secondary"  > <span style={{ fontWeight: 'bold' }}>Author:</span>  {!author ? "Unknow" : author} | <span style={{ fontWeight: 'bold' }}> Date:</span> {new Date(date).toGMTString()}  </small></p>
            <a href={url} target=' _blank ' className="btn btn-dark btn-sm" style={{backgroundImage: "linear-gradient(to right,black , #053f5c)"  }} >  Read More   <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
              <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg></a>
          </div>
        </div>
      </div>
    )
  }
}
