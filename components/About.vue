<template>
  <sui-container>
    <sui-grid>
      <sui-grid-column :width="5">
        <sui-grid-row style="{ height:300 }">
          <crypto-kitty
            :body="body"
            :mouth="mouth"
            :eye="eye"
            :pattern="pattern"
            :colors="colors"
          />
        </sui-grid-row>
      </sui-grid-column>
      <sui-grid-column :width="10">
        <sui-grid-row>
          <sui-button color="red" content="Random Kitty" icon="random" @click="randomKitty()" />
          <sui-button color="blue" content="Search Kitty" icon="search" @click="searchKitty()" />
        </sui-grid-row>
        <sui-grid-row >
          <sui-label>Body
            <sui-dropdown
              :options="bodyList"
              selection
              v-model="body"
            />
          </sui-label>
          <sui-label>Pattern
            <sui-dropdown
              :options="patternList"
              selection
              v-model="pattern"
            />
          </sui-label>
          <sui-label>Eyes
            <sui-dropdown
              :options="eyeList"
              selection
              v-model="eye"
            />
          </sui-label>
          <sui-label>Mouth
            <sui-dropdown
              :options="mouthList"
              selection
              v-model="mouth"
            />
          </sui-label>
          <sui-label>Primary Color
            <sui-dropdown
              :options="primaryList"
              selection
              v-model="primary"
            />
          </sui-label>
          <sui-label>Secondary
            <sui-dropdown
              :options="secondaryList"
              selection
              v-model="secondary"
            />
          </sui-label>
          <sui-label>Tertiary
            <sui-dropdown
              :options="tertiaryList"
              selection
              v-model="tertiary"
            />
          </sui-label>
          <sui-label>Eye Color
            <sui-dropdown
              :options="eyeColorList"
              selection
              v-model="eyeColor"
            />
          </sui-label>
        </sui-grid-row>
      </sui-grid-column>
    </sui-grid>
  </sui-container>
</template>

<script>
const c = require('../utils/colors')
const t = require('../utils/types')
import { randomKey, randomEnumValue, makeListEnumValue, makeListKey } from '../utils/utils'
import CryptoKitty from '../components/CryptoKitty'
export default {
  components:{
    CryptoKitty
  },
  beforeCreate() {
    this.bodyList = makeListEnumValue(t.BodyType);
    this.eyeList = makeListEnumValue(t.EyeType);
    this.eyeColorList = makeListKey(c.EyeColor);
    this.mouthList = makeListEnumValue(t.MouthType);
    this.patternList = makeListEnumValue(t.PatternType);
    this.primaryList = makeListKey(c.Primary);
    this.secondaryList = makeListKey(c.Secondary);
    this.tertiaryList = makeListKey(c.Tertiary);

  },
  data() {
    return {
      body: randomEnumValue(t.BodyType),
      eye: randomEnumValue(t.EyeType),
      eyeColor: randomKey(c.EyeColor),
      mouth: randomEnumValue(t.MouthType),
      pattern: randomEnumValue(t.PatternType),
      primary: randomKey(c.Primary),
      secondary: randomKey(c.Secondary),
      tertiary: randomKey(c.Tertiary),
    }
  },
  computed: {
    colors() {
      return [
        c.Primary[this.primary],
        c.Secondary[this.secondary],
        c.Tertiary[this.tertiary],
        c.EyeColor[this.eyeColor]
      ]
    }
  },
  methods: {
    randomKitty() {
      this.body = randomEnumValue(t.BodyType)
      this.eye = randomEnumValue(t.EyeType)
      this.eyeColor = randomKey(c.EyeColor)
      this.mouth = randomEnumValue(t.MouthType)
      this.pattern = randomEnumValue(t.PatternType)
      this.primary = randomKey(c.Primary)
      this.secondary = randomKey(c.Secondary)
      this.tertiary = randomKey(c.Tertiary)      
    },
    searchKitty() {
      const { body, pattern, eye, mouth, primary, secondary, tertiary, eyeColor } = this;
      const searchUrlStr = [body, pattern, eye, mouth, primary, secondary].join('%20');
      const kittyFindUrl = `https://www.cryptokitties.co/marketplace/sale?search=${searchUrlStr}`;
      // const openKittyUrl = () => {
        window.open(kittyFindUrl, '_blank');
      // };
    }
  }
}

</script>
