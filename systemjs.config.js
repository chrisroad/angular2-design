/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'dist/app', //app

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/material': 'npm:@angular/material/material.umd.js',

      // ag libraries
      'ag-grid-ng2' : 'node_modules/ag-grid-ng2',
      'ag-grid' : 'node_modules/ag-grid',

      // 'ng2-menu': 'node_modules/ng2-menu/dist',

      'ng2-accordion': 'node_modules/ng2-accordion',
      'ng2-auto-complete': 'node_modules/ng2-auto-complete/dist',
      'ng2-modal': 'node_modules/ng2-modal',
      'ng2-dnd': 'node_modules/ng2-dnd',
      'ng2-dropdown': 'node_modules/ng2-dropdown',
      'md2-accordion': 'node_modules/md2-accordion',
      'md2-menu': 'node_modules/md2-menu',
      // other libraries
      'angular2-infinite-scroll': 'npm:angular2-infinite-scroll/src',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'angular2-infinite-scroll': {
           main: 'index'
       },
      'ag-grid-ng2': {
                    defaultExtension: "js"
                },
      'ag-grid': {
                    defaultExtension: "js"
                },
      'ng2-modal': {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'ng2-dnd':  {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'ng2-dropdown':  {
        main: 'index.js',
        defaultExtension: 'js'
      },
      'md2-accordion':  {
        main: 'index.js'
      },
      'ng2-accordion':  {
        main: 'index.js',
        defaultExtension: "js"
      },
      'md2-menu':  {
        main: 'menu.js',
        defaultExtension: "js"
      },
      'ng2-auto-complete':  {
        main: 'ng2-auto-complete.umd.js',
        defaultExtension: "js"
      }
    }
  });
})(this);
