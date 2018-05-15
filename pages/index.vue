<template>  
  <SuiGrid>
    <SuiGridRow>
      <SuiContainer text>
        <p>
          <b> CryptoKitty Designer </b>
          <p> Make the kitty of your dreams </p>
          Kittens and ETH appreciated <span> @ </span>
          <SuiInput value='0x02Ee97a13e434717e3FFa12758a235D1a1680775'/>
        <p/>
      </SuiContainer>
    </SuiGridRow>
    <SuiGridRow>
      <SuiGridColumn>
        <CryptoKitty />
      </SuiGridColumn>
    </SuiGridRow>
  </SuiGrid>
</template>

<script>
import CryptoKitty from '../components/CryptoKitty'
export default {
  components:{
    CryptoKitty
  }
}
</script>
