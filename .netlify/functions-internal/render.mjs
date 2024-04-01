import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/arrow.svg","icons/clock.svg","icons/download.svg","icons/file.svg","loading.gif"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".gif":"image/gif"},
	_: {
		entry: {"file":"_app/immutable/start-0392c009.js","imports":["_app/immutable/start-0392c009.js","_app/immutable/chunks/index-2d8e75c0.js","_app/immutable/chunks/singletons-1e350169.js","_app/immutable/chunks/index-8ed5e2da.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/get-account",
				pattern: /^\/api\/get-account\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-account/_server.js')
			},
			{
				id: "/api/get-entry-activities",
				pattern: /^\/api\/get-entry-activities\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-entry-activities/_server.js')
			},
			{
				id: "/api/get-issues",
				pattern: /^\/api\/get-issues\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-issues/_server.js')
			},
			{
				id: "/api/get-issue",
				pattern: /^\/api\/get-issue\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-issue/_server.js')
			},
			{
				id: "/api/get-memberships",
				pattern: /^\/api\/get-memberships\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-memberships/_server.js')
			},
			{
				id: "/api/get-roles",
				pattern: /^\/api\/get-roles\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-roles/_server.js')
			},
			{
				id: "/api/get-statuses",
				pattern: /^\/api\/get-statuses\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-statuses/_server.js')
			},
			{
				id: "/api/get-time-entries",
				pattern: /^\/api\/get-time-entries\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/get-time-entries/_server.js')
			},
			{
				id: "/api/set-issue",
				pattern: /^\/api\/set-issue\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/set-issue/_server.js')
			},
			{
				id: "/api/set-time-entries",
				pattern: /^\/api\/set-time-entries\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/set-time-entries/_server.js')
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
