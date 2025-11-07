(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l="/assets/app-icon-C8Wcu3VU.svg",n="/assets/screenshot1-DAICbkiU.svg";function c(){return`
        <section class="hero section">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <div class="brand">
                        <img src="${l}" alt="WU Thasala" class="brand-icon"/>
                        <span class="brand-name">WU Thasala</span>
                    </div>
                    <h1 class="title">Mobile Application สำหรับบุคลากร</h1>
                     <p>
                        ระบบ Mobile Application สำหรับบุคลากรนี้ถูกออกแบบมาเพื่อเพิ่มประสิทธิภาพการทำงานและการสื่อสารภายในองค์กร
                        โดยรองรับการใช้งานบนระบบปฏิบัติการ <strong>iOS</strong> และ <strong>Android</strong>
                    </p>
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
                        <img src="${n}" alt="WU Thasala preview"/>
                    </div>
                </div>
            </div>
        </section>
    `}const d=[{title:"ระบบเช็คอิน-เช็คเอาท์",desc:"รองรับ GPS และกล้องถ่ายรูป ตรวจสอบจุดเช็คอิน บันทึกวันเวลาและพิกัด",icon:"📍"},{title:"การแจ้งเตือน (Push Notification)",desc:"แจ้งข่าวสารภายในองค์กร และตั้งค่าการแจ้งเตือนเฉพาะบุคคลได้",icon:"🔔"},{title:"เข้าสู่ระบบหลายรูปแบบ",desc:"WU PASS, PIN, และ Biometric (ลายนิ้วมือ/Face ID) พร้อมเริ่มสแกนอัตโนมัติ",icon:"🔐"},{title:"ปลอดภัยและควบคุมการเข้าถึง",desc:"มาตรการความปลอดภัยและการจัดการสิทธิ์เข้าถึงข้อมูล",icon:"🛡️"}];function p(){return`
        <section class="section features" id="features">
            <div class="container">
            <h2 class="section-title">ฟีเจอร์หลัก</h2>
                <div class="features-grid">
                    ${d.map(s=>`
        <div class="feature-item card">
            <div class="feature-icon">${s.icon}</div>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
        </div>
    `).join("")}
                </div>
            </div>
        </section>
    `}const g="/assets/screenshot2-BpmM85Y5.svg",u="/assets/screenshot3-BPWa21Ev.svg",h=[n,g,u];function v(){return`
        <section class="section screenshots">
            <div class="container">
                <h2 class="section-title">หน้าจอแอป</h2>
                <div class="shots-row">
                    ${h.map((s,o)=>`
        <div class="shot">
            <div class="phone-frame">
                <img src="${s}" alt="Screenshot ${o+1}" loading="lazy"/>
            </div>
        </div>
    `).join("")}
                </div>
            </div>
        </section>
    `}function f(){return`
        <footer class="footer">
            <div class="container footer-grid">
                <div class="foot-left">
                    <div class="brand small">WU Thasala</div>
                    <p class="muted">© ${new Date().getFullYear()} WU Thasala • All rights reserved</p>
                </div>
                <div class="foot-right">
                    <a href="https://apps.apple.com/us/app/wu-thasala/id6747904778" target="_blank" rel="noopener">App Store</a>
                    <a href="https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp" target="_blank" rel="noopener">Google Play</a>
                </div>
            </div>
            <div class="container powered-by">
                <span class="muted">Powered by</span>
                <img class="powered-logo" src="https://hrms.wu.ac.th/img/cdtwu.png" alt="CDT WU" loading="lazy"/>
            </div>
        </footer>
    `}function m(){return`
    <div class="mobile-cta" role="region" aria-label="ดาวน์โหลดแอป (แถบลัดบนมือถือ)">
      <a class="mobile-cta-btn appstore" href="https://apps.apple.com/us/app/wu-thasala/id6747904778" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
        <span>App Store</span>
      </a>
      <a class="mobile-cta-btn googleplay" href="https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
        </svg>
        <span>Google Play</span>
      </a>
    </div>
  `}function b(){const a=navigator.userAgent||navigator.vendor||window.opera||"",s=/android/i.test(a),o=/iPad|iPhone|iPod/.test(a)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return s?"android":o?"ios":"other"}function y(){const a=b();a==="android"?document.body.classList.add("is-android"):a==="ios"&&document.body.classList.add("is-ios");const s=document.getElementById("app");s&&(s.innerHTML=`
		${c()}
		${p()}
		${v()}
		${f()}
		${m()}
	`)}y();
//# sourceMappingURL=index-Br8goD7X.js.map
