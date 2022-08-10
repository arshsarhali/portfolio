import styles from './home.module.css'

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.textWrapper}>
					<span className={styles.text1}>Hi, my name is</span>
					<br />
					<span className={styles.text2}> Arshdeep Sandhu </span>
					<br />
					<span className={styles.text3}>I&apos;m a Web Devloper</span>
					<br />
					<span className={styles.text4}>
						specialized in
						<br />
						HTML,CSS
						<br />
						Node, React, NextJs
					</span>
				</div>
				<div className={styles.squareRight}>
					<div className={styles.squareRight2} />
				</div>
			</div>
		</div>
	)
}

export default MainPage
