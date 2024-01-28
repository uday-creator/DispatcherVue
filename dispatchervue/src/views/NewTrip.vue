<template>
    <v-container>
        <div>
            <h1 class="mt-4" style="font-size: 25px;">Create a trip</h1>

            <v-card outlined style="background-color:  #e6e6e6;">
                <!-- <v-card-title>Create a Trip</v-card-title>
            <v-divider></v-divider> -->

                <!-- Date Field -->
                <v-card-subtitle>Trip Details <p class="mr-0">Clear</p></v-card-subtitle>
                <v-card-text>
                    <form>
                        <v-row>
                            <v-col sm="4">
                                <v-text-field outlined v-model="tripDate" label="Trip Date" prepend-icon="mdi-calendar"
                                    type="date" required></v-text-field>
                            </v-col>


                            <!-- Trip Rate with Currency Dropdown -->

                            <v-col>
                                <v-text-field outlined v-model="tripRate" label="Trip Rate" prepend-icon="mdi-currency"
                                    required>
                                    <template v-slot:prepend>
                                        <v-select v-model="selectedCurrency" :items="currencyOptions" hide-details
                                            outlined></v-select>
                                    </template>
                                </v-text-field>
                            </v-col>

                            <v-col>
                                <v-text-field outlined v-model="tripRate" label="Trip Rate" prepend-icon="mdi-currency"
                                    required>
                                    <template v-slot:prepend>
                                        <v-select v-model="selectedCurrency" :items="currencyOptions" hide-details
                                            outlined></v-select>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </form>
                </v-card-text>

            </v-card>
        </div>


        <!--Steppers for details-->
        <v-stepper v-model="e1" class="mt-10">
            <!-- <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">
                    Name of step 2
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">
                    Name of step 3
                </v-stepper-step>
            </v-stepper-header> -->

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12" color="white lighten-1">
                        <v-toolbar>
                            <v-toolbar-title>Pickup Details</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                        </v-toolbar>
                        <v-card-text>
                            <v-row>
                                <v-col sm="6" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Date</p>
                                    <!-- <v-text-field outlined v-model="tripDate" label="Trip Date" prepend-icon="mdi-calendar"
                                        type="date" required></v-text-field> -->
                                    <v-text-field outlined v-model="tripDate" label="Trip Date" type="date"
                                        required></v-text-field>
                                </v-col>
                                <v-col sm="3" cols="4">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Time</p>
                                    <v-menu v-model="timePicker" :close-on-content-click="false" :nudge-right="40"
                                        transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="tripTime" label="Trip Time"
                                                prepend-inner-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                                                v-on="on" outlined></v-text-field>
                                        </template>

                                        <v-time-picker v-model="tripTime" @input="timePicker = false"></v-time-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Shippers Name</p>
                                    <v-text-field outlined type="text" required></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone</p>
                                    <v-text-field v-model="phoneNumber" label="Phone Number" prepend-inner-icon="mdi-phone"
                                        required outlined>
                                        <!-- <template v-slot:prepend>
                                            <CountryRegionSelect v-model="selectedCountry" :countries="countries"
                                                label="Country" hide-details outlined></CountryRegionSelect>
                                        </template> -->
                                    </v-text-field>
                                </v-col>

                            </v-row>
                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                    <v-text-field outlined type="text" required
                                        placeholder="Unit / Street 1 / Etc..."></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Street 2</p>
                                    <v-text-field outlined type="text" placeholder="Adress" required></v-text-field>
                                </v-col>
                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">State</p>
                                    <v-text-field outlined type="text" required plcaeholder="state"></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">City</p>
                                    <v-text-field outlined type="text" required placeholder="City"></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Postal Code</p>
                                    <v-text-field outlined type="text" placeholder="Postal Code" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Number</p>
                                    <v-text-field outlined type="text" required placeholder="Pickup Number"></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                    <v-text-field outlined type="text" placeholder="Contact Person" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-card-actions>


                                <v-spacer></v-spacer>

                                <v-btn text plain @click="show = !show" v-if="show === false">Show advance settings
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                                <v-btn text plain @click="show = !show" v-if="show === true">Hide advance settings
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        <v-row>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Number</p>
                                                <v-text-field outlined type="text" required
                                                    placeholder="Pickup Number"></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                                <v-text-field outlined type="text" placeholder="Contact Person"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                                <v-text-field outlined type="text" required
                                                    placeholder="Commodity"></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Temperature</p>
                                                <v-text-field outlined type="text" placeholder="Temperature"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>

                                        <v-row>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                                <v-text-field outlined type="text" required v-model="skids"
                                                    placeholder="Skids"></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                                <v-text-field v-model="cases" outlined type="text" placeholder="Cases"
                                                    required></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                                <v-text-field v-model="Weight" outlined type="text" placeholder="Weight"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>


                        </v-card-text>
                    </v-card>
                    <v-btn color="primary ml-100" @click="e1 = 2" plain>
                        Drop-off Details <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>

                    <!-- <v-btn text>
                        Cancel
                    </v-btn> -->
                </v-stepper-content>

                <v-stepper-content step="2">
                    <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card> -->
                    <v-card class="mb-12" color="white lighten-1">
                        <v-toolbar>
                            <v-toolbar-title>Drop-off Details</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                        </v-toolbar>
                        <v-card-text>
                            <v-row>
                                <v-col sm="6" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Date</p>
                                    <!-- <v-text-field outlined v-model="tripDate" label="Trip Date" prepend-icon="mdi-calendar"
                                        type="date" required></v-text-field> -->
                                    <v-text-field outlined v-model="tripDate" label="Trip Date" type="date"
                                        required></v-text-field>
                                </v-col>
                                <v-col sm="3" cols="4">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Time</p>
                                    <v-menu v-model="timePicker" :close-on-content-click="false" :nudge-right="40"
                                        transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field v-model="tripTime" label="Trip Time"
                                                prepend-inner-icon="mdi-clock-time-four-outline" readonly v-bind="attrs"
                                                v-on="on" outlined></v-text-field>
                                        </template>

                                        <v-time-picker v-model="tripTime" @input="timePicker = false"></v-time-picker>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Receivers Name</p>
                                    <v-text-field outlined type="text" required placeholder="Receivers Name"></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone</p>
                                    <v-text-field v-model="phoneNumber" label="Phone Number" prepend-inner-icon="mdi-phone"
                                        required outlined>
                                        <!-- <template v-slot:prepend>
                                            <CountryRegionSelect v-model="selectedCountry" :countries="countries"
                                                label="Country" hide-details outlined></CountryRegionSelect>
                                        </template> -->
                                    </v-text-field>
                                </v-col>

                            </v-row>
                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                    <v-text-field outlined type="text" required
                                        placeholder="Unit / Street 1 / Etc..."></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Street 2</p>
                                    <v-text-field outlined type="text" placeholder="Adress" required></v-text-field>
                                </v-col>
                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">State</p>
                                    <v-text-field outlined type="text" required plcaeholder="state"></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">City</p>
                                    <v-text-field outlined type="text" required placeholder="City"></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Postal Code</p>
                                    <v-text-field outlined type="text" placeholder="Postal Code" required></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Reference</p>
                                    <v-text-field outlined type="text" required placeholder="Reference"></v-text-field>
                                </v-col>

                                <v-col sm="4" cols="6">
                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                    <v-text-field outlined type="text" placeholder="Contact Person" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-card-actions>


                                <v-spacer></v-spacer>

                                <v-btn text plain @click="show = !show" v-if="show === false">Show advance settings
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                                <v-btn text plain @click="show = !show" v-if="show === true">Hide advance settings
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>

                                        <v-row>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                                <v-text-field outlined type="text" required
                                                    placeholder="Commodity"></v-text-field>
                                            </v-col>

                                           
                                        </v-row>

                                        <v-row>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                                <v-text-field outlined type="text" required v-model="skids"
                                                    placeholder="Skids"></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                                <v-text-field v-model="cases" outlined type="text" placeholder="Cases"
                                                    required></v-text-field>
                                            </v-col>

                                            <v-col sm="4" cols="6">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                                <v-text-field v-model="Weight" outlined type="text" placeholder="Weight"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>


                        </v-card-text>
                    </v-card>
                    <v-btn color="primary" @click="e1 = 1" plain>
                        <v-icon>mdi-chevron-left</v-icon>Pick-up Details 
                    </v-btn>

                    <v-btn plain color="primary" @click="e1 = 3">
                        Highway Dispatch <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

                    <v-btn color="primary" @click="e1 = 1">
                        Continue
                    </v-btn>

                    <v-btn text>
                        Cancel
                    </v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>
  
<script>
// import * as CountryRegionSelect from 'vue-country-region-select';
export default {
    // components: {
    //     CountryRegionSelect,
    // },


    data() {
        return {
            tripDate: '',
            tripRate: '',
            selectedCurrency: null,
            currencyOptions: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'],
            e1: 1,
            tripTime: '',
            phoneNumber: '',
            selectedCountry: null,
            show: false,

        };
    },
    methods: {

    },
};
</script>
  