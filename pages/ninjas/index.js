
import styles from  '../../styles/Ninjas.module.css';
import Link from 'next/link';
export const getStaticProps = async() =>{

    const  res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await res.json();
    return {
        props : { ninjas: data }

    }
}

const Index = ({ninjas}) => {
    return ( 
         <>
    <h2>test ninja list</h2>
    {ninjas.map(ninja=>(
        <Link href={'/ninjas/' + ninja.id } key={ninja.id}>
            <a  className={styles.single}> 
            <h2>{ninja.name}  </h2>
             </a>

        </Link>

    ))}
    </>
    );
}
 
export default Index;