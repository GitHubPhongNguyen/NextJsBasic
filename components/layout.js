import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Him98';
export const siteTitle = 'Bloger Him98';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Đây là blog cá nhân của Him98." />
        <meta property="og:image" content={`/images/profile.jpg`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Đây là blog cá nhân của Him98.</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={120}
              width={120}
              alt={name}
            />
            <h1 className={'text-2xl font-extrabold tracking-widest text-slate-900'}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={'rounded-bl-full'}
                  height={100}
                  width={100}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}
        <div className="block ml-auto mr-auto mb-6 mt-4">
          <ul className={'list-none grid grid-cols-3 gap-4'}>
            <li>
              <Link href={'https://www.facebook.com/nguyenvanphong5998'}>
                <a target="_blank" className={'text-slate-900 text-sm font-medium'}>facebook</a>
              </Link>
            </li>
            <li>
              <Link href={'https://www.youtube.com/channel/UCKvcAy7oZlTbfY5Krf1EhnQ'}>
                <a target="_blank" className={'text-slate-900 text-sm font-medium'}>youtube</a>
              </Link>
            </li>
            <li>
              <Link href={'https://www.facebook.com/nguyenvanphong5998'}>
                <a target="_blank" className={'text-slate-900 text-sm font-medium'}>instagram</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Quay lại danh sách bài viết</a>
          </Link>
        </div>
      )}
    </div>
  );
}
