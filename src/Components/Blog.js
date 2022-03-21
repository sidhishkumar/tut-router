import React, { useEffect } from "react"
import Home from "./Home"

import { useParams, useLocation, Switch, Route, Redirect, useHistory, Link, useRouteMatch } from "react-router-dom"
import ".././App.css"
import EditBlog from "./EditBlog"
import ViewBlog from "./ViewBlog"
const Blog = ({ login }) => {
	const { id } = useParams()
	const param = useParams()

	const history = useHistory()
	useEffect(() => {
		if (!login) {
			history.push("/")
		}
	}, [login, history])

	const { path, url } = useRouteMatch()

	return (
		<div className="App">
			<h1>this is our Blog page</h1>
			<br />
			<br />
			{/* <Redirect to={`${false ? "/about" : "/"}`} /> */}

			{/* <h4>{`id = ${match.params.id}`}</h4> */}

			<li>
				<Link to={`${url}/editBlog`}>Edit Profile</Link>
			</li>
			<li>
				<Link to={`${url}/viewBlog`}>View Profile</Link>
			</li>

			<Switch>
				<Route path={`${path}/editBlog`}>
					<EditBlog />
				</Route>

				<Route path={`${path}/viewBlog`}>
					<ViewBlog />
				</Route>
			</Switch>
		</div>
	)
}

export default Blog
