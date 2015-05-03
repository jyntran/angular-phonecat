'use strict';

/* jasmine specs for controllers go here */

/*

describe('controllers', function() {

  it("should do something", function() {

  });

});

*/

describe('PhoneListCtrl', function(){

  beforeEach(module('phonecatApp'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);

  }));

});


describe('PhoneListCtrl', function(){

  beforeEach(module('phonecatApp'));

  it('should show the name as World', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.name).toBe('World');

  }));

});



describe('PhoneListCtrl', function(){

  beforeEach(module('phonecatApp'));

  it('should create "phones" model with 4 phones (and fail)', inject(function($controller) {
    var scope = {},
        ctrl = $controller('PhoneListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(4);

  }));

});
