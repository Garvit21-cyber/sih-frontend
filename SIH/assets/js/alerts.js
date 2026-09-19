/* 
   NIRMAAN AI - Alert Center Logic (Screen 6)
*/

let activeAlertTab = 'all';

function renderAlerts(alertsList) {
  const container = document.getElementById('alert-feed-list');
  if (!container) return;

  if (!alertsList || alertsList.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: 14px; color: var(--text-muted);">
        <i class="fa-solid fa-check-circle" style="font-size: 2.5rem; color: var(--color-success); margin-bottom: 1rem;"></i>
        <h3>No alerts found matching criteria</h3>
      </div>
    `;
    return;
  }

  container.innerHTML = alertsList.map(item => {
    let iconClass = 'fa-triangle-exclamation';
    if (item.type === 'info') iconClass = 'fa-circle-info';
    else if (item.type === 'resolved') iconClass = 'fa-circle-check';

    let tagClass = 'delay';
    if (item.category === 'cost') tagClass = 'cost';
    else if (item.category === 'progress') tagClass = 'progress';
    else if (item.category === 'reduced') tagClass = 'reduced';

    return `
      <div class="alert-item-card ${item.type}">
        <div class="alert-item-left">
          <div class="alert-type-icon ${item.type}"><i class="fa-solid ${iconClass}"></i></div>
          <div class="alert-item-details">
            <span class="alert-severity-badge ${item.type}"><i class="fa-solid ${iconClass}"></i> ${item.type.toUpperCase()}</span>
            <div class="alert-project-title">${item.title}</div>
            <div class="alert-issue-text">${item.issue}</div>
            <div class="alert-tags-row"><span class="tag-pill ${tagClass}">${item.tagText}</span></div>
          </div>
        </div>

        <div class="alert-item-specs">
          <div><i class="fa-solid fa-location-dot"></i> ${item.state}</div>
          <div><i class="fa-solid fa-building"></i> ${item.sector}</div>
        </div>

        <div class="alert-risk-stat">
          <span style="font-size: 0.75rem; color: var(--text-muted);">Risk Level</span>
          <span style="font-size: 1.15rem; font-weight: 800; color: ${item.riskPercentage > 60 ? '#ef4444' : '#f59e0b'};">${item.riskPercentage}%</span>
          <span style="font-size: 0.73rem; color: var(--text-light);"><i class="fa-regular fa-clock"></i> ${item.timeAgo}</span>
        </div>

        <button class="btn-action-sm" onclick="NIRMAAN_ROUTER.navigateTo('view-project-detail', { projectId: 'PRJ-1001' })">
          View Project <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
  }).join('');
}

function filterAlerts() {
  const data = window.NIRMAAN_DATA;
  if (!data) return;

  const stateQuick = document.getElementById('state-quick-filter')?.value || 'all';

  let filtered = data.alerts.filter(item => {
    if (activeAlertTab !== 'all') {
      if (activeAlertTab === 'critical' && item.type !== 'critical') return false;
      if (activeAlertTab === 'warning' && item.type !== 'warning') return false;
      if (activeAlertTab === 'delay' && item.category !== 'delay') return false;
      if (activeAlertTab === 'cost' && item.category !== 'cost') return false;
      if (activeAlertTab === 'resolved' && item.type !== 'resolved') return false;
    }

    if (stateQuick !== 'all' && item.state !== stateQuick) return false;
    return true;
  });

  renderAlerts(filtered);
}

function initAlertCenter() {
  const data = window.NIRMAAN_DATA;
  if (data) renderAlerts(data.alerts);

  const tabsContainer = document.getElementById('alert-tabs-container');
  if (tabsContainer) {
    tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeAlertTab = btn.getAttribute('data-tab');
        filterAlerts();
      });
    });
  }

  document.getElementById('state-quick-filter')?.addEventListener('change', filterAlerts);
}
