import Head from 'next/head'

import Header from '../components/header'

export default function Home() {
	return (
		<div>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Foods</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</Head>
			<body>
				<Header />
			</body>
		</div>
	)
}
