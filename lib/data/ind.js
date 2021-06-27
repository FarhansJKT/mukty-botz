exports.wait = () => {
	return`「 WAIT 」`

}

exports.succes = () => {
	return`「 SUKSES 」`
}

exports.lvlon = () => {
	return`「 LEVELEING AKTIF 」`
}

exports.lvloff = () => {
	return`「 LEVELEING MATI 」`
}

exports.premium = () => {
	return`「 UPGRADE PREMIUM 」`
}

exports.lvlnul = () => {
	return`「 LVL : 0 」`
}

exports.lvlnoon = () => {
	return`「 LEVEL MATI 」`
}

exports.noregis = () => {
	return`「 AKUN TIDAK DI KETAHUI 」

kamu belum terdaftar dalam bot ini , kamu blm ada dalam database bot ini
maka dari itu anda harus daftar dengan 

ketikan : ${prefix}verify namamu|umurmu
`
}

exports.baned = () => {
	return`「 TIDAK MENYETUJUI TINDAKAN 」

kamu telah terbanned , kamu tidak bisa menggunakan fitur bot ini
sampai masa hukuman mu selesai , chat owner untuk mengetahui brapa sisa waktunya
`
}

exports.rediregis = () => {
	return`「 TIDAK MENYETUJUI TINDAKAN 」

kami mengetahui bahwa anda sudah terdaftar di bot, anda hanya bisa mendaftar ulang jika bot update
`
}

exports.stikga = () => {
	return`「 FAILED : FITUR EROR 」`
}

exports.linkga = () => {
	return`「 404 : LINK TIDAK VALID 」`
}

exports.groupo = () => {
	return`「 FAILED : FITUR KHUSUS GRUP 」`
}

exports.ownerb = () => {
	return`「 FAILED : TIDAK MEMILIKI IZIN 」`
}

exports.ownerg = () => {
	return`「 200 : HANYA UNTUK OWNER 」`
}

exports.admin = () => {
	return`「 FAILED : KHUSUS ADMIN GRUP 」`
}

exports.badmin = () => {
	return`「 200 :  REQUESTS BOT 」

jadikan bot menjadi admin grup agar bisa melakukan fitur grup admins
`
}

exports.nsfwoff = () => {
	return`「 FAILED : NSFW TIDAK AKTIF 」`
}

exports.bug = () => {
	return`「 404 : FITUR BUG 」`
}

exports.wrongf = () => {
	return`「 404 : QUERY SALAH 」`
}

exports.clears = () => {
	return`「 200 : BERHASIL MENGCLEAR 」`
}

exports.pc = () => {
	return`「 404 : LU PAKE SC FHANS BERGUNA KEK NI ISI DONG! 」`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`「 VERIFY SUKSES 」

Nama ➸ ${namaUser}
Umur ➸ ${umurUser}
Time ➸ ${time}

Serial ? ${serialUser}`
}

exports.cmdnf = (prefix, command) => {
	return`「 404 : COMMAND TIDAK DITEMUKAN 」`
}

exports.owneresce = (pushname) => {
	return`「 404 : ${pushname} BUKAN OWNER 」`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
➸ *Nama* : ${pushname}
➸ *Nomor* : wa.me/${sender.split("@")[0]}
➸ *Xp* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`「 404 : LIMIT TELAH HABIS;( 」`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
*sisa limit anda :* _${limitCounts}_`
}

exports.satukos = () => {
	return`「 LU PAKE SC FHANS BERGUNA KEK AJG 」`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NAMA : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
