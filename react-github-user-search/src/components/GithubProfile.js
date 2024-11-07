import React, { Component, Fragment } from 'react'
import GithubProfileCard from './GithubProfileCard';
import GithubProfileDetails from './GithubProfileDetails';

export default class GithubProfile extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
      <Fragment>
        <div className='row mt-3'>
          <div className='col-md-3'>
            {
              Object.keys(this.props).length!==0?<Fragment>
                <GithubProfileCard profile={this.props.profile}/>
              </Fragment>:null
            }
          </div>
          <div className='col-md-9'>
            {
              Object.keys(this.props).length>0?<Fragment>
                <GithubProfileDetails profile={this.props.profile}/>
              </Fragment>:null
            }
          </div>
        </div>
      </Fragment>
      //<div>GithubProfile:{JSON.stringify(this.props.profile)}</div>
    )
  }
}
