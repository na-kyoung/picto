import useImageStore from "@/lib/store/useImageStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "@/styles/Edit.module.css";
import EditMenu from "./EditMenu";

export default function Edit(){
  const router = useRouter();
  const imageFile = useImageStore((state) => state.imageFile);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log('imageFile :', imageFile);

    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImageUrl(url);

      // 클린업 (메모리 해제)
      return () => URL.revokeObjectURL(url);
    } else {
      alert('선택한 사진이 없습니다.');
      router.replace('/');
      // 히스토리 스택 중복 문제 해결하기
      // window.location.replace('/page1'); // 상태 초기화 & 새로고침됨
    }
  } ,[imageFile]);

  return (
    <>
      <div className={classes.edit_box}>
        <p className={classes.edit_title}>Edit Page</p>
        {imageUrl ? (
          <img src={imageUrl} alt="선택된 이미지" className={classes.edit_img} />
        ) : (<p>사진 로딩중..</p>)}
      </div>
      <EditMenu />
    </>
  );
}