import { useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './style.module.css';

function Key({ text, desc, audio }) {
  const [playing, setPlaying] = useState(false);

  const onTransitionEnd = () => {
    setPlaying(() => false);
  };

  useEffect(() => {
    const playSound = (e) => {
      if (e.key.toUpperCase() !== text) return;

      setPlaying(true);
      const media = new Audio(audio);
      media.play();
    };

    window.addEventListener('keydown', playSound);

    return () => {
      window.removeEventListener('keydown', playSound);
    };
  }, [playing, text, audio]);

  return (
    <div
      className={clsx(classes.key, {
        [classes.playing]: playing,
      })}
      onTransitionEnd={onTransitionEnd}
    >
      <kbd className={classes.kbd}>{text}</kbd>
      <span className={classes.sound}>{desc}</span>
    </div>
  );
}

export default Key;
