export default defineNuxtPlugin(() => {
	if (import.meta.client) {
		const savedMode = localStorage.getItem("dark-mode");
		if (savedMode === "true") {
			document.body.classList.add("mdui-theme-layout-dark");
		}
	}
});
