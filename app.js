/* ========================================
   晴蓝成长工作台 — 核心逻辑
   ======================================== */

// ===== 存储键 =====
const STORAGE_KEY = 'qinglan_workbench_v1';

// ===== 图标库（可爱治愈风 SVG）=====
const ICONS = {
  home: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 3 L20 10 L20 20 Q20 20.5 19.5 20.5 L14.5 20.5 L14.5 15 Q14.5 14 13.5 14 L10.5 14 Q9.5 14 9.5 15 L9.5 20.5 L4.5 20.5 Q4 20.5 4 20 L4 10 Z" fill="currentColor" opacity="0.9"/><path d="M10 12 Q12 10 14 12" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg>',
  mood: '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.9"/><circle cx="9" cy="10.5" r="1.3" fill="#fff"/><circle cx="15" cy="10.5" r="1.3" fill="#fff"/><path d="M9 14 Q12 16.5 15 14" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>',
  exercise: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="2" y="9" width="3" height="6" rx="1" fill="currentColor"/><rect x="19" y="9" width="3" height="6" rx="1" fill="currentColor"/><rect x="5" y="10.5" width="14" height="3" rx="1" fill="currentColor" opacity="0.6"/></svg>',
  reading: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 5 Q8 3 4 4 L4 18 Q8 17 12 19 Q16 17 20 18 L20 4 Q16 3 12 5 Z" fill="currentColor" opacity="0.9"/><path d="M12 5 L12 19" stroke="#fff" stroke-width="1"/></svg>',
  meditation: '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.9"/><path d="M7 20 Q7 14 12 14 Q17 14 17 20 Z" fill="currentColor" opacity="0.9"/><path d="M6 12 Q4 10 6 8 M18 12 Q20 10 18 8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/></svg>',
  diet: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 4 Q8 4 7 8 Q6 14 12 20 Q18 14 17 8 Q16 4 12 4 Z" fill="currentColor" opacity="0.9"/><path d="M12 4 Q12 3 13 2.5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M9 9 Q10 7 12 7" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity="0.6"/></svg>',
  skill: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 3 L14 9 L20 9 L15 13 L17 19 L12 15 L7 19 L9 13 L4 9 L10 9 Z" fill="currentColor" opacity="0.9"/></svg>',
  sleep: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M15 3 Q10 3 8 8 Q12 9 12 13 Q12 16 10 19 Q12 21 15 21 Q20 21 20 15 Q20 8 15 3 Z" fill="currentColor" opacity="0.9"/><circle cx="5" cy="6" r="0.8" fill="currentColor"/><circle cx="6" cy="11" r="0.6" fill="currentColor"/><circle cx="4" cy="14" r="0.5" fill="currentColor"/></svg>',
  inspiration: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 3 Q8 3 8 7 Q8 9 10 10.5 L10 13 Q10 14 11 14 L13 14 Q14 14 14 13 L14 10.5 Q16 9 16 7 Q16 3 12 3 Z" fill="currentColor" opacity="0.9"/><rect x="10.5" y="15.5" width="3" height="2" rx="1" fill="currentColor" opacity="0.7"/><rect x="11" y="18.5" width="2" height="1.5" rx="0.7" fill="currentColor" opacity="0.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7 L12 12 L15.5 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 12 Q9 16 12 18 Q16 13 19 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fire: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 2 C13 6 16 7 16 12 C16 15 14 17 12 17 C10 17 8 15 8 12 C8 9 10 8 10 5 Z" fill="currentColor"/></svg>',
  trash: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M6 7 L6 19 Q6 20 7 20 L17 20 Q18 20 18 19 L18 7 Z M9 10 L9 17 M12 10 L12 17 M15 10 L15 17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M4 7 L20 7 M9 7 L9 4 L15 4 L15 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M4 12 Q4 6 10 5 M10 5 L8 3 M10 5 L8 7 M20 12 Q20 18 14 19 M14 19 L16 17 M14 19 L16 21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  textAnalysis: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="4" y="5" width="10" height="13" rx="1.5" fill="currentColor" opacity="0.45"/><rect x="7" y="6" width="10" height="13" rx="1.5" fill="currentColor" opacity="0.85"/><circle cx="16" cy="14" r="4" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M19 17 L22 20" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
  dailyTasks: '<svg viewBox="0 0 24 24" width="22" height="22"><rect x="4" y="3" width="16" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="7" y="7" width="10" height="2" rx="1" fill="currentColor" opacity="0.7"/><rect x="7" y="12" width="10" height="2" rx="1" fill="currentColor" opacity="0.5"/><rect x="7" y="17" width="6" height="2" rx="1" fill="currentColor" opacity="0.3"/><path d="M16 17 L19 18 L21 15" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

// ===== 菜单定义 =====
const MENUS = [
  { id: 'home', label: '桌面首页', icon: ICONS.home, color: '#A78BFA' },
  { id: 'mood', label: '心情日记', icon: ICONS.mood, color: '#F8A5C2' },
  { id: 'dailyTasks', label: '每日必做', icon: ICONS.dailyTasks, color: '#FF8A65' },
  { id: 'textAnalysis', label: '拆文', icon: ICONS.textAnalysis, color: '#4DD0E1' },
  { id: 'meditation', label: '冥想放松', icon: ICONS.meditation, color: '#C39BD3' },
  { id: 'sleep', label: '睡眠管理', icon: ICONS.sleep, color: '#5D6D7E' },
  { id: 'exercise', label: '运动打卡', icon: ICONS.exercise, color: '#F5B041' },
  { id: 'diet', label: '饮食记录', icon: ICONS.diet, color: '#82E0AA' },
  { id: 'skill', label: '技能学习', icon: ICONS.skill, color: '#F1C40F' },
  { id: 'inspiration', label: '灵感收集', icon: ICONS.inspiration, color: '#A569BD' },
  { id: 'reading', label: '阅读时光', icon: ICONS.reading, color: '#A78BFA' },
];

// ===== 每日热点新闻 =====
const NEWS_API = 'https://api.mxin.moe/api/v1/hot?source=baidu';
const NEWS_CACHE_KEY = 'qinglan_workbench_news';
const WEIBO_API = 'https://api.mxin.moe/api/v1/hot?source=weibo';
const WEIBO_CACHE_KEY = 'qinglan_workbench_weibo';
let cachedNewsList = null; // 百度全局缓存
let cachedWeiboList = null; // 微博全局缓存

function getCachedNews() {
  if (cachedNewsList) return cachedNewsList;
  try {
    const raw = localStorage.getItem(NEWS_CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.date === todayStr()) {
      cachedNewsList = data.items;
      return data.items;
    }
  } catch(e) {}
  return null;
}

async function fetchNews() {
  const cached = getCachedNews();
  if (cached) {
    // 已缓存，后台刷新
    refreshNewsInBg();
    return cached;
  }
  return await refreshNewsInBg(true);
}

async function refreshNewsInBg(forceReturn) {
  try {
    const resp = await fetch(NEWS_API);
    const json = await resp.json();
    if (json.code === 0 && json.data && json.data.list) {
      const items = json.data.list.slice(0, 10).map(item => ({
        rank: item.rank,
        title: item.title,
        hot: item.hot,
        desc: item.desc || '',
        url: item.url || '',
      }));
      cachedNewsList = items;
      localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({ date: todayStr(), items }));
      return items;
    }
  } catch(e) {
    console.log('新闻加载失败:', e);
  }
  return forceReturn ? [] : null;
}

function renderNewsCard(baiduItems, weiboItems) {
  const baiduList = (baiduItems || []).slice(0, 8);
  const weiboList = (weiboItems || []).slice(0, 8);
  const hasBaidu = baiduList.length > 0;
  const hasWeibo = weiboList.length > 0;

  const renderNewsList = (items) => items.map(item => `
    <a class="news-item" href="${item.url}" target="_blank" title="${item.desc || item.title}">
      <span class="news-rank ${item.rank <= 3 ? 'top' : ''}">${item.rank}</span>
      <span class="news-text">${item.title}</span>
      <span class="news-hot">${formatHotNum(item.hot)}</span>
    </a>
  `).join('');

  // 如果两边都没数据，显示加载中
  if (!hasBaidu && !hasWeibo) {
    return `
      <div class="home-card news-card">
        <div class="news-header">
          <div class="news-title">📰 今日热点</div>
          <span class="news-time">加载中...</span>
        </div>
        <div class="news-loading">
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
          <div class="news-skeleton" style="width:65%"></div>
          <div class="news-skeleton" style="width:80%"></div>
        </div>
      </div>`;
  }

  return `
    <div class="home-card news-card">
      <div class="news-header">
        <div class="news-tabs">
          ${hasBaidu ? '<button class="news-tab active" data-source="baidu">🔥 百度热搜</button>' : ''}
          ${hasWeibo ? '<button class="news-tab' + (!hasBaidu && hasWeibo ? ' active' : '') + '" data-source="weibo">🔥 微博实时</button>' : ''}
        </div>
        <button class="quote-refresh" id="newsRefresh" title="刷新">${ICONS.refresh}</button>
      </div>
      <div class="news-panels">
        ${hasBaidu ? `
        <div class="news-panel active" data-source="baidu">
          <div class="news-list">${renderNewsList(baiduList)}</div>
        </div>` : ''}
        ${hasWeibo ? `
        <div class="news-panel${!hasBaidu && hasWeibo ? ' active' : ''}" data-source="weibo">
          <div class="news-list">${renderNewsList(weiboList)}</div>
        </div>` : ''}
      </div>
    </div>`;
}

function formatHotNum(num) {
  if (!num) return '';
  if (num >= 10000) return (num / 10000).toFixed(1) + '万';
  return String(num);
}

// ===== 天气 =====
const WEATHER_CACHE_KEY = 'qinglan_workbench_weather';
let cachedWeatherData = null;

const WEATHER_ICONS = {
  0: '☀️',        // 晴天
  1: '🌤️', 2: '⛅', 3: '☁️',  // 少云/多云/阴
  45: '🌫️', 48: '🌫️',         // 雾
  51: '🌧️', 53: '🌧️', 55: '🌧️',  // 小雨
  61: '🌧️', 63: '🌧️', 65: '🌧️',  // 雨
  66: '🌨️', 67: '🌨️',           // 冻雨
  71: '🌨️', 73: '🌨️', 75: '🌨️',  // 雪
  77: '🌨️',                      // 雪粒
  80: '🌦️', 81: '🌦️', 82: '🌦️',  // 阵雨
  85: '🌨️', 86: '🌨️',           // 阵雪
  95: '⛈️', 96: '⛈️', 99: '⛈️',  // 雷暴
};

function getWeatherEmoji(code) {
  return WEATHER_ICONS[code] || '🌤️';
}

function getCachedWeather() {
  if (cachedWeatherData) return cachedWeatherData;
  try {
    const raw = localStorage.getItem(WEATHER_CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // 缓存 30 分钟有效
    if (Date.now() - data.ts < 30 * 60 * 1000) {
      cachedWeatherData = data;
      return data;
    }
  } catch(e) {}
  return null;
}

function cacheWeather(temp, code, city) {
  const data = { temp, code, city, ts: Date.now() };
  cachedWeatherData = data;
  localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(data));
}

async function fetchWeather() {
  // 先看缓存
  const cached = getCachedWeather();
  if (cached) return cached;

  let lat, lon;

  // 方式1：浏览器 GPS 定位（精确）
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000, maximumAge: 600000 });
    });
    lat = position.coords.latitude;
    lon = position.coords.longitude;
  } catch(e) {
    // 方式2：IP 定位兜底（无需权限）
    try {
      const ipResp = await fetch('https://ipapi.co/json/');
      const ipData = await ipResp.json();
      if (ipData && ipData.latitude && ipData.longitude) {
        lat = ipData.latitude;
        lon = ipData.longitude;
      }
    } catch(e2) {
      console.log('天气定位失败:', e, e2);
      return null;
    }
  }

  if (!lat || !lon) return null;

  try {
    const [weatherResp, cityName] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(2)}&longitude=${lon.toFixed(2)}&current_weather=true`).then(r => r.json()),
      reverseGeocodeCity(lat, lon)
    ]);

    const cw = weatherResp.current_weather;
    if (cw) {
      cacheWeather(Math.round(cw.temperature), cw.weathercode, cityName);
      return { temp: Math.round(cw.temperature), code: cw.weathercode, city: cityName };
    }
  } catch(e) {
    console.log('天气API失败:', e);
  }
  return null;
}

async function reverseGeocodeCity(lat, lon) {
  try {
    const resp = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&format=json&accept-language=zh&zoom=10`
    );
    const data = await resp.json();
    if (data && data.address) {
      return data.address.city || data.address.town || data.address.county || data.address.village || '';
    }
  } catch(e) {}
  return '';
}

async function loadWeatherDisplay() {
  const el = document.getElementById('weatherInfo');
  if (!el) return;
  el.style.display = 'flex';
  el.innerHTML = '<span style="opacity:0.5;font-size:0.8rem">⏳</span>';
  const data = await fetchWeather();
  if (data) {
    const cityStr = data.city || '';
    el.innerHTML = `<span class="weather-city">${cityStr}</span><span class="weather-temp">${getWeatherEmoji(data.code)} ${data.temp}°C</span>`;
  } else {
    el.innerHTML = '<span class="weather-temp" style="opacity:0.5">定位中...</span>';
  }
}

// ===== 微博热搜 =====
function getCachedWeiboNews() {
  if (cachedWeiboList) return cachedWeiboList;
  try {
    const raw = localStorage.getItem(WEIBO_CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.date === todayStr()) {
      cachedWeiboList = data.items;
      return data.items;
    }
  } catch(e) {}
  return null;
}

async function fetchWeiboNews() {
  const cached = getCachedWeiboNews();
  if (cached) {
    refreshWeiboInBg();
    return cached;
  }
  return await refreshWeiboInBg(true);
}

async function refreshWeiboInBg(forceReturn) {
  try {
    const resp = await fetch(WEIBO_API);
    const json = await resp.json();
    if (json.code === 0 && json.data && json.data.list) {
      const items = json.data.list.slice(0, 10).map(item => ({
        rank: item.rank,
        title: item.title,
        hot: item.hot,
        desc: item.desc || '',
        url: item.url || '',
      }));
      cachedWeiboList = items;
      localStorage.setItem(WEIBO_CACHE_KEY, JSON.stringify({ date: todayStr(), items }));
      return items;
    }
  } catch(e) {
    console.log('微博热搜加载失败:', e);
  }
  return forceReturn ? [] : null;
}

// ===== 心情选项 =====
const MOODS = [
  { emoji: '😄', label: '开心', value: 5 },
  { emoji: '🙂', label: '平静', value: 4 },
  { emoji: '😐', label: '一般', value: 3 },
  { emoji: '😔', label: '低落', value: 2 },
  { emoji: '😣', label: '烦躁', value: 1 },
];

// ===== 运动类型 =====
const EXERCISE_TYPES = ['跑步', '瑜伽', '游泳', '骑行', '散步', '力量训练', '跳绳', '羽毛球', '健身操', '其他'];

// ===== 饮食餐次 =====
const MEAL_TYPES = [
  { label: '早餐', icon: '🌅' },
  { label: '午餐', icon: '☀️' },
  { label: '晚餐', icon: '🌙' },
  { label: '加餐', icon: '🍎' },
];

// ===== 灵感颜色 =====
const INSPIRATION_COLORS = [
  { bg: '#F5F3FF', text: '#6D28D9', tag: '#DDD6FE' },
  { bg: '#FDEDEC', text: '#CB4335', tag: '#F5B7B1' },
  { bg: '#E8F8F5', text: '#138D75', tag: '#A2D9CE' },
  { bg: '#FEF9E7', text: '#B7950B', tag: '#F7DC6F' },
  { bg: '#F5EEF8', text: '#7D3C98', tag: '#D2B4DE' },
  { bg: '#FDEBD0', text: '#CA6F1E', tag: '#F5CBA7' },
];

// ===== 技能学习分类 =====
const SKILL_CATEGORIES = ['PPT制作', '教学方法', '学科知识', '技术工具', '班级管理', '心理辅导', '其他'];

// ===== 工具函数 =====
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function nowTimeStr() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}
function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function formatDateCN(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  const week = ['日','一','二','三','四','五','六'];
  return `${d.getMonth()+1}月${d.getDate()}日 星期${week[d.getDay()]}`;
}

// ===== 数据存储 =====
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { mode: 'daily', checkins: {}, records: {} };
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function getRecords(type) {
  const data = loadData();
  return data.records[type] || [];
}
function addRecord(type, record) {
  const data = loadData();
  if (!data.records[type]) data.records[type] = [];
  record.id = uid();
  record.timestamp = Date.now();
  record.date = todayStr();
  data.records[type].unshift(record);
  saveData(data);
  return record;
}
function deleteRecord(type, id) {
  const data = loadData();
  if (data.records[type]) {
    data.records[type] = data.records[type].filter(r => r.id !== id);
    saveData(data);
  }
}
function getMode() { return loadData().mode || 'daily'; }
function setMode(mode) {
  const data = loadData();
  data.mode = mode;
  saveData(data);
}
// 根据模式获取记录（daily = 仅今天，cumulative = 全部）
function getDisplayRecords(type) {
  const records = getRecords(type);
  if (getMode() === 'daily') {
    const today = todayStr();
    return records.filter(r => r.date === today);
  }
  return records;
}

// ===== Toast 提示 =====
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show ' + type;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = 'toast'; }, 2200);
}

// ===== 路由 =====
let currentView = 'home';

function navigate(viewId) {
  currentView = viewId;
  // 更新侧栏高亮
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === viewId);
  });
  renderView(viewId);
}

function renderView(viewId) {
  const main = document.getElementById('contentInner');
  const views = {
    home: renderHome,
    mood: renderMood,
    dailyTasks: renderDailyTasks,
    textAnalysis: renderTextAnalysis,
    meditation: renderMeditation,
    sleep: renderSleep,
    exercise: renderExercise,
    diet: renderDiet,
    skill: renderSkill,
    inspiration: renderInspiration,
    reading: renderReading,
  };
  const fn = views[viewId] || renderHome;
  main.innerHTML = '';
  fn(main);
  main.classList.remove('view-enter');
  void main.offsetWidth;
  main.classList.add('view-enter');
}

// ===== 桌面首页 =====
function renderHome(main) {
  const data = loadData();
  const today = todayStr();
  const checkedIn = !!data.checkins[today];

  // 连续打卡天数
  let streak = 0;
  let checkDate = new Date();
  while (true) {
    const ds = `${checkDate.getFullYear()}-${String(checkDate.getMonth()+1).padStart(2,'0')}-${String(checkDate.getDate()).padStart(2,'0')}`;
    if (data.checkins[ds]) { streak++; checkDate.setDate(checkDate.getDate() - 1); }
    else break;
  }

  // 今日各模块统计
  const todayRecords = {};
  ['mood','exercise','reading','meditation','diet','skill','sleep','inspiration'].forEach(t => {
    todayRecords[t] = (data.records[t] || []).filter(r => r.date === today).length;
  });
  // 每日必做完成数
  const dailyTaskStatus = getDailyTaskStatus(data, today);
  todayRecords.dailyTasks = dailyTaskStatus.filter(t => t.done).length;
  todayRecords.dailyTasksTotal = dailyTaskStatus.length;
  const waterToday = data.records.water && data.records.water[today] || 0;

  const hour = new Date().getHours();
  let greeting = '晚上好';
  if (hour < 6) greeting = '夜深了，注意休息';
  else if (hour < 9) greeting = '早安，新的一天开始啦';
  else if (hour < 12) greeting = '上午好，元气满满';
  else if (hour < 14) greeting = '中午好，记得午休哦';
  else if (hour < 18) greeting = '下午好，继续加油';
  else if (hour < 22) greeting = '傍晚好，放松一下';

  // 本月打卡日历（整月，含上月/下月灰色填充）
  const monthLabels = ['日','一','二','三','四','五','六'];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-11
  const firstDay = new Date(year, month, 1).getDay(); // 本月1号是周几
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate(); // 上月天数

  const monthDays = [];
  // 上月末尾日期（灰色）
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const m = month === 0 ? 12 : month;
    const y = month === 0 ? year - 1 : year;
    const ds = `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    monthDays.push({ day: d, date: ds, checked: false, isToday: false, gray: true });
  }
  // 本月日期
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    monthDays.push({
      day: d,
      date: ds,
      checked: !!data.checkins[ds],
      isToday: ds === today,
      gray: false
    });
  }
  // 下月开头日期（灰色），补齐到7的倍数
  const totalCells = Math.ceil(monthDays.length / 7) * 7;
  for (let d = 1; monthDays.length < totalCells; d++) {
    const m = month === 11 ? 1 : month + 2;
    const y = month === 11 ? year + 1 : year;
    const ds = `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    monthDays.push({ day: d, date: ds, checked: false, isToday: false, gray: true });
  }

  // 今日热点新闻
  const baiduItems = getCachedNews();
  const weiboItems = getCachedWeiboNews();

  main.innerHTML = `
    <div class="home-hero">
      <div class="hero-greeting">${greeting}，今天也要元气满满 🌿</div>
      <div class="hero-time" id="liveClock">--:--:--</div>
      <div class="hero-date"><span id="liveDate">${formatDateCN(today)}</span></div>
      <div class="hero-weather" id="weatherInfo" style="display:none"></div>
      <div class="hero-deco float-anim">
        <svg viewBox="0 0 120 100" width="100" height="85">
          <circle cx="40" cy="30" r="18" fill="rgba(255,255,255,0.12)"/>
          <circle cx="75" cy="55" r="14" fill="rgba(255,255,255,0.1)"/>
          <circle cx="90" cy="25" r="20" fill="rgba(255,255,255,0.09)"/>
          <path d="M55,80 C40,68 30,60 30,52 C30,45 35,40 41,40 C44,40 47,42 49,45 C51,42 54,40 57,40 C63,40 68,45 68,52 C68,60 58,68 55,80Z" fill="rgba(255,255,255,0.3)"/>
          <circle cx="38" cy="28" r="5" fill="rgba(248,165,194,0.5)"/>
          <circle cx="30" cy="38" r="5" fill="rgba(248,165,194,0.5)"/>
          <circle cx="46" cy="38" r="5" fill="rgba(248,165,194,0.5)"/>
          <circle cx="38" cy="33" r="4" fill="rgba(255,255,255,0.4)"/>
          <circle cx="78" cy="20" r="4" fill="rgba(186,225,242,0.5)"/>
          <circle cx="72" cy="28" r="4" fill="rgba(186,225,242,0.5)"/>
          <circle cx="84" cy="28" r="4" fill="rgba(186,225,242,0.5)"/>
          <circle cx="78" cy="24" r="3" fill="rgba(255,255,255,0.4)"/>
        </svg>
      </div>
    </div>

    <div class="home-grid">
      <div class="home-card checkin-card">
        <button class="checkin-btn ${checkedIn ? 'done' : ''}" id="checkinBtn" ${checkedIn ? 'disabled' : ''}>
          ${checkedIn ? ICONS.check + ' 今日已完成，继续加油！' : ICONS.fire + ' 点击完成'}
        </button>
        <div class="checkin-month">${month + 1}月</div>
        <div class="checkin-month-header">
          ${monthLabels.map(l => `<div class="month-header-cell">${l}</div>`).join('')}
        </div>
        <div class="checkin-month-grid">
          ${monthDays.map(d => `
            <div class="month-day-cell ${d.gray ? 'gray' : ''} ${d.checked ? 'checked' : ''} ${d.isToday ? 'today' : ''}">
              <span class="month-day-num">${d.day}</span>
              ${d.checked && !d.gray ? '<span class="month-day-dot"></span>' : ''}
            </div>
          `).join('')}
        </div>
      </div>

      ${renderNewsCard(baiduItems, weiboItems)}
    </div>

    <div class="overview-section">
      <div class="overview-title">${ICONS.clock} 今日成长概览</div>
      <div class="overview-grid">
        <div class="overview-item" onclick="navigate('mood')">
          <div class="overview-icon">${ICONS.mood.replace(/currentColor/g,'#F8A5C2')}</div>
          <div class="overview-num" style="color:#F8A5C2">${todayRecords.mood}</div>
          <div class="overview-label">心情记录</div>
        </div>
        <div class="overview-item" onclick="navigate('dailyTasks')">
          <div class="overview-icon">${ICONS.dailyTasks.replace(/currentColor/g,'#FF8A65')}</div>
          <div class="overview-num" style="color:#FF8A65">${todayRecords.dailyTasks}<span style="font-size:0.9rem;">/${todayRecords.dailyTasksTotal}</span></div>
          <div class="overview-label">每日必做</div>
        </div>
        <div class="overview-item" onclick="navigate('exercise')">
          <div class="overview-icon">${ICONS.exercise.replace(/currentColor/g,'#F5B041')}</div>
          <div class="overview-num" style="color:#F5B041">${todayRecords.exercise}</div>
          <div class="overview-label">运动打卡</div>
        </div>
        <div class="overview-item" onclick="navigate('reading')">
          <div class="overview-icon">${ICONS.reading.replace(/currentColor/g,'#A78BFA')}</div>
          <div class="overview-num" style="color:#A78BFA">${todayRecords.reading}</div>
          <div class="overview-label">阅读记录</div>
        </div>
        <div class="overview-item" onclick="navigate('meditation')">
          <div class="overview-icon">${ICONS.meditation.replace(/currentColor/g,'#C39BD3')}</div>
          <div class="overview-num" style="color:#C39BD3">${todayRecords.meditation}</div>
          <div class="overview-label">冥想次数</div>
        </div>
        <div class="overview-item" onclick="navigate('diet')">
          <div class="overview-icon">${ICONS.diet.replace(/currentColor/g,'#82E0AA')}</div>
          <div class="overview-num" style="color:#82E0AA">${waterToday}<span style="font-size:0.9rem;">杯</span></div>
          <div class="overview-label">今日饮水</div>
        </div>
      </div>
    </div>

    <div class="overview-section">
      <div class="overview-title">${ICONS.inspiration} 成长维度</div>
      <div class="overview-grid" style="grid-template-columns: repeat(5, 1fr);">
        <div class="overview-item" onclick="navigate('mood')" style="background:#FADCE8;border-color:#FADCE8;">
          <div class="overview-label" style="font-size:0.8rem;font-weight:600;color:#CB4335;">身心疗愈</div>
          <div class="overview-label" style="margin-top:4px;">心情·冥想·睡眠</div>
        </div>
        <div class="overview-item" onclick="navigate('exercise')" style="background:#FDEBD0;border-color:#FDEBD0;">
          <div class="overview-label" style="font-size:0.8rem;font-weight:600;color:#CA6F1E;">体能提升</div>
          <div class="overview-label" style="margin-top:4px;">运动·饮食</div>
        </div>
        <div class="overview-item" onclick="navigate('skill')" style="background:#FDEDEC;border-color:#FDEDEC;">
          <div class="overview-label" style="font-size:0.8rem;font-weight:600;color:#CB4335;">教学赋能</div>
          <div class="overview-label" style="margin-top:4px;">技能学习</div>
        </div>
        <div class="overview-item" onclick="navigate('inspiration')" style="background:#D1F2EB;border-color:#D1F2EB;">
          <div class="overview-label" style="font-size:0.8rem;font-weight:600;color:#138D75;">教研精进</div>
          <div class="overview-label" style="margin-top:4px;">灵感收集</div>
        </div>
        <div class="overview-item" onclick="navigate('reading')" style="background:#F5F3FF;border-color:#F5F3FF;">
          <div class="overview-label" style="font-size:0.8rem;font-weight:600;color:#6D28D9;">自我沉淀</div>
          <div class="overview-label" style="margin-top:4px;">阅读时光</div>
        </div>
      </div>
    </div>
  `;

  // 打卡按钮事件
  const checkinBtn = document.getElementById('checkinBtn');
  if (checkinBtn && !checkedIn) {
    checkinBtn.addEventListener('click', () => {
      const d = loadData();
      d.checkins[today] = true;
      saveData(d);
      showToast('打卡成功！又是元气满满的一天 🌟', 'success');
      updateStreak();
      renderView('home');
    });
  }

  // 刷新热点新闻
  const newsRefresh = document.getElementById('newsRefresh');
  if (newsRefresh) {
    newsRefresh.addEventListener('click', async () => {
      newsRefresh.style.transform = 'rotate(360deg)';
      const activeTab = document.querySelector('.news-tab.active');
      const activeSource = activeTab ? activeTab.dataset.source : 'baidu';
      if (activeSource === 'weibo') {
        await refreshWeiboInBg(true);
      } else {
        await refreshNewsInBg(true);
      }
      newsRefresh.style.transform = 'rotate(0deg)';
      const bItems = cachedNewsList;
      const wItems = cachedWeiboList;
      const card = document.querySelector('.news-card');
      if (card) {
        card.outerHTML = renderNewsCard(bItems, wItems);
        // 重新绑定事件
        bindNewsEvents();
      }
    });
  }

  // 异步加载缺失的热点
  const needBaidu = !baiduItems || baiduItems.length === 0;
  const needWeibo = !weiboItems || weiboItems.length === 0;
  if (needBaidu || needWeibo) {
    Promise.all([
      needBaidu ? fetchNews() : Promise.resolve(baiduItems),
      needWeibo ? fetchWeiboNews() : Promise.resolve(weiboItems),
    ]).then(([bItems, wItems]) => {
      const card = document.querySelector('.news-card');
      const hasNew = (bItems && bItems.length > 0) || (wItems && wItems.length > 0);
      if (card && hasNew) {
        card.outerHTML = renderNewsCard(
          needBaidu && bItems ? bItems : baiduItems,
          needWeibo && wItems ? wItems : weiboItems
        );
        bindNewsEvents();
      }
    });
  }

  // 绑定tab切换（初始调用）
  bindNewsEventsInit();
  // 异步加载天气
  loadWeatherDisplay();
}

function bindNewsEventsInit() {
  // tab切换事件绑定
  const newsTabs = document.querySelectorAll('.news-tab');
  newsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const source = tab.dataset.source;
      newsTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.news-panel').forEach(p => p.classList.remove('active'));
      const panel = document.querySelector(`.news-panel[data-source="${source}"]`);
      if (panel) panel.classList.add('active');
    });
  });
}

function bindNewsEvents() {
  bindNewsEventsInit();
  // 重新绑定刷新按钮
  const newsRefresh = document.getElementById('newsRefresh');
  if (newsRefresh) {
    newsRefresh.addEventListener('click', async () => {
      newsRefresh.style.transform = 'rotate(360deg)';
      const activeTab = document.querySelector('.news-tab.active');
      const activeSource = activeTab ? activeTab.dataset.source : 'baidu';
      if (activeSource === 'weibo') {
        await refreshWeiboInBg(true);
      } else {
        await refreshNewsInBg(true);
      }
      newsRefresh.style.transform = 'rotate(0deg)';
      const bItems = cachedNewsList;
      const wItems = cachedWeiboList;
      const card = document.querySelector('.news-card');
      if (card) {
        card.outerHTML = renderNewsCard(bItems, wItems);
        bindNewsEvents();
      }
    });
  }
}

// ===== 通用：渲染记录列表 =====
function renderRecordList(records, renderFn, emptyText) {
  if (!records || records.length === 0) {
    return `<div class="empty-state">
      <svg viewBox="0 0 64 64" width="56" height="56"><circle cx="32" cy="32" r="28" fill="#F5F3FF"/><path d="M32 18 Q24 18 24 26 Q24 34 32 38 Q40 34 40 26 Q40 18 32 18 Z" fill="#DDD6FE"/><circle cx="28" cy="25" r="1.5" fill="#fff"/><circle cx="36" cy="25" r="1.5" fill="#fff"/><path d="M28 30 Q32 33 36 30" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>
      <p>${emptyText}</p>
    </div>`;
  }
  return `<div class="record-list">${records.map(renderFn).join('')}</div>`;
}

// ===== 心情日记 =====
function renderMood(main) {
  const records = getDisplayRecords('mood');
  const allRecords = getRecords('mood');
  const mode = getMode();

  // 统计
  const totalEntries = allRecords.length;
  const avgMood = allRecords.length > 0
    ? (allRecords.reduce((s,r) => s + (r.moodValue || 3), 0) / allRecords.length).toFixed(1)
    : '—';
  const happyDays = allRecords.filter(r => r.moodValue >= 4).length;

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.mood.replace(/currentColor/g,'#F8A5C2')} 心情日记</div>
      <div class="view-subtitle">记录每一天的情绪起伏，看见内心的晴雨变化 🌈</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#F8A5C2">${totalEntries}</div><div class="stat-label">总记录数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#F5B041">${avgMood}</div><div class="stat-label">平均心情指数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${happyDays}</div><div class="stat-label">开心天数</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">📝 记录此刻心情</div>
      <div class="form-row">
        <div class="form-label">今天心情怎么样？</div>
        <div class="mood-selector" id="moodSelector">
          ${MOODS.map(m => `<div class="mood-option" data-mood="${m.value}" data-emoji="${m.emoji}" data-label="${m.label}">${m.emoji}</div>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">想说点什么？（选填）</div>
        <textarea class="form-textarea" id="moodText" placeholder="今天发生了什么让你有这样的心情呢..."></textarea>
      </div>
      <button class="btn-primary" id="moodSave">${ICONS.check} 保存心情</button>
    </div>

    <div class="panel">
      <div class="panel-title">📖 ${mode === 'daily' ? '今日' : '全部'}心情记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#FADCE8;font-size:1.4rem;">${r.moodEmoji}</div>
          <div class="record-body">
            <div class="record-title">${r.moodLabel} ${r.text ? '— ' + r.text : ''}</div>
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delMood('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有心情记录，快来记录第一篇吧~')}
    </div>
  `;

  let selectedMood = null;
  document.querySelectorAll('.mood-option').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.mood-option').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      selectedMood = { value: +el.dataset.mood, emoji: el.dataset.emoji, label: el.dataset.label };
    });
  });

  document.getElementById('moodSave').addEventListener('click', () => {
    if (!selectedMood) { showToast('请先选择心情哦~', 'error'); return; }
    addRecord('mood', {
      moodValue: selectedMood.value,
      moodEmoji: selectedMood.emoji,
      moodLabel: selectedMood.label,
      text: document.getElementById('moodText').value.trim(),
      time: nowTimeStr(),
    });
    showToast('心情已记录 💖', 'success');
    renderView('mood');
  });
}

window.delMood = function(id) { deleteRecord('mood', id); showToast('已删除'); renderView('mood'); };

// ===== 拆文分析引擎 =====
// 中文姓氏库（百家姓常见）
const SURNAMES = '赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐费廉岑薛雷贺倪汤滕殷罗毕郝邬安常乐于时傅皮下齐康伍余元卜顾孟平黄和穆萧尹姚邵湛汪祁毛禹狄米贝明臧计伏成戴谈宋茅庞熊纪舒屈项祝董梁杜阮蓝闵席季麻强贾路娄危江童颜郭梅盛林刁钟徐邱骆高夏蔡田樊胡凌霍虞万支柯昝管卢莫经房裘缪干解应宗丁宣贲邓郁单杭洪包诸左石崔吉钮龚程嵇邢滑裴陆荣翁荀羊於惠甄曲家封芮羿储靳汲邴糜松井段富巫乌焦巴弓牧隗山谷车侯宓蓬全郗班仰秋仲伊宫宁仇栾暴甘钭厉戎祖武符刘景詹束龙叶幸司韶郜黎蓟薄印宿白怀蒲邰从鄂索咸籍赖卓蔺屠蒙池乔阴鬱胥能苍双闻莘党翟谭贡劳逄姬申扶堵冉宰郦雍卻璩桑桂濮牛寿通边扈燕冀郏浦尚农温别庄晏柴瞿阎充慕连茹习宦艾鱼容向古易慎戈廖庾终暨居衡步都耿满弘匡国文寇广禄阙东欧殳沃利蔚越夔隆师巩厍聂晁勾敖融冷訾辛阚那简饶空曾毋沙乜养鞠须丰巢关蒯相查後荆红游竺权逯盖益桓公';

// 故事类型关键词库
const STORY_TYPES = {
  '言情': ['爱情','恋爱','喜欢','表白','在一起','心动','暗恋','初恋','热恋','婚姻','婚礼','新郎','新娘','情侣','男友','女友','前任','痴情','深情','宠溺','吃醋','告白','情书','约会','牵手','拥抱'],
  '武侠': ['江湖','武功','内力','剑法','门派','侠客','武林','大侠','秘籍','修炼','轻功','真气','招式','刀法','拳法','暗器','六脉','丐帮','少林','武当','掌门','比武'],
  '仙侠': ['修仙','渡劫','飞升','仙尊','灵根','法宝','丹药','元婴','金丹','筑基','仙界','魔界','灵脉','仙器','道侣','天劫','化神','练气','仙门','仙法'],
  '科幻': ['宇宙','飞船','星球','外星','人工智能','机器人','基因','未来','科技','虚拟','太空','维度','星际','时空','量子','克隆','AI','纳米','赛博','星际'],
  '悬疑': ['案件','凶手','侦探','线索','推理','密室','失踪','谜团','真相','调查','犯罪','证据','嫌疑','谋杀','血迹','指纹','不在场','破解','诡异'],
  '奇幻': ['魔法','巫师','精灵','巨龙','咒语','王国','冒险','异世界','召唤','结界','神器','魔族','勇者','魔王','传送门','魔法师','诅咒','预言','圣剑'],
  '现实': ['生活','工作','家庭','父母','孩子','学校','公司','社会','现实','日常','平凡','都市','职场','医院','警察','律师','医生'],
  '历史': ['皇帝','将军','丞相','王朝','朝代','战争','起义','公主','太子','宫廷','天下','江山','边疆','诸侯','御驾','龙椅','圣旨','朝堂','后宫'],
  '青春': ['少年','少女','青春','校园','同桌','篮球','毕业','考试','暗恋','社团','暑假','运动会','老师','同学','教室','操场','高考','录取'],
  '末世': ['丧尸','末日','幸存','变异','废土','基地','求生','进化','病毒','灾难','避难','荒原','感染','变异兽','核辐射','崩塌'],
  '恐怖': ['鬼','幽灵','诅咒','死亡','诡异','恐怖','噩梦','尸体','阴森','黑暗','惊悚','血','尖叫','地下室','棺','怨灵','凶宅'],
};

// 情绪标签库
const EMOTION_TAGS = {
  '喜悦': ['开心','快乐','高兴','欢笑','微笑','幸福','甜蜜','欣喜','雀跃','欢快','愉悦','心花怒放'],
  '悲伤': ['难过','伤心','哭泣','流泪','悲痛','绝望','哀伤','心碎','忧伤','痛苦','凄凉','酸楚','泪如雨下'],
  '愤怒': ['生气','愤怒','恼怒','暴怒','愤恨','怒火','暴躁','恼火','愤慨','火冒三丈','怒不可遏'],
  '恐惧': ['害怕','恐惧','惊恐','畏惧','胆怯','战栗','毛骨悚然','惊慌','惊骇','不寒而栗','瑟瑟发抖'],
  '紧张': ['紧张','焦虑','不安','忐忑','焦躁','心慌','担忧','忧心','七上八下','如坐针毡'],
  '温暖': ['温暖','感动','温馨','柔软','拥抱','呵护','关怀','贴心','治愈','暖意','温情','热泪'],
  '孤独': ['孤独','寂寞','孤单','冷清','落寞','凄凉','形单影只','孑然','独处','冷寂'],
  '期待': ['期待','盼望','憧憬','向往','希望','渴望','翘首','希冀','念想','期盼'],
  '惊讶': ['震惊','惊讶','诧异','惊愕','意外','出乎意料','没想到','难以置信','目瞪口呆'],
  '怀念': ['怀念','回忆','思念','想念','记起','回想起','往事','当年','曾经','当初','从前'],
};

// 情节标签库
const PLOT_TAGS = {
  '复仇': ['复仇','报仇','雪恨','以牙还牙','血债','不共戴天','讨回公道'],
  '成长': ['成长','蜕变','历练','突破','成熟','进步','觉醒','进阶','变强','修炼'],
  '冒险': ['冒险','探索','旅程','闯荡','历险','征途','远行','踏上','出发','探险'],
  '悬疑': ['谜团','谜题','真相','隐藏','秘密','揭露','揭开','发现','破案','解密'],
  '爱情': ['相爱','深爱','守护','等待','牺牲','成全','离别','重逢','心动','求婚'],
  '争斗': ['对抗','较量','决战','厮杀','争霸','对决','争夺','竞争','抗衡','对抗'],
  '守护': ['守护','保护','捍卫','保卫','坚守','维护','守卫','庇护','守候'],
  '救赎': ['救赎','拯救','赎罪','原谅','宽恕','释怀','放下','和解','新生'],
  '权谋': ['权力','谋略','算计','布局','权术','阴谋','暗斗','交易','利益','势力'],
};

// 世界观/地理关键词
const WORLD_KEYWORDS = {
  '地理设定': ['大陆','王国','帝国','联邦','城邦','海域','荒原','沙漠','森林','山脉','河流','岛屿','峡谷','平原','冰原','火山','沼泽'],
  '种族设定': ['人族','魔族','妖族','神族','龙族','精灵','矮人','兽人','天使','恶魔','修仙者','武者','魔法师','异能者','吸血鬼','狼人','仙','魔','妖','鬼','怪','灵','神裔','半兽人','亡灵','元素','巨人','人鱼','羽族'],
  '时间设定': ['古代','现代','近代','未来','架空','远古','上古','中世纪','唐朝','宋朝','明朝','清朝','民国','末世','星际时代','赛博','蒸汽','冷兵器'],
  '力量体系': ['灵力','魔法','斗气','内力','真气','法力','异能','查克拉','念力','诅咒','神力','元素','灵气','魂力','血脉','天赋','觉醒'],
};

// 角色身份标签
const ROLE_TAGS = {
  '主角': ['主角','男主','女主','主人公','他/她','男主角','女主角'],
  '职业': ['将军','医生','律师','学生','总裁','CEO','教授','侦探','警察','杀手','刺客','猎人','商人','医师','教师','设计师','程序员','记者','作家','画家','歌手','演员','导演','厨师','农夫','工匠','铁匠','魔法师','剑士','骑士','盗贼','术士','牧师','祭司','国王','女王','皇子','皇女','世子','郡主','将领','军师','谋士','侍卫','宫女','太监','捕快','掌柜'],
  '关系': ['父亲','母亲','爸爸','妈妈','哥哥','姐姐','弟弟','妹妹','师傅','师父','徒弟','师兄','师姐','师弟','师妹','朋友','敌人','对手','恋人','爱人','丈夫','妻子','青梅竹马','发小','宿敌','盟友'],
};

function analyzeText(text, mode) {
  // 模式：short 全量分析，long 提取关键段落
  const analysisText = mode === 'short' ? text : extractKeyText(text);
  
  const result = {
    basicInfo: analyzeBasicInfo(analysisText, text),
    background: analyzeBackground(analysisText),
    emotionArc: analyzeEmotionArc(analysisText),
    emotionTension: analyzeEmotionTension(analysisText),
    characters: analyzeCharacters(analysisText),
    worldSetting: analyzeWorldSetting(analysisText),
  };
  
  return result;
}

// 长篇模式：抽取包含关键信息的句子
function extractKeyText(text) {
  const sentences = text.split(/[。！？；\n]/).filter(s => s.trim().length > 5);
  if (sentences.length <= 200) return text;
  
  const keyPatterns = [
    /[叫称是名].{1,4}[，。！？]/g, /[爱恨喜怒悲恐惊忧].{2,}/g,
    /[在位于处].{2,}[城国界域大陆山脉森林海岛屿谷]/g,
    /[修炼功法魔法灵力内力气].{3,}/g, /[目标梦想想要为了].{3,}/g,
    /[因为由于].{3,}[所以因此].{2,}/g, /[但是然而可是].{3,}/g,
    /[突然忽然竟然居然].{3,}/g, /种族.{2,}/g, /世界.{3,}/g,
    /主角.{3,}/g, /.{2,}[族界域境国城].{0,3}/g,
  ];
  
  const scored = sentences.map(s => {
    let score = keyPatterns.reduce((sum, p) => sum + (p.test(s) ? 1 : 0), 0);
    // 对话句子加分
    if (/[""''「」『』"']/.test(s)) score += 2;
    // 名字出现加分
    if (/[A-Z\u4e00-\u9fff]{2,3}[说问道喊叫]/.test(s)) score += 2;
    return { s, score };
  });
  
  scored.sort((a, b) => b.score - a.score);
  const topSentences = scored.slice(0, Math.min(300, Math.floor(sentences.length * 0.6)))
    .sort((a, b) => text.indexOf(a.s) - text.indexOf(b.s));
  
  return topSentences.map(x => x.s).join('。');
}

// 1. 基本信息
function analyzeBasicInfo(analysisText, fullText) {
  // 故事类型
  const typeScores = {};
  for (const [type, keywords] of Object.entries(STORY_TYPES)) {
    typeScores[type] = keywords.reduce((s, kw) => s + (analysisText.match(new RegExp(kw, 'g')) || []).length, 0);
  }
  const sortedTypes = Object.entries(typeScores).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
  const storyType = sortedTypes.slice(0, 3).map(([k]) => k);
  
  // 情绪标签
  const emotionScores = {};
  for (const [emo, keywords] of Object.entries(EMOTION_TAGS)) {
    emotionScores[emo] = keywords.reduce((s, kw) => s + (analysisText.match(new RegExp(kw, 'g')) || []).length, 0);
  }
  const sortedEmotions = Object.entries(emotionScores).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
  const emotionTags = sortedEmotions.slice(0, 5).map(([k]) => k);
  
  // 情节标签
  const plotScores = {};
  for (const [plot, keywords] of Object.entries(PLOT_TAGS)) {
    plotScores[plot] = keywords.reduce((s, kw) => s + (analysisText.match(new RegExp(kw, 'g')) || []).length, 0);
  }
  const sortedPlots = Object.entries(plotScores).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
  const plotTags = sortedPlots.slice(0, 5).map(([k]) => k);
  
  // 角色标签
  const roleScores = {};
  for (const [cat, keywords] of Object.entries(ROLE_TAGS)) {
    roleScores[cat] = keywords.reduce((s, kw) => s + (analysisText.match(new RegExp(kw, 'g')) || []).length, 0);
  }
  const detectedRoles = [];
  for (const [cat, keywords] of Object.entries(ROLE_TAGS)) {
    if (cat === '主角' || cat === '关系') continue;
    for (const kw of keywords) {
      if (analysisText.includes(kw) && !detectedRoles.includes(kw)) {
        detectedRoles.push(kw);
        if (detectedRoles.length >= 10) break;
      }
    }
    if (detectedRoles.length >= 10) break;
  }
  
  // 世界观检测
  const worldItems = [];
  for (const [cat, keywords] of Object.entries(WORLD_KEYWORDS)) {
    for (const kw of keywords) {
      if (analysisText.includes(kw) && !worldItems.includes(kw)) {
        worldItems.push(kw);
      }
    }
  }
  
  // 中心思想 - 提取主题句
  const themeKeywords = ['主题','意义','价值','道理','启示','人生','命运','选择','自由','爱','勇气','信念','坚持','善良','正义','公平','梦想','希望'];
  const themeSentences = fullText.split(/[。！？\n]/).filter(s => 
    themeKeywords.some(kw => s.includes(kw)) && s.length > 8 && s.length < 80
  ).slice(0, 3);
  
  // 故事主线 - 寻找包含多个角色的句子
  const characterNames = extractNames(analysisText).slice(0, 5);
  const mainlineSentences = fullText.split(/[。！？\n]/).filter(s => {
    const matches = characterNames.filter(n => s.includes(n));
    return matches.length >= 2 && s.length > 10 && s.length < 120;
  }).slice(0, 3);
  
  return {
    storyType: storyType.length > 0 ? storyType : ['未识别'],
    roleTags: detectedRoles.length > 0 ? detectedRoles : ['未识别'],
    plotTags: plotTags.length > 0 ? plotTags : ['未识别'],
    emotionTags: emotionTags.length > 0 ? emotionTags : ['未识别'],
    centralIdea: themeSentences.length > 0 ? themeSentences : ['（请提供更多内容以便分析）'],
    worldView: worldItems.length > 0 ? [...new Set(worldItems)].slice(0, 10) : ['未识别'],
    mainStoryline: mainlineSentences.length > 0 ? mainlineSentences : ['（请提供更多内容以便分析）'],
    rawEmotions: sortedEmotions,
  };
}

// 2. 故事背景
function analyzeBackground(analysisText) {
  // 检测时间背景
  const timeKeywords = ['古代','现代','未来','架空','唐朝','宋朝','元朝','明朝','清朝','民国','末世','星际','末世','赛博','蒸汽'];
  const timeFound = timeKeywords.filter(kw => analysisText.includes(kw));
  
  // 检测地点
  const locPatterns = [/(.{1,4}(?:城|国|大陆|山脉|森林|学院|宗门|门派|岛|谷|镇|村|府|宫|殿|界|域|境|天|海))/g];
  const locations = [];
  for (const pattern of locPatterns) {
    let match;
    while ((match = pattern.exec(analysisText)) !== null) {
      if (match[1].length >= 2 && !locations.includes(match[1])) {
        locations.push(match[1]);
      }
    }
  }
  
  // 背景描述句子
  const bgKeywords = ['世界','大陆','时代','王朝','宇宙','位面','时空','纪元','年间','世纪','千年','万年'];
  const bgSentences = analysisText.split(/[。！？\n]/).filter(s =>
    bgKeywords.some(kw => s.includes(kw)) && s.length > 8
  ).slice(0, 5);
  
  return {
    timePeriod: timeFound.length > 0 ? [...new Set(timeFound)] : ['未明确'],
    locations: locations.length > 0 ? [...new Set(locations)].slice(0, 8) : ['未识别'],
    description: bgSentences.length > 0 ? bgSentences : ['（请提供更多内容以便分析）'],
  };
}

// 3. 感情线（起承转合）
function analyzeEmotionArc(analysisText) {
  const paragraphs = analysisText.split(/\n\n|\n(?=[\u4e00-\u9fff])/).filter(p => p.trim().length > 10);
  const totalLen = analysisText.length;
  const quarter = Math.floor(totalLen / 4);
  
  const qi = analysisText.slice(0, quarter);          // 起
  const cheng = analysisText.slice(quarter, quarter * 2); // 承
  const zhuan = analysisText.slice(quarter * 2, quarter * 3); // 转
  const he = analysisText.slice(quarter * 3);         // 合
  
  function segmentEmotion(text) {
    const result = {};
    for (const [emo, keywords] of Object.entries(EMOTION_TAGS)) {
      result[emo] = keywords.reduce((s, kw) => s + (text.match(new RegExp(kw, 'g')) || []).length, 0);
    }
    const sorted = Object.entries(result).filter(([,v]) => v > 0).sort((a,b) => b[1]-a[1]);
    return sorted.slice(0, 3);
  }
  
  // 提取关键转折词附近的句子
  const turnMarkers = ['但是','可是','然而','突然','忽然','竟然','居然','没想到','转折','变故','意外','反转','不料','谁知','哪知','岂料'];
  const turnSentences = [];
  for (const marker of turnMarkers) {
    const idx = analysisText.indexOf(marker);
    if (idx > 0) {
      const start = Math.max(0, idx - 20);
      const end = Math.min(analysisText.length, idx + 80);
      const context = analysisText.slice(start, end).split(/[。！？]/)[0];
      if (context && context.length > 10) turnSentences.push(context.trim());
    }
  }
  
  // 提取开头和结尾句子
  const allSentences = analysisText.split(/[。！？\n]/).filter(s => s.trim().length > 5);
  const openingSentences = allSentences.slice(0, Math.min(5, allSentences.length));
  const closingSentences = allSentences.slice(Math.max(0, allSentences.length - 5));
  
  return {
    qi: {
      emotion: segmentEmotion(qi).map(([k,v]) => `${k}(${v})`).join('、') || '无明显情绪倾向',
      summary: openingSentences.length > 0 ? openingSentences.slice(0, 3) : ['（请提供更多内容）'],
    },
    cheng: {
      emotion: segmentEmotion(cheng).map(([k,v]) => `${k}(${v})`).join('、') || '无明显情绪倾向',
      keywords: Object.entries(segmentEmotion(cheng).reduce((acc, [k,v]) => { acc[k] = v; return acc; }, {})).map(([k]) => k),
    },
    zhuan: {
      emotion: segmentEmotion(zhuan).map(([k,v]) => `${k}(${v})`).join('、') || '无明显情绪倾向',
      turningPoints: turnSentences.slice(0, 4).length > 0 ? turnSentences.slice(0, 4) : ['（未检测到明显转折）'],
    },
    he: {
      emotion: segmentEmotion(he).map(([k,v]) => `${k}(${v})`).join('、') || '无明显情绪倾向',
      summary: closingSentences.length > 0 ? closingSentences.slice(0, 3) : ['（请提供更多内容）'],
    },
  };
}

// 4. 感情线（情绪拉扯）
function analyzeEmotionTension(analysisText) {
  // 找冲突/拉扯相关的句子
  const tensionKeywords = ['挣扎','矛盾','纠结','犹豫','徘徊','拉扯','两难','左右为难','进退两难','心乱','煎熬','折磨','为难','不忍','舍不得','放不下','忘不了','难以抉择','痛苦','纠葛','纠缠'];
  const tensionSentences = analysisText.split(/[。！？\n]/).filter(s =>
    tensionKeywords.some(kw => s.includes(kw)) && s.length > 8
  ).slice(0, 8);
  
  // 找角色间的互动模式
  const names = extractNames(analysisText).slice(0, 5);
  const interactionPatterns = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
      const pair = [names[i], names[j]];
      const pattern = new RegExp(`${pair[0]}.{0,20}${pair[1]}|${pair[1]}.{0,20}${pair[0]}`, 'g');
      const matches = analysisText.match(pattern) || [];
      if (matches.length >= 2) {
        const relKeywords = ['爱','恨','喜欢','讨厌','思念','怨恨','感激','愧疚','亏欠','保护','伤害','背叛','信任','怀疑','依赖','推开','靠近'];
        const rels = relKeywords.filter(kw => matches.some(m => m.includes(kw)));
        interactionPatterns.push({ pair: pair.join(' ↔ '), count: matches.length, relations: rels });
      }
    }
  }
  
  // 情绪波动指数
  const allSentences = analysisText.split(/[。！？\n]/).filter(s => s.trim().length > 3);
  const emotionCount = allSentences.reduce((sum, s) => {
    for (const keywords of Object.values(EMOTION_TAGS)) {
      if (keywords.some(kw => s.includes(kw))) { sum++; break; }
    }
    return sum;
  }, 0);
  const tensionIndex = allSentences.length > 0 ? ((emotionCount / allSentences.length) * 100).toFixed(1) : '0';
  
  return {
    tensionIndex: parseFloat(tensionIndex),
    tensionDescription: tensionIndex > 40 ? '情绪起伏大，角色内心拉扯剧烈' : tensionIndex > 20 ? '情绪有一定波动，存在内心纠葛' : '情绪相对平稳，内心拉扯较少',
    tensionSentences: tensionSentences.length > 0 ? tensionSentences : ['（未检测到明显情绪拉扯）'],
    characterInteractions: interactionPatterns.length > 0 ? interactionPatterns : [],
  };
}

// 提取中文名字
function extractNames(text) {
  const names = new Set();
  // 模式: 姓(1字) + 名(1-2字)
  const namePattern = new RegExp(`([${SURNAMES}])([${SURNAMES}\\u4e00-\\u9fff]{1,2})(?=[，。！？；：""''「」\n\\s说问道喊叫告诉对和与跟给被把从到在])`, 'g');
  let match;
  while ((match = namePattern.exec(text)) !== null) {
    const fullName = match[1] + match[2];
    if (fullName.length >= 2 && fullName.length <= 3 && !['所以','因此','对于','关于','以及','然而','但是','因为','如果','虽然','可以','这个','那个','什么','怎么','已经','没有'].includes(fullName)) {
      names.add(fullName);
    }
  }
  return [...names].slice(0, 12);
}

// 5. 人物设定
function analyzeCharacters(analysisText) {
  const names = extractNames(analysisText);
  if (names.length === 0) return { characters: [], summary: '（未检测到明显人物姓名，请提供包含角色名称的文本）' };
  
  const characters = [];
  for (const name of names.slice(0, 6)) {
    // 找提及该角色的句子
    const nameEscaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const relevantSentences = analysisText.split(/[。！？]/).filter(s => 
      s.includes(name) && s.length > 10
    );
    
    // 推断性别
    let gender = '未知';
    const maleIndicators = ['他','男','公子','少爷','先生','王子'];
    const femaleIndicators = ['她','女','小姐','姑娘','公主','夫人'];
    for (const s of relevantSentences) {
      if (maleIndicators.some(kw => s.includes(kw))) { gender = '男'; break; }
      if (femaleIndicators.some(kw => s.includes(kw))) { gender = '女'; break; }
    }
    
    // 推断角色定位
    let role = '未识别';
    for (const [cat, keywords] of Object.entries(ROLE_TAGS)) {
      if (cat === '主角' || cat === '关系') continue;
      for (const kw of keywords) {
        for (const s of relevantSentences) {
          if (s.includes(kw)) { role = kw; break; }
        }
        if (role !== '未识别') break;
      }
      if (role !== '未识别') break;
    }
    
    // 推断目标/动机
    const goalPatterns = ['想要','希望','目标','为了','追求','寻找','保护','复仇','拯救','证明','成为','获得','找到','实现'];
    const goalSentences = relevantSentences.filter(s => goalPatterns.some(kw => s.includes(kw))).slice(0, 2);
    
    // 推断身份
    const identityPatterns = ['是', '身为', '作为', '担任', '出任'];
    const identitySentences = relevantSentences.filter(s => 
      identityPatterns.some(kw => s.includes(kw)) && s.length < 60
    ).slice(0, 2);
    
    characters.push({
      name,
      gender,
      role,
      identity: identitySentences.length > 0 ? identitySentences : [],
      goals: goalSentences.length > 0 ? goalSentences : ['（未检测到明确目标）'],
      mentionCount: relevantSentences.length,
    });
  }
  
  // 按提及次数排序
  characters.sort((a, b) => b.mentionCount - a.mentionCount);
  
  return {
    characters,
    summary: `共检测到 ${characters.length} 个可能角色`,
  };
}

// 6. 故事设定
function analyzeWorldSetting(analysisText) {
  const geography = [];
  const races = [];
  const powerSystem = [];
  const timeSetting = [];
  
  for (const kw of WORLD_KEYWORDS['地理设定']) {
    if (analysisText.includes(kw) && !geography.includes(kw)) geography.push(kw);
  }
  
  for (const kw of WORLD_KEYWORDS['种族设定']) {
    if (analysisText.includes(kw) && !races.includes(kw)) races.push(kw);
  }
  
  for (const kw of WORLD_KEYWORDS['力量体系']) {
    if (analysisText.includes(kw) && !powerSystem.includes(kw)) powerSystem.push(kw);
  }
  
  for (const kw of WORLD_KEYWORDS['时间设定']) {
    if (analysisText.includes(kw) && !timeSetting.includes(kw)) timeSetting.push(kw);
  }
  
  // 提取世界设定相关句子
  const worldSentences = analysisText.split(/[。！？\n]/).filter(s =>
    ['世界','宇宙','大陆','位面','种族','法则','规则','设定','体系','系统','力量','能力','境界','等级'].some(kw => s.includes(kw)) && s.length > 10
  ).slice(0, 6);
  
  return {
    geography: geography.length > 0 ? geography : ['未识别'],
    races: races.length > 0 ? races : ['未识别'],
    powerSystem: powerSystem.length > 0 ? powerSystem : ['未识别'],
    timeSetting: timeSetting.length > 0 ? timeSetting : ['未识别'],
    worldDescription: worldSentences.length > 0 ? worldSentences : ['（请提供更多内容以便分析）'],
  };
}

// ===== 拆文视图渲染 =====
// ===== 每日必做 =====
const DAILY_TASKS = [
  {
    id: 'wangyidashen',
    name: '网易大神',
    icon: '🎮',
    color: '#E74C3C',
    scheme: 'wangyidashen://',
    web: 'https://ds.163.com/',
  },
  {
    id: 'oppovideo',
    name: 'OPPO视频',
    icon: '📺',
    color: '#2ECC71',
    scheme: 'oppovideo://',
    web: 'https://video.heytapmobi.com/',
    monthlyLimit: 10,
  },
  {
    id: 'douyin',
    name: '抖音极速版',
    icon: '🔥',
    color: '#1DA1F2',
    scheme: 'snssdk1128://',
    web: 'https://www.douyin.com/',
  },
  {
    id: 'chinamobile',
    name: '中国移动',
    icon: '📱',
    color: '#07C160',
    scheme: 'cmcc://',
    web: 'https://app.10086.cn/',
  },
  {
    id: 'chinaunicom',
    name: '中国联通',
    icon: '📶',
    color: '#E60012',
    scheme: 'chinaunicom://',
    web: 'https://m.10010.com/',
  },
  {
    id: 'happyxiaoxiaole',
    name: '开心消消乐',
    icon: '🍬',
    color: '#FF6B9D',
    scheme: 'happyxiaoxiaole://',
    web: 'https://game.weixin.qq.com/',
  },
];

// 获取每日必做状态
function getDailyTaskStatus(data, today) {
  const tasks = data.dailyTasks || {};
  const thisMonth = today.slice(0, 7);
  return DAILY_TASKS.map(task => {
    const t = tasks[task.id];
    if (!t) return { ...task, done: false, count: 0, monthlyLimit: task.monthlyLimit || 0 };
    if (task.monthlyLimit) {
      // OPPO视频：本月已打卡天数
      if (t.month !== thisMonth) return { ...task, done: false, count: 0, monthlyLimit: task.monthlyLimit };
      const count = (t.checkedDates || []).length;
      return { ...task, done: t.checkedDates.includes(today), count, monthlyLimit: task.monthlyLimit, monthDone: count >= task.monthlyLimit };
    }
    return { ...task, done: t.checked === today };
  });
}

// 切换任务完成状态
function toggleDailyTask(taskId) {
  const data = loadData();
  if (!data.dailyTasks) data.dailyTasks = {};
  const today = todayStr();
  const task = DAILY_TASKS.find(t => t.id === taskId);
  const t = data.dailyTasks[taskId] || {};

  if (task.monthlyLimit) {
    const thisMonth = today.slice(0, 7);
    if (t.month !== thisMonth) {
      // 新月重置
      data.dailyTasks[taskId] = { month: thisMonth, checkedDates: [today] };
    } else {
      const dates = t.checkedDates || [];
      const idx = dates.indexOf(today);
      if (idx >= 0) {
        dates.splice(idx, 1);
      } else {
        dates.push(today);
      }
      data.dailyTasks[taskId] = { month: thisMonth, checkedDates: dates };
    }
  } else {
    if (t.checked === today) {
      data.dailyTasks[taskId] = {};
    } else {
      data.dailyTasks[taskId] = { checked: today };
    }
  }
  saveData(data);
  return getDailyTaskStatus(data, today).find(t => t.id === taskId);
}

function renderDailyTasks(main) {
  const data = loadData();
  const today = todayStr();
  const tasks = getDailyTaskStatus(data, today);
  const doneCount = tasks.filter(t => t.done).length;
  const oppoTask = tasks.find(t => t.id === 'oppovideo');

  main.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">${ICONS.dailyTasks.replace(/currentColor/g, '#FF8A65')} 每日必做</h2>
      <p class="page-sub">今天已完成 ${doneCount}/${tasks.length} 项</p>
    </div>
    <div class="daily-tasks-list">
      ${tasks.map(task => {
        const done = task.done;
        const isOppo = task.monthlyLimit > 0;
        const monthDone = isOppo && task.monthDone;
        return `
          <div class="daily-task-card ${done ? 'done' : ''} ${monthDone ? 'month-done' : ''}">
            <div class="daily-task-head">
              <div class="daily-task-info">
                <span class="daily-task-icon">${task.icon}</span>
                <div>
                  <div class="daily-task-name">${task.name}</div>
                  ${isOppo ? `<div class="daily-task-meta">本月已打卡 <strong>${task.count}</strong>/<strong>${task.monthlyLimit}</strong> 天${monthDone ? ' ✅ 本月已完成' : ''}</div>` : ''}
                </div>
              </div>
              <button class="daily-task-check ${done ? 'checked' : ''}"
                onclick="window._toggleDailyTask('${task.id}')"
                ${monthDone ? 'disabled' : ''}>
                ${done ? '✅ 已打卡' : monthDone ? '🎉 完成' : '打卡'}
              </button>
            </div>
            <div class="daily-task-actions">
              <a class="daily-task-btn app-btn" href="${task.scheme}" target="_blank" rel="noopener">📲 打开APP</a>
              <a class="daily-task-btn web-btn" href="${task.web}" target="_blank" rel="noopener">🌐 网页版</a>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // 绑定打卡事件
  window._toggleDailyTask = function(taskId) {
    const newStatus = toggleDailyTask(taskId);
    const data = loadData();
    const tasks = getDailyTaskStatus(data, todayStr());
    const doneCount = tasks.filter(t => t.done).length;
    const oppoTask = tasks.find(t => t.id === 'oppovideo');

    // 更新打卡按钮
    const taskEl = document.querySelector(`.daily-task-card:nth-child(${DAILY_TASKS.findIndex(t => t.id === taskId) + 1})`);
    if (taskEl) {
      const btn = taskEl.querySelector('.daily-task-check');
      const card = taskEl;
      const s = newStatus;
      if (s) {
        card.classList.toggle('done', s.done);
        card.classList.toggle('month-done', s.monthDone || false);
        if (btn) {
          if (s.monthDone) {
            btn.textContent = '🎉 完成';
            btn.className = 'daily-task-check';
            btn.disabled = true;
          } else {
            btn.textContent = s.done ? '✅ 已打卡' : '打卡';
            btn.className = 'daily-task-check ' + (s.done ? 'checked' : '');
            btn.disabled = false;
          }
        }
        // 更新OPPO状态文字
        const metaEl = taskEl.querySelector('.daily-task-meta');
        if (metaEl) {
          metaEl.innerHTML = `本月已打卡 <strong>${s.count}</strong>/<strong>${s.monthlyLimit}</strong> 天${s.monthDone ? ' ✅ 本月已完成' : ''}`;
        }
      }
    }

    // 更新header计数
    const headerSub = document.querySelector('.page-sub');
    if (headerSub) headerSub.textContent = `今天已完成 ${doneCount}/${tasks.length} 项`;

    showToast('打卡成功！', 'success');
  };
}

function renderTextAnalysis(main) {
  const mode = getMode();
  
  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.textAnalysis.replace(/currentColor/g,'#4DD0E1')} 拆文</div>
      <div class="view-subtitle">深度拆解文本结构，洞察故事内核 🔍</div>
    </div>

    <!-- 模式切换 -->
    <div class="panel" style="padding:12px 20px;">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:0.9rem;color:var(--text-light);font-weight:500;">分析模式：</span>
        <div class="ta-mode-tabs" id="taModeTabs">
          <button class="ta-mode-btn active" data-mode="short">📄 拆解短篇</button>
          <button class="ta-mode-btn" data-mode="long">📚 拆解长篇</button>
        </div>
      </div>
    </div>

    <!-- 文本输入区 -->
    <div class="panel">
      <div class="panel-title">📝 粘贴文本内容</div>
      <textarea class="form-textarea ta-textarea" id="taTextInput" placeholder="将需要分析的故事/小说文本粘贴到这里...&#10;&#10;💡 提示：短篇模式适合 5000 字以内的文本，长篇模式会自动提取关键段落进行分析。"></textarea>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:12px;">
        <div style="font-size:0.8rem;color:var(--text-lighter);" id="taCharCount">已输入 0 字</div>
        <button class="btn-primary" id="taAnalyzeBtn">🔍 开始拆文分析</button>
      </div>
    </div>

    <!-- 分析结果区 -->
    <div class="panel" id="taResultsPanel" style="display:none;">
      <div class="panel-title">📊 分析结果</div>
      <div class="ta-results" id="taResults"></div>
    </div>
  `;

  let taMode = 'short';
  
  // 模式切换
  document.querySelectorAll('.ta-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ta-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      taMode = btn.dataset.mode;
      // 清除之前的结果
      const resultsPanel = document.getElementById('taResultsPanel');
      if (resultsPanel) resultsPanel.style.display = 'none';
    });
  });

  // 字数统计
  const textInput = document.getElementById('taTextInput');
  const charCount = document.getElementById('taCharCount');
  textInput.addEventListener('input', () => {
    const count = textInput.value.length;
    charCount.textContent = '已输入 ' + count + ' 字';
    charCount.style.color = count > 10000 ? 'var(--accent)' : 'var(--text-lighter)';
  });

  // 分析按钮
  document.getElementById('taAnalyzeBtn').addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) { showToast('请先粘贴文本内容哦~', 'error'); return; }
    if (text.length < 20) { showToast('文本太短了，至少需要 20 个字才能分析~', 'error'); return; }
    
    const btn = document.getElementById('taAnalyzeBtn');
    btn.disabled = true;
    btn.textContent = '⏳ 分析中...';
    
    // 使用 setTimeout 避免阻塞 UI
    setTimeout(() => {
      try {
        const result = analyzeText(text, taMode);
        renderResults(result);
        btn.disabled = false;
        btn.textContent = '🔍 开始拆文分析';
        showToast('分析完成！', 'success');
      } catch(e) {
        btn.disabled = false;
        btn.textContent = '🔍 开始拆文分析';
        showToast('分析出错：' + e.message, 'error');
      }
    }, 100);
  });
}

function renderResults(result) {
  const resultsPanel = document.getElementById('taResultsPanel');
  const resultsDiv = document.getElementById('taResults');
  resultsPanel.style.display = 'block';
  
  const sections = [
    {
      id: 'basicInfo',
      icon: '📋',
      title: '基本信息',
      content: renderBasicInfo(result.basicInfo),
    },
    {
      id: 'background',
      icon: '🌍',
      title: '故事背景',
      content: renderBackground(result.background),
    },
    {
      id: 'emotionArc',
      icon: '📈',
      title: '感情线 · 起承转合',
      content: renderEmotionArc(result.emotionArc),
    },
    {
      id: 'emotionTension',
      icon: '💫',
      title: '感情线 · 情绪拉扯',
      content: renderEmotionTension(result.emotionTension),
    },
    {
      id: 'characters',
      icon: '👤',
      title: '人物设定',
      content: renderCharacters(result.characters),
    },
    {
      id: 'worldSetting',
      icon: '🏰',
      title: '故事设定',
      content: renderWorldSetting(result.worldSetting),
    },
  ];
  
  resultsDiv.innerHTML = sections.map((s, i) => `
    <div class="ta-section">
      <div class="ta-section-header" data-section="${s.id}">
        <span class="ta-section-icon">${s.icon}</span>
        <span class="ta-section-title">${s.title}</span>
        <span class="ta-section-arrow">▼</span>
      </div>
      <div class="ta-section-body ${i === 0 ? 'ta-open' : ''}" id="taBody_${s.id}">
        ${s.content}
      </div>
    </div>
  `).join('');
  
  // 折叠/展开交互
  document.querySelectorAll('.ta-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const arrow = header.querySelector('.ta-section-arrow');
      body.classList.toggle('ta-open');
      arrow.textContent = body.classList.contains('ta-open') ? '▼' : '▶';
    });
  });
  
  // 滚动到结果区
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== 辅助渲染函数 =====
function renderTags(tags, color) {
  if (!tags || tags.length === 0) return '<span class="ta-tag ta-tag-empty">未识别</span>';
  return tags.map(t => `<span class="ta-tag" style="background:${color || '#F5F3FF'};color:${shadeColor(color || '#F5F3FF', -60)};">${t}</span>`).join('');
}

function shadeColor(hex, percent) {
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}

function renderSentences(sentences) {
  if (!sentences || sentences.length === 0 || sentences[0].includes('请提供')) {
    return '<div class="ta-empty">暂无数据，请提供更多文本内容</div>';
  }
  return sentences.map((s, i) => `<div class="ta-sentence"><span class="ta-sentence-num">${i+1}.</span> ${s}</div>`).join('');
}

function renderBasicInfo(info) {
  const emotions = info.rawEmotions || [];
  const emotionBars = emotions.slice(0, 5).map(([k, v]) => {
    const maxV = emotions[0] ? emotions[0][1] : 1;
    const pct = maxV > 0 ? Math.round((v / maxV) * 100) : 0;
    return `<div class="ta-emotion-bar"><span class="ta-emotion-label">${k}</span><div class="ta-bar-track"><div class="ta-bar-fill" style="width:${pct}%"></div></div><span class="ta-emotion-val">${v}</span></div>`;
  }).join('');
  
  return `
    <div class="ta-info-grid">
      <div class="ta-info-item">
        <div class="ta-info-label">📖 故事类型</div>
        <div class="ta-info-value">${renderTags(info.storyType, '#EDE9FE')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">🎭 角色标签</div>
        <div class="ta-info-value">${renderTags(info.roleTags, '#FADCE8')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">📌 情节标签</div>
        <div class="ta-info-value">${renderTags(info.plotTags, '#FDEBD0')}</div>
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">💭 情绪标签</div>
        <div class="ta-info-value">${renderTags(info.emotionTags, '#D5F5E3')}</div>
        ${emotionBars ? `<div class="ta-bars">${emotionBars}</div>` : ''}
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">🌌 世界观关键词</div>
        <div class="ta-info-value">${renderTags(info.worldView, '#EBDEF0')}</div>
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">💡 中心思想</div>
        <div class="ta-info-value">${renderSentences(info.centralIdea)}</div>
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">📜 故事主线</div>
        <div class="ta-info-value">${renderSentences(info.mainStoryline)}</div>
      </div>
    </div>
  `;
}

function renderBackground(bg) {
  return `
    <div class="ta-info-grid">
      <div class="ta-info-item">
        <div class="ta-info-label">⏰ 时间背景</div>
        <div class="ta-info-value">${renderTags(bg.timePeriod, '#FCF3CF')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">📍 地点设定</div>
        <div class="ta-info-value">${renderTags(bg.locations, '#D1F2EB')}</div>
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">📝 背景描述</div>
        <div class="ta-info-value">${renderSentences(bg.description)}</div>
      </div>
    </div>
  `;
}

function renderEmotionArc(arc) {
  return `
    <div class="ta-arc-grid">
      <div class="ta-arc-card ta-arc-qi">
        <div class="ta-arc-label">🌅 起</div>
        <div class="ta-arc-emotion">${arc.qi.emotion}</div>
        <div class="ta-arc-detail">${renderSentences(arc.qi.summary)}</div>
      </div>
      <div class="ta-arc-card ta-arc-cheng">
        <div class="ta-arc-label">☀️ 承</div>
        <div class="ta-arc-emotion">${arc.cheng.emotion}</div>
      </div>
      <div class="ta-arc-card ta-arc-zhuan">
        <div class="ta-arc-label">🌪️ 转</div>
        <div class="ta-arc-emotion">${arc.zhuan.emotion}</div>
        ${arc.zhuan.turningPoints && arc.zhuan.turningPoints[0] && !arc.zhuan.turningPoints[0].includes('未检测') ? 
          `<div style="margin-top:8px;"><span style="font-weight:600;font-size:0.8rem;">转折点：</span>${renderSentences(arc.zhuan.turningPoints)}</div>` : ''}
      </div>
      <div class="ta-arc-card ta-arc-he">
        <div class="ta-arc-label">🌙 合</div>
        <div class="ta-arc-emotion">${arc.he.emotion}</div>
        <div class="ta-arc-detail">${renderSentences(arc.he.summary)}</div>
      </div>
    </div>
  `;
}

function renderEmotionTension(tension) {
  const idx = tension.tensionIndex || 0;
  const barColor = idx > 40 ? '#EC7063' : idx > 20 ? '#F5B041' : '#82E0AA';
  
  let interactionsHTML = '';
  if (tension.characterInteractions && tension.characterInteractions.length > 0) {
    interactionsHTML = `
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">🔗 角色互动关系</div>
        <div class="ta-info-value">
          ${tension.characterInteractions.map(ip => `
            <div class="ta-interaction">
              <span class="ta-interaction-pair">${ip.pair}</span>
              <span class="ta-interaction-count">${ip.count} 次互动</span>
              ${ip.relations && ip.relations.length > 0 ? `<span class="ta-interaction-rel">${ip.relations.map(r => renderTags([r], '#FADCE8')).join('')}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  return `
    <div class="ta-info-grid">
      <div class="ta-info-item">
        <div class="ta-info-label">📊 情绪拉扯指数</div>
        <div class="ta-info-value">
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="ta-tension-bar" style="flex:1;">
              <div class="ta-tension-fill" style="width:${idx}%;background:${barColor};"></div>
            </div>
            <span style="font-size:1.4rem;font-weight:700;color:${barColor};">${idx}%</span>
          </div>
          <div style="font-size:0.85rem;color:var(--text-light);margin-top:6px;">${tension.tensionDescription}</div>
        </div>
      </div>
      ${interactionsHTML}
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">💔 情绪拉扯片段</div>
        <div class="ta-info-value">${renderSentences(tension.tensionSentences)}</div>
      </div>
    </div>
  `;
}

function renderCharacters(chars) {
  if (!chars.characters || chars.characters.length === 0) {
    return `<div class="ta-empty">${chars.summary || '未检测到人物信息'}</div>`;
  }
  
  return `
    <div style="margin-bottom:10px;font-size:0.85rem;color:var(--text-light);">${chars.summary}</div>
    <div class="ta-char-grid">
      ${chars.characters.map((c, i) => `
        <div class="ta-char-card ${i === 0 ? 'ta-char-main' : ''}">
          <div class="ta-char-header">
            <span class="ta-char-name">${c.name}</span>
            <span class="ta-char-gender ${c.gender === '男' ? 'ta-gender-male' : c.gender === '女' ? 'ta-gender-female' : ''}">${c.gender === '男' ? '♂' : c.gender === '女' ? '♀' : ''} ${c.gender}</span>
            ${i === 0 ? '<span class="ta-char-badge">主角候选</span>' : ''}
          </div>
          <div class="ta-char-detail">
            <div class="ta-char-row"><span class="ta-char-key">角色定位</span><span class="ta-char-val">${c.role}</span></div>
            <div class="ta-char-row"><span class="ta-char-key">身份线索</span><span class="ta-char-val">${c.identity && c.identity.length > 0 && c.identity[0] !== '（请提供更多内容）' ? c.identity.slice(0, 2).join('；') : '未识别'}</span></div>
            <div class="ta-char-row"><span class="ta-char-key">目标动机</span><span class="ta-char-val">${c.goals && c.goals.length > 0 && !c.goals[0].includes('未检测') ? c.goals.join('；') : '未识别'}</span></div>
            <div class="ta-char-row"><span class="ta-char-key">提及次数</span><span class="ta-char-val">${c.mentionCount} 次</span></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderWorldSetting(ws) {
  return `
    <div class="ta-info-grid">
      <div class="ta-info-item">
        <div class="ta-info-label">🌏 地理设定</div>
        <div class="ta-info-value">${renderTags(ws.geography, '#D1F2EB')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">🧝 种族设定</div>
        <div class="ta-info-value">${renderTags(ws.races, '#EBDEF0')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">⚡ 力量体系</div>
        <div class="ta-info-value">${renderTags(ws.powerSystem, '#FDEBD0')}</div>
      </div>
      <div class="ta-info-item">
        <div class="ta-info-label">🕰️ 时间设定</div>
        <div class="ta-info-value">${renderTags(ws.timeSetting, '#FCF3CF')}</div>
      </div>
      <div class="ta-info-item" style="grid-column:1/-1;">
        <div class="ta-info-label">📖 世界观描述</div>
        <div class="ta-info-value">${renderSentences(ws.worldDescription)}</div>
      </div>
    </div>
  `;
}

// ===== 运动打卡 =====
function renderExercise(main) {
  const records = getDisplayRecords('exercise');
  const allRecords = getRecords('exercise');
  const mode = getMode();

  const totalMin = allRecords.reduce((s,r) => s + (r.duration || 0), 0);
  const totalTimes = allRecords.length;
  const todayMin = records.reduce((s,r) => s + (r.duration || 0), 0);

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.exercise.replace(/currentColor/g,'#F5B041')} 运动打卡</div>
      <div class="view-subtitle">动起来，让身体成为梦想最坚实的容器 💪</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#F5B041">${todayMin}</div><div class="stat-label">今日运动(分钟)</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${totalTimes}</div><div class="stat-label">累计次数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${totalMin}</div><div class="stat-label">累计分钟</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">🏃 记录运动</div>
      <div class="form-grid">
        <div class="form-row">
          <div class="form-label">运动类型</div>
          <select class="form-select" id="exType">${EXERCISE_TYPES.map(t => `<option>${t}</option>`).join('')}</select>
        </div>
        <div class="form-row">
          <div class="form-label">运动时长（分钟）</div>
          <input class="form-input" id="exDuration" type="number" min="1" placeholder="如 30">
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">运动感受（选填）</div>
        <input class="form-input" id="exNote" placeholder="今天的状态如何？">
      </div>
      <button class="btn-primary" id="exSave">${ICONS.check} 打卡运动</button>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}运动记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#FDEBD0;color:#CA6F1E;">${ICONS.exercise.replace(/currentColor/g,'#CA6F1E')}</div>
          <div class="record-body">
            <div class="record-title">${r.type} · ${r.duration}分钟</div>
            ${r.note ? `<div class="record-desc">${r.note}</div>` : ''}
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delExercise('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '今天还没有运动记录，动起来吧~')}
    </div>
  `;

  document.getElementById('exSave').addEventListener('click', () => {
    const duration = parseInt(document.getElementById('exDuration').value);
    if (!duration || duration < 1) { showToast('请输入运动时长~', 'error'); return; }
    addRecord('exercise', {
      type: document.getElementById('exType').value,
      duration,
      note: document.getElementById('exNote').value.trim(),
      time: nowTimeStr(),
    });
    showToast('运动打卡成功！🔥', 'success');
    renderView('exercise');
  });
}

window.delExercise = function(id) { deleteRecord('exercise', id); showToast('已删除'); renderView('exercise'); };

// ===== 阅读时光 =====
function renderReading(main) {
  const records = getDisplayRecords('reading');
  const allRecords = getRecords('reading');
  const mode = getMode();

  const totalPages = allRecords.reduce((s,r) => s + (r.pages || 0), 0);
  const totalSessions = allRecords.length;
  const books = new Set(allRecords.map(r => r.book).filter(Boolean));

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.reading.replace(/currentColor/g,'#A78BFA')} 阅读时光</div>
      <div class="view-subtitle">阅读是灵魂的远行，每一页都是新的风景 📚</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${totalSessions}</div><div class="stat-label">阅读次数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#F5B041">${totalPages}</div><div class="stat-label">累计页数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${books.size}</div><div class="stat-label">阅读书目</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">📖 记录阅读</div>
      <div class="form-grid">
        <div class="form-row">
          <div class="form-label">书名</div>
          <input class="form-input" id="rdBook" placeholder="如《教育的使命与责任》">
        </div>
        <div class="form-row">
          <div class="form-label">阅读页数</div>
          <input class="form-input" id="rdPages" type="number" min="1" placeholder="如 20">
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">摘抄或感悟（选填）</div>
        <textarea class="form-textarea" id="rdNote" placeholder="今天读到的精彩片段或你的感悟..."></textarea>
      </div>
      <button class="btn-primary" id="rdSave">${ICONS.check} 保存阅读</button>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}阅读记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#EDE9FE;color:#6D28D9;">${ICONS.reading.replace(/currentColor/g,'#6D28D9')}</div>
          <div class="record-body">
            <div class="record-title">《${r.book || '未知书目'}》 · ${r.pages}页</div>
            ${r.note ? `<div class="record-desc">${r.note}</div>` : ''}
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delReading('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有阅读记录，翻开一本书开始吧~')}
    </div>
  `;

  document.getElementById('rdSave').addEventListener('click', () => {
    const book = document.getElementById('rdBook').value.trim();
    const pages = parseInt(document.getElementById('rdPages').value);
    if (!book) { showToast('请输入书名~', 'error'); return; }
    if (!pages || pages < 1) { showToast('请输入阅读页数~', 'error'); return; }
    addRecord('reading', {
      book, pages,
      note: document.getElementById('rdNote').value.trim(),
      time: nowTimeStr(),
    });
    showToast('阅读已记录 📖', 'success');
    renderView('reading');
  });
}

window.delReading = function(id) { deleteRecord('reading', id); showToast('已删除'); renderView('reading'); };

// ===== 技能学习 =====

// ===== 冥想放松 =====
let meditationTimer = null;
let meditationInterval = null;
let breathInterval = null;
let meditationSeconds = 0;
let meditationDuration = 0;

function renderMeditation(main) {
  const records = getDisplayRecords('meditation');
  const allRecords = getRecords('meditation');
  const mode = getMode();

  const totalMin = Math.round(allRecords.reduce((s,r) => s + (r.duration || 0), 0) / 60);
  const totalSessions = allRecords.length;

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.meditation.replace(/currentColor/g,'#C39BD3')} 冥想放松</div>
      <div class="view-subtitle">每一次深呼吸，都是给心灵的一次温柔拥抱 🧘</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#C39BD3">${totalSessions}</div><div class="stat-label">累计冥想次数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A569BD">${totalMin}</div><div class="stat-label">累计冥想(分钟)</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${records.length}</div><div class="stat-label">${mode==='daily'?'今日':'当前'}冥想</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">🧘 冥想引导</div>
      <div class="meditation-area">
        <div class="breath-circle" id="breathCircle">
          <span class="breath-text" id="breathText">准备就绪</span>
        </div>
        <div class="meditation-timer" id="medTimer">00:00</div>
        <div class="meditation-presets" id="medPresets">
          <button class="preset-btn active" data-min="5">5 分钟</button>
          <button class="preset-btn" data-min="10">10 分钟</button>
          <button class="preset-btn" data-min="15">15 分钟</button>
          <button class="preset-btn" data-min="20">20 分钟</button>
        </div>
        <div style="display:flex;gap:12px;margin-top:20px;">
          <button class="btn-primary" id="medStart">${ICONS.check} 开始冥想</button>
          <button class="btn-soft" id="medStop" style="display:none;">停止</button>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}冥想记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#EBDEF0;color:#7D3C98;">${ICONS.meditation.replace(/currentColor/g,'#7D3C98')}</div>
          <div class="record-body">
            <div class="record-title">冥想 ${r.duration} 秒（约${Math.round(r.duration/60)}分钟）</div>
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delMeditation('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有冥想记录，闭上眼，深呼吸，开始吧~')}
    </div>
  `;

  meditationDuration = 5;
  document.querySelectorAll('.preset-btn').forEach(el => {
    el.addEventListener('click', () => {
      if (meditationInterval) return;
      document.querySelectorAll('.preset-btn').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
      meditationDuration = +el.dataset.min;
    });
  });

  document.getElementById('medStart').addEventListener('click', startMeditation);
  document.getElementById('medStop').addEventListener('click', stopMeditation);
}

function startMeditation() {
  meditationSeconds = 0;
  const target = meditationDuration * 60;
  document.getElementById('medStart').style.display = 'none';
  document.getElementById('medStop').style.display = 'inline-flex';
  document.querySelectorAll('.preset-btn').forEach(e => e.style.pointerEvents = 'none');

  // 呼吸引导
  let breathPhase = 0;
  const breathPhases = [
    { text: '吸气...', cls: 'inhale' },
    { text: '屏住...', cls: '' },
    { text: '呼气...', cls: 'exhale' },
    { text: '放松...', cls: '' },
  ];
  const circle = document.getElementById('breathCircle');
  const breathText = document.getElementById('breathText');
  let bp = 0;
  function doBreath() {
    const phase = breathPhases[bp % 4];
    breathText.textContent = phase.text;
    circle.classList.remove('inhale', 'exhale');
    if (phase.cls) circle.classList.add(phase.cls);
    bp++;
  }
  doBreath();
  breathInterval = setInterval(doBreath, 4000);

  // 计时
  meditationInterval = setInterval(() => {
    meditationSeconds++;
    const mm = String(Math.floor(meditationSeconds / 60)).padStart(2, '0');
    const ss = String(meditationSeconds % 60).padStart(2, '0');
    document.getElementById('medTimer').textContent = `${mm}:${ss}`;
    if (meditationSeconds >= target) {
      stopMeditation(true);
    }
  }, 1000);
}

function stopMeditation(completed) {
  clearInterval(meditationInterval);
  clearInterval(breathInterval);
  meditationInterval = null;
  breathInterval = null;

  const circle = document.getElementById('breathCircle');
  const breathText = document.getElementById('breathText');
  if (circle) { circle.classList.remove('inhale','exhale'); }
  if (breathText) { breathText.textContent = completed ? '完成 🌿' : '已停止'; }

  const startBtn = document.getElementById('medStart');
  const stopBtn = document.getElementById('medStop');
  if (startBtn) startBtn.style.display = 'inline-flex';
  if (stopBtn) stopBtn.style.display = 'none';
  document.querySelectorAll('.preset-btn').forEach(e => e.style.pointerEvents = '');

  if (meditationSeconds >= 10) {
    addRecord('meditation', { duration: meditationSeconds, time: nowTimeStr() });
    showToast(completed ? `冥想完成！${Math.round(meditationSeconds/60)}分钟，棒极了 🧘` : '冥想已记录 🌿', 'success');
    setTimeout(() => renderView('meditation'), 800);
  } else if (meditationSeconds > 0) {
    showToast('冥想时间太短，未记录', 'error');
  }
}

window.delMeditation = function(id) { deleteRecord('meditation', id); showToast('已删除'); renderView('meditation'); };

// ===== 饮食记录 =====
function renderDiet(main) {
  const records = getDisplayRecords('diet');
  const allRecords = getRecords('diet');
  const mode = getMode();
  const today = todayStr();
  const data = loadData();
  const waterCups = (data.records.water && data.records.water[today]) || 0;

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.diet.replace(/currentColor/g,'#82E0AA')} 饮食记录</div>
      <div class="view-subtitle">好好吃饭，是对身体最温柔的关爱 🍎</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${records.length}</div><div class="stat-label">${mode==='daily'?'今日':'当前'}餐次</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${waterCups}<span style="font-size:0.9rem;">/8</span></div><div class="stat-label">今日饮水</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#F5B041">${allRecords.length}</div><div class="stat-label">累计记录</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">🥗 记录饮食</div>
      <div class="form-row">
        <div class="form-label">餐次</div>
        <div class="tag-group" id="dtMeal">
          ${MEAL_TYPES.map((m,i) => `<div class="tag-chip ${i===0?'selected':''}" data-val="${m.label}">${m.icon} ${m.label}</div>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">吃了什么？（用逗号分隔）</div>
        <input class="form-input" id="dtItems" placeholder="如：小米粥, 鸡蛋, 全麦面包">
      </div>
      <div class="form-row">
        <div class="form-label">健康指数</div>
        <div class="rating-stars" id="dtHealth">
          ${[1,2,3,4,5].map(i => `<span class="star-btn" data-val="${i}">★</span>`).join('')}
        </div>
      </div>
      <button class="btn-primary" id="dtSave">${ICONS.check} 保存记录</button>
    </div>

    <div class="panel">
      <div class="panel-title">💧 饮水打卡</div>
      <div class="water-tracker">
        <div class="water-cups" id="waterCups">
          ${[1,2,3,4,5,6,7,8].map(i => `<div class="water-cup ${i<=waterCups?'filled':''}" data-cup="${i}"></div>`).join('')}
        </div>
        <span style="font-size:0.85rem;color:var(--text-light);">点击杯子记录饮水</span>
      </div>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}饮食记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#D5F5E3;color:#27AE60;">${ICONS.diet.replace(/currentColor/g,'#27AE60')}</div>
          <div class="record-body">
            <div class="record-title">${r.meal} ${'★'.repeat(r.healthiness||3)}${'☆'.repeat(5-(r.healthiness||3))}</div>
            <div class="record-desc">${r.items}</div>
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delDiet('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有饮食记录，记录今天的第一餐吧~')}
    </div>
  `;

  let selectedMeal = MEAL_TYPES[0].label;
  document.querySelectorAll('#dtMeal .tag-chip').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#dtMeal .tag-chip').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      selectedMeal = el.dataset.val;
    });
  });

  let healthRating = 3;
  const stars = document.querySelectorAll('#dtHealth .star-btn');
  stars.forEach((el, idx) => {
    if (idx < 3) el.classList.add('active');
    el.addEventListener('click', () => {
      healthRating = +el.dataset.val;
      stars.forEach((s, i) => s.classList.toggle('active', i < healthRating));
    });
  });

  document.getElementById('dtSave').addEventListener('click', () => {
    const items = document.getElementById('dtItems').value.trim();
    if (!items) { showToast('请输入吃了什么~', 'error'); return; }
    addRecord('diet', { meal: selectedMeal, items, healthiness: healthRating, time: nowTimeStr() });
    showToast('饮食已记录 🍎', 'success');
    renderView('diet');
  });

  // 饮水打卡
  document.querySelectorAll('.water-cup').forEach(el => {
    el.addEventListener('click', () => {
      const cupNum = +el.dataset.cup;
      const d = loadData();
      if (!d.records.water) d.records.water = {};
      d.records.water[today] = cupNum;
      saveData(d);
      renderView('diet');
    });
  });
}

window.delDiet = function(id) { deleteRecord('diet', id); showToast('已删除'); renderView('diet'); };

// ===== 技能学习 =====
function renderSkill(main) {
  const records = getDisplayRecords('skill');
  const allRecords = getRecords('skill');
  const mode = getMode();

  const totalMin = allRecords.reduce((s,r) => s + (r.minutes || 0), 0);
  const skills = new Set(allRecords.map(r => r.name).filter(Boolean));

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.skill.replace(/currentColor/g,'#F1C40F')} 技能学习</div>
      <div class="view-subtitle">持续学习，是最好的示范 ✨</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#F1C40F">${allRecords.length}</div><div class="stat-label">学习次数</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${totalMin}</div><div class="stat-label">累计分钟</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${skills.size}</div><div class="stat-label">学习技能</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">💡 记录学习</div>
      <div class="form-row">
        <div class="form-label">学习内容</div>
        <input class="form-input" id="skName" placeholder="如：PPT动画进阶技巧">
      </div>
      <div class="form-row">
        <div class="form-label">分类</div>
        <div class="tag-group" id="skCategory">
          ${SKILL_CATEGORIES.map((c,i) => `<div class="tag-chip ${i===0?'selected':''}" data-val="${c}">${c}</div>`).join('')}
        </div>
      </div>
      <div class="form-grid">
        <div class="form-row">
          <div class="form-label">学习时长（分钟）</div>
          <input class="form-input" id="skMin" type="number" min="1" placeholder="如 30">
        </div>
        <div class="form-row">
          <div class="form-label">完成进度（%）</div>
          <input class="form-input" id="skProgress" type="number" min="0" max="100" placeholder="如 50">
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">学习笔记（选填）</div>
        <textarea class="form-textarea" id="skNote" placeholder="今天学到了什么关键点？"></textarea>
      </div>
      <button class="btn-primary" id="skSave">${ICONS.check} 保存学习</button>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}学习记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#FCF3CF;color:#B7950B;">${ICONS.skill.replace(/currentColor/g,'#B7950B')}</div>
          <div class="record-body">
            <div class="record-title">${r.name} · ${r.category} · ${r.minutes}分钟</div>
            ${r.progress ? `<div class="progress-bar"><div class="progress-fill" style="width:${r.progress}%"></div></div>` : ''}
            ${r.note ? `<div class="record-desc" style="margin-top:4px;">${r.note}</div>` : ''}
            <div class="record-meta">${r.progress ? '进度' + r.progress + '% · ' : ''}${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delSkill('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有学习记录，从一个小技能开始吧~')}
    </div>
  `;

  let selectedCat = SKILL_CATEGORIES[0];
  document.querySelectorAll('#skCategory .tag-chip').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#skCategory .tag-chip').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      selectedCat = el.dataset.val;
    });
  });

  document.getElementById('skSave').addEventListener('click', () => {
    const name = document.getElementById('skName').value.trim();
    const minutes = parseInt(document.getElementById('skMin').value);
    if (!name) { showToast('请输入学习内容~', 'error'); return; }
    if (!minutes || minutes < 1) { showToast('请输入学习时长~', 'error'); return; }
    const progress = parseInt(document.getElementById('skProgress').value) || 0;
    addRecord('skill', {
      name, category: selectedCat, minutes,
      progress,
      note: document.getElementById('skNote').value.trim(),
      time: nowTimeStr(),
    });
    showToast('学习已记录 💡', 'success');
    renderView('skill');
  });
}

window.delSkill = function(id) { deleteRecord('skill', id); showToast('已删除'); renderView('skill'); };

// ===== 睡眠管理 =====
function renderSleep(main) {
  const records = getDisplayRecords('sleep');
  const allRecords = getRecords('sleep');
  const mode = getMode();

  const avgQuality = allRecords.length > 0
    ? (allRecords.reduce((s,r) => s + (r.quality || 3), 0) / allRecords.length).toFixed(1)
    : '—';

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.sleep.replace(/currentColor/g,'#5D6D7E')} 睡眠管理</div>
      <div class="view-subtitle">好的睡眠是最好的护肤品，也是最好的教育准备 🌙</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#5D6D7E">${allRecords.length}</div><div class="stat-label">累计记录</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${avgQuality}</div><div class="stat-label">平均睡眠质量</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${records.length}</div><div class="stat-label">${mode==='daily'?'今日':'当前'}记录</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">😴 记录睡眠</div>
      <div class="form-grid">
        <div class="form-row">
          <div class="form-label">入睡时间</div>
          <input class="form-input" id="slBedtime" type="time" value="23:00">
        </div>
        <div class="form-row">
          <div class="form-label">起床时间</div>
          <input class="form-input" id="slWaketime" type="time" value="07:00">
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">睡眠质量</div>
        <div class="rating-stars" id="slQuality">
          ${[1,2,3,4,5].map(i => `<span class="star-btn ${i<=3?'active':''}" data-val="${i}">★</span>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">备注（选填）</div>
        <input class="form-input" id="slNote" placeholder="如：做梦了/睡得很沉/中途醒了">
      </div>
      <button class="btn-primary" id="slSave">${ICONS.check} 保存睡眠</button>
    </div>

    <div class="panel">
      <div class="panel-title">📋 ${mode === 'daily' ? '今日' : '全部'}睡眠记录</div>
      ${renderRecordList(records, r => `
        <div class="record-item">
          <div class="record-icon" style="background:#D5D8DC;color:#5D6D7E;">${ICONS.sleep.replace(/currentColor/g,'#5D6D7E')}</div>
          <div class="record-body">
            <div class="record-title">${r.bedtime} → ${r.waketime} ${'★'.repeat(r.quality||3)}${'☆'.repeat(5-(r.quality||3))}</div>
            ${r.note ? `<div class="record-desc">${r.note}</div>` : ''}
            <div class="record-meta">${formatDateCN(r.date)} ${r.time || ''}</div>
          </div>
          <div class="record-actions">
            <button class="btn-danger" onclick="delSleep('${r.id}')">${ICONS.trash}</button>
          </div>
        </div>
      `, '还没有睡眠记录，记录昨晚的睡眠吧~')}
    </div>
  `;

  let quality = 3;
  const stars = document.querySelectorAll('#slQuality .star-btn');
  stars.forEach(el => {
    el.addEventListener('click', () => {
      quality = +el.dataset.val;
      stars.forEach((s, i) => s.classList.toggle('active', i < quality));
    });
  });

  document.getElementById('slSave').addEventListener('click', () => {
    addRecord('sleep', {
      bedtime: document.getElementById('slBedtime').value,
      waketime: document.getElementById('slWaketime').value,
      quality,
      note: document.getElementById('slNote').value.trim(),
      time: nowTimeStr(),
    });
    showToast('睡眠已记录 😴', 'success');
    renderView('sleep');
  });
}

window.delSleep = function(id) { deleteRecord('sleep', id); showToast('已删除'); renderView('sleep'); };

// ===== 灵感收集 =====
function renderInspiration(main) {
  const records = getDisplayRecords('inspiration');
  const allRecords = getRecords('inspiration');
  const mode = getMode();

  const inspirationTags = ['教学灵感', '生活感悟', '创意点子', '读书摘录', '课堂金句', '其他'];

  main.innerHTML = `
    <div class="view-header">
      <div class="view-title">${ICONS.inspiration.replace(/currentColor/g,'#A569BD')} 灵感收集</div>
      <div class="view-subtitle">每一个灵感都是种子，记录下来，终会开花 ✨</div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><div class="stat-num" style="color:#A569BD">${allRecords.length}</div><div class="stat-label">累计灵感</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#A78BFA">${new Set(allRecords.map(r=>r.tag)).size}</div><div class="stat-label">灵感分类</div></div>
      <div class="stat-card"><div class="stat-num" style="color:#82E0AA">${records.length}</div><div class="stat-label">${mode==='daily'?'今日':'当前'}灵感</div></div>
    </div>

    <div class="panel">
      <div class="panel-title">✨ 快速记录灵感</div>
      <div class="form-row">
        <div class="form-label">灵感内容</div>
        <textarea class="form-textarea" id="inText" placeholder="闪过脑海的想法、看到的金句、突然的感悟..." style="min-height:70px;"></textarea>
      </div>
      <div class="form-row">
        <div class="form-label">分类</div>
        <div class="tag-group" id="inTag">
          ${inspirationTags.map((t,i) => `<div class="tag-chip ${i===0?'selected':''}" data-val="${t}">${t}</div>`).join('')}
        </div>
      </div>
      <button class="btn-primary" id="inSave">${ICONS.check} 收集灵感</button>
    </div>

    <div class="panel">
      <div class="panel-title">🌸 ${mode === 'daily' ? '今日' : '全部'}灵感墙</div>
      ${records.length === 0
        ? `<div class="empty-state"><svg viewBox="0 0 64 64" width="56" height="56"><circle cx="32" cy="32" r="28" fill="#F5EEF8"/><path d="M32 16 L34 28 L46 30 L36 38 L38 50 L32 44 L26 50 L28 38 L18 30 L30 28 Z" fill="#D2B4DE"/></svg><p>灵感墙还是空的，捕捉第一个灵感吧~</p></div>`
        : `<div class="inspiration-wall">
            ${records.map((r, i) => {
              const color = INSPIRATION_COLORS[i % INSPIRATION_COLORS.length];
              return `
                <div class="inspiration-card" style="background:${color.bg};color:${color.text};">
                  <button class="inspiration-del" onclick="delInspiration('${r.id}')">✕</button>
                  <div class="inspiration-text">${r.text}</div>
                  <div class="inspiration-tag" style="color:${color.tag};">#${r.tag} · ${r.date.slice(5)}</div>
                </div>
              `;
            }).join('')}
          </div>`
      }
    </div>
  `;

  let selectedTag = inspirationTags[0];
  document.querySelectorAll('#inTag .tag-chip').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('#inTag .tag-chip').forEach(e => e.classList.remove('selected'));
      el.classList.add('selected');
      selectedTag = el.dataset.val;
    });
  });

  document.getElementById('inSave').addEventListener('click', () => {
    const text = document.getElementById('inText').value.trim();
    if (!text) { showToast('请输入灵感内容~', 'error'); return; }
    addRecord('inspiration', { text, tag: selectedTag, time: nowTimeStr() });
    showToast('灵感已收集 ✨', 'success');
    renderView('inspiration');
  });
}

window.delInspiration = function(id) { deleteRecord('inspiration', id); showToast('已删除'); renderView('inspiration'); };

// ===== 实时时钟 =====
function updateClock() {
  const clockEl = document.getElementById('liveClock');
  const dateEl = document.getElementById('liveDate');
  if (clockEl) {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s}`;
  }
  if (dateEl) {
    dateEl.textContent = formatDateCN(todayStr());
  }
}

// ===== 连续打卡更新 =====
function updateStreak() {
  const data = loadData();
  let streak = 0;
  let checkDate = new Date();
  while (true) {
    const ds = `${checkDate.getFullYear()}-${String(checkDate.getMonth()+1).padStart(2,'0')}-${String(checkDate.getDate()).padStart(2,'0')}`;
    if (data.checkins[ds]) { streak++; checkDate.setDate(checkDate.getDate() - 1); }
    else break;
  }
  const el = document.getElementById('streakCount');
  if (el) el.textContent = streak;
  const mEl = document.getElementById('mobileStreakCount');
  if (mEl) mEl.textContent = streak;
}

// ===== 导航渲染 =====
function renderNav() {
  // 侧栏导航
  const navList = document.getElementById('navList');
  navList.innerHTML = MENUS.map(m => `
    <li class="nav-item ${m.id === currentView ? 'active' : ''}" data-view="${m.id}">
      <span class="nav-icon">${m.icon.replace(/currentColor/g, m.id===currentView ? '#fff' : m.color)}</span>
      <span class="nav-label">${m.label}</span>
    </li>
  `).join('');

  navList.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      if (meditationInterval) stopMeditation(false);
      navigate(el.dataset.view);
      // 移动端：点击菜单后关闭侧栏
      closeSidebar();
    });
  });
}

// ===== 侧栏显示/隐藏（移��端抽屉）=====
function openSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  sidebar.classList.add('open');
  backdrop.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  sidebar.classList.remove('open');
  backdrop.classList.remove('show');
  document.body.style.overflow = '';
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function initSidebarToggle() {
  const hamburger = document.getElementById('hamburgerBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const backdrop = document.getElementById('sidebarBackdrop');

  if (hamburger) hamburger.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);
}

// ===== 模式切换 =====
function initModeToggle() {
  const mode = getMode();
  // 桌面和移动端模式切换
  document.querySelectorAll('.mode-toggle').forEach(toggle => {
    const btns = toggle.querySelectorAll('.mode-btn');
    btns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
      btn.addEventListener('click', () => {
        // 同步所有同data-mode的按钮
        document.querySelectorAll('.mode-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.mode === btn.dataset.mode);
        });
        setMode(btn.dataset.mode);
        showToast(`已切换到「${btn.dataset.mode === 'daily' ? '每日重置' : '累积记录'}」模式`, 'success');
        renderView(currentView);
      });
    });
  });
}

// ===== 初始化 =====
function init() {
  renderNav();
  initModeToggle();
  initSidebarToggle();
  updateStreak();
  // 预加载新闻（不阻塞界面渲染）
  fetchNews();
  navigate('home');
  setInterval(updateClock, 1000);
  updateClock();
}

document.addEventListener('DOMContentLoaded', init);
