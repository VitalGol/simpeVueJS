var app = new Vue({
	el: '#app',
	data: {
		count: 0,
		url: '',
		cleanUrl: ''
	},
	methods: {
		countUp() {
			this.count += 1;
		},
		cleanerUrl() {
			this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
		}
	}
});