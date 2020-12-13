import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  // const allPostsData = await getSortedPostsData() fetch用
  const allPostsData =  getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            {/* fetch用
            <li className={utilStyles.listItem} key={allPostsData.query.pages["128948"].id}>
              {allPostsData.query.pages["128948"].title}
              <br />
              {allPostsData.query.pages["128948"].pageid}
              <br />
              {allPostsData.query.pages["128948"].touched}
            </li> */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
