const traduzioni = [
  {
    categoria: "Oggetti",
    nome: "Agalmatolite del Segno Bianco",
    nomeOriginale: "白いサインろう石",
    letturaOriginale: "shiroi sain rōseki",
    nomeVecchio: "Pietra bianca",
    icona: "img/dark1_items/segno_bianco.png",
    descrizioneOriginale: "オンラインプレイ専用アイテム<br>召喚サインを書く<br><br>サインから他世界に霊体として召喚され<br>召喚されたエリアの主を倒すことができれば<br>人間性を得ることができる<br>（召喚は亡者では行えない）<br><br>時の流れの淀んだロードランの地で<br>不死人たちがお互い助け合うための手段",
    traduzione: "Oggetto il cui utilizzo è legato esclusivamente all'online. Permette di lasciare un segno d’evocazione.<br><br>Tramite tale segno, potrai essere evocato come spirito in altri mondi. Se riuscirai a sconfiggere il boss della zona in cui sei stato evocato, otterrai Umanità. I Morti Erranti non possono evocare.<br><br>È uno strumento attraverso cui gli Immortali si sostengono a vicenda nella terra di Lordran, dove lo scorrere del tempo è stagnante.",
    note: ""
  },
  {
    categoria: "Armi",
    nome: "Daga",
    nomeOriginale: "ダガー",
    letturaOriginale: "dagā",
    nomeVecchio: "Pugnale",
    icona: "img/dark1_weapons/dagger.png",
    descrizioneOriginale: "武器種別：短剣<br>攻撃属性：斬撃/刺突<br><br>スタンダードな短剣<br>小型で攻撃力は低いが、素早い連撃が可能であり<br>パリィ後や背後からの致命の一撃の威力も高い<br><br>斬撃と刺突という二種類の攻撃属性を持ち<br>様々な状況に対応できるのも強みとなる",
    traduzione: "",
    note: ""
  },
  {
    categoria: "Anelli",
    nome: "Anello dell'Avidità",
    nomeOriginale: "強欲の指輪",
    letturaOriginale: "gōyoku no yubiwa",
    nomeVecchio: "Anello dell'Avarizia",
    icona: "img/demons_rings/Ring_of_Avarice.webp",
    descrizioneOriginale: "大粒の宝石を配した、豪奢な金の指輪<br>敵を倒して入手するソウルの量が増える<br><br>かつては、富と放蕩の象徴であったのだろう",
    traduzione: "Sfarzoso anello d'oro ornato da una grande gemma. Aumenta la quantità di anime ottenute uccidendo i nemici.<br><br>Un tempo era simbolo di ricchezza e dissolutezza.",
    note: ""
  },
  {
    categoria: "Armature",
    nome: "Maschera da Assassino",
    nomeOriginale: "暗殺者の覆い",
    letturaOriginale: "ansatsusha no ōi",
    nomeVecchio: "Maschera dell'assassino",
    icona: "img/demons_armors/Assassins_Mask.webp",
    descrizioneOriginale: "鼻と口を覆う薄布のマスク<br><br>盗人や暗殺者といった、息を潜める者の嗜み<br>何れにしろ、ろくなものではない",
    traduzione: "Maschera di sottile stoffa che copre naso e bocca.<br><br>Prediletta da coloro che desiderano celare il proprio respiro, come ladri e assassini. In qualunque circostanza, raramente vi è qualcosa di rispettabile in chi ne fa uso.",
    note: ""
  },
  {
    categoria: "Tecniche",
    nome: "Freccia dell'Anima",
    nomeOriginale: "ソウルの矢",
    letturaOriginale: "sōru no ya",
    nomeVecchio: "Freccia dell'Anima",
    icona: "img/demons_magics/Soul_Arrow.webp",
    descrizioneOriginale: "標準的な魔法<br>ソウルの矢を放つ<br><br>ソウルの矢は、魔法的な攻撃力を持つため<br>金属鎧や、硬質のウロコなど<br>物理攻撃ではダメージをあたえ難い対象にも有効となる",
    traduzione: "Magia ordinaria che permette di scagliare una Freccia dell'Anima.<br><br>Le Frecce dell'Anima infliggono danni magici, risultando efficaci contro bersagli difficili da ferire con attacchi fisici, come chi indossa armature metalliche o creature protette da dure scaglie.",
    note: ""
  },
  {
    categoria: "Personaggi",
    nome: "Patch la Iena",
    nomeOriginale: "ハイエナのパッチ",
    letturaOriginale: "haiena no Pacchi",
    nomeVecchio: "Patches la Iena",
    icona: "img/demons_chara/patch.png",
	dialoghi: [
    {
      momento: "Primo incontro a Stonefang",
	  testo: `Ooh, sei sano di mente?<br>
	  Quindi sei un prezioso compagno di viaggio. Sono Patch, piacere di conoscerti.<br>
	  Ci sono! Lo vedi quel tesoro laggiù? Te lo cedo.<br>
	  Beh, è un segno di amicizia.<br>
	  Sono contento. Qui hanno tutti gli occhi spenti e sguardi vacui... Stavo per impazzire.`
	},
	{
	  momento: "Altro incontro a Stonefang",
	  testo: `Oh, sei tu? Ci rincontriamo.<br>
	  Non allarmarti. Mi rincresce ancora per quanto accaduto prima.<br>
	  Ci sono! Che ne dici di questo?<br>
	  Laggiù c'è un tesoro. Sono stato io a trovarlo per primo, ma te lo cedo.<br>
	  E io non mi muoverò da qui finché non ti sarai avvicinato al tesoro.<br>
	  Non è una cattiva proposta, no? Voglio fare pace con te.<br>
	  Che ti prende? Sei proprio un tipo strano...Non ti interessa il tesoro?`
    },
	{
      momento: "Dopo aver preso l'oggetto",
	  testo: `Oh, oh. I tardigradi sono una vera seccatura.<br>
	  Mah, che puoi farci? Sei stato sfortunato.<br>
	  Come promesso, quel tesoro è tuo. Ti auguro ogni bene.<br>
	  <span class="note-link" onclick="notaInline('In “Armored Core: For Answer” compare un Lynx chiamato “Patch the Good Luck”: qui la citazione piuttosto evidente.')">Good luck</span>!`
	},
	{
      momento: "Dopo essere scappato (senza uccidere il tardigrado)",
	  testo: `S-Sei incredibile...<br>
	  Questa volta è stato diverso. È stata una coincidenza. Sei solo sfortunato.<br>
	  E alla fine stai bene. <span class="note-link" onclick="notaInline('“No Count” è il nome del NEXT di Patch the Good Luck in “Armored Core: For Answer”.')">No count</span>, no count.<br>
	  Ecco, prendi. È il tesoro che ho recuperato poco fa.<br>
	  Tienilo pure. Su, dai, dai.<br>
	  Eheheh.`
	},
	{
      momento: "Dopo essere scappato (uccidendo il tardigrado)",
	  testo: `S-Sei incredibile...<br>
	  C-Certo, il tesoro è tuo.<br>
	  La faccenda del tardigrado è stata solo sfortuna... Ma dai, tutto è bene quel che finisce bene.<br>
	  Ecco, prendi. È il tesoro che ho recuperato poco fa.<br>
	  Tienilo pure. Dai, dai, eheheheheh.<br>
	  Beh, non puoi farci molto se la sfortuna ti perseguita. Rassegnati.<br>
	  Però hai al tuo fianco Patch il Fortunato.`
	},
	{
      momento: "Se uccidi il tardigrado invece di prendere l'oggetto",
	  testo: `S-Sei incredibile...`
	},
	{
      momento: "Primo incontro al Santuario delle Tempeste",
	  testo: `Ooh, sei un umano ancora sano di mente? Ne sono lieto.<br>
	  In quel buco ho intravisto molti tesori, ma da solo non riuscirei mai a recuperarli.<br>
	  Prima di tutto, va' a dare un'occhiata. Sono tesori davvero straordinari.<br>
	  Forza, è proprio quel buco. Avvicinati e guarda con i tuoi occhi.`
	},
	{
      momento: "Altro incontro al Santuario delle Tempeste",
	  testo: `Ooh, sei tu. Ci rincontriamo.<br>
	  Non allarmarti. Mi rincresce ancora per quanto accaduto prima.<br>
	  A proposito, senti questa.<br>
	  In quel buco ho intravisto molti tesori, ma da solo non riuscirei mai a recuperarli.<br>
	  Prima di tutto, va' a dare un'occhiata. Sono tesori davvero straordinari.<br>
	  Che ti prende?<br>
	  Prima da' un'occhiata al buco e controlla i tesori.<br>
	  Al resto penseremo dopo. Eheheh.`
	},
	{
      momento: "Quando vai a controllare il buco",
	  testo: `Eheheh, non portarmi rancore.<br>
	  Prenderò tutti i tesori dal tuo cadavere e li venderò a caro prezzo.<br>
	  Uhiahahahah!`
	},
	{
      momento: "Dopo essere scappato dal buco",
	  testo: `T-Tu...<br>
	  Scusami, non l'ho fatto per perfidia.<br>
	  P-Perdonami. Collaborerò con te e non avrò più cattive intenzioni.<br>
	  Dai, questo è un pensierino. H-Hai capito, vero?<br>
	  Siamo tra i pochi umani rimasti. Cerchiamo di andare d'accordo, eh?<br>
	  Eheheh.<br>
	  Beh, cerchiamo di andare d'accordo.<br>
	  <span class="note-link" onclick="notaInline('Storpiatura del detto giapponese “地獄の沙汰も金次第” che letteralmente si traduce come “persino all’inferno il denaro può influenzare il giudizio”.')">Persino all'inferno i compagni di viaggio possono influenzare il giudizio</span>.`
	},
	{
      momento: "Altri incontri al Tempio Cuneale",
	  testo: `Aah, sei tu?<br>
	  Arrivi proprio al momento giusto. Ho messo le mani su un bel bottino. Sono pieno di tesori.<br>
	  Ti faccio un buon prezzo.<br>
	  Aah, ora vendo solo degli oggetti in modo onesto.<br>
	  Ho smesso di fare il ladro.<br>
	  Ormai sono diventato un uomo onesto... non avrei più motivo di vergognarmi davanti a mia madre. Sul serio.<br>
	  Ohi, davvero.<br>
	  Ooh, ti stavo aspettando.<br>
	  Eheheh, questa volta i tesori sono davvero straordinari.<br>
	  Vedrai, finirai per venerare Patch il Fortunato.<br>
	  Ooh, ti stavo aspettando.<br>
	  Sono riuscito a procurarmi dei tesori incredibili. Credo che ti saranno utili.`
	},
	{
      momento: "Dopo un acquisto",
	  testo: `Bene. Alla prossima. Siamo compagni d'armi, no?<br>
	  Incredibili, eh? Non è facile trovarli. Dovresti essermi grato.<br>
	  E allora? Ti è venuta voglia di venerarmi? Eheheheh.`
	},
	{
      momento: "Dopo nessun acquisto",
	  testo: `Bah, non chiedo troppo. Che spreco.<br>
	  Bah, non chiedo troppo. Non ne capisci il valore...<br>
	  Capisco... Beh, non posso farci nulla. Non capisci il valore delle cose...`
	},
	{
      momento: "Dopo aver salvato Urbain",
	  testo: `Vedi quei preti laggiù?<br>
	  Ce l'hanno ancora con me per la faccenda al Santuario.<br>
	  Pare ci sia anche qualche pezzo grosso, ma sono una banda di tipi loschi.<br>
	  Non so cosa combini Dio, ma se bastassero le preghiere per essere felici, nessuno soffrirebbe.`
	},
	{
      momento: "Dopo aver battuto due demoni potenti",
	  testo: `Ho sentito delle voci poco rassicuranti.<br>
	  Pare che Yurt, il Capo Silenzioso, sia entrato a Boletaria.<br>
	  Non attribuisce alcun valore alla vita umana. È il peggiore degli assassini.<br>
	  Non che sia nella posizione di dirlo, ma quello non ci sta con la testa...<br>
	  Ti avverto da amico. Sta' attento a Yurt dall'armatura nera.`
	},
	{
      momento: "Dopo aver battuto tre demoni potenti",
	  testo: `Sei stato nella Valle Putrefatta?<br>
	  Lì sono sparsi ovunque i cadaveri di ingenui cavalieri sacri, partiti per lavare la vergogna dei propri confratelli.<br>
	  Tra loro vi erano anche nomi illustri. Come Vito, il Cavaliere del Chiaro di Luna, e Risaia di Istarelle.<br>
	  I loro equipaggiamenti erano magnifici. Con un po' di fortuna, potresti accaparrarti un buon bottino.`
	},
	{
      momento: "Allontanandoti durante il dialogo",
	  testo: `Ohi, dove te ne vai?<br>
	  Stavamo ancora parlando!`
	},
	{
      momento: "Attaccandolo e uccidendolo",
	  testo: `Dannazione, e questo per cos'era?<br>
	  Che cosa ho fatto?!`
	},
	],
	note: ""
  },
  {
    categoria: "Luoghi",
    nome: "Tempio Cuneale",
    nomeOriginale: "楔の神殿",
    letturaOriginale: "kusabi no shinden",
    nomeVecchio: "Nexus",
    icona: "img/demons_area/kusabi.webp",
	descrizioneOriginale: "要石：<br><br>1. 小国の王の要石<br>2. 穴掘りの王の要石<br>3. 塔の女王の要石<br>4. 影人の司祭の要石<br>5. 貧者の長の要石",
	traduzione: "Chiavi di Volta:<br><br>1. Chiave di Volta del Re del Piccolo Paese<br>2. Chiave di Volta del Re degli Scavi<br>3. Chiave di Volta della Regina della Torre<br>4. Chiave di Volta del Sacerdote del Popolo Ombre<br>5. Chiave di Volta del Capo dei Poveri",
    note: ""
  },
];