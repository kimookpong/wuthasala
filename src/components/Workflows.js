export function Workflows() {
  return `
    <section class="section" id="workflows">
      <div class="container">
        <h2 class="section-title">Workflows</h2>

        <div class="list-block">
          <h3 class="section-subtitle">การเข้าสู่ระบบ</h3>
          <ol class="list ordered">
            <li>ผู้ใช้ล็อกอินด้วย <strong>WU PASS</strong></li>
            <li>หากล็อกอินสำเร็จ ระบบจะตรวจสอบว่าผู้ใช้เคยตั้งค่า <strong>PIN</strong> หรือไม่</li>
            <li>ถ้าเคยตั้งค่า PIN ระบบจะนำไปที่หน้า PIN Login
              <ul>
                <li>หากอุปกรณ์รองรับ Biometric (ลายนิ้วมือ/Face ID) และได้ลงทะเบียนไว้แล้ว ระบบจะเริ่มการสแกนอัตโนมัติ (เมื่อเปิดใช้งานในหน้าตั้งค่า)</li>
                <li>ผู้ใช้สามารถใช้ลายนิ้วมือ/Face ID หรือป้อน PIN เพื่อเข้าสู่ระบบได้</li>
                <li>สามารถเปิด/ปิดการสแกนลายนิ้วมืออัตโนมัติได้ในหน้าตั้งค่า</li>
              </ul>
            </li>
            <li>หากไม่เคย ระบบจะพาไปตั้งค่า PIN ก่อนเข้าสู่ระบบ</li>
          </ol>
        </div>

        <div class="list-block">
          <h3 class="section-subtitle">การเช็คอิน-เช็คเอาท์</h3>
          <ol class="list ordered">
            <li>ผู้ใช้เปิดแอปแล้วไปที่หน้า <strong>เช็คอิน</strong></li>
            <li>ระบบแสดงแผนที่พร้อมระยะห่างจากจุดเช็คอิน</li>
            <li>กดปุ่ม <strong>เช็คอิน</strong> หรือ <strong>เช็คเอาท์</strong> และบันทึกภาพหลักฐาน</li>
            <li>ระบบบันทึกข้อมูลเวลาและพิกัดลงฐานข้อมูล</li>
          </ol>
        </div>
      </div>
    </section>
  `;
}
