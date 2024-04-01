<script>
	import { onMount } from "svelte";
	import Icon from '$lib/components/Icon.svelte';
	import Button from './Button.svelte';
	import TimerStore, { statusEnum } from '../stores/TimerStore';
	import userData from '$lib/stores/UserStore';
	import { popupStore } from "../stores/popupStore.js";
	import {setStatusIssue, getStatuses, getMemberships, getIssues} from '$lib/services/apiService.js'
	import {statusIsChange} from '../stores/statusStore.js';
	import Dropdown from './Dropdown.svelte';
	import {availableStatusesForRole} from '../services/getAvailableStatuses'


	export let activeItemId = null;
	export let status = null;
	export let issue = {};
	export let handler = () => {};
	export let showDetails = () => {};
	export let showingTicketTimeEntries = () => {};

	const { localApiKey } = $userData;

	let statuses = [
        {
            name: 'To do',
            id: 1,
        },
        {
            name: 'In Progress',
            id: 2,
        },
        {
            name: 'Closed',
            id: 5,
        },
        {
            name: 'QA',
            id: 4,
			colorBg: 'red',
			colorText: 'blue'
        },
        {
            name: 'Resolved',
            id: 3,
        },
        {
            name: 'Estimate',
            id: 8,
        },
	]

	let statusColor = {
		1: ['white', 'black'],			//	To do
		2: ['#bbdbff', 'black'],	//  In Progress
		4: ['#ffe7c7f5', 'black'],			//	QA
		8: ['#fffd95', 'black'],			//	Estimate
		5: ['#bcfad2', 'black'],			//	Closed
		3: ['#bcfad2', 'black'],			//	Resolved
		// 12: ['red', 'black'],		//	Code Review
		// 6: ['red', 'black'],			//	Rejected
	}

	let animationBubble = false;

	onMount(() => {
		getAvailableStatuses(localApiKey, issue)
	})

	const ticketItemHandleClick = (e) => {
		if (handler()) {
			animationBubble = true;

			setTimeout(() => {
				animationBubble = false;
			}, 300);
		}
	};

	const handleShoDetails = (e) => {
		e.stopPropagation();
		showDetails();
	};

	const handleShowTimeEntries = (e) => {
		e.stopPropagation();
		showingTicketTimeEntries();
	};

	$: colorDot = $TimerStore.status == statusEnum.INIT ? 'red' : 'blue';
	$: isPlayingAnimation = $TimerStore.status == statusEnum.INIT ? true : false;

	async function changeStatus(ApiKey, issue_id, status_id, user_id) {
		let response = await setStatusIssue(ApiKey, issue_id, status_id, user_id)
		if (response.status) {
			statusIsChange.update(bull => !bull)
			popupStore.set({
				isShow: true,
				title: 'Notification',
				text: `Status ${issue.subject} is change`
			})
		}
	}

	async function getAvailableStatuses(ApiKey, issue) {
		let user_id = issue.assigned_to.id
		let project_id = issue.project.id
		let ticket_id = issue.id
		const statusesTrue = await getStatuses(ApiKey)
		const parents = await getIssues(ApiKey, false, false, false, ticket_id)
		const membership = await getMemberships(ApiKey, project_id)
		let parentsIsOpen = false
		if(parents.total_count)
			parentsIsOpen = !parents.issues.find(issue => issue.status.id == 5 || issue.status.id == 6)
		const userMembership = membership.find(membership => membership.user.id === user_id)
		const userRolesName = userMembership.roles.map(role => role.name)
		// const userRoleName = ['QA']
		let allStatuses = new Set()
		userRolesName.forEach(roleName => availableStatusesForRole[roleName][issue.status.id].forEach(n => allStatuses.add(n)))
		allStatuses = new Array(...allStatuses)
		if(parentsIsOpen)
			allStatuses = allStatuses.filter(status => status != 5 && status != 6)
		statuses = allStatuses.map(id => statusesTrue.find(status => status.id == id))
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={ticketItemHandleClick}
	class:active={activeItemId}
	class:isPlayingAnimation
	style="--colorDot: {colorDot}; background:{status};"
	class:buble={animationBubble}
	class="ticketItem"
>
	<div class="ticketItem__wrapper">
		<div class='ticketItem__header'>
			<div class='ticketItem__header-status'>
				<Dropdown
					items={statuses}
					bind:value={issue.status.id}
					handlerChange={(e) => changeStatus(localApiKey, issue.id, e.target.value, issue.assigned_to.id)}
					{statusColor}
					style={'second'}
				/>
			</div>
			<p class='ticketItem__header-id'>№ {issue.id}</p>
		</div>

		<div class="ticketItem__content">
			<p class="ticketItem__content-text ticketItem__content-title">{issue.subject}</p>
			<div on:click={handleShowTimeEntries} class="ticketItem__content-time">
				<p class="ticketItem__content-text">{issue.spent_time.toFixed(2)}h</p>
				<Icon width="30px" height="30px" name="chevron-down" />
			</div>
		</div>
		<Button handle={handleShoDetails} label="Show more" />
	</div>
</div>

<style lang="scss">
	.ticketItem {
		position: relative;
		background: #fefefd;
		border: 1px solid #d6d6d6;
		box-shadow: 4px 4px 15px 1px rgba(0, 0, 0, 0.05);
		border-radius: 12px;

		transition: 1s ease;
		cursor: pointer;

		@media (max-width: 1023.02px) {
			padding: 15px;
		}

		@media (min-width: 1024px) {
			padding: 25px;
		}

		&__status-select {
			border-radius: 10px;
			border: 1px solid #d6d6d6;
			padding: 5px 10px;
			cursor: pointer;
		}

		&.buble {
			animation: bubbleAnimation 0.3s ease-in-out infinite;
		}

		@keyframes bubbleAnimation {
			0%,
			100% {
				transform: scale(1);
			}
			50% {
				transform: scale(0.96);
			}
		}

		&.active.isPlayingAnimation {
			&:after {
				animation: pulseAnimation 1s ease-in-out infinite;
			}
		}

		&.active {
			@keyframes pulseAnimation {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(1.2);
				}
				100% {
					transform: scale(1);
				}
			}

			&:after {
				content: '';
				position: absolute;
				top: -10px;
				right: -10px;
				width: 25px;
				height: 25px;
				background: var(--colorDot);
				border-radius: 50%;
				border: 3px solid #d8d8d8;
				box-shadow: 0 0 4px 1px #c1c1c1;
			}
		}

		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 15px;
			align-items: flex-start;
		}

		&__header {
			display: flex;
			align-items: center;
			gap: 10px;
			justify-content: space-between;
			width: 100%;
		}

		&__header-id {
			font-weight: 500;
			font-size: 20px;
			color: #4b71c5;
		}

		&__content {
			position: relative;
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			width: 100%;
			gap: 20px;

			@media (max-width: 767.02px) {
				flex-wrap: wrap;
			}
		}

		&__content-title {
			padding-right: 30px;

			@media (max-width: 767.02px) {
				order: 2;
			}
		}

		&__content-text {
			font-weight: 700;
			color: #000000;
			cursor: pointer;

			@media (max-width: 1023.02px) {
				font-size: 16px;
				line-height: 20px;
			}

			@media (min-width: 1024px) {
				font-size: 20px;
				line-height: 27px;
			}
		}

		&__content-time {
			position: relative;
			display: flex;
			align-items: center;
			gap: 10px;
			cursor: pointer;
			transition: 0.3s ease;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 100%;
				height: 100%;
				padding: 25px 60px;
			}
		}

		&__text {
			padding-top: 20px;
			font-weight: 500;
			color: #7f818b;

			@media (max-width: 1023.02px) {
				font-size: 14px;
				line-height: 18px;
			}

			@media (min-width: 1024px) {
				font-size: 16px;
				line-height: 22px;
			}
		}
	}
</style>
