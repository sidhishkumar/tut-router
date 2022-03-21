import { Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Home from "./Components/Home"
import NotFound from "./Components/NotFound"
import { useState } from "react"

function App() {
	const [login, setLogin] = useState()

	const handleClick = () => {
		setLogin(!login)
	}

	return (
		<>
			<Header />
			<br />
			<div className="App">
				<button onClick={handleClick} style={{ width: "200px", padding: "5px" }}>
					{login ? "log out" : "login"}
				</button>
			</div>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />

				<Route path="/blog">
					<Blog login={login} />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</>
	)
}

export default App
