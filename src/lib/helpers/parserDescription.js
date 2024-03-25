const replaceImage = (description, attachments, localApiKey) => {
	attachments.forEach(({ filename, content_url }) => {
		description = description.replace(
			`!${filename}!`,
			getImage({ url: content_url, alt: filename }, '', localApiKey)
		);
	});

	return description;
};

const convertToFormattedHTML = (inputString) => {
	const regexPattern = /<code\b[^>]*>([\s\S]*?)<\/code>/g;
	const domParser = new DOMParser();
	const doc = domParser.parseFromString(inputString, 'text/html');
	const { head, body } = doc;

	function traverseNodes(node) {
		let result = '';

		if (node.nodeType === Node.TEXT_NODE) {
			const textContent = node.textContent.trim();
			if (textContent) {
				result = textContent;
			}
		} else {
			const tagName = node.tagName ? node.tagName.toLowerCase() : '';
			const children = node.childNodes;

			const childResults = [];

			for (const child of children) {
				const childResult = traverseNodes(child);
				if (childResult) {
					childResults.push(childResult);
				}
			}

			if (childResults.length > 0) {
				result += `<span class="nt">&lt;${tagName}&gt;</span>`;
				result += childResults.join('');
				result += `<span class="nt">&lt;/${tagName}&gt;</span>`;
			}
		}

		return result;
	}

	let result = inputString.replace(regexPattern, (match, codeBlock) => {
		const codeWithoutTags = match.replace(/<\/?code[^>]*>/g, '');
		let formattedCode = `<code class="html syntaxhl">${traverseNodes(
			domParser.parseFromString(codeWithoutTags, 'text/html')
		)}</code>`;
		return formattedCode;
	});

	return result;
};

const replaceSymbolToTag = (inputString) => {
	let replacedDescription = inputString;
	function escapeRegExp(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function wrapTextWithSymbol(inputString, symbol, tag) {
		const escapedSymbol = escapeRegExp(symbol);
		const regexPattern = new RegExp(`${escapedSymbol}(\\S+?)${escapedSymbol}`, 'g');

		const replacement = `<${tag}>$1</${tag}>`;
		return inputString.replace(regexPattern, replacement);
	}

	const tags = {
		'*': 'strong',
		_: 'em',
		'-': 'del'
	};

	for (var tag of Object.entries(tags)) {
		replacedDescription = wrapTextWithSymbol(replacedDescription, tag[0], tag[1]);
	}

	return replacedDescription;
};

const replaceLink = (description) => {
	const regex = /(?:https?:\/\/|www\.)[^\s]+/gi;
	description = description.replaceAll(
		regex,
		(match) =>
			`<a target="_blank" style="color: #169; width: fit-content;" href="${match}">${match}</a>`
	);

	return description;
};

const replaceBlockquote = (description) => {
	const regex = /^>([^>\n]*?)(?=\n|$)/gm;
	return description.replace(
		regex,
		'<blockquote class="ticket-details__blockquote">$1</blockquote>'
	);
};

const makeUl = (description) => {
	const regex = /^\*[^*\n]*?(?=\n|$)/gm;
	const matches = description.match(regex);

	let lis = '';

	if (matches) {
		matches.forEach((match) => {
			lis += `<li>${match.replace(/^\*/, '')}</li>`;
		});

		let list = `<ul class="ticket-details__ul">${lis}</ul>`;
		description = description.replace(matches[0], list);
		matches.forEach((match) => {
			description = description.replace(match, '');
		});
	}

	return description;
};

const makeOl = (description) => {
	const regex = /^#[^#\n]*?(?=\n|$)/gm;
	const matches = description.match(regex);

	let lis = '';

	if (matches) {
		console.log(matches);
		matches.forEach((match) => {
			lis += `<li>${match.replace(/^#/, '')}</li>`;
		});

		let list = `<ol type="1" class="ticket-details__ol">${lis}</ol>`;
		description = description.replace(matches[0], list);
		matches.forEach((match) => {
			description = description.replace(match, '');
		});
	}

	return description;
};

const replaceNewLine = (description) => {
	description = description.replaceAll(/\r\n(?!\r\n)/g, '<br/>');
	return description;
};

export const getImage = ({ url = '', alt = 'image' }, className = '', localApiKey) => {
	return `<div class='ticket-details__image ${className}'><img  src='${url}?key=${localApiKey}' alt='${alt}'/></div>`;
};

export const processDescription = (description, attachments, localApiKey) => {
	description = replaceLink(description);
	description = replaceBlockquote(description);
	description = makeOl(description);
	description = makeUl(description);

	description = replaceNewLine(description);

	description = makeOl(description);
	description = makeUl(description);

	description = convertToFormattedHTML(description);
	description = replaceImage(description, attachments, localApiKey);
	description = replaceSymbolToTag(description);

	return description;
};
