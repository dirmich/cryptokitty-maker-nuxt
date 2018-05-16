let map = null;
let initialized = false;
let loading=false
import { BodyType, PatternType, EyeType, MouthType } from './types'

export const Genes = async () => {
	if (initialized === true) {
		return map;
	}
	let map = {};
	for (const b in BodyType) {
		for (const p in PatternType) {
      const svg = await fetch(`cattributes/body/${b}-${p}.svg`);
			let text = await svg.text()
			map[`${b}-${p}`] = text.replace(/<\?xml .*\?>/, '')
														.replace(/<!-- .*-->/,'')
		}
	}

	for (const et in EyeType) {
		const svg = await fetch(`cattributes/eye/${et}.svg`);
		let text = await svg.text()
		// map[`${et}`] =  await svg.text();
		map[`${et}`] = text.replace(/<\?xml .*\?>/, '')
		.replace(/<-- .*-->/,'')
	}

	for (const mt in MouthType) {
		const svg = await fetch(`cattributes/mouth/${mt}.svg`);
		let text = await svg.text()
		map[`${mt}`] = text.replace(/<\?xml .*\?>/, '')
		.replace(/<-- .*-->/,'')
	}
	// console.log('gene:',map)
	initialized = true;
	return map;
}