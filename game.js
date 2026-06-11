const USE_UI_AS_IMAGE = true;

const ASSETS = {
  mici: "Assest/characters/Mici/Mici-normalized.png",
  lobby: {
    adventure: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_35 PM (1).png",
    chapters: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_36 PM (2).png",
    inventory: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_36 PM (4).png",
    formation: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_37 PM (5).png",
    skills: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_37 PM (6).png",
    guild: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_37 PM (7).png",
    events: "Assest/ui/ChatGPT Image Jun 10, 2026, 12_17_42 PM (8).png"
  },
 backgrounds: [
  "Assest/ui background/Hồi 0.png",
  "Assest/ui background/Hồi 1.png",
  "Assest/ui background/Hồi 2.png",
  "Assest/ui background/Hồi 3.png",
  "Assest/ui background/Hồi 4.png",
  "Assest/ui background/Hồi 5.png"
],
  enemies: {
    0: [
      "Assest/quai/Hồi 0/0/ChatGPT Image Jun 6, 2026, 06_10_08 PM (1)-sprite.png",
      "Assest/quai/Hồi 0/0/ChatGPT Image Jun 6, 2026, 06_10_08 PM (2)-sprite.png",
      "Assest/quai/Hồi 0/0/ChatGPT Image Jun 6, 2026, 06_10_08 PM (3)-sprite.png",
      "Assest/quai/Hồi 0/0/ChatGPT Image Jun 6, 2026, 06_10_08 PM (4)-sprite.png"
    ],
    1: [
      "Assest/quai/Hồi 1/1/ChatGPT Image Jun 6, 2026, 06_47_14 PM (1)-sprite.png",
      "Assest/quai/Hồi 1/1/ChatGPT Image Jun 6, 2026, 06_47_14 PM (2)-sprite.png",
      "Assest/quai/Hồi 1/1/ChatGPT Image Jun 6, 2026, 06_47_15 PM (3)-sprite.png",
      "Assest/quai/Hồi 1/1/ChatGPT Image Jun 6, 2026, 06_47_20 PM (2)-sprite.png"
    ],
    2: [
      "Assest/quai/Hồi 2/2/ChatGPT Image Jun 6, 2026, 06_47_43 PM (1)-sprite.png",
      "Assest/quai/Hồi 2/2/ChatGPT Image Jun 6, 2026, 06_47_43 PM (2)-sprite.png",
      "Assest/quai/Hồi 2/2/ChatGPT Image Jun 6, 2026, 06_47_44 PM (3)-sprite.png",
      "Assest/quai/Hồi 2/2/ChatGPT Image Jun 6, 2026, 06_47_44 PM (5)-sprite.png"
    ],
    3: [
      "Assest/quai/Hồi 3/3/ChatGPT Image Jun 6, 2026, 06_48_14 PM (1)-sprite.png",
      "Assest/quai/Hồi 3/3/ChatGPT Image Jun 6, 2026, 06_48_16 PM (2)-sprite.png",
      "Assest/quai/Hồi 3/3/ChatGPT Image Jun 6, 2026, 06_48_17 PM (3)-sprite.png",
      "Assest/quai/Hồi 3/3/ChatGPT Image Jun 6, 2026, 06_48_21 PM (5)-sprite.png"
    ],
    4: [
      "Assest/quai/Hồi 4/4/ChatGPT Image Jun 6, 2026, 06_48_28 PM (1)-sprite.png",
      "Assest/quai/Hồi 4/4/ChatGPT Image Jun 6, 2026, 06_48_29 PM (2)-sprite.png",
      "Assest/quai/Hồi 4/4/ChatGPT Image Jun 6, 2026, 06_48_31 PM (3)-sprite.png",
      "Assest/quai/Hồi 4/4/ChatGPT Image Jun 6, 2026, 06_48_33 PM (5)-sprite.png"
    ],
    5: [
      "Assest/quai/Hồi 5/5/ChatGPT Image Jun 6, 2026, 06_48_35 PM (6)-sprite.png",
      "Assest/quai/Hồi 5/5/ChatGPT Image Jun 6, 2026, 06_48_39 PM (1)-sprite.png",
      "Assest/quai/Hồi 5/5/ChatGPT Image Jun 6, 2026, 06_48_43 PM (4)-sprite.png",
      "Assest/quai/Hồi 5/5/ChatGPT Image Jun 6, 2026, 06_48_46 PM (6)-sprite.png"
    ]
  }
};

function scene(title, npc, dialogue, log, recruit = null) {
  return { title, npc, dialogue, log, recruit };
}

const STORY = [
  {
    name: "Ngoại Ô Làng Gió Nhẹ", title: "Nguồn Lương Thực Bị Cắt Đứt", days: 20,
    enemies: ["Chuột đồng khổng lồ", "Sói rừng", "Sơn tặc"], boss: "Thủ lĩnh Sơn Tặc Râu Đỏ",
    objectives: ["Nhận nhiệm vụ cứu đoàn lương", "Tìm dấu xe và cứu người đánh xe", "Tiến vào trại sơn tặc", "Đánh bại Râu Đỏ và đưa lương thực về Breeze"],
    scenes: [
      scene("Bữa sáng thiếu bánh mì", "Trưởng làng", [["Trưởng làng", "Kho lương chỉ còn đủ dùng ba ngày. Đoàn xe từ Peace đã mất tích."], ["Mira", "Cháu đã nhớ cách giữ sức và đọc thế trận chưa?"], ["Mici", "Cháu nhớ. Cháu sẽ đưa cả người lẫn lương thực trở về."], ["Trưởng làng", "Đừng cố làm anh hùng một mình."], ["Mici", "Cháu chỉ định hoàn thành công việc."]], "Mici nhận nhiệm vụ tìm đoàn lương mất tích."),
      scene("Dấu bánh xe trong rừng", "Người đánh xe", [["Mici", "Bánh xe bị kéo khỏi đường chính. Đây là dấu tay của sơn tặc."], ["Người đánh xe bị thương", "Râu Đỏ đã mang lương thực về đồi đá. Cậu đừng đuổi theo."], ["Mici", "Tôi đã hứa đưa cả lương thực lẫn mọi người về."], ["Người đánh xe bị thương", "Vậy hãy cẩn thận. Hắn mạnh hơn bất kỳ ai quanh Breeze."]], "Dấu xe dẫn về đồi đá, nơi Râu Đỏ đóng trại."),
      scene("Đối đầu Râu Đỏ", "Râu Đỏ", [["Râu Đỏ", "Một mình mà dám bước vào trại của ta?"], ["Mici", "Tôi đến lấy lại bữa ăn của cả làng."], ["Râu Đỏ", "Thắng ta, lương thực là của ngươi!"], ["Mici", "Không. Nó vốn thuộc về dân làng."]], "Trận chiến giành lại lương thực bắt đầu.")
    ]
  },
  {
    name: "Thảo Nguyên Gió Hát", title: "Ngai Vàng Của Vua Goblin", days: 40,
    enemies: ["Goblin do thám", "Goblin ném đá", "Goblin kỵ sói"], boss: "Vua Goblin",
    objectives: ["Bảo vệ Đoàn Lúa Bạc", "Điều tra pha lê đen cùng Tarot", "Tiến vào Pháo Đài Cỏ Đen", "Đánh bại Vua Goblin"],
    scenes: [
      scene("Một người, hai kế hoạch", "Tarot", [["Mici", "Goblin đang bao vây cối xay. Tôi sẽ mở đường phía trước."], ["Tarot", "Nếu cậu lao thẳng vào, nhóm trên đồi sẽ ném đá xuống đầu cậu."], ["Mici", "Vậy anh xử lý nhóm trên đồi, tôi xử lý nhóm trước mặt."], ["Tarot", "Đơn giản đến mức đáng ngờ."], ["Mici", "Nhưng anh đang gật đầu."]], "Mici và Tarot phối hợp bảo vệ thương đoàn.", "tarot"),
      scene("Manh mối pha lê đen", "Tarot", [["Tarot", "Goblin chỉ cướp pha lê dẫn phép và bản đồ ma lực."], ["Mici", "Chúng đang gom vật liệu cho ai đó."], ["Tarot", "Tên chỉ huy gọi kẻ đó là Người Mang Tro."], ["Mici", "Ta dẹp Vua Goblin trước, rồi lần theo đường dây này."], ["Tarot", "Lần này tôi đồng ý toàn bộ kế hoạch."]], "Pha lê đen chỉ đường tới Pháo Đài Cỏ Đen."),
      scene("Ngai vàng của Vua Goblin", "Vua Goblin", [["Vua Goblin", "Đường lớn và pha lê đều thuộc về ta!"], ["Tarot", "The Chariot sẽ phá tuyến giữa. Mici, giữ chúng trong hành lang."], ["Mici", "Con tin được bảo vệ trước."], ["Tarot", "Đã rõ. Sau trận này, tôi sẽ đi cùng cậu."], ["Mici", "Vậy mở đường thôi."]], "Mici và Tarot tấn công Pháo Đài Cỏ Đen.")
    ]
  },
  {
    name: "Hẻm Núi Pha Lê", title: "Titan Golem Khổng Lồ", days: 45,
    enemies: ["Dơi pha lê", "Golem khai khoáng", "Nhện hang"], boss: "Titan Golem Khổng Lồ",
    objectives: ["Tìm nguồn ma lực làm mỏ tắt đèn", "Hợp tác với pháp sư Frieran", "Phá lõi điều khiển trong tàn tích", "Đánh bại Titan Golem"],
    scenes: [
      scene("Mỏ pha lê tắt đèn", "Frieran", [["Mici", "Pha lê trong mỏ đang phát sáng màu đen. Anh biết chuyện gì xảy ra sao?"], ["Frieran", "Đó là cộng hưởng cưỡng ép, cùng loại với mảnh pha lê của Goblin."], ["Mici", "Anh là ai?"], ["Frieran", "Frieran. Một pháp sư đã theo dấu chu kỳ này rất lâu."], ["Mici", "Vậy cùng tôi cứu thợ mỏ trước. Sau đó chúng ta nói tiếp."]], "Mici và Frieran tiến vào khu mỏ bị ma lực đen chiếm giữ.", "freeran"),
      scene("Tàn tích của người khai khoáng", "Frieran", [["Frieran", "Những ký tự này nhắc tới Vuu, Ma Vương thức tỉnh theo chu kỳ."], ["Tarot", "Người Mang Tro chỉ là kẻ thu gom cho hắn."], ["Mici", "Vậy con đường của chúng ta không dừng ở hẻm núi."], ["Thợ mỏ Nerin", "Titan đã thức dậy. Nó đang tiến về khu dân cư!"]], "Frieran xác định Titan đang bị tà khí của Vuu điều khiển."),
      scene("Tiếng bước chân trong núi", "Titan Golem", [["Frieran", "Lõi ở giữa ngực. Phá lớp pha lê ngoài trước."], ["Tarot", "Tôi khóa hai cánh tay của nó trong ba nhịp."], ["Mici", "Ba nhịp là đủ."], ["Titan Golem", "MỆNH LỆNH: NGHIỀN NÁT KẺ XÂM NHẬP."]], "Tổ đội chặn Titan trước cửa hẻm núi.")
    ]
  },
  {
    name: "Bờ Biển San Hô", title: "Đại Thủy Quái Karkos", days: 45,
    enemies: ["Cua hải tặc", "Sứa điện", "Hải tặc san hô"], boss: "Đại Thủy Quái Karkos",
    objectives: ["Lên tàu hướng nam", "Vượt bãi đá và vùng sứa điện", "Sống sót qua cơn bão tà khí", "Đánh bại Karkos"],
    scenes: [
      scene("Con tàu hướng nam", "Thuyền trưởng Marina", [["Marina", "Hải lưu đã đổi hướng. Thứ gì đó dưới biển đang kéo tà khí về phía nam."], ["Mici", "Chúng tôi cần tàu và một thuyền trưởng không sợ quái vật."], ["Marina", "Tôi sợ chứ. Tôi chỉ tính phí cao hơn khi vẫn phải đi."], ["Tarot", "Cuối cùng cũng có người nói chuyện hợp với Mici."]], "Tổ đội ra khơi theo dòng tà khí."),
      scene("Bão trên biển sâu", "Frieran", [["Frieran", "Tâm bão không tự nhiên. Karkos đang nuốt pha lê đen dưới đáy biển."], ["Marina", "Nếu nó lật tàu, mọi manh mối chìm theo."], ["Mici", "Vậy giữ tàu nổi. Tôi sẽ khiến nó ngẩng đầu lên."], ["Tarot", "Một kế hoạch rất Mici. Tôi chuẩn bị kết giới."]], "Cả đội tìm ra Karkos đang khuếch đại tà khí."),
      scene("Đại thủy quái trồi lên", "Karkos", [["Marina", "Xúc tu bên mạn trái!"], ["Tarot", "The Moon đánh dấu đầu thật giữa các bóng nước."], ["Frieran", "Tôi đóng băng mặt biển trong năm nhịp."], ["Mici", "Giữ nó đứng yên. Tôi kết thúc chuyện này."]], "Trận chiến trên boong tàu bắt đầu.")
    ]
  },
  {
    name: "Rừng Thông Chạng Vạng", title: "Hắc Long Bóng Đêm Ignis", days: 50,
    enemies: ["Rễ cây nhiễm tà", "Sói bóng tối", "Tinh linh sa ngã"], boss: "Hắc Long Bóng Đêm Ignis",
    objectives: ["Tìm Elaine trong màn sương", "Thanh tẩy rễ Cây Nguồn", "Mở đường tới Long Sào", "Đánh bại Ignis và cứu khu rừng"],
    scenes: [
      scene("Tinh linh trong sương", "Elaine", [["Elaine", "Dừng lại. Mỗi bước chân của anh đang làm rễ cây đau thêm."], ["Mici", "Tôi đi theo tà khí từ biển tới đây. Tôi không muốn làm hại khu rừng."], ["Elaine", "Nguồn ô nhiễm nằm sâu hơn, trong Long Sào."], ["Mici", "Vậy hãy dẫn đường. Tôi sẽ giúp cô bảo vệ nơi này."], ["Elaine", "Được. Khu rừng không thể tự chiến đấu mãi."]], "Mici và Elaine cùng tiến tới Cây Nguồn bị nhiễm tà.", "elaine"),
      scene("Rễ cây nhiễm tà", "Linh hồn Cây Nguồn", [["Elaine", "Tà khí đang dùng sinh lực của khu rừng để nuôi Hắc Long."], ["Tarot", "Chúng tôi giữ đám rễ. Cô tập trung thanh tẩy."], ["Mici", "Không ai bị bỏ lại, kể cả một khu rừng."], ["Elaine", "Sau khi cứu nơi này, tôi sẽ đi cùng các anh tới Vuu."]], "Elaine thanh tẩy Cây Nguồn và gia nhập tổ đội."),
      scene("Đường tới Long Sào", "Ignis", [["Ignis", "Khu rừng đã thuộc về bóng tối của Vuu!"], ["Elaine", "Không. Sinh lực vẫn đang đáp lời tôi."], ["Frieran", "Tarot khóa cánh. Elaine giữ tà khí không lan rộng."], ["Mici", "Còn tôi sẽ kéo con rồng xuống đất."]], "Tổ đội hoàn chỉnh đối đầu Hắc Long Ignis.")
    ]
  },
  {
    name: "Lâu Đài Ma Vương", title: "Trận Chiến Cuối Cùng", days: 50,
    enemies: ["Quỷ pháp sư", "Giáp sống", "Hắc khí Ma Vương"], boss: "Đại Ma Vương Vuu",
    objectives: ["Phá Cánh Cổng Quỷ", "Tái hợp đội hình trong hành lang", "Phá phòng thủ ngai vàng", "Đánh bại Đại Ma Vương Vuu"],
    scenes: [
      scene("Cánh cổng quỷ", "Người dẫn chuyện", [["Mici", "Sau cánh cổng này là Vuu. Kiểm tra lần cuối."], ["Tarot", "Hai mươi hai lá bài, đủ ma lực cho ba kết giới lớn."], ["Frieran", "Chuông pha lê đã nứt, nhưng vẫn dùng được."], ["Elaine", "Sinh khí của khu rừng đang ở cùng chúng ta."], ["Mici", "Vậy vào trong, đánh bại Vuu rồi cùng trở về."]], "Mici, Tarot, Frieran và Elaine tiến vào lâu đài."),
      scene("Phòng ngai vàng", "Vuu", [["Vuu", "Mici của Breeze. Công Hội trả ngươi bao nhiêu để chết ở đây?"], ["Mici", "Ban đầu, đủ để mở một quán ăn."], ["Tarot", "Còn bây giờ?"], ["Mici", "Bây giờ tôi chiến đấu cho mọi người và mọi vùng đất chúng ta đã đi qua."], ["Frieran", "Bốn trụ đang yếu đi. Elaine, giữ tà khí lại!"]], "Cả đội phá bốn trụ phong ấn quanh ngai vàng."),
      scene("Đòn kết thúc và lời hẹn trở về", "Vuu", [["Vuu", "Ta là chu kỳ của thế giới! Các ngươi chỉ trì hoãn điều không thể tránh!"], ["Frieran", "Một trăm năm bình yên vẫn đáng để bảo vệ."], ["Tarot", "The World đã khóa đường về ngai của hắn."], ["Elaine", "Tà khí đã tách khỏi sinh lực. Mici, bây giờ!"], ["Mici", "Vuu, trận này kết thúc. Sau đó chúng ta về Breeze, tôi còn phải mở quán."]], "Trận chiến cuối cùng với Vuu bắt đầu.")
    ]
  }
];

const state = {
  act: 1, maxAct: 1, day: 1, objective: 0, sceneIndex: 0, activeScene: null,
  completedScenes: new Set(), hp: 380, maxHp: 380, attack: 107, defense: 25,
  enemyHp: 520, enemyMaxHp: 520, level: 1, exp: 0, busy: false,
  stageComplete: false, battleLost: false, fightingBoss: false,
  pendingLevelUps: 0, lastBattle: null, enemyVisible: false,
  skillEnergy: { tarot: 0, freeran: 0, elaine: 0 }, maxSkillEnergy: 100,
  unlockedMembers: new Set(["mici"]), runUnlockedMembers: new Set(["mici"]), partyMembers: new Set(["mici"]),
  partyPositions: { left: "mici", right: null, top: null, bottom: null },
  meetingMember: null, formationEditing: false
};

const EXP_SYSTEM = {
  requiredByLevel: { 1: 80, 2: 120, 3: 180, 4: 260, 5: 360 },
  rewards: {
    normal: [10, 15],
    elite: [25, 30],
    boss: [100, 150],
    quest: [20, 50],
    event: [10, 30]
  }
};

const ui = Object.fromEntries([
  "lobby", "lobbyImage", "lobbyHotspots", "lobbyProgress", "lobbyAct", "lobbyStatus", "formationEditor",
  "lobbyToast", "game", "returnLobby", "party", "elder", "enemy", "enemyHud", "enemyImage", "enemyPlaceholder", "enemyHpBar",
  "enemyHpText", "partyHpText", "partyLevel", "partyExp", "attackText", "defenseText",
  "actLabel", "dayTop", "dayText", "dayProgress", "questTitle", "objectiveText",
  "combatLog", "skillEnergyPanel", "nextDayButton", "dialogueBox", "dialogueSpeaker", "dialogueText",
  "dialogueNext", "dialogueSkip", "levelUpBox", "levelUpText", "upgradeOptions",
  "reviveBox", "reviveOptions"
].map((id) => [id, document.querySelector(`#${id}`)]));
ui.mici = document.querySelector(".mici");
ui.enemyName = document.querySelector(".enemy-hud strong");
ui.npcName = ui.elder.querySelector("strong");
ui.fighters = [...document.querySelectorAll(".fighter")];
ui.lobbyNav = [...document.querySelectorAll(".lobby-nav button")];

const currentStage = () => STORY[state.act];
const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let lobbyRoute = "adventure";
let gameStarted = false;
let lobbyToastTimer = 0;
let lobbyRouteChanging = false;
let screenTransitioning = false;

const PARTY_MEMBERS = {
  mici: { name: "Mici", image: "Assest/characters/Mici/Mici-normalized.png" },
  tarot: { name: "Tarot", image: "Assest/characters/Tarot/Tarot-normalized.png" },
  freeran: { name: "Frieran", image: "Assest/characters/Freeran/Frieran-normalized.png" },
  elaine: { name: "Elaine", image: "Assest/characters/Elaine/Elaine-normalized.png" }
};

const MEMBER_UNLOCK_ACT = {
  mici: 0,
  tarot: 1,
  freeran: 2,
  elaine: 4
};

const SUPPORT_MEMBER_IDS = ["tarot", "freeran", "elaine"];
const SKILL_ENERGY_GAIN = 25;

function activeSupportMembers() {
  return SUPPORT_MEMBER_IDS.filter((memberId) => {
    return state.partyMembers.has(memberId) &&
      memberAvailableInCurrentRun(memberId) &&
      Boolean(memberPosition(memberId));
  });
}

function renderSkillEnergyPanel() {
  if (!ui.skillEnergyPanel) return;
  const members = activeSupportMembers();
  ui.skillEnergyPanel.hidden = members.length === 0;
  ui.skillEnergyPanel.dataset.count = members.length;
  ui.skillEnergyPanel.replaceChildren();

  members.forEach((memberId) => {
    const member = PARTY_MEMBERS[memberId];
    const value = Math.max(0, Math.min(state.maxSkillEnergy, state.skillEnergy[memberId] || 0));
    const card = document.createElement("button");
    card.type = "button";
    card.className = "skill-energy-card";
    card.disabled = true;
    card.dataset.member = memberId;

    const image = document.createElement("img");
    image.src = member.image;
    image.alt = member.name;

    const copy = document.createElement("span");
    copy.className = "skill-energy-copy";

    const name = document.createElement("strong");
    name.textContent = member.name;

    const number = document.createElement("small");
    number.textContent = `${value} / ${state.maxSkillEnergy}`;

    const bar = document.createElement("i");
    bar.className = "skill-energy-bar";
    const fill = document.createElement("b");
    fill.style.width = `${value / state.maxSkillEnergy * 100}%`;
    bar.append(fill);

    copy.append(name, number, bar);
    card.append(image, copy);
    ui.skillEnergyPanel.append(card);
  });
}

function gainSkillEnergy(memberId, amount = SKILL_ENERGY_GAIN) {
  if (!SUPPORT_MEMBER_IDS.includes(memberId)) return;
  if (!activeSupportMembers().includes(memberId)) return;
  state.skillEnergy[memberId] = Math.min(
    state.maxSkillEnergy,
    (state.skillEnergy[memberId] || 0) + amount
  );
  renderSkillEnergyPanel();
}

function skillEnergyReady(memberId) {
  return SUPPORT_MEMBER_IDS.includes(memberId) &&
    activeSupportMembers().includes(memberId) &&
    (state.skillEnergy[memberId] || 0) >= state.maxSkillEnergy;
}

function spendSkillEnergy(memberId) {
  if (!SUPPORT_MEMBER_IDS.includes(memberId)) return;
  state.skillEnergy[memberId] = 0;
  renderSkillEnergyPanel();
}

function membersAvailableAtActStart(act) {
  return Object.keys(PARTY_MEMBERS).filter((memberId) => {
    return memberId === "mici" || MEMBER_UNLOCK_ACT[memberId] < act;
  });
}

function memberAvailableInCurrentRun(memberId) {
  return state.runUnlockedMembers.has(memberId);
}

function rebuildPartyForCurrentRun() {
  Object.keys(FORMATION_POSITIONS).forEach((position) => {
    const memberId = state.partyPositions[position];
    if (memberId && !memberAvailableInCurrentRun(memberId)) {
      state.partyPositions[position] = null;
    }
  });

  if (!Object.values(state.partyPositions).includes("mici")) {
    const emptyPosition = Object.keys(FORMATION_POSITIONS).find((position) => !state.partyPositions[position]);
    state.partyPositions[emptyPosition || "left"] = "mici";
  }

  state.partyMembers = new Set(Object.values(state.partyPositions).filter(Boolean));
  state.partyMembers.add("mici");
  renderSkillEnergyPanel();
}

function prepareMembersForActStart(act) {
  state.runUnlockedMembers = new Set(membersAvailableAtActStart(act));
  state.runUnlockedMembers.add("mici");
  rebuildPartyForCurrentRun();
}

function addMemberToCurrentRun(memberId) {
  if (!memberId) return;
  state.unlockedMembers.add(memberId);
  state.runUnlockedMembers.add(memberId);

  if (!memberPosition(memberId)) {
    const emptyPosition = Object.keys(FORMATION_POSITIONS).find((position) => !state.partyPositions[position]);
    if (emptyPosition) state.partyPositions[emptyPosition] = memberId;
  }

  rebuildPartyForCurrentRun();
}

const FORMATION_POSITIONS = {
  left: "Phía trái",
  right: "Phía phải",
  top: "Bên trên",
  bottom: "Bên dưới"
};

function memberPosition(memberId) {
  return Object.keys(FORMATION_POSITIONS).find((position) => state.partyPositions[position] === memberId) || null;
}

function moveMemberToPosition(memberId, targetPosition) {
  if (!memberAvailableInCurrentRun(memberId)) return;
  const sourcePosition = memberPosition(memberId);
  const displacedMember = state.partyPositions[targetPosition];
  if (sourcePosition === targetPosition) return;
  state.partyPositions[targetPosition] = memberId;
  if (sourcePosition) state.partyPositions[sourcePosition] = displacedMember || null;
  else if (displacedMember) {
    const emptyPosition = Object.keys(FORMATION_POSITIONS).find((position) => !state.partyPositions[position]);
    if (emptyPosition) state.partyPositions[emptyPosition] = displacedMember;
  }
  state.partyMembers = new Set(Object.values(state.partyPositions).filter(Boolean));
  state.partyMembers.add("mici");
  renderSkillEnergyPanel();
  renderFormationEditor();
  updateHud();
}

function removeMemberFromFormation(memberId) {
  if (memberId === "mici") return;
  const position = memberPosition(memberId);
  if (position) state.partyPositions[position] = null;
  state.partyMembers.delete(memberId);
  renderSkillEnergyPanel();
  renderFormationEditor();
  updateHud();
}

function formationMemberCard(memberId, className = "") {
  const member = PARTY_MEMBERS[memberId];
  const card = document.createElement("div");
  card.className = `formation-member ${className}`;
  card.draggable = true;
  card.dataset.member = memberId;
  card.title = member.name;
  const image = document.createElement("img");
  image.src = member.image;
  image.alt = member.name;
  const label = document.createElement("strong");
  label.textContent = member.name;
  card.append(image, label);
  card.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/member", memberId);
    event.dataTransfer.effectAllowed = "move";
  });
  return card;
}

function renderFormationEditor() {
  ui.formationEditor.hidden = lobbyRoute !== "formation";
  if (lobbyRoute !== "formation") return;
  ui.formationEditor.replaceChildren();

  if (!state.formationEditing) {
    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "formation-edit-button";
    editButton.textContent = "Chỉnh Sửa Tổ Đội";
    editButton.addEventListener("click", () => {
      state.formationEditing = true;
      renderFormationEditor();
    });
    ui.formationEditor.append(editButton);
    return;
  }

  const modal = document.createElement("section");
  modal.className = "formation-modal";
  const title = document.createElement("h2");
  title.textContent = "Sắp Xếp Vị Trí Chiến Đấu";
  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "formation-close";
  closeButton.textContent = "Hoàn Tất";
  closeButton.addEventListener("click", () => {
    state.formationEditing = false;
    renderFormationEditor();
  });

  const positionGrid = document.createElement("div");
  positionGrid.className = "formation-position-grid";
  Object.entries(FORMATION_POSITIONS).forEach(([position, label]) => {
    const slot = document.createElement("div");
    slot.className = `formation-position position-${position}`;
    slot.dataset.position = position;
    const slotLabel = document.createElement("span");
    slotLabel.textContent = label;
    slot.append(slotLabel);
    const memberId = state.partyPositions[position];
    if (memberId) slot.append(formationMemberCard(memberId));
    slot.addEventListener("dragover", (event) => {
      event.preventDefault();
      slot.classList.add("drag-over");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("drag-over"));
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      slot.classList.remove("drag-over");
      moveMemberToPosition(event.dataTransfer.getData("text/member"), position);
    });
    positionGrid.append(slot);
  });

  const roster = document.createElement("div");
  roster.className = "formation-roster";
  roster.addEventListener("dragover", (event) => event.preventDefault());
  roster.addEventListener("drop", (event) => {
    event.preventDefault();
    removeMemberFromFormation(event.dataTransfer.getData("text/member"));
  });
  Object.keys(PARTY_MEMBERS).forEach((memberId) => {
    if (!memberAvailableInCurrentRun(memberId)) return;
    const card = formationMemberCard(memberId, memberPosition(memberId) ? "is-assigned" : "is-available");
    if (!memberPosition(memberId)) {
      card.addEventListener("click", () => {
        const emptyPosition = Object.keys(FORMATION_POSITIONS).find((position) => !state.partyPositions[position]);
        if (emptyPosition) moveMemberToPosition(memberId, emptyPosition);
      });
    }
    roster.append(card);
  });

  const hint = document.createElement("p");
  hint.textContent = "Kéo nhân vật vào một ô vị trí. Kéo đồng đội xuống danh sách để đưa ra khỏi tổ đội.";
  modal.append(title, closeButton, positionGrid, roster, hint);
  ui.formationEditor.append(modal);
}

function lobbyHotspot(label, style, action) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "lobby-hotspot";
  button.setAttribute("aria-label", label);
  button.style.cssText = style;
  button.addEventListener("click", action);
  ui.lobbyHotspots.append(button);
}

function showLobbyToast(message) {
  window.clearTimeout(lobbyToastTimer);
  ui.lobbyToast.textContent = message;
  ui.lobbyToast.hidden = false;
  lobbyToastTimer = window.setTimeout(() => {
    ui.lobbyToast.hidden = true;
  }, 1800);
}

function updateLobbyStatus() {
  const stage = currentStage();
  ui.lobby.dataset.route = lobbyRoute;
  ui.lobbyAct.textContent = `Hồi ${state.act}: ${stage.name}`;
  ui.lobbyStatus.textContent = `Ngày ${state.day} · LV.${state.level} · HP ${state.hp}/${state.maxHp}`;
  ui.lobbyProgress.hidden = USE_UI_AS_IMAGE || !["adventure", "chapters"].includes(lobbyRoute);
  ui.lobbyNav.forEach((button) => {
    button.setAttribute("aria-current", button.dataset.route === lobbyRoute ? "page" : "false");
  });
  renderFormationEditor();
}

function addBackHotspot() {
  lobbyHotspot("Quay lại", "left:2%;top:1%;width:12%;height:7%;", () => switchLobbyRoute("adventure"));
}

function resetActProgressForReplay(act) {
  state.act = act;
  state.day = 1;
  state.objective = 0;
  state.sceneIndex = 0;
  state.activeScene = null;
  state.stageComplete = false;
  state.battleLost = false;
  state.fightingBoss = false;
  state.pendingLevelUps = 0;
  state.lastBattle = null;
  state.enemyVisible = false;
  state.meetingMember = null;
  state.busy = false;
  state.hp = state.maxHp;
  prepareMembersForActStart(act);

  state.completedScenes = new Set(
    [...state.completedScenes].filter((key) => !String(key).startsWith(`${act}-`))
  );

  ui.enemy.hidden = true;
  ui.enemyHud.hidden = true;
  ui.dialogueBox.hidden = true;
  ui.levelUpBox.hidden = true;
  ui.reviveBox.hidden = true;
  ui.nextDayButton.disabled = false;
  ui.nextDayButton.querySelector("span").textContent = "Ngày Tiếp Theo";
  gameStarted = false;
}

async function playActFromChapter(act) {
  if (act > state.maxAct) {
    showLobbyToast(`Hồi ${act} chưa được mở.`);
    return;
  }

  resetActProgressForReplay(act);
  await enterGame();
}

function renderLobbyHotspots() {
  ui.lobbyHotspots.replaceChildren();

  if (lobbyRoute === "adventure") {
    lobbyHotspot("Nhiệm Vụ", "left:2%;top:10.5%;width:14%;height:9%;", () => showLobbyToast("Nhiệm vụ đang được cập nhật."));
    lobbyHotspot("Thư", "left:2%;top:20.6%;width:14%;height:9%;", () => showLobbyToast("Hộp thư hiện chưa có thư mới."));
    lobbyHotspot("Sự Kiện", "left:2%;top:30.2%;width:14%;height:9%;", () => switchLobbyRoute("events"));
    lobbyHotspot("Cửa Hàng", "left:2%;top:40.1%;width:14%;height:9%;", () => showLobbyToast("Cửa hàng sẽ mở trong bản cập nhật sau."));
    lobbyHotspot("Chọn Hồi", "left:27%;top:71.7%;width:47%;height:10.7%;", () => switchLobbyRoute("chapters"));
    return;
  }

  if (lobbyRoute === "chapters") {
    addBackHotspot();
    const chapterAreas = [
      "left:2.5%;top:14.5%;width:95%;height:13.4%;",
      "left:2.5%;top:28.6%;width:95%;height:12.3%;",
      "left:2.5%;top:41.8%;width:95%;height:12.3%;",
      "left:2.5%;top:55%;width:95%;height:12.3%;",
      "left:2.5%;top:68.2%;width:95%;height:12.3%;",
      "left:2.5%;top:81%;width:95%;height:10%;"
    ];
    chapterAreas.forEach((style, act) => {
      lobbyHotspot(`Chọn Hồi ${act}`, style, () => playActFromChapter(act));
    });
    return;
  }

  addBackHotspot();
  if (lobbyRoute === "events") {
    lobbyHotspot("Sự Kiện Đang Diễn Ra", "left:3%;top:15.7%;width:21%;height:12.5%;", () => showLobbyToast("Đã chọn sự kiện đang diễn ra."));
    lobbyHotspot("Sự Kiện Đặc Biệt", "left:3%;top:29.2%;width:21%;height:12.6%;", () => showLobbyToast("Sự kiện đặc biệt chưa mở."));
    lobbyHotspot("Sự Kiện Hàng Ngày", "left:3%;top:43.3%;width:21%;height:12.6%;", () => showLobbyToast("Sự kiện hằng ngày chưa mở."));
    lobbyHotspot("Tham Gia", "left:58%;top:68%;width:37%;height:8.8%;", () => showLobbyToast("Hãy tiếp tục hành trình chính để mở sự kiện."));
  }
}

async function switchLobbyRoute(route) {
  if (!ASSETS.lobby[route] || route === lobbyRoute || lobbyRouteChanging) return;
  if (route !== "formation") state.formationEditing = false;
  lobbyRouteChanging = true;
  ui.lobbyImage.classList.add("is-changing");
  await wait(140);
  lobbyRoute = route;
  ui.lobbyImage.src = ASSETS.lobby[route];
  ui.lobbyImage.alt = route === "adventure" ? "Sảnh Mạo Hiểm" : `Giao diện ${route}`;
  renderLobbyHotspots();
  updateLobbyStatus();
  ui.lobbyNav.forEach((button) => {
    button.setAttribute("aria-current", button.dataset.route === route ? "page" : "false");
  });
  await wait(40);
  ui.lobbyImage.classList.remove("is-changing");
  lobbyRouteChanging = false;
}

function updateReturnButton() {
  ui.returnLobby.disabled = state.busy || state.activeScene !== null || state.battleLost;
}

async function swapScreen(from, to) {
  from.classList.add("is-leaving");
  await wait(230);
  from.hidden = true;
  from.classList.remove("is-leaving");
  to.hidden = false;
  to.classList.add("is-entering");
  await wait(300);
  to.classList.remove("is-entering");
}

async function enterGame() {
  if (state.busy || ui.lobby.hidden || screenTransitioning) return;
  screenTransitioning = true;
  try {
    await swapScreen(ui.lobby, ui.game);
    updateReturnButton();
    if (!gameStarted) {
      gameStarted = true;
      const item = sceneForToday();
      if (item) await openScene(item);
    } else {
      updateHud();
    }
  } finally {
    screenTransitioning = false;
  }
}

async function leaveGame() {
  if (state.busy || state.activeScene || state.battleLost || screenTransitioning) return;
  screenTransitioning = true;
  try {
    lobbyRoute = "adventure";
    ui.lobbyImage.src = ASSETS.lobby.adventure;
    ui.lobbyImage.alt = "Sảnh Mạo Hiểm";
    renderLobbyHotspots();
    updateLobbyStatus();
    await swapScreen(ui.game, ui.lobby);
  } finally {
    screenTransitioning = false;
  }
}

function updateHud() {
  const stage = currentStage();
  ui.game.style.backgroundImage = `url("${ASSETS.backgrounds[state.act]}")`;
  ui.actLabel.textContent = `Hồi ${state.act}: ${stage.name}`;
  ui.dayTop.textContent = state.day;
  ui.dayText.textContent = state.day;
  ui.dayProgress.style.width = `${Math.min(100, state.day / stage.days * 100)}%`;
  ui.enemyHpBar.style.width = `${Math.max(0, state.enemyHp / state.enemyMaxHp * 100)}%`;
  ui.enemyHpText.textContent = `${state.enemyHp} / ${state.enemyMaxHp}`;
  ui.partyHpText.textContent = `${state.hp} / ${state.maxHp}`;
  ui.partyLevel.textContent = `LV.${state.level}`;
  ui.partyExp.textContent = state.level >= 6
    ? `${state.exp} EXP · Tối đa`
    : `${state.exp} / ${EXP_SYSTEM.requiredByLevel[state.level]}`;
  ui.attackText.textContent = state.attack;
  ui.defenseText.textContent = state.defense;
  ui.questTitle.textContent = stage.title;
  ui.objectiveText.textContent = stage.objectives[state.objective];
  ui.enemy.hidden = !state.enemyVisible;
  ui.enemyHud.hidden = !state.enemyVisible;
  const partySize = state.meetingMember ? 2 : state.partyMembers.size;
  ui.game.dataset.partySize = partySize;
  ui.fighters.forEach((fighter) => {
    const member = fighter.dataset.member;
    const visible = state.meetingMember
      ? member === "mici" || member === state.meetingMember
      : state.partyMembers.has(member);
    fighter.hidden = !visible;
    fighter.classList.toggle("meeting-character", member === state.meetingMember);
    Object.keys(FORMATION_POSITIONS).forEach((position) => {
      fighter.classList.toggle(`party-position-${position}`, !state.meetingMember && memberPosition(member) === position);
    });
  });
  renderSkillEnergyPanel();
  updateLobbyStatus();
  updateReturnButton();
}

function setEnemy(name, boss = false) {
  const pool = ASSETS.enemies[state.act];
  const index = boss ? pool.length - 1 : Math.max(0, currentStage().enemies.indexOf(name)) % (pool.length - 1);
  ui.enemyImage.src = pool[index];
  ui.enemyImage.alt = name;
  ui.enemyImage.hidden = false;
  ui.enemyPlaceholder.hidden = true;
  ui.enemyName.textContent = name;
  state.enemyVisible = true;
  ui.enemy.hidden = false;
  ui.enemyHud.hidden = false;
}

function sceneForToday() {
  const stage = currentStage();
  const days = [1, Math.ceil(stage.days / 2), stage.days];
  return stage.scenes.find((_, index) => days[index] === state.day && !state.completedScenes.has(`${state.act}-${index}`));
}

async function openScene(item) {
  state.busy = true;
  state.activeScene = item;
  state.sceneIndex = 0;
  state.enemyVisible = false;
  state.meetingMember = item.recruit && !memberAvailableInCurrentRun(item.recruit) ? item.recruit : null;
  updateHud();
  ui.game.classList.add("story-event");
  ui.game.classList.toggle("companion-meeting", Boolean(state.meetingMember));
  ui.nextDayButton.disabled = true;
  ui.dialogueBox.hidden = true;
  ui.npcName.textContent = item.npc;
  const npcHue = [...item.npc].reduce((sum, character) => sum + character.charCodeAt(0), 0) % 280;
  ui.elder.style.setProperty("--npc-hue", `${npcHue}deg`);
  ui.elder.hidden = Boolean(state.meetingMember);
  if (!state.meetingMember) {
    ui.elder.classList.remove("npc-reveal");
    void ui.elder.offsetWidth;
    ui.elder.classList.add("npc-reveal");
  }
  ui.combatLog.textContent = `${item.title} · ${item.npc}`;
  await wait(1250);
  showDialogue();
}

function showDialogue() {
  const [speaker, text] = state.activeScene.dialogue[state.sceneIndex];
  ui.dialogueSpeaker.textContent = speaker;
  ui.dialogueText.textContent = text;
  const last = state.sceneIndex === state.activeScene.dialogue.length - 1;
  ui.dialogueNext.textContent = last && state.day === currentStage().days ? "Bắt đầu chiến đấu" : (last ? "Tiếp tục" : "Tiếp theo");
  ui.dialogueBox.hidden = false;
}

function nextDialogue() {
  if (!state.activeScene) return;
  state.sceneIndex += 1;
  if (state.sceneIndex < state.activeScene.dialogue.length) showDialogue();
  else finishScene();
}

function skipDialogue() {
  if (state.activeScene) finishScene();
}

async function finishScene() {
  const item = state.activeScene;
  const index = currentStage().scenes.indexOf(item);
  const recruitedMember = item.recruit && !memberAvailableInCurrentRun(item.recruit) ? item.recruit : null;
  state.completedScenes.add(`${state.act}-${index}`);
  state.objective = Math.min(index + 1, 3);
  if (recruitedMember) addMemberToCurrentRun(recruitedMember);
  state.activeScene = null;
  state.meetingMember = null;
  ui.dialogueBox.hidden = true;
  ui.elder.hidden = true;
  ui.game.classList.remove("story-event", "companion-meeting");
  ui.combatLog.textContent = recruitedMember
    ? `${PARTY_MEMBERS[recruitedMember].name} đã được mở khóa. Có thể thêm vào đội tại màn Đội Hình.`
    : item.log;
  updateHud();

  if (index === 2) {
    state.fightingBoss = true;
    const won = await battle(currentStage().boss, true);
    if (won) completeAct();
    return;
  }
  addExp(random(...EXP_SYSTEM.rewards.event), "Sự kiện đặc biệt");
  finishBlockingChoice();
}

function addExp(amount, source) {
  state.exp += amount;
  while (
    state.level < 6 &&
    state.exp >= EXP_SYSTEM.requiredByLevel[state.level]
  ) {
    state.level += 1;
    state.pendingLevelUps += 1;
  }
  if (source) ui.combatLog.textContent = `${ui.combatLog.textContent} +${amount} EXP (${source}).`;
  updateHud();
}

function finishBlockingChoice() {
  if (state.pendingLevelUps > 0) {
    showLevelUpChoice();
    return;
  }
  state.busy = false;
  ui.nextDayButton.disabled = state.stageComplete ? state.act === STORY.length - 1 : false;
  updateReturnButton();
}

function showLevelUpChoice() {
  state.busy = true;
  ui.nextDayButton.disabled = true;
  ui.levelUpText.textContent = `Đạt cấp ${state.level}. Bắt buộc chọn một nâng cấp để tiếp tục.`;
  ui.upgradeOptions.replaceChildren();
  const hpGain = random(40, 80);
  const attackGain = random(18, 26);
  const defenseGain = random(12, 24);
  [
    { label: `+${hpGain} HP`, description: "Tăng HP tối đa và HP hiện tại", apply: () => { state.maxHp += hpGain; state.hp += hpGain; } },
    { label: `+${attackGain} Công`, description: "Tăng sát thương của cả tổ đội", apply: () => { state.attack += attackGain; } },
    { label: `+${defenseGain} Phòng Thủ`, description: "Giảm sát thương nhận vào", apply: () => { state.defense += defenseGain; } }
  ].forEach((upgrade) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "upgrade-option";
    button.innerHTML = `${upgrade.label}<small>${upgrade.description}</small>`;
    button.addEventListener("click", () => {
      upgrade.apply();
      state.pendingLevelUps -= 1;
      ui.levelUpBox.hidden = true;
      updateHud();
      finishBlockingChoice();
    });
    ui.upgradeOptions.append(button);
  });
  ui.levelUpBox.hidden = false;
}

function activeFighters() {
  return ui.fighters.filter((fighter) => !fighter.hidden);
}

function fighterSkillName(fighter) {
  if (fighter.classList.contains("tarot")) return "The Chariot";
  if (fighter.classList.contains("freeran")) return "Mũi Tên Pha Lê";
  if (fighter.classList.contains("elaine")) return "Rễ Cây Sinh Mệnh";
  return "Đại Kiếm Phá Trận";
}

async function battle(name, boss = false) {
  state.busy = true;
  state.fightingBoss = boss;
  state.lastBattle = { name, boss };
  setEnemy(name, boss);
  state.enemyMaxHp = boss ? 750 + state.act * 160 : 300 + state.day * 10;
  state.enemyHp = state.enemyMaxHp;
  ui.enemy.classList.remove("defeated");
  updateHud();
  ui.combatLog.textContent = `Tổ đội đối đầu ${name}. Chuẩn bị giao chiến...`;
  await wait(900);

  let round = 1;
  while (state.enemyHp > 0 && state.hp > 0) {
    const fighters = activeFighters();
    const attacker = fighters[(round - 1) % fighters.length];
    const attackerName = attacker.dataset.name || "Mici";
    const attackerMember = attacker.dataset.member;
    const chargedSkill = skillEnergyReady(attackerMember);
    attacker.classList.add("attacking", "skill");
    ui.combatLog.textContent = chargedSkill
      ? `Lượt ${round}: ${attackerName} dùng tuyệt kỹ ${fighterSkillName(attacker)}!`
      : `Lượt ${round}: ${attackerName} dùng ${fighterSkillName(attacker)}!`;
    await wait(720);
    const damage = chargedSkill ? Math.round(state.attack * 1.6) : state.attack;
    if (chargedSkill) spendSkillEnergy(attackerMember);
    state.enemyHp = Math.max(0, state.enemyHp - damage);
    if (SUPPORT_MEMBER_IDS.includes(attackerMember) && !chargedSkill) gainSkillEnergy(attackerMember);
    ui.enemy.classList.add("hit");
    ui.combatLog.textContent = chargedSkill
      ? `${attackerName} tung tuyệt kỹ, ${name} mất ${damage} HP.`
      : `${name} mất ${damage} HP.`;
    updateHud();
    await wait(620);
    attacker.classList.remove("attacking", "skill");
    ui.enemy.classList.remove("hit");
    if (!state.enemyHp) break;

    ui.enemy.classList.add("attacking");
    ui.combatLog.textContent = `${name} tung đòn phản công vào ${attackerName}!`;
    await wait(720);
    const enemyDamage = boss
      ? random(65 + state.act * 8, 90 + state.act * 10)
      : random(35 + state.act * 5, 55 + state.act * 7);
    const received = Math.max(0, enemyDamage - state.defense);
    state.hp = Math.max(0, state.hp - received);
    attacker.classList.add("hit");
    ui.combatLog.textContent = `${attackerName} trúng đòn: ${enemyDamage} damage quái - ${state.defense} Thủ = mất ${received} HP.`;
    updateHud();
    await wait(620);
    ui.enemy.classList.remove("attacking");
    attacker.classList.remove("hit");
    await wait(350);
    round += 1;
  }

  if (state.enemyHp <= 0) {
    ui.enemy.classList.add("defeated");
    const elite = !boss && state.day % 5 === 0;
    const rewardType = boss ? "boss" : (elite ? "elite" : "normal");
    const rewardLabel = boss ? "Boss khu vực" : (elite ? "Quái tinh anh" : "Quái thường");
    const expReward = random(...EXP_SYSTEM.rewards[rewardType]);
    ui.combatLog.textContent = boss ? `Đã đánh bại ${name} và hoàn thành ${currentStage().title}.` : `Đã đánh bại ${name}. Có thể sang ngày tiếp theo.`;
    addExp(expReward, rewardLabel);
    if (!boss) ui.nextDayButton.querySelector("span").textContent = "Ngày Tiếp Theo";
    updateHud();
    if (!boss) finishBlockingChoice();
    return true;
  }

  state.battleLost = true;
  ui.nextDayButton.disabled = true;
  ui.combatLog.textContent = `HP tổ đội đã về 0. Hãy chọn một đánh đổi để hồi sinh.`;
  showReviveChoice();
  return false;
}

function showReviveChoice() {
  state.busy = true;
  ui.reviveOptions.replaceChildren();
  [
    { label: "-10% Công", description: "Giảm vĩnh viễn Công hiện tại", apply: () => { state.attack = Math.max(10, Math.floor(state.attack * 0.9)); } },
    { label: "-10% Phòng Thủ", description: "Giảm vĩnh viễn Thủ hiện tại", apply: () => { state.defense = Math.max(1, Math.floor(state.defense * 0.9)); } }
  ].forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "upgrade-option";
    button.innerHTML = `${choice.label}<small>${choice.description}</small>`;
    button.addEventListener("click", async () => {
      choice.apply();
      state.hp = state.maxHp;
      state.battleLost = false;
      ui.reviveBox.hidden = true;
      updateHud();
      const won = await battle(state.lastBattle.name, state.lastBattle.boss);
      if (won && state.lastBattle.boss) completeAct();
    });
    ui.reviveOptions.append(button);
  });
  ui.reviveBox.hidden = false;
}

function completeAct() {
  state.stageComplete = true;
  const questExp = random(...EXP_SYSTEM.rewards.quest);
  addExp(questExp, "Hoàn thành nhiệm vụ");
  ui.nextDayButton.querySelector("span").textContent = state.act < STORY.length - 1 ? `Sang Hồi ${state.act + 1}` : "Hoàn Thành";
  finishBlockingChoice();
}

async function nextDay() {
  if (state.busy) return;
  ui.nextDayButton.disabled = true;

  if (state.stageComplete) {
    if (state.act >= STORY.length - 1) {
      state.maxAct = STORY.length - 1;
      ui.nextDayButton.querySelector("span").textContent = "Hoàn Thành";
      updateHud();
      showLobbyToast("Bạn đã hoàn thành toàn bộ các hồi hiện có.");
      ui.nextDayButton.disabled = false;
      return;
    }

    state.act += 1;
    state.maxAct = Math.max(state.maxAct, state.act);
    state.day = 1;
    state.objective = 0;
    state.sceneIndex = 0;
    state.activeScene = null;
    state.stageComplete = false;
    state.fightingBoss = false;
    state.battleLost = false;
    state.enemyVisible = false;
    prepareMembersForActStart(state.act);
    ui.nextDayButton.querySelector("span").textContent = "Ngày Tiếp Theo";
    updateHud();
    await openScene(sceneForToday());
    return;
  }

  state.day += 1;
  updateHud();
  const item = sceneForToday();
  if (item) {
    await openScene(item);
    return;
  }
  const enemy = currentStage().enemies[(state.day - 2) % currentStage().enemies.length];
  await battle(enemy);
}

async function start() {
  ui.lobby.classList.toggle("use-ui-image", USE_UI_AS_IMAGE);
  ui.lobby.classList.toggle("use-css-ui", !USE_UI_AS_IMAGE);
  ui.fighters.forEach((fighter) => {
    fighter.querySelector("img").src = PARTY_MEMBERS[fighter.dataset.member].image;
  });
  ui.dialogueNext.addEventListener("click", nextDialogue);
  ui.dialogueSkip.addEventListener("click", skipDialogue);
  ui.nextDayButton.addEventListener("click", nextDay);
  ui.returnLobby.addEventListener("click", leaveGame);
  ui.lobbyNav.forEach((button) => {
    button.addEventListener("click", () => switchLobbyRoute(button.dataset.route));
  });
  ui.elder.hidden = true;
  ui.dialogueBox.hidden = true;
  ui.levelUpBox.hidden = true;
  ui.reviveBox.hidden = true;
  state.enemyVisible = false;
  prepareMembersForActStart(state.act);
  ui.lobbyImage.src = ASSETS.lobby.adventure;
  ui.lobbyImage.alt = "Sảnh Mạo Hiểm";
  ui.lobby.hidden = false;
  ui.game.hidden = true;
  renderLobbyHotspots();
  updateHud();
  
}

start();
