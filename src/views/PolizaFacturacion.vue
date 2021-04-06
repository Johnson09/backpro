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

    <v-app-bar extended dark app color="blue accent-4">
      <v-list color="transparent">
        <v-list-item class="mt-10">
          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
          <v-icon size="80">person</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">
              Oscar Vasquez
              <v-btn absolute right></v-btn>
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle-1">CC 0.00.000</v-list-item-subtitle>
            <v-list-item-subtitle class="subtitle-1">$ 0.00 total</v-list-item-subtitle>
            <v-list-item-subtitle class="subtitle-1 ml-12 grey--text">actualizado 2 feb 2020</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid class="blue-grey lighten-5">
        <v-card justify="space-around" class="mt-2 mb-2">
          <v-card-title class="subheading font-weight-bold">
            <v-avatar
              tile
              color="blue"
              class="mr-4"
              size="70"
              style="margin-top: -1em;"
            >
              <v-icon dark size="70">
                dashboard
              </v-icon>
            </v-avatar>
            <label class="subtitle-1">
              {{ poliza }}
              <br>
              <i>{{ n_poliza }}</i>
              <p class="blue--text">{{ fecha }}<b class="ml-4">{{ estado }}</b></p>
            </label>
          </v-card-title>
        </v-card>
        <v-divider></v-divider>
        <v-card height="300">
          <v-tabs
            v-model="tab"
            icons-and-text
            grow
            next-icon="mdi-arrow-right-bold-box-outline"
            prev-icon="mdi-arrow-left-bold-box-outline"
            show-arrows
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab href="#tab-1">
              Doc 1
              <v-icon>description</v-icon>
            </v-tab>

            <v-tab href="#tab-2">
              Doc 2
              <v-icon>description</v-icon>
            </v-tab>

            <v-tab href="#tab-3">
              Doc 3
              <v-icon>description</v-icon>
            </v-tab>

            <v-tab href="#tab-4">
              Doc 4
              <v-icon>description</v-icon>
            </v-tab>

            <v-tab href="#tab-5">
              Doc 5
              <v-icon>description</v-icon>
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
              v-for="i in 5"
              :key="i"
              :value="'tab-' + i"
            >
              <v-card flat>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
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
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      poliza: 'Oscar S.A',
      n_poliza: '# 22.11.33',
      estado: 'Activo',
      fecha: '30/Marzo/2021',
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
  },
  computed: {
  },
  methods: {
  }
}
</script>
