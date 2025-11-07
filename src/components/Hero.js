import appIcon from "../assets/app-icon.svg";
import screenshot1 from "../assets/screenshot1.svg";

export function Hero() {
  return `
        <section class="hero section">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <div class="brand">
                        <img src="${appIcon}" alt="WU Thasala" class="brand-icon"/>
                        <span class="brand-name">WU Thasala</span>
                    </div>
                    <h1 class="title">Mobile Application สำหรับบุคลากร</h1>
                    <p class="subtitle">แผนการพัฒนาเพิ่มเติม 2569 — เช็คอิน/เช็คเอาท์ • การแจ้งเตือน • เข้าสู่ระบบด้วย WU PASS, PIN, Biometric</p>
                    <div class="store-badges" role="group" aria-label="ดาวน์โหลดแอป">
                        <a class="store-badge appstore" href="https://apps.apple.com/us/app/wu-thasala/id6747904778" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                            <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                            </svg>
                            <div class="badge-content">
                                <span class="badge-text small">ดาวน์โหลดบน</span>
                                <span class="badge-text brand">App Store</span>
                            </div>
                        </a>
                        <a class="store-badge googleplay" href="https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                            <svg class="store-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                            </svg>
                            <div class="badge-content">
                                <span class="badge-text small">ดาวน์โหลดบน</span>
                                <span class="badge-text brand">Google Play</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="hero-phone">
                    <div class="phone-frame">
                        <img src="${screenshot1}" alt="WU Thasala preview"/>
                    </div>
                </div>
            </div>
        </section>
    `;
}
