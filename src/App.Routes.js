/**
 * Created by maxcher on 21/04/2017.
 */
import React from "react";
import {Route, Switch} from "react-router-dom";
import Game from "./game/game";
import Home from "./Home";
import Settings from "./settings/Settings";
import NotFound from "./shared/notFound";

let routes = (
	<div>
		<Switch>
			<Route name="home" exact path="/" component={Home}/>
			<Route name="game" path="/game" component={Game}/>
			<Route name="settings" path="/settings" component={Settings}/>
			{/*/!*<Route name="instructions" path="/instructions" component={Instructions} />*!/ //@todo Max - */}
			{/*<Route name="highScore" path="/highScore" component={Highscore} />*/}
			<Route component={NotFound}/>
		</Switch>
	</div>
);

module.exports = routes;