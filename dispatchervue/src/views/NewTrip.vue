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
                            <p class="ml-10 mt-5" style="font-family:Arial, Helvetica, sans-serif; font-size: medium; ">Trip Details</p> 
                            <v-spacer></v-spacer>
                            <p class="mr-10" style="text-decoration: underline;">Clear</p>
                        </v-row>
                    </v-card-subtitle>
                </div>
                <v-card-text>
                    <form>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                
                                <v-row><span class="ml-10 mb-5">Date </span><p class="ml-1" style="color: red;">*</p></v-row>
                                <v-text-field class = "ml-6" outlined v-model="tripDate" label="Trip Date" 
                                    type="date" required
                                    ></v-text-field>
                            </v-col>


                            <!-- Trip Rate with Currency Dropdown -->

                            <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Order No. </span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field outlined v-model="OrderNumber" aria-required="true"></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Rate </span><p class="ml-1" style="color: red;">*</p></v-row>
                              <div class="robin">
                                <span class="v-input rate-input theme--light v-text-field v-text-field--is-booted"></span>
                             
                                    <v-text-field
                                            v-model="rate"
                                          
                                  
                                            prepend-inner-icon="mdi-currency-usd"
                                            class="rate-input"
                                    >          
                                </v-text-field>
                      

                            </div>
                              
                              
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="auto">
                                <v-checkbox
                                    v-model="IsLoadDelivered"
                                    label="Is this load already delivered?"
                                    ></v-checkbox>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-btn text plain @click="ShowTripDetails = !ShowTripDetails" v-if="ShowTripDetails === false">Show advance settings
                                        <v-icon>{{ ShowTripDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                    <v-btn text plain @click="ShowTripDetails = !ShowTripDetails" v-if="ShowTripDetails === true">Hide advance settings
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
                        <p  class="mr-10" style="text-decoration:underline" >Clear</p>
                    </v-col>
                </v-row>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Name </span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field outlined :rules="rules" v-model="CustomerName" aria-required="true"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Phone</span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field :rules="rules" outlined v-model="CustomerPhoneNumber" aria-required="true" 
                               prepend-inner-icon="mdi-numeric-positive-1"
                               placeholder="_ _ _- _ _ _ - _ _ _ _">                                  
                                </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Address </span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field outlined :rules="rules" v-model="CustomerAddress" aria-required="true" placeholder="Unit/ Street 1 / Etc .. "
                               ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Street 2 </span></v-row>
                               <v-text-field outlined v-model="CustomerAddressStreet2" aria-required="true"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">State </span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field outlined :rules="rules" v-model="CustomerState" aria-required="true"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">City </span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field outlined :rules="rules" v-model="CustomerCity" aria-required="true"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                                <v-row><span class="ml-3 mb-5">Postal Code</span><p class="ml-1" style="color: red;">*</p></v-row>
                               <v-text-field :rules="rules" outlined v-model="CustomerPostalCode" aria-required="true" >
                                                   
                                </v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                                    <v-btn text plain @click="ShowAdvanceCustomerDetails = !ShowAdvanceCustomerDetails" v-if="ShowAdvanceCustomerDetails === false">Show advance settings
                                        <v-icon>{{ ShowAdvanceCustomerDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                    <v-btn text plain @click="ShowAdvanceCustomerDetails = !ShowAdvanceCustomerDetails" v-if="ShowAdvanceCustomerDetails === true">Hide advance settings
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
        <v-card style="width: fit-content;">
            <!--Steppers for details-->
            <v-stepper v-model="e1" class="mt-10" style="width: fit-content;">
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
                        <v-card class="mb-12" color="white lighten-1">
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
                        <v-card class="mb-12" color="white lighten-1">
                            <v-toolbar flat>
                                <v-toolbar-title>Highway Dispatch</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Clear</p>
                            </v-toolbar>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" sm="12">
                                        <v-stepper alt-labels>
                                            <v-stepper-header class="no-elevation">
                                                <v-stepper-step step="1">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup Overview</p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Pickup person</p>
                                                </v-stepper-step>

                                                <v-divider class="bold-dashed-divider"></v-divider>

                                                <!-- <v-stepper-step step="2">
                                                    <v-icon>mdi-check</v-icon>
                                                </v-stepper-step> -->

                                                <v-divider class="bold-dashed-divider"></v-divider>

                                                <v-stepper-step step="2">
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Deleivry overview</p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Address</p>
                                                    <p class="subtitle-2 mb-1" style="color: #2B2B2B;">Phone number</p>
                                                </v-stepper-step>
                                            </v-stepper-header>

                                        </v-stepper>
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

                        <v-row>
                            <v-col cols="auto">
                                <v-btn plain color="primary" @click="e1 = 2"><v-icon>mdi-chevron-left</v-icon>Drop off Details</v-btn>                            
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">
                                <v-btn plain color="primary" @click="SaveTripDetails()">Finish <v-icon>mdi-chevron-right</v-icon></v-btn>
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
                  tripDate: '',
            tripRate: '',
           
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
      CustomerName:'',
      CustomerPhoneNumber:'',
      CustomerAddress:'',
      CustomerAddressStreet2:'',
      CustomerState:'',
      CustomerCity:'',
      CustomerPostalCode:'',
      ShowAdvanceCustomerDetails:false
      
        };
    },
    methods: {

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
.robin{
    display:flex;
    text-align:center;
    align-items:center;
}
/* 
.v-text-field .v-input__control .v-input__slot {
    min-height: 70px !important;
    display: flex !important;
    align-items: center !important;
  } */
</style>
  