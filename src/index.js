import Vue from 'vue';
import './css/styles.css';
import {MozgForm} from './js/MozgForm.js';
new Vue(
	{
		el: '#app',
		data: {
			
		},
		components: {
			MozgForm
		},
		methods: {
			
		},
		template: `
				<mozg-form />
		`,
	}
);