// import React, { Component } from 'react'
// export default class NewsItems extends Component {
//   render() {
//   }
// }

    const NewsItems = (props)=>{
    let {title, description, imgUrl, newsUrl, publishedAt}=props
    return (
      <div className='my-3'>
      <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text text-muted'><b>Published At : </b>{publishedAt.slice(0, 10)}</p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
       </div>
     </div>
     </div>
    )
  }

  export default NewsItems