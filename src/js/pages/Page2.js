import React from 'react'
import {Link} from 'react-router-dom'


const Page2 = () =>
	<div className="page">
		<div className="container">
			<h2 className="mt-5 text-center">
				This is Sample page 2. Go back to <Link to="/">Page 1</Link>
			</h2>
		</div>
	</div>

export default Page2
