<template>
  <v-row>
    <v-col cols="12">
      <v-card flat class="tw-rounded-lg">
        <v-card-title class="headline">
          <v-icon large class="mr-3 mb-1" color="amber darken-4"
            >mdi-party-popper</v-icon
          >
          Welcome to Dashboard!</v-card-title
        >
      </v-card>
    </v-col>
    <!-- Exhibitor -->
    <v-col cols="12" lg="4">
      <v-card flat class="tw-rounded-lg">
        <v-card-title class="text-center">
          <v-icon color="green accent-3" class="mx-auto" x-large
            >mdi-account-group</v-icon
          >
          <br />
        </v-card-title>
        <v-card-text>
          <h5 class="text-h6 text-center"><b>3</b> Item</h5>
        </v-card-text>
        <v-card-actions>
          <v-btn
            width="100%"
            depressed
            color="primary"
            nuxt
            to="/admin/exhibitors"
          >
            <v-icon class="mb-1 mr-2">mdi-cog</v-icon> Configuration
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- Event -->
    <v-col cols="12" lg="4">
      <v-card flat class="tw-rounded-lg">
        <v-card-title class="text-center">
          <v-icon color="orange darken-4" class="mx-auto" x-large
            >mdi-calendar-outline</v-icon
          >
          <br />
        </v-card-title>
        <v-card-text>
          <h5 class="text-h6 text-center"><b>3</b> Item</h5>
        </v-card-text>
        <v-card-actions>
          <v-btn width="100%" depressed color="primary" nuxt to="/admin/events">
            <v-icon class="mb-1 mr-2">mdi-cog</v-icon> Configuration
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <!-- Page -->
    <v-col cols="12" lg="4">
      <v-card flat class="tw-rounded-lg">
        <v-card-title class="text-center">
          <v-icon color="teal darken-1" class="mx-auto" x-large
            >mdi-file</v-icon
          >
          <br />
        </v-card-title>
        <v-card-text>
          <h5 class="text-h6 text-center"><b>3</b> Item</h5>
        </v-card-text>
        <v-card-actions>
          <v-btn width="100%" depressed color="primary" nuxt to="/admin/pages">
            <v-icon class="mb-1 mr-2">mdi-cog</v-icon> Configuration
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {}
</script>
