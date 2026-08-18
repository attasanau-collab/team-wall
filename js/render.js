// render.js — อ่านข้อมูลจาก registry แล้ววาดการ์ดลงหน้าเว็บ
// สถาปัตยกรรม State -> Render เหมือน Workshop 01
import { members } from "./registry.js";

// เรียงตามเลขที่นั่ง เพื่อให้ลำดับการ์ดคงที่ไม่ว่าใคร merge ก่อนหลัง
const sorted = [...members].sort((a, b) => a.seat.localeCompare(b.seat));

// escape ข้อความจากผู้ใช้ ป้องกัน HTML injection
function esc(text = "") {
  return String(text).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

// สร้าง HTML ของการ์ด 1 ใบ (ใช้ template literal ตามมาตรฐานตั้งแต่ Workshop 01)
function cardHTML(m) {
  return `
    <article class="card" style="border-top-color:${esc(m.accent || "#4f46e5")}">
      <div class="card__emoji">${esc(m.emoji || "🙂")}</div>
      <h2 class="card__name">${esc(m.name)}</h2>
      <p class="card__seat">ที่นั่ง ${esc(m.seat)}</p>
      <p class="card__motto">"${esc(m.motto || "")}"</p>
      <a class="card__link" href="${esc(m.github || "#")}" target="_blank" rel="noopener">GitHub →</a>
    </article>
  `;
}

// วาดทั้งหมดครั้งเดียว (Render)
document.getElementById("wall").innerHTML = sorted.map(cardHTML).join("");
document.getElementById("member-count").textContent = sorted.length;
