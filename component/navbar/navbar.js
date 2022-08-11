import Link from 'next/link'
import styles from './navbar.module.css'

const NavBar = () => {
	return (
		<div className={styles.container}>
			<ul>
				<Link href='#main'>
					<li>Home</li>
				</Link>
				<Link href='#project'>
					<li>Projects</li>
				</Link>
				<Link href='#contact'>
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	)
}

export default NavBar
