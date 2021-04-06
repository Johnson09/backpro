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
        <v-row justify="space-around" class="text-center mt-2 mb-2 d-flex d-sm-none">
          <v-btn-toggle
            v-model="tab"
            dense
            group
            borderless
          >
            <span class="mr-4">
              <v-badge
                overlap
                bordered
                content=5
              >
                <v-btn value="tab-1" fab top>
                  <v-icon top>
                    monetization_on
                  </v-icon>
                </v-btn>
              </v-badge>
              <br><b>Pagos</b>
            </span>

            <span class="mr-4">
              <v-badge
                overlap
                bordered
                content=4
              >
                <v-btn value="tab-2" fab top>
                  <v-icon top>
                    mail_outline
                  </v-icon>
                </v-btn>
              </v-badge>
              <br><b>Mails</b>
            </span>

            <span class="mr-4">
              <v-badge
                overlap
                bordered
                content=2
              >
                <v-btn value="tab-3" fab top>
                  <v-icon top>
                    smartphone
                  </v-icon>
                </v-btn>
              </v-badge>
              <br><b>Whatsapp</b>
            </span>

            <span>
              <v-badge
                overlap
                bordered
                content=9
              >
                <v-btn value="tab-4" fab top>
                  <v-icon top>
                    bubble_chart
                  </v-icon>
                </v-btn>
              </v-badge>
              <br><b>Txt</b>
            </span>
          </v-btn-toggle>
        </v-row>

        <!-- <v-row justify="space-around"> -->
          <v-card class="mx-auto">
            <v-tabs
              class="d-none d-sm-flex"
              v-model="tab"
              centered
              icons-and-text
              dense
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                Pagos
                <v-icon>monetization_on</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Mails
                <v-icon>mail_outline</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Whatsapp
                <v-icon>smartphone</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Txt
                <v-icon>bubble_chart</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                value="tab-1"
              >
                <v-card flat>
                  <v-card-title>
                    Pagos pendientes &nbsp;&nbsp;
                    <v-btn fab small absolute right>
                      <v-icon>search</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-simple-table
                    :search="search"
                    height="290px"
                  >
                    <template v-slot:default>
                      <tbody>
                        <tr
                          v-for="item in desserts"
                          :key="item.nombre"
                        >
                          <td>
                            <v-icon
                              color="blue"
                              fat
                            >
                              {{ item.icon }}
                            </v-icon>
                          </td>
                          <td>
                            <label>{{ item.precio }}</label>
                            <br>
                            <span>{{ item.dias }}</span>
                          </td>
                          <td>
                            <label>{{ item.poliza }}</label>
                            <br>
                            <span>{{ item.n_poliza }}</span>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-tab-item>
              <v-tab-item
                value="tab-2"
              >
                <v-card flat>
                  <v-card-text>Prueba 2</v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item
                value="tab-3"
              >
                <v-card flat>
                  <v-card-text>Prueba 3</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        <!-- </v-row> -->
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
      tab: 'tab-1',
      search: '',
      desserts: [
        {
          icon: 'attach_money',
          n_poliza: '# 00.00.0',
          dias: '30 dias',
          poliza: 'Oscar SA',
          precio: '$ 3.000.000'
        },
        {
          icon: 'attach_money',
          n_poliza: '# 1.0.1.22',
          dias: '10 dias',
          poliza: 'Vidal SA',
          precio: '$ 700.000'
        },
        {
          icon: 'attach_money',
          n_poliza: '# 22.11.22',
          dias: '15 dias',
          poliza: 'Julian SA',
          precio: '$ 300.000'
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
  }
}
</script>
