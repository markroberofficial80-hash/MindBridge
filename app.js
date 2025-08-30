// Application Data and Intelligent Response System
const intelligentResponses = {
  exam_stress: {
    keywords: ["exam", "test", "studying", "study", "finals", "midterm", "tired from studying", "exam anxiety", "school stress", "academic pressure"],
    responses: [
      "Exam stress is so real! Are you getting enough breaks while studying? Try the Pomodoro technique - 25 minutes study, 5 minute break. What subject is giving you the most trouble?",
      "I totally get the exam exhaustion. Make sure you're eating regular meals and staying hydrated - your brain needs fuel! Are you getting enough sleep? Sleep is crucial for memory consolidation.",
      "Exams can be overwhelming. Have you tried active recall instead of just re-reading notes? Teaching someone else the material or doing practice questions often works better. What's your biggest concern about the upcoming exams?"
    ],
    followUp: ["What study methods have you tried so far?", "How many hours are you studying per day?", "Are you feeling prepared for any particular subject?"],
    resources: ["Study planning tools", "Exam anxiety techniques", "Time management strategies"]
  },
  anxiety: {
    keywords: ["anxious", "anxiety", "panic", "worried", "nervous", "overwhelmed", "scared", "freaking out", "stress", "stressed"],
    responses: [
      "Anxiety can feel so intense. What's triggering it right now? Let's try some grounding - can you name 5 things you can see around you? This helps bring you back to the present moment.",
      "That anxious feeling is really tough. Try box breathing with me: breathe in for 4, hold for 4, out for 4, hold for 4. Repeat this a few times. What situation is making you feel most anxious?",
      "I understand that overwhelming feeling. Anxiety often makes everything feel urgent, but you're safe right now. What's one small thing you can control in this moment?"
    ],
    followUp: ["What's your biggest worry right now?", "Have you tried any coping techniques before?", "Is this anxiety about something specific or more general?"],
    resources: ["Breathing exercises", "Grounding techniques", "Anxiety management tools"]
  },
  depression: {
    keywords: ["depressed", "sad", "hopeless", "empty", "down", "worthless", "can't get out of bed", "no motivation", "alone", "lonely"],
    responses: [
      "That heavy feeling is really hard to carry. You're not alone in this, even when it feels like you are. What's one tiny thing that brought you even a moment of comfort today?",
      "Depression can make everything feel impossible. You're brave for reaching out. Have you been able to do any small self-care things today, even just drinking water or stepping outside?",
      "I hear how much you're struggling. Sometimes when everything feels too big, focusing on just the next hour can help. What's one small thing you could do just for the next 60 minutes?"
    ],
    followUp: ["Have you been able to talk to anyone about how you're feeling?", "What usually helps you feel even slightly better?", "Are you getting professional support?"],
    resources: ["Depression support", "Self-care activities", "Professional help resources"]
  },
  sleep_issues: {
    keywords: ["can't sleep", "insomnia", "tired", "exhausted", "sleep problems", "staying up late", "no sleep", "can't fall asleep"],
    responses: [
      "Sleep issues are so frustrating and make everything harder. Are you having trouble falling asleep or staying asleep? Try putting devices away 1 hour before bed - the blue light really messes with melatonin.",
      "Sleep deprivation affects everything - mood, focus, immunity. What's your bedtime routine like? Sometimes creating a consistent wind-down ritual helps signal your brain it's time to rest.",
      "Being tired all the time is exhausting! Are you stressed about something that's keeping your mind racing? Progressive muscle relaxation or guided meditation before bed can really help."
    ],
    followUp: ["What time do you usually try to go to bed?", "What's keeping you awake - racing thoughts or physical restlessness?", "Have you tried any sleep hygiene techniques?"],
    resources: ["Sleep hygiene tips", "Bedtime relaxation exercises", "Sleep tracking tools"]
  },
  family_problems: {
    keywords: ["family", "parents", "mom", "dad", "home", "family stress", "fighting at home", "family issues", "parent problems"],
    responses: [
      "Family stress is really hard because home should feel safe. Are you able to find any quiet space for yourself when things get tense? Sometimes even 10 minutes in your room with headphones can help reset.",
      "Family conflicts can be emotionally draining. Remember that you can't control their behavior, only your response. Are there any family members you feel more comfortable talking to?",
      "Home stress affects everything else in your life. Is this ongoing tension or a specific issue? Sometimes writing down your feelings before family conversations can help you stay centered."
    ],
    followUp: ["Do you have a safe space to retreat to when things get difficult?", "Is there a trusted adult you can talk to about this?", "What kind of family stress are you dealing with?"],
    resources: ["Family communication strategies", "Boundary setting techniques", "Support resources"]
  },
  social_anxiety: {
    keywords: ["social anxiety", "talking to people", "making friends", "shy", "awkward", "social situations", "lonely", "friends"],
    responses: [
      "Social anxiety makes connecting with others feel so scary, but you're not alone in feeling this way. Start small - even just making eye contact and smiling at one person today is a win. What social situations feel most intimidating?",
      "The fear of judgment in social situations is really common among teens. Remember that most people are thinking about themselves, not judging you. Have you found any activities where you feel more comfortable being social?",
      "Being shy or having social anxiety doesn't mean there's anything wrong with you. Some of the most interesting people are quiet observers. What would help you feel more confident in social situations?"
    ],
    followUp: ["Are there particular social situations that feel hardest?", "Do you have any close friends you feel comfortable with?", "What would make social interactions feel less scary?"],
    resources: ["Social skills practice", "Confidence building exercises", "Social anxiety coping strategies"]
  },
  crisis: {
    keywords: ["want to die", "suicide", "kill myself", "self harm", "hurt myself", "end it all", "no point", "better off dead", "cutting", "self-harm"],
    responses: [
      "I'm really concerned about you right now. These feelings are a sign that you're in serious pain, not that anything is wrong with you as a person. You deserve support. Can you stay safe right now? Please text HOME to 741741 or call 988.",
      "Thank you for sharing something so difficult. You're incredibly brave for reaching out. These thoughts are symptoms of intense emotional pain, and that pain can be treated. Are you in immediate danger? Please contact Crisis Text Line at 741741.",
      "I'm so glad you're here and that you're talking about this. Having these thoughts means you need immediate professional support, not that you're broken. Please reach out to 988 (Suicide Prevention Lifeline) right now. Can you think of a trusted adult you could talk to?"
    ],
    followUp: ["Are you safe right now?", "Is there a trusted adult you can reach out to?", "Do you have a safety plan?"],
    resources: ["Crisis Text Line: 741741", "National Suicide Prevention Lifeline: 988", "Emergency contacts", "Safety planning"]
  }
};

const chatRooms = [
  {
    id: "academic_support",
    name: "Study Support Central",
    description: "Academic stress, study tips, exam anxiety",
    memberCount: 234,
    activeUsers: 28,
    supportTopics: ["exam stress", "study techniques", "academic anxiety", "time management", "procrastination"]
  },
  {
    id: "mental_wellness",
    name: "Wellness Warriors", 
    description: "Anxiety, depression, emotional support",
    memberCount: 189,
    activeUsers: 22,
    supportTopics: ["anxiety", "depression", "stress management", "coping strategies", "emotional support"]
  },
  {
    id: "social_connection",
    name: "Social Circle",
    description: "Friendship, social anxiety, relationship support",
    memberCount: 156,
    activeUsers: 19,
    supportTopics: ["social anxiety", "making friends", "relationship issues", "communication skills", "loneliness"]
  },
  {
    id: "family_support", 
    name: "Family Matters",
    description: "Family stress, communication, home life",
    memberCount: 143,
    activeUsers: 15,
    supportTopics: ["family conflicts", "communication", "boundaries", "home stress", "parent relationships"]
  }
];

const moodDimensions = [
  {"dimension": "Overall Mood", "emoji": "😊", "scale": [1,2,3,4,5], "labels": ["Terrible", "Poor", "Okay", "Good", "Great"]},
  {"dimension": "Energy Level", "emoji": "⚡", "scale": [1,2,3,4,5], "labels": ["Exhausted", "Low", "Moderate", "High", "Energetic"]},
  {"dimension": "Stress Level", "emoji": "😰", "scale": [1,2,3,4,5], "labels": ["Calm", "Slight", "Moderate", "High", "Overwhelming"]},
  {"dimension": "Social Connection", "emoji": "👥", "scale": [1,2,3,4,5], "labels": ["Isolated", "Lonely", "Neutral", "Connected", "Very Social"]}
];

const dailyTips = [
  "Remember: It's okay to not be okay. Your feelings are valid and you deserve support.",
  "Small steps count too. Even getting out of bed on a tough day is an achievement worth celebrating.",
  "You've survived 100% of your difficult days so far. That's a pretty good track record!",
  "Taking care of your mental health isn't selfish - it's necessary. You matter.",
  "Progress isn't always linear. Some days will be harder than others, and that's completely normal.",
  "Your worth isn't determined by your productivity. You're valuable just by being you.",
  "It's brave to ask for help. Reaching out shows strength, not weakness."
];

// Application State
let appState = {
  currentSection: 'home',
  currentChatRoom: null,
  chatHistory: [],
  conversationContext: [],
  userData: {
    chatInteractions: 0,
    moodCheckins: 0,  
    toolsUsed: 0,
    moodHistory: []
  },
  breathingSession: null,
  studyTimer: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  console.log('MindBridge initializing...');
  
  setTimeout(() => {
    try {
      initializeNavigation();
      initializeHome();
      initializeChat();
      initializeMoodTracker();
      initializeStressTools();
      initializeAcademic();
      initializeCrisis();
      updateProgressStats();
      console.log('MindBridge initialized successfully');
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }, 100);
});

// Navigation System
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav__item');
  const quickNavBtns = document.querySelectorAll('.quick-nav-btn');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      if (section) showSection(section);
    });
  });
  
  quickNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const section = btn.dataset.section;
      if (section) showSection(section);
    });
  });
}

function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update navigation highlighting
  document.querySelectorAll('.nav__item').forEach(item => {
    if (item.dataset.section === sectionName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  appState.currentSection = sectionName;
}

// Home Section
function initializeHome() {
  renderQuickMoodOptions();
  displayDailyTip();
  
  const submitBtn = document.getElementById('quickMoodSubmit');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleQuickMoodCheckin);
  }
}

function renderQuickMoodOptions() {
  const container = document.getElementById('quickMoodOptions');
  if (!container) return;
  
  const quickMoods = [
    {emoji: "😊", label: "Great", value: 5},
    {emoji: "🙂", label: "Good", value: 4}, 
    {emoji: "😐", label: "Okay", value: 3},
    {emoji: "🙁", label: "Rough", value: 2},
    {emoji: "😢", label: "Struggling", value: 1}
  ];
  
  container.innerHTML = quickMoods.map(mood => `
    <div class="mood-option" data-value="${mood.value}">
      <div class="mood-emoji">${mood.emoji}</div>
      <div class="mood-label">${mood.label}</div>
    </div>
  `).join('');
  
  container.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', () => {
      container.querySelectorAll('.mood-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      appState.selectedQuickMood = parseInt(option.dataset.value);
    });
  });
}

function handleQuickMoodCheckin() {
  if (!appState.selectedQuickMood) {
    alert('Please select your mood first!');
    return;
  }
  
  appState.userData.moodCheckins++;
  
  const responseDiv = document.getElementById('moodResponse');
  const moodValue = appState.selectedQuickMood;
  
  let response = '';
  if (moodValue >= 4) {
    response = "That's wonderful! It's great to hear you're doing well. Keep up whatever you're doing! 😊";
  } else if (moodValue === 3) {
    response = "Thanks for checking in. 'Okay' days are valid too. Is there anything specific on your mind?";
  } else {
    response = "Thanks for sharing that with me. Rough days are tough. Remember, you're not alone and it's okay to not be okay. Would you like to chat about what's going on?";
  }
  
  responseDiv.innerHTML = response;
  responseDiv.classList.remove('hidden');
  
  // Reset selection
  document.querySelectorAll('.mood-option').forEach(o => o.classList.remove('selected'));
  appState.selectedQuickMood = null;
  
  updateProgressStats();
  
  setTimeout(() => {
    responseDiv.classList.add('hidden');
  }, 5000);
}

function displayDailyTip() {
  const tipElement = document.getElementById('dailyTip');
  if (!tipElement) return;
  
  const today = new Date().getDate();
  const tip = dailyTips[today % dailyTips.length];
  tipElement.textContent = tip;
}

// Smart Chat System
function initializeChat() {
  renderChatRooms();
  
  const sendBtn = document.getElementById('sendMessage');
  const messageInput = document.getElementById('messageInput');
  const changeChatBtn = document.getElementById('changeChatRoom');
  const clearChatBtn = document.getElementById('clearChatHistory');
  
  if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
  }
  
  if (messageInput) {
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
  
  if (changeChatBtn) {
    changeChatBtn.addEventListener('click', leaveChatRoom);
  }
  
  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', clearChatHistory);
  }
}

function renderChatRooms() {
  const roomGrid = document.getElementById('roomGrid');
  if (!roomGrid) return;
  
  roomGrid.innerHTML = chatRooms.map(room => `
    <div class="chat-room-card" data-room-id="${room.id}">
      <div class="room-name">${room.name}</div>
      <div class="room-description">${room.description}</div>
      <div class="room-stats">
        <span>${room.memberCount} members</span>
        <span>${room.activeUsers} active now</span>
      </div>
    </div>
  `).join('');
  
  roomGrid.querySelectorAll('.chat-room-card').forEach(card => {
    card.addEventListener('click', () => {
      const roomId = card.dataset.roomId;
      joinChatRoom(roomId);
    });
  });
}

function joinChatRoom(roomId) {
  const room = chatRooms.find(r => r.id === roomId);
  if (!room) return;
  
  appState.currentChatRoom = room;
  
  const selector = document.getElementById('chatRoomSelector');  
  const activeChat = document.getElementById('activeChat');
  const chatTitle = document.getElementById('activeChatTitle');
  const chatDescription = document.getElementById('activeChatDescription');
  
  if (selector) selector.classList.add('hidden');
  if (activeChat) activeChat.classList.remove('hidden');
  if (chatTitle) chatTitle.textContent = room.name;
  if (chatDescription) chatDescription.textContent = room.description;
  
  // Clear previous messages except welcome
  const messagesContainer = document.getElementById('chatMessages');
  if (messagesContainer) {
    messagesContainer.innerHTML = `
      <div class="welcome-message">
        <div class="message-content">
          <strong>Welcome to ${room.name}!</strong> I'm here to listen and support you. Share what's on your mind - I'll do my best to understand and help. 💙
        </div>
      </div>
    `;
  }
  
  updateChatSuggestions(room);
}

function leaveChatRoom() {
  appState.currentChatRoom = null;
  
  const selector = document.getElementById('chatRoomSelector');
  const activeChat = document.getElementById('activeChat');
  
  if (selector) selector.classList.remove('hidden');
  if (activeChat) activeChat.classList.add('hidden');
}

function clearChatHistory() {
  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;
  
  messagesContainer.innerHTML = `
    <div class="welcome-message">
      <div class="message-content">
        <strong>Chat cleared!</strong> I'm still here to listen and support you. What's on your mind? 💙
      </div>
    </div>
  `;
  
  appState.chatHistory = [];
  appState.conversationContext = [];
}

function updateChatSuggestions(room) {
  const suggestionsContainer = document.getElementById('chatSuggestions');
  if (!suggestionsContainer) return;
  
  const suggestions = {
    academic_support: ["I'm stressed about exams", "I can't focus while studying", "I'm procrastinating"],
    mental_wellness: ["I'm feeling anxious", "I've been sad lately", "I'm overwhelmed"],
    social_connection: ["I feel lonely", "I'm shy around people", "I want to make friends"],
    family_support: ["My family is stressing me out", "I'm having problems at home", "My parents don't understand"]
  };
  
  const roomSuggestions = suggestions[room.id] || [];
  
  suggestionsContainer.innerHTML = roomSuggestions.map(suggestion => `
    <button class="suggestion-chip" onclick="useSuggestion('${suggestion}')">${suggestion}</button>
  `).join('');
}

function useSuggestion(suggestion) {
  const messageInput = document.getElementById('messageInput');
  if (messageInput) {
    messageInput.value = suggestion;
    messageInput.focus();
  }
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  if (!messageInput) return;
  
  const message = messageInput.value.trim();
  if (!message) return;
  
  // Add user message to chat
  addMessageToChat(message, 'user');
  
  // Clear input
  messageInput.value = '';
  
  // Update stats
  appState.userData.chatInteractions++;
  updateProgressStats();
  
  // Store in conversation context
  appState.conversationContext.push({role: 'user', content: message});
  
  // Generate intelligent response
  setTimeout(() => {
    const response = generateIntelligentResponse(message);
    addMessageToChat(response, 'ai');
    appState.conversationContext.push({role: 'ai', content: response});
  }, 1000);
}

function addMessageToChat(message, sender) {
  const messagesContainer = document.getElementById('chatMessages');
  if (!messagesContainer) return;
  
  const messageElement = document.createElement('div');
  messageElement.className = `chat-message ${sender}-message`;
  messageElement.innerHTML = `<div class="message-content">${message}</div>`;
  
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateIntelligentResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Crisis detection (highest priority)
  const crisisDetected = intelligentResponses.crisis.keywords.some(keyword => 
    message.includes(keyword.toLowerCase())
  );
  
  if (crisisDetected) {
    const responses = intelligentResponses.crisis.responses;
    const response = responses[Math.floor(Math.random() * responses.length)];
    return `🚨 **CRISIS SUPPORT NEEDED** 🚨\n\n${response}\n\n**Please reach out immediately:**\n• Crisis Text Line: Text HOME to 741741\n• National Suicide Prevention Lifeline: Call/text 988\n• If in immediate danger: Call 911`;
  }
  
  // Check each category for keywords
  for (const [category, data] of Object.entries(intelligentResponses)) {
    if (category === 'crisis') continue; // Already handled above
    
    const keywordMatches = data.keywords.filter(keyword => 
      message.includes(keyword.toLowerCase())
    );
    
    if (keywordMatches.length > 0) {
      const response = data.responses[Math.floor(Math.random() * data.responses.length)];
      const followUp = data.followUp[Math.floor(Math.random() * data.followUp.length)];
      
      return `${response}\n\n${followUp}`;
    }
  }
  
  // General supportive responses for unmatched messages
  const generalResponses = [
    "Thanks for sharing that with me. Can you tell me more about what's going on?",
    "I hear you. It sounds like you're going through something difficult. What's been the hardest part?",
    "That sounds really challenging. How are you feeling about everything right now?",
    "I appreciate you opening up. What kind of support would be most helpful for you?",
    "It takes courage to talk about what's bothering you. What's been on your mind lately?",
    "I'm here to listen. Can you help me understand what you're experiencing?"
  ];
  
  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
}

// Mood Tracker Section
function initializeMoodTracker() {
  renderDetailedMoodTracker();
  
  const submitBtn = document.getElementById('submitDetailedMood');
  if (submitBtn) {
    submitBtn.addEventListener('click', saveDetailedMoodData);
  }
  
  loadMoodHistory();
}

function renderDetailedMoodTracker() {
  const container = document.getElementById('detailedMoodTracker');
  if (!container) return;
  
  container.innerHTML = moodDimensions.map((dimension, index) => `
    <div class="mood-dimension">
      <div class="dimension-label">
        <span class="dimension-emoji">${dimension.emoji}</span>
        <span>${dimension.dimension}</span>
      </div>
      <div class="mood-scale">
        <input type="range" min="1" max="5" value="3" 
               id="mood-${index}" class="mood-slider">
      </div>
      <div class="scale-labels">
        <span>${dimension.labels[0]}</span>
        <span>${dimension.labels[4]}</span>
      </div>
    </div>
  `).join('');
}

function saveDetailedMoodData() {
  const moodData = {};
  const currentDate = new Date().toLocaleDateString();
  
  moodDimensions.forEach((dimension, index) => {
    const slider = document.getElementById(`mood-${index}`);
    if (slider) {
      moodData[dimension.dimension] = parseInt(slider.value);
    }
  });
  
  const moodEntry = {
    date: currentDate,
    timestamp: Date.now(),
    data: moodData
  };
  
  appState.userData.moodHistory.push(moodEntry);
  appState.userData.moodCheckins++;
  
  updateProgressStats();
  loadMoodHistory();
  
  alert('Mood data saved! Keep tracking to see patterns over time. 📊');
}

function loadMoodHistory() {
  const historyContainer = document.getElementById('moodHistory');
  if (!historyContainer) return;
  
  const recentEntries = appState.userData.moodHistory.slice(-5).reverse();
  
  if (recentEntries.length === 0) {
    historyContainer.innerHTML = '<p class="no-data">Start tracking your mood to see patterns and insights here!</p>';
    return;
  }
  
  historyContainer.innerHTML = recentEntries.map(entry => `
    <div class="mood-entry">
      <div class="mood-date">${entry.date}</div>
      <div class="mood-data">
        ${Object.entries(entry.data).map(([dimension, value]) => `
          <div class="mood-data-item">
            <span>${dimension}:</span>
            <span>${value}/5</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// Stress Management Tools
function initializeStressTools() {
  initializeBreathingExercises();
  initializeCopingStrategies();
}

function initializeBreathingExercises() {
  document.querySelectorAll('[data-exercise]').forEach(btn => {
    btn.addEventListener('click', () => {
      const exercise = btn.dataset.exercise;
      startBreathingExercise(exercise);
    });
  });
  
  const startBtn = document.getElementById('startBreathing');
  const stopBtn = document.getElementById('stopBreathing');
  
  if (startBtn) startBtn.addEventListener('click', beginBreathingSession);
  if (stopBtn) stopBtn.addEventListener('click', stopBreathingSession);
}

function startBreathingExercise(exerciseType) {
  const exercises = {
    box: {name: "Box Breathing", pattern: [4, 4, 4, 4], instructions: ["Inhale (4s)", "Hold (4s)", "Exhale (4s)", "Hold (4s)"]},
    calm: {name: "4-7-8 Calming", pattern: [4, 7, 8, 0], instructions: ["Inhale (4s)", "Hold (7s)", "Exhale (8s)", "Rest"]},
    energy: {name: "Energizing Breath", pattern: [3, 1, 3, 1], instructions: ["Quick inhale (3s)", "Brief hold (1s)", "Quick exhale (3s)", "Brief pause (1s)"]}
  };
  
  appState.currentBreathingExercise = exercises[exerciseType];
  
  const exerciseDiv = document.getElementById('breathingExercise');
  const breathingText = document.getElementById('breathingText');
  
  if (exerciseDiv) exerciseDiv.classList.remove('hidden');
  if (breathingText) breathingText.textContent = `Ready for ${appState.currentBreathingExercise.name}`;
}

function beginBreathingSession() {
  if (!appState.currentBreathingExercise) return;
  
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText'); 
  const progress = document.getElementById('breathingProgress');
  const status = document.getElementById('breathingStatus');
  const startBtn = document.getElementById('startBreathing');
  const stopBtn = document.getElementById('stopBreathing');
  
  if (startBtn) startBtn.disabled = true;
  if (stopBtn) stopBtn.disabled = false;
  
  let cycle = 0;
  let phase = 0;
  const maxCycles = 6;
  const {pattern, instructions} = appState.currentBreathingExercise;
  
  function breathingCycle() {
    if (!appState.breathingSession) return;
    
    if (text) text.textContent = instructions[phase];
    if (status) status.textContent = `Cycle ${cycle + 1} of ${maxCycles}`;
    if (progress) progress.style.width = `${((cycle * 4 + phase) / (maxCycles * 4)) * 100}%`;
    
    // Visual breathing guidance
    if (circle) {
      circle.classList.remove('inhale', 'exhale');
      if (phase === 0) circle.classList.add('inhale');
      if (phase === 2) circle.classList.add('exhale');
    }
    
    const duration = pattern[phase] * 1000;
    
    appState.breathingSession = setTimeout(() => {
      phase = (phase + 1) % 4;
      if (phase === 0) {
        cycle++;
        if (cycle >= maxCycles) {
          completeBreathingSession();
          return;
        }
      }
      breathingCycle();
    }, duration);
  }
  
  appState.breathingSession = true;
  appState.userData.toolsUsed++;
  updateProgressStats();
  breathingCycle();
}

function stopBreathingSession() {
  if (appState.breathingSession) {
    clearTimeout(appState.breathingSession);
    appState.breathingSession = null;
  }
  
  const circle = document.getElementById('breathingCircle');
  const text = document.getElementById('breathingText');
  const startBtn = document.getElementById('startBreathing');
  const stopBtn = document.getElementById('stopBreathing');
  const progress = document.getElementById('breathingProgress');
  const status = document.getElementById('breathingStatus');
  
  if (circle) circle.classList.remove('inhale', 'exhale');
  if (text) text.textContent = 'Session stopped';
  if (startBtn) startBtn.disabled = false;
  if (stopBtn) stopBtn.disabled = true;
  if (progress) progress.style.width = '0%';
  if (status) status.textContent = 'Ready to begin';
}

function completeBreathingSession() {
  stopBreathingSession();
  const text = document.getElementById('breathingText');
  if (text) text.textContent = 'Great job! 🌟';
  
  setTimeout(() => {
    alert('Breathing session complete! How do you feel now? 🧘‍♀️');
  }, 1000);
}

function initializeCopingStrategies() {
  document.querySelectorAll('[data-strategy]').forEach(card => {
    card.addEventListener('click', () => {
      const strategy = card.dataset.strategy;
      showCopingStrategy(strategy);
    });
  });
}

function showCopingStrategy(strategy) {
  const instructionsDiv = document.getElementById('copingInstructions');
  if (!instructionsDiv) return;
  
  const strategies = {
    grounding: {
      title: "5-4-3-2-1 Grounding Technique",
      content: `
        <p>This technique helps bring you back to the present moment when you're feeling overwhelmed or anxious.</p>
        <ol>
          <li><strong>5 things you can SEE</strong> - Look around and name 5 things you can see</li>
          <li><strong>4 things you can TOUCH</strong> - Notice 4 things you can feel (your clothes, a table, etc.)</li>
          <li><strong>3 things you can HEAR</strong> - Listen for 3 different sounds around you</li>
          <li><strong>2 things you can SMELL</strong> - Identify 2 scents in your environment</li>
          <li><strong>1 thing you can TASTE</strong> - Notice any taste in your mouth</li>
        </ol>
        <p>Take your time with each step. This helps ground you in the present moment.</p>
      `
    },
    progressive: {
      title: "Progressive Muscle Relaxation",
      content: `
        <p>This technique helps release physical tension that builds up from stress.</p>
        <ol>
          <li><strong>Start with your toes</strong> - Tense them for 5 seconds, then relax</li>
          <li><strong>Move to your calves</strong> - Tense and relax</li>
          <li><strong>Thigh muscles</strong> - Tense and relax</li>
          <li><strong>Stomach muscles</strong> - Tense and relax</li>
          <li><strong>Hands and arms</strong> - Make fists, tense arms, then relax</li>
          <li><strong>Shoulders</strong> - Raise them to your ears, then drop</li>
          <li><strong>Face muscles</strong> - Scrunch face, then relax</li>
        </ol>
        <p>Notice the difference between tension and relaxation in each muscle group.</p>
      `
    },
    mindful: {
      title: "Mindful Observation",
      content: `
        <p>This helps you focus your mind and reduce racing thoughts.</p>
        <ol>
          <li><strong>Choose an object</strong> - Pick something nearby (a pen, plant, etc.)</li>
          <li><strong>Observe without judgment</strong> - Look at it as if seeing it for the first time</li>
          <li><strong>Notice details</strong> - Color, texture, shape, size</li>
          <li><strong>Use all senses</strong> - How does it feel? Smell? Sound if you tap it?</li>
          <li><strong>Stay curious</strong> - Keep exploring with genuine interest</li>
        </ol>
        <p>Spend 3-5 minutes fully focused on this one object. This trains your mind to focus on the present.</p>
      `
    }
  };
  
  const strategyData = strategies[strategy];
  if (strategyData) {
    instructionsDiv.innerHTML = `
      <h4>${strategyData.title}</h4>
      ${strategyData.content}
    `;
    instructionsDiv.classList.remove('hidden');
    appState.userData.toolsUsed++;
    updateProgressStats();
  }
}

// Academic Support
function initializeAcademic() {
  const stressSlider = document.getElementById('academicStressLevel');
  const startStudyBtn = document.getElementById('startStudySession');
  const pauseBtn = document.getElementById('pauseTimer');
  const resetBtn = document.getElementById('resetTimer');
  
  if (stressSlider) {
    stressSlider.addEventListener('input', updateStressAdvice);
    updateStressAdvice(); // Initialize
  }
  
  if (startStudyBtn) startStudyBtn.addEventListener('click', startStudySession);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseStudyTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetStudyTimer);
}

function updateStressAdvice() {
  const slider = document.getElementById('academicStressLevel');
  const adviceDiv = document.getElementById('stressAdvice');
  
  if (!slider || !adviceDiv) return;
  
  const level = parseInt(slider.value);
  
  const advice = {
    1: "Great! You're managing well. Keep up whatever you're doing! 😊",
    2: "Nice and calm. Consider maintaining your current routine.",
    3: "Moderate stress is normal. Try taking short breaks between study sessions.",
    4: "Getting stressed. Practice deep breathing and break tasks into smaller parts.",
    5: "Noticeable stress. Try the Pomodoro technique (25min study, 5min break).",
    6: "Elevated stress. Take a longer break and do something you enjoy.",
    7: "High stress. Talk to someone you trust and consider reducing your workload.",
    8: "Very stressed. Focus on immediate stress relief and seek support.",
    9: "Extremely stressed. Please reach out for help and take care of yourself first.",
    10: "Crisis level stress. Your wellbeing comes first - seek immediate support! 🆘"
  };
  
  adviceDiv.textContent = advice[level];
  adviceDiv.classList.remove('hidden');
}

function startStudySession() {
  const taskInput = document.getElementById('studyTask');
  const durationSelect = document.getElementById('studyDuration');
  
  if (!taskInput || !durationSelect) return;
  
  const task = taskInput.value.trim();
  const duration = parseInt(durationSelect.value);
  
  if (!task) {
    alert('Please enter what you want to study!');
    return;
  }
  
  const timerDiv = document.getElementById('studyTimer');
  const currentTaskDiv = document.getElementById('currentTask');
  const clockDiv = document.getElementById('timerClock');
  
  if (timerDiv) timerDiv.classList.remove('hidden');
  if (currentTaskDiv) currentTaskDiv.textContent = `Studying: ${task}`;
  
  let timeLeft = duration * 60;
  
  function updateClock() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    if (clockDiv) {
      clockDiv.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    if (timeLeft <= 0) {
      clearInterval(appState.studyTimer);
      appState.studyTimer = null;
      alert(`Study session complete! Great job studying ${task}! 🎉\n\nTime for a well-deserved break!`);
      if (timerDiv) timerDiv.classList.add('hidden');
      appState.userData.toolsUsed++;
      updateProgressStats();
      return;
    }
    
    timeLeft--;
  }
  
  updateClock();
  appState.studyTimer = setInterval(updateClock, 1000);
}

function pauseStudyTimer() {
  const pauseBtn = document.getElementById('pauseTimer');
  
  if (appState.studyTimer) {
    clearInterval(appState.studyTimer);
    appState.studyTimer = null;
    if (pauseBtn) {
      pauseBtn.textContent = 'Resume';
      pauseBtn.onclick = resumeStudyTimer;
    }
  }
}

function resumeStudyTimer() {
  const clockDiv = document.getElementById('timerClock');
  const pauseBtn = document.getElementById('pauseTimer');
  
  if (!clockDiv) return;
  
  const timeText = clockDiv.textContent;
  const [mins, secs] = timeText.split(':').map(Number);
  let timeLeft = mins * 60 + secs;
  
  function updateClock() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    clockDiv.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
      clearInterval(appState.studyTimer);
      appState.studyTimer = null;
      alert('Study session complete! Great job! 🎉');
      const timerDiv = document.getElementById('studyTimer');
      if (timerDiv) timerDiv.classList.add('hidden');
      return;
    }
    
    timeLeft--;
  }
  
  appState.studyTimer = setInterval(updateClock, 1000);
  
  if (pauseBtn) {
    pauseBtn.textContent = 'Pause';
    pauseBtn.onclick = pauseStudyTimer;
  }
}

function resetStudyTimer() {
  if (appState.studyTimer) {
    clearInterval(appState.studyTimer);
    appState.studyTimer = null;
  }
  
  const timerDiv = document.getElementById('studyTimer');
  const pauseBtn = document.getElementById('pauseTimer');
  
  if (timerDiv) timerDiv.classList.add('hidden');
  if (pauseBtn) {
    pauseBtn.textContent = 'Pause';
    pauseBtn.onclick = pauseStudyTimer;
  }
}

// Crisis Support
function initializeCrisis() {
  document.querySelectorAll('.crisis-strategy').forEach(btn => {
    btn.addEventListener('click', () => {
      const strategy = btn.dataset.strategy;
      showCrisisStrategy(strategy);
    });
  });
}

function showCrisisStrategy(strategy) {
  const instructionsDiv = document.getElementById('crisisInstructions');
  if (!instructionsDiv) return;
  
  const strategies = {
    'emergency-breathing': {
      title: "Emergency Breathing Exercise",
      content: `
        <p><strong>This can help when you're in crisis or having a panic attack:</strong></p>
        <ol>
          <li><strong>Breathe in slowly through your nose for 4 counts</strong></li>
          <li><strong>Hold your breath for 4 counts</strong></li>
          <li><strong>Breathe out slowly through your mouth for 6 counts</strong></li>
          <li><strong>Repeat 10 times or until you feel calmer</strong></li>
        </ol>
        <p><strong>Focus only on counting and breathing. You are safe right now.</strong></p>
        <p style="color: var(--color-error); font-weight: bold;">If you're still in crisis after this exercise, please reach out for help immediately.</p>
      `
    },
    'grounding-crisis': {
      title: "Crisis Grounding Technique",
      content: `
        <p><strong>When everything feels overwhelming, this can help bring you back:</strong></p>
        <ol>
          <li><strong>Plant your feet firmly on the ground</strong></li>
          <li><strong>Name 3 things you can see right now</strong></li>
          <li><strong>Name 2 things you can hear</strong></li>
          <li><strong>Name 1 thing you can touch</strong></li>
          <li><strong>Take 5 deep breaths</strong></li>
          <li><strong>Remind yourself: "I am here, I am safe, this feeling will pass"</strong></li>
        </ol>
        <p><strong>You've gotten through difficult times before. You can get through this too.</strong></p>
      `
    },
    'safety-plan': {
      title: "Safety Planning",
      content: `
        <p><strong>Creating a safety plan can help during crisis moments:</strong></p>
        <ol>
          <li><strong>Identify your warning signs</strong> - What thoughts/feelings come before crisis?</li>
          <li><strong>List coping strategies</strong> - What has helped you before?</li>
          <li><strong>Identify support people</strong> - Who can you call?</li>
          <li><strong>Remove means of harm</strong> - Put away anything dangerous</li>
          <li><strong>Create your environment safe</strong> - Go to a safe space</li>
          <li><strong>Know your emergency contacts</strong> - 988, 741741, trusted adults</li>
        </ol>
        <p style="color: var(--color-error); font-weight: bold;">If you're having thoughts of self-harm right now, please reach out for help immediately.</p>
      `
    }
  };
  
  const strategyData = strategies[strategy];
  if (strategyData) {
    instructionsDiv.innerHTML = `
      <h4>${strategyData.title}</h4>
      ${strategyData.content}
      <div style="margin-top: 20px; padding: 16px; background: var(--color-bg-4); border-radius: 8px; border-left: 4px solid var(--color-error);">
        <strong>Crisis Resources:</strong><br>
        • Crisis Text Line: Text HOME to 741741<br>
        • National Suicide Prevention Lifeline: Call/text 988<br>
        • Emergency: Call 911
      </div>
    `;
    instructionsDiv.classList.remove('hidden');
  }
}

// Utility Functions
function updateProgressStats() {
  const chatElement = document.getElementById('chatInteractions');
  const moodElement = document.getElementById('moodCheckins');
  const toolsElement = document.getElementById('toolsUsed');
  
  if (chatElement) chatElement.textContent = appState.userData.chatInteractions;
  if (moodElement) moodElement.textContent = appState.userData.moodCheckins;
  if (toolsElement) toolsElement.textContent = appState.userData.toolsUsed;
}

// Make functions global for onclick handlers
window.useSuggestion = useSuggestion;
