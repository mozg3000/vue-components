import {MozgCheckboxList} from './MozgCheckboxList.js';

const MozgForm = {
	name: 'MozgForm',
	components: {MozgCheckboxList},
	data: ()=>({
		items: [
				{
					name: "Овощи",
					state: -1,
					children: [
						{
							name: 'Огурцы',
							state: -1,
							children: []
						},
						{
							name: 'Морковь',
							state: -1,
							children: []
						},
						{
							name: 'Помидоры',
							state: -1,
							children: []
						}
					]
				},
				{
					name: "Фрукты",
					state: -1,
					children: [
						{
							name: 'Бананы',
							state: -1,
							children: []
						},
						{
							name: 'Яблоки',
							state: -1,
							children: []
						},
						{
							name: 'Груши',
							state: -1,
							children: []
						}
					]
				},
				{
					name: "Ягоды",
					state: -1,
					children: [
						{
							name: 'Малина',
							state: -1,
							children: []
						},
						{
							name: 'Клубника',
							state: -1,
							children: []
						},
						{
							name: 'Черника',
							state: -1,
							children: []
						}
					]
				},
			]
	}),
	methods: {
		checkedHandler(el){
			if(el.item.children&&el.item.children.length){
				let state = el.item.state === 0?-1:el.item.state;
				console.log(state);
				el.item.children.forEach(
					(child) => {
						child.state = state;
					}
				);
			}
			if(el.parent){
				el.parent.state = this.calculateParentState(el.parent);
			}
		},
		calculateParentState(parent){
			let state = 0;
			let {children} = parent;
			let totalCount = children.length;
			let checkedChildrenCount= this.countCheckedhildren(children)
			if(checkedChildrenCount === totalCount){
				state = 1;
			}else if(checkedChildrenCount === 0){
				state = -1;
			}
			return state;
		},
		countCheckedhildren(children){
			let count = 0;
			children.forEach(
				(child) => {
					if(child.state === 1){
						count++
					}
				}
			);
			return count;
		}
	},
	template: `
		<MozgCheckboxList 
			@checked-box-list="checkedHandler"
			:items="items"
			:parent="null"
			class="list_top"
		/>
	`
}
export {MozgForm};