<script>
	export let checked;
	export let label = '';
</script>

<label class="checkbox">
	<input class="checkbox__toggle" bind:checked type="checkbox" />
	<div class="checkbox__toggle-icon" />
	<span class="checkbox__label">{label}</span>
</label>

<style lang="scss">
	.checkbox {
		cursor: pointer;
		&__toggle {
			display: none;

			&:checked + .checkbox__toggle-icon {
				background: #428ded;
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:white;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M235.1,386.3c-5.7,0-11.1-2.4-14.9-6.6l-104.1-116c-7.4-8.2-6.7-20.9,1.5-28.2c8.2-7.4,20.9-6.7,28.2,1.5 l86.8,96.8l131.6-199.1c6.1-9.2,18.5-11.7,27.7-5.7c9.2,6.1,11.7,18.5,5.7,27.7L251.8,377.4c-3.4,5.2-9,8.5-15.2,8.9 C236.1,386.3,235.6,386.3,235.1,386.3z'/%3E%3C/g%3E%3C/svg%3E");
			}

			&:not(&:checked) + .checkbox__toggle-icon {
				background: #fefefd;
			}
		}

		&__toggle-icon {
			width: 18px;
			height: 18px;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 6px;
			background-position: 50%;
			background-repeat: no-repeat;
			background-size: 100%;
		}

		&__label {
		}
	}
</style>
