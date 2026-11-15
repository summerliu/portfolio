/** Applies a saved theme before first paint to avoid a flash. Inlined into <head>. */
export const themeScript = `try{const t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}`;
