// =============================================================================
// MDT312 Assignment 6 register.js
// Modernized: ES6 (const/let), event.preventDefault(), and localStorage
// =============================================================================

//เรียกใช้ฟังก์ชัน pageLoad
window.onload = pageLoad;

function pageLoad() {
    const form = document.getElementById("myRegister"); // ตัวแปร = form ประกาศตัวแปรชนิดคงที่ 
    form.onsubmit = validateForm; // ผูกฟังก์ชัน validateForm เข้ากับ event Onsubmit
}

function validateForm(event) {
    const errorMsg = document.getElementById("errormsg"); //ใช้สำหรับแสดงข้อความแจ้งเตือนข้อผิดพลาดบนหน้าเว็บ
    const username = document.forms["myRegister"]["username"].value.trim();
    const passwords = document.forms["myRegister"]["password"]; //คืนค่ากลับมาเป็น Array เนื่องจาก ใน html มี แอตทริบิว name = "password" 2 ช่อง
    const password = passwords[0].value;
    const retypePassword = passwords[1].value;

    // 1. ตรวจสอบว่า Password ทั้ง 2 ช่องตรงกันหรือไม่ ถ้าไม่ตรงกันให้แจ้งเตือน และให้return false
    if (password !== retypePassword) {
        errorMsg.innerText = "Password ไม่ตรงกัน กรุณากรอกใหม่อีกครั้ง";
        if (event) event.preventDefault();
        return false;
    }

    // 2. เคลียร์ข้อความแจ้งเตือนถ้าผ่านการตรวจสอบ
    errorMsg.innerHTML = "";

    // 3. บันทึกข้อมูลลงใน localStorage ทีละตัว
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");
    // เพื่อความปลอดภัย: รหัสผ่านไม่ปรากฏบน Browser Address Bar และ Browser History
    

    alert("ลงทะเบียนสำเร็จ! ระบบบันทึกข้อมูลเรียบร้อย กำลังไปที่หน้า Login");

    // 4. นำทางไปหน้า login.html
    if (event) event.preventDefault();
    window.location.href = "login.html";
    return true;
}