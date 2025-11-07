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
                            <span class="badge-text small">ดาวน์โหลดบน</span>
                            <span class="badge-text brand">App Store</span>
                        </a>
                        <a class="store-badge googleplay" href="https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp" target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                            <span class="badge-text small">รับได้ที่</span>
                            <span class="badge-text brand">Google Play</span>
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
