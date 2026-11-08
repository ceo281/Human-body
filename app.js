(function () {
  const NS = "http://www.w3.org/2000/svg";
  const organsLayer = document.getElementById("organs");
  const panel = document.getElementById("panel");
  const filters = document.getElementById("filters");
  let activeSystem = null;
  let selectedId = null;
  const els = {};

  function el(tag, attrs, text) {
    const e = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => e.setAttribute(k, v));
    if (text != null) e.textContent = text;
    return e;
  }

  // Draw organs
  ORGANS.forEach((o) => {
    const s = o.shape;
    const node = document.createElementNS(NS, s.type);
    Object.entries(s).forEach(([k, v]) => k !== "type" && node.setAttribute(k, v));
    node.setAttribute("class", "organ");
    node.setAttribute("fill", SYSTEMS[o.system].color);
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", o.name);
    const title = document.createElementNS(NS, "title");
    title.textContent = o.name;
    node.appendChild(title);
    node.addEventListener("click", () => select(o.id));
    node.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(o.id); }
    });
    organsLayer.appendChild(node);
    els[o.id] = node;
  });

  // Filter chips
  function chip(label, color, key) {
    const b = el("button", { class: "chip", type: "button" });
    if (color) { const d = el("span", { class: "dot" }); d.style.background = color; b.appendChild(d); }
    b.appendChild(document.createTextNode(label));
    b.addEventListener("click", () => { activeSystem = key; render(); });
    b.dataset.key = key || "";
    filters.appendChild(b);
  }
  chip("All systems", null, null);
  Object.entries(SYSTEMS).forEach(([k, s]) => chip(s.name, s.color, k));

  function select(id) { selectedId = id; render(); }

  function render() {
    filters.querySelectorAll(".chip").forEach((c) =>
      c.classList.toggle("active", (c.dataset.key || null) === activeSystem));
    ORGANS.forEach((o) => {
      const n = els[o.id];
      n.classList.toggle("dim", !!activeSystem && o.system !== activeSystem);
      n.classList.toggle("selected", o.id === selectedId);
    });

    panel.innerHTML = "";
    const o = ORGANS.find((x) => x.id === selectedId);
    if (o) {
      const sys = SYSTEMS[o.system];
      panel.appendChild(el("h2", {}, o.name));
      const tag = el("span", { class: "tag" }, sys.name + " system");
      tag.style.background = sys.color;
      panel.appendChild(tag);
      panel.appendChild(el("p", { class: "meta" }, o.weight));
      panel.appendChild(el("p", {}, o.summary));
      const ul = el("ul");
      o.facts.forEach((f) => ul.appendChild(el("li", {}, f)));
      panel.appendChild(ul);
    } else {
      panel.appendChild(el("h2", {}, activeSystem ? SYSTEMS[activeSystem].name + " system" : "Choose an organ"));
      panel.appendChild(el("p", { class: "meta" }, "Select an organ on the diagram or from the list."));
    }

    const list = el("div", { class: "list" });
    ORGANS.filter((x) => !activeSystem || x.system === activeSystem).forEach((x) => {
      const b = el("button", { type: "button" }, x.name);
      b.addEventListener("click", () => select(x.id));
      list.appendChild(b);
    });
    panel.appendChild(list);
  }

  render();
})();
