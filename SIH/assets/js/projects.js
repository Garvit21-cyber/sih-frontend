/* 
   NIRMAAN AI - Dedicated Projects Directory Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  renderProjectsTable();

  document.getElementById('projects-filter-state')?.addEventListener('change', renderProjectsTable);
  document.getElementById('projects-filter-sector')?.addEventListener('change', renderProjectsTable);
  document.getElementById('projects-filter-risk')?.addEventListener('change', renderProjectsTable);
});

function renderProjectsTable() {
  const container = document.getElementById('projects-table-body');
  if (!container) return;

  const data = window.NIRMAAN_DATA;
  const stateFilter = document.getElementById('projects-filter-state')?.value || 'all';
  const sectorFilter = document.getElementById('projects-filter-sector')?.value || 'all';
  const riskFilter = document.getElementById('projects-filter-risk')?.value || 'all';

  let list = data.projects.filter(p => {
    if (stateFilter !== 'all' && p.state !== stateFilter) return false;
    if (sectorFilter !== 'all' && p.sector !== sectorFilter) return false;
    if (riskFilter === 'high' && p.riskScore < 70) return false;
    if (riskFilter === 'medium' && (p.riskScore < 50 || p.riskScore >= 70)) return false;
    if (riskFilter === 'low' && p.riskScore >= 50) return false;
    return true;
  });

  container.innerHTML = list.map((p, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.state}</td>
      <td>${p.sector}</td>
      <td>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <div class="progress-bar-wrap" style="width: 80px;"><div class="progress-bar-fill" style="width: ${p.progress}%;"></div></div>
          <span>${p.progress}%</span>
        </div>
      </td>
      <td><span style="font-weight: 800; color: ${p.riskScore > 70 ? '#ef4444' : (p.riskScore > 40 ? '#f59e0b' : '#10b981')};">${p.riskScore}%</span></td>
      <td><span class="status-badge ${p.statusClass}">${p.status}</span></td>
      <td>${p.estCompletion}</td>
      <td>
        <a class="btn-action-sm" href="project-detail.html?id=${p.id}">
          View Details <i class="fa-solid fa-arrow-right"></i>
        </a>
      </td>
    </tr>
  `).join('');
}
