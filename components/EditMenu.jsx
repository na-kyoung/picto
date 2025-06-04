import classes from '@/styles/EditMenu.module.css';
import EditSubMenu from './EditSubMenu';
import { useEffect, useState } from 'react';

export default function EditMenu(){
  const [subMenu, setSubMenu] = useState(null);

  const menuList = [
    { id: 'cut', title: '자르기', icon: <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M680-40v-160H280q-33 0-56.5-23.5T200-280v-400H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z"/></svg> },
    { id: 'tone', title: '조정', icon: <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg> },
    { id: 'filter', title: '필터', icon: <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-80q-116 0-198-82T80-360q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198T360-80Zm0-80q83 0 141.5-58.5T560-360q0-83-58.5-141.5T360-560q-83 0-141.5 58.5T160-360q0 83 58.5 141.5T360-160Zm318-172q2-6 2-13v-15q0-133-93.5-226.5T360-680h-15q-7 0-13 2 26-88 98.5-145T600-880q116 0 198 82t82 198q0 97-57 169.5T678-332Z"/></svg> },
    { id: 'beauty', title: '뷰티', icon: <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg> },
    { id: 'text', title: '텍스트', icon: <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M429.33-166.67V-692H206.67v-101.83h546.66V-692H530.67v525.33H429.33Z"/></svg> },
  ];

  function handleMenuBar(id){
    setSubMenu(id);
  }

  function handleBack(){
    setSubMenu(null);
  }
  
  useEffect(() => {
    console.log("subMenu :", subMenu);
  }, [subMenu]);

  return (
    <div className={classes.editmenu_box}>
    {subMenu ? (
      <EditSubMenu menu={subMenu} handleBack={handleBack} />
    ):(
      menuList.map((item, index) => (
        <div key={index}>
          <div className={classes.menu_box} onClick={() => handleMenuBar(item.id)}>
            {item.icon}
            <p className={classes.title}>{item.title}</p>
          </div>
        </div>
      ))
    )}
    </div>

    // <div className={classes.editbar_box}>
    //   <div className={classes.menu_box}>
    //     <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M680-40v-160H280q-33 0-56.5-23.5T200-280v-400H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h320q33 0 56.5 23.5T760-680v320h-80Z"/></svg>
    //     <p className={classes.title}>자르기</p>
    //   </div>
    //   <EditSubMenu menu="cut" />
    //   <div className={classes.menu_box}>
    //     <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
    //     <p className={classes.title}>조정</p>
    //   </div>
    //   <div className={classes.menu_box}>
    //     <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-80q-116 0-198-82T80-360q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198T360-80Zm0-80q83 0 141.5-58.5T560-360q0-83-58.5-141.5T360-560q-83 0-141.5 58.5T160-360q0 83 58.5 141.5T360-160Zm318-172q2-6 2-13v-15q0-133-93.5-226.5T360-680h-15q-7 0-13 2 26-88 98.5-145T600-880q116 0 198 82t82 198q0 97-57 169.5T678-332Z"/></svg>
    //     <p className={classes.title}>필터</p>
    //   </div>
    //   <div className={classes.menu_box}>
    //     <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
    //     <p className={classes.title}>뷰티</p>
    //   </div>
    //   <div className={classes.menu_box}>
    //     <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M429.33-166.67V-692H206.67v-101.83h546.66V-692H530.67v525.33H429.33Z"/></svg>
    //     <p className={classes.title}>텍스트</p>
    //   </div>
    // </div>
  );
}