const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const { stripIndents } = require('common-tags');
const ms = require('ms');
const moment = require('moment');
moment.locale('tr');

const verilersd = require("./bilgiler.json")
client.login("NzgxODI2MjY0NjUwNDgxNjg1.X8DScw.QFHsqD8zqbfLE2o4VBVz-j3aKDY");
const NOTFOUND = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle("Komut Devre Dışı")
  .addField("Komuta Ne oldu", "Bot içti. Bir hata oluştu.")
  .addField(
    "Komut ne zaman açılır?",
    "Komut muhtemelen 24 saat kadar sonra açılmış olur"
  )
  .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
  .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
const Repaired = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setTitle("Komut Tamir Edildi")
  .addField("Komutumuz tekrar aktif", "İlginiz için teşekkürler")
  .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
  .setFooter("Kitten ©2020", "https://i.hizliresim.com/3VeEp2.png");
const Duyuru = new Discord.MessageEmbed()
  .setColor("#cd853f")
  .addField(
    "Update Fikri Oylaması🔐",
    "@everyone | Bot için düşündüğünüz updateyi seçin"
  )
  .addField(
    "1.Fikir",
    verilersd.updateoylama1
  )
  .addField("2.Fikir",verilersd.updateoylama2);

const vipsec = new Discord.MessageEmbed()
  .setColor("#ff7f24")
  .setTitle("Yeni VIP üye")
  .addField(
    "Tebrikler Tali 🌙#0844✨",
    " Özel Sa-As karşılamasına sahip oldun"
  )
  .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
  .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
const vip = new Discord.MessageEmbed()
  .setColor("#ff7f24")
  .setTitle("VIP bilgi")
  .addField(
    "VIP nedir?",
    "VIP üyelik bot yapımcımız tarafından belirli aralıklarla destek sunucumuzda yapılan çekiliştir."
  )
  .addField(
    "VIP üyeliğin seviyeleri var mıdır?",
    "Evet vardır. Bunları çekilişlerde kazanırsınız. VIP seviyeler ve logoları şunlardır: \n 🔸 | Level 1 VIP \n 🔶 | Level 2 VIP \n 🔹 | Level 3 VIP \n 🔷 | Level 4 VIP"
  )
  .addField(
    "VIP üyelik ne işe yarar?",
    "VIP botta sadece sizin kullanabileceğiniz komutlar ekler."
  )
  .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
  .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
const botonline = new Discord.MessageEmbed()
  .setColor("#00ff00")
  .setTitle("Bot Tekrar Aktif")
  .addField("Botun son durumu:", "Kitten bot tekrar aktif")
  .setThumbnail("https://i.hizliresim.com/XiaprE.jpg")
  .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
client.on("ready", () => {
  var oynuyorkısımları = [
    "k!yardım",
    "Kitten v0.11.0",
    "17 Server.",
    ]
    setInterval(function() {
    
            var random = Math.floor(Math.random()*(oynuyorkısımları.length-0+1)+0);
           client.user.setActivity(oynuyorkısımları[random], { type: 'WATCHING' });
            },6000);
  console.log("Açıldım Sahibim");
  client.user.setActivity("k!yardım");
  client.channels.cache.get("807561926711443527").send(botonline);
});
const prefix = "k!";

client.on("message", async message => {
  if(message.content == db.get("mesajmiktar")+" Mesaj sildim"){
      if(!message.author == "782869032939290675") return
      else{
        message.delete({timeout : 3000})
      }
    }

  if(message.author == "782869032939290675") return
  if (
    message.content.toLowerCase() == "sa" ||
    message.content.toLowerCase() == "sea" ||
    message.content.toLowerCase() == "selamun aleyküm"
  ) {
    const server = message.guild.id
    if(db.fetch("saas"+server) == false) return
    if (
      message.author == "697391819142594680" ||
      message.author == "432919633272766475" ||
      message.author == "605329835966857247" ||
      message.author == "791951726613626881" ||
      message.author == "775968391382171659" ||
      message.author == "719311722275668079" ||
      message.author == "670707938880389121" ||
      message.author == "721779954676793394" ||
      message.author == "771067205856919594" ||
      message.author == "640447035148861440" ||
      message.author == "535117705854844940"
    ) {
      message.reply("Hey dostum VIP misin. Hoşgeldin, iyi eğlenceler");
    } else if (message.author == "782869032939290675") {
      return message.channel.send("Beni Paradoxa sokmayın. 😡");
    } else message.reply("Aleyküm Selam. Hoşgeldin");
  } else if (message.content.toLowerCase() == "napim") {
    if (message.author == "782869032939290675")
      return message.reply("Beni paradoxa Sokmayın >:(");
    await message.channel.send("Bişe Yapma");
  } else if (
    message.content.includes("aq") ||
    message.content.includes("amk")
  ) {
    const server = message.guild.id
    if (db.fetch("kufurengel" + server) == true) {
      if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) {
        const KüfürYok = new Discord.MessageEmbed()
          .setColor("#ff0000")
          .setTitle("Küfür Engel Açık")
          .addField(
            "Bu kanal Kitten Küfür-Engel Tarafından Korunuyor",
            message.author.tag
          )
          .setThumbnail(message.author.avatarURL)
          .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
        if (message.author == "605329835966857247") return;
        else {
          message.channel.bulkDelete(1);
          await message.reply(KüfürYok);
        }
      }
    }
  } 
  
  else if (message.content.toLowerCase() == "hayırdır") {
    await message.channel.send("Aynen Hayırdır?");
  } else if (message.content.includes("discord.gg")) {
    if(!db.fetch("link"+ message.guild.id) == true) return
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.bulkDelete(1);
      message.reply("buraya link atamazsın");
    }
  } else if (message.content.includes === "Mesaj sildim") {
    message.delete({ timeout: 4000 });
  }
  if (message.content.startsWith("k!")) {
    
    if (message.content.startsWith("k!updateoylama")) {
      const args = message.content
        .slice(14)
        .trim()
        .split(/ +/);
      if (message.author == "605329835966857247") {
        if(!args) return message.reply("Yazı yazman lazım sahibim.")
        message.channel.send(args.slice(0).join(' ')).then(a => {
          a.react("1️⃣");
          a.react("2️⃣");
          a.react("❌");
          a.react("✅")
        });
      } else message.reply("Bu mesajı sadece sahibim kullanabilir");
    } else if(message.content == "k!linkengelaç"){
       if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
        return message.reply("Mesajları Yönet Yetkiniz Bulunmamaktadır");
    db.set("link"+message.guild.id,true)
    message.reply("Link-Engel Açıldı")
  }else if(message.content == "k!linkengelkapa"){
     if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
        return message.reply("Mesajları Yönet Yetkiniz Bulunmamaktadır");
    db.set("link"+message.guild.id,false)
    message.reply("Link-Engel kapatıldı")
  }else if (message.content.startsWith("k!duyur")) {
      const etiket = message.mentions.roles.first()
      if(etiket) return message.reply("Rol etiketleyemezsiniz")
      const args = message.content
        .slice(7)
        .trim()
        .split(/ +/);

      if (!args[0]) return message.reply("Bir şey yazmalısınız");
      if(message.content.includes("@everyone")) return await message.reply("Everyone çekemezsiniz")
      if(message.content.includes("@here")) return await message.reply("Here çekemezsiniz")
      message.channel.send(message.channel.send(args.slice(0).join(' ') + " by "+ message.author.username));
      
    } else if (message.content == "k!reboot") {
      if (message.author == "605329835966857247") {
        message.channel.send("Yeniden Başlatılıyor")
        client.destroy();
        client.login("NzgyODY5MDMyOTM5MjkwNjc1.X8Sdmg.H9mjw_cs0MHl7igFrbHvoCrUvp8");
        message.channel.send(
          "Lütfen bekleyin. Bot birkaç saniye sonra aktif olacak."
        );
        console.log("Açıldım Sahibim");
        client.user.setActivity("k!yardım");
        client.channels.cache.get("782873697110982667").send(botonline);
      }
    } 

else if(message.content.startsWith("k!yetkilerim")){

let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (message.member.hasPermission("ADMINISTRATOR")) x = "✅"
    if (!message.member.hasPermission("ADMINISTRATOR")) x = "❌"
    
    //Denetim kaydı
    if (message.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "✅"
    if (!message.member.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌"
    
    //Sunucuyu yönet
    if (message.member.hasPermission("MANAGE_GUILD")) x3 = "✅"
    if (!message.member.hasPermission("MANAGE_GUILD")) x3 = "❌"
    
    //Rolleri yönet
    if (message.member.hasPermission("MANAGE_ROLES")) x4 = "✅"
    if (!message.member.hasPermission("MANAGE_ROLES")) x4 = "❌"
    
    //Kanalları yönet
    if (message.member.hasPermission("MANAGE_CHANNELS")) x5 = "✅"
    if (!message.member.hasPermission("MANAGE_CHANNELS")) x5 = "❌"
    
    //üyeleri at
    if (message.member.hasPermission("KICK_MEMBERS")) x6 = "✅"
    if (!message.member.hasPermission("KICK_MEMBERS")) x6 = "❌"
    
    //üyeleri yasakla
    if (message.member.hasPermission("BAN_MEMBERS")) x7 = "✅"
    if (!message.member.hasPermission("BAN_MEMBERS")) x7 = "❌"
    
    //mesajları yönet
    if (message.member.hasPermission("MANAGE_MESSAGES")) x8 = "✅"
    if (!message.member.hasPermission("MANAGE_MESSAGES")) x8 = "❌"
    
    //kullanıcı adlarını yönet
    if (message.member.hasPermission("MANAGE_NICKNAMES")) x9 = "✅"
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) x9 = "❌"
    
    //emojileri yönet
    if (message.member.hasPermission("MANAGE_EMOJIS")) x10 = "✅"
    if (!message.member.hasPermission("MANAGE_EMOJIS")) x10 = "❌"
    
    //webhookları yönet
    if (message.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "✅"
    if (!message.member.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌"
    
    message.channel.send(stripIndents`
    \`\`\`diff
    ${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
   `)
}
    
    
     else if (message.content.startsWith("k!avatar")) {
      let user = message.mentions.users.first();
      if (!user) return message.reply("Birini etiketlemelisin");
      const link = user.displayAvatarURL({ dynamic: true })
      const avatarED = new Discord.MessageEmbed()
        .setColor("#97ffff")
        .setDescription("[[INDIR]]("+ link +")")
        .setImage(user.displayAvatarURL({ dynamic: true }));
      message.channel.send(avatarED);
    }
  else if(message.content.startsWith("k!mutelog")){
    const hedef = message.mentions.channels.first()
    db.set("logkanal"+message.guild.id, hedef.id)
    message.reply("Başarıyla mute-log ayarlandı")
  }  
 else if(message.content.startsWith("k!mute")){
   const args = message.content
        .slice(7)
        .trim()
        .split(/ +/);
   if(!db.get("logkanal"+message.guild.id)) return message.reply("Bir log belirtiniz. Kod: k!mutelog");
if(!args[0]) return message.channel.send('Bir kullanıcıyı etiketlemelisin.');
if(!message.mentions.members.first()) return message.channel.send('Etiketlediğin kullanıcıyı bulamıyorum.');
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send('Etiketlediğin kullanıcıyı bulamıyorum.');
let argument_one = ['saniye', 'dakika', 'saat', 'gün'];
if(!args[1]) return message.channel.send(`Bir süre belirtmelisin.\nÖrnek: k!mute ${message.mentions.members.first()} 5 gün reklam`);
if(!args[2]) return message.channel.send(`Geçerli bir zaman belirtmelisin.\n${argument_one.map(a => `**${a}**`).join('/')}`)
if(!argument_one.includes(args[2])) return message.channel.send(`Geçerli bir zaman belirtmelisin.\n${argument_one.map(a => `**${a}**`).join('/')}`)
if(args[1] > 14 && args[2] == "gün") return message.reply("14 Günden fazla susturamazsınız")
   if(args[1] > 20160 && args[2] == "dakika") return message.reply("14 Günden (20160dk) fazla susturamazsınız")
   if(args[1] > 336 && args[2] == "saat") return message.reply("14 Günden (336saat) fazla susturamazsınız")
let reason = 'Bir sebep girilmemiş.';
if(args[3]) reason = args.slice(3).join(' ');
let end = Date.now()+ms(args[1]+' '+args[2].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day'));

db.set(member.user.id, { 
end: end,
start: Date.now(),
moderatorUsername: message.author.username,
moderatorID: message.author.id,
moderatorAvatarURL: message.author.displayAvatarURL({ dynamic: true }),
reason: reason
});

let logChannelID = db.get("logkanal"+message.guild.id); // sizin log kanalızın idsi
let logChannel = await message.guild.channels.cache.get(logChannelID);


var muterole2 = message.guild.roles.cache.find(r => r.name == "Susturulmuş")
  if(!muterole2){
    try{
      muterole2 = await message.guild.roles.create({
        data:{
        name: "Susturulmuş",
        color: "#ff3030",
        permissions:[],
        reason: "Susturulmuş Kitten Bot"
        }
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole2, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      message.channel.send("hata oluştu")
    }
  }
  message.guild.members.cache.get(member.id).roles.add(muterole2.id)
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setTitle('Birisi susturuldu!')
.setColor('RED')
.setDescription(`**• Moderatör**: ${message.author}
**• Susturulan**: <@!${member.user.id}>
**• Sebep**: ${reason}
**• Bitiş zamanı:**: ${moment(end+ms('3h')).format('DD.MM.YYYY - HH:mm:ss')}`);
message.channel.send(`Başarılı, ***${member.user.tag}*** susturuldu.`);
logChannel.send(embed);
setTimeout(() => {
return member.roles.remove(muterole2.id).then(() => db.delete(member.user.id) && logChannel.send(embed.setColor('GREEN').setTitle('Susturulması açıldı.').setDescription(`**• Moderatör**: ${message.author}
**• Susturulan**: <@!${member.user.id}>
**• Sebep**: ${reason}`)));
}, ms(args[1]+' '+args[2].replace('dakika', 'minutes').replace('saat', 'hours').replace('saniye', 'seconds').replace('gün', 'day')));
 
 
 } 
 /*else if (message.content.startsWith("k!unmute")) {
      if (!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR"))
        return message.reply("Ban veya Yönetici yetkisine sahip olmalısınız.");
      const user = message.mentions.users.first();
      if (!user) return message.reply("Susturmam için kişi belirtiniz.");
      var muterole2 = message.guild.roles.cache.find(
        r => r.name == "Susturulmuş"
      );
      if (!muterole2)
        return message.reply(
          "Susturulmuş rolü bulunamadı. Lütfen daha önce birini susturduğunuzdan emin olun"
        );
      message.guild.members.cache.get(user.id).roles.remove(muterole2.id);
      message.channel.send(user.username + "'nin mutesi alındı");
    } */else if (message.content == "k!ping") {
      if (
        message.author == "697391819142594680" ||
        message.author == "432919633272766475" ||
        message.author == "605329835966857247" ||
        message.author == "791951726613626881" ||
        message.author == "775968391382171659" ||
        message.author == "719311722275668079" ||
        message.author == "670707938880389121" ||
        message.author == "721779954676793394" ||
        message.author == "771067205856919594" ||
        message.author == "640447035148861440" ||
        message.author == "535117705854844940"
      ) {
        message.channel.send(
          `🏓Botun pingi: ${Date.now() -
          message.createdTimestamp}ms. Discord API pingi: ${Math.round(
            client.ws.ping
          )}ms`
        );
      } else return await message.reply("VIP üye olmanız gerekmektedir");
    }





    else if (message.content == "k!updategeçmişi") {
      const updategecmisi = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setTitle("Update Geçmişi")
        .addField("Bilgi:", "v0.10 dan önceki sürümler eklenmemiştir.")
        .addField("v0.10.0", "Unmute ve Mute eklendi")
        .addField("v0.10.1", "Unmute ve Mute güncellendi")
        .addField("v0.10.2", "Botun logosu değişti")
        .addField(
          "v0.10.3",
          "Update Geçmişi eklendi. Bot sürümleri kayıt altına alınmaya başladı"
        )
        .addField("v0.10.4", "VIP üyelere özel k!ping komutu eklendi")
        .addField("v0.10.5", "k!davet menüsü yenilendi")
        .addField("v0.10.6", "Küfür-Engel geri geldi")
        .addField("v0.10.7","Sa-As açılıp kapanabilir oldu")
        .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
      await message.channel.send(updategecmisi);
    } else if (message.content.startsWith("k!unban")) {
      if (!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) {
        return message.reply(
          "Birinin banını açmaya yetkin yok"
        );
      }

      if (!message.guild.me.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR")) {
        return message.channel.send(
          `**${message.author.username}**, Birinin banını açmaya yetkim yok`
        );
      }
      const args = message.content
        .slice(7)
        .trim()
        .split(" ");
        try{
      const id = args.shift().toLowerCase();
      if(!id) return message.reply("Hani id. bir kullanıcının idsini gir")
      message.guild.members.unban(id);
      message.channel.send("Başarıyla <@" + id + "> unbanlandı");}
      catch(e){
        message.channel.send("Hata")
      }
    } else if (message.content.startsWith("k!bilgi")) {
      const bilgi = new Discord.MessageEmbed()
        .setColor("#a0522d")
        .setAuthor(message.author.tag)
        .setTitle("Önemli Bilgilendirme!")
        .addField(
          "Bot Değişimleri",
          "Botta şu anda aktif bir link engel bulunmaktadır. \n Bu önlem yönetici ve mesajları yönet rölüne sahip kişileri etkilemez. \n Bu database sorunların dolayı kapatılamamaktadır ancak yakında fixlenecektir. \n Not: Link engel discord sunucu linkleri içindir. "
        )
        .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png");
      message.channel.send(bilgi);
    } else if (message.content === "k!vip") {
      if (message.author == "605329835966857247") {
        message.channel.send(vipsec);
      } else message.reply("Bu mesajı sadece sahibim kullanabilir")
    } else if (message.content === "k!yardım") {
      const yardimkomut = new Discord.MessageEmbed()
        .setColor("#00e5ee")
        .setTitle("Kitten Yardım")
        .setAuthor(message.author.tag)
        .addField("Moderasyon:", "k!yardım-moderasyon")
         .addField("Meraklısına:","k!yardım-meraklısına")
      .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png")
      message.channel.send(yardimkomut);
    } else if(message.content == "k!yardım-moderasyon"){
      const yardimkomut = new Discord.MessageEmbed()
        .setColor("#00e5ee")
        .setTitle("Kitten Yardım")
        .setAuthor(message.author.tag)
        .addField("Ban", "k!ban @isim")
        .addField("Kick", "k!kick @isim")
        .addField("Sa-As","k!sa-asaç / k!sa-askapa")
        .addField("Chati Temizle", "k!sil [Miktar] parantez koymayın")
       
        .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png")
      .setImage("https://i.hizliresim.com/L9OhjO.gif")
        .addField("Botumuzu davet edin", "k!davet")
        .addField("VIP Yardım", "k!vipyardım")
        .addField("Avatar", "k!avatar")
        .addField("Küfür Engel", "k!küfüraç k!küfürkapa \n Not: Daha tüm küfürler eklenmemiştir")
        .addField("Mute", "k!mute")
        .addField(
          "Duyuru",
          "k!duyur"
        )
        .addField("Unban", "k!unban")
        .addField("Update Geçmişi", "k!updategeçmişi")
        .addField(
          "Bilgilendirme",
          "Eğer bir komut çalışmıyorsa kontrol etmenizi öneririz. Komut: k!bilgi"
        );
      message.channel.send(yardimkomut);
    }
      else if(message.content == "k!yardım-meraklısına"){
              const yardimkomut = new Discord.MessageEmbed()
        .setColor("#00e5ee")
        .setTitle("Kitten Yardım")
        .setAuthor(message.author.tag)
      .addField("Ping[VIP]", "k!ping")  
      .setImage("https://i.hizliresim.com/Y3IKaz.gif")  
       .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png") 
        .addField("İstatistik:","k!i")
         .addField("Update Bilgi", "k!update")
              .addField("Betalar","k!yardım-beta")
              message.channel.send(yardimkomut)
      }
    
      else if (message.content === "k!update") {
      const updateexe = new Discord.MessageEmbed()
        .setColor("#0000ee")
        .setTitle("Kitten Update")
        .addField("Sonraki Update Tarihi", verilersd.updatetarihi)
        .addField(
          "Sonraki Update Fikri",
          verilersd.eklenecekler
        )
        .addField("Son Update:",verilersd.soneklenenler)
        .addField("Önceki Update:", verilersd.oncekiupdate)
        .setThumbnail("https://i.hizliresim.com/3VeEp2.png")
        .setFooter(
          "Kitten v0.11.1 Release | Kitten Bot ©2020",
          "https://i.hizliresim.com/3VeEp2.png"
   
        );
      message.channel.send(updateexe);
    } else if (message.content == "k!küfürreset") {
      /*   if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return message.reply("Bunun için yeterli yetkin yok. Yönetici ya da mesajları yönet yetkisine sahip olduğundan emin ol")
      message.channel.send("Küfür engel sıfırlandı ve şuan açık")
  
      db.set(message.channel.id,"1")*/
      message.channel.send(NOTFOUND);
    }else if(message.content == "k!sa-asaç"){
      const server = message.guild.id
       if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return await message.reply("Bu işlem için mesajları yönet gerekmektedir")
      try{
      db.set("saas"+server,true)
      message.reply("Sa-As açıldı")
      }
      catch(e){
        message.reply("Hata oluştu")
      }
    } 

    
else if(message.content == "k!sa-askapa"){
       if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return await message.reply("Bu işlem için mesajları yönet gerekmektedir")
      const server = message.guild.id
      try{
      db.set("saas"+server,false)
      message.reply("Sa-As Kapatıldı")
      }
      catch(e){
        message.reply("Hata oluştu")
      }
    } 
    else if (message.content === "k!vipyardım") {
      message.channel.send(vip);
    } else if (message.content == "k!küfüraç") {
 if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return await message.reply("Bu işlem için mesajları yönet gerekmektedir")
      try {
        const server = message.guild.id
        db.set("kufurengel" + server, true)
        message.reply("Küfür engel açıldı")
      } catch (e) {
        message.reply("Hata")
      }
    }
    else if (message.content == "k!küfürkapa") {
      if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR")) return await message.reply("Bu işlem için mesajları yönet gerekmektedir")
      const server = message.guild.id
      try {
        db.set("kufurengel" + server, false)
        message.reply("Küfür engel kapatıldı")
      }
      catch (e) {
        message.reply("Hata")
      }
    }
    else if(message.content == "k!yapayzekaaç"){
      if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
        return message.reply("Bu işlem için mesajları yönet yetkisi gerekir");
      message.reply("Heya yapay zeka servisimi açmış bulunuyorsun")
      const server = message.guild.id;
      db.set("zeka"+server,true)
    }
    else if (message.content.startsWith("k!sil")) {
      const args = message.content
        .slice(5)
        .trim()
        .split(" ");
      if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
        return message.reply("Silme Yetkiniz Bulunmamaktadır");
      if (!args[0]) return message.reply("Bir miktar giriniz");
      if (args > 99) {
        return message.reply("99 dan büyük bir sayı giremezsiniz");
      }
      if (!args) return message.reply("Bi miktar giriniz");
      await message.delete()
      message.channel.bulkDelete(args[0], true);
      message.channel.send(args[0] + " Mesaj sildim");
      db.set("mesajmiktar", args[0])

    }  
    else if (message.content.startsWith("k!otorolayarla")) {
      const kanal = message.mentions.channels.first()
      if (!kanal) return await message.reply("Bir kanal belirtin")
      const server = message.guild.id
      db.set("otorolkanal" + server, kanal)
     


      var muterole2 = message.guild.roles.cache.find(
        r => r.name == "Yeni Gelen"
      );
      db.set("otorol" + server, true)
      if (!muterole2) {
        try {
          muterole2 = await message.guild.roles.create({
            data: {
              name: "Yeni Gelen",
              color: "#ff3030",
              permissions: [],
              reason: "otorol"
            }

          }
          );
          await message.reply("Oto rol ayarlandı")
          message.guild.channels.cache.forEach(async (channel, id) => {
            await channel.createOverwrite(muterole2, {
              SEND_MESSAGES: true,
            });
          });
          message.reply("Oto rol ayarlandı")
        } catch (e) {
          message.channel.send("hata oluştu");
        }

      } message.reply("Oto rol ayarlandı")


    }



    else if (message.content == "k!otorolkapat") {

      let server = message.guild.id
      if (db.fetch("otorol" + server) == false) return await message.reply("Otorol zaten kapalı")
      db.set("otorol" + server, false)
      message.reply("Otorol kapatıldı")
    }

    else if(message.content == "k!i"){
      const aile2 = client.guilds.cache.size
      const aile3 = client.users.cache.size
      
   const aile = new Discord.MessageEmbed()
   const os = require("os");
require("moment-duration-format");
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Kitten Bot ©2021", client.user.avatarURL())
    .addField("» **Botun Sahibi**", "<@605329835966857247>")
    .addField("» **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \n Discord API Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Çalışma süresi**", seksizaman, true)
    .addField("» **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("**» Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
   
   
   
 
    }
    else if (
      message.content === "k!davet"
    ) {
      const davet = new Discord.MessageEmbed()
        .setTitle("Kitten Bot")
        .setColor("# 00ff7f")
        .setDescription(
          "[BOTUN DAVET LİNKİ](https://discord.com/oauth2/authorize?client_id=782869032939290675&scope=bot&permissions=8) \n [DESTEK SUNUCUMUZ](https://discord.gg/EgxE9PjMba)"
        )


        .setFooter("Kitten Bot ©2020", "https://i.hizliresim.com/3VeEp2.png")
        .setThumbnail("https://i.hizliresim.com/3VeEp2.png");
      message.channel.send(davet);
    } else if (message.content.startsWith("k!kick")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (!message.member.hasPermission("KICK_MEMBERS" || "ADMINISTRATOR"))
          return message.reply("Kick Yetkiniz Bulunmamaktadır");
        if (user.id == "605329835966857247")
          return message.reply("Sahibimi atamam");
        if (user.id == message.author.id)
          return message.reply("kendini atamazsın");
        if (member) {
          member
            .kick("Kicked by Kitten Bot")
            .then(() => {
              message.reply(`Başarıyla Atıldı ${user.tag}`);
            })
            .catch(err => {
              message.reply(
                "Bu kullanının benden fazla yetkiye sahip olup olmadığını kontrol et ve tekrar dene"
              );

              console.error(err);
            });
        } else {
          message.reply("Böyle bir kullanıcı yok");
        }
      } else {
        message.reply("kimi atacağını söylemedin");
      }
    } else if (message.content.startsWith("k!ban")) {
            const user = message.mentions.users.first();
      const args = message.content
        .slice(7)
        .trim()
        .split(/ +/);
        if(!args) return message.reply("Bir sebep belirtiniz")

      if (user) {
        const member = message.guild.member(user);
        if (!message.member.hasPermission("BAN_MEMBERS" || "ADMINISTRATOR"))
          return message.reply("Ban Yetkiniz Bulunmamaktadır");
        if (user.id == "605329835966857247")
          return message.reply("Sahibimi Banlayamam");
        if (user.id == message.author.id)
          return message.reply("kendini banlayamazsın");
        if (member) {
          member
            .ban({
              reason: "Banned by Kitten Bot"
            })
            .then(() => {
              message.reply(`Başarıyla Banlandı ${user.tag}`);
            })
            .catch(err => {
              message.reply(
                "Bu kullanının benden fazla yetkiye sahip olup olmadığını kontrol et ve tekrar dene"
              );
              console.error(err);
            });
        } else {
          message.reply("Burada öyle biri yok");
        }
      } else {
        message.reply("Kimi banlayacağımı söylemedin");
      }
    } else if(message.content == "k!yapayzekakapa"){
if (!message.member.hasPermission("MANAGE_MESSAGES" || "ADMINISTRATOR"))
        return message.reply("Bu işlem için mesajları yönet yetkisi gerekir");
    db.set("zeka"+message.guild.id,false)
  message.reply("ühü artık iq seviyem düştü.")
}else if (message.content == "k!malbot") {
      const Malbot = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Bana Mal dedin")
        .addField("Sana çok kızdım", "Bot içti. Bir hata oluştu.")
        .addField("Bana mal demeye hakkın yok", "Hemen geri al")
        .setThumbnail(message.author.avatarURL())
        .setFooter(
          "Kitten Bot ©2020 ERR CODE: K1ZD1M",
          "https://i.hizliresim.com/3VeEp2.png"
        );
      message.channel.send(Malbot);
    } else {
      message.channel.send("Aradığınız komutu bulamıyorum");
    }
  }
});
client.on("guildMemberAdd", async (member, guild, message) => {
  let server = guild
  if (db.fetch("otorolkanal" + server) == true) {

    let kanal = db.get("otorolkanal" + server)
    if (!kanal) return
    const otorolhata = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("HATA")
      .setDescription("Lütfen otorolü tekrar ayarlayınız")
    var muterole2 = message.guild.roles.cache.find(
      r => r.name == "Yeni Gelen"
    );
    if (!muterole2) {
      return await client.channels.cache.get(kanal).send(otorolhata);

    }
    await message.guild.members.cache.get(member).roles.add(muterole2);
    const yeniuye = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(member.name + " Sunucuya giriş yaptı")
    await client.channels.cache.get(kanal).send(yeniuye);


  }
  /* 
   client.channels.cache.get(db.get("kanal"+guild)).send(yeniuye);*/
});
client.on("message", async message => {
  if(message.author == "782869032939290675") return
  const server = message.guild.id
if(!db.fetch("zeka"+server) == true) return
if(message.content.toLocaleLowerCase().includes("hrrr")){
  message.reply("Bağırma lan millete.")
}
else if(message.content.toLocaleLowerCase().includes("hav")){
  message.reply("Köpeklerle işim olmaz benim")
}
else if(message.content.toLowerCase() == "yo"){
  message.reply("yo")
}
else if(message.content==  ":D"){
  message.reply(":D")
}
else if(message.content == "nE"){
  message.reply("nE")
}
if(!message.content.toLowerCase().includes('kitten')) return
else if(message.content.toLowerCase().includes('salak')){
message.reply("Kardeşim karşındaki aynayı gördün mü")
}
else if(message.content.toLowerCase().includes('naber')){
message.reply("ii senden")
}
else if(message.content.toLowerCase().includes('iyiyim')){
  message.reply("Ne güzel :D")
}
else if(message.content.toLowerCase().includes('sa')){
message.reply("Aleyküm Selam Hoşgeldin AB")
}
else if(message.content.toLowerCase().includes('nasılsın')){
message.reply("iyiyim sen nasılsın")
}
else if(message.content.toLowerCase().includes("cinsin ne")){
  message.reply("Ben yapay zekaya sahip tek kediyim. İsmini sen koy")
}
else if(message.content.toLowerCase().includes("seni kim yaptı") || message.content.toLowerCase().includes("yapımcın kim") ){
  message.reply("Beni <@605329835966857247> yaptı. Tanışmak istersen k!davet diyip destek sunucumuza gelebilirsin")
}
else if(message.content.toLowerCase().includes("çocuklar nası")){
  message.reply("iyiler seninkiler nasıllar")
}
else if(message.content.toLowerCase().includes("gram altın ne kadar")){
  message.reply("Gram altının fiyatını bilmiyorum dostum.")
}
else if(message.content.toLowerCase().includes("mal")){
  message.reply("Beni kızdıramazsın")
}
else if(message.content.toLowerCase().includes("salak")){
  message.reply("Beni kızdıramazsın")
}

else{
  message.reply("Efendim. Dediğini anlayamadım.")
}


})
