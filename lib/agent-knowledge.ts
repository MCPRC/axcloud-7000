/** 从内置知识库匹配常见问题。 */
export function offlineAnswer(question: string, locale: string): string {
  const q = question.toLowerCase();
  const en = locale === "en";
  const has = (...k: string[]) => k.some(x => q.includes(x));

  if (has("官网", "网站", "建站", "website", "site", "博客", "blog")) {
    return en
      ? "For a company website, start with a [Lightweight Server](/products/lighthouse) (from ¥24/mo) or a 2 vCPU / 4 GB [ECS](/products/ecs) instance at ¥68/mo. Add an [SSL certificate](/products/ssl) for HTTPS, and if you serve users in mainland China, complete [ICP filing](/products/icp) first."
      : "企业官网建议先从 [轻量应用服务器](/products/lighthouse)（¥24/月起）或 2 核 4G 的 [云服务器 ECS](/products/ecs)（¥68/月）开始：\n- 配一张 [SSL 证书](/products/ssl) 开启 HTTPS\n- 面向内地用户需先完成 [ICP 备案](/products/icp)\n- 图片多的话加上 [CDN](/products/cdn)\n访问量上来后可以随时升级规格。";
  }
  if (has("gpu", "显卡", "训练", "推理")) {
    return en
      ? "[GPU instances](/products/gpu) start at ¥1,980/mo and range from a single card for inference to multi-card nodes for training. Tell me the model size and expected traffic and I can suggest a size, or talk to a person for cluster pricing."
      : "[GPU 云服务器](/products/gpu) 包月 ¥1980 起，从单卡推理到多卡训练节点都有。告诉我模型参数量和预期并发，我可以帮你估算规格；千卡集群需要销售单独报价，可以点「转人工」。";
  }
  if (has("token", "大模型", "模型", "model", "计费", "billing", "收费")) {
    return en
      ? "The [Model Service Platform](/products/maas) bills per token. Sample input prices per million tokens: DeepSeek-V3 ¥2, Qwen3-235B ¥2, Kimi-K2 ¥4, Qwen3-Coder ¥4. New accounts get 5M free tokens, and the API is OpenAI-compatible."
      : "[大模型服务平台](/products/maas) 按 Token 计费，每百万输入 Tokens 示例价：\n- DeepSeek-V3、Qwen3-235B、GLM-4.5：¥2\n- Kimi-K2、Qwen3-Coder：¥4\n- bge-m3 向量：¥0.5\n注册即送 500 万 Tokens，接口兼容 OpenAI 格式。";
  }
  if (has("备案", "icp")) {
    return en
      ? "Submit your [ICP filing](/products/icp) online. You need a server in a mainland China region. Review usually takes 7–20 business days depending on the provincial authority."
      : "在 [ICP 备案](/products/icp) 页面在线提交资料即可，前提是有一台中国内地地域的服务器。审核一般需要 7–20 个工作日，以各省管局为准，期间有专人协助。";
  }
  if (has("价格", "多少钱", "price", "cost", "便宜", "优惠", "99")) {
    return en
      ? "ECS monthly sample prices in mainland regions: 2C4G ¥68, 4C8G ¥136, 8C16G ¥272, 16C32G ¥544. Hong Kong and overseas cost about 1.25×. New customers can get 2C2G for ¥99/year."
      : "云服务器 ECS 内地地域包月示例价：2 核 4G ¥68，4 核 8G ¥136，8 核 16G ¥272，16 核 32G ¥544；香港和海外约 1.25 倍。新用户 2 核 2G 首购 ¥99/年，续费同价。";
  }
  if (has("数据库", "mysql", "database", "redis")) {
    return en
      ? "[RDS for MySQL](/products/rds-mysql) starts at ¥56/mo with HA and automated backups. Add [Redis](/products/redis) (from ¥25/mo) for caching."
      : "[云数据库 MySQL](/products/rds-mysql) ¥56/月起，默认主备高可用和自动备份；需要缓存可搭配 [云数据库 Redis](/products/redis)（¥25/月起）。";
  }
  return en
    ? "I can help with picking a configuration, pricing, ICP filing and account questions. Try asking about websites, GPU sizes or model pricing — or choose \"Talk to a person\" for anything account-specific."
    : "我可以帮你选配置、估算价格，解答备案和账号问题。可以问我“建站选什么配置”“GPU 有哪些规格”“大模型怎么计费”；账号相关的具体问题，建议点「转人工」。";
}
