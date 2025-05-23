// our-domain.com/

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [selectedImg, setSelectedImg] = useState();
  
  function handleSelectImg(){
    // console.log('click');
  }
  
  // 이미지 업로드 & 미리보기
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    
    if(file){
      // 파일 형식 검증
      const typeList = ['image/jpg','image/jpeg','image/png'];
      const fileType = file.type;
      // const fileType = 'image/jpg';
      
      if(typeList.indexOf(fileType) == -1){
        alert('지원하지 않는 파일 형식입니다.');
        return;
      }
      // if (!fileType.includes('image')) {
      //   alert('지원하지 않는 파일 형식입니다.');
      //   return;
      // }
        
      // 미리보기
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImg(reader.result);
      };
    }
  }

  return (
    <div style={{ textAlign:"center" }}>
      <p style={{ padding:30, fontSize:"30px", fontWeight:"bold" }}>Main Page</p>
      {/* <button style={{ padding: 10 }} onClick={() => {router.push('/edit')}}>Edit</button> */}
      <div>
        <label onClick={handleSelectImg} htmlFor="select_img" style={{ border:"none", borderRadius:"5px", backgroundColor:"#c9c9c9", padding:10, textAlign:"center", fontSize:"15px", cursor:"pointer" }}>사진 편집</label>
        <input onChange={handleFileChange} id="select_img" type="file" accept="image/*" capture="camera" style={{ display:"none" }} />
      </div>
      {selectedImg && <Image src={selectedImg.toString()} width="500" height="auto" alt="..." />}
    </div>
  );
}
