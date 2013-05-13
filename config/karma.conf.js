basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/https://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
