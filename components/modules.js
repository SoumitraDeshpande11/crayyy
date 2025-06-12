export class ModulesSection {
  getSidebar() {
    return `
      <div class="sidebar-header">
        <div class="sidebar-title">Modules</div>
      </div>
      <ul class="sidebar-nav">
        <li><a href="#" class="sidebar-link active" data-scroll="dashboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
          </svg>
          Dashboard
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="leads">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2"/>
            <circle cx="8.5" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            <path d="M20 8V14" stroke="currentColor" stroke-width="2"/>
            <path d="M23 11H17" stroke="currentColor" stroke-width="2"/>
          </svg>
          Leads
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="deals">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/>
          </svg>
          Deals
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="contacts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
          </svg>
          Contacts
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="accounts">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 17L19 21Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Accounts
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="tasks">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2"/>
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2"/>
          </svg>
          Tasks
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="products">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="currentColor" stroke-width="2"/>
            <path d="M3 6H21" stroke="currentColor" stroke-width="2"/>
            <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" stroke-width="2"/>
          </svg>
          Products
        </a></li>
        <li><a href="#" class="sidebar-link" data-scroll="relationship-intelligence">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M20.84 4.61C19.32 3.04 17.16 2 14.92 2C13.74 2 12.6 2.3 11.6 2.84C10.6 2.3 9.46 2 8.28 2C6.04 2 3.88 3.04 2.36 4.61C0.84 6.18 0 8.34 0 10.58C0 12.82 0.84 14.98 2.36 16.55L12 22L21.64 16.55C23.16 14.98 24 12.82 24 10.58C24 8.34 23.16 6.18 21.64 4.61H20.84Z" stroke="currentColor" stroke-width="2" fill="none"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
          </svg>
          Relationship Intelligence
        </a></li>
      </ul>
    `
  }

  getContent() {
    return `
      <div class="section-header">
        <h1 class="section-title">CRM Dashboard</h1>
        <p class="section-subtitle">Manage your customer relationships and business operations</p>
      </div>

      <div id="dashboard" class="content-section">
        <h2>Dashboard Overview</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">1,247</div>
            <div class="stat-label">Total Leads</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">89</div>
            <div class="stat-label">Active Deals</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">$485K</div>
            <div class="stat-label">Pipeline Value</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">23%</div>
            <div class="stat-label">Conversion Rate</div>
          </div>
        </div>

        <div class="grid grid-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Recent Activities</h3>
              <div class="card-actions">
                <button class="btn btn-outline">View All</button>
              </div>
            </div>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">📞</div>
                <div class="activity-content">
                  <div class="activity-title">Call with John Smith</div>
                  <div class="activity-time">2 hours ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">📧</div>
                <div class="activity-content">
                  <div class="activity-title">Email sent to Sarah Johnson</div>
                  <div class="activity-time">4 hours ago</div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon">🤝</div>
                <div class="activity-content">
                  <div class="activity-title">Deal closed with TechCorp</div>
                  <div class="activity-time">1 day ago</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Top Opportunities</h3>
              <div class="card-actions">
                <button class="btn btn-primary">View Pipeline</button>
              </div>
            </div>
            <div class="opportunity-list">
              <div class="opportunity-item">
                <div class="opportunity-info">
                  <div class="opportunity-name">Enterprise Software Deal</div>
                  <div class="opportunity-value">$125,000</div>
                </div>
                <div class="opportunity-stage">Negotiation</div>
              </div>
              <div class="opportunity-item">
                <div class="opportunity-info">
                  <div class="opportunity-name">Marketing Automation</div>
                  <div class="opportunity-value">$85,000</div>
                </div>
                <div class="opportunity-stage">Proposal</div>
              </div>
              <div class="opportunity-item">
                <div class="opportunity-info">
                  <div class="opportunity-name">Cloud Migration</div>
                  <div class="opportunity-value">$200,000</div>
                </div>
                <div class="opportunity-stage">Discovery</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Performance Metrics</h3>
              <div class="card-actions">
                <button class="btn btn-outline">Details</button>
              </div>
            </div>
            <div class="metrics-content">
              <div class="metric-item">
                <div class="metric-label">Monthly Target</div>
                <div class="metric-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 78%"></div>
                  </div>
                  <span class="metric-percentage">78%</span>
                </div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Lead Response Time</div>
                <div class="metric-value">2.3 hours</div>
              </div>
              <div class="metric-item">
                <div class="metric-label">Customer Satisfaction</div>
                <div class="metric-value">4.8/5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="relationship-intelligence" class="content-section">
        <h2>Relationship Intelligence</h2>
        <div class="grid grid-2">
          <div class="card relationship-intelligence-card">
            <div class="card-header">
              <h3 class="card-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M20.84 4.61C19.32 3.04 17.16 2 14.92 2C13.74 2 12.6 2.3 11.6 2.84C10.6 2.3 9.46 2 8.28 2C6.04 2 3.88 3.04 2.36 4.61C0.84 6.18 0 8.34 0 10.58C0 12.82 0.84 14.98 2.36 16.55L12 22L21.64 16.55C23.16 14.98 24 12.82 24 10.58C24 8.34 23.16 6.18 21.64 4.61H20.84Z" stroke="currentColor" stroke-width="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
                Acme Corporation
              </h3>
              <div class="card-actions">
                <button class="btn btn-outline">View Profile</button>
              </div>
            </div>
            
            <div class="relationship-score-container">
              <div class="relationship-score-circle">
                <svg class="progress-ring" width="120" height="120">
                  <circle class="progress-ring-background" cx="60" cy="60" r="50" stroke="#e8e5c2" stroke-width="8" fill="transparent"/>
                  <circle class="progress-ring-progress" cx="60" cy="60" r="50" stroke="url(#gradient)" stroke-width="8" fill="transparent" stroke-linecap="round" stroke-dasharray="314.16" stroke-dashoffset="94.25"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#00A86B;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="score-content">
                  <div class="score-number">78</div>
                  <div class="score-label">Health Score</div>
                </div>
              </div>
              
              <div class="relationship-status">
                <div class="status-tag status-positive">
                  😊 Positive
                </div>
              </div>
            </div>

            <div class="insight-pills">
              <div class="insight-pill insight-warning">
                ⏰ Delayed Responses
              </div>
              <div class="insight-pill insight-neutral">
                📈 Increased Engagement
              </div>
              <div class="insight-pill insight-positive">
                🎯 Meeting Goals
              </div>
            </div>

            <div class="sentiment-chart">
              <div class="chart-header">
                <h4>Sentiment Trend (30 days)</h4>
              </div>
              <div class="mini-chart">
                <svg width="100%" height="60" viewBox="0 0 300 60">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#00A86B;stop-opacity:0.3" />
                      <stop offset="100%" style="stop-color:#00A86B;stop-opacity:0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,45 Q75,35 150,25 T300,20" stroke="#00A86B" stroke-width="3" fill="none" class="trend-line"/>
                  <path d="M0,45 Q75,35 150,25 T300,20 L300,60 L0,60 Z" fill="url(#chartGradient)" class="trend-area"/>
                  <circle cx="50" cy="40" r="3" fill="#00A86B" class="data-point"/>
                  <circle cx="100" cy="35" r="3" fill="#00A86B" class="data-point"/>
                  <circle cx="150" cy="25" r="3" fill="#00A86B" class="data-point"/>
                  <circle cx="200" cy="22" r="3" fill="#00A86B" class="data-point"/>
                  <circle cx="250" cy="20" r="3" fill="#00A86B" class="data-point"/>
                </svg>
              </div>
            </div>

            <div class="suggestion-box">
              <div class="suggestion-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 17H12.01" stroke="currentColor" stroke-width="2"/>
                </svg>
                Next Best Action
              </div>
              <div class="suggestion-content">
                Schedule a check-in call to address response delays and maintain momentum on the current project.
              </div>
              <button class="btn btn-accent suggestion-btn">Schedule Call</button>
            </div>
          </div>

          <div class="card relationship-intelligence-card">
            <div class="card-header">
              <h3 class="card-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M20.84 4.61C19.32 3.04 17.16 2 14.92 2C13.74 2 12.6 2.3 11.6 2.84C10.6 2.3 9.46 2 8.28 2C6.04 2 3.88 3.04 2.36 4.61C0.84 6.18 0 8.34 0 10.58C0 12.82 0.84 14.98 2.36 16.55L12 22L21.64 16.55C23.16 14.98 24 12.82 24 10.58C24 8.34 23.16 6.18 21.64 4.61H20.84Z" stroke="currentColor" stroke-width="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
                TechStart Solutions
              </h3>
              <div class="card-actions">
                <button class="btn btn-outline">View Profile</button>
              </div>
            </div>
            
            <div class="relationship-score-container">
              <div class="relationship-score-circle">
                <svg class="progress-ring" width="120" height="120">
                  <circle class="progress-ring-background" cx="60" cy="60" r="50" stroke="#e8e5c2" stroke-width="8" fill="transparent"/>
                  <circle class="progress-ring-progress at-risk" cx="60" cy="60" r="50" stroke="url(#gradientRisk)" stroke-width="8" fill="transparent" stroke-linecap="round" stroke-dasharray="314.16" stroke-dashoffset="188.5"/>
                  <defs>
                    <linearGradient id="gradientRisk" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#E57373;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#FF8C00;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="score-content">
                  <div class="score-number">42</div>
                  <div class="score-label">Health Score</div>
                </div>
              </div>
              
              <div class="relationship-status">
                <div class="status-tag status-at-risk">
                  ⚠️ At Risk
                </div>
              </div>
            </div>

            <div class="insight-pills">
              <div class="insight-pill insight-critical">
                😤 Impatient Tone
              </div>
              <div class="insight-pill insight-warning">
                📉 Declining Engagement
              </div>
              <div class="insight-pill insight-critical">
                🚫 Missed Meetings
              </div>
            </div>

            <div class="sentiment-chart">
              <div class="chart-header">
                <h4>Sentiment Trend (30 days)</h4>
              </div>
              <div class="mini-chart">
                <svg width="100%" height="60" viewBox="0 0 300 60">
                  <defs>
                    <linearGradient id="chartGradientRisk" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style="stop-color:#E57373;stop-opacity:0.3" />
                      <stop offset="100%" style="stop-color:#E57373;stop-opacity:0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,20 Q75,25 150,35 T300,50" stroke="#E57373" stroke-width="3" fill="none" class="trend-line"/>
                  <path d="M0,20 Q75,25 150,35 T300,50 L300,60 L0,60 Z" fill="url(#chartGradientRisk)" class="trend-area"/>
                  <circle cx="50" cy="22" r="3" fill="#E57373" class="data-point"/>
                  <circle cx="100" cy="25" r="3" fill="#E57373" class="data-point"/>
                  <circle cx="150" cy="35" r="3" fill="#E57373" class="data-point"/>
                  <circle cx="200" cy="42" r="3" fill="#E57373" class="data-point"/>
                  <circle cx="250" cy="48" r="3" fill="#E57373" class="data-point"/>
                </svg>
              </div>
            </div>

            <div class="suggestion-box urgent">
              <div class="suggestion-header">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M10.29 3.86L1.82 18C1.64486 18.3024 1.55674 18.6453 1.56911 18.9928C1.58148 19.3403 1.69395 19.6781 1.89037 19.9681C2.08679 20.2581 2.35918 20.4887 2.67972 20.6342C3.00026 20.7797 3.35302 20.8347 3.70001 20.79H20.3C20.647 20.8347 20.9997 20.7797 21.3203 20.6342C21.6408 20.4887 21.9132 20.2581 22.1096 19.9681C22.3061 19.6781 22.4185 19.3403 22.4309 18.9928C22.4433 18.6453 22.3551 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3438 2.89725 12 2.89725C11.6562 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86V3.86Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 9V13" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 17H12.01" stroke="currentColor" stroke-width="2"/>
                </svg>
                Urgent Action Required
              </div>
              <div class="suggestion-content">
                Immediate intervention needed. Schedule executive meeting to address concerns and rebuild trust.
              </div>
              <button class="btn btn-accent suggestion-btn urgent-btn">Escalate Now</button>
            </div>
          </div>
        </div>
      </div>

      <div id="leads" class="content-section">
        <h2>Lead Management</h2>
        <div class="grid grid-3">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">New Leads</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add Lead</button>
              </div>
            </div>
            <div class="lead-list">
              <div class="lead-item">
                <div class="lead-info">
                  <div class="lead-name">Jennifer Martinez</div>
                  <div class="lead-company">Global Tech Inc.</div>
                  <div class="lead-source">Website Form</div>
                </div>
                <div class="lead-score">85</div>
              </div>
              <div class="lead-item">
                <div class="lead-info">
                  <div class="lead-name">Robert Chen</div>
                  <div class="lead-company">Innovation Labs</div>
                  <div class="lead-source">LinkedIn</div>
                </div>
                <div class="lead-score">72</div>
              </div>
              <div class="lead-item">
                <div class="lead-info">
                  <div class="lead-name">Emily Rodriguez</div>
                  <div class="lead-company">StartUp Ventures</div>
                  <div class="lead-source">Referral</div>
                </div>
                <div class="lead-score">91</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Lead Sources</h3>
            </div>
            <div class="source-breakdown">
              <div class="source-item">
                <div class="source-name">Website</div>
                <div class="source-bar">
                  <div class="source-progress" style="width: 45%"></div>
                </div>
                <div class="source-value">45%</div>
              </div>
              <div class="source-item">
                <div class="source-name">Social Media</div>
                <div class="source-bar">
                  <div class="source-progress" style="width: 30%"></div>
                </div>
                <div class="source-value">30%</div>
              </div>
              <div class="source-item">
                <div class="source-name">Referrals</div>
                <div class="source-bar">
                  <div class="source-progress" style="width: 25%"></div>
                </div>
                <div class="source-value">25%</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Conversion Funnel</h3>
            </div>
            <div class="funnel-stages">
              <div class="funnel-stage">
                <div class="stage-name">Visitors</div>
                <div class="stage-count">12,450</div>
              </div>
              <div class="funnel-stage">
                <div class="stage-name">Leads</div>
                <div class="stage-count">2,890</div>
              </div>
              <div class="funnel-stage">
                <div class="stage-name">Qualified</div>
                <div class="stage-count">1,247</div>
              </div>
              <div class="funnel-stage">
                <div class="stage-name">Customers</div>
                <div class="stage-count">534</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="deals" class="content-section">
        <h2>Deal Pipeline</h2>
        <div class="grid grid-4">
          <div class="deal-card">
            <div class="deal-header">
              <div class="deal-stage">Prospecting</div>
              <div class="deal-count">12 deals</div>
            </div>
            <div class="deal-value">$485,000</div>
            <div class="deal-list">
              <div class="deal-item">
                <div class="deal-name">Enterprise Software</div>
                <div class="deal-amount">$125,000</div>
              </div>
              <div class="deal-item">
                <div class="deal-name">Cloud Migration</div>
                <div class="deal-amount">$200,000</div>
              </div>
              <div class="deal-item">
                <div class="deal-name">Security Audit</div>
                <div class="deal-amount">$75,000</div>
              </div>
            </div>
          </div>

          <div class="deal-card">
            <div class="deal-header">
              <div class="deal-stage">Qualification</div>
              <div class="deal-count">8 deals</div>
            </div>
            <div class="deal-value">$320,000</div>
            <div class="deal-list">
              <div class="deal-item">
                <div class="deal-name">Marketing Automation</div>
                <div class="deal-amount">$85,000</div>
              </div>
              <div class="deal-item">
                <div class="deal-name">CRM Implementation</div>
                <div class="deal-amount">$150,000</div>
              </div>
            </div>
          </div>

          <div class="deal-card">
            <div class="deal-header">
              <div class="deal-stage">Proposal</div>
              <div class="deal-count">5 deals</div>
            </div>
            <div class="deal-value">$275,000</div>
            <div class="deal-list">
              <div class="deal-item">
                <div class="deal-name">Data Analytics</div>
                <div class="deal-amount">$95,000</div>
              </div>
              <div class="deal-item">
                <div class="deal-name">Mobile App</div>
                <div class="deal-amount">$180,000</div>
              </div>
            </div>
          </div>

          <div class="deal-card">
            <div class="deal-header">
              <div class="deal-stage">Negotiation</div>
              <div class="deal-count">3 deals</div>
            </div>
            <div class="deal-value">$180,000</div>
            <div class="deal-list">
              <div class="deal-item">
                <div class="deal-name">AI Integration</div>
                <div class="deal-amount">$120,000</div>
              </div>
              <div class="deal-item">
                <div class="deal-name">Training Program</div>
                <div class="deal-amount">$60,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contacts" class="content-section">
        <h2>Contact Management</h2>
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Contacts</h3>
            <div class="card-actions">
              <button class="btn btn-accent">Add Contact</button>
              <button class="btn btn-outline">Import</button>
            </div>
          </div>
          <table class="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Last Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="data-row">
                <td>John Smith</td>
                <td>TechCorp Inc.</td>
                <td>john.smith@techcorp.com</td>
                <td>+1 (555) 123-4567</td>
                <td>2 days ago</td>
                <td>
                  <button class="btn btn-primary">Contact</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Sarah Johnson</td>
                <td>Innovation Labs</td>
                <td>sarah.j@innovationlabs.com</td>
                <td>+1 (555) 987-6543</td>
                <td>1 week ago</td>
                <td>
                  <button class="btn btn-primary">Contact</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
              <tr class="data-row">
                <td>Mike Wilson</td>
                <td>Global Solutions</td>
                <td>m.wilson@globalsolutions.com</td>
                <td>+1 (555) 456-7890</td>
                <td>3 days ago</td>
                <td>
                  <button class="btn btn-primary">Contact</button>
                  <button class="btn btn-outline">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="accounts" class="content-section">
        <h2>Account Management</h2>
        <div class="grid grid-3">
          <div class="account-card">
            <div class="account-header">
              <div class="account-name">TechCorp Inc.</div>
              <div class="account-value">$2.5M</div>
            </div>
            <div class="account-details">
              <div class="account-contacts">15 contacts</div>
              <div class="account-deals">8 active deals</div>
              <div class="account-status">Enterprise</div>
            </div>
            <div class="account-actions">
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>

          <div class="account-card">
            <div class="account-header">
              <div class="account-name">Innovation Labs</div>
              <div class="account-value">$1.8M</div>
            </div>
            <div class="account-details">
              <div class="account-contacts">12 contacts</div>
              <div class="account-deals">5 active deals</div>
              <div class="account-status">Premium</div>
            </div>
            <div class="account-actions">
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>

          <div class="account-card">
            <div class="account-header">
              <div class="account-name">StartUp Ventures</div>
              <div class="account-value">$950K</div>
            </div>
            <div class="account-details">
              <div class="account-contacts">8 contacts</div>
              <div class="account-deals">3 active deals</div>
              <div class="account-status">Growth</div>
            </div>
            <div class="account-actions">
              <button class="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>

      <div id="tasks" class="content-section">
        <h2>Task Management</h2>
        <div class="grid grid-2">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Today's Tasks</h3>
              <div class="card-actions">
                <button class="btn btn-accent">Add Task</button>
              </div>
            </div>
            <div class="task-list">
              <div class="task-card">
                <div class="task-checkbox">
                  <input type="checkbox" id="task1">
                  <label for="task1"></label>
                </div>
                <div class="task-content">
                  <div class="task-title">Follow up with John Smith</div>
                  <div class="task-meta">
                    <span class="task-priority high">High Priority</span>
                    <span class="task-time">Due: 2:00 PM</span>
                  </div>
                </div>
              </div>

              <div class="task-card">
                <div class="task-checkbox">
                  <input type="checkbox" id="task2">
                  <label for="task2"></label>
                </div>
                <div class="task-content">
                  <div class="task-title">Prepare proposal for TechCorp</div>
                  <div class="task-meta">
                    <span class="task-priority medium">Medium Priority</span>
                    <span class="task-time">Due: 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div class="task-card">
                <div class="task-checkbox">
                  <input type="checkbox" id="task3" checked>
                  <label for="task3"></label>
                </div>
                <div class="task-content completed">
                  <div class="task-title">Send contract to Sarah Johnson</div>
                  <div class="task-meta">
                    <span class="task-priority low">Low Priority</span>
                    <span class="task-time">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Upcoming Tasks</h3>
            </div>
            <div class="task-list">
              <div class="task-card">
                <div class="task-checkbox">
                  <input type="checkbox" id="task4">
                  <label for="task4"></label>
                </div>
                <div class="task-content">
                  <div class="task-title">Client meeting with Innovation Labs</div>
                  <div class="task-meta">
                    <span class="task-priority high">High Priority</span>
                    <span class="task-time">Tomorrow 10:00 AM</span>
                  </div>
                </div>
              </div>

              <div class="task-card">
                <div class="task-checkbox">
                  <input type="checkbox" id="task5">
                  <label for="task5"></label>
                </div>
                <div class="task-content">
                  <div class="task-title">Review quarterly reports</div>
                  <div class="task-meta">
                    <span class="task-priority medium">Medium Priority</span>
                    <span class="task-time">Friday 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="products" class="content-section">
        <h2>Product Catalog</h2>
        <div class="grid grid-3">
          <div class="product-card">
            <div class="product-image">
              <div class="product-placeholder">📦</div>
            </div>
            <div class="product-info">
              <div class="product-name">Enterprise CRM Suite</div>
              <div class="product-price">$299/month</div>
              <div class="product-description">Complete CRM solution for large organizations</div>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary">Add to Quote</button>
              <button class="btn btn-outline">Details</button>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <div class="product-placeholder">💼</div>
            </div>
            <div class="product-info">
              <div class="product-name">Professional Package</div>
              <div class="product-price">$149/month</div>
              <div class="product-description">Advanced features for growing businesses</div>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary">Add to Quote</button>
              <button class="btn btn-outline">Details</button>
            </div>
          </div>

          <div class="product-card">
            <div class="product-image">
              <div class="product-placeholder">🚀</div>
            </div>
            <div class="product-info">
              <div class="product-name">Starter Plan</div>
              <div class="product-price">$49/month</div>
              <div class="product-description">Essential CRM tools for small teams</div>
            </div>
            <div class="product-actions">
              <button class="btn btn-primary">Add to Quote</button>
              <button class="btn btn-outline">Details</button>
            </div>
          </div>
        </div>
      </div>
    `
  }

  initialize() {
    // Initialize relationship intelligence animations
    this.initializeRelationshipIntelligence()
    console.log('Modules section initialized with Relationship Intelligence')
  }

  initializeRelationshipIntelligence() {
    // Animate progress rings
    setTimeout(() => {
      const progressRings = document.querySelectorAll('.progress-ring-progress')
      progressRings.forEach(ring => {
        ring.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)'
      })
    }, 500)

    // Animate chart lines
    setTimeout(() => {
      const trendLines = document.querySelectorAll('.trend-line')
      trendLines.forEach(line => {
        const length = line.getTotalLength()
        line.style.strokeDasharray = length
        line.style.strokeDashoffset = length
        line.style.animation = 'drawLine 2s ease-out forwards'
      })

      const trendAreas = document.querySelectorAll('.trend-area')
      trendAreas.forEach(area => {
        area.style.animation = 'fillArea 2s ease-out 1s forwards'
      })

      const dataPoints = document.querySelectorAll('.data-point')
      dataPoints.forEach((point, index) => {
        point.style.animation = `popIn 0.5s ease-out ${1.5 + index * 0.1}s forwards`
        point.style.opacity = '0'
        point.style.transform = 'scale(0)'
      })
    }, 1000)

    // Add hover effects to insight pills
    const insightPills = document.querySelectorAll('.insight-pill')
    insightPills.forEach(pill => {
      pill.addEventListener('mouseenter', () => {
        pill.style.transform = 'translateY(-2px) scale(1.05)'
      })
      pill.addEventListener('mouseleave', () => {
        pill.style.transform = 'translateY(0) scale(1)'
      })
    })

    // Add click effects to suggestion buttons
    const suggestionBtns = document.querySelectorAll('.suggestion-btn')
    suggestionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Create ripple effect
        const ripple = document.createElement('span')
        const rect = btn.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        
        ripple.style.width = ripple.style.height = size + 'px'
        ripple.style.left = x + 'px'
        ripple.style.top = y + 'px'
        ripple.classList.add('ripple-effect')
        
        btn.appendChild(ripple)
        
        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }
}