<template>
  <div class="">
    <h1 class="text-center pa-md-4">หน้าแรก</h1>

    <v-container class="grey lighten-5">
      <v-row >
        <v-col>
          <v-card class="pa-2 d-flex align-center justify-center" outlined tile>
            <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"
              src="https://picsum.photos/id/11/500/300"  contain></v-img>
          </v-card>
        </v-col>
        <v-col v-for="item in 5" :key="item">
          <v-card class="pa-2 d-flex align-center justify-center" outlined tile>
            <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="150" max-width="250"
              src="https://picsum.photos/id/11/500/300"></v-img>
          </v-card>
        </v-col>

      </v-row>
    </v-container>


  </div>
</template>

<script>

export default {
  name: 'Home',

  components: {
  },
}
</script>
