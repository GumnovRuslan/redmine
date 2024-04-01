import { c as create_ssr_component, e as escape, j as is_void, d as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { u as user, e as getUserCred, I as Input, B as Button } from "../../../chunks/Input.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag = "p" } = $$props;
  let { label = "some paragraph" } = $$props;
  let { color = "black" } = $$props;
  let { styleProps = "" } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.styleProps === void 0 && $$bindings.styleProps && styleProps !== void 0)
    $$bindings.styleProps(styleProps);
  return `${((tag$1) => {
    return tag$1 ? `<${tag} style="${"color: " + escape(color, true) + "; " + escape(styleProps, true)}">${is_void(tag$1) ? "" : `${escape(label)}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const Checkbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `.checkbox.svelte-27cki7.svelte-27cki7{cursor:pointer}.checkbox__toggle.svelte-27cki7.svelte-27cki7{display:none}.checkbox__toggle.svelte-27cki7:checked+.checkbox__toggle-icon.svelte-27cki7{background:#428ded;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='Layer_1' style='enable-background:new 0 0 512 512;' version='1.1' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:white;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M235.1,386.3c-5.7,0-11.1-2.4-14.9-6.6l-104.1-116c-7.4-8.2-6.7-20.9,1.5-28.2c8.2-7.4,20.9-6.7,28.2,1.5 l86.8,96.8l131.6-199.1c6.1-9.2,18.5-11.7,27.7-5.7c9.2,6.1,11.7,18.5,5.7,27.7L251.8,377.4c-3.4,5.2-9,8.5-15.2,8.9 C236.1,386.3,235.6,386.3,235.1,386.3z'/%3E%3C/g%3E%3C/svg%3E")}.checkbox__toggle.svelte-27cki7:not(.checkbox__toggle:checked)+.checkbox__toggle-icon.svelte-27cki7{background:#fefefd}.checkbox__toggle-icon.svelte-27cki7.svelte-27cki7{width:18px;height:18px;border:1px solid #d6d6d6;box-shadow:4px 4px 15px 1px rgba(0, 0, 0, 0.05);border-radius:6px;background-position:50%;background-repeat:no-repeat;background-size:100%}`,
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked } = $$props;
  let { label = "" } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  return `<label class="${"checkbox svelte-27cki7"}"><input class="${"checkbox__toggle svelte-27cki7"}" type="${"checkbox"}"${add_attribute("checked", checked, 1)}>
	<div class="${"checkbox__toggle-icon svelte-27cki7"}"></div>
	<span class="${"checkbox__label"}">${escape(label)}</span>
</label>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '../../lib/global.css';.login.svelte-1umujte{width:400px;margin:auto;flex-direction:column;align-items:center;height:90vh;display:flex;justify-content:center}.login__wrapper.svelte-1umujte{width:100%}.login__form.svelte-1umujte{display:flex;flex-direction:column;align-items:center;gap:50px}.login__form-content.svelte-1umujte{width:100%;display:flex;flex-direction:column;gap:20px}.login__form-toggle.svelte-1umujte{width:fit-content;cursor:pointer;display:flex;align-items:center;gap:10px;font-size:14px;font-weight:500}",
  map: null
};
const STORAGE_KEY = "savedAuthData";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let error = false;
  let username = "";
  let password = "";
  let apiKey = "";
  let loginViaApiKey = false;
  const isBrowser = typeof window !== "undefined";
  const data = isBrowser ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : null;
  if (isBrowser && data) {
    user.set({ isLoggedIn: true, ...data });
    goto("/");
  }
  const handleLogin = async () => {
    error = false;
    const res = await getUserCred(username, password, apiKey);
    if (res.id) {
      user.set({ isLoggedIn: true, ...res });
      isBrowser && localStorage.setItem(STORAGE_KEY, JSON.stringify(res));
      goto("/");
    } else {
      error = true;
    }
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"login svelte-1umujte"}"><div class="${"login__wrapper svelte-1umujte"}"><div class="${"login__form svelte-1umujte"}">${validate_component(Text, "Text").$$render($$result, { tag: "h1", label: "Log in" }, {}, {})}
			<div class="${"login__form-content svelte-1umujte"}">${loginViaApiKey ? `${validate_component(Input, "Input").$$render(
      $$result,
      { placeholder: "api key", value: apiKey },
      {
        value: ($$value) => {
          apiKey = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(Input, "Input").$$render(
      $$result,
      { placeholder: "username", value: username },
      {
        value: ($$value) => {
          username = $$value;
          $$settled = false;
        }
      },
      {}
    )}
					${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "password",
        type: "password",
        value: password
      },
      {
        value: ($$value) => {
          password = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

				
				<label class="${"login__form-toggle svelte-1umujte"}">${validate_component(Text, "Text").$$render(
      $$result,
      {
        color: "#7f818b",
        tag: "span",
        label: "login using apiKey?"
      },
      {},
      {}
    )}
					${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      { checked: loginViaApiKey },
      {
        checked: ($$value) => {
          loginViaApiKey = $$value;
          $$settled = false;
        }
      },
      {}
    )}</label>

				${validate_component(Button, "Button").$$render($$result, { label: "Login", handle: handleLogin }, {}, {})}
				${error ? `${validate_component(Text, "Text").$$render(
      $$result,
      {
        tag: "span",
        styleProps: "text-align: center; font-size: 14px; font-weight: 500;",
        color: "red",
        label: "User not found. Check your login data"
      },
      {},
      {}
    )}` : ``}</div></div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
