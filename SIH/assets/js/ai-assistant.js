/* 
   NIRMAAN AI - AI Assistant Logic (Screen 8)
*/

function handleAIQuery(promptText) {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // User Bubble
  container.insertAdjacentHTML('beforeend', `
    <div class="chat-message-row user">
      <div class="chat-avatar user" style="width: 32px; height: 32px; border-radius: 50%; background: #0f172a; color: white; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-user"></i></div>
      <div>
        <div class="chat-bubble">${escapeHtml(promptText)}</div>
        <div style="font-size: 0.68rem; color: var(--text-light); text-align: right; margin-top: 4px;">${timeStr}</div>
      </div>
    </div>
  `);
  container.scrollTop = container.scrollHeight;

  // Bot Response
  setTimeout(() => {
    container.insertAdjacentHTML('beforeend', `
      <div class="chat-message-row bot">
        <div class="chat-avatar bot" style="width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #1a56db, #00c6ff); color: white; display: flex; align-items: center; justify-content: center;"><i class="fa-solid fa-robot"></i></div>
        <div style="flex: 1;">
          <div class="chat-bubble">
            <p><strong>AI Assistant</strong></p>
            <p>Processing data analysis query for: <strong>"${escapeHtml(promptText)}"</strong>...</p>
            <p>Identified 14 projects matching criteria across national database. Top project risk score is <strong>84% (Highway Expansion Project)</strong>.</p>
          </div>
          <div style="font-size: 0.68rem; color: var(--text-light); margin-top: 4px;">${timeStr}</div>
        </div>
      </div>
    `);
    container.scrollTop = container.scrollHeight;
  }, 500);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.innerText = text;
  return div.innerHTML;
}

function initAIAssistant() {
  const chatForm = document.getElementById('ai-chat-form');
  const chatInput = document.getElementById('ai-input-field');

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val) return;
      handleAIQuery(val);
      chatInput.value = '';
    });
  }

  document.querySelectorAll('.prompt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const prompt = btn.getAttribute('data-prompt');
      if (prompt) handleAIQuery(prompt);
    });
  });
}
