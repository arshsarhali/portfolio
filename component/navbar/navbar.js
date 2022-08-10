import styles from './navbar.module.css'

const NavBar = () => {
	return (
		<div className={styles.container}>
			<ul>
				<li>Home</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</div>
	)
}

export default NavBar
