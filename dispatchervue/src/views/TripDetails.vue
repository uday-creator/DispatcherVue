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
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row style="align-items: center;">
              <v-col>
              <h1>Create a trip</h1></v-col>
            </v-row>
            <v-row style="align-items: center;">
              <v-col col="12" sm="10" md="10">
                Create a new trip by clicking the button
              </v-col>
              <v-col cols="12" sm="2" md="2">
                <v-card-actions>
            <v-btn class="primary" @click="createTrip">Create a Trip</v-btn>
          </v-card-actions>

              </v-col>
            </v-row>
          </v-card-text>
          <!-- <v-card-subtitle>Create a new trip by clicking the button</v-card-subtitle>
 -->

            <!-- <v-card-actions>
              <v-btn class="primary" @click="createTrip">Create a Trip</v-btn>
            </v-card-actions> -->

        </v-card>
      </v-col>
    </v-row>

    <v-card flat class="mt-10">
      <!-- Filters -->
      <v-row>
        <v-col cols="12">
          <v-btn icon @click="showFilterDialog = true">
            <v-icon>mdi-filter</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!-- Filter Dialog -->
      <v-dialog v-model="showFilterDialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Filters</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="filters.tripNumber" label="Trip Number"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="filters.customerName" label="Customer Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="filters.driverName" label="Driver/Carrier Name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-text-field v-model="filters.equipment" label="Equipment"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="applyFilters">Apply</v-btn>
            <v-btn text @click="resetFilters">Reset</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Data Table -->
      <!-- <v-data-table :headers="headers" :items="filteredItems" item-key="id" show-expand class="elevation-1"  :single-expand="singleExpand"
       :expanded.sync="expanded"  @click:row="toggleExpand"> -->
       <v-data-table :headers="headers" :items="filteredItems" item-key="id" show-expand class="elevation-1"  :single-expand="singleExpand"
       :expanded.sync="expanded">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Trips Table</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>

        <!-- Status Chips -->
        <template v-slot:[`item.status`]="{ item }">
        <v-chip
          :color="getStatusColor(item.status)"
          dark
        >
          {{ getStatusLabel(item.status) }}
        </v-chip>
      </template>

      <!-- Actions Menu -->
      <template v-slot:[`item.actions`]="{ item }">
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="printInvoice(item)">
              <v-list-item-title>Print Invoice</v-list-item-title>
            </v-list-item>
            <v-list-item @click="printBOI(item)">
              <v-list-item-title>Print BOI</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>


        <!-- Expanded Rows -->

        <template v-slot:expanded-item="{ item }">
          <td :colspan="headers.length">
            <!-- <v-card flat style="width: auto;">
              <v-card-text> -->
                <div style="margin-top: 10px;">
                <p><strong>Order Details:</strong> {{ item.orderDetails }}</p>
                <p><strong>Truck ID:</strong> {{ item.truckId }}</p>
                <p><strong>Trailer ID:</strong> {{ item.trailerId }}</p>
                <p><strong>Driver/Carrier Details:</strong> {{ item.driverDetails }}</p>
                <p><strong>Leg(s) Details:</strong></p>
                <div style="display: flex;">
                  <div style="flex: 1;">
                    <p><strong>Pickup Overview</strong></p>
                    <p>{{ item.pickupDetails.shipperName }}</p>
                    <p>{{ item.pickupDetails.dateAndTime }}</p>
                    <p>{{ item.pickupDetails.address }}</p>
                  </div>
                  <div style="flex: 1;">
                    <p><strong>Drop-off Overview</strong></p>
                    <p>{{ item.dropoffDetails.receiverName }}</p>
                    <p>{{ item.dropoffDetails.dateAndTime }}</p>
                    <p>{{ item.dropoffDetails.address }}</p>
                  </div>
                </div>
                </div>
              <!-- </v-card-text>
            </v-card> -->
          </td>
        </template>

      </v-data-table>
    </v-card>
  </v-container>
</template>


<script>

export default {
  name: "TripDetails",

  data() {
    return {
      showFilterDialog: false,
      filters: {
        tripNumber: '',
        customerName: '',
        driverName: '',
        equipment: ''
      },
      expanded: [],
      singleExpand: false,
      headers: [
        { text: 'Trip Number', value: 'tripNumber' },
        { text: 'Date', value: 'date' },
        { text: 'Customer Name', value: 'customerName' },
        { text: 'Pickup', value: 'pickupLocation' },
        { text: 'Drop-off', value: 'dropoffLocation' },
        { text: 'Dispatch', value: 'dispatch' },
        { text: 'Rate', value: 'rate' },
        { text: 'Status', value: 'status' },
        { text: '', value: 'actions', sortable: false }
      ],
      items: [
        {
          id: 1,
          tripNumber: 'T123',
          date: 'MM/DD/YY',
          customerName: 'Customer A',
          pickupLocation: 'Location A',
          dropoffLocation: 'Location B',
          dispatch: 'Carrier/Driver',
          rate: 'C$2958.00',
          status: 'D',
          orderDetails: 'Order 1 Details',
          truckId: 'Truck 1',
          trailerId: 'Trailer 1',
          driverDetails: 'Driver 1',
          pickupDetails: { shipperName: 'Shipper A', dateAndTime: 'Date & Time A', address: 'Address A' },
          dropoffDetails: { receiverName: 'Receiver A', dateAndTime: 'Date & Time B', address: 'Address B' }
        },
        {
          id: 2,
          tripNumber: 'T13',
          date: 'MM/DD/YY',
          customerName: 'Customer A',
          pickupLocation: 'Location A',
          dropoffLocation: 'Location B',
          dispatch: 'Carrier/Driver',
          rate: 'C$2958.00',
          status: 'D',
          orderDetails: 'Order 1 Details',
          truckId: 'Truck 1',
          trailerId: 'Trailer 1',
          driverDetails: 'Driver 1',
          pickupDetails: { shipperName: 'Shipper A', dateAndTime: 'Date & Time A', address: 'Address A' },
          dropoffDetails: { receiverName: 'Receiver A', dateAndTime: 'Date & Time B', address: 'Address B' }
        },
        // Add more items as needed
      ],
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => {
        const tripNumberMatch = item.tripNumber.toLowerCase().includes(this.filters.tripNumber.toLowerCase());
        const customerNameMatch = item.customerName.toLowerCase().includes(this.filters.customerName.toLowerCase());
        const driverNameMatch = item.dispatch.toLowerCase().includes(this.filters.driverName.toLowerCase());
        const equipmentMatch = item.dispatch.toLowerCase().includes(this.filters.equipment.toLowerCase());
        return tripNumberMatch && customerNameMatch && driverNameMatch && equipmentMatch;
      });
    }
  },
  methods: {
    createTrip() {
      this.$router.push({ path: 'NewTrip' })
    },
    // toggleExpand(item) {
    //   const index = this.expanded.indexOf(item.id);
    //   if (index > -1) {
    //     this.expanded.splice(index, 1);
    //   } else {
    //     this.expanded = [item.id];
    //   }
    // },
    printInvoice(item) {
      console.log(`Printing invoice for ${item.tripNumber}`);
      // Implement the logic for printing the invoice
    },
    printBOI(item) {
      console.log(`Printing BOI for ${item.tripNumber}`);
      // Implement the logic for printing the BOI
    },
    applyFilters() {
      this.showFilterDialog = false;
    },
    resetFilters() {
      this.filters = {
        tripNumber: '',
        customerName: '',
        driverName: '',
        equipment: ''
      };
      this.showFilterDialog = false;
    },
    getStatusColor(status) {
      switch (status) {
        case 'D':
          return 'blue';
        case 'P':
          return 'yellow';
        case 'C':
          return 'red';
        default:
          return 'grey';
      }
    },
    getStatusLabel(status) {
      switch (status) {
        case 'D':
          return 'D';
        case 'P':
          return 'P';
        case 'C':
          return 'C';
        default:
          return '';
      }
    }
  }
}
</script>