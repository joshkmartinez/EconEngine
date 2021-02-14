import React from 'react'
import {Flex, Box} from 'rebass'
import Header from './header'
import Footer from './footer'



const Layout = ({children, noFooter = false}) => {
	return (
		<>
			<Flex
				sx={{
					flexDirection: 'column',
					minHeight: '100vh'
				}}
			>
				<Header />

				<Flex
					sx={{
						flex: 1,
						flexDirection: ['column', 'row']
					}}
				>
					<Flex
						justifyContent="center"
						sx={{
							flex: 1,
							minWidth: 0
						}}
						
					>
						<Box width={[1, 2 / 3]} px={[3, 2]}>
							{children}
						</Box>
					</Flex>
				</Flex>
				{!noFooter ? <Footer /> : null}
			</Flex>
			
		</>
	)
}

export default Layout
