const traduzioni = [
  {
    categoria: "Oggetti",
    nome: "Scintipietra della Guida",
    nomeOriginale: "道標の輝石",
    letturaOriginale: "michishirube no kiseki",
    nomeVecchio: "Augite della Guida",
    icona: "img/demons_items/Augite_of_Guidance.webp",
    descrizioneOriginale: "空気に触れ、一時的に光を放つ石<br><br>宝石の一種として珍重されるが、特に何の効果もない<br>ただ、道標として使用できるだろう",
    traduzione: "Pietra che emette temporaneamente luce quando entra a contatto con l'aria.<br><br>È considerata preziosa al pari di una gemma, benché non possieda effetti particolari. Può tuttavia essere impiegata come segnale.",
    note: ""
  },
  {
    categoria: "Armi",
    nome: "Ascia Grande",
    nomeOriginale: "グレートアクス",
    letturaOriginale: "gurēto akusu",
    nomeVecchio: "Ascia grande",
    icona: "img/demons_weapons/Great_Axe.webp",
    descrizioneOriginale: "大型の斧。大斧<br><br>斧と同様に汎用性の高い武器であるが<br>尋常な筋力では使用できないほどに重く<br>その重量を生かして、対象を吹き飛ばす<br><br>最適打撃の効果も、標準的な斧よりも大きい",
    traduzione: "Ascia di grandi dimensioni.<br><br>Arma dalla notevole versatilità, simile alle normali asce, ma il suo peso la rende inadatta a chi possiede una forza comune. La sua massa può essere sfruttata per spazzare via il bersaglio.<br><br>L'effetto dei colpi ottimali è superiore rispetto a quello di un'ascia normale.",
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
      momento: "Primo incontro Stonefang",
	  testo: `Ooh, <span class="note-link" onclick="notaInline('Questa è la nota')">nota</span> sei sano di mente?<br>Quindi sei un prezioso compagno di viaggio. Sono Patch, piacere di conoscerti.<br>Ci sono! Lo vedi quel tesoro laggiù? Te lo cedo.<br>Beh, è un segno di amicizia.<br>Sono contento. Qui hanno tutti gli occhi spenti e sguardi vacui... Stavo per impazzire.<br><br><i>Se vi conoscevate</i><br>Oh, sei tu? Ci rincontriamo.<br>Non allarmarti. Mi rincresce ancora per quanto accaduto prima.<br>Ci sono! Che ne dici di questo?<br>Laggiù c'è un tesoro. Sono stato io a trovarlo per primo, ma te lo cedo.<br>E io non mi muoverò da qui finché non ti sarai avvicinato al tesoro.<br>Non è una cattiva proposta, no? Voglio fare pace con te.<br>Che ti prende? Sei proprio un tipo strano...Non ti interessa il tesoro?<br><br><i>Se prendi l'oggetto</i><br>Oh, oh. I tardigradi sono una vera seccatura.<br>Mah, che puoi farci? Sei stato sfortunato.<br>Come promesso, quel tesoro è tuo. Ti auguro ogni bene.<br>Good luck!<br><br><i>Dopo essere scappato (senza uccidere il tardigrado)</i><br>S-Sei incredibile...<br>Questa volta è stato diverso. È stata una coincidenza. Sei solo sfortunato.<br>E alla fine stai bene. No count, no count.<br>Ecco, prendi. È il tesoro che ho recuperato poco fa.<br>Tienilo pure. Su, dai, dai.<br>Eheheh.<br><br><i>Dopo essere scappato (uccidendo il tardigrado)</i><br>S-Sei incredibile...<br>C-Certo, il tesoro è tuo.<br>La faccenda del tardigrado è stata solo sfortuna... Ma dai, tutto è bene quel che finisce bene.<br>Ecco, prendi. È il tesoro che ho recuperato poco fa.<br>Tienilo pure. Dai, dai, eheheheheh.<br>Beh, non puoi farci molto se la sfortuna ti perseguita. Rassegnati.<br>Però hai al tuo fianco Patch il Fortunato.<br><br><i>Se uccidi il tardigrado invece di prendere l'oggeto</i><br>S-Sei incredibile...<br><br><b>-Santuario delle Tempeste 4-2-</b><br><i>Primo incontro</i><br>Ooh, sei un umano ancora sano di mente? Ne sono lieto.<br>In quel buco ho intravisto molti tesori, ma da solo non riuscirei mai a recuperarli.<br>Prima di tutto, va' a dare un'occhiata. Sono tesori davvero straordinari.<br>Forza, è proprio quel buco. Avvicinati e guarda con i tuoi occhi.<br><br><i>Se vi conoscevate</i><br>Ooh, sei tu. Ci rincontriamo.<br>Non allarmarti. Mi rincresce ancora per quanto accaduto prima.<br>A proposito, senti questa.<br>In quel buco ho intravisto molti tesori, ma da solo non riuscirei mai a recuperarli.<br>Prima di tutto, va' a dare un'occhiata. Sono tesori davvero straordinari.<br>Che ti prende?<br>Prima da' un'occhiata al buco e controlla i tesori.<br>Al resto penseremo dopo. Eheheh.<br><br><i>Se vai a controllare il buco</i><br>Eheheh, non portarmi rancore.<br>Prenderò tutti i tesori dal tuo cadavere e li venderò a caro prezzo.<br>Uhiahahahah!<br><br><i>Dopo essere scappato dal buco</i><br>T-Tu...<br>Scusami, non l'ho fatto per perfidia.<br>P-Perdonami. Collaborerò con te e non avrò più cattive intenzioni.<br>Dai, questo è un pensierino. H-Hai capito, vero?<br>Siamo tra i pochi umani rimastii. Cerchiamo di andare d'accordo, eh?<br>Eheheh.<br>Beh, cerchiamo di andare d'accordo.<br>Persino il giudizio dell'inferno può essere evitato con dei compagni di viaggio.<br><br><b>-Tempio Cuneale-</b><br><i>Dopo averlo già incontrato</i><br>Aah, sei tu?<br>Arrivi proprio al momento giusto. Ho messo le mani su un bel bottino. Sono pieno di tesori.<br>Ti faccio un buon prezzo.<br>Aah, ora vendo solo degli oggetti in modo onesto.<br>Ho smesso di fare il ladro.<br>Ormai sono diventato un uomo onesto... non avrei più motivo di vergognarmi davanti a mia madre. Sul serio.<br>Ohi, davvero.<br>Ooh, ti stavo aspettando.<br>Eheheh, questa volta i tesori sono davvero straordinari.<br>Vedrai, finirai per venerare Patch il Fortunato.<br>Ooh, ti stavo aspettando.<br>Sono riuscito a procurarmi dei tesori incredibili. Credo che ti saranno utili.<br><br><i>Dopo aver salvato Urbain</i><br>Vedi quei preti laggiù?<br>Ce l'hanno ancora con me per la faccenda al Santuario.<br>Pare ci sia anche qualche pezzo grosso, ma sono una banda di tipi loschi.<br>Non so cosa combini Dio, ma se bastassero le preghiere per essere felici, nessuno soffrirebbe.<br><br><i>Dopo aver battuto due demoni potenti</i><br>Ho sentito delle voci poco rassicuranti.<br>Pare che Yurt, il Capo Silenzioso, sia entrato a Boletaria.<br>Non attribuisce alcun valore alla vita umana. È il peggiore degli assassini.<br>Non che sia nella posizione di dirlo, ma quello non ci sta con la testa...<br>Ti avverto da amico. Sta' attento a Yurt dall'armatura nera.<br><br><i>Dopo aver battuto tre demoni potenti</i><br>Sei stato nella Valle Putrefatta?<br>Lì sono sparsi ovunque i cadaveri di ingenui cavalieri sacri, partiti per lavare la vergogna dei propri confratelli.<br>Tra loro vi erano anche nomi illustri. Come Vito, il Cavaliere del Chiaro di Luna, e Risaia di Istarelle.<br>I loro equipaggiamenti erano magnifici. Con un po' di fortuna, potresti accaparrarti un buon bottino.<br><br><i>Dopo aver comprato</i><br>Bene. Alla prossima. Siamo compagni d'armi, no?<br>Incredibili, eh? Non è facile trovarli. Dovresti essermi grato.<br>E allora? Ti è venuta voglia di venerarmi? Eheheheh.<br><br><i>Se non compri niente</i><br>Bah, non chiedo troppo. Che spreco.<br>Bah, non chiedo troppo. Non ne capisci il valore...<br>Capisco... Beh, non posso farci nulla. Non capisci il valore delle cose...<br><br><i>Se te ne vai mentre parlate</i><br>Ohi, dove te ne vai?<br>Stavamo ancora parlando!<br><br><i>Se attaccato e ucciso</i><br>Dannazione, e questo per cos'era?<br>Che cosa ho fatto?!`
    }
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