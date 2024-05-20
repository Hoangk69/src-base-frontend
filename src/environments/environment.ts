// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint:
    'https://21y9rimn07.execute-api.ap-northeast-1.amazonaws.com/dev/new-year',
  url_web_parent:
    'http://system-micromarket-parent-store.s3-website-ap-northeast-1.amazonaws.com',

  url_web_child: 'http://system-micromarket-child-store.s3-website-ap-northeast-1.amazonaws.com',
  url_nci: 'http://nci-url',
  campaign_alliances: ['0910']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
