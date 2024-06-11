<template>
    <v-container>
        <div>
            <h1 class="mt-4" style="font-size: 25px;">Create a trip</h1>

            <v-card outlined style="background-color:  #e6e6e6;">
                <!-- <v-card-title>Create a Trip</v-card-title>
            <v-divider></v-divider> -->

                <!-- Date Field -->
                <div>
                    <v-card-subtitle>
                        <v-row>
                            <p class="ml-10 mt-5" style="font-family:Arial, Helvetica, sans-serif; font-size: medium; ">
                                Trip Details</p>
                            <v-spacer></v-spacer>
                            <p class="mr-10" style="text-decoration: underline;">Clear</p>
                        </v-row>
                    </v-card-subtitle>
                </div>
                <v-card-text>
                    <form>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">

                                <v-row><span class="ml-10 mb-5">Date </span>
                                    <p class="ml-1" style="color: red;">*</p>
                                </v-row>
                                <v-text-field class="ml-6" outlined v-model="TripDate" label="Trip Date" type="date"
                                    :rules="rules"></v-text-field>
                            </v-col>


                            <!-- Trip Rate with Currency Dropdown -->

                            <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Order No. </span>
                                    <p class="ml-1" style="color: red;">*</p>
                                </v-row>
                                <v-text-field outlined v-model="OrderNo" :rules="rules"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Rate </span>
                                    <p class="ml-1" style="color: red;">*</p>
                                </v-row>
                                <div class="robin">
                                    <span
                                        class="v-input rate-input theme--light v-text-field v-text-field--is-booted"></span>

                                    <v-text-field v-model="Rate" prepend-inner-icon="mdi-currency-usd"
                                        class="rate-input">
                                    </v-text-field>


                                </div>


                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="auto">
                                <v-checkbox v-model="IsLoadDelivered"
                                    label="Is this load already delivered?"></v-checkbox>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-btn text plain @click="ShowTripDetails = !ShowTripDetails"
                                    v-if="ShowTripDetails === false">Show advance settings
                                    <v-icon>{{ ShowTripDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                                <v-btn text plain @click="ShowTripDetails = !ShowTripDetails"
                                    v-if="ShowTripDetails === true">Hide advance settings
                                    <v-icon>{{ ShowTripDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-expand-transition>
                            <div v-show="ShowTripDetails">
                                <v-divider></v-divider>

                                <v-card-text>
                                    <v-row>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Number</p>
                                            <v-text-field outlined type="text" :rules="rules"
                                                placeholder="Pickup Number"></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                            <v-text-field outlined type="text" placeholder="Contact Person"
                                                :rules="rules"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                            <v-text-field outlined type="text" :rules="rules"
                                                placeholder="Commodity"></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Temperature</p>
                                            <v-text-field outlined type="text" placeholder="Temperature"
                                                :rules="rules"></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <!-- <v-row>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                            <v-text-field outlined type="text" :rules="rules" v-model="skids"
                                                placeholder="Skids"></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                            <v-text-field v-model="cases" outlined type="text" placeholder="Cases"
                                                :rules="rules"></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                            <v-text-field v-model="Weight" outlined type="text" placeholder="Weight"
                                                :rules="rules"></v-text-field>
                                        </v-col>
                                    </v-row> -->
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </form>
                </v-card-text>

            </v-card>
        </div>

        <div id="CustomerDetails" class="mt-10">
            <v-card>
                <v-row>
                    <v-col cols="auto">
                        <v-card-title>
                            <p>Customer Details</p>
                        </v-card-title>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto">
                        <p class="mr-10" style="text-decoration:underline">Clear</p>
                    </v-col>
                </v-row>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">Name </span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field outlined :rules="rules" v-model="CustomerName"
                                ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">Phone</span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field :rules="rules" outlined v-model="CustomerPhone" 
                                prepend-inner-icon="mdi-numeric-positive-1" placeholder="_ _ _- _ _ _ - _ _ _ _">
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">Address </span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field outlined :rules="rules" v-model="CustomerAddress" 
                                placeholder="Unit/ Street 1 / Etc .. "></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">Street 2 </span></v-row>
                            <v-text-field outlined v-model="CustomerAddressStreet2" ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">State </span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field outlined :rules="rules" v-model="CustomerState"
                                ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">City </span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field outlined :rules="rules" v-model="CustomerCity"
                               ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row><span class="ml-3 mb-5">Postal Code</span>
                                <p class="ml-1" style="color: red;">*</p>
                            </v-row>
                            <v-text-field outlined v-model="CustomerPostalCode" :rules="rules">

                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text plain @click="ShowAdvanceCustomerDetails = !ShowAdvanceCustomerDetails"
                        v-if="ShowAdvanceCustomerDetails === false">Show advance settings
                        <v-icon>{{ ShowAdvanceCustomerDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    <v-btn text plain @click="ShowAdvanceCustomerDetails = !ShowAdvanceCustomerDetails"
                        v-if="ShowAdvanceCustomerDetails === true">Hide advance settings
                        <v-icon>{{ ShowAdvanceCustomerDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <!-- <v-card-title>
                    <v-row>
                        <v-col cols="auto">
                            <p>Customer Details</p>
                        </v-col>
                        <v-col cols="auto">
                            <p style="text-decoration:underline">Clear</p>
                        </v-col>
                    </v-row>
                    
                </v-card-title> -->
            </v-card>
        </div>
        <v-card id="DispatchDetails" class="mt-10" flat>
            <!--Steppers for details-->
            <v-stepper v-model="e1" >
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
                        <v-card class="mb-12" color="white lighten-1" flat>
                            <v-toolbar flat>
                                <v-toolbar-title>Pickup Details</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col sm="6" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Date</p>
                                        <!-- <v-text-field outlined v-model="tripDate" label="Trip Date" prepend-icon="mdi-calendar"
                                            type="date" :rules="rules"></v-text-field> -->
                                        <v-text-field outlined v-model="PickUpDate" label="Trip Date" type="date"
                                            :rules="rules"></v-text-field>
                                    </v-col>
                                    <v-col sm="3" cols="4">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Time</p>
                                        <v-menu v-model="PickUpTimePicker" :close-on-content-click="false" :nudge-right="40"
                                            transition="scale-transition" offset-y min-width="290px">
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="PickUpTime" label="Trip Time"
                                                    prepend-inner-icon="mdi-clock-time-four-outline" readonly
                                                    v-bind="attrs" v-on="on" outlined></v-text-field>
                                            </template>

                                            <v-time-picker v-model="PickUpTime"
                                                @input="PickUpTimePicker = true"></v-time-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Shippers Name</p>
                                        <v-text-field outlined type="text" :rules="rules" v-model="ShippersName"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone</p>
                                        <v-text-field v-model="ShippersPhone" label="Phone Number"
                                            prepend-inner-icon="mdi-phone" :rules="rules" outlined>
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
                                        <v-text-field outlined type="text" :rules="rules" 
                                            placeholder="Unit / Street 1 / Etc..." v-model="ShipperAddress"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Street 2</p>
                                        <v-text-field outlined type="text" placeholder="Adress" v-model="ShipperAddressStreet2"></v-text-field>
                                    </v-col>
                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">State</p>
                                        <v-text-field outlined type="text" :rules="rules" v-model="ShipperState" plcaeholder="state"></v-text-field>
                                    </v-col>

                                </v-row>

                                <v-row>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">City</p>
                                        <v-text-field outlined type="text" :rules="rules" v-model="ShipperCity" placeholder="City"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Postal Code</p>
                                        <v-text-field outlined type="text" placeholder="Postal Code"
                                            :rules="rules" v-model="ShipperPostalCode" ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Number</p>
                                        <v-text-field outlined type="text" :rules="rules" v-model="PickUpNumber"
                                            placeholder="Pickup Number"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                        <v-text-field outlined type="text" placeholder="Contact Person" v-model="PickUpContactPerson"
                                            :rules="rules"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-actions>


                                    <v-spacer></v-spacer>

                                    <v-btn text plain @click="ShowAdvancePickUpDetails = !ShowAdvancePickUpDetails"
                                        v-if="ShowAdvancePickUpDetails === false">Show advance settings
                                        <v-icon>{{ ShowAdvancePickUpDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                    <v-btn text plain @click="ShowAdvancePickUpDetails = !ShowAdvancePickUpDetails"
                                        v-if="ShowAdvancePickUpDetails === true">Hide advance settings
                                        <v-icon>{{ ShowAdvancePickUpDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="ShowAdvancePickUpDetails">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                          
                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                                    <v-text-field outlined type="text" :rules="rules" v-model="PickUpCommodity"
                                                        placeholder="Commodity"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Temperature</p>
                                                    <v-text-field outlined type="text" placeholder="Temperature" v-model="PickUpTemperature"
                                                        :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>

                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                                    <v-text-field outlined type="text" :rules="rules" v-model="PickUpSkids"
                                                        placeholder="Skids"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                                    <v-text-field v-model="PickUpcases" outlined type="text" 
                                                        placeholder="Cases" :rules="rules"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                                    <v-text-field v-model="PickUpWeight" outlined type="text"
                                                        placeholder="Weight" :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>


                            </v-card-text>
                        </v-card>
                        <v-row>
                            <v-col cols="auto"></v-col><v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-btn color="primary ml-100" @click="e1 = 2" plain>
                                    Drop-off Details <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-stepper-content>


                    <!-- Step 2 start -->
                    <v-stepper-content step="2">
                        <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card> -->
                        <v-card class="mb-12" color="white lighten-1" flat>
                            <v-toolbar flat>
                                <v-toolbar-title>Drop-off Details</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col sm="6" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Date</p>
                                        <!-- <v-text-field outlined v-model="tripDate" label="Trip Date" prepend-icon="mdi-calendar"
                                            type="date" :rules="rules"></v-text-field> -->
                                        <v-text-field outlined v-model="DropOffDate" label="Trip Date" type="date"
                                            :rules="rules"></v-text-field>
                                    </v-col>
                                    <v-col sm="3" cols="4">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Appointment Time</p>
                                        <v-menu v-model="DropOffTimePicker" :close-on-content-click="false" :nudge-right="40"
                                            transition="scale-transition" offset-y min-width="290px">

                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="DropOffTime" label="Trip Time"
                                                    prepend-inner-icon="mdi-clock-time-four-outline" readonly
                                                    v-bind="attrs" v-on="on" outlined></v-text-field>
                                            </template>

                                            <v-time-picker v-model="DropOffTime"
                                                @input="DropOffTimePicker = false"></v-time-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Receivers Name</p>
                                        <v-text-field outlined type="text" :rules="rules"
                                            placeholder="Receivers Name" v-model="ReceiverName"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone</p>
                                        <v-text-field v-model="ReceiverPhone" label="Phone Number"
                                            prepend-inner-icon="mdi-phone" :rules="rules" outlined>
                                        
                                        </v-text-field>
                                    </v-col>

                                </v-row>
                                <v-row>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                        <v-text-field outlined type="text" :rules="rules"
                                            placeholder="Unit / Street 1 / Etc..." v-model="ReceiverAddress" ></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Street 2</p>
                                        <v-text-field outlined type="text" placeholder="Adress" v-model="ReceiverAddressStreet2" ></v-text-field>
                                    </v-col>
                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">State</p>
                                        <v-text-field outlined type="text" :rules="rules" plcaeholder="state" v-model="ReceiverState" ></v-text-field>
                                    </v-col>

                                </v-row>

                                <v-row>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">City</p>
                                        <v-text-field outlined type="text" :rules="rules" placeholder="City" v-model="ReceiverCity" ></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Postal Code</p>
                                        <v-text-field outlined type="text" placeholder="Postal Code" v-model="ReceiverPostalCode"
                                            :rules="rules"></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Reference</p>
                                        <v-text-field outlined type="text" :rules="rules" v-model="DropOffReference"
                                            placeholder="Reference"></v-text-field>
                                    </v-col>

                                    <v-col sm="4" cols="6">
                                        <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person</p>
                                        <v-text-field outlined type="text" placeholder="Contact Person" v-model="DropOffContactPerson"
                                            :rules="rules"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-actions>


                                    <v-spacer></v-spacer>

                                    <v-btn text plain @click="ShowAdvanceDropOffDetails = !ShowAdvanceDropOffDetails"
                                        v-if="ShowAdvanceDropOffDetails === false">Show advance settings
                                        <v-icon>{{ ShowAdvanceDropOffDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                    <v-btn text plain @click="ShowAdvanceDropOffDetails = !ShowAdvanceDropOffDetails"
                                        v-if="ShowAdvanceDropOffDetails === true">Hide advance settings
                                        <v-icon>{{ ShowAdvanceDropOffDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="ShowAdvanceDropOffDetails">
                                        <v-divider></v-divider>

                                        <v-card-text>

                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                                    <v-text-field outlined type="text" :rules="rules" v-model="DropOffCommodity"
                                                        placeholder="Commodity"></v-text-field>
                                                </v-col>


                                            </v-row>

                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                                    <v-text-field outlined type="text" :rules="rules" v-model="DropOffSkids"
                                                        placeholder="Skids"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                                    <v-text-field v-model="DropOffCases" outlined type="text"
                                                        placeholder="Cases" :rules="rules"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                                    <v-text-field v-model="DropOffWeight" outlined type="text"
                                                        placeholder="Weight" :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>


                            </v-card-text>
                        </v-card>
                        <v-row>
                            <!-- This button will be aligned to the left -->
                            <v-col cols="auto">
                                <v-btn color="primary" @click="e1 = 1" plain>
                                    <v-icon>mdi-chevron-left</v-icon>Pick-up Details
                                </v-btn>
                            </v-col>

                            <v-spacer></v-spacer> <!-- This spacer will push the next button to the right -->

                            <!-- This button will be aligned to the right -->
                            <v-col cols="auto">
                                <v-btn plain color="primary" @click="e1 = 3">
                                    Highway Dispatch <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-stepper-content>
                    <!-- Step 2 end -->


                    <!-- Step 3 Start -->
                    <v-stepper-content step="3">
                        <!-- <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card> -->
                        <v-card class="mb-12" color="white lighten-1" flat>
                            <v-toolbar flat>
                                <v-toolbar-title>Highway Dispatch</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-card flat>
                                    <v-card-text>
                                    <v-row class="dotted-line-container mt-5">
                                    <v-col cols="12" lg="1" md="12" class="pickup-overview" style="text-align: center;">
                                        <v-icon>mdi-numeric-1-circle-outline</v-icon>
                                        <p>Pickup Overview</p>
                                        <p>{{ShippersName}}</p>
                                        <p>{{PickUpDate +" , " + PickUpTime}}</p>
                                        <p>{{ ShipperCity }}</p>
                                    </v-col>
                                    <v-col lg="5" md="12">
                                        <v-divider class="bold-dashed-divider" ></v-divider>
                                    </v-col>
                                    <v-col cols="12" lg="1" md="12" class="dotted-line-middle" style=" align-items: center;">
                                        <div style="text-align: center;">
                                        <v-icon>mdi-truck-cargo-container</v-icon> </div>
                                    </v-col>
                                    <v-col lg="4" md="12">
                                        <v-divider class="bold-dashed-divider" ></v-divider>
                                    </v-col>
                                    <v-col cols="12" lg="1" md="12" class="delivery-overview" style="text-align: center;">
                                        <v-icon>mdi-numeric-2-circle-outline</v-icon>
                                        <p>Drop-off Overview</p>
                                        <p>{{ ReceiverName }}</p>
                                        <p>{{ DropOffDate +" , " + DropOffTime }}</p>
                                        <p>{{ ReceiverCity }}</p>
                                    </v-col>
                                    </v-row>
                                    </v-card-text>
                                    <v-card-actions>

                                        <v-btn text plain @click="ViewInMap = !ViewInMap"
                                        v-if="ViewInMap === false">
                                        <v-icon>{{ ViewInMap ? 'mdi-chevron-down' : 'mdi-chevron-right'
                                            }}</v-icon>
                                            View In Map                                      
                                    </v-btn>
                                    <v-btn text plain @click="ViewInMap = !ViewInMap"
                                        v-if="ViewInMap === true">
                                        <v-icon>{{ ViewInMap ? 'mdi-chevron-down' : 'mdi-chevron-right'
                                            }}</v-icon>Close Map
                                    </v-btn>
                                    </v-card-actions>
                                    <v-expand-transition>
                                        <div v-show="ViewInMap">
                                            <v-card flat>
                                               
                                                <v-card-text style="align-items: center;">
                                                    View In Map

                                                </v-card-text>
                                              
                                            </v-card>
                                        </div>
                                    </v-expand-transition>
                                </v-card>


                                <!-- <v-col cols="12" sm="12">
                                        <v-stepper alt-labels>
                                            <v-stepper-header class="no-elevation">
                                                <v-stepper-step step="1">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Overview
                                                    </p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup person</p>
                                                </v-stepper-step>

                                                <v-divider class="bold-dashed-divider"></v-divider>

                                                                                        <v-stepper-step step="2">
                                                <template v-slot:step>
                                                <v-icon>mdi-truck-cargo-container</v-icon>
                                                </template>
                                            </v-stepper-step>

                                            <v-divider class="bold-dashed-divider"></v-divider>

                                            <v-stepper-step step="3">
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Delivery Overview</p>
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone number</p>
                                            </v-stepper-step>
                                            </v-stepper-header>

                                        </v-stepper>
                                    </v-col> -->
                                <v-card flat>
                                    <v-card-title>
                                        <p>Dispatch Details</p>
                                    </v-card-title>
                                        <v-row>
                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Driver</p>
                                            <v-text-field outlined type="text" :rules="rules" v-model="DriverName"></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Co-Driver</p>
                                            <v-text-field v-model="CoDriverName" 
                                                 :rules="rules" outlined>
                                                
                                            </v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Truck ID</p>
                                            <v-text-field outlined type="text" :rules="rules" v-model="TruckId"
                                                ></v-text-field>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Trailer ID</p>
                                            <v-text-field outlined type="text" v-model="TrailerId" :rules="rules" ></v-text-field>
                                        </v-col>
                                      
                                    </v-row>

                                    <v-row>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Carrier</p>
                                            <div style="display: flex;">
                                            <v-text-field outlined type="text" :rules="rules" v-model="Carrier"></v-text-field>
                                            </div>
                                        </v-col>

                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Trailer Type</p>
                                            <v-text-field outlined type="text" v-model="TrailerType"
                                                :rules="rules"></v-text-field>
                                        </v-col>
                                        <v-col sm="4" cols="6">
                                            <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Rate<small>(Cost to Carrier)</small></p>
                                            <v-text-field outlined type="text" v-model="CostToCarrier"
                                                :rules="rules"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-card>
                                <!-- <v-card-actions>


                                    <v-spacer></v-spacer>

                                    <v-btn text plain @click="ShowAdvanceHighwayDispatch = !ShowAdvanceHighwayDispatch"
                                        v-if="ShowAdvanceHighwayDispatch === false">Show advance settings
                                        <v-icon>{{ ShowAdvanceHighwayDispatch ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                    <v-btn text plain @click="ShowAdvanceHighwayDispatch = !ShowAdvanceHighwayDispatch"
                                        v-if="ShowAdvanceHighwayDispatch === true">Hide advance settings
                                        <v-icon>{{ ShowAdvanceHighwayDispatch ? 'mdi-chevron-up' : 'mdi-chevron-down'
                                            }}</v-icon>
                                    </v-btn>
                                </v-card-actions>

                                <v-expand-transition>
                                    <div v-show="ShowAdvanceHighwayDispatch">
                                        <v-divider></v-divider>

                                        <v-card-text>
                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Number</p>
                                                    <v-text-field outlined type="text" :rules="rules"
                                                        placeholder="Pickup Number"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Contact Person
                                                    </p>
                                                    <v-text-field outlined type="text" placeholder="Contact Person"
                                                        :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>

                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Commodity</p>
                                                    <v-text-field outlined type="text" :rules="rules"
                                                        placeholder="Commodity"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Temperature</p>
                                                    <v-text-field outlined type="text" placeholder="Temperature"
                                                        :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>

                                            <v-row>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Skids</p>
                                                    <v-text-field outlined type="text" :rules="rules" v-model="skids"
                                                        placeholder="Skids"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Cases</p>
                                                    <v-text-field v-model="cases" outlined type="text"
                                                        placeholder="Cases" :rules="rules"></v-text-field>
                                                </v-col>

                                                <v-col sm="4" cols="6">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Weight</p>
                                                    <v-text-field v-model="Weight" outlined type="text"
                                                        placeholder="Weight" :rules="rules"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                    </div>
                                </v-expand-transition> -->


                            </v-card-text>
                        </v-card>

                        <v-row>
                            <v-col cols="auto">
                                <v-btn plain color="primary" @click="e1 = 2"><v-icon>mdi-chevron-left</v-icon>Drop off
                                    Details</v-btn>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-btn plain color="primary" @click="SaveTripDetails()" :loading="SubmitLoading">Finish
                                    <v-icon>mdi-chevron-right</v-icon></v-btn>
                            </v-col>
                        </v-row>

                    </v-stepper-content>
                    <!-- Step 3 end -->
                </v-stepper-items>
            </v-stepper>
        </v-card>
    </v-container>
</template>

<script>
// import * as CountryRegionSelect from 'vue-country-region-select';
import axios from 'axios';
export default {
    // components: {
    //     CountryRegionSelect,
    // },


    data() {
        return {

            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            TripDate:'',
            OrderNo:'',
            Rate:'',
            ShippersName:'',
            ShippersPhone:'',
            ShipperAddress:'',
            ShipperAddressStreet2:'',
            ShipperState:'',
            ShipperCity:'',
            ShipperPostalCode:'', 
            PickUpDate: '',          
            PickUpTime:'',
            PickUpAddress:'',
            PickUpNumber:'',
            PickUpContactPerson:'',
            PickUpCommodity:'',
            PickUpTemperature:'',
            PickUpSkids:'',
            PickUpcases:'',
            PickUpWeight:'',
            PickUpTimePicker:'',
            DropOffDate:'',
            DropOffTime:'',
            ReceiverName:'',
            ReceiverPhone:'',
            ReceiverAddress:'',
            ReceiverAddressStreet2:'',
            ReceiverState:'',
            ReceiverCity:'',
            ReceiverPostalCode:'',
            DropOffReference:'',
            DropOffContactPerson:'',
            DropOffCommodity:'',
            DropOffSkids:'',
            DropOffCases:'',
            DropOffWeight:'',
            DropOffTimePicker:'',
            DriverName:'',
            CoDriverName:'',
            TruckId:'',
            TrailerId:'',
            Carrier:'',
            TrailerType:'',
            CostToCarrier:'',
            currencyOptions: ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD'],
            e1: 1,
            tripTime: '',
            phoneNumber: '',
            selectedCountry: null,
            show: false,
            selectedCurrency: 'CAD$',
            rate: null,
            currencies: ['CAD$', 'USD$'],
            IsLoadDelivered: false,
            ShowTripDetails: false,
            CustomerName: '',
            CustomerPhone: '',
            CustomerAddress: '',
            CustomerAddressStreet2: '',
            CustomerState: '',
            CustomerCity: '',
            CustomerPostalCode: '',
            ShowAdvanceCustomerDetails: false,
            ShowAdvancePickUpDetails: false,
            ShowAdvanceDropOffDetails: false,
            ShowAdvanceHighwayDispatch: false,
            ViewInMap: false,
            SubmitLoading:false

        };
    },
    methods: {
        async SaveTripDetails(){
        //    this.SubmitLoading=true;
            const CustomerDetails = {
                CustomerName: this.CustomerPhone,
                CustomerPhone:this.CustomerPhone,
                CustomerAddress: this.CustomerAddress,
                CustomerAddressStreet2:this.CustomerAddressStreet2.length > 0 ? this.CustomerAddressStreet2 : null,
                CustomerState:this.CustomerState,
                CustomerCity:this.CustomerCity,
                CustomerPostalCode:this.CustomerPostalCode
            }

            const PickUp = {
                PickUpDate : this.PickUpDate,
                PickUpTime : this.PickUpTime,
                PickUpNumber:this.PickUpNumber,
                PickUpContactPerson:this.PickUpContactPerson,
                PickUpCommodity: this.PickUpCommodity.length > 0 ? this.PickUpCommodity : null,
                PickUpSkids:this.PickUpSkids.length > 0 ? this.PickUpSkids : null,
                PickUpCases: this.PickUpcases.length > 0 ? this.PickUpSkids : null,
                PickUpWeight:this.PickUpWeight.length > 0 ? this.PickUpWeight : null,
                Shipper:{
                    ShippersName: this.ShippersName,
                    ShipperAddress:this.ShipperAddress,
                    ShippersPhone: this.ShippersPhone,
                    ShipperAddressStreet2:  this.ShipperAddressStreet2.length > 0 ? this.ShipperAddressStreet2 : null,
                    ShipperState: this.ShipperState,
                    ShipperCity: this.ShipperCity,
                    ShipperPostalCode:this.ShipperPostalCode
                }
            }

            const DropOff={
                DropOffDate: this.DropOffDate,
                DropOffTime: this.DropOffTime,
                DropOffContactPerson: this.DropOffContactPerson,
                DropOffReference:this.DropOffReference,
                DropOffCommodity:this.DropOffCommodity.length > 0 ? this.DropOffCommodity : null,
                DropOffSkids:this.DropOffSkids.length > 0 ? this.DropOffSkids : null,
                DropOffCases:this.DropOffCases.length > 0 ? this.DropOffCases : null,
                DropOffWeight:this.DropOffWeight.length > 0 ? this.DropOffWeight : null,
                ReceiverDetail:{
                    ReceiverName:this.ReceiverName,
                    ReceiverPhone:this.ReceiverPhone,
                    ReceiverAddress:this.ReceiverAddress,
                    ReceiverAdressStreet2:this.ReceiverAddressStreet2.length > 0 ? this.ReceiverAddressStreet2 : null,
                    ReceiverState:this.ReceiverState,
                    ReceiverCity:this.ReceiverCity,
                    ReceiverPostalCode:this.ReceiverPostalCode
                }
           }

           const HighwayDispatch={
                DriverName:this.DriverName,
                CoDriverName:this.CoDriverName,
                TruckID:this.TruckId,
                TrailerID:this.TrailerId,
                Carrier:this.Carrier,
                TrailerType:this.TrailerType,
                CostToCarrier:this.CostToCarrier
           }

           const td={
            TripDate:this.TripDate,
            OrderNo:this.OrderNo,
            Rate:this.Rate,
            CustomerDetails:CustomerDetails,
            PickUp:PickUp,
            DropOff:DropOff,
            HighwayDispatch:HighwayDispatch
           }

           console.log(td);
            
            const res = await axios({
                    method: "post",
                    url: "https://localhost:7040/api/Trips/Save",
                    data: td, // Convert obj to JSON string
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // this.Categories = res.data;
             console.log("Res ",res);
        },

    },
};
</script>

<style>
.no-elevation .v-stepper__step {
    box-shadow: none !important;
}

.bold-dashed-divider {
    border-top-style: dashed !important;
    border-top-width: 3px !important;
    /* Increase the width for a bolder line */
    border-top-color: #000 !important;
    /* Change color if needed */
}

.currency-select {
    border-right: none;
}

.rate-input {
    padding-left: 0;
}

.robin {
    display: flex;
    text-align: center;
    align-items: center;
}

/* 
.v-text-field .v-input__control .v-input__slot {
    min-height: 70px !important;
    display: flex !important;
    align-items: center !important;
  } */
  /* .dotted-line-container {
  display: flex;
  align-items: center;
  position: relative;
}

.pickup-overview:after,
.delivery-overview:before {
  content: '';
  position: absolute;
  top: 50%;
  width: 100%;
  border-top: 1px dotted #000;
  transform: translateY(-50%);
  z-index: -1;
}

.pickup-overview:after {
  left: 100%;
}

.delivery-overview:before {
  right: 100%;
}

.dotted-line-middle {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 1;
}

.dotted-line-middle v-icon {
  padding: 0 16px; /* Adjust based on your icon size 
  background: #fff*/
 
</style>