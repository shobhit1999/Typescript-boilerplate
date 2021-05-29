// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IDispatcherType = any; // eslint-disable-line @typescript-eslint/explicit-module-boundary-types

export interface ILinkConfig {
	text: string;
	Icon?: React.FC;
	href?: string;
	sublist?: Array<ILinkConfig>;
	permission?: string | Array<string>;
}

export interface IError {
	name: string;
	message: string;
	code: string;
	stack: string;
	data?: unknown;
}
