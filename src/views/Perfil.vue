<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title" link>
            <template>
              <v-list-item-icon>
                <v-icon color="blue darken-4">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon color="grey lighten-1">chevron_right</v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
        <br>
        <v-text-field
          class="ml-8 mr-8"
          dense
          solo
          label="Powered by"
          value="Inception company"
          hint="Version 2.0"
          persistent-hint
          disabled
        >
        </v-text-field>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense dark app color="blue accent-4">
      <v-row
        align="center"
        class="spacer"
        no-gutters
      >
        <v-col
          class="d-flex d-sm-none"
          cols="4"
          xs="1"
          sm="2"
          md="1"
        >
          <strong v-html="name_login"></strong>
        </v-col>
        <v-col
          class="d-flex d-sm-none"
          cols="4"
          xs="1"
          sm="2"
          md="1"
        >
          <span
            class="grey--text mt-2 mr-2"
          >
            {{ usuario_correo }}
          </span>
          <v-avatar
            size="40px"
          >
            <img
              alt="Avatar"
              src="https://randomuser.me/api/portraits/men/78.jpg"
            >
          </v-avatar>
        </v-col>

        <v-col
          class="d-none d-sm-flex"
          cols="4"
          xs="1"
          sm="2"
          md="1"
        >
          <v-avatar
            size="36px"
          >
            <img
              alt="Avatar"
              src="https://randomuser.me/api/portraits/men/78.jpg"
            >
          </v-avatar>
        </v-col>

        <v-col
          class="d-none d-sm-flex"
          xs="1"
          sm="5"
          md="3"
        >
          <strong v-html="usuario_login"></strong>
          <span
            class="grey--text"
          >
            &nbsp;({{ usuario_correo }})
          </span>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid class="blue-grey lighten-5">
        <v-row dense class="mt-2 mb-10">
          <v-col
            md="6"
          >
            <v-card
              class="mx-auto"
              height="450"
            >
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Registro Información
                      <v-icon color="green" style="float: right;" class="d-flex d-sm-none">
                        create
                      </v-icon>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-account-circle
                      </v-icon>
                      &nbsp; <b> Nombre completo</b>
                    </label>
                    <v-text-field
                      placeholder="Nombre"
                      type="text"
                      solo
                      dense
                      class="ml-2 mr-2"
                      :value="usuario_login"
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-email
                      </v-icon>
                      &nbsp; <b> Correo Electronico</b>
                    </label>
                    <v-text-field
                      placeholder="Correo Electronico"
                      type="text"
                      solo
                      dense
                      class="ml-2 mr-2"
                      :value="usuario_correo"
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-lock
                      </v-icon>
                      &nbsp; <b> Nueva contraseña</b>
                    </label>
                    <v-text-field
                        placeholder="Contraseña"
                        type="password"
                        solo
                        dense
                        class="ml-2 mr-2"
                        required
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-lock
                      </v-icon>
                      &nbsp; <b> Confirmar Nueva Contraseña</b>
                    </label>
                    <v-text-field
                        placeholder="Confirmar Contraseña"
                        type="password"
                        solo
                        dense
                        class="ml-2 mr-2"
                        required
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions style="margin-top: -1em;" class="d-none d-sm-flex">
                <v-btn
                  absolute
                  right
                >
                  Guardar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            md="6"
          >
            <v-card
              class="mx-auto"
              height="450"
            >
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      Profesional Información
                      <v-icon color="green" style="float: right;" class="d-flex d-sm-none">
                        create
                      </v-icon>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-account-circle
                      </v-icon>
                      &nbsp; <b> Dato adicional 1</b>
                    </label>
                    <v-text-field
                      placeholder="Nombre"
                      type="text"
                      solo
                      dense
                      class="ml-2 mr-2"
                      :value="usuario_login"
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-email
                      </v-icon>
                      &nbsp; <b> Dato adicional 2</b>
                    </label>
                    <v-text-field
                      placeholder="Correo Electronico"
                      type="text"
                      solo
                      dense
                      class="ml-2 mr-2"
                      :value="usuario_correo"
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-lock
                      </v-icon>
                      &nbsp; <b> Dato adicional 3</b>
                    </label>
                    <v-text-field
                        placeholder="Contraseña"
                        type="password"
                        solo
                        dense
                        class="ml-2 mr-2"
                        required
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item style="margin-top: -2em">
                  <v-list-item-content>
                    <label>
                      <v-icon color="green">
                        mdi-lock
                      </v-icon>
                      &nbsp; <b> Dato adicional 4</b>
                    </label>
                    <v-text-field
                        placeholder="Confirmar Contraseña"
                        type="password"
                        solo
                        dense
                        class="ml-2 mr-2"
                        required
                    ></v-text-field>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions style="margin-top: -1em;" class="d-none d-sm-flex">
                <v-btn
                  absolute
                  right
                >
                  Actualizar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app dense>
      <v-bottom-navigation
        absolute
        color="blue darken-4"
        shift
      >
        <v-btn>
          <span>Home</span>

          <v-icon color="blue accent-4">mdi-home</v-icon>
        </v-btn>

        <v-btn>
          <span>Clientes</span>

          <v-icon color="blue accent-4">mdi-account</v-icon>
        </v-btn>

        <v-btn>
          <span>Solicitudes</span>

          <v-icon color="blue accent-4">library_books</v-icon>
        </v-btn>

        <v-btn>
          <span>Configuración</span>

          <v-icon color="blue accent-4">settings</v-icon>
        </v-btn>

        <v-btn
          @click.stop="drawer = !drawer"
        >
          <span>Más</span>
          <v-icon color="blue accent-4">more_horiz</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      // Token
      dialog: false,
      token: '',
      datos: {
        id_perfil: '1',
        id_modulo: '1'
      },
      // Datos usuarios
      usuario_login: 'Oscar Vasquez',
      name_login: 'Oscar',
      usuario_correo: 'omvasquez@gmail.com',
      perfil_usuario: '',
      menu_modulos: [],
      drawer: null,
      items: [
        { title: 'Mi perfil', icon: 'account_box' },
        { title: 'Cartera', icon: 'account_balance_wallet' },
        { title: 'Renovación', icon: 'create_new_folder' },
        { title: 'Facturación', icon: 'receipt' },
        { title: 'Solicitudes', icon: 'library_books' },
        { title: 'Configuración', icon: 'settings' },
        { title: 'Soporte', icon: 'live_help' },
        { title: 'Politica privacidad', icon: 'policy' },
        { title: 'Salir', icon: 'power_settings_new' }
      ],
      modulos: [
        { title: 'Total polizas', icon: 'account_box' },
        { title: 'Total clientes', icon: 'account_balance_wallet' },
        { title: 'Total primas', icon: 'create_new_folder' },
        { title: 'Renovados', icon: 'receipt' },
        { title: 'Nuevos clientes', icon: 'library_books' },
        { title: 'Indicadores', icon: 'settings' }
      ]
    }
  }
}
</script>
