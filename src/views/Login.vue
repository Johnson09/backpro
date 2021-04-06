<template>
  <div class="fondo">
    <v-container>
      <v-layout>
        <v-flex text-center md4 xs12 sm12></v-flex>
        <v-flex text-center md4 xs12 sm12>
          <v-card color="white" shaped>
            <v-card-title class="d-flex flex-column justify-space-between align-center">
              <v-img height="26vh" max-width="35vh" src="../assets/BACKPRO_LOGO.png"></v-img>
              <v-img height="9vh" src="../assets/BACKPRO.png"></v-img>
            </v-card-title>

            <v-card-text align="center">
              <form @submit.prevent="Login">
                <v-text-field
                  label="Usuario"
                  placeholder="Usuario"
                  type="text"
                  outlined
                  prepend-inner-icon="mdi-account-circle indigo--text"
                  class="ml-2 mr-2 campo"
                  v-model="formuario.usuario"
                  required
                ></v-text-field>

                <v-text-field
                  label="Contraseña"
                  placeholder="Contraseña"
                  type="password"
                  outlined
                  prepend-inner-icon="mdi-lock indigo--text"
                  class="ml-2 mr-2"
                  required
                  v-model="formuario.password"
                ></v-text-field>

                <v-switch
                  class="ml-4 mt-1"
                  inset
                  label="Recordarme"
                ></v-switch>

                <v-snackbar
                  v-model="snackbar"
                  class="ml-2 mr-2"
                  :timeout="timeout"
                  :value="true"
                  color="error"
                  absolute
                  rounded="pill"
                >
                  {{ texto_login }}
                </v-snackbar>

                <v-btn
                  x-large
                  block
                  elevation="2"
                  dark
                  color="blue-grey darken-1"
                  type="submit"
                  class="mb-4"
                  :loading="estado"
                >
                  <v-icon left>mdi-send</v-icon>
                  Iniciar
                </v-btn>
                <div>
                  <a href="" left>¿Olvidó la contraseña?</a>
                  <v-btn text right>
                    Registrarse
                  </v-btn>
                </div>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex text-center md4 xs12 sm12> </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      formuario: {
        usuario: '',
        password: ''
      },
      estado: false,
      texto_login: '',
      snackbar: false,
      timeout: 3000
    }
  }
}
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100vh;
  /* background-image: url("../assets/BACKPRO.png"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 0px;
  margin: 0px;
}
.campo:focus{
  outline: none !important;
}
</style>
