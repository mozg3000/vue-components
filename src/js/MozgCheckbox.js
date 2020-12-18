const MozgCheckbox = ({props, listeners}) => {
			chooseClass(props.item.state)
			function checkHandler(){
				listeners['checked-box'](props);
			}
			return (
				<div 
					{...attrs_ckb}
					v-on:click={checkHandler}
				></div>
			)
}
export {MozgCheckbox};

const attrs_ckb = {
	'class': ['checkbox']
};
function chooseClass(state){
	if(state === 1){
		attrs_ckb.class = ['checkbox', 'checked'];
	}else if(state === 0){
		attrs_ckb.class = ['checkbox', 'filled'];
	}else if(state === -1){
		attrs_ckb.class = ['checkbox', 'checkbox'];
	}
}
