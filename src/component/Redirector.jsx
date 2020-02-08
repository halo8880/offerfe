import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from './dashboard/MainLayout';
import StaticPageLayout from './static-page/StaticPageLayout';
import StaticPage from "./dashboard/static-pages/Term";
import * as util from './Util';

export default function Redirector() {
	const refBy = util.getRefByFromQueryString();
	if (refBy) {
		util.createCookie("refBy", refBy, 14);
	}
	return <BrowserRouter>
		<Switch>
			<Route path="/in">
				<MainLayout/>
			</Route>
			<Route path="/static">
				<StaticPageLayout/>
			</Route>
			<Route path="/" component={StaticPageLayout}/>
		</Switch>
	</BrowserRouter>
}
