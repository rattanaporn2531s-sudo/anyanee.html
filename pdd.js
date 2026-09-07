const disasterModels = [
  {
    id: "earthquake",
    name: "Earthquake",
    icon: "🌍",
    category: "Natural",
    severity: "Critical",
    description: "แผ่นดินไหวที่ทำให้พื้นดินสั่นสะเทือนและเกิดความเสียหายต่ออาคาร",
    color: "#ef4444",
    action: "หลบใต้โต๊ะ/ที่กำบังและหลีกเลี่ยงพื้นที่สูง"
  },
  {
    id: "tsunami",
    name: "Tsunami",
    icon: "🌊",
    category: "Natural",
    severity: "Critical",
    description: "คลื่นยักษ์ที่เกิดจากแผ่นดินไหวใต้ทะเลหรือภูเขาไฟระเบิด",
    color: "#3b82f6",
    action: "อพยพขึ้นที่สูงทันทีและหลีกเลี่ยงชายฝั่ง"
  },
  {
    id: "typhoon",
    name: "Typhoon",
    icon: "🌀",
    category: "Weather",
    severity: "High",
    description: "พายุหมุนเขตร้อนที่มีลมแรงและฝนตกหนัก",
    color: "#8b5cf6",
    action: "ปิดประตูหน้าต่างและเตรียมความพร้อมรับมือลมแรง"
  },
  {
    id: "fire",
    name: "Fire",
    icon: "🔥",
    category: "Urban",
    severity: "High",
    description: "เพลิงไหม้ที่อาจลุกลามอย่างรวดเร็ว",
    color: "#f97316",
    action: "แจ้งหน่วยดับเพลิงและเคลื่อนย้ายออกจากพื้นที่"
  },
  {
    id: "hurricane",
    name: "Hurricane",
    icon: "🌀",
    category: "Weather",
    severity: "Critical",
    description: "พายุหมุนขนาดใหญ่ที่มาพร้อมลมแรงและน้ำท่วม",
    color: "#7c3aed",
    action: "อพยพไปสู่ที่ปลอดภัยและหลีกเลี่ยงพื้นที่ลุ่ม"
  },
  {
    id: "flash-flood",
    name: "Flash Flood",
    icon: "🌧️",
    category: "Weather",
    severity: "High",
    description: "น้ำท่วมฉับพลันหลังฝนตกหนักหรือแม่น้ำล้น",
    color: "#06b6d4",
    action: "เลี่ยงถนนลุ่มและเคลื่อนย้ายขึ้นที่สูง"
  },
  {
    id: "volcanic",
    name: "Volcanic Eruption",
    icon: "🌋",
    category: "Natural",
    severity: "Critical",
    description: "ภูเขาไฟระเบิดปล่อยเถ้าถ่านและลาวา",
    color: "#eab308",
    action: "ออกจากพื้นที่รอบภูเขาไฟและสวมหน้ากากป้องกันเถ้าภูเขาไฟ"
  },
  {
    id: "lightning",
    name: "Lightning",
    icon: "⚡",
    category: "Weather",
    severity: "Medium",
    description: "ฟ้าผ่าอันตรายจากพายุฝนฟ้าคะนอง",
    color: "#facc15",
    action: "หลีกเลี่ยงพื้นที่โล่งและไม่อยู่ใกล้เสาไฟ"
  },
  {
    id: "tornado",
    name: "Tornado",
    icon: "🌪️",
    category: "Weather",
    severity: "Critical",
    description: "พายุหมุนดินฟ้าอากาศอย่างรุนแรง",
    color: "#a855f7",
    action: "เข้าห้องใต้ดินหรือพื้นที่ปลอดภัยภายในอาคาร"
  },
  {
    id: "nuclear",
    name: "Nuclear",
    icon: "☢️",
    category: "Hazard",
    severity: "Critical",
    description: "อันตรายจากสารกัมมันตรังสีหรืออุบัติเหตุโรงไฟฟ้านิวเคลียร์",
    color: "#22c55e",
    action: "ปิดประตูหน้าต่างและหลีกเลี่ยงการสัมผัสสารกัมมันตรังสี"
  },
  {
    id: "pandemic",
    name: "Pandemic",
    icon: "🦠",
    category: "Health",
    severity: "High",
    description: "การระบาดของโรคติดต่อในประชากรจำนวนมาก",
    color: "#10b981",
    action: "ปฏิบัติตามมาตรการสุขอนามัยและเว้นระยะห่าง"
  },
  {
    id: "landslide",
    name: "Landslide",
    icon: "⛰️",
    category: "Natural",
    severity: "High",
    description: "ดินและหินไหลลงจากภูเขาหรือเนินเขา",
    color: "#94a3b8",
    action: "หลีกเลี่ยงพื้นที่ลาดชันและอพยพออกจากบริเวณเสี่ยง"
  },
  {
    id: "heatwave",
    name: "Heatwave",
    icon: "☀️",
    category: "Climate",
    severity: "Medium",
    description: "อากาศร้อนจัดเป็นเวลานานอาจก่อให้เกิดอันตรายต่อสุขภาพ",
    color: "#f59e0b",
    action: "ดื่มน้ำและหลีกเลี่ยงการทำงานกลางแดด"
  },
  {
    id: "chemical",
    name: "Chemical Hazard",
    icon: "🧪",
    category: "Industrial",
    severity: "Critical",
    description: "สารเคมีอันตรายรั่วไหลหรือเกิดการระเบิด",
    color: "#ef4444",
    action: "หลีกเลี่ยงการสัมผัสและปฏิบัติตามคำแนะนำจากเจ้าหน้าที่"
  }
];

function renderDisasterList(targetId = "disaster-list") {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = disasterModels
    .map(
      (item) => `
        <div class="disaster-card" style="--card-color:${item.color}">
          <div class="disaster-icon">${item.icon}</div>
          <div class="disaster-body">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="meta">
              <span class="badge">${item.category}</span>
              <span class="severity">${item.severity}</span>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

export { disasterModels, renderDisasterList };