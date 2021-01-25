import React from 'react'
import {connect} from 'react-redux'

class Portfolio extends React.Component{
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render(){
    return (
      <div className="w-full min mb-24" style={{minHeight:'80vh'}}>
        {
          this.props.images.map((img)=>{
            return (
              <div className="overflow-hidden text-gray-700 body-font">
              <div className="container px-5 mx-auto lg:px-32">
              <div className="flex flex-wrap ">
              <div className="flex flex-wrap w-full">
              <div className="w-full">
              <img alt="gallery" className="block object-cover object-center w-full h-full min-h-24 rounded-lg bg-gray-600"src={img.fullImage}/>
              </div>
              </div>
              </div>
              </div>
              </div>
            )
          })
        }
      </div>
    )
}
}

const mapStateToProps = (state) => ({
  images:state.general.images
})

export default connect(mapStateToProps, null)(Portfolio)