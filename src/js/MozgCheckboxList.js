import {MozgCheckbox} from './MozgCheckbox.js';

const MozgCheckboxList = ({props, listeners, data}) => {
		function checkListHandler(el){
			let {item} = el;
			if(el.item.state === 1){
				el.item.state = -1;
			}else if(item.state === -1 || el.item.state === 0){
				el.item.state = 1;
			}
			listeners['checked-box-list'](el);
		}
		function checkSubListHandler(el){
			listeners['checked-box-list'](el);
			
		}
		return (
			<div class={data.staticClass}>
				{
					props.items.map(
						(el) => {
							return (
								<div class="list">
									<div class="list_item">
										<MozgCheckbox 
											item={el}
											parent={props.parent}
											v-on:checked-box={checkListHandler}
											key={el.name}
										/>
										<p class="name">
											{el.name}
										</p>
									</div>
									<MozgCheckboxList 
										items={el.children}
										parent={el}
										v-on:checked-box-list={checkSubListHandler}
									/>
								</div>
							)
						}
					)
				}
			</div>
		)
}
export {MozgCheckboxList};

