<template>
  <sui-container :style="style.relative">
    <div :style="style.absolute" v-if="nullkitty">
      <img :style="style.fixed" :src="imgKitty"/>
    </div>
    <div :style="style.absolute" v-else>
      <div :style="style.fixed" v-html="kittyImage"/>
      <div :style="style.fixed" v-html="kittyMouth"/>
      <div :style="style.fixed" v-html="kittyEye"/>
    </div>
  </sui-container>
</template>

<script>
const c = require('../utils/colors')
const t = require('../utils/types')
import { Genes } from '../utils/genes'
import { isNonNull, randomEnumValue } from '../utils/utils'
import { mapGetters } from 'vuex'
export default {
  props: {
    body: {
      type: String,
      default: 'chartreux'
    },
    pattern: {
      type: String,
      default: 'totesbasic'
    },
    mouth: {
      type: String,
      default: 'gerbil'
    },
    eye: {
      type: String,
      default: 'googly'
    },
    colors: {
      type: Array,
      default: ()=>[c.Primary.chartreux, c.Secondary.totesbasic, c.Tertiary.gerbil, c.EyeColor.googly]
    },    
  },  
  data() {
    return {
      imgKitty: '/cattributes/nullcat.svg',
      style: {
        fixed: { position: 'absolute', top: 0, left: 0, height: "300px", width: "300px" },
        absolute: {  position: 'absolute' },
        relative: {  position: 'relative' }
      }
    }
  },
  computed: {
    nullkitty() {
      return this.kittyImage === null || this.kittyMouth === null || this.kittyEye === null
    },
    kittyImage() {
      const currtype = this.body+'-'+this.pattern      
      const currColor = this.colors
      let ret=this.gene[currtype];
      if (typeof ret==='undefined') {
        return null
      }
      const color = this.detectKittyColors(ret);
      if (isNonNull(color[0])) {
        ret = ret.replace(new RegExp(c.Primary[color[0]],"g"), this.colors[0]);
      }
      if (isNonNull(color[1])) {
        ret = ret.replace(new RegExp(c.Secondary[color[1]],"g"), this.colors[1]);
      }
      if (isNonNull(color[2])) {
        ret = ret.replace(new RegExp(c.Tertiary[color[2]],"g"), this.colors[2]);
      }
      return ret;
    },
    kittyMouth() {
      const currtype = this.mouth
      const currColor = this.colors
      let ret=this.gene[currtype];
      if (typeof ret==='undefined') {
        return null
      }
      const color = this.detectKittyColors(ret);
      if (isNonNull(color[0])) {
        ret = ret.replace(new RegExp(c.Primary[color[0]],"g"), this.colors[0]);
      }
      return ret
    },
    kittyEye() {
      const currtype = this.eye
      const currColor = this.colors
      let ret=this.gene[currtype];
      if (typeof ret==='undefined') {
        return null
      }
      const color = this.detectKittyColors(ret);
      if (isNonNull(color[3])) {
        ret = ret.replace(new RegExp(c.EyeColor[color[3]],"g"), this.colors[3]);
      }
      return ret
    },
    ...mapGetters({
      gene:'gene'
    })
  },
  methods: {
    detectKittyColors(svgText) {
      const colors = [null, null, null, null];
      for (const color in c.Primary) {
        if (svgText.indexOf(c.Primary[color]) > -1) {
          colors[0] = color;
        }
      }
      for (const color in c.Secondary) {
        if (svgText.indexOf(c.Secondary[color]) > -1) {
          colors[1] = color;
        }
      }
      for (const color in c.Tertiary) {
        if (svgText.indexOf(c.Tertiary[color]) > -1) {
          colors[2] = color;
        }
      }

      for (const color in c.EyeColor) {
        if (svgText.indexOf(c.EyeColor[color]) > -1) {
          colors[3] = color;
        }
      }
      return colors;
    }
  }
}
</script>
<style scoped>

</style>
