// Component for Main page

import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "@/components/Loading";
import useImageStore from "@/lib/store/useImageStore";
import classes from "@/styles/Main.module.css";

export default function Main() {
  const router = useRouter();
  const [uploading, setUploading] = useState(false); // 업로드중일 떄 로딩중 표시
  const setImageFile = useImageStore((state) => state.setImageFile); // 이미지 저장
  
  // 이미지 업로드 & 화면 이동
  const handleFileChange = (e) => {
    setUploading(true);
    
    const file = e.target.files[0];
    console.log(file);
    
    // setTimeout(()=>{
    //   console.log('5초 후 ...');
    // }, 5000);
    
    if(file){
      // 파일 형식 검증
      const typeList = ['image/jpg','image/jpeg','image/png'];
      const fileType = file.type;
      // const fileType = 'image/jpg';
      
      if(typeList.indexOf(fileType) == -1){
        alert('지원하지 않는 파일 형식입니다.');
        setUploading(false);
        return;
      }

      // 이미지 저장 및 화면 이동
      setImageFile(file);
      router.push('/edit');
    }
  }

  return (
    <div className={classes.mainbox}>
      <p className={classes.maintitle}>Main Page</p>
      <div>
        <label htmlFor="select_img" className={classes.inputbtn}>사진 편집</label>
        <input onChange={handleFileChange} id="select_img" type="file" accept="image/*" capture="camera" className={classes.imginput} />
      </div>
      <div className={classes.spinnerbox}>
        {uploading && <Loading />}
      </div>
    </div>
  );
}
