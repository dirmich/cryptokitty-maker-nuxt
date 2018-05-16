<template>  
  <sui-grid>
    <sui-grid-row>
      <SuiContainer text>
        <p>
          <b> CryptoKitty Designer </b>
          <p> Make the kitty of your dreams </p>
          Kittens and ETH appreciated <span> @ </span>
          <SuiInput value='0x02Ee97a13e434717e3FFa12758a235D1a1680775'/>
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
  }
}
</script>
