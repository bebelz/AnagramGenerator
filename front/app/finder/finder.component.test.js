describe('component: finder', function() {
	var component, scope, $componentController;

	beforeEach(module('app'));

	beforeEach(inject(function($rootScope, _$componentController_) {
		scope = $rootScope.$new();
		$componentController = _$componentController_;
	}));

	it('should validate test', function() {
	    component = $componentController('finder', {$scope: scope});

	    expect(component.validateTyping('test')).toEqual(true);
	});

	it('should not validate 8', function() {
	    component = $componentController('finder', {$scope: scope});

	    expect(component.validateTyping('8')).toEqual(false);
	});
});