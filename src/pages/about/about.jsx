import React from 'react'
import {connect} from 'react-redux'
import Team from '../../components/Team/Team'
import AboutContent from '../../components/AboutContent/AboutContent'

class About extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render(){
    return (
      <>
      <AboutContent sitename={this.props.sitename} sitedescription={this.props.sitedescription} aboutdescription={this.props.aboutdescription} defautlemail={this.props.defautlemail}/>
      <Team/>
    </>
    )
}
}

const mapStateToProps = (state) => ({
  sitename:state.general.sitename,
  sitedescription:state.general.sitedescription,
  aboutdescription:state.general.aboutdescription,
  defautlemail:state.general.defautlemail,
})

export default connect(mapStateToProps, null)(About)