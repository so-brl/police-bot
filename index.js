const Discord = require('discord.js');

const client = new Discord.Client();

const axios = require('axios');

client.on('ready', () => {
    console.log(`Connecté au serveur ${client.user.tag}!`);
});
let policeID = '<@&774717295657484328>';

client.on('message', msg => {
let message = msg.content;
   let userPseudo = msg.author.username;
    if(message.indexOf("https://discord.gg/") > -1) {
        msg.delete();
        msg.reply({
            embed: {
                color: 'RED',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                fields: [{
                    name: `🚨 ${userPseudo} **vous êtes en infraction** :`,
                    value:
                        `Il est interdit de promouvoir d\'autre salon Discord.\n `+
                        `**Votre message à été supprimé par la ${policeID} de Chernarus.**`,
                    inline:true,
                },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                }
            }
        });
    }
    else if(msg.content === '17') {
        msg.reply('\n' +
            `Vous avez demandez la ${policeID} ... ne quittez pas , nous allons donner suite à votre appel...`);
    }
    else if (msg.content === 'SOS') {
        msg.reply({
            embed: {
                color: 'BLUE',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: 'Commandes du PoliceBot',
                fields: [{
                    name: '**Assitance** : ',
                    value: '`SOS` :  Voir les différentes commandes du PoliceBot \n' +
                        '`17` : Numéro d\'urgence pour contacter la police de Chernarus',
                },
                    {
                        name: '**Accrédiations et tenue réglementaire des rôles** ',
                        value: ' `CADET` \n' +
                            '`OFFICIER`\n' +
                            '`SERGENT`\n' +
                            '`CAPITAINE`\n' +
                            '`COMMISAIRE` ',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                }
            }
        });
    }
    else if (msg.content === 'CADET') {
        msg.reply({
            embed: {
                color: 'DARK_BLUE',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des CADETS__',
                description:'Elève à l\'instruction',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- A le droit d\'apprendre et d\'écouter en silence'
                    },
                    {
                    name: '**Tenue** : ',
                    value: '- Casquette grise\n' +
                        '- Veste de police\n' +
                        '- Gant noir\n' +
                        '- Gilet anti-couteaux\n' +
                        '- Pantalon de police\n' +
                        '- Chaussure noir\n' +
                        '- Sac à dos noir',
                },
                    {
                        name: '**Armement :** ',
                        value: '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Matraque télescopique',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
    else if (msg.content === 'OFFICIER') {
        msg.reply({
            embed: {
                color: 'BLUE',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des OFFICIERS__',
                description:'Agent de police',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- Droit au controle sur citoyen\n' +
                            '- Droit au arrestation\n' +
                            '- Droit au perquisition accompagné d\'un supérieur'
                    },
                    {
                        name: '**Tenue** : ',
                        value: '- Casquette grise\n' +
                            '- Veste de police\n' +
                            '- Gant noir\n' +
                            '- Gilet de terrain noir' +
                            '- Pantalon de police\n' +
                            '- Chaussure noir\n' +
                            '- Sac à dos noir',
                    },
                    {
                        name: '**Armement :** ',
                        value: '- KAS74-U\n' +
                            '- VSS\n' +
                            '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Matraque télescopique',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
    else if (msg.content === 'SERGENT') {
        msg.reply({
            embed: {
                color: 'GREEN',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des SERGENTS__',
                description:'Chef de patrouille',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- Droit au controle sur citoyen\n' +
                            '- Droit au arrestation\n' +
                            '- Droit au perquisition\n' +
                            '- Droit au formation des cadets'
                    },
                    {
                        name: '**Tenue** : ',
                        value: '- Beret noir\n' +
                            '- Veste de police\n' +
                            '- Gant noir\n' +
                            '- Gilet tactique noir\n' +
                            '- Pantalon cargo gris\n' +
                            '- Chaussure noir\n' +
                            '- Sac à dos noir',
                    },
                    {
                        name: '**Armement :** ',
                        value: '- KS74\n' +
                            '- KAS74-U\n' +
                            '- VSS\n' +
                            '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Vaiga\n' +
                            '- Tonfa ',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio\n' +
                            '- Mégaphone',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
    else if (msg.content === 'LIEUTENANT') {
        msg.reply({
            embed: {
                color: 'YELLOW',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des LIEUTENANTS__',
                description:'Adjoint au chef de poste',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- Droit au controle sur citoyen\n' +
                            '- Droit au arrestation\n' +
                            '- Droit au perquisition\n' +
                            '- Droit au formation des cadets\n' +
                            '- Droit au permanence radio\n' +
                            '- Droit de donner des missions en l\'absence du Capitaine et en accord avec le Commissaire'
                    },
                    {
                        name: '**Tenue** : ',
                        value: '- Casquette de policier\n' +
                            '- Veste de police\n' +
                            '- Gant noir\n' +
                            '- Gilet tactique noir\n' +
                            '- Pantalon cargo gris\n' +
                            '- Chaussure noir\n' +
                            '- Sac à dos noir',
                    },
                    {
                        name: '**Armement :** ',
                        value: '- KS74\n' +
                            '- KAS74-U\n' +
                            '- VSS\n' +
                            '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Vaiga\n' +
                            '- Tonfa ',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio\n' +
                            '- Mégaphone\n' +
                            '- Radio de terrain',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
    else if (msg.content === 'CAPITAINE') {
        msg.reply({
            embed: {
                color: 'ORANGE',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des CAPITAINES__',
                description:' Chef de poste',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- Droit au controle sur citoyen\n' +
                            '- Droit au arrestation\n' +
                            '- Droit au perquisition\n' +
                            '- Droit au formation des cadets\n' +
                            '- Droit au permanence radio\n' +
                            '- Droit de donner des missions en accord avec le Commissaire\n' +
                            '- Droit de punition\n' +
                            '- Droit de révocation en accord avec le Commisssaire\n'+
                            '- Droit au entretien des cadets\n'+
                            '- Droit de soumettre une promotion au Commissaire\n'+
                            '- Droit au affectation des logments citoyen ',
                    },
                    {
                        name: '**Tenue** : ',
                        value: '- Casquette de policier\n' +
                            '- Veste de police\n' +
                            '- Gant noir\n' +
                            '- Gilet tactique noir\n' +
                            '- Pantalon cargo gris\n' +
                            '- Chaussure noir\n' +
                            '- Sac à dos noir',
                    },
                    {
                        name: '**Armement :** ',
                        value: '- KS74\n' +
                            '- KAS74-U\n' +
                            '- VSS\n' +
                            '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Vaiga\n' +
                            '- Tonfa ',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio\n' +
                            '- Mégaphone\n' +
                            '- Radio de terrain',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
    else if (msg.content === 'COMMISSAIRE') {
        msg.reply({
            embed: {
                color: 'RED',
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL(),
                },
                title: '__Accréditations et tenue réglementaire des COMMISSAIRES__',
                description:'Chef de la police',
                fields: [
                    {
                        name:'**Accréditations :**',
                        value: '- Droit au controle sur citoyen\n' +
                            '- Droit au arrestation\n' +
                            '- Droit au perquisition\n' +
                            '- Droit au formation des cadets\n' +
                            '- Droit au permanence radio\n' +
                            '- Droit de donner des missions\n' +
                            '- Droit de punition\n' +
                            '- Droit de révocation\n'+
                            '- Droit au entretien des cadets\n'+
                            '- Droit au promotion\n'+
                            '- Droit au affectation des logments citoyen ',
                    },
                    {
                        name: '**Tenue** : ',
                        value: '- Tenue Orel complète\n' +
                            '- Gant noir\n' +
                            '- Gilet tactique noir\n' +
                            '- Pantalon cargo gris\n' +
                            '- Chaussure noir\n' +
                            '- Sac à dos noir',
                    },
                    {
                        name: '**Armement :** ',
                        value: '- KS74\n' +
                            '- KAS74-U\n' +
                            '- VSS\n' +
                            '- BK133\n' +
                            '- Mlock-91\n' +
                            '- Vaiga\n' +
                            '- Tonfa ',
                    }, {
                        name: '**Paquetage :** ',
                        value: '- Menotte\n' +
                            '- Crochet à sérrure\n' +
                            '- Radio\n' +
                            '- Mégaphone\n' +
                            '- Radio de terrain',
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL(),
                    text: 'Commissariat de Chernarus',
                },
            }
        });
    }
});

client.login(process.env.TOKEN);