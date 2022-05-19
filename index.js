const axios = require("axios");
const fs = require("fs");

const getQuote = async () => {
  try {
    const { data } = await axios.get("https://api.goprogram.ai/inspiration");
    const quote = data.quote;
    const author = data.author;

    console.log("new quote", `"${quote}"`);

    return {
      quote,
      author,
    };
  } catch (err) {
    console.error(err.message);
    return {};
  }
};

const generate = async () => {
  const { quote, author } = await getQuote();

  if (!quote) return;

  const content = fs.readFileSync("README.md", "utf8");

  const lastIndex = content.indexOf("⚡");
  if (lastIndex !== -1) {
    let subContent = content.substring(0, lastIndex);
    subContent += `⚡ Quote: \n**${quote}**\n\n${author}`
    fs.writeFileSync("README.md", subContent);
    return;
  }

  fs.appendFileSync("README.md", `⚡ Quote: \n**${quote}**\n\n${author}`);
};

generate();
