<template>
  <v-row>
    <v-col>
      <v-card flat>
        <v-card-title
          class="text-capitalize tw-border-b tw-border-gray-400 pa-lg-5"
          >Example <v-spacer></v-spacer>
          <v-btn
            color="primary"
            small
            fab
            depressed
            nuxt
            to="/admin/examples/create"
            ><v-icon>mdi-plus</v-icon></v-btn
          ></v-card-title
        >
        <v-card-text>
          <v-text-field
            v-model="search"
            :disabled="loading"
            label="Search data here"
            append-outer-icon="mdi-refresh"
            @keypress.enter="searchData()"
            @click:append-outer="getDataFromApi()"
          ></v-text-field>
          <v-data-table
            :headers="headers"
            :footer-props="footer"
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
        </v-card-text>
      </v-card>
    </v-col>
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
