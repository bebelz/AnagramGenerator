angular
	.module('app')

	.service('anagService', AnagService);

AnagService.$inject = ['$q','$resource'];
function AnagService(q,resource) {

	// Attributes
	var BASE_URL = 'http://178.32.218.17:8001';
	var AnagResource = resource(BASE_URL + '/anag/:word');
	var HistoryResource = resource(BASE_URL + '/history/:offset/:limit');

	// Methods
	this.getAnagram = getAnagram;
	this.getHistory = getHistory;

	function getAnagram(word) {
		return AnagResource.get({word: word}).$promise;
	}

	function getHistory(offset,limit) {
		return HistoryResource.get({offset: offset, limit: limit}).$promise;
	}
}
