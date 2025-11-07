import screenshot1 from "../assets/screenshot1.svg";
import screenshot2 from "../assets/screenshot2.svg";
import screenshot3 from "../assets/screenshot3.svg";

const screenshots = [screenshot1, screenshot2, screenshot3];

export function Screenshots() {
  const items = screenshots
    .map(
      (src, i) => `
        <div class="shot">
            <div class="phone-frame">
                <img src="${src}" alt="Screenshot ${i + 1}" loading="lazy"/>
            </div>
        </div>
    `
    )
    .join("");

  return `
        <section class="section screenshots">
            <div class="container">
                <h2 class="section-title">หน้าจอแอป</h2>
                <div class="shots-row">
                    ${items}
                </div>
            </div>
        </section>
    `;
}
