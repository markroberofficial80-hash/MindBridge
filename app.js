// Application Data
const appData = {
  moodOptions: [
    {"emoji": "😊", "label": "Great", "value": 5},
    {"emoji": "🙂", "label": "Good", "value": 4},
    {"emoji": "😐", "label": "Okay", "value": 3},
    {"emoji": "🙁", "label": "Not Great", "value": 2},
    {"emoji": "😢", "label": "Struggling", "value": 1}
  ],
  quotes: [
    "You are stronger than you think and more capable than you imagine.",
    "Every small step forward is progress worth celebrating.",
    "It's okay to not be okay. What matters is that you're here.",
    "Your mental health is just as important as your physical health.",
    "You have survived 100% of your worst days. You're doing great.",
    "Growth happens outside your comfort zone, but at your own pace."
  ],
  peerChatRooms: [
    {
      "id": "academic",
      "name": "Academic Support",
      "description": "Share study stress and get support",
      "memberCount": 127,
      "recent": [
        {"user": "Alex", "message": "Anyone else stressed about finals?", "time": "2 min ago"},
        {"user": "Sam", "message": "I've been using the pomodoro technique, helps a lot!", "time": "5 min ago"}
      ]
    },
    {
      "id": "anxiety",
      "name": "Anxiety Support",
      "description": "Safe space for anxiety discussions",
      "memberCount": 89,
      "recent": [
        {"user": "Jordan", "message": "Breathing exercises really helped me today", "time": "1 min ago"},
        {"user": "Taylor", "message": "Thanks for the support yesterday everyone", "time": "10 min ago"}
      ]
    },
    {
      "id": "general",
      "name": "General Support",
      "description": "Open space for all topics",
      "memberCount": 234,
      "recent": [
        {"user": "Casey", "message": "Hope everyone has a good day!", "time": "3 min ago"},
        {"user": "Riley", "message": "Grateful for this community", "time": "7 min ago"}
      ]
    }
  ],
  stressManagementTools: [
    {
      "name": "4-7-8 Breathing",
      "description": "Inhale for 4, hold for 7, exhale for 8",
      "duration": "2 minutes",
      "type": "breathing"
    },
    {
      "name": "Box Breathing",
      "description": "4 counts in, hold 4, out 4, hold 4",
      "duration": "3 minutes",
      "type": "breathing"
    },
    {
      "name": "Quick Meditation",
      "description": "Mindfulness meditation for beginners",
      "duration": "5 minutes",
      "type": "meditation"
    },
    {
      "name": "Progressive Relaxation",
      "description": "Tense and release muscle groups",
      "duration": "10 minutes",
      "type": "relaxation"
    }
  ],
  emotions: [
    {"name": "Happy", "color": "#FFD93D", "coping": ["Celebrate achievements", "Share joy with others", "Practice gratitude"]},
    {"name": "Sad", "color": "#4A90E2", "coping": ["Allow yourself to feel", "Reach out to friends", "Practice self-care"]},
    {"name": "Anxious", "color": "#F5A623", "coping": ["Deep breathing", "Ground yourself (5-4-3-2-1)", "Talk to someone"]},
    {"name": "Angry", "color": "#D0021B", "coping": ["Physical exercise", "Punch a pillow", "Write it out"]},
    {"name": "Stressed", "color": "#9013FE", "coping": ["Take breaks", "Prioritize tasks", "Use relaxation techniques"]},
    {"name": "Lonely", "color": "#50E3C2", "coping": ["Connect with others", "Join activities", "Practice self-compassion"]}
  ],
  achievements: [
    {"id": "first_checkin", "name": "First Check-in", "description": "Completed your first mood check-in", "badge": "🎯"},
    {"id": "week_streak", "name": "Week Warrior", "description": "7 days of consistent check-ins", "badge": "🔥"},
    {"id": "peer_helper", "name": "Peer Helper", "description": "Supported someone in chat", "badge": "🤝"},
    {"id": "stress_master", "name": "Stress Master", "description": "Used 10 stress management tools", "badge": "🧘"},
    {"id": "journal_writer", "name": "Journal Writer", "description": "Completed 5 journal entries", "badge": "📝"}
  ],
  crisisResources: [
    {
      "name": "Crisis Text Line",
      "contact": "Text HOME to 741741",
      "description": "24/7 crisis support via text",
      "urgent": true
    },
    {
      "name": "National Suicide Prevention Lifeline",
      "contact": "988",
      "description": "24/7 phone support",
      "urgent": true
    },
    {
      "name": "Teen Line",
      "contact": "1-800-852-8336",
      "description": "Teens helping teens",
      "urgent": false
    },
    {
      "name": "Trevor Project",
      "contact": "1-866-488-7386",
      "description": "LGBTQ+ youth support",
      "urgent": false
    }
  ]
};

// Application State
let appState = {
  currentSection: 'home',
  userData: {
    checkInStreak: 0,
    toolsUsed: 0,
    unlockedAchievements: [],
    journalEntries: [],
    lastCheckIn: null,
    selectedMood: null
  },
  currentChatRoom: null,
  breathingSession: null,
  studyTimer: null
};

// DOM Elements
const navigation = document.getElementById('navigation');
const sections = document.querySelectorAll('.section');
const moodOptions = document.getElementById('moodOptions');
const submitMoodBtn = document.getElementById('submitMood');
const dailyQuote = document.getElementById('dailyQuote');
const checkInStreak = document.getElementById('checkInStreak');
const toolsUsed = document.getElementById('toolsUsed');
const achievementCount = document.getElementById('achievementCount');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  loadUserData();
  initializeNavigation();
  initializeHome();
  initializeChat();
  initializeStress();
  initializeAcademic();
  initializeEmotions();
  initializeCrisis();
  initializeProfile();
  updateProgressStats();
});

// Load User Data from localStorage
function loadUserData() {
  const saved = localStorage.getItem('mindbridge_data');
  if (saved) {
    appState.userData = { ...appState.userData, ...JSON.parse(saved) };
  }
}

// Save User Data to localStorage
function saveUserData() {
  localStorage.setItem('mindbridge_data', JSON.stringify(appState.userData));
}

// Navigation System
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav__item');
  const quickButtons = document.querySelectorAll('[data-section]');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      if (section) {
        showSection(section);
      }
    });
  });
  
  quickButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.dataset.section;
      if (section) {
        showSection(section);
      }
    });
  });
}

function showSection(sectionName) {
  // Update navigation
  document.querySelectorAll('.nav__item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === sectionName);
  });
  
  // Update sections
  sections.forEach(section => {
    section.classList.toggle('active', section.id === sectionName);
  });
  
  appState.currentSection = sectionName;
}

// Home Section
function initializeHome() {
  renderMoodOptions();
  displayDailyQuote();
  
  submitMoodBtn.addEventListener('click', handleMoodCheckIn);
}

function renderMoodOptions() {
  moodOptions.innerHTML = appData.moodOptions.map(mood => `
    <div class="mood-option" data-value="${mood.value}">
      <div class="mood-emoji">${mood.emoji}</div>
      <div class="mood-label">${mood.label}</div>
    </div>
  `).join('');
  
  document.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.mood-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      appState.userData.selectedMood = parseInt(option.dataset.value);
    });
  });
}

function displayDailyQuote() {
  const today = new Date().getDate();
  const quote = appData.quotes[today % appData.quotes.length];
  dailyQuote.textContent = quote;
}

function handleMoodCheckIn() {
  if (appState.userData.selectedMood === null) {
    alert('Please select your mood first!');
    return;
  }
  
  const today = new Date().toDateString();
  const lastCheckIn = appState.userData.lastCheckIn;
  
  if (lastCheckIn !== today) {
    if (lastCheckIn) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (lastCheckIn === yesterday.toDateString()) {
        appState.userData.checkInStreak += 1;
      } else {
        appState.userData.checkInStreak = 1;
      }
    } else {
      appState.userData.checkInStreak = 1;
    }
    
    appState.userData.lastCheckIn = today;
    checkAchievements();
    saveUserData();
    updateProgressStats();
    
    alert('Mood checked in successfully! 🎉');
  } else {
    alert('You have already checked in today!');
  }
}

// Chat Section
function initializeChat() {
  renderChatRooms();
  
  document.getElementById('leaveChatBtn').addEventListener('click', leaveChatRoom);
  document.getElementById('sendMessage').addEventListener('click', sendMessage);
  document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
}

function renderChatRooms() {
  const chatRoomsContainer = document.getElementById('chatRooms');
  chatRoomsContainer.innerHTML = appData.peerChatRooms.map(room => `
    <div class="chat-room" data-room-id="${room.id}">
      <div class="chat-room-header">
        <h3 class="chat-room-name">${room.name}</h3>
        <span class="chat-room-count">${room.memberCount}</span>
      </div>
      <p class="chat-room-description">${room.description}</p>
      <div class="chat-recent">
        ${room.recent.map(msg => `
          <div class="chat-message-preview">
            <span class="chat-username">${msg.user}:</span>
            <span>${msg.message}</span>
            <span class="chat-time">${msg.time}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.chat-room').forEach(room => {
    room.addEventListener('click', () => {
      const roomId = room.dataset.roomId;
      joinChatRoom(roomId);
    });
  });
}

function joinChatRoom(roomId) {
  const room = appData.peerChatRooms.find(r => r.id === roomId);
  if (!room) return;
  
  appState.currentChatRoom = room;
  document.getElementById('chatRoomName').textContent = room.name;
  document.getElementById('chatRooms').classList.add('hidden');
  document.getElementById('chatInterface').classList.remove('hidden');
  
  loadChatMessages(room);
}

function leaveChatRoom() {
  appState.currentChatRoom = null;
  document.getElementById('chatRooms').classList.remove('hidden');
  document.getElementById('chatInterface').classList.add('hidden');
}

function loadChatMessages(room) {
  const messagesContainer = document.getElementById('chatMessages');
  messagesContainer.innerHTML = room.recent.map(msg => `
    <div class="chat-message">
      <strong>${msg.user}:</strong> ${msg.message}
      <div class="chat-time">${msg.time}</div>
    </div>
  `).join('');
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (!message) return;
  
  const messagesContainer = document.getElementById('chatMessages');
  const messageElement = document.createElement('div');
  messageElement.className = 'chat-message';
  messageElement.innerHTML = `<strong>You:</strong> ${message}<div class="chat-time">now</div>`;
  messagesContainer.appendChild(messageElement);
  
  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Simulate response after a delay
  setTimeout(() => {
    const responses = [
      "Thanks for sharing that!",
      "I can relate to that feeling.",
      "You're not alone in this.",
      "That sounds really tough.",
      "Sending you support! 💚"
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    const responseElement = document.createElement('div');
    responseElement.className = 'chat-message';
    responseElement.innerHTML = `<strong>Support Bot:</strong> ${response}<div class="chat-time">now</div>`;
    messagesContainer.appendChild(responseElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 2000);
}

// Stress Management Section
function initializeStress() {
  renderStressTools();
  initializeBreathingExercise();
}

function renderStressTools() {
  const stressToolsContainer = document.getElementById('stressTools');
  stressToolsContainer.innerHTML = appData.stressManagementTools.map(tool => `
    <div class="stress-tool" data-tool-type="${tool.type}">
      <h3>${tool.name}</h3>
      <p class="stress-tool-description">${tool.description}</p>
      <span class="stress-tool-duration">${tool.duration}</span>
    </div>
  `).join('');
  
  document.querySelectorAll('.stress-tool').forEach(tool => {
    tool.addEventListener('click', () => {
      const toolType = tool.dataset.toolType;
      if (toolType === 'breathing') {
        showBreathingExercise();
      } else {
        startStressTool(toolType);
      }
    });
  });
}

function showBreathingExercise() {
  document.getElementById('stressTools').classList.add('hidden');
  document.getElementById('breathingExercise').classList.remove('hidden');
}

function initializeBreathingExercise() {
  document.getElementById('startBreathing').addEventListener('click', startBreathingExercise);
  document.getElementById('stopBreathing').addEventListener('click', stopBreathingExercise);
}

function startBreathingExercise() {
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText');
  
  let phase = 0; // 0: inhale, 1: hold, 2: exhale, 3: hold
  const phases = ['Breathe In', 'Hold', 'Breathe Out', 'Hold'];
  const durations = [4000, 7000, 8000, 2000]; // 4-7-8 breathing
  
  function breathingCycle() {
    text.textContent = phases[phase];
    
    if (phase === 0) {
      circle.classList.add('inhale');
      circle.classList.remove('exhale');
    } else if (phase === 2) {
      circle.classList.add('exhale');
      circle.classList.remove('inhale');
    }
    
    appState.breathingSession = setTimeout(() => {
      phase = (phase + 1) % 4;
      if (appState.breathingSession) {
        breathingCycle();
      }
    }, durations[phase]);
  }
  
  breathingCycle();
  incrementToolUsage();
}

function stopBreathingExercise() {
  if (appState.breathingSession) {
    clearTimeout(appState.breathingSession);
    appState.breathingSession = null;
  }
  
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText');
  
  circle.classList.remove('inhale', 'exhale');
  text.textContent = 'Get Ready';
  
  document.getElementById('stressTools').classList.remove('hidden');
  document.getElementById('breathingExercise').classList.add('hidden');
}

function startStressTool(toolType) {
  incrementToolUsage();
  alert(`Starting ${toolType} session... (This would be a guided session in a full app)`);
}

// Academic Section
function initializeAcademic() {
  document.getElementById('startStudySession').addEventListener('click', startStudySession);
  document.getElementById('pauseTimer').addEventListener('click', pauseStudyTimer);
  document.getElementById('stressLevel').addEventListener('input', updateStressAdvice);
}

function startStudySession() {
  const task = document.getElementById('studyTask').value;
  const duration = parseInt(document.getElementById('studyDuration').value);
  
  if (!task || !duration) {
    alert('Please enter a task and duration!');
    return;
  }
  
  document.getElementById('studyTimer').classList.remove('hidden');
  startPomodoro(duration);
}

function startPomodoro(minutes) {
  let timeLeft = minutes * 60;
  const display = document.getElementById('timerDisplay');
  
  appState.studyTimer = setInterval(() => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(appState.studyTimer);
      alert('Study session complete! Time for a break! 🎉');
      document.getElementById('studyTimer').classList.add('hidden');
    }
    
    timeLeft--;
  }, 1000);
}

function pauseStudyTimer() {
  if (appState.studyTimer) {
    clearInterval(appState.studyTimer);
    appState.studyTimer = null;
    alert('Timer paused');
  }
}

function updateStressAdvice() {
  const level = parseInt(document.getElementById('stressLevel').value);
  const advice = document.getElementById('stressAdvice');
  
  const adviceTexts = {
    1: "Great! You're managing well. Keep up the good work!",
    2: "Doing well. Consider some light relaxation techniques.",
    3: "Moderate stress. Try taking short breaks between study sessions.",
    4: "Getting stressed. Practice deep breathing and break tasks into smaller parts.",
    5: "Noticeable stress. Consider the Pomodoro technique (25min work, 5min break).",
    6: "Elevated stress. Take a longer break and do something you enjoy.",
    7: "High stress. Talk to someone you trust and consider reducing your workload.",
    8: "Very stressed. Focus on immediate stress relief and seek support.",
    9: "Extremely stressed. Please reach out for help and take care of yourself first.",
    10: "Crisis level stress. Your wellbeing comes first - seek immediate support!"
  };
  
  advice.textContent = adviceTexts[level];
  advice.style.display = 'block';
}

// Emotions Section
function initializeEmotions() {
  renderEmotionWheel();
  document.getElementById('saveJournal').addEventListener('click', saveJournalEntry);
  loadJournalHistory();
}

function renderEmotionWheel() {
  const emotionWheel = document.getElementById('emotionWheel');
  emotionWheel.innerHTML = appData.emotions.map(emotion => `
    <div class="emotion-item" data-emotion="${emotion.name}">
      <div class="emotion-color" style="background-color: ${emotion.color}"></div>
      <h4 class="emotion-name">${emotion.name}</h4>
    </div>
  `).join('');
  
  document.querySelectorAll('.emotion-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.emotion-item').forEach(e => e.classList.remove('selected'));
      item.classList.add('selected');
      
      const emotionName = item.dataset.emotion;
      const emotion = appData.emotions.find(e => e.name === emotionName);
      
      if (emotion) {
        showCopingStrategies(emotion);
      }
    });
  });
}

function showCopingStrategies(emotion) {
  const strategies = emotion.coping.join(', ');
  alert(`Coping strategies for ${emotion.name}:\n\n• ${emotion.coping.join('\n• ')}`);
}

function saveJournalEntry() {
  const entry = document.getElementById('journalEntry').value.trim();
  if (!entry) {
    alert('Please write something in your journal!');
    return;
  }
  
  const journalData = {
    date: new Date().toLocaleDateString(),
    content: entry,
    timestamp: Date.now()
  };
  
  appState.userData.journalEntries.push(journalData);
  saveUserData();
  
  document.getElementById('journalEntry').value = '';
  loadJournalHistory();
  checkAchievements();
  
  alert('Journal entry saved! 📝');
}

function loadJournalHistory() {
  const history = document.getElementById('journalHistory');
  const entries = appState.userData.journalEntries.slice(-5).reverse(); // Show last 5 entries
  
  if (entries.length === 0) {
    history.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">No journal entries yet. Start writing to track your emotional journey!</p>';
    return;
  }
  
  history.innerHTML = entries.map(entry => `
    <div class="journal-entry">
      <div class="journal-date">${entry.date}</div>
      <div class="journal-text">${entry.content}</div>
    </div>
  `).join('');
}

// Crisis Section
function initializeCrisis() {
  renderCrisisResources();
  initializeCopingStrategies();
}

function renderCrisisResources() {
  const resourcesContainer = document.getElementById('crisisResources');
  resourcesContainer.innerHTML = appData.crisisResources.map(resource => `
    <div class="crisis-resource ${resource.urgent ? 'urgent' : ''}">
      ${resource.urgent ? '<div class="urgent-badge">URGENT</div>' : ''}
      <h3>${resource.name}</h3>
      <div class="crisis-contact">${resource.contact}</div>
      <p class="crisis-description">${resource.description}</p>
    </div>
  `).join('');
}

function initializeCopingStrategies() {
  document.querySelectorAll('.strategy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const strategy = btn.dataset.strategy;
      showCopingStrategy(strategy);
    });
  });
}

function showCopingStrategy(strategy) {
  const content = document.getElementById('strategyContent');
  const strategies = {
    grounding: `
      <h4>5-4-3-2-1 Grounding Technique</h4>
      <p>Focus on:</p>
      <ul>
        <li><strong>5 things</strong> you can see</li>
        <li><strong>4 things</strong> you can touch</li>
        <li><strong>3 things</strong> you can hear</li>
        <li><strong>2 things</strong> you can smell</li>
        <li><strong>1 thing</strong> you can taste</li>
      </ul>
      <p>This helps bring you back to the present moment.</p>
    `,
    breathing: `
      <h4>Emergency Breathing Exercise</h4>
      <p>Try this simple breathing pattern:</p>
      <ol>
        <li>Breathe in slowly through your nose for 4 counts</li>
        <li>Hold your breath for 4 counts</li>
        <li>Breathe out slowly through your mouth for 6 counts</li>
        <li>Repeat 5-10 times</li>
      </ol>
      <p>Focus only on your breathing.</p>
    `,
    distraction: `
      <h4>Distraction Techniques</h4>
      <p>Try these activities to redirect your mind:</p>
      <ul>
        <li>Listen to your favorite music</li>
        <li>Call or text a friend</li>
        <li>Take a cold shower</li>
        <li>Do jumping jacks or push-ups</li>
        <li>Watch funny videos</li>
        <li>Draw or doodle</li>
        <li>Count backwards from 100</li>
      </ul>
    `
  };
  
  content.innerHTML = strategies[strategy] || '';
  content.classList.remove('hidden');
}

// Profile Section
function initializeProfile() {
  renderAchievements();
  initializeSettings();
}

function renderAchievements() {
  const achievementsList = document.getElementById('achievementsList');
  achievementsList.innerHTML = appData.achievements.map(achievement => {
    const isUnlocked = appState.userData.unlockedAchievements.includes(achievement.id);
    return `
      <div class="achievement ${isUnlocked ? 'unlocked' : ''}">
        <div class="achievement-badge">${achievement.badge}</div>
        <div class="achievement-info">
          <h4>${achievement.name}</h4>
          <p class="achievement-description">${achievement.description}</p>
        </div>
      </div>
    `;
  }).join('');
}

function initializeSettings() {
  const themeSelect = document.getElementById('themeSelect');
  const clearDataBtn = document.getElementById('clearDataBtn');
  
  // Load saved theme
  const savedTheme = localStorage.getItem('mindbridge_theme') || 'light';
  themeSelect.value = savedTheme;
  document.documentElement.setAttribute('data-color-scheme', savedTheme);
  
  themeSelect.addEventListener('change', (e) => {
    const theme = e.target.value;
    document.documentElement.setAttribute('data-color-scheme', theme);
    localStorage.setItem('mindbridge_theme', theme);
  });
  
  clearDataBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all your data? This cannot be undone.')) {
      localStorage.removeItem('mindbridge_data');
      location.reload();
    }
  });
}

// Utility Functions
function incrementToolUsage() {
  appState.userData.toolsUsed += 1;
  saveUserData();
  updateProgressStats();
  checkAchievements();
}

function checkAchievements() {
  const userData = appState.userData;
  const newAchievements = [];
  
  // First check-in
  if (userData.checkInStreak >= 1 && !userData.unlockedAchievements.includes('first_checkin')) {
    newAchievements.push('first_checkin');
  }
  
  // Week streak
  if (userData.checkInStreak >= 7 && !userData.unlockedAchievements.includes('week_streak')) {
    newAchievements.push('week_streak');
  }
  
  // Stress master
  if (userData.toolsUsed >= 10 && !userData.unlockedAchievements.includes('stress_master')) {
    newAchievements.push('stress_master');
  }
  
  // Journal writer
  if (userData.journalEntries.length >= 5 && !userData.unlockedAchievements.includes('journal_writer')) {
    newAchievements.push('journal_writer');
  }
  
  if (newAchievements.length > 0) {
    userData.unlockedAchievements.push(...newAchievements);
    saveUserData();
    updateProgressStats();
    
    newAchievements.forEach(achievementId => {
      const achievement = appData.achievements.find(a => a.id === achievementId);
      if (achievement) {
        setTimeout(() => {
          alert(`🎉 Achievement Unlocked!\n\n${achievement.badge} ${achievement.name}\n${achievement.description}`);
        }, 500);
      }
    });
  }
}

function updateProgressStats() {
  if (checkInStreak) checkInStreak.textContent = appState.userData.checkInStreak;
  if (toolsUsed) toolsUsed.textContent = appState.userData.toolsUsed;
  if (achievementCount) achievementCount.textContent = appState.userData.unlockedAchievements.length;
}
