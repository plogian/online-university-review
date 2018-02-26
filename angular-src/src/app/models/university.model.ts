export interface University {
	_id?: string,
	name: string,
	city: string,
	state: string,
	country: string,
	language: [string],
	studentBody: number,
	website: string,
	majors: [string]
}