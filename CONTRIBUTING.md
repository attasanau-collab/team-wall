# กติกาการทำงานร่วมกัน (Contributing)

## กฎเหล็ก 3 ข้อ
1. **ห้ามแก้ไฟล์ของคนอื่น** — แก้ได้เฉพาะ `data/members/stdXX.js` ของตัวเอง และบรรทัดที่นั่งของตัวเองใน `js/registry.js`
2. **ห้าม push ขึ้น `main` โดยตรง** — ต้องผ่าน branch + Pull Request เสมอ
3. **ห้าม `git push --force`** ขึ้น branch ที่คนอื่นใช้อยู่

## ไฟล์ที่ห้ามแตะ
- `index.html`
- `css/base.css`
- `js/render.js`
- `css/theme.css` (แก้ได้เฉพาะเมื่ออาจารย์สั่งในกิจกรรม Conflict Lab)

## ชื่อ branch
```
feat/stdXX-card        # เช่น feat/std07-card
fix/stdXX-<เรื่องที่แก้>
```

## รูปแบบข้อความ commit
```
feat(std07): add member card for สมชาย
fix(std07): correct github link
```

## ก่อนเปิด Pull Request ทุกครั้ง
```bash
git fetch upstream
git rebase upstream/main
```
