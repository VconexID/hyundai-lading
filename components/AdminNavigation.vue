<template>
  <div>
    <!-- header -->
    <v-app-bar app flat color="white">
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><v-icon color="primary" class="mb-2">mdi-weather-partly-cloudy</v-icon>
        <span>Welcome, Admin!</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="success" v-bind="attrs" icon v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list dense outlined class="py-0 overline" max-width="150">
          <v-list-item
            v-for="(item, index) in dropdownMenu"
            :key="index"
            nuxt
            :to="item.link"
          >
            <v-list-item-title class="text-capitalize">
              <v-icon small :color="item.color" v-text="item.icon"></v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app color="blue-grey darken-4" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title py-5">
            <v-icon class="mb-1 mr-2">mdi-hammer-screwdriver</v-icon>Admin
            Dashboard
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <div v-for="(item, i) in items" :key="i">
          <!-- Non children menu -->
          <v-list-item v-if="!item.children" nuxt :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="text-capitalize"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Menu + children -->
          <v-list-group v-else :prepend-icon="item.icon" color="">
            <template v-slot:activator>
              <v-list-item-title
                class="text-capitalize"
                v-text="item.text"
              ></v-list-item-title>
            </template>
            <v-list-item
              v-for="(itemChild, indexChild) in item.children"
              :key="indexChild"
              exact
              nuxt
              :to="itemChild.link"
            >
              <v-list-item-icon>
                <v-icon v-text="itemChild.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="mt-2 text-capitalize"
                  v-text="itemChild.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        {
          text: 'examples',
          icon: 'mdi-circle',
          link: '/admin/examples',
        },
        {
          text: 'item',
          icon: 'mdi-circle',
          children: [
            {
              icon: 'mdi-circle-outline',
              link: '',
              text: 'sub-item',
            },
            {
              icon: 'mdi-circle-outline',
              link: '',
              text: 'sub-item',
            },
          ],
        },
      ],
      dropdownMenu: [
        {
          title: 'password',
          link: '/admin/change-password',
          color: 'primary',
          icon: 'mdi-key',
        },
        {
          title: 'logout',
          link: '/admin/logout',
          color: 'error',
          icon: 'mdi-power',
        },
      ],
    }
  },
}
</script>

<style></style>
