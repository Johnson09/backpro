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
          outlined
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
      <v-flex text-left>
        <v-toolbar-title>
          <v-icon>home</v-icon>
          Dashboard
        </v-toolbar-title>
      </v-flex>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <v-item-group active-class="primary">
          <v-container>
            <v-row>
              <v-col
                v-for="modulo in modulos"
                :key="modulo.title"
                sm="1"
                cols="6"
                md="3"
              >
                <v-item>
                  <v-card
                    class="d-flex align-center"
                    dark
                    color="white"
                    height="150"
                  >
                    <div
                      class="black--text flex-grow-1 text-center"
                    >
                      <v-icon
                        large
                        color="blue darken-4"
                      >
                        {{modulo.icon}}
                      </v-icon>
                      <br>
                      <label>{{modulo.title}}</label>
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
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
      usuario_login: '',
      usuario_correo: '',
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
