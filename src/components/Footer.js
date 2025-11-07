export function Footer() {
  const year = new Date().getFullYear();
  return `
        <footer class="footer">
            <div class="container footer-grid">
                <div class="foot-left">
                    <div class="brand small">WU Thasala</div>
                    <p class="muted">© ${year} WU Thasala • All rights reserved</p>
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
    `;
}
