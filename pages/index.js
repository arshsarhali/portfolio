import Head from 'next/head'
import NavBar from '../component/navbar/navbar'
import MainPage from '../component/home/home'
import Project from '../component/projects/project'
import styles from '../styles/HomePage.module.css'
import Contact from '../component/contact/contact'
import Footer from '../component/footer/footer'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Arshdeep Sandhu</title>
				<meta name='description' content='Arshdeep Sandhu Portfolio' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<NavBar />
			<span id='main' />
			<MainPage />
			<h2 className={styles.title} id='project'>
				Projects
			</h2>
			<div className={styles.projectWrapper}>
				<Project
					title='Netflix Clone'
					description='A Netflix clone that uses Magic.link to login users, Hasura as database and Youtube API to fetch videos from Youtube.'
					tech='NextJS, Hasura, Magic.link, Youtube API'
					imgSrc='/static/flick_next.jpg'
					demo='https://flicknext-clone.arshsandhu.com/'
					git='netflix-clone'
					positionRight={false}
				/>
				<Project
					title='Prime Clothing'
					description='An online clothing store build using Stripe as payment method, Firebase as database and Login.'
					tech='ReactJS, Redux, Firebase, Stripe'
					imgSrc='/static/prime-clothing.jpg'
					demo='https://prime-clothing.arshsandhu.com/'
					git='prime-clothing'
					positionRight={true}
				/>

				<Project
					title='NASA Mission'
					description='NASA Mission control fetch the present and future SpaceX mission and also allow user to add new mission.'
					tech='NodeJS, Express, ReactJS, MongoDB, SpaceX API'
					imgSrc='/static/nasa-project.jpg'
					demo='https://nasa-mission.arshsandhu.com/'
					git='nasa-project'
					positionRight={false}
				/>

				<Project
					title='Nearby Coffee Shops'
					description='Helps in find nearby coffee stores using location and also show Vancouver downtown stores as default.'
					tech='NextJs, FourSquare API, Airtable API, Unsplash API'
					imgSrc='/static/coffee-finder.jpg'
					demo='https://coffee-stores.arshsandhu.com/'
					git='coffee-store-finder'
					positionRight={true}
				/>

				<Project
					title='Monster Search'
					description='A collection of mosters with search field to sort monsters based on search.'
					tech='ReactJS'
					imgSrc='/static/rolodex-monster.jpg'
					demo='https://monster-rolodex.arshsandhu.com/'
					git='monster-rolodex'
					positionRight={false}
				/>
			</div>
			<div className={styles.contactWrapper}>
				<h2 className={styles.title} id='contact'>
					Contact
				</h2>
				<Contact />
			</div>
			<Footer />
		</div>
	)
}
