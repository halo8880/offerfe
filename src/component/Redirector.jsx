import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from './dashboard/MainLayout';
import StaticPageLayout from './static-page/StaticPageLayout';
import * as util from './Util';
import Term from "./dashboard/static-pages/Term";
import Privacy from "./dashboard/static-pages/Privacy";
import ContactUs from "./dashboard/static-pages/ContacUs";
import AboutUs from "./dashboard/static-pages/AboutUs";

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
			<Route path="/static/privacy" exact>
				<Privacy/>
			</Route>
			<Route path="/static/term" exact>
				<Term/>
			</Route>
			<Route path="/static/contact-us" exact>
				<ContactUs/>
			</Route>
			<Route path="/static/about-us" exact>
				<AboutUs/>
			</Route>
			<Route path="/" component={StaticPageLayout}/>
		</Switch>
	</BrowserRouter>
}
