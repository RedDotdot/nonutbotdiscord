const Discord = require("discord.js");
const fs = require('fs');
const { on } = require("process");
const Client = new Discord.Client;
jour = new Date().getDate().toString()
verif = 0
MainChannel = 0
Client.login(process.env.TOKEN);
Client.on("ready", () => {console.log("Ready");})
az = 0
//Constructeur Objet player
function players(id, member, level, statut){
    id = new Array();
    member = new Array();
    level = new Array();
    statut = new Array();
    this.id = id;
    this.member = member;
    this.level =level;
    this.statut=statut;
}
PlayerList = new players([],[],[],[])
//Quand le client envoie un message
Client.on("message", message => {
    jour = new Date().getDate().toString()
    function reload() {
            console.log('if');
            liste = PlayerList.id.length
            console.log(liste);
            for(i = 0; i < liste; i++){
                if(PlayerList.statut[i] == 'play'){
                    PlayerList.level[i]=jour;
                    switch(parseInt(jour)){
                        case 1:
                            PlayerList.member[i].roles.add("772583454126374923")
                        break;
                        case 2:
                            PlayerList.member[i].roles.add("772583454126374923")
                        break;
                        case 3:
                            PlayerList.member[i].roles.add("772583731760070656")
                        break;
                        case 4:
                            PlayerList.member[i].roles.add("772583731760070656")
                        break;
                        case 5:
                            PlayerList.member[i].roles.add("772583731760070656")
                        break;
                        case 6:
                            PlayerList.member[i].roles.add("772583731760070656")
                        break;
                        case 7:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 8:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 9:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 10:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 11:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 12:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 13:
                            PlayerList.member[i].roles.add("772583951239610378")
                        break;
                        case 14:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 15:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 16:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 17:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 18:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 19:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 20:
                            PlayerList.member[i].roles.add("772584181217230888")
                        break;
                        case 21:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 22:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 23:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 24:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 25:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 26:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 27:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 28:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 29:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 30:
                            PlayerList.member[i].roles.add("772584561997512764")
                        break;
                        case 31:
                            PlayerList.member[i].roles.add("772584845666549810")
                        break;
                        default:
                            PlayerList.member[i].roles.add("772861441048969216")
                        break;

                    }
                }
        }    
    }
    if(verif != jour){reload()
    verif = jour}
    az = az + 1
    if(az == 50){
        reload()
        az = 0
    }
    function addPlayer(){
        PlayerList.id.push(message.member.id)
        PlayerList.member.push(message.member)
        PlayerList.level.push(jour)
        PlayerList.statut.push('play')
    }
    function quitPlayer(){
        PlayerList.statut[PlayerList.id.indexOf(message.member.id)] = "quit"
    }
    function failedPlayer(){
        PlayerList.statut[PlayerList.id.indexOf(message.member.id)] = "failed"
    }
    function playPlayer() {
        PlayerList.statut[PlayerList.id.indexOf(message.member.id)] = "play"
    }
    function levelPlayer(){
        return PlayerList.level[PlayerList.id.indexOf(message.member.id)]   
    }
    function memberPlayer(){
        return PlayerList.member[PlayerList.id.indexOf(message.member.id)]
    }
    function idPlayer(){
        return PlayerList.id[PlayerList.id.indexOf(message.member.id)]
    }
    function statutPlayer(){
        return PlayerList.statut[PlayerList.id.indexOf(message.member.id)]
    }
    //Erreur de message privé
    if(message.channel.type == 'dm' && message.author.bot != true){
        message.reply("Oops, vous devez me parlez sur le serveur")
    }
    //Verification si le message est dans un channel du serveur
    if(message.channel.type != 'dm'){
        //Message en console
        console.log("---"+message.channel.displayName+"---"+message.member.displayName+": "+message.content);
        //Verification si le message est écrit par un admin
        if(message.member.hasPermission('ADMINISTRATOR')){
            /*Commandes Admin:
            -setmain Va mettre le chanel du message comme channel main
            */
            switch(message.content){
                case '!setmain':
                    MainChannel = message.channel;
                    message.reply("A présent toutes les commendes se feront dans ce channel")
                break;
            }
        }
        //Verifie si le message est dans le channel main
        if(message.channel == MainChannel){
            /*Commandes Publiques            
            -join s'ajouter au défi
            -quit
            -failed
            */
            switch(message.content.toLowerCase()){
                case '!joinut':
                //si l'id du player n'existe pas
                if(PlayerList.id.indexOf(message.member.id) == -1){
                    addPlayer();
                    message.reply('Vous avez rejoint le challenge avec succes !')
                    reload()
                }
                else{
                    //s'il existe mais que le player a perdu
                    if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="failed"){
                        message.reply('Oops, il semble que vous ayez déja échoué au challenge...')
                    }
                    else{
                        //s'il existe et que le player avait quitté
                        if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="quit"){
                            message.reply('Vous avez rejoint a nouveau le challenge, bon retour parmi noux!')
                            playPlayer()
                        }
                        else
                        {
                            //s'il existe et que le player joue déja
                            if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="play"){
                                message.reply('Vous avez déja rejoint le challenge!')
                            } 
                        }
                    }
                
                }
                break;
                case '!quit':
                    //si l'id du player n'existe pas
                    if(PlayerList.id.indexOf(message.member.id) == -1){
                        message.reply("Vous ne pouvez pas quitter, vous n'avez même pas rejoint...")
                    }
                    else{
                        //s'il existe mais que le player a perdu
                        if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="failed"){
                            message.reply('Vous avez échoué au challenge, vous ne pouvez pas quitter.')
                        }
                        else{
                            //s'il existe et que le player avait quitté
                            if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="quit"){
                                message.reply('Vous avez déja quitté')
                            }
                            else{
                                //s'il existe et que le player joue
                                if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="play"){
                                    quitPlayer()
                                    message.reply('Vous avez quitté le challenge avec succes ...')
                                }
                            }
                        }
                    }
                break;
                case '!failed':
                    //si l'id du player n'existe pas
                    if(PlayerList.id.indexOf(message.member.id) == -1){
                        message.reply("Vous ne pouvez pas perdre, vous n'avez même pas rejoint...")
                    }
                    else{
                        //s'il existe mais que le player a perdu
                        if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="failed"){
                            message.reply('Vous avez déja échoué au challenge.')
                        }
                        else{
                            //s'il existe et que le player avait quitté
                            if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="quit"){
                                message.reply('Vous avez quitté, rejoignez et essayez de ne pas échouer.')
                            }
                            else{
                                //s'il existe et que le player joue
                                if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="play"){
                                    failedPlayer()
                                    message.reply('Vous avez perdu au '+jour+'ème jour')
                                }
                            }
                        }
                    }
                break;
                case '!stat': 
                    //si l'id du player n'existe pas
                    if(PlayerList.id.indexOf(message.member.id) == -1){
                        message.reply("Vous n'avez pas de stat, vous n'avez pas rejoint")
                    }
                    else{
                        //s'il existe mais que le player a perdu
                        if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="failed"){
                            message.reply("\n**Vos stats:**\n-votre niveau: "+levelPlayer()+"\n-votre statut: "+statutPlayer())
                        }
                        else{
                            //s'il existe et que le player avait quitté
                            if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="quit"){
                                message.reply("\n**Vos stats:**\n-votre niveau: "+levelPlayer()+"\n-votre statut: "+statutPlayer())
                            }
                            else{
                                //s'il existe et que le player joue
                                if(PlayerList.id.indexOf(message.member.id) != -1 && statutPlayer()=="play"){
                                    message.reply("\n**Vos stats:**\n-votre niveau: "+levelPlayer()+"\n-votre statut: "+statutPlayer())
                                }
                            }
                        }
                    }
                break;
                case 'reload':
                    reload()
                break;
            }
        }            
    }
})
