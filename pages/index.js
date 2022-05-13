import React, { useEffect } from "react";
import * as PIXI from 'pixi.js'


export default function Home() {
  let app, image;

  useEffect(() => {
    app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });
    document.body.appendChild(app.view);
    image = new PIXI.Sprite.from("https://res.cloudinary.com/dogjmmett/image/upload/v1652239380/UI_u3vkrp.png");
    image.width = window.innerWidth;
    image.height = window.innerHeight;
    app.stage.addChild(image);
  })
  return (
    <div>
      <h1>Works</h1>
    </div>
  )
}
