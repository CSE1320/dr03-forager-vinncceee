import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <img src="/icons/mushroom.svg" alt="Mushroom" width="40" height="40" />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <img src="/icons/home.svg" alt="Home" width="40" height="40" />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <img src="/icons/camera.svg" alt="Camera" width="40" height="40" />
        </div>
      </Link>
    </div>
  );
}