const { france } = require('../framework/france');

france({ nomCom: 'quote', categorie: 'Fun' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (fact) => {
          repondre(`╔══════════════════════════╗
║   𝐋𝐎𝐒-𝐑𝐈𝐎𝐒-𝐌𝐃              ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *BMW-MD*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝐋𝐎𝐒-𝐑𝐈𝐎𝐒-𝐌𝐃               ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by 𝐋𝐎𝐒-𝐑𝐈𝐎𝐒-𝐌𝐃);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
