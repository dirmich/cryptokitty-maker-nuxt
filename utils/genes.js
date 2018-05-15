let map = null;
let initialized = false;
import { BodyType, PatternType, EyeType, MouthType } from './types'

export const Genes =  ()=> {
	if (initialized === true) {
		return map;
	}
	let map = {};
	for (const b in BodyType) {
		for (const p in PatternType) {
      // const svg = await fetch(`src/cattributes/body/${b}-${p}.svg`);
      const svg = require(`~/static/cattributes/body/${b}-${p}.svg`)
			map[`${b}-${p}`] = svg; //await svg.text();
		}
	}

	for (const et in EyeType) {
		// const svg = await fetch(`src/cattributes/eye/${et}.svg`);
    const svg = require(`~/static/cattributes/eye/${et}.svg`)
		map[`${et}`] = svg;// await svg.text();
	}

	for (const mt in MouthType) {
		// const svg = await fetch(`src/cattributes/mouth/${mt}.svg`);
		const svg = require(`~/static/cattributes/mouth/${mt}.svg`);
		map[`${mt}`] = svg;// await svg.text();
	}
	initialized = true;
	return map;
}