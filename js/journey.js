// Progressive enhancement only — the page is fully functional without this.
// Native <details>/<summary> handles toggling; we just mirror open-state to a
// class so CSS can drive nicer hover / chevron transitions.

document.querySelectorAll('.journey-row details').forEach((d) =>
{
    d.addEventListener('toggle', () =>
    {
        d.parentElement.classList.toggle('is-open', d.open);
    });
});
