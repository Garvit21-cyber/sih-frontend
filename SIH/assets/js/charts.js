/* 
   NIRMAAN AI - Interactive Chart & Graphic Engines
*/

window.NIRMAAN_CHARTS = {
  renderDonutChart(containerId, high, medium, low) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const total = high + medium + low;
    const highPct = Math.round((high / total) * 100);
    const medPct = Math.round((medium / total) * 100);
    const lowPct = Math.round((low / total) * 100);

    container.innerHTML = `
      <div style="position: relative; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center;">
        <svg width="140" height="140" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#e2e8f0" stroke-width="4.5"></circle>
          <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ef4444" stroke-width="4.5" stroke-dasharray="${highPct} ${100 - highPct}" stroke-dashoffset="25"></circle>
          <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f59e0b" stroke-width="4.5" stroke-dasharray="${medPct} ${100 - medPct}" stroke-dashoffset="${100 - highPct + 25}"></circle>
          <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#10b981" stroke-width="4.5" stroke-dasharray="${lowPct} ${100 - lowPct}" stroke-dashoffset="${100 - highPct - medPct + 25}"></circle>
        </svg>
        <div style="position: absolute; text-align: center;">
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); line-height: 1;">${total}</div>
          <div style="font-size: 0.68rem; color: var(--text-muted);">Projects</div>
        </div>
      </div>
    `;
  },

  renderStateBarChart(containerId, stateData) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const maxVal = Math.max(...stateData.map(d => d.highRiskCount));

    container.innerHTML = `
      <div class="state-bar-chart-container">
        ${stateData.map(d => {
          const heightPct = Math.round((d.highRiskCount / maxVal) * 100);
          return `
            <div class="bar-col">
              <div style="font-size: 0.7rem; font-weight: 700; color: #ef4444;">${d.highRiskCount}</div>
              <div class="bar-stick" style="height: ${heightPct}%;"></div>
              <div class="bar-label">${d.state.split(' ')[0]}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
};
