import "./style.css";
import { getVideo, drawVideo } from "./src/camera";

(async () => {
  const video = await getVideo();
  const canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");
  button.addEventListener("click", () => {
    console.log("drawing");
    drawVideo(video, canvas);
  });
})();
