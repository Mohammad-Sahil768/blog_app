import React from 'react'
import './Intro.css'
import blogger_image from '../../images/blogger_image.jpg'
function Intro() {
  return (
    <div className='Intro'>
      <div className="left">
        <img  src={blogger_image} alt="" />
      </div>
      <div className="right">
        <h2 className="quote display-5 " style={{color:"white"}}>
          Publish your passions, your way
        </h2>
        <br />
        <h3 className="quote " style={{color:"white"}}>
        Create a unique and beautiful blog easily.
        </h3>
        <br />
        <span className='quote-content' style={{
          fontSize:'larger',
          fontFamily:'sans-serif',
          lineHeight:'25px',
          // letterSpacing:'1px',
          fontStyle:'italic',
          color:'#154351',
        }}>Blogging fosters community, connections, and collaboration, offering a platform where voices are heard, stories are shared, and relationships flourish.It cultivates a vibrant network where ideas converge, experiences intertwine, and individuals find inspiration, empowerment, and endless opportunities for growth</span>
      </div>
    </div>
  )
}

export default Intro