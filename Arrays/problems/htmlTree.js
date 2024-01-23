const JSONtoHTML = (json) => {
  const fragment = document.createDocumentFragment();

  if (Array.isArray(json)) {
    for (let entry of json) {
      const element = document.createElement(entry.type);

      if (entry.props) {
        for (let key in entry.props) {
          element.setAttribute(key, entry.props[key]);
        }
      }

      if (Array.isArray(entry.children)) {
        for (let child of entry.children) {
          element.appendChild(JSONtoHTML(child));
        }
      } else {
        element.innerText = entry.children;
      }

      fragment.appendChild(element);
    }
  } else {
    return JSONtoHTML([json]);
  }

  return fragment;
};

const JSON = [
  {
    type: "div",
    props: { id: "hello", class: "foo" },
    children: [
      { type: "h1", children: "HELLO" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar" }, children: "World" },
        ],
      },
    ],
  },
  {
    type: "section",
    props: { id: "hello-2", class: "foo-2" },
    children: [
      { type: "h1", children: "HELLO-2" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar-2" }, children: "World" },
        ],
      },
    ],
  },
];

console.log(JSONtoHTML(JSON));
