import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Trang chủ | Him98</title>
        <meta name="description" content="Đây là blog cá nhân của Him98." />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={'text-2xl mb-4'}>Bài viết</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={'text-gray-900 font-bold hover:text-slate-900'}>
                  {title}
                </a>
              </Link>
              <br />
              <small className={'font-normal text-gray-600 block mb-1'}>
                <Date dateString={date} />
              </small>
              <div className={'mb-4'}>
                <ul className={'list-none flex flex-wrap gap-2 sm:gap-2 text-sm'}>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#hashTag1</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={`${utilStyles.linkHashTag}`}>
                      <small>#hash</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#ha</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#hashTag4988</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#h</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#Ta</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#hashTa</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#hhTag3</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#hashT4</small>
                    </a>
                  </li>
                  <li>
                    <a href={'#'} className={utilStyles.linkHashTag}>
                      <small>#has</small>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className={
                  'relative overflow-hidden w-full h-80 shadow-lg rounded-lg'
                }
              >
                <Image
                  src={thumbnail}
                  alt="Picture of the author"
                  width={300}
                  height={300}
                  layout="fill"
                  className={'object-cover'}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
