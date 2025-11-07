import "./style.css";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Screenshots } from "./components/Screenshots";
import { Footer } from "./components/Footer";
import { MobileCTA } from "./components/MobileCTA";

function detectOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera || "";
  const isAndroid = /android/i.test(ua);
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isAndroid) return "android";
  if (isIOS) return "ios";
  return "other";
}

function render() {
  const os = detectOS();
  if (os === "android") document.body.classList.add("is-android");
  else if (os === "ios") document.body.classList.add("is-ios");

  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = `
		${Hero()}
		${Features()}
		${Screenshots()}
		${Footer()}
		${MobileCTA()}
	`;
}

render();
