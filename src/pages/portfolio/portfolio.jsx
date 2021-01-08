import React from 'react'
import {connect} from 'react-redux'

class Portfolio extends React.Component{
  render(){
    return (
      <div className='lg:w-11/12 md:w-5/6 w-4/6 flex flex-row justify-center'>
        <div className='items-center flex flex-col justify-start w-full'>
        <div className='text-center font-bold cus-blue animate-bounce mt-2'>** images below **</div>
        {
          this.props.images.map((img)=>{
            return (
              <img src={img.fullImage} className='w-full object-scale-down my-8 max-h-5/6x'/>
            )
          })
        }

        </div>
      </div>
    )
}
}

const mapStateToProps = (state) => ({
  images:state.general.images
})

export default connect(mapStateToProps, null)(Portfolio)