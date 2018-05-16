<template>  
  <sui-grid>
    <sui-grid-row>
      <SuiContainer text>
        <p>
          <b> CryptoKitty Maker </b>
          <p> Make the kitty of your dreams </p>
          <p> Inspired from <b>https://github.com/BytesForBites/cryptokitty-designer</b></p>
        <p/>
      </SuiContainer>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <about />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import About from '../components/About'

export default {
  components:{
    About
  },

  asyncData({store, route}) {
    return store.dispatch('loadGene')
  },
}
</script>
