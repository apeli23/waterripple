import React, { useEffect, useRef } from "react";
import * as PIXI from 'pixi.js';


export default function Home() {
  let original, app, image, displacementSprite, displacementFilter, processedImage, animationID,finalCanvas;
  const [userprofile, takeScreenshot] = useScreenshot();
  const processedRef = useRef();

  useEffect(() => {

  }, [])


  const startAnimation = () => {
    processedImage = processedRef.current;
    original = document.getElementById('image')
    // console.log(original.width, original.height)
    app = new PIXI.Application({ width: original.width, height: original.height, forceCanvas: true });
    processedImage.appendChild(app.view);
    image = new PIXI.Sprite.from("https://res.cloudinary.com/dogjmmett/image/upload/v1652412717/template_vowego.jpg");
    image.width = original.width;
    image.height = original.height;
    // console.log(app.view)
    app.stage.addChild(image);

    displacementSprite = new PIXI.Sprite.from("https://res.cloudinary.com/dogjmmett/image/upload/v1652411299/cloud_eg89xa.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];

    animate();
  }

  function animate() {
    displacementSprite.x += 10;
    displacementSprite.y += 4;
    animationID = requestAnimationFrame(animate);
    finalCanvas = app.view.toDataURL()

  }


  const stopAnimation = () => {
    cancelAnimationFrame(animationID)
    console.log(finalCanvas)
  }
  return (
    <div className="container">
      <div className="navbar">
        <h1>WaterRipple Effect in nextjs</h1>
        <button onClick = {startAnimation}>Start water ripple</button>
        <button onClick = {stopAnimation}>Stop water ripple</button>
        {/* <button onClick={uploadHandler}>Upload Sample</button> */}
      </div>
      <div className="row">
        <div className="column">
          <img id="image" src="https://res.cloudinary.com/dogjmmett/image/upload/v1652412717/template_vowego.jpg" alt="fish" />
        </div>
        <div id="column2">
          <div ref={processedRef} className="processed" />
        </div>
      </div>
    </div>
  )
};
