import React from "react"
import { Link } from "react-router-dom"
import ".././App.css"
const Header = () => {
	return (
		<div>
			<ul className="Nav">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
