// Component for Loading Spinner

import classes from '@/styles/Loading.module.css';

export default function Loading() {
  return (
    <div className={classes.loadingbox}>
      <span className={classes.loader}></span>
    </div>
  );
}