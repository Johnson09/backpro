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
        <v-card justify="space-around" class="text-center mt-2 mb-2" color="transparent">
          <v-data-iterator
            :items="itemss"
            :items-per-page.sync="itemsPerPage"
            :page.sync="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar
                dark
                color="blue darken-3"
                class="mb-1"
              >
                <v-text-field
                  v-model="search"
                  clearable
                  flat
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Buscar"
                ></v-text-field>
              </v-toolbar>
            </template>

            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.poliza"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <v-card>
                    <v-card-title class="subheading font-weight-bold">
                      <v-avatar
                        tile
                        color="blue"
                        class="mr-2"
                        style="margin-top: -0.7em"
                      >
                        <v-icon dark>
                          mdi-alarm
                        </v-icon>
                      </v-avatar>
                      <label class="mr-4">
                        {{ item.poliza }}
                        <p class="subtitle-1">{{ item.n_poliza }}</p>
                      </label>
                      <span>
                        <b class="blue--text">{{ item.estado }}</b>
                        <p class="subtitle-1">{{ item.fecha }}</p>
                      </span>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-simple-table>
                        <tbody>
                          <tr>
                            <td>
                              <label class="mr-10">
                                Ver todas los gestiones
                              </label>
                            </td>
                            <td>
                              <v-btn fab small>
                                <v-icon>
                                  keyboard_arrow_right
                                </v-icon>
                              </v-btn>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label class="mr-10">
                                Ver todos los documentos
                              </label>
                            </td>
                            <td>
                              <v-btn fab small>
                                <v-icon>
                                  keyboard_arrow_right
                                </v-icon>
                              </v-btn>
                            </td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row
                class="mt-2 mb-10"
                align="center"
                justify="center"
              >
                <span
                  class="mr-4
                  grey--text"
                >
                  Pagina {{ page }} de {{ numberOfPages }}
                </span>
                <v-btn
                  fab
                  dark
                  small
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  small
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
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
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 3,
      sortBy: 'poliza',
      itemss: [
        {
          poliza: 'Oscar S.A',
          n_poliza: '# 22.11.33',
          estado: 'Activo',
          fecha: '30/marzo/2021'
        },
        {
          poliza: 'David S.A',
          n_poliza: '# 11.00.22',
          estado: 'Inactivo',
          fecha: '30/marzo/2021'
        }
      ],
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
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    }
  }
}
</script>
