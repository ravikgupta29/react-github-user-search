import React, { Component, Fragment } from 'react'

export default class GithubProfileCard extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
      <Fragment>
        <div className='card'>
          <img src={this.props.profile.avatar_url} alt="" className='img-fluid' />
          <div className=' card-body'>
            <p className='h4'>{this.props.profile.name}</p>
            <p className='h4'>{this.props.profile.bio}</p>
            <a href={this.props.profile.html_url} target='_blank' className='btn btn-success btn-sm' >PROFILE</a>
          </div>
        </div>
      </Fragment>
    )
  }
}
