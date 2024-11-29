import Adventure from "../components/Adventure"
import styles from "./Adventures.module.css"

const Adventures = () => {
  return (
    <section className={styles.adventures}>
      <div>
        <h1>Kalandok</h1>
        <div>
          <Adventure img="https://picsum.photos/id/1025/600/400" title="Cula" description="Exercitation voluptate laboris laboris laboris consectetur laboris eiusmod sunt dolor nostrud quis et. Cillum in culpa dolore velit cillum amet minim pariatur exercitation. Sit eu nulla pariatur do irure deserunt consectetur in velit proident. Sunt irure ipsum tempor do occaecat commodo occaecat cupidatat id. Commodo sit adipisicing do dolor cillum. Minim nisi qui proident ea anim veniam aliquip fugiat ullamco minim et."/>
        </div>
      </div>
    </section>
  )
}

export default Adventures