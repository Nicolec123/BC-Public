import styles from './BolinhasRolam.module.css';

function BolinhasRolam({ section = '', selectedOnOff = {}, handleOnOffClick }) {
  return (
    <>
      <div className={styles.toogleContainer}>
        <span
          className={`${styles.label} ${selectedOnOff[section] === 'on' ? styles.active : ''}`}
          onClick={() => handleOnOffClick(section, 'on')}
        >
          <div className={styles.ball}></div> On
        </span>
        <span
          className={`${styles.label} ${selectedOnOff[section] === 'off' ? styles.active : ''}`}
          onClick={() => handleOnOffClick(section, 'off')}
        >
          <div className={styles.ball}></div> Off
        </span>
      </div>
    </>
  );
}

export default BolinhasRolam;
