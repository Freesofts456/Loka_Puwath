// දිනය පෙන්වීම, සෙවුම සහ කලාප පෙරහන
document.addEventListener("DOMContentLoaded", () => {
    const today = document.getElementById("today");
    if (today) today.textContent = new Date().toLocaleDateString("si-LK", { year: "numeric", month: "long", day: "numeric", weekday: "long" });

    const input = document.getElementById("searchInput");
    const grid = document.getElementById("newsGrid");
    const none = document.getElementById("noResults");
    if (!input || !grid) return;

    let region = "";
    const filter = () => {
        const q = input.value.trim().toLowerCase();
        let count = 0;
        grid.querySelectorAll(".news-card").forEach(card => {
            const text = card.textContent.toLowerCase();
            const show = text.includes(q) && text.includes(region.toLowerCase());
            card.hidden = !show;
            if (show) count++;
        });
        none.hidden = count > 0;
    };
    input.addEventListener("input", filter);
    document.getElementById("searchButton").addEventListener("click", filter);
    document.querySelectorAll(".region-btn").forEach(btn => btn.addEventListener("click", () => {
        document.querySelectorAll(".region-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        region = btn.dataset.region;
        filter();
    }));
});
