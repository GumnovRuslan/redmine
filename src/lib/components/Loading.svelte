<div class="loading">
	<div class="loading__wrapper">
		<div class="loading__icon">
			<img src="/loading.gif" alt="" />
		</div>
	</div>
</div>

<style lang="scss">
	.loading {
		&__wrapper {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&__icon {
			width: 35px;
			height: 35px;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
