CMS.registerEditorComponent({
    id: "figure",
    label: "Figure",
    fields: [
        { name: "src", label: "Image Source", widget: "string" },
        { name: "alt", label: "Alt Text", widget: "string", required: false },
        { name: "title", label: "Title", widget: "string", required: false },
        { name: "class", label: "CSS Classes", widget: "string", required: false }
    ],
    // Pattern matches: {{ <figure src="..." alt="..." title="..." class="..."> }}
    pattern: /\{\{\s*<figure\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+title="([^"]*)")?(?:\s+class="([^"]*)")?\s*>\s*\}\}/,
    fromBlock: function(match) {
        return {
            src: match[1] || "",
            alt: match[2] || "",
            title: match[3] || "",
            class: match[4] || ""
        };
    },
    toBlock: function(obj) {
        let attrs = `src="${obj.src}"`;
        if (obj.alt) attrs += ` alt="${obj.alt}"`;
        if (obj.title) attrs += ` title="${obj.title}"`;
        if (obj.class) attrs += ` class="${obj.class}"`;
        return `{{ <figure ${attrs}> }}`;
    },
    toPreview: function(obj) {
        const classAttr = obj.class ? ` class="${obj.class}"` : "";
        const altAttr = obj.alt || obj.title || "";
        const caption = obj.title ? `<figcaption>${obj.title}</figcaption>` : "";
        return `<figure${classAttr}><img src="${obj.src}" alt="${altAttr}">${caption}</figure>`;
    }
});



CMS.registerEditorComponent({
    id: "gist",
    label: "Gist",
    fields: [{
            name: "username",
            label: "Github Username",
            widget: "string"
        },
        {
            name: "gid",
            label: "Gist ID",
            widget: "string"
        },
    ],
    pattern: /{{< gist ([a-zA-Z0-9]+) ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            username: match[1],
            gid: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< gist ${obj.username} ${obj.gid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "instagram",
    label: "Instagram",
    fields: [
      {
          name: "pid",
          label: "Post id",
          widget: "string"
      },
      {
        name: "hidecaption",
        label: "Hide caption",
        widget: "boolean"
      }
    ],
    pattern: /{{< instagram (?<pid>[a-zA-Z0-9]+)\s{0,}(?<hidecaption_flag>hidecaption)?\s+>}}/,
    fromBlock: function(match) {
        return {
            pid: match[1],
            hidecaption: match[2]
        };
    },
    toBlock: function(obj) {
        return `{{< instagram ${obj.pid} ${
          obj.hidecaption ? "hidecaption " : ""
        }>}}`;
    },
    toPreview: function(obj) {
        return `{{< instagram ${obj.pid} ${
          obj.hidecaption ? "hidecaption " : ""
        }>}}`;
    },
});
CMS.registerEditorComponent({
    id: "twitter",
    label: "Twitter",
    fields: [{
        name: "tid",
        label: "Tweet id",
        widget: "string"
    }],
    pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            tid: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
    toPreview: function(obj) {
        return `{{< tweet ${obj.tid} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "vimeo",
    label: "Vimeo",
    fields: [{
        name: "shortcode",
        label: "Vimeo shortcode",
        widget: "string"
    }],
    pattern: /{{< vimeo ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            shortcode: match[1]
        };
    },
    toBlock: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
    toPreview: function(obj) {
        return `{{< vimeo ${obj.shortcode} >}}`;
    },
});
CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [{
        name: "id",
        label: "Youtube Video ID",
        widget: "string"
    }],
    pattern: /{{< youtube\s+(?<id>[A-Za-z0-9\-]+)\s+>}}/,
    fromBlock: function(match) {
        return {
            id: match[1],
        };
    },
    toBlock: function(obj) {
        return `{{< youtube ${obj.id} >}}`;
    },
    toPreview: function(obj) {
        return `<img src="https://i3.ytimg.com/vi/${obj.id}/hqdefault.jpg" alt="Youtube Video"/>`;
    },
});
