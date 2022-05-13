import React, { useEffect, useRef } from "react";
import * as PIXI from 'pixi.js'


export default function Home() {
  let app, image, displacementSprite, displacementFilter;

  useEffect(() => {
    app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
    document.body.appendChild(app.view);
    image = new PIXI.Sprite.from("https://res.cloudinary.com/dogjmmett/image/upload/v1652412717/template_vowego.jpg");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    app.stage.addChild(image);

    displacementSprite = new PIXI.Sprite.from("https://res.cloudinary.com/dogjmmett/image/upload/v1652411299/cloud_eg89xa.png");
    displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    app.stage.addChild(displacementSprite);
    app.stage.filters = [displacementFilter];

    animate();      
  })

  function animate() {
    displacementSprite.x += 10;
    displacementSprite.y += 4;
    requestAnimationFrame(animate);
  }
  return (
    <div>
      <h1>Works</h1>
    </div>
  )
}
