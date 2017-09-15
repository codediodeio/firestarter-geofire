// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  stripeKey: 'pk_test_8ym5jFx5qjjTDc8obZ1osDV8',

  firebaseConfig: {
    apiKey: "AIzaSyAc9Tt8pQQF3ntu2Tz66iUKl_fXHtdhIyc",
    authDomain: "firestarter-96e46.firebaseapp.com",
    databaseURL: "https://firestarter-96e46.firebaseio.com",
    storageBucket: "firestarter-96e46.appspot.com",
    messagingSenderId: "581326886241"
  },

  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW5ndWxhcmZpcmViYXNlIiwiYSI6ImNqNWViOG9tMzAyZmczM21ucHo5ZGRnZm4ifQ.9TCSekXr1vhwAThdNyjwZA'
  },

  algolia: {
    appId: 'UL7JZFIO8M',
    apiKey: '1996b3b69a028fb616c53523a990fad7',
    indexName: 'getstarted_actors',
    urlSync: false
  },

  googleMapsKey: 'AIzaSyDMAGAudc5h10Il2XyWPXFtqHFeFN_b6jw'

};
