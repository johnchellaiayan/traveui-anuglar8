// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl:'http://localhost:27070/',
  baseValue:'aaaaa',
  lockingTimeout: 10000, /* <----- locking Timeout  (10 seconds) */
  idleTimeOut: 14400, /* <----- Idle Time Out  (default : 14400 = 4 hours) */
  serverTimeout: 30000, /* Server timeout (default : 30000 = 30 seconds) */
  serverTimeoutErrorMsg: 'Looks like the server is taking to long to respond, Please try again in sometime',
  authCardErrorMsg: 'Automatically logged out due to inactivity!',
};


export const apiUrl = {
  getBookings: 'api/booking/bookings',
  saveBooking: 'api/booking/bookings',
  getDrivers: 'api/driver/drivers', 
  saveDriver: 'api/driver/drivers',
  getCustomers: 'api/customer/customers',
  saveCustomer: 'api/customer/customers'
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
