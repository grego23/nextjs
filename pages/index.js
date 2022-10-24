import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
   <Head>
<title>Ninja List | Home </title>

   </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
<p className={styles.text}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in risus nisl. Pellentesque sit amet mauris vel libero hendrerit sollicitudin. Vestibulum sem sapien, ultricies sit amet ultricies a, fermentum vel elit. Suspendisse nisl quam, accumsan vel dolor quis, ultricies convallis leo. Phasellus in justo ac diam congue ultrices. Nullam vel orci justo. Praesent ut pretium augue. Vivamus non scelerisque nibh, sed mollis leo. In placerat urna vel imperdiet maximus. Phasellus eget suscipit sem, sit amet tincidunt diam. In ornare ipsum nisi, vel malesuada tellus interdum vel. Pellentesque consequat, diam quis elementum convallis, sem nibh ultricies risus, sit amet vulputate ex erat eget lacus. Suspendisse sagittis consectetur odio. Maecenas nibh orci, dictum ac nulla at, feugiat consectetur magna. Suspendisse potenti. Maecenas sit amet ante leo.
</p>
<p className={styles.text}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in risus nisl. Pellentesque sit amet mauris vel libero hendrerit sollicitudin. Vestibulum sem sapien, ultricies sit amet ultricies a, fermentum vel elit. Suspendisse nisl quam, accumsan vel dolor quis, ultricies convallis leo. Phasellus in justo ac diam congue ultrices. Nullam vel orci justo. Praesent ut pretium augue. Vivamus non scelerisque nibh, sed mollis leo. In placerat urna vel imperdiet maximus. Phasellus eget suscipit sem, sit amet tincidunt diam. In ornare ipsum nisi, vel malesuada tellus interdum vel. Pellentesque consequat, diam quis elementum convallis, sem nibh ultricies risus, sit amet vulputate ex erat eget lacus. Suspendisse sagittis consectetur odio. Maecenas nibh orci, dictum ac nulla at, feugiat consectetur magna. Suspendisse potenti. Maecenas sit amet ante leo.
</p>
<Link href="/ninjas" >
<a className={styles.btn}>see ninjas listing</a>
</Link>
    </div>
    </>
  )
}
