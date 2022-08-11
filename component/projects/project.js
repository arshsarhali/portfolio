import styles from './project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import cls from 'classnames'

const Project = ({
	title,
	tech,
	description,
	imgSrc,
	demo,
	git,
	positionRight = false,
}) => {
	return (
		<div className={styles.projectContainer}>
			<div
				className={cls(
					styles.imgWrapper,
					positionRight ? styles.imgWrapperRight : styles.imgWrapperLeft
				)}
			>
				<Link href={`${demo}`}>
					<a target='_blank' rel='noopener noreferrer'>
						<div className={styles.imgOpacity}>
							<Image
								src={imgSrc}
								width={600}
								height={507}
								layout='responsive'
								alt='Prime Clothging screenshot'
								className={styles.image}
							/>
						</div>
					</a>
				</Link>
			</div>

			<div
				className={cls(
					styles.textWrapper,
					positionRight ? styles.textWrapperLeft : styles.textWrapperRight
				)}
			>
				<h3 className={styles.header}> {title}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.tech}>{tech}</div>
			</div>
			<div
				className={cls(
					styles.icon,
					positionRight ? styles.iconLeft : styles.iconRight
				)}
			>
				<Link href={`${demo}`}>
					<a target='_blank' rel='noopener noreferrer'>
						<button className={styles.demoBtn}>Demo</button>
					</a>
				</Link>
				<Link href={`https://github.com/arshsarhali/${git}`}>
					<a target='_blank' rel='noopener noreferrer'>
						<button className={styles.gitBtn}>GitHub</button>
					</a>
				</Link>
			</div>
		</div>
	)
}
export default Project
