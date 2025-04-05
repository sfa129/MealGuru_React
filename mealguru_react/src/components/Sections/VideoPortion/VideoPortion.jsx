import React from 'react';
import './VideoPortion.css'

function VideoPortion() {
  return (
    <>
    <div class="video-portion">
        <div class="inner-div">
            <div class="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/p70h_SlDau0?si=UuIPDx_obGMg-xAS"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="video-text">
                <h2>About Us</h2>
                <p>In a busy world filled with endless meal options, My Meal Guru is here to <br/> transform the way you
                    plan your meals. Our mission is to make mealtime <br/> effortless and enjoyable by delivering personalized
                    recipes and meal plans <br/> tailored just for you. Click here to learn how we're creating a better
                    mealtime <br/> experience—one recipe at a time.
                <div class="video-text-btn">
                    <p>Discover Our Story</p>
                </div>
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoPortion