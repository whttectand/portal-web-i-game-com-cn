// 页面辅助工具：提示卡片、关键词徽章、访问说明
(function () {
  "use strict";

  const CFG = {
    siteUrl: "https://portal-web-i-game.com.cn",
    keyword: "爱游戏",
    cardTitle: "温馨提示",
    cardBody: "欢迎体验本平台，更多精彩内容请关注我们。",
    badgeList: ["爱游戏", "热门推荐", "新游速递", "福利活动"],
    accessInfo: "请使用最新浏览器访问，确保网络畅通。"
  };

  const containerId = "site-helper-container";
  let container = document.getElementById(containerId);
  if (container) return;

  container = document.createElement("div");
  container.id = containerId;
  container.style.cssText =
    "position:fixed;top:16px;right:16px;z-index:9999;max-width:320px;font-family:sans-serif;";

  // 卡片组件
  const card = document.createElement("div");
  card.style.cssText =
    "background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.12);padding:16px;margin-bottom:12px;";

  const title = document.createElement("h3");
  title.textContent = CFG.cardTitle;
  title.style.cssText = "margin:0 0 8px;font-size:16px;color:#333;";

  const body = document.createElement("p");
  body.textContent = CFG.cardBody;
  body.style.cssText = "margin:0 0 6px;font-size:14px;color:#555;line-height:1.5;";

  const link = document.createElement("a");
  link.href = CFG.siteUrl;
  link.textContent = CFG.siteUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.cssText =
    "display:inline-block;font-size:13px;color:#1a73e8;text-decoration:none;border-bottom:1px dashed #1a73e8;";

  card.appendChild(title);
  card.appendChild(body);
  card.appendChild(link);

  // 徽章区域
  const badgeWrap = document.createElement("div");
  badgeWrap.style.cssText =
    "background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.12);padding:12px 16px;margin-bottom:12px;display:flex;flex-wrap:wrap;gap:8px;";

  CFG.badgeList.forEach(function (kw) {
    const badge = document.createElement("span");
    badge.textContent = kw;
    badge.style.cssText =
      "display:inline-block;background:#e8f0fe;color:#1a73e8;font-size:12px;padding:4px 10px;border-radius:20px;font-weight:500;";
    badgeWrap.appendChild(badge);
  });

  // 访问说明
  const accessBox = document.createElement("div");
  accessBox.style.cssText =
    "background:#fff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.12);padding:12px 16px;";

  const accessTitle = document.createElement("div");
  accessTitle.textContent = "访问说明";
  accessTitle.style.cssText =
    "font-size:14px;font-weight:600;color:#333;margin-bottom:4px;";

  const accessDesc = document.createElement("p");
  accessDesc.textContent = CFG.accessInfo;
  accessDesc.style.cssText =
    "margin:0;font-size:13px;color:#666;line-height:1.5;";

  accessBox.appendChild(accessTitle);
  accessBox.appendChild(accessDesc);

  container.appendChild(card);
  container.appendChild(badgeWrap);
  container.appendChild(accessBox);

  document.body.appendChild(container);
})();