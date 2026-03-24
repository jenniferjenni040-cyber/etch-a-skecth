const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

function makeGrid(n) {
    box.textContent = "";

    let s = 960 / n;

    for (let i = 0; i < n * n; i++) {
        let d = document.createElement("div");
        d.className = "cell";

        d.style.width = s + "px";
        d.style.height = s + "px";

        d.dataset.o = 0;

        d.addEventListener("mouseenter", () => {
            let o = Number(d.dataset.o);
            if (o < 1) o += 0.1;
            d.dataset.o = o;

            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            d.style.backgroundColor = `rgba(${r},${g},${b},${o})`;
        });

        box.appendChild(d);
    }
}

makeGrid(16);

btn.onclick = () => {
    let v = prompt("Size (max 100)");
    v = parseInt(v);

    if (v > 0 && v <= 100) {
        makeGrid(v);
    }
};
