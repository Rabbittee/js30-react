import classes from './style.module.css';
import { KEYS } from './keys';
import Key from './Key';

function Cola() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.keys}>
        {KEYS.map(({ text, desc, audio }) => (
          <Key key={text} text={text} desc={desc} audio={audio} />
        ))}
      </div>
    </div>
  );
}

export default Cola;
