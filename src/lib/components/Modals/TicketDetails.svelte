<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import { getIssue } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	import Loading from '../Loading.svelte';
	import { processDescription, getImage } from '$lib/helpers/parserDescription';

	export let titleHeading = '';
	export let handlerClose = () => {};
	export let issueId;

	const { localApiKey } = $userData;
	$: issueData = null;
	let content = null;
	let attachments = null;
	let description = null;

	onMount(async () => {
		issueData = (await getIssue(localApiKey, issueId)).issue;
		content = processDescription(issueData.description, issueData.attachments, localApiKey);
		attachments = issueData.attachments;
		description = issueData.description;
		console.log(issueData.description);
	});
</script>

<Modal modalContentFlex={false} handleCloseModal={handlerClose} title={titleHeading}>
	<svelte:fragment slot="heading-content">
		{#if issueData && issueData.estimated_hours}
			<p class="ticket-details__text">Estimated time: {issueData.estimated_hours} h</p>
		{/if}
	</svelte:fragment>
	{#if !!issueData}
		{@html content}
		{#if !!attachments.length}
			<div class="ticket-details__files">
				<div class="ticket-details__files-title">Files</div>
				<div class="ticket-details__files-list">
					{#each attachments as { content_type, content_url, filename }}
						<a href={content_url} download class="ticket-details__file">
							{#if content_type.includes('image')}
								{@html getImage({ url: content_url, alt: filename }, 'preview', localApiKey)}
							{/if}
						</a>
					{/each}
				</div>
			</div>
		{/if}
		{#if !attachments.length && !content.length}
			<p style="text-align: center;">No details</p>
		{/if}
	{:else}
		<Loading />
	{/if}
</Modal>

<style lang="scss">
	.ticket-details {
		&__files {
			display: flex;
			flex-direction: column;

			@media (max-width: 1023.02px) {
				gap: 15px;
				padding-top: 25px;
			}

			@media (min-width: 1024px) {
				gap: 30px;
				padding-top: 50px;
			}
		}

		&__text {
			font-weight: 500;
			color: gray;

			@media (max-width: 1023.02px) {
				font-size: 12px;
				margin-top: 5px;
			}

			@media (min-width: 1024px) {
				font-size: 14px;
				margin-top: 10px;
			}
		}

		&__files-list {
			display: flex;
			flex-wrap: wrap;

			@media (max-width: 1023.02px) {
				gap: 10px;
			}

			@media (min-width: 1024px) {
				gap: 20px;
			}
		}

		&__files-title {
			font-weight: 700;
			color: #000000;

			@media (max-width: 1023.02px) {
				font-size: 16px;
				line-height: 20px;
			}

			@media (min-width: 1024px) {
				font-size: 20px;
				line-height: 27px;
			}
		}

		&__file {
			position: relative;

			background: #fefefd;
			border: 1px solid #c49c9c;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 6px;
			display: flex;
			overflow: hidden;

			@media (max-width: 1023.02px) {
				width: 100px;
				height: 100px;
			}

			@media (min-width: 1024px) {
				width: 150px;
				height: 150px;
			}

			img {
				z-index: 5;
			}

			&::before {
				content: '';
				position: absolute;
				background: #7a7a7a4f;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-repeat: no-repeat;
				background-size: 30%;
				background-position: 50% 50%;
				background-image: url('/icons/file.svg');
				z-index: 1;
			}

			&:hover {
				cursor: pointer;

				&::after {
					content: '';
					position: absolute;
					background: #7a7a7a4f;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-repeat: no-repeat;
					background-size: 30%;
					background-position: 50% 50%;
					background-image: url('/icons/download.svg');
					z-index: 10;
				}
			}
		}
	}
</style>
