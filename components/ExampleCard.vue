<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title class="text-capitalize">
          example
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            clearable
            :disabled="loading"
            single-line
            hide-details
            label="Search"
            :append-icon="searchIcon"
            @keypress.enter="searchData()"
          ></v-text-field>
        </v-card-title>
        <v-card-text>
          <v-data-table
            hide-default-footer
            :headers="headers"
            :server-items-length="totalItems"
            :items="items"
            :disable-sort="true"
            :loading="loading"
            @update:page="getDataFromApi"
          >
            <template v-slot:item="item">
              <tr>
                <td>{{ item.index + from }}</td>
                <td class="py-2">
                  <v-img :src="item.item.image" max-width="200px"></v-img>
                </td>
                <td>{{ item.item.title }}</td>
                <td>{{ item.item.description }}</td>
                <td>
                  <v-btn
                    nuxt
                    :to="'/admin/examples/edit/' + item.item.id"
                    depressed
                    fab
                    color="primary"
                    x-small
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    depressed
                    fab
                    color="error"
                    x-small
                    @click="removeItem(item.item.id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination
              v-model="page"
              circle
              :length="totalPage"
              @input="getDataFromApi"
            ></v-pagination>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Float Menu -->
    <float-menu :create="true" :create-link="'examples/create'"></float-menu>
  </v-row>
</template>

<script>
import serverSideTable from '~/mixins/serverSideTable'
import removeItem from '~/mixins/removeItem'

export default {
  mixins: [serverSideTable, removeItem],
  data() {
    return {
      headers: [
        {
          text: '#',
        },
        {
          text: 'Image',
          value: 'image',
        },
        {
          text: 'Title',
          value: 'title',
        },
        {
          text: 'Description',
          value: 'description',
        },
        {
          text: 'Action',
        },
      ],
      url: 'examples',
    }
  },
}
</script>

<style></style>
