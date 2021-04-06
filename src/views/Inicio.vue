<template>
  <v-app>

    <!-- Sizes your content based upon application components -->
    <v-main>

        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <div class="d-flex flex-column justify-space-between align-center">
            <v-img height="9vh" max-width="16vh" src="../assets/BACKPRO_LOGO.png"></v-img>
            <v-img height="9vh" max-width="40vh" src="../assets/BACKPRO.png"></v-img>
          </div>
          <v-carousel
            dark
            height="405"
            delimiter-icon="mdi-circle black--text"
            show-arrows-on-hover
            hide-delimiter-background
            >
            <v-carousel-item>
              <v-sheet color="transparent" height="100%">
                <v-row class="black--text fill-height" align="center" justify="center">
                  <!-- <v-img height="100%" src="../assets/aumenta tus ventas.png"></v-img> -->
                  <v-img height="100%" src="../assets/aumenta tus ventas  compu.png"></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet color="transparent" height="100%">
                <v-row class="black--text fill-height" align="center" justify="center">
                  <v-img height="100%" src="../assets/controla tu operacion compu.png"></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
              <v-sheet color="transparent" height="100%">
                <v-row class="black--text fill-height" align="center" justify="center">
                  <v-img height="100%" src="../assets/gestiona tus negocios compu.png"></v-img>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-container>
    </v-main>

    <v-footer app class="d-lg-none d-xl-flex">
      <v-btn
        block
        text
        color="primary"
      >
        ¿Tienes una cuenta? Registrate
      </v-btn>
      <v-btn block large color="blue accent-4 white--text"> Vamos a iniciar </v-btn>
    </v-footer>
    <v-footer app class="d-none d-sm-flex">
      <v-btn
        text
        color="primary"
      >
        ¿Tienes una cuenta? Registrate
      </v-btn>
      <v-divider></v-divider>
      <v-btn
        large
        color="blue accent-4 white--text"
      >
        Vamos a iniciar
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {}
}
</script>
