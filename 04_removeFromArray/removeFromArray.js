const removeFromArray = function(arr, ...itemsToRemove) {
    return arr.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

/*
...itemsToRemove >> rest parameter: รับข้อมูลที่ต้องการลบได้หลายรายการ
filter(): สร้างอาร์เรย์ใหม่ที่มีเฉพาะค่าที่ไม่ต้องการลบ
includes(): ตรวจสอบว่าค่าอยู่ในรายการที่ต้องลบหรือไม่

เช่น
arr = [1, 2, 3, 4]
itemsToRemove = [3]

!itemsToRemove.includes(1) → true (เพราะ 1 ไม่อยู่ในรายการลบ)
!itemsToRemove.includes(2) → true
!itemsToRemove.includes(3) → false (เพราะ 3 อยู่ในรายการลบ)
!itemsToRemove.includes(4) → true

return [1, 2, 4]
*/