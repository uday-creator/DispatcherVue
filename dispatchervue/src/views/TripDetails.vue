<!-- <template>
    <v-container>
        <v-card style="background-color:lightgrey" elevation >
            <v-card-title>Create a trip</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>Create a new trip by clicking the button
            </v-card-subtitle>
           <v-card-actions>
            <v-btn class="primary" @click="createTrip">Create a Trip</v-btn>
        </v-card-actions>
        </v-card>
    </v-container>
</template> -->
<template>
    <v-container>
      <!-- Use Vuetify's grid system to control card width -->
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card >
            <v-card-title>Create a trip</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>Create a new trip by clicking the button</v-card-subtitle>
  
           
                <v-card-actions>
                  <v-btn class="primary" @click="createTrip">Create a Trip</v-btn>
                </v-card-actions>
              
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  

<script>

export default {
    name: "TripDetails",

    methods: {
        createTrip() {
            this.$router.push({ path: 'NewTrip' })
        }
    }
}
</script>