import { c as create_ssr_component, e as escape, d as add_attribute } from "./index3.js";
import { w as writable } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".button.svelte-tr8xzd{display:flex;justify-content:center;align-items:center;padding:8px 18px;transition:0.3s ease-in-out;cursor:pointer;font-weight:700;font-size:16px;line-height:22px;color:#9095a1;border-radius:12px;border:1px solid #d6d6d6;background:#fefefd;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05)}.button.hoverRed.svelte-tr8xzd:hover{background:#ff6d6b;color:white}.button.svelte-tr8xzd:not(.button.hoverRed):hover{background:#e8f0fc;color:#428ded}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { variant = "" } = $$props;
  let { label = "" } = $$props;
  let { handle = () => {
  } } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.handle === void 0 && $$bindings.handle && handle !== void 0)
    $$bindings.handle(handle);
  $$result.css.add(css$1);
  return `<button class="${"button " + escape(variant, true) + " svelte-tr8xzd"}">${escape(label)}</button>`;
});
const user = writable({
  isLoggedIn: false,
  firstname: null,
  lastname: null,
  login: null,
  mail: null,
  localApiKey: null
});
const STORAGE_KEY = "savedAuthData";
const isBrowser = typeof window !== "undefined";
const data = isBrowser ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;
if (isBrowser && !data) {
  if (window.location.pathname != "/login") {
    window.location.href = "/login";
  }
} else {
  user.set({ isLoggedIn: true, ...data });
}
const getUserCred = async (username, password, apiKey) => await fetch("/api/get-account", {
  method: "POST",
  body: JSON.stringify({ username, password, apiKey }),
  headers: {
    "content-type": "application/json"
  }
}).then((res) => res.json());
const getIssues = async (apiKey, offset, limit, filterId, parent_id) => await fetch("/api/get-issues", {
  method: "POST",
  body: JSON.stringify({
    apiKey,
    offset,
    limit,
    filterId,
    parent_id
  }),
  headers: {
    "content-type": "application/json"
  }
}).then((res) => res.json()).then(({ issues, total_count }) => {
  return { issues, total_count };
});
const getIssue = async (apiKey, issue_id) => await fetch("/api/get-issue", {
  method: "POST",
  body: JSON.stringify({
    apiKey,
    issue_id
  }),
  headers: {
    "content-type": "application/json"
  }
}).then((res) => res.json()).then((res) => res);
const getStatuses = async (apiKey) => await fetch("/api/get-statuses", {
  method: "POST",
  body: JSON.stringify({
    apiKey
  }),
  headers: {
    "content-type": "application/json"
  }
}).then((res) => res.json()).then((res) => res.issue_statuses);
const getMemberships = async (apiKey, project_id) => await fetch("/api/get-memberships", {
  method: "POST",
  body: JSON.stringify({
    apiKey,
    project_id
  }),
  headers: {
    "content-type": "application/json"
  }
}).then((res) => res.json()).then((res) => res.memberships);
const setTimeEntries = async (apiKey, timeEntry) => {
  const { issue_id, spent_on, hours, activity_id, comments, billable_id } = timeEntry;
  const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
	<time_entry>
	  <issue_id>${issue_id}</issue_id>
	  <spent_on>${spent_on}</spent_on>
	  <hours>${hours}</hours>
	  <activity_id>${activity_id}</activity_id>
	  <comments>${comments}</comments>
	  <custom_fields type="array">
		<custom_field id="2" name="Billable">
		<value>${billable_id}</value>
		</custom_field>
	  </custom_fields>
	</time_entry>`;
  return await fetch("/api/set-time-entries", {
    method: "POST",
    body: JSON.stringify({ apiKey, xmlData }),
    headers: {
      "content-type": "application/json"
    }
  }).then((res) => {
    return res.ok === true ? { status: true, responseMessage: "Entry added" } : { status: false, responseMessage: "Entry not was added" };
  });
};
const setStatusIssue = async (apiKey, issue_id, status_id, user_id) => {
  const xmlData = `?xml version="1.0" encoding="UTF-8"?
	<issue>
		<status_id>${status_id}</status_id>
		<assigned_to_id>${user_id}</assigned_to_id>
	</issue>
	`;
  return await fetch(`/api/set-issue`, {
    method: "POST",
    body: JSON.stringify({ apiKey, xmlData, issue_id }),
    headers: {
      "content-type": "application/json"
    }
  }).then((res) => {
    return res.ok === true ? { status: true, responseMessage: "Status changed" } : { status: false, responseMessage: "Status not was changed" };
  });
};
const Input_svelte_svelte_type_style_lang = "";
const css = {
  code: ".field.svelte-1y49ouj{position:relative;display:flex;flex-direction:column;gap:10px}.field__input.svelte-1y49ouj{background:#fefefd;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:5px;padding:5px 10px}.field__input.svelte-1y49ouj:focus,.field__input.svelte-1y49ouj:active{outline:0}.field__input.textarea.svelte-1y49ouj{max-height:300px;min-height:100px;resize:vertical}.field__label.svelte-1y49ouj{font-weight:600;font-size:14px;line-height:16px;color:#9095a1;line-height:16px;font-size:16px}",
  map: null
};
function dateNow() {
  const currentDate = new Date();
  var formattedDate = currentDate.toISOString().split("T")[0];
  return formattedDate;
}
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { step = "0.1" } = $$props;
  let { value = type === "date" ? dateNow() : "" } = $$props;
  let { placeholder = "Placeholder" } = $$props;
  let { isTextArea = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.isTextArea === void 0 && $$bindings.isTextArea && isTextArea !== void 0)
    $$bindings.isTextArea(isTextArea);
  $$result.css.add(css);
  return `<label class="${"field svelte-1y49ouj"}"><span class="${"field__label svelte-1y49ouj"}">${escape(placeholder)}</span>
	${!isTextArea ? `<input class="${"field__input svelte-1y49ouj"}"${add_attribute("value", value, 0)}>` : `<textarea class="${"field__input textarea svelte-1y49ouj"}">${value || ""}</textarea>`}
</label>`;
});
export {
  Button as B,
  Input as I,
  setTimeEntries as a,
  getIssue as b,
  getStatuses as c,
  getMemberships as d,
  getUserCred as e,
  getIssues as g,
  setStatusIssue as s,
  user as u
};
