import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as add_attribute, f as add_styles, h as each, o as onDestroy, i as null_to_empty } from "../../chunks/index3.js";
import { u as user, B as Button, s as setStatusIssue, I as Input, a as setTimeEntries, g as getIssues, b as getIssue, c as getStatuses, d as getMemberships } from "../../chunks/Input.js";
import { w as writable } from "../../chunks/index2.js";
const PageWrapper_svelte_svelte_type_style_lang = "";
const css$h = {
  code: ".page-wrapper.svelte-1o7p354{display:flex;flex-direction:column;gap:20px}@media(max-width: 1023.02px){.page-wrapper.svelte-1o7p354{margin:25px 0;margin-bottom:230px}}@media(min-width: 1024px){.page-wrapper.svelte-1o7p354{margin:50px 0}}",
  map: null
};
const PageWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$h);
  return `<div class="${"page-wrapper svelte-1o7p354"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const Container_svelte_svelte_type_style_lang = "";
const css$g = {
  code: ".container.svelte-w54deh{display:flex;flex-direction:column;gap:25px;max-width:1024px;margin-left:auto;margin-right:auto;width:100%}@media(max-width: 1023.02px){.container.svelte-w54deh{padding:0 20px}}@media(min-width: 1024px){.container.svelte-w54deh{padding:0 32px}}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$g);
  return `<div class="${"container svelte-w54deh"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const UserBar_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".userbar__wrapper.svelte-16womzn{display:flex;justify-content:space-between;padding:25px;background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:12px}@media(max-width: 1023.02px){.userbar__wrapper.svelte-16womzn{gap:20px;flex-wrap:wrap}}@media(min-width: 1024px){.userbar__wrapper.svelte-16womzn{align-items:center}}.userbar__content.svelte-16womzn{display:flex;flex-direction:column;gap:8px}.userbar__title.svelte-16womzn{font-weight:700;color:#000000}@media(max-width: 1023.02px){.userbar__title.svelte-16womzn{font-size:16px;line-height:20px}}@media(min-width: 1024px){.userbar__title.svelte-16womzn{font-size:20px;line-height:27px}}.userbar__text.svelte-16womzn{font-weight:500;color:#7f818b}@media(max-width: 1023.02px){.userbar__text.svelte-16womzn{font-size:14px;line-height:1 6px}}@media(min-width: 1024px){.userbar__text.svelte-16womzn{font-size:16px;line-height:22px}}",
  map: null
};
const UserBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  function handleButtonLogout() {
    const STORAGE_KEY = "savedAuthData";
    localStorage.removeItem(STORAGE_KEY);
    user.set({});
    window.location.href = "/login";
  }
  $$result.css.add(css$f);
  $$unsubscribe_userData();
  return `${$userData.firstname ? `<section class="${"userbar"}"><div class="${"userbar__wrapper svelte-16womzn"}"><div class="${"userbar__content svelte-16womzn"}"><p class="${"userbar__title svelte-16womzn"}">${escape($userData.firstname)} ${escape($userData.lastname)}</p>
				<p class="${"userbar__text svelte-16womzn"}">${escape($userData.mail)}</p></div>
			${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "hoverRed",
      label: "Log out",
      handle: handleButtonLogout
    },
    {},
    {}
  )}</div></section>` : ``}`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { width = "1rem" } = $$props;
  let { height = "1rem" } = $$props;
  let { focusable = false } = $$props;
  let icons = [
    {
      box: 32,
      name: "stop",
      svg: `<g id="play"/><g id="stop"><g><path d="M28,27c0,0.55-0.45,1-1,1H5c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h22c0.55,0,1,0.45,1,1V27z"/><path d="M27,29H5c-1.103,0-2-0.897-2-2V5c0-1.103,0.897-2,2-2h22c1.103,0,2,0.897,2,2v22C29,28.103,28.103,29,27,29z M27,27v1V27    L27,27L27,27z M5,5v22h21.997L27,5H5z"/></g></g><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/></svg>`
    },
    {
      box: 32,
      name: "play",
      svg: `<g id="play"><g><path d="M4.993,2.496C4.516,2.223,4,2.45,4,3v26c0,0.55,0.516,0.777,0.993,0.504l22.826-13.008    c0.478-0.273,0.446-0.719-0.031-0.992L4.993,2.496z"/><path d="M4.585,30.62L4.585,30.62C3.681,30.62,3,29.923,3,29V3c0-0.923,0.681-1.62,1.585-1.62c0.309,0,0.621,0.085,0.904,0.248    l22.794,13.007c0.559,0.319,0.878,0.823,0.878,1.382c0,0.548-0.309,1.039-0.847,1.347L5.488,30.373    C5.206,30.534,4.894,30.62,4.585,30.62z M5,3.651v24.698l21.655-12.34L5,3.651z"/></g></g><g id="stop"/><g id="pause"/><g id="replay"/><g id="next"/><g id="Layer_8"/><g id="search"/><g id="list"/><g id="love"/><g id="menu"/><g id="add"/><g id="headset"/><g id="random"/><g id="music"/><g id="setting"/><g id="Layer_17"/><g id="Layer_18"/><g id="Layer_19"/><g id="Layer_20"/><g id="Layer_21"/><g id="Layer_22"/><g id="Layer_23"/><g id="Layer_24"/><g id="Layer_25"/><g id="Layer_26"/>`
    },
    {
      box: 24,
      name: "chevron-down",
      svg: `<path d="M7.75739 10.5858L9.1716 9.17154L12 12L14.8284 9.17157L16.2426 10.5858L12 14.8284L7.75739 10.5858Z" fill="#000000"></path>`
    }
  ];
  let displayIcon = icons.find((e) => e.name === name);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  return `<svg${add_attribute("class", $$props.class, 0)}${add_attribute("focusable", focusable, 0)}${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 " + escape(displayIcon.box, true) + " " + escape(displayIcon.box, true)}"><!-- HTML_TAG_START -->${displayIcon.svg}<!-- HTML_TAG_END --></svg>`;
});
const statusEnum = {
  INIT: "init",
  PAUSE: "pause",
  DEFAULT: ""
};
const defaultState = {
  status: statusEnum.DEFAULT,
  taskId: null,
  time: "",
  pauseValue: ""
};
const TIMER_KEY = "timer";
const timer = writable(defaultState);
const isBrowser = typeof window !== "undefined";
const timerLocalStorage = isBrowser ? JSON.parse(localStorage.getItem(TIMER_KEY)) : defaultState;
if (timerLocalStorage) {
  timer.set(timerLocalStorage);
}
timer.saveToLocal = () => {
  let valueStore = null;
  timer.subscribe((value) => valueStore = value);
  if (valueStore.taskId != defaultState.taskId && valueStore.time > 0) {
    if (valueStore.status === statusEnum.INIT) {
      valueStore.pauseValue = new Date().getTime();
    }
    localStorage.setItem("timer", JSON.stringify(valueStore));
  } else {
    localStorage.removeItem("timer");
  }
};
timer.start = (taskId, timeValue) => {
  timer.subscribe((value) => value);
  timer.set({
    status: statusEnum.INIT,
    taskId,
    time: timeValue
  });
  timer.saveToLocal();
};
timer.pause = (timeValue) => {
  var timerValue = null;
  timer.subscribe((value) => timerValue = value);
  timer.set({
    ...timerValue,
    status: statusEnum.PAUSE,
    time: timeValue
  });
  timer.saveToLocal();
};
timer.clear = () => {
  timer.set(defaultState);
  timer.saveToLocal();
};
timer.getTime = () => {
  var currentTime = new Date().getTime();
  let timerValue = null;
  timer.subscribe((value) => timerValue = value);
  if (timerValue.status === statusEnum.INIT && !!timerValue.pauseValue) {
    timerValue.time += currentTime - timerValue.pauseValue;
    timerValue.pauseValue = "";
  }
  return timerValue.time;
};
const popupStore = writable({
  title: "",
  text: "",
  isShow: false
});
const statusIsChange = writable(false);
const Dropdown_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ".field.svelte-1y2yrw3{position:relative;display:flex;flex-direction:column;gap:10px}.field__input.svelte-1y2yrw3{background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:5px;padding:5px 10px;appearance:auto;-webkit-appearance:auto;font-weight:500}.field__input.svelte-1y2yrw3:focus,.field__input.svelte-1y2yrw3:active{outline:0}.field__input--second.svelte-1y2yrw3{border-radius:10px}.field__input-item.svelte-1y2yrw3{background:#fefefd}.field__label.svelte-1y2yrw3{font-weight:600;font-size:14px;line-height:16px;color:#9095a1;line-height:16px;font-size:16px}",
  map: null
};
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { value } = $$props;
  let { placeholder = "" } = $$props;
  let { handlerChange = "" } = $$props;
  let { statusColor = {} } = $$props;
  let { style = false } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.handlerChange === void 0 && $$bindings.handlerChange && handlerChange !== void 0)
    $$bindings.handlerChange(handlerChange);
  if ($$props.statusColor === void 0 && $$bindings.statusColor && statusColor !== void 0)
    $$bindings.statusColor(statusColor);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$e);
  return `<label class="${"field svelte-1y2yrw3"}">${placeholder ? `<span class="${"field__label svelte-1y2yrw3"}">${escape(placeholder)}</span>` : ``}
	<select class="${["field__input svelte-1y2yrw3", style == "second" ? "field__input--second" : ""].join(" ").trim()}"${add_styles({
    "background": statusColor[value]?.[0] ?? "#fff",
    "color": statusColor[value]?.[1] ?? "#000"
  })}>${each(items, ({ id, name }) => {
    return `<option class="${"field__input-item svelte-1y2yrw3"}"${add_attribute("value", id, 0)}>${escape(name)}</option>`;
  })}</select>
</label>`;
});
const TicketItem_svelte_svelte_type_style_lang = "";
const css$d = {
  code: '.ticketItem.svelte-a3z49k{position:relative;background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:12px;transition:1s ease;cursor:pointer}@media(max-width: 1023.02px){.ticketItem.svelte-a3z49k{padding:15px}}@media(min-width: 1024px){.ticketItem.svelte-a3z49k{padding:25px}}.ticketItem.buble.svelte-a3z49k{animation:svelte-a3z49k-bubbleAnimation 0.3s ease-in-out infinite}@keyframes svelte-a3z49k-bubbleAnimation{0%,100%{transform:scale(1)}50%{transform:scale(0.96)}}.ticketItem.active.isPlayingAnimation.svelte-a3z49k:after{animation:svelte-a3z49k-pulseAnimation 1s ease-in-out infinite}@keyframes svelte-a3z49k-pulseAnimation{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}.ticketItem.active.svelte-a3z49k:after{content:"";position:absolute;top:-10px;right:-10px;width:25px;height:25px;background:var(--colorDot);border-radius:50%;border:3px solid #d8d8d8;box-shadow:0 0 4px 1px #c1c1c1}.ticketItem__wrapper.svelte-a3z49k{display:flex;flex-direction:column;gap:15px;align-items:flex-start}.ticketItem__header.svelte-a3z49k{display:flex;align-items:center;gap:10px;justify-content:space-between;width:100%}.ticketItem__header-id.svelte-a3z49k{font-weight:500;font-size:20px;color:#4b71c5}.ticketItem__content.svelte-a3z49k{position:relative;display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:20px}@media(max-width: 767.02px){.ticketItem__content.svelte-a3z49k{flex-wrap:wrap}}.ticketItem__content-title.svelte-a3z49k{padding-right:30px}@media(max-width: 767.02px){.ticketItem__content-title.svelte-a3z49k{order:2}}.ticketItem__content-text.svelte-a3z49k{font-weight:700;color:#000000;cursor:pointer}@media(max-width: 1023.02px){.ticketItem__content-text.svelte-a3z49k{font-size:16px;line-height:20px}}@media(min-width: 1024px){.ticketItem__content-text.svelte-a3z49k{font-size:20px;line-height:27px}}.ticketItem__content-time.svelte-a3z49k{position:relative;display:flex;align-items:center;gap:10px;cursor:pointer;transition:0.3s ease}.ticketItem__content-time.svelte-a3z49k::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;height:100%;padding:25px 60px}@media(max-width: 1023.02px){}@media(min-width: 1024px){}',
  map: null
};
const TicketItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colorDot;
  let isPlayingAnimation;
  let $TimerStore, $$unsubscribe_TimerStore;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_TimerStore = subscribe(timer, (value) => $TimerStore = value);
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  let { activeItemId = null } = $$props;
  let { status = null } = $$props;
  let { issue = {} } = $$props;
  let { handler = () => {
  } } = $$props;
  let { showDetails = () => {
  } } = $$props;
  let { showingTicketTimeEntries = () => {
  } } = $$props;
  const { localApiKey } = $userData;
  let statusColor = {
    1: ["white", "black"],
    //	To do
    2: ["#bbdbff", "black"],
    //  In Progress
    4: ["#ffe7c7f5", "black"],
    //	QA
    8: ["#fffd95", "black"],
    //	Estimate
    5: ["#bcfad2", "black"],
    //	Closed
    3: ["#bcfad2", "black"]
    //	Resolved
  };
  const handleShoDetails = (e) => {
    e.stopPropagation();
    showDetails();
  };
  async function changeStatus(ApiKey, issue_id, status_id, user_id) {
    let response = await setStatusIssue(ApiKey, issue_id, status_id, user_id);
    if (response.status) {
      statusIsChange.update((bull) => !bull);
      popupStore.set({
        isShow: true,
        title: "Notification",
        text: `Status ${issue.subject} is change`
      });
    }
  }
  if ($$props.activeItemId === void 0 && $$bindings.activeItemId && activeItemId !== void 0)
    $$bindings.activeItemId(activeItemId);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.issue === void 0 && $$bindings.issue && issue !== void 0)
    $$bindings.issue(issue);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.showDetails === void 0 && $$bindings.showDetails && showDetails !== void 0)
    $$bindings.showDetails(showDetails);
  if ($$props.showingTicketTimeEntries === void 0 && $$bindings.showingTicketTimeEntries && showingTicketTimeEntries !== void 0)
    $$bindings.showingTicketTimeEntries(showingTicketTimeEntries);
  $$result.css.add(css$d);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    colorDot = $TimerStore.status == statusEnum.INIT ? "red" : "blue";
    isPlayingAnimation = $TimerStore.status == statusEnum.INIT ? true : false;
    $$rendered = `
<div style="${"--colorDot: " + escape(colorDot, true) + "; background:" + escape(status, true) + ";"}" class="${[
      "ticketItem svelte-a3z49k",
      (activeItemId ? "active" : "") + " " + (isPlayingAnimation ? "isPlayingAnimation" : "") + " "
    ].join(" ").trim()}"><div class="${"ticketItem__wrapper svelte-a3z49k"}"><div class="${"ticketItem__header svelte-a3z49k"}"><div class="${"ticketItem__header-status"}">${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        items: issue.available_statuses ?? [],
        handlerChange: (e) => changeStatus(localApiKey, issue.id, e.target.value, issue.assigned_to.id),
        statusColor,
        style: "second",
        value: issue.status.id
      },
      {
        value: ($$value) => {
          issue.status.id = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
			<p class="${"ticketItem__header-id svelte-a3z49k"}">№ ${escape(issue.id)}</p></div>

		<div class="${"ticketItem__content svelte-a3z49k"}"><p class="${"ticketItem__content-text ticketItem__content-title svelte-a3z49k"}">${escape(issue.subject)}</p>
			<div class="${"ticketItem__content-time svelte-a3z49k"}"><p class="${"ticketItem__content-text svelte-a3z49k"}">${escape(issue.spent_time.toFixed(2))}h</p>
				${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        width: "30px",
        height: "30px",
        name: "chevron-down"
      },
      {},
      {}
    )}</div></div>
		${validate_component(Button, "Button").$$render(
      $$result,
      {
        handle: handleShoDetails,
        label: "Show more"
      },
      {},
      {}
    )}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_TimerStore();
  $$unsubscribe_userData();
  return $$rendered;
});
const priorityColor = {
  low: "#2196f34a",
  normal: "",
  high: "#ffff6299",
  urgent: "#fe8a2d",
  immediate: "#ee2e2eb0"
};
const TicketList_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".ticketList__wrapper.svelte-1ut4nxm{display:flex;flex-direction:column;gap:20px}.ticketList__title.svelte-1ut4nxm{font-weight:800;font-size:16px;line-height:22px;color:#7f818b}.ticketList__items.svelte-1ut4nxm{display:flex;flex-direction:column;gap:20px}",
  map: null
};
const TicketList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { issues } = $$props;
  let { activeItemId } = $$props;
  let { handler = () => {
  } } = $$props;
  let { toggleTicketDetails = () => {
  } } = $$props;
  let { toggleTicketTimeEntries = () => {
  } } = $$props;
  const showDetails = (issue) => {
    toggleTicketDetails(issue);
  };
  const showingTicketTimeEntries = (issue) => {
    toggleTicketTimeEntries(issue);
  };
  if ($$props.issues === void 0 && $$bindings.issues && issues !== void 0)
    $$bindings.issues(issues);
  if ($$props.activeItemId === void 0 && $$bindings.activeItemId && activeItemId !== void 0)
    $$bindings.activeItemId(activeItemId);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.toggleTicketDetails === void 0 && $$bindings.toggleTicketDetails && toggleTicketDetails !== void 0)
    $$bindings.toggleTicketDetails(toggleTicketDetails);
  if ($$props.toggleTicketTimeEntries === void 0 && $$bindings.toggleTicketTimeEntries && toggleTicketTimeEntries !== void 0)
    $$bindings.toggleTicketTimeEntries(toggleTicketTimeEntries);
  $$result.css.add(css$c);
  return `${!!issues.length ? `<div class="${"ticketList"}"><div class="${"ticketList__wrapper svelte-1ut4nxm"}"><p class="${"ticketList__title svelte-1ut4nxm"}">Ticket</p>
			<div class="${"ticketList__items svelte-1ut4nxm"}">${each(issues, ({ priority, ...issue }) => {
    return `${validate_component(TicketItem, "TicketItem").$$render(
      $$result,
      {
        handler: () => handler(issue),
        showingTicketTimeEntries: () => showingTicketTimeEntries(issue),
        showDetails: () => showDetails(issue),
        status: priorityColor[priority.name.toLowerCase()],
        issue,
        activeItemId: activeItemId == issue.id ? true : false
      },
      {},
      {}
    )}`;
  })}</div></div></div>` : ``}`;
});
const formatTime = (ms) => {
  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };
  const hours = Math.floor(ms / 36e5);
  ms %= 36e5;
  const minutes = Math.floor(ms / 6e4);
  ms %= 6e4;
  const seconds = Math.floor(ms / 1e3);
  return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
};
const Timer_svelte_svelte_type_style_lang = "";
const css$b = {
  code: `.timer.svelte-rf6nfr.svelte-rf6nfr{z-index:50;background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:12px;padding:20px 15px;height:fit-content;margin-top:55px}@media(max-width: 767.02px){.timer.svelte-rf6nfr.svelte-rf6nfr{width:calc(100% - 40px);left:20px}}@media(min-width: 768px) and (max-width: 1023.02px){.timer.svelte-rf6nfr.svelte-rf6nfr{width:350px;right:20px}}@media(max-width: 1023.02px){.timer.svelte-rf6nfr.svelte-rf6nfr{position:fixed;bottom:20px;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.2)}}@media(min-width: 1024px){.timer.svelte-rf6nfr.svelte-rf6nfr{position:sticky;top:20px}}.timer__hidden.svelte-rf6nfr.svelte-rf6nfr{opacity:0;pointer-events:none}.timer__wrapper.svelte-rf6nfr.svelte-rf6nfr{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:20px}.timer__task-title.svelte-rf6nfr.svelte-rf6nfr{position:relative;padding:8px 18px;background:#f4f4f5;border-radius:23px;font-weight:700;font-size:16px;line-height:22px;color:#9095a1;width:100%;word-break:break-word}.timer__task-title.svelte-rf6nfr.svelte-rf6nfr::after{content:"";position:absolute;top:0;right:0;width:15px;height:15px;background:#ff6d6b;border:2px solid #fefefd;border-radius:50%}.timer__controls.svelte-rf6nfr.svelte-rf6nfr{display:flex;align-items:center;gap:5px;width:100%;justify-content:space-between;flex-wrap:wrap}.timer__btns.svelte-rf6nfr.svelte-rf6nfr{display:flex;align-items:center;gap:20px}.timer__time-value.svelte-rf6nfr.svelte-rf6nfr{font-weight:700;font-size:20px;line-height:27px;width:100px}.timer__time-value.active.svelte-rf6nfr.svelte-rf6nfr{color:#1e2026}.timer__time-value.svelte-rf6nfr.svelte-rf6nfr:not(.timer__time-value.active){color:#9095a1}.timer__btn.svelte-rf6nfr.svelte-rf6nfr{min-width:40px;min-height:40px;display:flex;border-radius:50%;overflow:hidden;align-items:center;justify-content:center;cursor:pointer;transition:0.3s ease-in-out}.timer__btn.svelte-rf6nfr span.svelte-rf6nfr{display:flex;width:15px;height:15px;border-radius:2px}.timer__btn.svelte-rf6nfr.svelte-rf6nfr:not(.timer__btn.confirm, .timer__btn.pause){background:#e8f7e5}.timer__btn.svelte-rf6nfr:not(.timer__btn.confirm, .timer__btn.pause) span.svelte-rf6nfr{margin-left:1px;position:relative;background-repeat:no-repeat;background-position:right;background-image:url("data:image/svg+xml,%3Csvg width='13' height='16' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.66663 3.61552C1.66663 2.92595 1.66663 2.58116 1.81073 2.38868C1.93631 2.22093 2.12854 2.11599 2.33755 2.10106C2.57739 2.08393 2.86742 2.27037 3.44748 2.64327L10.2677 7.02771C10.7711 7.35129 11.0227 7.51308 11.1097 7.7188C11.1856 7.89855 11.1856 8.10138 11.1097 8.28114C11.0227 8.48686 10.7711 8.64865 10.2677 8.97223L3.44748 13.3567C2.86742 13.7296 2.57739 13.916 2.33755 13.8989C2.12854 13.8839 1.93631 13.779 1.81073 13.6113C1.66663 13.4188 1.66663 13.074 1.66663 12.3844V3.61552Z' fill='%237ED36D' stroke='%237ED36D' stroke-width='2.88957' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")}.timer__btn:not(.timer__btn.active, .timer__btn.pause).confirm.svelte-rf6nfr.svelte-rf6nfr{background:#7ed36d}.timer__btn:not(.timer__btn.active, .timer__btn.pause).confirm.svelte-rf6nfr span.svelte-rf6nfr{width:25px;height:25px;position:relative;background-repeat:no-repeat;background-position:center;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:white;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M235.1,386.3c-5.7,0-11.1-2.4-14.9-6.6l-104.1-116c-7.4-8.2-6.7-20.9,1.5-28.2c8.2-7.4,20.9-6.7,28.2,1.5 l86.8,96.8l131.6-199.1c6.1-9.2,18.5-11.7,27.7-5.7c9.2,6.1,11.7,18.5,5.7,27.7L251.8,377.4c-3.4,5.2-9,8.5-15.2,8.9 C236.1,386.3,235.6,386.3,235.1,386.3z'/%3E%3C/g%3E%3C/svg%3E")}.timer__btn:not(.timer__btn.active):not(.timer__btn.confirm).pause.svelte-rf6nfr.svelte-rf6nfr{background:#e8f0fc}.timer__btn:not(.timer__btn.active):not(.timer__btn.confirm).pause.svelte-rf6nfr span.svelte-rf6nfr{width:4px;background:#428ded;box-shadow:8px 0 0px 0 #428ded;margin-left:-7px}`,
  map: null
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formattedTime;
  let $$unsubscribe_TimerStore;
  $$unsubscribe_TimerStore = subscribe(timer, (value) => value);
  let { handle = () => {
  } } = $$props;
  let { time } = $$props;
  let { activeIssueName } = $$props;
  let { activeIssueId } = $$props;
  let interval = null;
  let buttonConditionStatus = "";
  if ($$props.handle === void 0 && $$bindings.handle && handle !== void 0)
    $$bindings.handle(handle);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  if ($$props.activeIssueName === void 0 && $$bindings.activeIssueName && activeIssueName !== void 0)
    $$bindings.activeIssueName(activeIssueName);
  if ($$props.activeIssueId === void 0 && $$bindings.activeIssueId && activeIssueId !== void 0)
    $$bindings.activeIssueId(activeIssueId);
  $$result.css.add(css$b);
  formattedTime = formatTime(time);
  {
    {
      if (time === null) {
        buttonConditionStatus = "";
      }
    }
  }
  $$unsubscribe_TimerStore();
  return `
<div class="${"timer svelte-rf6nfr"}"><div class="${"timer__wrapper svelte-rf6nfr"}"><div class="${"timer__task-title svelte-rf6nfr"}">${escape(activeIssueName)}</div>
		<div class="${"timer__controls svelte-rf6nfr"}"><p class="${"timer__time-value svelte-rf6nfr"}">${escape(formattedTime)}</p>
			<div class="${"timer__btns svelte-rf6nfr"}"><div class="${"timer__btn " + escape(buttonConditionStatus, true) + " svelte-rf6nfr"}"><span class="${"svelte-rf6nfr"}"></span></div>
				<div class="${[
    "timer__btn confirm svelte-rf6nfr",
    !(!!time && !interval && buttonConditionStatus != "pause") ? "timer__hidden" : ""
  ].join(" ").trim()}"><span class="${"svelte-rf6nfr"}"></span></div></div></div></div>
</div>`;
});
const Loading_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".loading__wrapper.svelte-pcvlja.svelte-pcvlja{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.loading__icon.svelte-pcvlja.svelte-pcvlja{width:35px;height:35px}.loading__icon.svelte-pcvlja img.svelte-pcvlja{width:100%;height:100%}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div class="${"loading"}"><div class="${"loading__wrapper svelte-pcvlja"}"><div class="${"loading__icon svelte-pcvlja"}"><img src="${"/loading.gif"}" alt="${""}" class="${"svelte-pcvlja"}"></div></div>
</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: '.modal.svelte-19ozjhe{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;z-index:100}@media(max-width: 1023.02px){.modal.svelte-19ozjhe{padding:10px}}@media(min-width: 1024px){.modal.svelte-19ozjhe{padding:50px}}.modal__backdrop.svelte-19ozjhe{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.1607843137);z-index:-1}.modal__wrapper.svelte-19ozjhe{background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:12px;max-width:1024px;height:fit-content;max-height:100%}@media(max-width: 1023.02px){.modal__wrapper.svelte-19ozjhe{padding:15px 5px 15px 15px}}@media(min-width: 1024px){.modal__wrapper.svelte-19ozjhe{padding:25px 10px 25px 25px}}.modal__inner-wrapper.svelte-19ozjhe{display:flex;flex-direction:column;max-height:70vh;overflow:auto}@media(max-width: 1023.02px){.modal__inner-wrapper.svelte-19ozjhe{padding-right:10px;gap:10px}}@media(min-width: 1024px){.modal__inner-wrapper.svelte-19ozjhe{padding-right:15px;gap:20px}}.modal__controls.svelte-19ozjhe{display:flex;flex-direction:column}@media(max-width: 1023.02px){.modal__controls.svelte-19ozjhe{gap:10px}}@media(min-width: 1024px){.modal__controls.svelte-19ozjhe{gap:15px}}.modal__content.svelte-19ozjhe{display:flex;flex-direction:column}@media(max-width: 1023.02px){.modal__content.svelte-19ozjhe{gap:10px;padding:20px 0}}@media(min-width: 1024px){.modal__content.svelte-19ozjhe{gap:20px;padding:35px 0}}.modal__heading.svelte-19ozjhe{display:flex;align-items:center;justify-content:space-between}@media(max-width: 1023.02px){.modal__heading.svelte-19ozjhe{gap:25px;padding-bottom:15px;padding-right:10px}}@media(min-width: 1024px){.modal__heading.svelte-19ozjhe{gap:50px;padding-bottom:25px;padding-right:15px}}.modal__title.svelte-19ozjhe{font-weight:700;color:#000000}@media(max-width: 1023.02px){.modal__title.svelte-19ozjhe{font-size:16px;line-height:20px}}@media(min-width: 1024px){.modal__title.svelte-19ozjhe{font-size:20px;line-height:27px}}.modal__icon.svelte-19ozjhe{cursor:pointer;position:relative;width:15px;height:15px}.modal__icon.svelte-19ozjhe::after,.modal__icon.svelte-19ozjhe::before{content:"";position:absolute;top:50%;left:50%;width:100%;height:2px;background:black}.modal__icon.svelte-19ozjhe::after{transform:translate(-50%, -50%) rotate(45deg)}.modal__icon.svelte-19ozjhe::before{transform:translate(-50%, -50%) rotate(-45deg)}',
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { modalContentFlex = true } = $$props;
  let { handleCloseModal = () => {
  } } = $$props;
  onDestroy(() => {
    document.querySelector("body").style.overflow = "auto";
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.modalContentFlex === void 0 && $$bindings.modalContentFlex && modalContentFlex !== void 0)
    $$bindings.modalContentFlex(modalContentFlex);
  if ($$props.handleCloseModal === void 0 && $$bindings.handleCloseModal && handleCloseModal !== void 0)
    $$bindings.handleCloseModal(handleCloseModal);
  $$result.css.add(css$9);
  return `<div class="${"modal svelte-19ozjhe"}"><div class="${"modal__wrapper svelte-19ozjhe"}"><div class="${"modal__heading svelte-19ozjhe"}"><div class="${"modal__heading-content"}"><div class="${"modal__title svelte-19ozjhe"}">${escape(title)}</div>
				<div class="${"modal__heading-slot"}">${slots["heading-content"] ? slots["heading-content"]({}) : ``}</div></div>
			
			<span class="${"modal__icon svelte-19ozjhe"}"></span></div>
		<div class="${"modal__inner-wrapper svelte-19ozjhe"}"><div class="${["svelte-19ozjhe", modalContentFlex ? "modal__content" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
			<div class="${"modal__controls svelte-19ozjhe"}">${slots.controls ? slots.controls({}) : ``}</div></div></div>
	
	<div class="${"modal__backdrop svelte-19ozjhe"}"></div>
</div>`;
});
const TrackTimeModal_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".TrackTimeModal__error-message.svelte-ttu3rp{color:red;font-size:12px;font-weight:600}",
  map: null
};
const TrackTimeModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errors;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  let { timeSpent } = $$props;
  let { activeIssue } = $$props;
  let { titleHeading = "" } = $$props;
  let { handler = () => {
  } } = $$props;
  let { handlerClose = () => {
  } } = $$props;
  const { localApiKey } = $userData;
  let billableActivity = 0;
  let billableValue = [
    { name: "No", id: 0, is_default: false },
    { name: "Yes", id: 1, is_default: true }
  ];
  let activities = [];
  let activeActivity = null;
  let comment = "";
  let dateSpent;
  async function handleClickCreate() {
    const timeEntry = {
      issue_id: activeIssue.id,
      spent_on: dateSpent,
      hours: timeSpent > 0.01 ? timeSpent : 0.01,
      activity_id: activeActivity,
      comments: comment,
      billable_id: billableActivity
    };
    if (!validateDate(dateSpent)) {
      errors.date = { message: "Введите корректную дату" };
    } else {
      delete errors?.date;
      errors = errors;
    }
    if (!validateTimeSpent(timeSpent)) {
      errors.timeSpent = {
        message: "Введите корректное затраченное время"
      };
    } else {
      delete errors?.timeSpent;
      errors = errors;
    }
    if (Object.keys(errors).length > 0) {
      return;
    }
    await setStatusIssue(localApiKey, activeIssue.id, activeIssue.status.id, activeIssue.assigned_to.id);
    const response = await setTimeEntries(localApiKey, timeEntry);
    if (response.status) {
      popupStore.set({
        isShow: true,
        title: "Notification",
        text: response.responseMessage
      });
      handlerClose();
      handler(response.responseMessage);
      timer.clear();
    }
  }
  const validateDate = (date) => {
    const dateRegex = /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])$/;
    return dateRegex.test(date);
  };
  const validateTimeSpent = (value) => {
    return value > 0;
  };
  if ($$props.timeSpent === void 0 && $$bindings.timeSpent && timeSpent !== void 0)
    $$bindings.timeSpent(timeSpent);
  if ($$props.activeIssue === void 0 && $$bindings.activeIssue && activeIssue !== void 0)
    $$bindings.activeIssue(activeIssue);
  if ($$props.titleHeading === void 0 && $$bindings.titleHeading && titleHeading !== void 0)
    $$bindings.titleHeading(titleHeading);
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0)
    $$bindings.handler(handler);
  if ($$props.handlerClose === void 0 && $$bindings.handlerClose && handlerClose !== void 0)
    $$bindings.handlerClose(handlerClose);
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    errors = {};
    $$rendered = `${!!activities.length ? `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        handleCloseModal: () => handlerClose(),
        title: `Save spent time on ticket : ${titleHeading}`
      },
      {},
      {
        controls: () => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              handle: handleClickCreate,
              label: "Create"
            },
            {},
            {}
          )}
			
		`;
        },
        default: () => {
          return `${validate_component(Dropdown, "Dropdown").$$render(
            $$result,
            {
              items: activeIssue.available_statuses,
              value: activeIssue.status.id
            },
            {
              value: ($$value) => {
                activeIssue.status.id = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${errors?.date ? `<p class="${"TrackTimeModal__error-message svelte-ttu3rp"}">${escape(errors.date.message)}</p>` : ``}
		${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "date",
              placeholder: "Date spent: ",
              value: dateSpent
            },
            {
              value: ($$value) => {
                dateSpent = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${errors?.timeSpent ? `<p class="${"TrackTimeModal__error-message svelte-ttu3rp"}">${escape(errors.timeSpent.message)}</p>` : ``}
		${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "number",
              placeholder: "Time spent: (Hours) ",
              value: timeSpent
            },
            {
              value: ($$value) => {
                timeSpent = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${validate_component(Input, "Input").$$render(
            $$result,
            {
              isTextArea: true,
              placeholder: "Comment: ",
              value: comment
            },
            {
              value: ($$value) => {
                comment = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${validate_component(Dropdown, "Dropdown").$$render(
            $$result,
            {
              items: activities,
              placeholder: "Activity: ",
              value: activeActivity
            },
            {
              value: ($$value) => {
                activeActivity = $$value;
                $$settled = false;
              }
            },
            {}
          )}
		${validate_component(Dropdown, "Dropdown").$$render(
            $$result,
            {
              items: billableValue,
              placeholder: "Billable: ",
              value: billableActivity
            },
            {
              value: ($$value) => {
                billableActivity = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_userData();
  return $$rendered;
});
const getImage = ({ url = "", alt = "image" }, className = "", localApiKey) => {
  return `<div class='ticket-details__image ${className}'><img  src='${url}?key=${localApiKey}' alt='${alt}'/></div>`;
};
const TicketDetails_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.ticket-details__files.svelte-1efrkyb{display:flex;flex-direction:column}@media(max-width: 1023.02px){.ticket-details__files.svelte-1efrkyb{gap:15px;padding-top:25px}}@media(min-width: 1024px){.ticket-details__files.svelte-1efrkyb{gap:30px;padding-top:50px}}.ticket-details__text.svelte-1efrkyb{font-weight:500;color:gray}@media(max-width: 1023.02px){.ticket-details__text.svelte-1efrkyb{font-size:12px;margin-top:5px}}@media(min-width: 1024px){.ticket-details__text.svelte-1efrkyb{font-size:14px;margin-top:10px}}.ticket-details__files-list.svelte-1efrkyb{display:flex;flex-wrap:wrap}@media(max-width: 1023.02px){.ticket-details__files-list.svelte-1efrkyb{gap:10px}}@media(min-width: 1024px){.ticket-details__files-list.svelte-1efrkyb{gap:20px}}.ticket-details__files-title.svelte-1efrkyb{font-weight:700;color:#000000}@media(max-width: 1023.02px){.ticket-details__files-title.svelte-1efrkyb{font-size:16px;line-height:20px}}@media(min-width: 1024px){.ticket-details__files-title.svelte-1efrkyb{font-size:20px;line-height:27px}}.ticket-details__file.svelte-1efrkyb{position:relative;background:#fefefd;border:1px solid #c49c9c;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:6px;display:flex;overflow:hidden}@media(max-width: 1023.02px){.ticket-details__file.svelte-1efrkyb{width:100px;height:100px}}@media(min-width: 1024px){.ticket-details__file.svelte-1efrkyb{width:150px;height:150px}}.ticket-details__file.svelte-1efrkyb::before{content:"";position:absolute;background:rgba(122, 122, 122, 0.3098039216);top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-size:30%;background-position:50% 50%;background-image:url("/icons/file.svg");z-index:1}.ticket-details__file.svelte-1efrkyb:hover{cursor:pointer}.ticket-details__file.svelte-1efrkyb:hover::after{content:"";position:absolute;background:rgba(122, 122, 122, 0.3098039216);top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-size:30%;background-position:50% 50%;background-image:url("/icons/download.svg");z-index:10}',
  map: null
};
const TicketDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let issueData;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  let { titleHeading = "" } = $$props;
  let { handlerClose = () => {
  } } = $$props;
  let { issueId } = $$props;
  const { localApiKey } = $userData;
  let content = null;
  let attachments = null;
  if ($$props.titleHeading === void 0 && $$bindings.titleHeading && titleHeading !== void 0)
    $$bindings.titleHeading(titleHeading);
  if ($$props.handlerClose === void 0 && $$bindings.handlerClose && handlerClose !== void 0)
    $$bindings.handlerClose(handlerClose);
  if ($$props.issueId === void 0 && $$bindings.issueId && issueId !== void 0)
    $$bindings.issueId(issueId);
  $$result.css.add(css$7);
  issueData = null;
  $$unsubscribe_userData();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      modalContentFlex: false,
      handleCloseModal: handlerClose,
      title: titleHeading
    },
    {},
    {
      "heading-content": () => {
        return `${issueData && issueData.estimated_hours ? `<p class="${"ticket-details__text svelte-1efrkyb"}">Estimated time: ${escape(issueData.estimated_hours)} h</p>` : ``}
	`;
      },
      default: () => {
        return `${!!issueData ? `<!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END -->
		${!!attachments.length ? `<div class="${"ticket-details__files svelte-1efrkyb"}"><div class="${"ticket-details__files-title svelte-1efrkyb"}">Files</div>
				<div class="${"ticket-details__files-list svelte-1efrkyb"}">${each(attachments, ({ content_type, content_url, filename }) => {
          return `<a${add_attribute("href", content_url, 0)} download class="${"ticket-details__file svelte-1efrkyb"}">${content_type.includes("image") ? `<!-- HTML_TAG_START -->${getImage({ url: content_url, alt: filename }, "preview", localApiKey)}<!-- HTML_TAG_END -->` : ``}
						</a>`;
        })}</div></div>` : ``}
		${!attachments.length && !content.length ? `<p style="${"text-align: center;"}">No details</p>` : ``}` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}`;
      }
    }
  )}`;
});
const Pagination_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".pagination.svelte-1b2wc73.svelte-1b2wc73{display:flex;align-items:center;justify-content:center}@media(max-width: 1023.02px){.pagination.svelte-1b2wc73.svelte-1b2wc73{padding:10px 0;gap:10px}}@media(min-width: 1024px){.pagination.svelte-1b2wc73.svelte-1b2wc73{padding:20px 0;gap:30px}}.pagination__list.svelte-1b2wc73.svelte-1b2wc73{display:flex;align-items:center;gap:5px}.pagination__btn.svelte-1b2wc73.svelte-1b2wc73{display:flex;align-items:center;justify-content:center;width:30px;height:30px;cursor:pointer;background:#f4f4f5;border-radius:6px;padding:5px;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);font-weight:700;font-size:16px;line-height:0px;color:#9095a1}.pagination__btn.svelte-1b2wc73 span.svelte-1b2wc73{width:15px;height:15px;display:flex;margin-inline-end:2px}.pagination__btn.svelte-1b2wc73 span img.svelte-1b2wc73{width:100%;height:100%}.pagination__btn.next.svelte-1b2wc73.svelte-1b2wc73{transform:rotate(180deg)}.pagination__btn.active.svelte-1b2wc73.svelte-1b2wc73{background:#e8f0fc;color:#428ded}.pagination__btn.disabled.svelte-1b2wc73.svelte-1b2wc73{cursor:default;opacity:0.6;pointer-events:none}",
  map: null
};
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage = 1 } = $$props;
  let { totalPages } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPages === void 0 && $$bindings.totalPages && totalPages !== void 0)
    $$bindings.totalPages(totalPages);
  $$result.css.add(css$6);
  return `<div class="${"pagination svelte-1b2wc73"}"><button class="${"pagination__btn prev " + escape(currentPage === 1 ? "disabled" : "", true) + " svelte-1b2wc73"}"><span class="${"svelte-1b2wc73"}"><img src="${"/icons/arrow.svg"}" alt="${""}" class="${"svelte-1b2wc73"}"></span></button>

	<div class="${"pagination__list svelte-1b2wc73"}">${totalPages > 5 ? `${currentPage > 3 ? `<button class="${"pagination__btn svelte-1b2wc73"}">1</button>
				<button class="${"pagination__btn svelte-1b2wc73"}">...</button>` : ``}
			${currentPage > 2 && currentPage < 4 ? `<button class="${"pagination__btn svelte-1b2wc73"}">1</button>` : ``}

			${currentPage === totalPages ? `<button class="${"pagination__btn svelte-1b2wc73"}">${escape(totalPages - 2)}</button>` : ``}

			${each(range(Math.max(1, currentPage - 1), Math.min(currentPage + 1, totalPages)), (page) => {
    return `<button class="${escape(null_to_empty("pagination__btn " + (page === currentPage ? "active" : "")), true) + " svelte-1b2wc73"}">${escape(page)}</button>`;
  })}

			${currentPage === 1 ? `<button class="${"pagination__btn svelte-1b2wc73"}">3</button>` : ``}
			${currentPage < totalPages - 1 ? `<button class="${"pagination__btn svelte-1b2wc73"}">...</button>
				<button class="${"pagination__btn svelte-1b2wc73"}">${escape(totalPages)}</button>` : ``}` : `${each(range(1, totalPages), (page) => {
    return `<button class="${escape(null_to_empty("pagination__btn " + (page === currentPage ? "active" : "")), true) + " svelte-1b2wc73"}">${escape(page)}</button>`;
  })}`}</div>

	<button class="${"pagination__btn next " + escape(currentPage === totalPages ? "disabled" : "", true) + " svelte-1b2wc73"}"><span class="${"svelte-1b2wc73"}"><img src="${"/icons/arrow.svg"}" alt="${""}" class="${"svelte-1b2wc73"}"></span></button>
</div>`;
});
const formatDate = (utcTime) => {
  const date = new Date(utcTime);
  const offset = date.getTimezoneOffset() * 60 * 1e3;
  const localTime = new Date(date.getTime() - offset);
  return localTime.toLocaleString("ru-RU", { timeZone: "UTC" });
};
const TicketTimeEntries_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.time-entries.svelte-1mpgnj3{display:flex;flex-direction:column;gap:20px}.time-entries__item.svelte-1mpgnj3{background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:12px}@media(max-width: 1023.02px){.time-entries__item.svelte-1mpgnj3{width:100%}}@media(min-width: 1024px){.time-entries__item.svelte-1mpgnj3{width:500px}}.time-entries__item-heading.svelte-1mpgnj3{display:flex;justify-content:space-between;align-items:center;width:100%}@media(max-width: 1023.02px){.time-entries__item-heading.svelte-1mpgnj3{padding:10px}}@media(min-width: 1024px){.time-entries__item-heading.svelte-1mpgnj3{padding:15px}}.time-entries__item-text.svelte-1mpgnj3{font-weight:500;color:#7f818b;width:100%;border-top:1px solid #d6d6d6}@media(max-width: 1023.02px){.time-entries__item-text.svelte-1mpgnj3{padding:10px;font-size:14px;line-height:18px}}@media(min-width: 1024px){.time-entries__item-text.svelte-1mpgnj3{padding:15px;font-size:16px;line-height:22px}}.time-entries__item-time.svelte-1mpgnj3{display:flex;align-items:center;gap:10px}.time-entries__item-date.svelte-1mpgnj3{font-weight:500;color:#7f818b}@media(max-width: 1023.02px){.time-entries__item-date.svelte-1mpgnj3{font-size:12px;line-height:12px}}@media(min-width: 1024px){.time-entries__item-date.svelte-1mpgnj3{font-size:14px;line-height:14px}}.time-entries__item-time-value.svelte-1mpgnj3{font-weight:700;color:#000000}@media(max-width: 1023.02px){.time-entries__item-time-value.svelte-1mpgnj3{font-size:14px;line-height:14px}}@media(min-width: 1024px){.time-entries__item-time-value.svelte-1mpgnj3{font-size:16px;line-height:16px}}.time-entries__item-time-icon.svelte-1mpgnj3{background-image:url("/icons/clock.svg");background-repeat:no-repeat;background-size:100%}@media(max-width: 1023.02px){.time-entries__item-time-icon.svelte-1mpgnj3{width:15px;height:16px}}@media(min-width: 1024px){.time-entries__item-time-icon.svelte-1mpgnj3{width:25px;height:26px}}',
  map: null
};
const TicketTimeEntries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let issueTimeEntries;
  let issueTimeEntriesCount;
  let $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(user, (value) => value);
  let { issueId } = $$props;
  let { titleHeading = "" } = $$props;
  let { handlerClose = () => {
  } } = $$props;
  let currentPage = 1;
  if ($$props.issueId === void 0 && $$bindings.issueId && issueId !== void 0)
    $$bindings.issueId(issueId);
  if ($$props.titleHeading === void 0 && $$bindings.titleHeading && titleHeading !== void 0)
    $$bindings.titleHeading(titleHeading);
  if ($$props.handlerClose === void 0 && $$bindings.handlerClose && handlerClose !== void 0)
    $$bindings.handlerClose(handlerClose);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    issueTimeEntries = null;
    issueTimeEntriesCount = 0;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        handleCloseModal: handlerClose,
        title: `${titleHeading} : `
      },
      {},
      {
        controls: () => {
          return `${!!issueTimeEntriesCount && issueTimeEntriesCount > 1 ? `${validate_component(Pagination, "Pagination").$$render(
            $$result,
            {
              totalPages: issueTimeEntriesCount,
              currentPage
            },
            {
              currentPage: ($$value) => {
                currentPage = $$value;
                $$settled = false;
              }
            },
            {}
          )}` : ``}
	`;
        },
        default: () => {
          return `<div class="${"time-entries svelte-1mpgnj3"}">${!!issueTimeEntries && !!issueTimeEntries?.length ? `${each(issueTimeEntries, (timeEntry) => {
            return `<div class="${"time-entries__item svelte-1mpgnj3"}"><div class="${"time-entries__item-heading svelte-1mpgnj3"}"><div class="${"time-entries__item-time svelte-1mpgnj3"}"><div class="${"time-entries__item-time-icon svelte-1mpgnj3"}"></div>
							<div class="${"time-entries__item-time-value svelte-1mpgnj3"}">${escape(timeEntry.hours)} h</div></div>
						<div class="${"time-entries__item-date svelte-1mpgnj3"}">${escape(formatDate(timeEntry.created_on))}</div></div>
					${timeEntry.comments ? `<div class="${"time-entries__item-text svelte-1mpgnj3"}">${escape(timeEntry.comments)}</div>` : ``}
				</div>`;
          })}` : `${!issueTimeEntries ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``}`}
		${!!issueTimeEntries && !issueTimeEntries?.length ? `Empty time entries` : ``}</div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_userData();
  return $$rendered;
});
let availableStatusesForRole = {
  // 1: To do,
  // 8: Estimate,
  // 2: In Progress,
  // 12: Code Review,
  // 4: QA,
  // 3: Resolved,
  // 5: Closed,
  // 6: Rejected,
  // 15: Not fixed bug
  Manager: {
    1: [1, 8, 2, 5, 6],
    8: [1, 8, 2, 5, 6],
    2: [1, 8, 2, 12, 4, 3, 6],
    12: [1, 2, 12, 4, 3, 6],
    4: [1, 2, 4, 3, 6, 15],
    3: [1, 3, 5],
    5: [1, 3, 5, 6],
    6: [1, 12, 4, 3, 5, 6],
    15: [2, 15]
  },
  Developer: {
    1: [1, 8, 2, 5, 6],
    8: [8, 2, 5, 6],
    2: [2, 12, 4, 3, 5, 6],
    12: [2, 12, 4, 3, 6],
    4: [2, 4, 3, 5, 15],
    3: [2, 3, 5],
    5: [3, 5, 6],
    6: [1, 6],
    15: [2, 15]
  },
  QA: {
    1: [1, 8, 2, 12, 4, 3, 5],
    8: [8, 2, 12],
    2: [1, 2, 12, 4, 3, 5],
    12: [2, 12, 4, 3],
    4: [1, 8, 2, 12, 4, 3],
    3: [2, 12, 4, 3],
    5: [3, 5, 15],
    6: [6],
    15: [2, 12, 4, 15]
  },
  Reporter: {
    1: [1, 8, 2, 5, 6],
    8: [1, 8, 2, 5, 6],
    2: [1, 8, 2, 12, 4, 3, 6],
    12: [1, 2, 12, 4, 3, 6],
    4: [1, 2, 4, 3, 6, 15],
    3: [1, 3, 5],
    5: [1, 3, 5, 6],
    6: [1, 12, 4, 3, 5, 6],
    15: [2, 15]
  },
  "Non member": {
    1: [1, 8, 2, 5, 6],
    8: [1, 8, 2, 5, 6],
    2: [1, 8, 2, 12, 4, 3, 6],
    12: [1, 2, 12, 4, 3, 6],
    4: [1, 2, 4, 3, 6, 15],
    3: [1, 3, 5],
    5: [1, 3, 5, 6],
    6: [1, 12, 4, 3, 5, 6],
    15: [2, 15]
  },
  "Customer": {
    1: [1],
    8: [8],
    2: [2],
    12: [12],
    4: [4, 15],
    3: [3],
    5: [5],
    6: [6],
    15: [2, 15]
  }
};
const Dashboard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".dashboard__wrapper.svelte-19usoyk{display:grid}@media(max-width: 1023.02px){.dashboard__wrapper.svelte-19usoyk{grid-template-columns:1fr}}@media(min-width: 1024px){.dashboard__wrapper.svelte-19usoyk{grid-template-columns:70% 25%;gap:5%}}.dashboard__list-wrapper.svelte-19usoyk{display:flex;flex-direction:column;gap:30px}",
  map: null
};
const itemsPerPage = 6;
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let issues;
  let activeIssue;
  let activeIssueModal;
  let isShowingModal;
  let timeSpent;
  let paginationPagesCount;
  let $userData, $$unsubscribe_userData;
  let $$unsubscribe_TimerStore;
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  $$unsubscribe_TimerStore = subscribe(timer, (value) => value);
  let { statusBull } = $$props;
  let { filterId = 0 } = $$props;
  let currentId = null;
  let loading = false;
  let timerValue = null;
  let isShowingTicketDetails = false;
  let isShowingTicketTimeEntries = false;
  let currentPage = 1;
  let paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
  const clearTimerSession = () => {
    timerValue = null;
  };
  const updateIssues = async () => {
    console.log("update");
    loading = true;
    let resultIssue = null;
    paginacationOffset = currentPage * itemsPerPage - itemsPerPage;
    const response = await getIssues($userData.localApiKey, paginacationOffset, itemsPerPage, filterId);
    resultIssue = response.issues;
    const issuePromises = resultIssue.map((issue) => getIssue($userData.localApiKey, issue.id));
    const issueResponses = await Promise.all(issuePromises);
    const statusesPromises = resultIssue.map((issue) => getAvailableStatuses($userData.localApiKey, issue));
    const issueStatusesResponses = await Promise.all(statusesPromises);
    resultIssue.forEach((issue, index) => issue.spent_time = issueResponses[index].issue.spent_hours);
    resultIssue.forEach((issue, i) => issue.available_statuses = issueStatusesResponses[i]);
    issues = resultIssue;
    paginationPagesCount = Math.ceil(response.total_count / itemsPerPage);
    loading = false;
  };
  async function getAvailableStatuses(ApiKey, issue) {
    let user_id = issue.assigned_to.id;
    let project_id = issue.project.id;
    let ticket_id = issue.id;
    const statusesTrue = await getStatuses(ApiKey);
    const parents = await getIssues(ApiKey, false, false, false, ticket_id);
    const membership = await getMemberships(ApiKey, project_id);
    let parentsIsOpen = false;
    if (parents.total_count)
      parentsIsOpen = !parents.issues.find((issue2) => issue2.status.id == 5 || issue2.status.id == 6);
    const userMembership = membership.find((membership2) => membership2.user.id === user_id);
    const userRolesName = userMembership.roles.map((role) => role.name);
    let allStatuses = /* @__PURE__ */ new Set();
    userRolesName.forEach((roleName) => availableStatusesForRole[roleName][issue.status.id].forEach((n) => allStatuses.add(n)));
    allStatuses = new Array(...allStatuses);
    if (parentsIsOpen)
      allStatuses = allStatuses.filter((status) => status != 5 && status != 6);
    return allStatuses.map((id) => statusesTrue.find((status) => status.id == id));
  }
  const handleActiveIssue = (issue) => {
    if (!!timeSpent && issue?.id != activeIssue?.id) {
      const confirmText = "Switching ticket clear an existing timer, are you sure you want to switch?";
      if (confirm(confirmText)) {
        activeIssue = issue;
        clearTimerSession();
        timer.clear();
        return true;
      }
      return false;
    } else {
      activeIssue = issue;
      return true;
    }
  };
  const handleCreateTimeEntry = async (message) => {
    timerValue = 0;
    activeIssue = null;
    await updateIssues($userData.localApiKey);
  };
  const toggleTicketDetails = async (issue) => {
    isShowingTicketDetails = !isShowingTicketDetails;
    activeIssueModal = issue;
  };
  const toggleTicketTimeEntries = async (issue) => {
    isShowingTicketTimeEntries = !isShowingTicketTimeEntries;
    activeIssueModal = issue;
  };
  const toggleShowingModal = () => {
    isShowingModal = !isShowingModal;
  };
  if ($$props.statusBull === void 0 && $$bindings.statusBull && statusBull !== void 0)
    $$bindings.statusBull(statusBull);
  if ($$props.filterId === void 0 && $$bindings.filterId && filterId !== void 0)
    $$bindings.filterId(filterId);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    issues = [];
    activeIssue = null;
    activeIssueModal = null;
    isShowingModal = false;
    timeSpent = timerValue ? (timerValue / (1e3 * 60 * 60)).toFixed(3) : null;
    paginationPagesCount = 0;
    {
      {
        if (currentId) {
          currentPage = 1;
          updateIssues();
        } else
          ;
        currentId = 1;
      }
    }
    $$rendered = `<div class="${"dashboard"}"><div class="${"dashboard__wrapper svelte-19usoyk"}">${loading ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : `${!issues.length || loading ? `<p class="${"dashboard__message"}">no result</p>` : `<div class="${"dashboard__list-wrapper svelte-19usoyk"}">${validate_component(TicketList, "TicketList").$$render(
      $$result,
      {
        handler: handleActiveIssue,
        toggleTicketDetails,
        toggleTicketTimeEntries,
        issues,
        activeItemId: activeIssue?.id || null
      },
      {},
      {}
    )}

							${paginationPagesCount > 1 ? `${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        totalPages: paginationPagesCount,
        currentPage
      },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`}`}
			<div class="${"dashboard__timer"}">${activeIssue ? `${validate_component(Timer, "Timer").$$render(
      $$result,
      {
        activeIssueName: activeIssue.subject,
        activeIssueId: activeIssue.id,
        handle: toggleShowingModal,
        time: timerValue
      },
      {
        time: ($$value) => {
          timerValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}

					${activeIssue && isShowingModal ? `${validate_component(TrackTimeModal, "TrackTimeModal").$$render(
      $$result,
      {
        handler: handleCreateTimeEntry,
        handlerClose: toggleShowingModal,
        titleHeading: activeIssue.subject,
        timeSpent,
        activeIssue
      },
      {},
      {}
    )}` : ``}

					${activeIssueModal && isShowingTicketDetails ? `${validate_component(TicketDetails, "TicketDetails").$$render(
      $$result,
      {
        titleHeading: "Issue details",
        issueId: activeIssueModal.id,
        handlerClose: toggleTicketDetails
      },
      {},
      {}
    )}` : ``}

					${activeIssueModal && isShowingTicketTimeEntries ? `${validate_component(TicketTimeEntries, "TicketTimeEntries").$$render(
      $$result,
      {
        titleHeading: "Ticket time entries",
        issueId: activeIssueModal.id,
        handlerClose: toggleTicketTimeEntries
      },
      {},
      {}
    )}` : ``}</div></div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_userData();
  $$unsubscribe_TimerStore();
  return $$rendered;
});
const id_global = writable(0);
const FilterItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".filter__item.svelte-d94dy5{text-wrap:nowrap;font-weight:500;border:1px solid #d6d6d6;border-radius:10px;padding:10px 20px;background:#fefefd;transition:0.2s}.filter__item.svelte-d94dy5:hover{background:#f5f5f5}.active.svelte-d94dy5{position:relative;background:rgba(212, 227, 255, 0.5333333333)}",
  map: null
};
const FilterItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { id } = $$props;
  let { value } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$3);
  return `<button class="${["filter__item svelte-d94dy5", id == value ? "active" : ""].join(" ").trim()}" type="${"button"}"${add_attribute("value", id, 0)}>${escape(name)}
</button>`;
});
const Filter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".filter__items.svelte-ar6s2e{display:flex;flex-wrap:wrap;gap:5px}",
  map: null
};
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filterArr = [
    { name: "All", id: 0 },
    { name: "To do", id: 1 },
    { name: "Estimate", id: 8 },
    { name: "In Progress", id: 2 },
    { name: "QA", id: 4 },
    { name: "Resolved", id: 3 },
    { name: "Closed", id: 5 }
  ];
  let countValue;
  id_global.subscribe((value) => {
    countValue = value;
  });
  $$result.css.add(css$2);
  return `<div class="${"filter"}"><div class="${"filter__items svelte-ar6s2e"}">${each(filterArr, (item) => {
    return `${validate_component(FilterItem, "FilterItem").$$render($$result, Object.assign({}, item, { value: countValue }), {}, {})}`;
  })}</div>

</div>`;
});
const Popup_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".popup.svelte-7fbyji{position:fixed;left:50%;width:fit-content;padding:20px;z-index:1000;border-radius:12px;background:#428ded;color:white;padding:15px 30px;transform:translate(-50%);transition:0.3s ease;visibility:hidden;opacity:0}.popup.active.svelte-7fbyji{top:20px;visibility:visible;opacity:1}.popup.svelte-7fbyji:not(.popup.active){top:-10vh}.popup__wrapper.svelte-7fbyji{display:flex;flex-direction:column;align-items:center}.popup__title.svelte-7fbyji{text-transform:uppercase;font-weight:700;font-size:14px;line-height:14px}.popup__text.svelte-7fbyji{font-size:14px;line-height:16px;margin-top:20px}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isShow } = $$props;
  let { title = "" } = $$props;
  let { text = "" } = $$props;
  let { time = 3e3 } = $$props;
  if ($$props.isShow === void 0 && $$bindings.isShow && isShow !== void 0)
    $$bindings.isShow(isShow);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.time === void 0 && $$bindings.time && time !== void 0)
    $$bindings.time(time);
  $$result.css.add(css$1);
  {
    {
      if (isShow) {
        setTimeout(
          () => {
            popupStore.set({ isShow: false, title: "", text: "" });
          },
          time
        );
      }
    }
  }
  return `<div class="${["popup svelte-7fbyji", isShow ? "active" : ""].join(" ").trim()}"><div class="${"popup__wrapper svelte-7fbyji"}"><div class="${"popup__title svelte-7fbyji"}">${escape(title)}</div>
		<div class="${"popup__text svelte-7fbyji"}">${escape(text)}</div></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../../node_modules/destyle.css/destyle.css';@import '../lib/global.css';",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filterID;
  let statusBull;
  let popupIsChange;
  let $userData, $$unsubscribe_userData;
  $$unsubscribe_userData = subscribe(user, (value) => $userData = value);
  let filterId = 0;
  let statusChange = false;
  let popupData = { isShow: false, title: "", text: "" };
  id_global.subscribe((value) => filterId = value);
  statusIsChange.subscribe((value) => statusChange = value);
  popupStore.subscribe((popup) => popupData = popup);
  $$result.css.add(css);
  filterID = filterId;
  statusBull = statusChange;
  popupIsChange = popupData;
  $$unsubscribe_userData();
  return `${validate_component(PageWrapper, "PageWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `${$userData.isLoggedIn ? `${validate_component(UserBar, "UserBar").$$render($$result, {}, {}, {})}
			${validate_component(Filter, "Filter").$$render($$result, {}, {}, {})}
			${validate_component(Dashboard, "Dashboard").$$render($$result, { filterId: filterID, statusBull }, {}, {})}` : ``}
		${validate_component(Popup, "Popup").$$render($$result, Object.assign({}, popupIsChange), {}, {})}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
