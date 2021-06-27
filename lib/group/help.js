const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku,) => {
        return `┌──「 *MUKTY* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname}
├ UANG : Rp:${uangku}
├ XP : ${reqXp}
├ LEVEL:${getLevelingLevel(sender)}
├ USER ${botName} : ${_registered.length}
├ OWNER:${ownerName}
├ TOTAL FITUR: 330
│          
}
exports.help = help
