<script>
	import { onMount } from 'svelte';
	import userData from '$lib/stores/UserStore';
	import { getIssue } from '$lib/services/apiService';
	import Modal from './Modal.svelte';
	export let titleHeading = '';
	export let handlerClose = () => {};
	export let issueId;

	const { localApiKey } = $userData;
	$: issueData = null;
	let content = null;
	let attachments = null;

	const getImage = ({ url = '', alt = 'image' }) => {
		return `<img  src='${url}?key=${localApiKey}' alt='${alt}'/>`;
	};

	const processDescription = (description, attachments) => {
		attachments.forEach(({ filename, content_url }) => {
			description = description.replace(
				`!${filename}!`,
				getImage({ url: content_url, alt: filename })
			);
		});
		return description;
	};

	onMount(async () => {
		issueData = (await getIssue(localApiKey, issueId)).issue;
		content = processDescription(issueData.description, issueData.attachments);
		attachments = issueData.attachments;
	});
</script>

<Modal handleCloseModal={handlerClose} title={titleHeading}>
	{#if !!issueData}
		{@html content}
		{#if !!attachments.length}
			<div class="ticket-details__files">
				<div class="ticket-details__files-title">Files</div>
				<div class="ticket-details__files-list">
					{#each attachments as { content_type, content_url, filename }}
						<a href={content_url} download class="ticket-details__file">
							{#if content_type.includes('image')}
								{@html getImage({ url: content_url, alt: filename })}
							{/if}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	{:else}
		<p>LOADING ...</p>
	{/if}
</Modal>

<style lang="scss">
	.ticket-details {
		&__files {
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-top: 50px;
		}

		&__files-list {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
		}

		&__files-title {
			font-weight: 700;
			font-size: 20px;
			line-height: 27px;
			color: #000000;
		}

		&__file {
			position: relative;
			width: 150px;
			height: 150px;
			background: #fefefd;
			border: 1px solid #d6d6d6;
			box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
			border-radius: 6px;
			display: flex;
			overflow: hidden;

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
