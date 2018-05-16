import * as _ from 'lodash'
export const isNull = (v) => v === undefined || v === null;
export const isNonNull = (v) => !isNull(v);
export const randomEnumValue = (v) => {
	const keys = Object.keys({...v});
	const randInt =	_.random(0, keys.length - 1);
	return v[keys[randInt]];
};

export const randomKey = (v) => {
	const keys = Object.keys({...v});
	const randInt =	_.random(0, keys.length - 1);
	return keys[randInt];
};

export const makeListEnumValue = (v) => {
	const keys = Object.keys({...v});
	let ret = []
	keys.forEach((key)=>{
		ret.push({
			key:key,
			value:v[key],
			text:v[key]
		})
	})
	return ret
};

export const makeListKey = (v) => {
	const keys = Object.keys({...v});
	console.log(keys)

	let ret = []
	keys.forEach((key)=>{
		ret.push({
			key:key,
			value:key,
			text:key
		})
	})
	return ret
};
