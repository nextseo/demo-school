<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >
    </v-navigation-drawer> -->

    <MenuHomeVue  />

    
    <v-main>
      <!--  -->
      
        <router-view></router-view>
      
    </v-main>
  </v-app>
</template>

<script>
import MenuHomeVue from './components/MenuHome.vue';
export default {
  components: {
    MenuHomeVue
  },
  data() {
    return {
      drawer: true,
      // items: [
      //   { title: 'หน้าแรก', icon: 'mdi-view-dashboard' },
      //   { title: 'ข้อมูลพื้นฐาน', icon: 'mdi-image' },
      //   { title: 'About', icon: 'mdi-help-box' },
      // ],
      right: null,
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap');

.theme--light.v-application {
  font-family: 'Kanit', sans-serif;
}
</style>