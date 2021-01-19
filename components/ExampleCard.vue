<template>
  <div>
    <!-- Dealer Table -->
    <v-row>
      <v-col>
        <v-card class="tw-border tw-border-gray-400 tw-shadow-xl" tile>
          <v-data-table
            :headers="headers"
            :server-items-length="totalItems"
            :items="items"
            :loading="loading"
            calculate-widths
            :footer-props="footers"
            @update:items-per-page="updateItemPerPage"
            @update:page="getDataFromApi"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-btn
                  v-if="search === null || search === ''"
                  color="primary"
                  class="hover:tw-bg-blue-500 tw-transition tw-duration-500"
                  dark
                  @click="showForm"
                >
                  New Item
                </v-btn>
                <v-btn
                  v-else
                  color="success"
                  class="hover:tw-bg-green-500 tw-transition tw-duration-500"
                  dark
                  @click="refresh"
                >
                  refresh
                </v-btn>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  :disabled="loading"
                  single-line
                  hide-details
                  outlined
                  dense
                  class="shrink"
                  label="Search"
                  append-icon="mdi-magnify"
                  @click:clear="getDataFromApi(1)"
                  @keypress.enter="searchData()"
                ></v-text-field>
              </v-toolbar>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon small class="mr-2" @click="editItem(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="removeItem(item.id)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- Dealer Form -->
    <example-form
      :show="show"
      @close="show = false"
      @update="getDataFromApi(1)"
    ></example-form>
  </div>
</template>

<script>
import serverSideTable from '~/mixins/serverSideTable'
import removeItem from '~/mixins/removeItem'

export default {
  mixins: [serverSideTable, removeItem],
  data: () => ({
    search: '',
    headers: [
      { text: 'Title', value: 'title', sortable: false },
      { text: 'Action', value: 'actions', sortable: false, width: 100 },
    ],
    url: 'examples',
    editState: 'example/getExample',
  }),
}
</script>
