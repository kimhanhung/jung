import React, { useState } from 'react';

function Check_p() {
 // Khai báo một mảng các trạng thái cho các thẻ li
 const [liColors, setLIColors] = useState(['black', 'black', 'black']);

 const handleClick = (index) => {
   // Tạo một bản sao của mảng trạng thái hiện tại
   const newLIColors = [...liColors];
   // Thay đổi giá trị trạng thái tại vị trí index
   newLIColors[index] = 'red';
   // Đặt lại các giá trị trạng thái khác thành màu đen
   newLIColors.fill('black', 0, index);
   newLIColors.fill('black', index + 1);
   // Cập nhật trạng thái mới
   setLIColors(newLIColors);
 }

 return (
   <ul>
     <li style={{color: liColors[0]}} onClick={() => handleClick(0)}>1</li>
     <li style={{color: liColors[1]}} onClick={() => handleClick(1)}>2</li>
     <li style={{color: liColors[2]}} onClick={() => handleClick(2)}>3</li>
   </ul>
 );
}

export default Check_p;
// Trong ví dụ trên, khi người dùng nhấp vào một thẻ p, chúng ta sẽ cập nhật trạng thái của thẻ đó bằng cách sử




