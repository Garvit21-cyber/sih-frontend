/* 
   NIRMAAN AI - Infrastructure Intelligence Data Store
   Comprehensive dataset for projects, alerts, analytics, and system stats.
*/

window.NIRMAAN_DATA = {
  stats: {
    totalProjects: 1981,
    highRisk: 151,
    mediumRisk: 412,
    lowRisk: 1418,
    delayRisk: 298,
    costRisk: 236
  },

  riskDistribution: {
    high: { count: 151, percentage: 8 },
    medium: { count: 412, percentage: 21 },
    low: { count: 1418, percentage: 71 }
  },

  stateWiseRisk: [
    { state: 'Rajasthan', highRiskCount: 38, avgRiskScore: 78 },
    { state: 'Uttar Pradesh', highRiskCount: 34, avgRiskScore: 74 },
    { state: 'Bihar', highRiskCount: 26, avgRiskScore: 71 },
    { state: 'Gujarat', highRiskCount: 19, avgRiskScore: 62 },
    { state: 'Maharashtra', highRiskCount: 18, avgRiskScore: 58 },
    { state: 'Delhi', highRiskCount: 16, avgRiskScore: 65 }
  ],

  sectorPerformance: [
    { sector: 'Roads', progress: 78, riskLevel: 'high', label: '78%' },
    { sector: 'Bridges', progress: 64, riskLevel: 'medium', label: '64%' },
    { sector: 'Railways', progress: 82, riskLevel: 'low', label: '82%' },
    { sector: 'Energy', progress: 59, riskLevel: 'medium', label: '59%' },
    { sector: 'Water', progress: 71, riskLevel: 'low', label: '71%' },
    { sector: 'Urban Transport', progress: 54, riskLevel: 'high', label: '54%' }
  ],

  projects: [
    {
      id: 'PRJ-1001',
      name: 'Highway Expansion Project',
      state: 'Rajasthan',
      sector: 'Roads',
      progress: 42,
      riskScore: 84,
      status: 'Delayed',
      statusClass: 'delayed',
      estCompletion: '15 Nov 2026',
      delayRisk: 82,
      costRisk: 68,
      agency: 'NHAI',
      contractor: 'M/s InfraTech Pvt Ltd',
      approvedBudget: '₹2,450 Cr',
      spentBudget: '₹1,680 Cr',
      milestone: 'Milestone 3 (Paving) delayed by 62 days',
      causeAnalysis: [
        { factor: 'Land Acquisition Delay', impact: 'High (45 days lost in Section 4)' },
        { factor: 'Material Supply Bottleneck', impact: 'Medium (Cement cost +18%)' },
        { factor: 'Monsoon Flooding', impact: 'Low (Site access blocked for 12 days)' }
      ]
    },
    {
      id: 'PRJ-1002',
      name: 'Railway Connectivity Corridor',
      state: 'Uttar Pradesh',
      sector: 'Railways',
      progress: 68,
      riskScore: 76,
      status: 'Ongoing',
      statusClass: 'ongoing',
      estCompletion: '20 May 2026',
      delayRisk: 74,
      costRisk: 55,
      agency: 'Indian Railways',
      contractor: 'Rail Vikas Nigam Ltd',
      approvedBudget: '₹4,120 Cr',
      spentBudget: '₹2,950 Cr',
      milestone: 'Track laying in Phase 2 ongoing',
      causeAnalysis: [
        { factor: 'Signal Equipment Import Delay', impact: 'High' }
      ]
    },
    {
      id: 'PRJ-1003',
      name: 'Bridge Construction over Ganga',
      state: 'Bihar',
      sector: 'Bridges',
      progress: 55,
      riskScore: 71,
      status: 'Delayed',
      statusClass: 'delayed',
      estCompletion: '10 Aug 2026',
      delayRisk: 68,
      costRisk: 78,
      agency: 'State PWD',
      contractor: 'L&T Infrastructure',
      approvedBudget: '₹1,890 Cr',
      spentBudget: '₹1,410 Cr',
      milestone: 'Pier foundation structural inspection pending',
      causeAnalysis: [
        { factor: 'River Bed Siltation', impact: 'High structural redesign needed' }
      ]
    },
    {
      id: 'PRJ-1004',
      name: 'Solar Energy Park Phase II',
      state: 'Gujarat',
      sector: 'Energy',
      progress: 88,
      riskScore: 35,
      status: 'On Track',
      statusClass: 'ontrack',
      estCompletion: '30 Dec 2025',
      delayRisk: 22,
      costRisk: 18,
      agency: 'GEDA / SECI',
      contractor: 'Adani Green Energy',
      approvedBudget: '₹3,500 Cr',
      spentBudget: '₹3,100 Cr',
      milestone: 'Grid synchronization successfully completed',
      causeAnalysis: []
    },
    {
      id: 'PRJ-1005',
      name: 'Urban Water Supply Scheme',
      state: 'Maharashtra',
      sector: 'Water',
      progress: 74,
      riskScore: 48,
      status: 'Ongoing',
      statusClass: 'ongoing',
      estCompletion: '18 Jul 2026',
      delayRisk: 40,
      costRisk: 32,
      agency: 'MJP',
      contractor: 'HCC Water Solutions',
      approvedBudget: '₹1,200 Cr',
      spentBudget: '₹890 Cr',
      milestone: 'Pipeline network 74% laid',
      causeAnalysis: []
    },
    {
      id: 'PRJ-1006',
      name: 'Metro Rail Phase 3 Extension',
      state: 'Delhi',
      sector: 'Urban Transport',
      progress: 38,
      riskScore: 79,
      status: 'Delayed',
      statusClass: 'delayed',
      estCompletion: '28 Feb 2027',
      delayRisk: 81,
      costRisk: 75,
      agency: 'DMRC',
      contractor: 'DMRC Infrastructure',
      approvedBudget: '₹5,800 Cr',
      spentBudget: '₹2,600 Cr',
      milestone: 'Underground tunneling clearance delayed',
      causeAnalysis: [
        { factor: 'Heritage clearance bottleneck', impact: 'High delay' }
      ]
    },
    {
      id: 'PRJ-1007',
      name: 'Smart Irrigation Canal Network',
      state: 'Karnataka',
      sector: 'Irrigation',
      progress: 92,
      riskScore: 28,
      status: 'On Track',
      statusClass: 'ontrack',
      estCompletion: '15 Apr 2026',
      delayRisk: 15,
      costRisk: 20,
      agency: 'KBJNL',
      contractor: 'Megha Engineering',
      approvedBudget: '₹2,100 Cr',
      spentBudget: '₹1,950 Cr',
      milestone: 'Canal lining 92% complete',
      causeAnalysis: []
    },
    {
      id: 'PRJ-1008',
      name: 'Industrial Park Connectivity Link',
      state: 'Andhra Pradesh',
      sector: 'Roads',
      progress: 60,
      riskScore: 54,
      status: 'Ongoing',
      statusClass: 'ongoing',
      estCompletion: '10 Nov 2026',
      delayRisk: 48,
      costRisk: 42,
      agency: 'APIC',
      contractor: 'Navayuga Engineering',
      approvedBudget: '₹950 Cr',
      spentBudget: '₹570 Cr',
      milestone: 'Earthworks completed',
      causeAnalysis: []
    }
  ],

  alerts: [
    {
      id: 'ALT-201',
      title: 'Highway Expansion Project',
      type: 'critical',
      category: 'delay',
      issue: 'Physical progress significantly behind schedule by 62 days.',
      tagText: 'Delay Risk',
      state: 'Rajasthan',
      sector: 'Roads',
      riskPercentage: 84,
      timeAgo: '2 hours ago'
    },
    {
      id: 'ALT-202',
      title: 'Bridge Construction over Ganga',
      type: 'critical',
      category: 'cost',
      issue: 'Cost overrun risk has increased beyond 15% threshold.',
      tagText: 'Cost Risk',
      state: 'Bihar',
      sector: 'Bridges',
      riskPercentage: 67,
      timeAgo: '4 hours ago'
    },
    {
      id: 'ALT-203',
      title: 'Railway Connectivity Corridor',
      type: 'warning',
      category: 'delay',
      issue: 'Milestone 3 track clearance delayed by 45 days.',
      tagText: 'Delay Risk',
      state: 'Uttar Pradesh',
      sector: 'Railways',
      riskPercentage: 58,
      timeAgo: '6 hours ago'
    },
    {
      id: 'ALT-204',
      title: 'Power Plant Development',
      type: 'warning',
      category: 'cost',
      issue: 'Cost expenditure pattern not aligned with physical progress.',
      tagText: 'Cost Risk',
      state: 'Gujarat',
      sector: 'Energy',
      riskPercentage: 52,
      timeAgo: '8 hours ago'
    },
    {
      id: 'ALT-205',
      title: 'Water Supply Scheme',
      type: 'info',
      category: 'progress',
      issue: 'Progress has improved by 12% following contractor milestone audit.',
      tagText: 'Progress Update',
      state: 'Maharashtra',
      sector: 'Water',
      riskPercentage: 12,
      isPositive: true,
      timeAgo: '10 hours ago'
    },
    {
      id: 'ALT-206',
      title: 'Metro Rail Phase 3 Extension',
      type: 'critical',
      category: 'delay',
      issue: 'Multiple milestones delayed and cost overrun detected.',
      tagText: 'Delay Risk',
      state: 'Delhi',
      sector: 'Urban Transport',
      riskPercentage: 79,
      timeAgo: '12 hours ago'
    },
    {
      id: 'ALT-207',
      title: 'Irrigation Canal Network',
      type: 'resolved',
      category: 'reduced',
      issue: 'Risk level reduced after recent field updates.',
      tagText: 'Risk Reduced',
      state: 'Karnataka',
      sector: 'Irrigation',
      riskPercentage: 28,
      isResolved: true,
      timeAgo: '1 day ago'
    }
  ]
};
