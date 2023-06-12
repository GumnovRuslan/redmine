<script>
	export let name;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable = false;
	let icons = [
		{
			box: 32,
			name: 'stop',
			svg: `<g id="play"/><g id="stop"><g><path d="M28,27c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h22c0.55,0,1,0.45,1,1V27z"/><path d="M27,29H5c-1.103,0-2-0.897-2-2V5c0-1.103,0.897-2,2-2h22c1.103,0,2,0.897,2,2v22C29,28.103,28.103,29,27,29z M27,27v1V27    L27,27L27,27z M5,5v22h21.997L27,5H5z"/></g></g><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/></svg>`
		},
		{
			box: 32,
			name: 'play',
			svg: `<g id="play"><g><path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></g></g><g id="stop"/><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/>`
		},
		{
			box: 24,
			name: 'chevron-down',
			svg: `<path d="M7.75739 10.5858L9.1716 9.17154L12 12L14.8284 9.17157L16.2426 10.5858L12 14.8284L7.75739 10.5858Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V19C23 21.2091 21.2091 23 19 23H5C2.79086 23 1 21.2091 1 19V5ZM5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z" fill="#000000"/>`
		}
	];
	let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
	class={$$props.class}
	{focusable}
	{width}
	{height}
	viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
>
