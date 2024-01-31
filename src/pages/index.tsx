import Head from 'next/head';
import styles from './styles.module.css';
import { BASE_URL, IMAGE_PATH, POST_URL } from '@/constants/constants';
import { generateFrameRing } from '@/utils';

export default function Home() {
  const fullImageUrl = `${BASE_URL}${IMAGE_PATH}`;

  return (
    <>
      <Head>
        <meta property="og:title" content="FrameRing" />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={fullImageUrl} />
        <meta property="fc:frame:button:1" content="Next FrameRing FramePage" />
        <meta property="fc:frame:post_url" content={POST_URL} />
      </Head>
      <div className={styles.container}>
        <img className={styles.ring} src={`${BASE_URL}/home/image.png`} alt="Image" />
        <div className={styles.title}>
          Join the FrameRing!<br />
          Instructions on <a href="https://github.com/riotgoools/framering">Github</a>
        </div>
        <img src={`${BASE_URL}/home/webring.gif`} alt="Image" />
      </div>
    </>
  );
}
