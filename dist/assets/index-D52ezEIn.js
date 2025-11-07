(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c="/assets/app-icon-C8Wcu3VU.svg",n="/assets/screenshot1-DAICbkiU.svg";function l(){return`
        <section class="hero section">
            <div class="container hero-grid">
                <div class="hero-copy">
                    <div class="brand">
                        <img src="${c}" alt="WU Thasala" class="brand-icon"/>
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
    `}const u="/assets/screenshot2-BpmM85Y5.svg",h="/assets/screenshot3-BPWa21Ev.svg",g=[n,u,h];function f(){return`
        <section class="section screenshots">
            <div class="container">
                <h2 class="section-title">หน้าจอแอป</h2>
                <div class="shots-row">
                    ${g.map((s,o)=>`
        <div class="shot">
            <div class="phone-frame">
                <img src="${s}" alt="Screenshot ${o+1}" loading="lazy"/>
            </div>
        </div>
    `).join("")}
                </div>
            </div>
        </section>
    `}function v(){return`
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
      <a class="mobile-cta-btn appstore" href="https://apps.apple.com/us/app/wu-thasala/id6747904778" target="_blank" rel="noopener">App Store</a>
      <a class="mobile-cta-btn googleplay" href="https://play.google.com/store/apps/details?id=com.cdtwu.thasalaapp" target="_blank" rel="noopener">Google Play</a>
    </div>
  `}function b(){return`
    <section class="section" id="project-details">
      <div class="container">
        <h2 class="section-title">รายละเอียดโครงการ</h2>
        <p>
          ระบบ Mobile Application สำหรับบุคลากรนี้ถูกออกแบบมาเพื่อเพิ่มประสิทธิภาพการทำงานและการสื่อสารภายในองค์กร
          โดยรองรับการใช้งานบนระบบปฏิบัติการ <strong>iOS</strong> และ <strong>Android</strong>
        </p>
      </div>
    </section>
  `}function y(){const a=navigator.userAgent||navigator.vendor||window.opera||"",s=/android/i.test(a),o=/iPad|iPhone|iPod/.test(a)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return s?"android":o?"ios":"other"}function P(){const a=y();a==="android"?document.body.classList.add("is-android"):a==="ios"&&document.body.classList.add("is-ios");const s=document.getElementById("app");s&&(s.innerHTML=`
		${l()}
    ${b()}
		${p()}
		${f()}
		${v()}
		${m()}
	`)}P();
//# sourceMappingURL=index-D52ezEIn.js.map
