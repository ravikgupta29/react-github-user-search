import React, { Component, Fragment } from 'react'

export default class GithubRepos extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
     <Fragment>
      <div className='card mt-3'>
        <div className='card-header'>
          <p className='h4'>Your Respositories</p>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            {
              this.props.repos.map((repo)=>{
                return(
                  <li className='list-group-item d-flex justify-content-around'>
                    <p className='h5'>
                      <a href={repo.html_url} target='_blank'>{repo.name}</a>
                    </p>
                    <span className='badge badge-success'>Stars: {repo.stargazers_count}</span>
                    <span className='badge badge-primary'>Watchers:{repo.watchers_count}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
     </Fragment>
    )
  }
}
