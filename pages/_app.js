import Head from 'next/head'
import React from 'react'
import {ThemeProvider} from 'theme-ui'
import theme from '../lib/theme'

const MyApp = ({Component, pageProps}) => {
	return (
		<html lang="en">
			<Head>
				<title>EconEngine</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="EconEngine is a search engine for financial assistance resources during the COVID-19 pandemic."
				/>
				<meta property="og:image" content="/logo.png" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</html>
	)
}

export default MyApp
