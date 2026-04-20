// Goethe/telc müfredatına uygun gramer referansı (A1-B2)
const grammar = {
  A1: [
    {
      title: "Kişi Zamirleri (Personalpronomen)",
      explanation: "Almancada öznenin yerine geçen zamirler. Fiilin çekimini bunlar belirler. 'Sie' (siz, resmi) her zaman büyük harfle yazılır.",
      table: {
        headers: ["Zamir", "Almanca", "Türkçe"],
        rows: [
          ["1. tekil", "ich", "ben"],
          ["2. tekil (samimi)", "du", "sen"],
          ["3. tekil eril", "er", "o (erkek)"],
          ["3. tekil dişil", "sie", "o (kadın)"],
          ["3. tekil nötr", "es", "o (nesneler, bebek)"],
          ["1. çoğul", "wir", "biz"],
          ["2. çoğul", "ihr", "siz (samimi/grup)"],
          ["3. çoğul", "sie", "onlar"],
          ["Resmi", "Sie", "Siz (tanımadığın kişi)"]
        ]
      },
      examples: [
        { de: "Ich bin müde.", tr: "Yorgunum." },
        { de: "Woher kommst du?", tr: "Nerelisin?" },
        { de: "Sind Sie Herr Müller?", tr: "Siz Bay Müller misiniz?" }
      ]
    },
    {
      title: "sein ve haben (yardımcı fiiller)",
      explanation: "'sein' (olmak) ve 'haben' (sahip olmak) en sık kullanılan iki fiildir. Düzensiz çekilirler; ezberlenmeli.",
      table: {
        headers: ["Zamir", "sein (olmak)", "haben (sahip olmak)"],
        rows: [
          ["ich", "bin", "habe"],
          ["du", "bist", "hast"],
          ["er/sie/es", "ist", "hat"],
          ["wir", "sind", "haben"],
          ["ihr", "seid", "habt"],
          ["sie/Sie", "sind", "haben"]
        ]
      },
      examples: [
        { de: "Ich bin Student.", tr: "Öğrenciyim." },
        { de: "Sie ist meine Schwester.", tr: "O benim kız kardeşim." },
        { de: "Wir haben zwei Kinder.", tr: "İki çocuğumuz var." }
      ]
    },
    {
      title: "Düzenli Fiil Çekimi (Präsens)",
      explanation: "Düzenli fiillerin kökü bulunur (-en atılır), ardından kişi ekleri eklenir. Örnek: mach-en (yapmak) → ich mache, du machst.",
      table: {
        headers: ["Zamir", "Ek", "Örnek: machen"],
        rows: [
          ["ich", "-e", "mache"],
          ["du", "-st", "machst"],
          ["er/sie/es", "-t", "macht"],
          ["wir", "-en", "machen"],
          ["ihr", "-t", "macht"],
          ["sie/Sie", "-en", "machen"]
        ]
      },
      examples: [
        { de: "Ich lerne Deutsch.", tr: "Almanca öğreniyorum." },
        { de: "Er wohnt in Berlin.", tr: "Berlin'de yaşıyor." },
        { de: "Was machst du?", tr: "Ne yapıyorsun?" }
      ]
    },
    {
      title: "Artikel (der / die / das)",
      explanation: "Her Alman ismin bir cinsiyeti vardır: eril (der), dişil (die), nötr (das). Belirli artikel (the) veya belirsiz artikel (a) kullanılır. Cinsiyeti ezberlemek şarttır — isimle birlikte öğren.",
      table: {
        headers: ["Cinsiyet", "Belirli", "Belirsiz", "Örnek"],
        rows: [
          ["Eril (m)", "der", "ein", "der Mann (adam)"],
          ["Dişil (f)", "die", "eine", "die Frau (kadın)"],
          ["Nötr (n)", "das", "ein", "das Kind (çocuk)"],
          ["Çoğul", "die", "— (yok)", "die Männer (adamlar)"]
        ]
      },
      examples: [
        { de: "Der Tisch ist neu.", tr: "Masa yeni." },
        { de: "Ich habe eine Katze.", tr: "Bir kedim var." },
        { de: "Das Buch ist interessant.", tr: "Kitap ilginç." }
      ]
    },
    {
      title: "Akkusativ (Nesne Durumu)",
      explanation: "Fiilin doğrudan nesnesi Akkusativ'de çekilir. Sadece ERİL (der → den, ein → einen) değişir; dişil ve nötr aynı kalır.",
      table: {
        headers: ["Cinsiyet", "Nominativ", "Akkusativ"],
        rows: [
          ["Eril", "der / ein Mann", "den / einen Mann"],
          ["Dişil", "die / eine Frau", "die / eine Frau (aynı)"],
          ["Nötr", "das / ein Kind", "das / ein Kind (aynı)"],
          ["Çoğul", "die Kinder", "die Kinder (aynı)"]
        ]
      },
      examples: [
        { de: "Ich sehe den Mann.", tr: "Adamı görüyorum." },
        { de: "Er kauft einen Apfel.", tr: "Bir elma alıyor." },
        { de: "Wir haben eine Wohnung.", tr: "Bir dairemiz var." }
      ]
    },
    {
      title: "Olumsuzlama: nicht ve kein",
      explanation: "'nicht' fiili, sıfatı veya tüm cümleyi olumsuzlar. 'kein' ise belirsiz artikelli (ein/eine) isimleri olumsuzlar — 'hiç yok' anlamında.",
      table: {
        headers: ["Kural", "Kullanım", "Örnek"],
        rows: [
          ["nicht", "Fiil/sıfat olumsuz", "Ich arbeite nicht."],
          ["kein (eril)", "ein → kein", "Ich habe keinen Hund."],
          ["keine (dişil)", "eine → keine", "Ich habe keine Zeit."],
          ["kein (nötr)", "ein → kein", "Das ist kein Problem."],
          ["keine (çoğul)", "— → keine", "Ich habe keine Kinder."]
        ]
      },
      examples: [
        { de: "Ich verstehe nicht.", tr: "Anlamıyorum." },
        { de: "Er ist nicht müde.", tr: "Yorgun değil." },
        { de: "Ich habe kein Geld.", tr: "Param yok." }
      ]
    },
    {
      title: "Soru Kelimeleri (W-Fragen)",
      explanation: "Bilgi almak için soru kelimesi ile başlanır. Fiil ikinci pozisyonda kalır.",
      table: {
        headers: ["Almanca", "Türkçe", "Örnek"],
        rows: [
          ["Wer?", "Kim?", "Wer ist das?"],
          ["Was?", "Ne?", "Was machst du?"],
          ["Wo?", "Nerede?", "Wo wohnst du?"],
          ["Wohin?", "Nereye?", "Wohin gehst du?"],
          ["Woher?", "Nereden?", "Woher kommst du?"],
          ["Wann?", "Ne zaman?", "Wann kommst du?"],
          ["Wie?", "Nasıl?", "Wie heißt du?"],
          ["Warum?", "Neden?", "Warum lernst du Deutsch?"],
          ["Wie viel?", "Ne kadar?", "Wie viel kostet das?"]
        ]
      },
      examples: [
        { de: "Wer ist der Mann?", tr: "Adam kim?" },
        { de: "Wo ist der Bahnhof?", tr: "İstasyon nerede?" },
        { de: "Wie alt bist du?", tr: "Kaç yaşındasın?" }
      ]
    },
    {
      title: "İyelik Sıfatları (Possessivartikel)",
      explanation: "Benim, senin, onun... Almancada her zamire bir iyelik karşılık gelir. Bu sıfatlar artikel gibi davranır — arkasındaki ismin cinsiyetine ve durumuna göre ek alır (ein gibi çekilir).",
      table: {
        headers: ["Zamir", "İyelik sıfatı", "Örnek"],
        rows: [
          ["ich", "mein", "mein Vater / meine Mutter"],
          ["du", "dein", "dein Vater / deine Mutter"],
          ["er / es", "sein", "sein Vater / seine Mutter"],
          ["sie (o kadın)", "ihr", "ihr Vater / ihre Mutter"],
          ["wir", "unser", "unser Vater / unsere Mutter"],
          ["ihr (siz-grup)", "euer", "euer Vater / eure Mutter"],
          ["sie (onlar) / Sie", "ihr / Ihr", "ihr/Ihr Vater / ihre/Ihre Mutter"]
        ]
      },
      examples: [
        { de: "Das ist mein Bruder.", tr: "Bu benim erkek kardeşim." },
        { de: "Wie heißt deine Schwester?", tr: "Kız kardeşinin adı ne?" },
        { de: "Unser Haus ist groß.", tr: "Evimiz büyük." }
      ]
    },
    {
      title: "Çoğul (Plural)",
      explanation: "Almanca'da ismin çoğulu tek kural yok — 5 farklı ek grubu var. İsim öğrenirken çoğulunu da ezberlemek şart. Çoğul artikeli HER ZAMAN 'die'.",
      table: {
        headers: ["Ek", "Kural", "Örnek"],
        rows: [
          ["-e", "eril/nötr kısa isimler", "der Tisch → die Tische"],
          ["-e + umlaut", "çoğu eril", "der Stuhl → die Stühle"],
          ["-(e)n", "çoğu dişil", "die Frau → die Frauen"],
          ["-er + umlaut", "tek heceli nötr", "das Buch → die Bücher"],
          ["-s", "yabancı kelimeler", "das Auto → die Autos"],
          ["ek yok", "-er/-el/-en biten eril/nötr", "der Lehrer → die Lehrer"]
        ]
      },
      examples: [
        { de: "Ich habe zwei Kinder.", tr: "İki çocuğum var." },
        { de: "Die Häuser sind alt.", tr: "Evler eski." },
        { de: "Drei Kaffees, bitte!", tr: "Üç kahve, lütfen!" }
      ]
    },
    {
      title: "Şahıs Zamirleri Akkusativ/Dativ'de",
      explanation: "'Ben' dışında zamirler de nesne olduğunda çekilir. 'Dir' (sana), 'mich' (beni) gibi. Ezberlemek için tablo.",
      table: {
        headers: ["Nom.", "Akk. (-i)", "Dat. (-e/-a)"],
        rows: [
          ["ich (ben)", "mich", "mir"],
          ["du (sen)", "dich", "dir"],
          ["er (o)", "ihn", "ihm"],
          ["sie (o kadın)", "sie", "ihr"],
          ["es (o nötr)", "es", "ihm"],
          ["wir (biz)", "uns", "uns"],
          ["ihr (siz)", "euch", "euch"],
          ["sie/Sie (onlar)", "sie/Sie", "ihnen/Ihnen"]
        ]
      },
      examples: [
        { de: "Ich liebe dich.", tr: "Seni seviyorum." },
        { de: "Kannst du mir helfen?", tr: "Bana yardım edebilir misin?" },
        { de: "Ich sehe ihn.", tr: "Onu görüyorum." }
      ]
    },
    {
      title: "Modal Fiiller (können, müssen, möchten...)",
      explanation: "Modal fiil, ana fiili niteleyen yardımcıdır. Ana fiil INFINITIV (kök hali) olarak cümle SONUNDA durur. Modal fiil 2. pozisyonda çekilir.",
      table: {
        headers: ["Modal", "Anlam", "ich / du / er"],
        rows: [
          ["können", "-ebilmek", "kann / kannst / kann"],
          ["müssen", "zorunda olmak", "muss / musst / muss"],
          ["möchten", "istemek (kibar)", "möchte / möchtest / möchte"],
          ["wollen", "istemek", "will / willst / will"],
          ["dürfen", "izinli olmak", "darf / darfst / darf"],
          ["sollen", "-mesi gerekir", "soll / sollst / soll"]
        ]
      },
      examples: [
        { de: "Ich kann Deutsch sprechen.", tr: "Almanca konuşabiliyorum." },
        { de: "Du musst jetzt gehen.", tr: "Şimdi gitmen gerekiyor." },
        { de: "Ich möchte einen Kaffee.", tr: "Bir kahve istiyorum." }
      ]
    },
    {
      title: "Saat, Tarih ve Yer Edatları",
      explanation: "Zaman ve yer bildiren temel edatlar. Ezberleyerek kullanılır.",
      table: {
        headers: ["Edat", "Kullanım", "Örnek"],
        rows: [
          ["um", "saatte", "um 8 Uhr (saat 8'de)"],
          ["am", "günde", "am Montag (Pazartesi)"],
          ["im", "ayda/mevsimde", "im Januar / im Sommer"],
          ["in", "şehirde/ülkede", "in Berlin / in der Türkei"],
          ["aus", "-den (köken)", "aus Istanbul"],
          ["mit", "ile", "mit dem Bus"]
        ]
      },
      examples: [
        { de: "Ich komme um 9 Uhr.", tr: "Saat 9'da geliyorum." },
        { de: "Am Sonntag schlafe ich lang.", tr: "Pazar günü uzun uyurum." },
        { de: "Im Sommer fahre ich ans Meer.", tr: "Yazın denize giderim." }
      ]
    }
  ],

  A2: [
    {
      title: "Perfekt (Geçmiş Zaman)",
      explanation: "Konuşma dilinde geçmiş için KULLANILIR. Kurulum: haben/sein (çekimli) + Partizip II (cümle sonunda). Hareket fiilleri (gehen, fahren, kommen) 'sein' alır, diğerleri 'haben'.",
      table: {
        headers: ["Fiil türü", "Yardımcı", "Örnek"],
        rows: [
          ["Düzenli (machen)", "haben", "Ich habe gemacht."],
          ["Düzensiz (sehen)", "haben", "Ich habe gesehen."],
          ["Hareket (gehen)", "sein", "Ich bin gegangen."],
          ["Durum değ. (werden)", "sein", "Ich bin müde geworden."]
        ]
      },
      examples: [
        { de: "Ich habe gestern gearbeitet.", tr: "Dün çalıştım." },
        { de: "Wir sind nach Berlin gefahren.", tr: "Berlin'e gittik." },
        { de: "Er hat einen Film gesehen.", tr: "Bir film izledi." }
      ]
    },
    {
      title: "Präteritum (sein, haben, modallar)",
      explanation: "Yazılı anlatımda ve haben/sein/modal fiillerde konuşmada da kullanılır. Bu üç grup ezberlenmeli.",
      table: {
        headers: ["Zamir", "sein", "haben", "können"],
        rows: [
          ["ich", "war", "hatte", "konnte"],
          ["du", "warst", "hattest", "konntest"],
          ["er/sie/es", "war", "hatte", "konnte"],
          ["wir", "waren", "hatten", "konnten"],
          ["ihr", "wart", "hattet", "konntet"],
          ["sie/Sie", "waren", "hatten", "konnten"]
        ]
      },
      examples: [
        { de: "Gestern war ich krank.", tr: "Dün hastaydım." },
        { de: "Ich hatte viel Arbeit.", tr: "Çok işim vardı." },
        { de: "Wir konnten nicht kommen.", tr: "Gelemedik." }
      ]
    },
    {
      title: "Dativ (Dolaylı Nesne)",
      explanation: "Fiilin dolaylı nesnesi Dativ'de çekilir. '-e/-a' eki fikri. Sadece ezberle: der→dem, die→der, das→dem, die(çoğul)→den +n.",
      table: {
        headers: ["Cinsiyet", "Nominativ", "Dativ"],
        rows: [
          ["Eril", "der/ein Mann", "dem/einem Mann"],
          ["Dişil", "die/eine Frau", "der/einer Frau"],
          ["Nötr", "das/ein Kind", "dem/einem Kind"],
          ["Çoğul", "die Kinder", "den Kindern (+n)"]
        ]
      },
      examples: [
        { de: "Ich helfe dem Mann.", tr: "Adama yardım ediyorum." },
        { de: "Sie gibt der Frau ein Buch.", tr: "Kadına bir kitap veriyor." },
        { de: "Das gehört mir.", tr: "Bu bana ait." }
      ]
    },
    {
      title: "Akkusativ Alan Edatlar",
      explanation: "Bu 5 edat DAİMA Akkusativ ile kullanılır. Ezberle: durch, für, gegen, ohne, um (bazı kaynaklar 'bis' de ekler).",
      table: {
        headers: ["Edat", "Anlam", "Örnek"],
        rows: [
          ["durch", "içinden, -den geçerek", "durch den Park (parktan geçerek)"],
          ["für", "için", "für dich (senin için)"],
          ["gegen", "-e karşı", "gegen die Wand (duvara karşı)"],
          ["ohne", "-siz/-sız", "ohne Zucker (şekersiz)"],
          ["um", "etrafında, saatte", "um 8 Uhr (saat 8'de)"]
        ]
      },
      examples: [
        { de: "Ich kaufe ein Geschenk für meine Mutter.", tr: "Annem için bir hediye alıyorum." },
        { de: "Wir gehen durch den Wald.", tr: "Ormandan yürüyoruz." },
        { de: "Ich trinke Kaffee ohne Milch.", tr: "Sütsüz kahve içiyorum." }
      ]
    },
    {
      title: "Dativ Alan Edatlar",
      explanation: "Bu edatlar DAİMA Dativ ister. Sıkça çıkar, ezberle: aus, bei, mit, nach, seit, von, zu, gegenüber.",
      table: {
        headers: ["Edat", "Anlam", "Örnek"],
        rows: [
          ["aus", "-den (köken/çıkış)", "aus der Türkei (Türkiye'den)"],
          ["bei", "-de/yanında", "bei meinen Eltern (ailemin yanında)"],
          ["mit", "ile", "mit dem Bus (otobüsle)"],
          ["nach", "-e (şehir/ülke), sonra", "nach Berlin / nach der Arbeit"],
          ["seit", "-den beri", "seit einem Jahr (bir yıldır)"],
          ["von", "-den (kaynak/sahip)", "von meinem Freund"],
          ["zu", "-e (kişi/yer)", "zu dem Arzt (zum Arzt)"],
          ["gegenüber", "karşıda", "gegenüber der Bank"]
        ]
      },
      examples: [
        { de: "Ich fahre mit dem Zug.", tr: "Trenle gidiyorum." },
        { de: "Wir wohnen seit zwei Jahren hier.", tr: "Burada iki yıldır oturuyoruz." },
        { de: "Sie kommt aus der Schweiz.", tr: "İsviçre'den geliyor." }
      ]
    },
    {
      title: "Wechselpräpositionen (Akk/Dat Edatlar)",
      explanation: "Bazı edatlar hareketi (Wohin? → Akkusativ) veya konumu (Wo? → Dativ) gösterir. 9 edat: in, an, auf, über, unter, vor, hinter, neben, zwischen.",
      table: {
        headers: ["Soru", "Durum", "Örnek"],
        rows: [
          ["Wohin? (nereye)", "Akkusativ", "Ich gehe in die Schule."],
          ["Wo? (nerede)", "Dativ", "Ich bin in der Schule."],
          ["Wohin?", "Akkusativ", "Ich lege das Buch auf den Tisch."],
          ["Wo?", "Dativ", "Das Buch liegt auf dem Tisch."]
        ]
      },
      examples: [
        { de: "Er geht in die Küche.", tr: "Mutfağa gidiyor. (Wohin)" },
        { de: "Er ist in der Küche.", tr: "Mutfakta. (Wo)" },
        { de: "Die Katze springt auf das Bett.", tr: "Kedi yatağa zıplıyor." }
      ]
    },
    {
      title: "Karşılaştırma (Komparativ / Superlativ)",
      explanation: "Sıfatların karşılaştırmalı ve üstünlük hali. Kural: +er (karşılaştırmalı), am +sten (en üstün).",
      table: {
        headers: ["Sıfat", "Komparativ", "Superlativ"],
        rows: [
          ["schön (güzel)", "schöner", "am schönsten"],
          ["groß (büyük)", "größer", "am größten"],
          ["gut (iyi) - düzensiz", "besser", "am besten"],
          ["viel (çok) - düzensiz", "mehr", "am meisten"]
        ]
      },
      examples: [
        { de: "Berlin ist größer als München.", tr: "Berlin Münih'ten büyüktür." },
        { de: "Das Wetter ist heute besser.", tr: "Hava bugün daha iyi." },
        { de: "Dieses Buch ist am interessantesten.", tr: "Bu kitap en ilginç olanı." }
      ]
    },
    {
      title: "Ayrılabilen Fiiller (Trennbare Verben)",
      explanation: "Bazı fiillerin öneki çekimde ayrılır ve cümle sonuna gider. Örnek: aufstehen (kalkmak) → ich stehe um 7 auf.",
      table: {
        headers: ["Fiil", "Anlam", "Örnek"],
        rows: [
          ["aufstehen", "kalkmak", "Ich stehe früh auf."],
          ["ankommen", "varmak", "Der Zug kommt um 8 an."],
          ["einkaufen", "alışveriş yapmak", "Ich kaufe Brot ein."],
          ["anrufen", "aramak (telefon)", "Ich rufe dich an."],
          ["zurückkommen", "geri gelmek", "Er kommt bald zurück."]
        ]
      },
      examples: [
        { de: "Ich rufe meine Mutter an.", tr: "Anneme telefon açıyorum." },
        { de: "Er steht um 6 Uhr auf.", tr: "Saat 6'da kalkıyor." },
        { de: "Wann kommt der Bus an?", tr: "Otobüs ne zaman varıyor?" }
      ]
    },
    {
      title: "Dönüşlü Fiiller (Reflexive Verben)",
      explanation: "Özne kendisine dönen fiillerdir. 'sich' (kendisi) ile çekilir, çekim şahsa göre değişir.",
      table: {
        headers: ["Zamir", "Akkusativ refleksif"],
        rows: [
          ["ich", "mich"],
          ["du", "dich"],
          ["er/sie/es", "sich"],
          ["wir", "uns"],
          ["ihr", "euch"],
          ["sie/Sie", "sich"]
        ]
      },
      examples: [
        { de: "Ich freue mich.", tr: "Seviniyorum." },
        { de: "Er wäscht sich.", tr: "Yıkanıyor." },
        { de: "Wir treffen uns morgen.", tr: "Yarın buluşuyoruz." }
      ]
    },
    {
      title: "Yan Cümle: weil, dass",
      explanation: "Yan cümlelerde fiil CÜMLE SONUNA gider. 'weil' = çünkü, 'dass' = -diği.",
      table: {
        headers: ["Bağlaç", "Anlam", "Örnek"],
        rows: [
          ["weil", "çünkü", "Ich bleibe zu Hause, weil ich krank bin."],
          ["dass", "-diği", "Ich weiß, dass er kommt."],
          ["wenn", "-diğinde/ise", "Wenn es regnet, bleibe ich zu Hause."],
          ["denn", "çünkü (yan cümle DEĞİL)", "Ich bleibe, denn ich bin krank."]
        ]
      },
      examples: [
        { de: "Ich lerne Deutsch, weil ich in Deutschland lebe.", tr: "Almanca öğreniyorum çünkü Almanya'da yaşıyorum." },
        { de: "Ich glaube, dass er recht hat.", tr: "Onun haklı olduğunu düşünüyorum." }
      ]
    },
    {
      title: "Emir Kipi (Imperativ)",
      explanation: "Emir veya rica için kullanılır. 'du', 'ihr', 'Sie' formları var.",
      table: {
        headers: ["Kişi", "Kural", "Örnek (kommen)"],
        rows: [
          ["du", "Fiil kökü", "Komm!"],
          ["ihr", "Fiil kökü + t", "Kommt!"],
          ["Sie (resmi)", "Kommen Sie!", "Kommen Sie!"]
        ]
      },
      examples: [
        { de: "Komm her!", tr: "Buraya gel!" },
        { de: "Macht die Tür zu!", tr: "Kapıyı kapatın! (siz, samimi)" },
        { de: "Nehmen Sie Platz!", tr: "Buyurun, oturun! (resmi)" }
      ]
    }
  ],

  B1: [
    {
      title: "Präteritum (Tüm Fiiller)",
      explanation: "Yazılı Almancada (kitap, haber, resmi yazı) geçmiş için KULLANILIR. Düzenli: kök + te. Düzensiz: kök değişir (gehen → ging).",
      table: {
        headers: ["Fiil", "Präteritum (er)", "Perfekt"],
        rows: [
          ["machen (düzenli)", "machte", "hat gemacht"],
          ["gehen (düzensiz)", "ging", "ist gegangen"],
          ["sehen (düzensiz)", "sah", "hat gesehen"],
          ["sprechen (düzensiz)", "sprach", "hat gesprochen"],
          ["finden (düzensiz)", "fand", "hat gefunden"]
        ]
      },
      examples: [
        { de: "Er ging nach Hause.", tr: "Eve gitti." },
        { de: "Sie sprach mit ihm.", tr: "Onunla konuştu." },
        { de: "Ich fand das Buch gut.", tr: "Kitabı iyi buldum." }
      ]
    },
    {
      title: "Konjunktiv II (Kibarlık ve Varsayım)",
      explanation: "Kibar rica ('şunu yapar mısınız'), dilek ('keşke'), gerçek dışı ('şöyle olsaydı'). Genelde 'würde + Infinitiv' kullanılır. Ancak 'haben, sein, modallar' için özel formu kullanılır: hätte, wäre, könnte, müsste.",
      table: {
        headers: ["Fiil", "Konjunktiv II"],
        rows: [
          ["sein", "wäre (ich wäre)"],
          ["haben", "hätte (ich hätte)"],
          ["können", "könnte (ich könnte)"],
          ["müssen", "müsste"],
          ["werden", "würde (+ Infinitiv, genel)"]
        ]
      },
      examples: [
        { de: "Ich hätte gern einen Kaffee.", tr: "Bir kahve alabilir miyim? (kibar)" },
        { de: "Könnten Sie mir helfen?", tr: "Bana yardım eder misiniz?" },
        { de: "Wenn ich Zeit hätte, würde ich kommen.", tr: "Vaktim olsa gelirdim." }
      ]
    },
    {
      title: "Pasif (Passiv)",
      explanation: "Özne yerine eylemin kendisi önemliyse pasif kullanılır. Kurulum: werden (çekimli) + Partizip II.",
      table: {
        headers: ["Zaman", "Kalıp", "Örnek"],
        rows: [
          ["Präsens Passiv", "wird + Partizip", "Das Haus wird gebaut."],
          ["Perfekt Passiv", "ist + Part. + worden", "Das Haus ist gebaut worden."],
          ["Präteritum Pass.", "wurde + Partizip", "Das Haus wurde gebaut."]
        ]
      },
      examples: [
        { de: "Hier wird Deutsch gesprochen.", tr: "Burada Almanca konuşulur." },
        { de: "Die Rechnung wird bezahlt.", tr: "Fatura ödenir." },
        { de: "Das Auto wurde gestohlen.", tr: "Araba çalındı." }
      ]
    },
    {
      title: "Relativ Cümleler (Relativsätze)",
      explanation: "İsim hakkında ek bilgi veren yan cümle. 'der/die/das' ismin cinsiyetine ve yan cümledeki fonksiyonuna göre çekilir (Nom/Akk/Dat).",
      table: {
        headers: ["Cinsiyet", "Nom.", "Akk.", "Dat."],
        rows: [
          ["Eril", "der", "den", "dem"],
          ["Dişil", "die", "die", "der"],
          ["Nötr", "das", "das", "dem"],
          ["Çoğul", "die", "die", "denen"]
        ]
      },
      examples: [
        { de: "Der Mann, der dort steht, ist mein Vater.", tr: "Orada duran adam babam." },
        { de: "Die Frau, die ich gesehen habe, war nett.", tr: "Gördüğüm kadın kibardı." },
        { de: "Das Buch, das ich lese, ist spannend.", tr: "Okuduğum kitap heyecanlı." }
      ]
    },
    {
      title: "Yan Cümle Bağlaçları (Nebensätze)",
      explanation: "Yan cümlede fiil SONA gider. Bu bağlaçlar hep yan cümle açar.",
      table: {
        headers: ["Bağlaç", "Anlam", "Örnek"],
        rows: [
          ["wenn", "eğer, -diğinde", "Wenn es regnet, …"],
          ["als", "-diği zaman (bir kez)", "Als ich klein war, …"],
          ["obwohl", "rağmen", "Obwohl er krank ist, …"],
          ["damit", "-mesi için", "Ich lerne, damit ich Erfolg habe."],
          ["während", "-iken", "Während ich kochte, …"],
          ["bevor", "-meden önce", "Bevor du gehst, …"],
          ["nachdem", "-dikten sonra", "Nachdem wir gegessen hatten, …"]
        ]
      },
      examples: [
        { de: "Obwohl es regnet, gehe ich spazieren.", tr: "Yağmur yağmasına rağmen yürüyüşe çıkıyorum." },
        { de: "Ich rufe dich an, wenn ich ankomme.", tr: "Varınca seni ararım." }
      ]
    },
    {
      title: "Infinitiv mit zu (zu'lu Mastar)",
      explanation: "Bazı ifadeler ikinci bir fiilin mastarından önce 'zu' ister. Ayrılabilen fiillerde 'zu' önek ile fiil arasına girer (an-zu-rufen).",
      table: {
        headers: ["Kullanım", "Örnek"],
        rows: [
          ["Es ist + sıfat + zu", "Es ist wichtig, pünktlich zu sein."],
          ["Ich habe Zeit / Lust / Angst", "Ich habe keine Lust zu arbeiten."],
          ["Ich versuche/vergesse/beginne", "Ich versuche, Deutsch zu lernen."],
          ["um … zu (amacıyla)", "Ich lerne Deutsch, um in Deutschland zu arbeiten."],
          ["ohne … zu (-meden)", "Er ging, ohne etwas zu sagen."],
          ["statt … zu (yerine)", "Statt zu schlafen, las er."],
          ["Ayrılabilen", "Ich habe vor, dich anzurufen."]
        ]
      },
      examples: [
        { de: "Es ist schwer, Deutsch zu lernen.", tr: "Almanca öğrenmek zor." },
        { de: "Ich freue mich, dich zu sehen.", tr: "Seni görmek beni sevindiriyor." },
        { de: "Vergiss nicht, die Tür zu schließen!", tr: "Kapıyı kapatmayı unutma!" }
      ]
    },
    {
      title: "Dolaylı Sorular (Indirekte Fragen)",
      explanation: "Doğrudan soruyu nazik/yan cümle yapıya çevirmek. Evet/hayır sorusu için 'ob', bilgi sorusu için W-kelimesi. Fiil SONA gider.",
      table: {
        headers: ["Soru tipi", "Bağlaç", "Örnek"],
        rows: [
          ["Ja/Nein sorusu", "ob", "Weißt du, ob er kommt?"],
          ["Ne?", "was", "Ich weiß nicht, was du meinst."],
          ["Nerede?", "wo", "Er fragt, wo ich wohne."],
          ["Ne zaman?", "wann", "Sag mir, wann du Zeit hast."],
          ["Nasıl?", "wie", "Ich weiß nicht, wie das geht."],
          ["Neden?", "warum", "Ich frage mich, warum er weint."]
        ]
      },
      examples: [
        { de: "Können Sie mir sagen, wo der Bahnhof ist?", tr: "Bana istasyonun nerede olduğunu söyler misiniz?" },
        { de: "Ich weiß nicht, ob er morgen kommt.", tr: "Yarın gelip gelmeyeceğini bilmiyorum." },
        { de: "Weißt du, wann der Film anfängt?", tr: "Filmin ne zaman başladığını biliyor musun?" }
      ]
    },
    {
      title: "Sıfat Çekimi (Adjektivdeklination)",
      explanation: "Sıfat, isim önünde artikele ve duruma göre ek alır. Üç grup: belirli artikel sonrası, belirsiz artikel sonrası, artikelsiz.",
      table: {
        headers: ["Durum", "der + sıfat", "ein + sıfat"],
        rows: [
          ["Nom. eril", "der gute Mann", "ein guter Mann"],
          ["Nom. dişil", "die gute Frau", "eine gute Frau"],
          ["Nom. nötr", "das gute Kind", "ein gutes Kind"],
          ["Akk. eril", "den guten Mann", "einen guten Mann"],
          ["Dat. eril/nötr", "dem guten Mann", "einem guten Mann"],
          ["Dat. dişil", "der guten Frau", "einer guten Frau"]
        ]
      },
      examples: [
        { de: "Ich sehe den netten Mann.", tr: "Kibar adamı görüyorum." },
        { de: "Sie hat ein schönes Haus.", tr: "Güzel bir evi var." },
        { de: "Mit dem neuen Auto fahre ich gern.", tr: "Yeni arabayla gitmeyi severim." }
      ]
    },
    {
      title: "Genitiv (Tamlama)",
      explanation: "'Kim(in)?' sorusunu cevaplar — mülkiyet/aitlik bildirir. Konuşmada nadir, yazıda çok kullanılır. Eril/nötr isme -s eklenir.",
      table: {
        headers: ["Cinsiyet", "Genitiv"],
        rows: [
          ["Eril", "des Mannes / eines Mannes"],
          ["Dişil", "der Frau / einer Frau"],
          ["Nötr", "des Kindes / eines Kindes"],
          ["Çoğul", "der Kinder"]
        ]
      },
      examples: [
        { de: "Das Auto meines Vaters ist neu.", tr: "Babamın arabası yeni." },
        { de: "Das Ende des Films war traurig.", tr: "Filmin sonu üzücüydü." },
        { de: "Die Farbe der Wand gefällt mir.", tr: "Duvarın rengini sevdim." }
      ]
    }
  ],

  B2: [
    {
      title: "Konjunktiv I (Dolaylı Anlatım)",
      explanation: "Başkasının söylediğini aktarırken (gazete, resmi metin) kullanılır. Pratikte sık 'er sage, dass ...' gibi görülür. Günlük dilde Konjunktiv II ya da indikatif tercih edilir.",
      table: {
        headers: ["Fiil", "Konjunktiv I (er)"],
        rows: [
          ["sein", "sei"],
          ["haben", "habe"],
          ["gehen", "gehe"],
          ["können", "könne"],
          ["müssen", "müsse"]
        ]
      },
      examples: [
        { de: "Der Minister sagte, er sei zufrieden.", tr: "Bakan memnun olduğunu söyledi." },
        { de: "Sie behauptet, sie habe nichts gesehen.", tr: "Hiçbir şey görmediğini iddia ediyor." }
      ]
    },
    {
      title: "Modal Parçacıklar (Modalpartikeln)",
      explanation: "Doch, ja, mal, halt, eben, wohl, schon, denn — bunlar cümleye 'duygu rengi' katan küçük kelimelerdir. Çevirisi çoğu zaman yoktur ama Almanca'nın 'havasını' verir. B2'nin ayırt edici konusudur.",
      table: {
        headers: ["Parçacık", "Anlam/His", "Örnek"],
        rows: [
          ["doch", "ama/yine de/hadi", "Komm doch mal vorbei! (Gelsene hadi)"],
          ["ja", "bildiğin gibi/şaşkınlık", "Das ist ja toll! (Valla harika)"],
          ["mal", "yumuşatır (bir)", "Warte mal! (Bir dur bakayım)"],
          ["halt / eben", "ne yapayım/böyle", "Das ist halt so. (Böyle işte)"],
          ["wohl", "sanırım/herhalde", "Er ist wohl krank. (Galiba hasta)"],
          ["schon", "zaten/her neyse", "Das schaffst du schon! (Başarırsın zaten)"],
          ["denn", "soruyu yumuşatır", "Was machst du denn? (Ne yapıyorsun ki)"],
          ["eigentlich", "aslında", "Was willst du eigentlich? (Aslında ne istiyorsun)"]
        ]
      },
      examples: [
        { de: "Komm doch mit!", tr: "Hadi sen de gel!" },
        { de: "Das war ja klar.", tr: "Belliydi zaten." },
        { de: "Was ist denn los?", tr: "Ne oldu ki?" },
        { de: "Er hat wohl keine Zeit.", tr: "Galiba vakti yok." }
      ]
    },
    {
      title: "Zustandspassiv (Durum Pasifi)",
      explanation: "Eylem bittikten sonraki DURUMU anlatır. 'sein + Partizip II' (werden değil!) — sonuç vurgulu.",
      table: {
        headers: ["Tür", "Kalıp", "Örnek"],
        rows: [
          ["Vorgangspassiv", "werden + Part.", "Die Tür wird geschlossen. (kapanıyor)"],
          ["Zustandspassiv", "sein + Part.", "Die Tür ist geschlossen. (kapalı)"]
        ]
      },
      examples: [
        { de: "Das Fenster ist geöffnet.", tr: "Pencere açık (durum)." },
        { de: "Das Problem ist gelöst.", tr: "Problem çözülmüş durumda." }
      ]
    },
    {
      title: "Modal Fiille Pasif",
      explanation: "Modal fiil + Passiv-Infinitiv (Partizip II + werden) kalıbı: 'yapılmalı, yapılabilir'.",
      table: {
        headers: ["Modal", "Anlam", "Örnek"],
        rows: [
          ["können + werden", "-abilir", "Das kann gemacht werden."],
          ["müssen + werden", "-meli", "Das muss erledigt werden."],
          ["sollen + werden", "-ecek", "Das soll besprochen werden."]
        ]
      },
      examples: [
        { de: "Die Rechnung muss bezahlt werden.", tr: "Fatura ödenmeli." },
        { de: "Das Formular kann online ausgefüllt werden.", tr: "Form online doldurulabilir." }
      ]
    },
    {
      title: "Partizipialkonstruktionen",
      explanation: "Partizip I (-end) aktif anlam: 'yapan'. Partizip II pasif/geçmiş anlam: 'yapılmış'. İsmin önünde sıfat gibi çekilir.",
      table: {
        headers: ["Tür", "Form", "Örnek"],
        rows: [
          ["Partizip I", "Fiil+end", "der lesende Mann (okuyan adam)"],
          ["Partizip II", "ge...t/en", "der gelesene Brief (okunmuş mektup)"]
        ]
      },
      examples: [
        { de: "Die schlafenden Kinder sind niedlich.", tr: "Uyuyan çocuklar sevimli." },
        { de: "Das geschriebene Buch ist ein Bestseller.", tr: "Yazılan kitap çok satan." }
      ]
    },
    {
      title: "Nominalisierung (İsimleştirme)",
      explanation: "Fiil veya sıfattan isim türetme. Resmi yazıda yaygın. Fiilin mastarı büyük harfle yazılınca nötr isim olur (das Lesen).",
      table: {
        headers: ["Kaynak", "İsim hali", "Anlam"],
        rows: [
          ["lesen (fiil)", "das Lesen", "okuma"],
          ["schön (sıfat)", "die Schönheit", "güzellik"],
          ["wichtig (sıfat)", "die Wichtigkeit", "önem"],
          ["frei (sıfat)", "die Freiheit", "özgürlük"]
        ]
      },
      examples: [
        { de: "Das Rauchen ist verboten.", tr: "Sigara içmek yasak." },
        { de: "Die Entwicklung der Technologie ist schnell.", tr: "Teknolojinin gelişimi hızlı." }
      ]
    },
    {
      title: "Cümle Bağlayıcıları (Konnektoren)",
      explanation: "Cümleleri mantıksal bağlarla birleştiren ileri düzey kelimeler. Fiil pozisyonuna dikkat: 'trotzdem, deshalb' → fiil hemen sonrası.",
      table: {
        headers: ["Bağlaç", "Anlam", "Örnek"],
        rows: [
          ["trotzdem", "yine de", "Es regnet. Trotzdem gehen wir."],
          ["deshalb", "bu yüzden", "Er ist krank, deshalb bleibt er."],
          ["dennoch", "buna rağmen", "Es war schwer, dennoch schaffte er es."],
          ["folglich", "sonuç olarak", "Er verlor das Spiel, folglich war er traurig."],
          ["einerseits… andererseits", "bir yandan… diğer yandan", "Einerseits ist es gut, andererseits teuer."],
          ["sowohl… als auch", "hem… hem", "Sowohl du als auch ich."]
        ]
      },
      examples: [
        { de: "Es war teuer, trotzdem habe ich es gekauft.", tr: "Pahalıydı yine de aldım." },
        { de: "Er war müde, deshalb ging er schlafen.", tr: "Yorgundu, bu yüzden uyumaya gitti." }
      ]
    },
    {
      title: "Genitiv Edatları",
      explanation: "Bu edatlardan sonra Genitiv gelir. Resmi yazıda çok kullanılır. Konuşmada bazen Dativ ile değiştirilir.",
      table: {
        headers: ["Edat", "Anlam", "Örnek"],
        rows: [
          ["während", "sırasında", "während des Tages"],
          ["wegen", "yüzünden", "wegen des Wetters"],
          ["trotz", "rağmen", "trotz der Kälte"],
          ["statt/anstatt", "yerine", "statt des Kaffees"],
          ["innerhalb", "içinde (süre)", "innerhalb einer Woche"],
          ["außerhalb", "dışında", "außerhalb der Stadt"]
        ]
      },
      examples: [
        { de: "Wegen des Regens bleiben wir zu Hause.", tr: "Yağmur yüzünden evde kalıyoruz." },
        { de: "Trotz der Probleme hat er Erfolg.", tr: "Sorunlara rağmen başarılı." }
      ]
    },
    {
      title: "Edatlı Fiiller (Verben mit Präposition)",
      explanation: "Bazı fiiller sabit bir edat alır, ezberlenmesi gerekir. Hangi edatın hangi durumu (Akk/Dat) aldığı da önemlidir.",
      table: {
        headers: ["Fiil + Edat", "Anlam", "Örnek"],
        rows: [
          ["warten auf + Akk", "-i beklemek", "Ich warte auf dich."],
          ["denken an + Akk", "-i düşünmek", "Ich denke an dich."],
          ["sich freuen auf + Akk", "iple çekmek", "Ich freue mich auf den Urlaub."],
          ["sich freuen über + Akk", "-e sevinmek", "Ich freue mich über dein Geschenk."],
          ["sich interessieren für + Akk", "-e ilgi duymak", "Ich interessiere mich für Musik."],
          ["teilnehmen an + Dat", "-e katılmak", "Ich nehme an dem Kurs teil."],
          ["sich erinnern an + Akk", "-i hatırlamak", "Ich erinnere mich an ihn."]
        ]
      },
      examples: [
        { de: "Ich warte seit zwei Stunden auf den Bus.", tr: "İki saattir otobüsü bekliyorum." },
        { de: "Er interessiert sich für Politik.", tr: "Siyasete ilgi duyuyor." }
      ]
    }
  ]
};
