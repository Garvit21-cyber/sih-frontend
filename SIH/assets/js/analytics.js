/* 
   NIRMAAN AI - Risk Analytics Logic (Screen 5)
*/

function initAnalyticsView() {
  const data = window.NIRMAAN_DATA;
  if (!data) return;

  if (window.NIRMAAN_CHARTS) {
    window.NIRMAAN_CHARTS.renderDonutChart(
      'analytics-donut-container',
      data.riskDistribution.high.count,
      data.riskDistribution.medium.count,
      data.riskDistribution.low.count
    );
  }
}
