// our-domain.com/

import useImageStore from "@/lib/store/useImageStore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  // const [selectedImg, setSelectedImg] = useState();
  const setImageFile = useImageStore((state) => state.setImageFile);
  
  // 이미지 업로드 & 화면 이동
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    
    if(file){
      // 파일 형식 검증
      const typeList = ['image/jpg','image/jpeg','image/png'];
      const fileType = file.type;
      
      if(typeList.indexOf(fileType) == -1){
        alert('지원하지 않는 파일 형식입니다.');
        return;
      }
      // if (!fileType.includes('image')) {
      //   alert('지원하지 않는 파일 형식입니다.');
      //   return;
      // }
        
      // 미리보기
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   setSelectedImg(reader.result);
      // };

      // 이미지 저장 및 화면 이동
      setImageFile(file);
      router.push('/edit');
    }
  }

  // window.addEventListener('popstate', (event) => {
  //   console.log('뒤로가기 클릭!');
  //   return;  
  //   // if (event.state?.page === 'payment-complete') {
  //   //   // 결제완료 화면에서 뒤로 가기를 클릭한 경우
  //   //   // 장바구니 화면으로 이동
  //   //   window.history.go(-2);  // 2단계 뒤로 이동, 결제수단선택과 결제중 화면을 건너뛰고 장바구니로 이동
  //   // }
  // });

  return (
    <div style={{ textAlign:"center" }}>
      <p style={{ padding:30, fontSize:"30px", fontWeight:"bold" }}>Main Page</p>
      {/* <button style={{ padding: 10 }} onClick={() => {router.push('/edit')}}>Edit</button> */}
      <div>
        <label htmlFor="select_img" style={{ border:"none", borderRadius:"5px", backgroundColor:"#c9c9c9", padding:10, textAlign:"center", fontSize:"15px", cursor:"pointer" }}>사진 편집</label>
        <input onChange={handleFileChange} id="select_img" type="file" accept="image/*" capture="camera" style={{ display:"none" }} />
      </div>
      {/* {selectedImg && <Image src={selectedImg.toString()} width="500" height="auto" alt="..." />} */}
    </div>
  );
}
