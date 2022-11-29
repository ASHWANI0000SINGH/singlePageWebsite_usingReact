import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle, AiFillInstagram} from "react-icons/ai"  
const Home = () => {
  return (
    <>
    <div className="home" id="home">
        <main>
            <h1> TECHYSTAR</h1>
            <p>Solution to ALl your Probelm</p>
        </main>
    </div>

    <div className="home2">
      <img src={vg} alt="vg" />
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quidem ullam doloremque praesentium laudantium perferendis totam cupiditate deleniti ipsa suscipit esse eligendi excepturi fugit corrupti aperiam ut vel voluptates et labore sequi debitis itaque qui odit. Amet tempora ratione voluptas?</p>
      </div>

    </div>

    <div className="home3" id="about">
      <div>
      <h1>Who we are?</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, repellat quae sint numquam libero exercitationem doloribus natus eos sequi aperiam cupiditate, atque, nobis ullam dignissimos praesentium nemo! Ea earum dolores eveniet odit eligendi magnam commodi rerum nobis nostrum.</p>
      </div>

    </div>

    <div className="home4" id='brands'>
      <div>
        <h1> Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle></AiFillGoogleCircle>
            <p> Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
            <AiFillInstagram></AiFillInstagram>
            <p> Instagram</p>
          </div>

          <div style={{animationDelay:"0.2s"}}>
            <AiFillYoutube></AiFillYoutube>
            <p> YouTube</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
            <AiFillAmazonCircle></AiFillAmazonCircle>
            <p> Amazon</p>
          </div>


        </article>
      </div>
    </div>
    
    </>
  )
}

export default Home