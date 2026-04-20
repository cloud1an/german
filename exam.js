// Goethe A1-B2 sınav hazırlığı: format, konular, Lesen/Hören örnekleri,
// Schreiben şablonları, Sprechen görevleri ve hazır ifadeler.
const exam = {
  A1: {
    name: "Goethe-Zertifikat A1 (Start Deutsch 1)",
    format: "4 bölüm · toplam 65 dakika + Sprechen 15 dk. Geçme: 60/100 puan.",
    parts: [
      { name: "Hören", duration: "20 dk", tasks: "15 soru (3 Teil)" },
      { name: "Lesen", duration: "25 dk", tasks: "15 soru (3 Teil)" },
      { name: "Schreiben", duration: "20 dk", tasks: "Form doldur + kısa mesaj yaz (30+ kelime)" },
      { name: "Sprechen", duration: "~15 dk", tasks: "Grup halinde: tanışma + soru-cevap + rica/emir" }
    ],
    themes: [
      "Kişisel bilgi (isim, yaş, adres, telefon)",
      "Aile ve arkadaşlar",
      "Meslek ve iş yeri",
      "Günlük rutin, saat",
      "Alışveriş (gıda, giysi temel)",
      "Ev ve oda eşyaları",
      "Yemek ve içecek",
      "Hava durumu (temel)",
      "Seyahat (temel — bilet, istasyon)",
      "Sağlık (temel — doktor randevu)"
    ],
    lesen: [
      {
        teil: "Teil 1 — Kısa metin (e-posta/mesaj)",
        intro: "Bir arkadaştan gelen kısa bir mesaj okuyorsun. Doğru mu yanlış mı karar ver.",
        text: "Hallo Lisa,\nwie geht's? Ich komme am Samstag nach Berlin. Mein Zug kommt um 14:30 Uhr am Hauptbahnhof an. Kannst du mich abholen? Wir können dann zusammen essen. Ich freue mich!\nLiebe Grüße,\nAnna",
        tr: "Merhaba Lisa, nasılsın? Cumartesi Berlin'e geliyorum. Trenim 14:30'da merkez istasyona varıyor. Beni alabilir misin? Sonra birlikte yemek yeriz. Heyecanlıyım! Sevgiler, Anna",
        questions: [
          { q: "Anna kommt am Freitag.", options: ["Richtig", "Falsch"], answer: 1, explain: "Cumartesi geliyor (Samstag), Cuma değil." },
          { q: "Der Zug kommt um halb drei an.", options: ["Richtig", "Falsch"], answer: 0, explain: "14:30 = halb drei (yarım üç)." },
          { q: "Anna will alleine essen.", options: ["Richtig", "Falsch"], answer: 1, explain: "Birlikte yemek yemek istiyor." }
        ]
      },
      {
        teil: "Teil 2 — İlanlar",
        intro: "Bir okul ilanı. Bilgiyi bul.",
        text: "DEUTSCHKURS FÜR ANFÄNGER\nSprachschule Berlin\nMontag und Mittwoch, 18:00 – 20:00 Uhr\nKursbeginn: 5. September\nKursgebühr: 180 Euro\nAnmeldung bis 30. August: Tel. 030-1234567",
        tr: "Başlangıç için Almanca Kursu. Pazartesi ve Çarşamba, 18-20. Başlangıç: 5 Eylül. Ücret: 180 Euro. 30 Ağustos'a kadar kayıt: 030-1234567",
        questions: [
          { q: "Der Kurs kostet 180 Euro.", options: ["Richtig", "Falsch"], answer: 0, explain: "Kursgebühr: 180 Euro." },
          { q: "Der Kurs ist am Dienstag.", options: ["Richtig", "Falsch"], answer: 1, explain: "Pazartesi ve Çarşamba." }
        ]
      }
    ],
    hoeren: [
      {
        teil: "Teil 1 — Kısa konuşma",
        intro: "İstasyonda bir anons duyarsın. Dinle ve soruyu cevapla.",
        audio: "Achtung, liebe Fahrgäste! Der Zug nach München auf Gleis 7 fährt heute erst um 15:45 Uhr ab. Das sind dreißig Minuten später als geplant. Wir bitten um Ihr Verständnis.",
        tr: "Dikkat değerli yolcular! Münih'e giden tren 7. perondan bugün ancak 15:45'te hareket edecek. Bu planlanandan 30 dakika sonra. Anlayışınız için teşekkürler.",
        questions: [
          { q: "Wohin fährt der Zug?", options: ["Hamburg", "Berlin", "München"], answer: 2, explain: "Zug nach München." },
          { q: "Wann fährt der Zug ab?", options: ["15:15", "15:45", "16:15"], answer: 1, explain: "um 15:45 Uhr." }
        ]
      },
      {
        teil: "Teil 2 — Telefon mesajı",
        intro: "Sesli mesajdaki bilgiyi yakala.",
        audio: "Hallo Markus, hier ist Julia. Wir treffen uns morgen um 19 Uhr vor dem Kino, okay? Der Film heißt 'Die Brücke' und beginnt um 19:30. Bis morgen! Tschüss!",
        tr: "Merhaba Markus, ben Julia. Yarın 19'da sinema önünde buluşuyoruz, tamam mı? Filmin adı 'Die Brücke' ve 19:30'da başlıyor. Yarın görüşürüz!",
        questions: [
          { q: "Wo treffen sie sich?", options: ["Im Kino", "Vor dem Kino", "Zu Hause"], answer: 1, explain: "vor dem Kino (sinemanın önünde)." },
          { q: "Wann beginnt der Film?", options: ["19:00", "19:30", "20:00"], answer: 1, explain: "beginnt um 19:30." }
        ]
      }
    ],
    schreiben: {
      format: "Bir ilanla ilgili kısa mesaj yaz (~30 kelime). Verilen 3 noktayı cevapla.",
      tips: [
        "Tüm 3 noktaya mutlaka değin — her biri puan.",
        "Kibar selamlama + kapanış ekle.",
        "Cümle kurma — tek kelime yazma!",
        "İmla önemli ama küçük hatalar tolere edilir."
      ],
      templates: [
        {
          type: "Kısa mesaj / E-Mail (resmi olmayan)",
          structure: "Selamlama → Sebep → Bilgi/soru (3 nokta) → Kapanış → İmza",
          phrases: {
            opening: ["Lieber Paul,", "Hallo Anna,", "Liebe Familie Müller,"],
            body: [
              "Ich schreibe dir, weil …",
              "Ich habe eine Frage:",
              "Kannst du bitte …?",
              "Ich komme am … um … Uhr.",
              "Hast du Zeit am Samstag?"
            ],
            closing: ["Viele Grüße", "Liebe Grüße", "Bis bald", "Tschüss"]
          }
        }
      ],
      example: {
        prompt: "Bir arkadaşına partide olamadığın için yaz. 1) Teşekkür et, 2) Neden gelemediğini söyle, 3) Başka zaman buluşma teklif et.",
        answer: "Liebe Sarah,\nvielen Dank für die Einladung zu deiner Party! Leider kann ich nicht kommen, weil ich am Samstag arbeiten muss. Haben wir am Sonntag Zeit für einen Kaffee?\nLiebe Grüße,\nAhmet",
        tr: "Sevgili Sarah, partine davet ettiğin için çok teşekkürler! Maalesef Cumartesi çalışmam gerektiği için gelemem. Pazar bir kahve için vaktin var mı? Sevgiler, Ahmet"
      }
    },
    sprechen: {
      format: "Üç bölüm: 1) Kendini tanıt, 2) Konu hakkında 2 soru sor + cevapla, 3) Kibar rica söyle ve cevapla.",
      teile: [
        {
          teil: "Teil 1 — Kendini tanıtma",
          task: "Şu 7 anahtar kelimeyi kullanarak kendini tanıt: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby",
          useful: [
            "Mein Name ist …",
            "Ich bin … Jahre alt.",
            "Ich komme aus … .",
            "Ich wohne in … .",
            "Ich spreche Türkisch und ein bisschen Deutsch.",
            "Ich bin Student / arbeite als … .",
            "In meiner Freizeit spiele ich Fußball / lese ich gern."
          ],
          example: "Guten Tag. Mein Name ist Ahmet Yılmaz. Ich bin 28 Jahre alt und komme aus der Türkei. Ich wohne in Berlin. Ich spreche Türkisch, Englisch und ein bisschen Deutsch. Ich arbeite als Ingenieur. In meiner Freizeit lese ich gern."
        },
        {
          teil: "Teil 2 — Soru-cevap",
          task: "Bir konu kartı alırsın (örn. 'Essen'). O konuyla ilgili 2 soru sorman lazım, karşı taraf da sana sorar.",
          useful: [
            "Was isst du gern?",
            "Wann frühstückst du?",
            "Wo kaufst du ein?",
            "Wie viel kostet …?",
            "Isst du Fleisch?",
            "Trinkst du Kaffee?"
          ]
        },
        {
          teil: "Teil 3 — Rica/emir",
          task: "Resim veya nesne kartı → kibar rica veya tavsiye söyle. Karşı taraf kabul eder ya da reddeder.",
          useful: [
            "Kannst du bitte …?",
            "Könnten Sie mir … geben?",
            "Öffne bitte das Fenster!",
            "Mach bitte das Licht an!",
            "Ja, gerne!",
            "Tut mir leid, das geht nicht."
          ]
        }
      ]
    }
  },

  A2: {
    name: "Goethe-Zertifikat A2",
    format: "4 bölüm · yazılı 90 dk + Sprechen 15 dk (2 kişi). Geçme: 60/100.",
    parts: [
      { name: "Hören", duration: "30 dk", tasks: "4 Teil · kısa diyaloglar, anonslar, haber" },
      { name: "Lesen", duration: "30 dk", tasks: "4 Teil · e-posta, ilan, haber" },
      { name: "Schreiben", duration: "30 dk", tasks: "2 mesaj (her biri ~40 kelime)" },
      { name: "Sprechen", duration: "~15 dk", tasks: "3 Teil · soru sor-cevapla, planlama yap" }
    ],
    themes: [
      "Yön tarifi ve ulaşım",
      "Seyahat ve tatil",
      "Restoran ve sipariş",
      "Doktor ve sağlık",
      "Telefon görüşmesi",
      "Ev arama ve kiralama",
      "Geçmişi anlatma (Perfekt)",
      "Alışveriş (giysi, beden, iade)",
      "Hava durumu ve küçük sohbet",
      "Buluşma ve plan yapma",
      "Eğitim (okul, kurs)",
      "İş ve günlük hayat"
    ],
    lesen: [
      {
        teil: "Teil 1 — Mektup / e-posta",
        intro: "Bir arkadaştan e-posta. Önemli bilgileri bul.",
        text: "Hallo Tim,\nwie war dein Urlaub in Italien? Ich war letzte Woche in Wien und hatte eine tolle Zeit. Die Stadt ist wunderschön und das Essen ist fantastisch. Ich habe viele Museen besucht und bin jeden Tag viel gelaufen. Das Wetter war leider nicht so gut – es hat oft geregnet. Trotzdem war es ein schöner Urlaub.\nWie ist das Wetter bei dir in Berlin? Hast du am Wochenende Zeit? Wir könnten einen Kaffee trinken.\nLiebe Grüße,\nSophia",
        tr: "Merhaba Tim, İtalya tatilin nasıldı? Geçen hafta Viyana'daydım ve harika vakit geçirdim. Şehir muhteşem, yemekler de öyle. Birçok müze gezdim ve her gün çok yürüdüm. Hava maalesef pek iyi değildi — sık sık yağmur yağdı. Yine de güzel bir tatildi. Berlin'de hava nasıl? Hafta sonu vaktin var mı? Kahve içebiliriz.",
        questions: [
          { q: "Sophia war letzte Woche …", options: ["in Italien", "in Wien", "in Berlin"], answer: 1, explain: "Ich war letzte Woche in Wien." },
          { q: "Das Wetter war …", options: ["sehr gut", "regnerisch", "kalt"], answer: 1, explain: "es hat oft geregnet." },
          { q: "Sophia möchte mit Tim …", options: ["in Urlaub fahren", "essen gehen", "einen Kaffee trinken"], answer: 2, explain: "Wir könnten einen Kaffee trinken." }
        ]
      },
      {
        teil: "Teil 2 — Gazete ilanı",
        intro: "Küçük ilanlar — ihtiyaca uygun olanı seç.",
        text: "1) FITNESSSTUDIO BODYFIT — Neueröffnung! Alle Mitgliedschaften 50% Rabatt im ersten Monat. Mo-So 6-23 Uhr.\n2) SPRACHSCHULE LINGUA — Deutschkurse für alle Niveaus, Kleingruppen, auch abends.\n3) SUPERMARKT FRISCH — Obst und Gemüse 20% günstiger am Wochenende.",
        tr: "1) Bodyfit Fitness — Açılış! İlk ay %50 indirim. 2) Lingua Dil Okulu — Her seviyede Almanca, küçük gruplar, akşam da var. 3) Frisch Market — Meyve sebze hafta sonu %20 ucuz.",
        questions: [
          { q: "Sen Almanca öğrenmek istiyorsun. Hangisi uygun?", options: ["İlan 1", "İlan 2", "İlan 3"], answer: 1, explain: "Lingua — Deutschkurse." }
        ]
      }
    ],
    hoeren: [
      {
        teil: "Teil 1 — Telefon mesajı",
        intro: "Doktor randevusu hakkında mesaj.",
        audio: "Guten Tag, hier ist die Praxis Doktor Weber. Ihr Termin am Mittwoch, den 15. März um 10 Uhr muss leider verschoben werden. Wir können Ihnen einen neuen Termin am Freitag, den 17. März um 14 Uhr anbieten. Bitte rufen Sie uns zurück, wenn der Termin nicht passt. Unsere Nummer: 030-55 44 33. Danke!",
        tr: "İyi günler, Dr. Weber muayenehanesi. 15 Mart Çarşamba saat 10'daki randevunuz maalesef ertelenmek zorunda. Size 17 Mart Cuma saat 14'te yeni randevu verebiliriz. Uygun olmazsa lütfen geri arayın. Numaramız: 030-55 44 33.",
        questions: [
          { q: "Welcher Tag war der alte Termin?", options: ["Montag", "Mittwoch", "Freitag"], answer: 1, explain: "Mittwoch, den 15. März." },
          { q: "Wie lautet die neue Uhrzeit?", options: ["10 Uhr", "14 Uhr", "17 Uhr"], answer: 1, explain: "um 14 Uhr." }
        ]
      },
      {
        teil: "Teil 2 — Diyalog (alışveriş)",
        intro: "Elbise mağazasında konuşma.",
        audio: "Verkäuferin: Guten Tag, kann ich Ihnen helfen?\nKunde: Ja, ich suche eine blaue Hose in Größe 40.\nVerkäuferin: Einen Moment. Hier ist eine in Größe 40, aber leider nur in Schwarz.\nKunde: Haben Sie die auch in Blau?\nVerkäuferin: In Blau haben wir nur Größe 38. Möchten Sie die anprobieren?\nKunde: Nein danke, das ist zu klein. Ich nehme die schwarze. Was kostet sie?\nVerkäuferin: 49,90 Euro.",
        tr: "Satıcı: İyi günler, yardımcı olabilir miyim? Müşteri: 40 beden mavi pantolon arıyorum. Satıcı: Bir dakika. 40 beden var ama sadece siyah. Müşteri: Mavisi yok mu? Satıcı: Mavi sadece 38 bedende. Denemek ister misiniz? Müşteri: Hayır, küçük gelir. Siyahı alıyorum. Ne kadar? Satıcı: 49,90 Euro.",
        questions: [
          { q: "Welche Größe sucht der Kunde?", options: ["38", "40", "42"], answer: 1, explain: "in Größe 40." },
          { q: "Welche Farbe nimmt der Kunde?", options: ["Blau", "Schwarz", "Rot"], answer: 1, explain: "Ich nehme die schwarze." },
          { q: "Wie viel kostet die Hose?", options: ["39,90 €", "49,90 €", "59,90 €"], answer: 1, explain: "49,90 Euro." }
        ]
      }
    ],
    schreiben: {
      format: "2 mesaj yazılır. Mesaj 1 resmi (kurs/işyeri), Mesaj 2 samimi (arkadaş). Her biri ~40 kelime.",
      tips: [
        "Resmi: 'Sie' kullan, 'Sehr geehrte' ile başla.",
        "Samimi: 'du' kullan, 'Liebe/Lieber' ile başla.",
        "3 noktaya da değin — her biri ayrı puan.",
        "Perfekt iyi kullan (A2'nin imzası)."
      ],
      templates: [
        {
          type: "Resmi E-Mail",
          structure: "Sehr geehrte(r) → Anlass → 3 Punkte → Schluss → Mit freundlichen Grüßen",
          phrases: {
            opening: ["Sehr geehrte Damen und Herren,", "Sehr geehrter Herr Müller,", "Sehr geehrte Frau Schmidt,"],
            body: [
              "ich schreibe Ihnen wegen …",
              "Leider kann ich am … nicht …",
              "Ich möchte den Termin verschieben.",
              "Könnten Sie mir bitte mitteilen, …?",
              "Vielen Dank im Voraus."
            ],
            closing: ["Mit freundlichen Grüßen", "Freundliche Grüße"]
          }
        },
        {
          type: "Samimi mesaj",
          structure: "Liebe/Lieber → Anlass → 3 Punkte → Schluss → Liebe Grüße",
          phrases: {
            opening: ["Liebe Anna,", "Lieber Tom,"],
            body: [
              "wie geht's dir?",
              "ich wollte dich fragen, ob …",
              "ich habe am Samstag frei.",
              "Was meinst du?"
            ],
            closing: ["Liebe Grüße", "Bis bald"]
          }
        }
      ],
      example: {
        prompt: "Almanca kursuna bir sebepten dolayı gelemeyeceksin (resmi). 1) Sebebi söyle, 2) Kaçıracağın ders gününü belirt, 3) Ödev iste.",
        answer: "Sehr geehrte Frau Schmidt,\nleider kann ich am Donnerstag, den 14. März nicht zum Deutschkurs kommen, weil ich einen wichtigen Arzttermin habe. Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken? Ich werde den Stoff zu Hause nacharbeiten.\nVielen Dank im Voraus.\nMit freundlichen Grüßen,\nAhmet Yılmaz",
        tr: "Sayın Frau Schmidt, maalesef 14 Mart Perşembe Almanca kursuna gelemeyeceğim çünkü önemli bir doktor randevum var. Ödevleri bana e-postayla gönderebilir misiniz? Konuyu evde çalışırım. Teşekkürler. Saygılarımla, Ahmet Yılmaz"
      }
    },
    sprechen: {
      format: "3 bölüm: soru-cevap (kendin hakkında), bilgi değişimi (konu kartı), planlama (ortak).",
      teile: [
        {
          teil: "Teil 1 — Kendinle ilgili soru-cevap",
          task: "Karşıdaki sana konu kartından soru sorar (Familie, Wohnort, Essen vb.) — sen cevaplarsın, sonra sen sorarsın.",
          useful: [
            "Wo wohnst du?",
            "Hast du Geschwister?",
            "Was machst du in deiner Freizeit?",
            "Was isst du gern?",
            "Wie kommst du zur Arbeit?",
            "Ich wohne seit … Jahren in … .",
            "Ich habe einen Bruder und eine Schwester."
          ]
        },
        {
          teil: "Teil 2 — Konu hakkında konuş",
          task: "Bir konu kartı (örn. 'Urlaub') alırsın. O konu hakkında cevap verirsin + ortağa soru sorarsın.",
          useful: [
            "Im letzten Urlaub war ich in … .",
            "Ich fahre gern nach … .",
            "Wann warst du zuletzt im Urlaub?",
            "Mit wem fährst du in Urlaub?"
          ]
        },
        {
          teil: "Teil 3 — Ortak planlama",
          task: "Birlikte bir şey planlayacaksınız (örn. doğum günü partisi, ortak alışveriş). Önerilerde bulun, anlaş.",
          useful: [
            "Wir könnten …",
            "Ich schlage vor, dass …",
            "Das ist eine gute Idee.",
            "Das finde ich gut.",
            "Nein, lieber …",
            "Sollen wir um … Uhr treffen?"
          ]
        }
      ]
    }
  },

  B1: {
    name: "Zertifikat B1 (Goethe/telc/ÖSD ortak)",
    format: "4 bölüm · yazılı ~165 dk + Sprechen 15 dk. Her bölüm bağımsız geçilir (modüler sistem). Geçme: 60%.",
    parts: [
      { name: "Lesen", duration: "65 dk", tasks: "5 Teil · blog, e-posta, makale, forum, ilanlar" },
      { name: "Hören", duration: "40 dk", tasks: "4 Teil · anonslar, radyo, röportaj, tartışma" },
      { name: "Schreiben", duration: "60 dk", tasks: "3 metin · forum yazısı (80 kel.), resmi/samimi e-posta (80 kel.)" },
      { name: "Sprechen", duration: "~15 dk", tasks: "3 Teil · ortak planlama, sunum (~3 dk) + soru-cevap" }
    ],
    themes: [
      "İş hayatı, başvuru, mülakat",
      "Resmi daireler (Amt, Einbürgerung)",
      "Banka, sigorta, finans",
      "Sağlık sistemi, doktor, hastane",
      "Eğitim ve meslek eğitimi",
      "Medya, internet, sosyal medya",
      "Çevre ve iklim",
      "Göç, entegrasyon, çok kültürlü yaşam",
      "Seyahat, kültürel farklar",
      "Aile, ilişkiler, modern yaşam",
      "Boş zaman, spor, sanat",
      "Görüş bildirme, tartışma"
    ],
    lesen: [
      {
        teil: "Teil 2 — Blog / makale",
        intro: "Bir blog yazısından alıntı. İfadelerin metindeki karşılıklarını bul.",
        text: "Warum ich jeden Tag mit dem Fahrrad zur Arbeit fahre\nFrüher bin ich immer mit dem Auto gefahren. Das war bequem, aber ich saß oft im Stau und kam gestresst ins Büro. Vor zwei Jahren habe ich mir ein Fahrrad gekauft und seitdem fahre ich jeden Tag damit zur Arbeit — bei jedem Wetter.\nDie Vorteile sind enorm: Ich mache jeden Tag Sport, ohne extra ins Fitnessstudio zu gehen. Ich spare Geld für Benzin und Parkplätze. Und das Beste: Ich komme viel entspannter am Arbeitsplatz an. Natürlich gibt es auch Nachteile. Im Winter ist es manchmal sehr kalt, und bei Regen wird man nass. Aber mit der richtigen Kleidung ist das kein Problem.",
        tr: "Neden her gün işe bisikletle gidiyorum. Eskiden hep arabayla giderdim. Rahattı ama sık sık trafikte kalıyor ve strese gire gire ofise varıyordum. İki yıl önce bir bisiklet aldım ve o günden beri her gün onunla işe gidiyorum — her havada. Avantajlar çok: fitness salonuna gitmeden her gün spor yapıyorum. Benzin ve park parasından tasarruf ediyorum. Ve en iyisi: işe çok daha rahat varıyorum. Elbette dezavantajları da var. Kışın çok soğuk olabiliyor, yağmurda ıslanıyorsun. Ama doğru giysi ile sorun değil.",
        questions: [
          { q: "Der Autor spart Geld, weil er …", options: ["kein Benzin mehr braucht", "kein Auto mehr hat", "zu Hause arbeitet"], answer: 0, explain: "Ich spare Geld für Benzin und Parkplätze." },
          { q: "Der größte Vorteil für den Autor ist …", options: ["Sport", "Geld", "entspannter anzukommen"], answer: 2, explain: "Und das Beste: Ich komme viel entspannter am Arbeitsplatz an." },
          { q: "Was ist ein Nachteil?", options: ["Stau", "Regen und Kälte", "Zu wenig Zeit"], answer: 1, explain: "Im Winter ist es kalt, bei Regen wird man nass." }
        ]
      },
      {
        teil: "Teil 4 — Forum yazıları (görüş)",
        intro: "Forum yazıları. Yazarın fikri olumlu mu olumsuz mu?",
        text: "FORUM: Soll man Handys in der Schule verbieten?\n\nBettina: Ja, auf jeden Fall! Kinder können sich in der Schule nicht auf den Unterricht konzentrieren, wenn sie ständig auf das Handy schauen. Ich habe selbst zwei Kinder und sehe das täglich.\n\nThomas: Das sehe ich anders. Handys gehören heute zum Leben. Statt zu verbieten, sollten wir den Kindern beibringen, wie man sie richtig benutzt.\n\nAnna: Ich bin unentschieden. Einerseits stimme ich Bettina zu, andererseits ist es unrealistisch, Handys komplett zu verbieten.",
        tr: "FORUM: Okulda telefon yasaklanmalı mı? Bettina: Evet, kesinlikle! Çocuklar sürekli telefona bakınca derse odaklanamıyor. İki çocuğum var, her gün görüyorum. Thomas: Ben farklı düşünüyorum. Telefon artık hayatın parçası. Yasaklamak yerine doğru kullanmayı öğretmeliyiz. Anna: Kararsızım. Bir yandan Bettina'ya katılıyorum, diğer yandan tamamen yasaklamak gerçekçi değil.",
        questions: [
          { q: "Bettinas Meinung zum Verbot ist …", options: ["dafür (yasağa olumlu)", "dagegen (yasağa karşı)", "unentschieden"], answer: 0, explain: "'Ja, auf jeden Fall!' — yasağa destek veriyor." },
          { q: "Thomas findet, dass man Handys …", options: ["verbieten sollte", "richtig benutzen lernen sollte", "nicht kaufen sollte"], answer: 1, explain: "den Kindern beibringen, wie man sie richtig benutzt." }
        ]
      }
    ],
    hoeren: [
      {
        teil: "Teil 2 — Radyo röportajı",
        intro: "Göçmen bir kadınla röportaj.",
        audio: "Moderator: Frau Demir, Sie leben seit 20 Jahren in Deutschland. Wie war der Anfang für Sie?\nFrau Demir: Am Anfang war es sehr schwer. Ich konnte kein Deutsch und hatte niemanden hier. Ich habe sofort einen Sprachkurs angefangen und nach sechs Monaten konnte ich einfache Gespräche führen. Das war ein großes Erfolgserlebnis.\nModerator: Was war die größte Herausforderung?\nFrau Demir: Ganz klar: die Bürokratie. Alle diese Formulare und Ämter — das war am Anfang sehr verwirrend. Heute kann ich darüber lachen, aber damals habe ich oft geweint.\nModerator: Und was raten Sie neuen Migranten?\nFrau Demir: Sofort Deutsch lernen und Kontakte zu Deutschen suchen. Ohne die Sprache bleibt man isoliert.",
        tr: "Moderatör: Frau Demir, 20 yıldır Almanya'dasınız. Başlangıç nasıldı? Demir: Başlarda çok zordu. Almanca bilmiyordum ve kimsem yoktu. Hemen dil kursuna yazıldım, 6 ay sonra basit sohbet yapabiliyordum. Büyük bir başarı hissiydi. Moderatör: En büyük zorluk? Demir: Kesin olarak: bürokrasi. O formlar, daireler — başlarda çok kafa karıştırıcıydı. Şimdi gülüyorum ama o zaman çok ağladım. Moderatör: Yeni göçmenlere tavsiyen? Demir: Hemen Almanca öğrenin, Almanlarla bağ kurun. Dil olmadan izole kalırsınız.",
        questions: [
          { q: "Wie lange lebt Frau Demir in Deutschland?", options: ["10 Jahre", "20 Jahre", "30 Jahre"], answer: 1, explain: "seit 20 Jahren." },
          { q: "Was war die größte Schwierigkeit?", options: ["die Sprache", "die Bürokratie", "das Essen"], answer: 1, explain: "Ganz klar: die Bürokratie." },
          { q: "Ihr Rat an neue Migranten:", options: ["Arbeit suchen", "Deutsch lernen und Kontakte knüpfen", "nach Hause zurückkehren"], answer: 1, explain: "Sofort Deutsch lernen und Kontakte zu Deutschen suchen." }
        ]
      }
    ],
    schreiben: {
      format: "3 görev: 1) Forum yazısı (~80 kelime), 2) Yarı-resmi e-posta (~80 kelime), 3) Resmi e-posta kısa (~40 kelime).",
      tips: [
        "Forum: 'Ich finde, dass…', 'Meiner Meinung nach…', '…ist wichtig, weil…'",
        "Resmi: 'Sehr geehrte…', 'Mit freundlichen Grüßen'.",
        "Görüş + gerekçe + örnek yapısını uygula.",
        "weil/obwohl/damit bağlaçlarını kullan — B1'in gramer imzası."
      ],
      templates: [
        {
          type: "Forum yazısı (görüş)",
          structure: "Giriş → Kendi görüşün → Gerekçe/örnek → Kapanış/öneri",
          phrases: {
            opening: [
              "Ich habe den Artikel mit großem Interesse gelesen.",
              "Das Thema ist sehr wichtig."
            ],
            body: [
              "Meiner Meinung nach ist …",
              "Ich finde, dass …",
              "Einerseits … andererseits …",
              "Ein Beispiel dafür ist …",
              "Ich stimme zu, aber …",
              "Das Argument überzeugt mich nicht, weil …"
            ],
            closing: [
              "Zusammenfassend kann man sagen, dass …",
              "Deshalb sollten wir …"
            ]
          }
        },
        {
          type: "Resmi şikayet e-postası",
          structure: "Sehr geehrte… → Ürün/sorun → Kanıt → Talep → Mit freundlichen Grüßen",
          phrases: {
            opening: [
              "Sehr geehrte Damen und Herren,",
              "ich wende mich an Sie, weil …"
            ],
            body: [
              "am … habe ich … bei Ihnen gekauft / bestellt.",
              "Leider funktioniert das Gerät nicht richtig.",
              "Ich fordere eine Rückerstattung / einen Austausch.",
              "In der Anlage finden Sie …"
            ],
            closing: ["Ich erwarte Ihre Antwort bis …", "Mit freundlichen Grüßen"]
          }
        }
      ],
      example: {
        prompt: "Forum: 'Ev çalışması mı ofis mi?' Görüşünü yaz (~80 kelime). Kendi deneyiminle destekle.",
        answer: "Ich arbeite seit zwei Jahren im Homeoffice und finde das großartig. Der größte Vorteil ist für mich die Zeitersparnis — ich sitze nicht mehr im Stau und kann früher mit der Arbeit beginnen. Außerdem bin ich zu Hause viel konzentrierter, weil es weniger Störungen gibt. Natürlich fehlt manchmal der persönliche Kontakt zu den Kollegen. Deshalb ist für mich eine Mischung aus Homeoffice und Büro ideal: drei Tage zu Hause, zwei Tage im Büro. So hat man das Beste aus beiden Welten.",
        tr: "İki yıldır evden çalışıyorum ve harika buluyorum. Benim için en büyük avantaj zaman kazancı — trafikte kalmıyorum ve erken başlayabiliyorum. Ayrıca evde çok daha odaklıyım çünkü dikkat dağıtıcı az. Tabii bazen meslektaşlarla kişisel iletişim eksik kalıyor. Bu yüzden bence ideal olan karma model: 3 gün evde, 2 gün ofiste. Böylece her iki dünyanın da en iyisini yaşarsın."
      }
    },
    sprechen: {
      format: "3 bölüm: 1) Ortak planlama (2 kişi, ~3 dk), 2) Sunum (resim/konu kartı, ~3 dk + sorular), 3) Partner sunumu hakkında soru.",
      teile: [
        {
          teil: "Teil 1 — Ortak planlama",
          task: "Partneerle birlikte bir şey organize edin (örn. kursa veda partisi, ortak hediye). Öneri yap, itiraz et, anlaşın.",
          useful: [
            "Was hältst du davon, wenn wir …?",
            "Wir könnten … machen.",
            "Ich schlage vor, dass …",
            "Das ist eine gute Idee, aber …",
            "Nein, das finde ich nicht so gut.",
            "Einverstanden, machen wir so.",
            "Wann und wo wollen wir uns treffen?"
          ]
        },
        {
          teil: "Teil 2 — Sunum (resim/konu)",
          task: "Bir resim/konu kartı al. ~3 dakika şu yapıyı izle: a) Resmi tanımla, b) Kendi deneyimin, c) Ülkendeki durum, d) Avantaj/dezavantaj, e) Kendi fikrin.",
          useful: [
            "Auf dem Bild sehe ich …",
            "Das Thema ist wichtig, weil …",
            "In meiner Heimat ist das ähnlich / anders.",
            "Ein Vorteil ist …, ein Nachteil ist …",
            "Persönlich finde ich, dass …",
            "Zusammenfassend würde ich sagen, …"
          ]
        },
        {
          teil: "Teil 3 — Geri bildirim / soru",
          task: "Partnerin sunumundan sonra ona 1-2 soru sor.",
          useful: [
            "Das war ein interessanter Vortrag.",
            "Eine Frage habe ich noch: …",
            "Kannst du mehr darüber sagen, wie …?",
            "Was meinst du mit …?"
          ]
        }
      ]
    }
  },

  B2: {
    name: "Goethe-Zertifikat B2",
    format: "4 bölüm modüler · yazılı ~190 dk + Sprechen 15 dk. Her modül ayrı ayrı geçilebilir. Geçme: 60%.",
    parts: [
      { name: "Lesen", duration: "65 dk", tasks: "5 Teil · gazete, bilimsel metin, karşılaştırma, forum" },
      { name: "Hören", duration: "40 dk", tasks: "4 Teil · konuşma, röportaj, ders, radyo tartışma" },
      { name: "Schreiben", duration: "75 dk", tasks: "2 metin · formal Stellungnahme (~150 kel.) + resmi mesaj (~100 kel.)" },
      { name: "Sprechen", duration: "~15 dk", tasks: "2 Teil · sunum (~4 dk) + tartışma (~5 dk)" }
    ],
    themes: [
      "Eğitim ve üniversite yaşamı",
      "Çalışma dünyası (Homeoffice, otomasyon, iş-yaşam dengesi)",
      "Dijitalleşme ve sosyal medya",
      "Göç, entegrasyon, çok kültürlülük",
      "Çevre ve sürdürülebilirlik",
      "Sağlık ve beslenme trendleri",
      "Globalleşme ve ekonomi",
      "Sanat, kültür, film, edebiyat",
      "Bilim ve teknoloji",
      "Politika ve demokrasi (temel)",
      "Psikoloji ve kişisel gelişim",
      "Gelecek toplum trendleri"
    ],
    lesen: [
      {
        teil: "Teil 1 — Gazete makalesi",
        intro: "Basın metninden alıntı. Detay + çıkarım.",
        text: "Die Generation Z und die Arbeitswelt\nImmer häufiger hört man von Unternehmen die Klage, dass junge Arbeitnehmer andere Erwartungen an den Arbeitsplatz stellen als frühere Generationen. Die sogenannte Generation Z, geboren zwischen 1997 und 2012, legt weniger Wert auf ein hohes Gehalt und mehr auf Work-Life-Balance, flexible Arbeitszeiten und sinnvolle Tätigkeiten. Laut einer aktuellen Studie würden 72% der unter 25-Jährigen lieber weniger verdienen, wenn sie dafür einen Job hätten, der mit ihren Werten übereinstimmt.\nKritiker werfen dieser Generation vor, weniger leistungsbereit zu sein. Befürworter hingegen argumentieren, dass sich die Arbeitswelt ohnehin verändern müsse — nicht zuletzt wegen des Fachkräftemangels, der Arbeitgeber zwingt, sich nach den Wünschen junger Bewerber zu richten.",
        tr: "Z Kuşağı ve iş dünyası. Şirketler giderek daha sık, genç çalışanların iş yerinden farklı beklentileri olduğundan şikayet ediyor. 1997-2012 arası doğan Z Kuşağı, yüksek maaşa daha az, iş-yaşam dengesine, esnek saatlere ve anlamlı işe daha çok değer veriyor. Güncel bir araştırmaya göre 25 yaş altının %72'si, değerleriyle örtüşen bir iş için daha az kazanmayı tercih ederdi. Eleştirmenler bu kuşağı performansa daha az istekli olmakla suçluyor. Destekçiler ise iş dünyasının zaten değişmesi gerektiğini savunuyor — kalifiye eleman eksikliği işverenleri genç adayların isteklerine uymaya zorluyor.",
        questions: [
          { q: "Was wünscht sich die Generation Z laut Artikel am meisten?", options: ["höheres Gehalt", "Work-Life-Balance", "weniger Urlaub"], answer: 1, explain: "legt mehr Wert auf Work-Life-Balance." },
          { q: "Was sagt die Studie?", options: ["Junge wollen mehr verdienen", "72% würden für bessere Werte weniger verdienen", "Alle wollen Teilzeit"], answer: 1, explain: "72% würden lieber weniger verdienen, wenn …" },
          { q: "Warum müssen sich Arbeitgeber anpassen?", options: ["wegen des Fachkräftemangels", "wegen der Digitalisierung", "wegen der Gesetze"], answer: 0, explain: "nicht zuletzt wegen des Fachkräftemangels." }
        ]
      }
    ],
    hoeren: [
      {
        teil: "Teil 3 — Tartışma",
        intro: "Bir radyo tartışması — iki uzman karşıt görüş.",
        audio: "Moderator: Herzlich willkommen. Heute diskutieren wir das Thema 'Tempolimit auf deutschen Autobahnen'. Frau Dr. Weber, Sie sind dafür. Warum?\nFrau Weber: Ein generelles Tempolimit von 130 würde jährlich etwa zwei Millionen Tonnen CO2 einsparen. Außerdem gäbe es weniger schwere Unfälle. In allen anderen europäischen Ländern ist ein Tempolimit selbstverständlich — nur Deutschland bleibt stur.\nHerr Klein: Ich sehe das anders. Die deutschen Autobahnen gehören zu den sichersten der Welt — auch ohne Tempolimit. Der CO2-Effekt ist zudem minimal, denn der Verkehr macht nur einen kleinen Teil der Emissionen aus. Wir sollten lieber in E-Mobilität investieren.\nFrau Weber: Das eine schließt das andere nicht aus. Ein Tempolimit wäre eine sofort wirksame Maßnahme — E-Mobilität dauert Jahrzehnte.",
        tr: "Moderatör: Hoş geldiniz. Bugün 'Alman otoyollarında hız limiti' konusunu tartışıyoruz. Dr. Weber, siz destekçisiniz. Neden? Weber: Genel 130 limiti yılda yaklaşık 2 milyon ton CO2 tasarrufu sağlardı. Ayrıca ağır kaza az olurdu. Tüm Avrupa ülkelerinde limit var — sadece Almanya inat ediyor. Klein: Ben farklı görüyorum. Alman otoyolları dünyanın en güvenlilerinden — limitsiz bile. CO2 etkisi de minimal, trafik emisyonların küçük bir kısmı. E-mobiliteye yatırım yapmalıyız. Weber: Biri diğerini dışlamaz. Limit hemen etkili bir önlem — e-mobilite onyıllar sürer.",
        questions: [
          { q: "Was ist Frau Webers Hauptargument?", options: ["Unfallgefahr", "CO2-Einsparung", "Geschwindigkeit"], answer: 1, explain: "etwa zwei Millionen Tonnen CO2 einsparen." },
          { q: "Was schlägt Herr Klein stattdessen vor?", options: ["neue Gesetze", "E-Mobilität", "weniger Autos"], answer: 1, explain: "Wir sollten lieber in E-Mobilität investieren." },
          { q: "Wie ist Frau Webers Reaktion?", options: ["Sie stimmt zu", "Beides zusammen möglich", "Sie wird wütend"], answer: 1, explain: "Das eine schließt das andere nicht aus." }
        ]
      }
    ],
    schreiben: {
      format: "2 görev: 1) Stellungnahme / Forumyorum (~150 kelime), 2) Resmi şikayet/talep e-postası (~100 kelime).",
      tips: [
        "Görüş yazısı: tez → argüman 1 → argüman 2 → karşı görüş kabul + çürüt → sonuç",
        "Konnektörleri BOL kullan: trotzdem, deshalb, außerdem, dennoch, obwohl, zudem",
        "Nominalisierung ve Passiv kullan — B2'nin seviyesi",
        "Konjunktiv II nazik olma: 'wäre', 'hätte', 'würde'"
      ],
      templates: [
        {
          type: "Stellungnahme / Forumyorum",
          structure: "Giriş: konu + tezin → 1. argüman + örnek → 2. argüman + örnek → karşı tarafı kabul et + çürüt → sonuç/öneri",
          phrases: {
            opening: [
              "In dem Artikel geht es um …",
              "Ich teile die Meinung des Autors weitgehend / teilweise / nicht.",
              "Zunächst möchte ich einige Punkte hervorheben."
            ],
            body: [
              "Ein wichtiges Argument dafür ist, dass …",
              "Darüber hinaus …",
              "Ein Beispiel aus meiner eigenen Erfahrung: …",
              "Natürlich gibt es auch Gegenargumente. Man könnte einwenden, dass …",
              "Allerdings bin ich der Meinung, dass …",
              "Trotz dieser Bedenken …"
            ],
            closing: [
              "Abschließend lässt sich festhalten, dass …",
              "Aus den genannten Gründen plädiere ich für / gegen …",
              "Es wäre wünschenswert, wenn …"
            ]
          }
        },
        {
          type: "Resmi şikayet / talep",
          structure: "Anrede → Bezug (hangi yazı/sipariş) → sorun + kanıt → talep + süre → kapanış",
          phrases: {
            opening: [
              "Sehr geehrte Damen und Herren,",
              "mit Bezug auf Ihr Schreiben vom …"
            ],
            body: [
              "am … habe ich … erworben / bestellt.",
              "Leider musste ich feststellen, dass …",
              "Dies entspricht nicht Ihrer Zusicherung.",
              "Hiermit fordere ich Sie auf, … .",
              "Andernfalls behalte ich mir rechtliche Schritte vor."
            ],
            closing: [
              "Ich erwarte Ihre Stellungnahme bis zum …",
              "Für Rückfragen stehe ich Ihnen gern zur Verfügung.",
              "Mit freundlichen Grüßen"
            ]
          }
        }
      ],
      example: {
        prompt: "Stellungnahme: 'Sosyal medya gerçek arkadaşlıkları zayıflatıyor mu?' (~150 kelime). Kendi argümanlarınla destekle.",
        answer: "In der heutigen Gesellschaft wird häufig diskutiert, ob soziale Medien echte Freundschaften schwächen. Meiner Meinung nach ist diese Frage differenziert zu betrachten.\nEinerseits bieten Plattformen wie Instagram oder WhatsApp die Möglichkeit, mit Freunden auch über große Entfernungen in Kontakt zu bleiben. Gerade in Zeiten der Globalisierung ist das ein unschätzbarer Vorteil. Andererseits zeigen Studien, dass vor allem junge Menschen durch den ständigen Vergleich auf sozialen Medien unter Selbstzweifeln leiden.\nEin weiterer Aspekt ist die Qualität der Kommunikation. Ein kurzes Like ersetzt kein tiefes Gespräch. Persönliche Treffen, bei denen man Mimik und Stimme wahrnimmt, bleiben unersetzlich.\nAbschließend lässt sich sagen, dass soziale Medien Freundschaften nicht grundsätzlich schwächen. Entscheidend ist, wie bewusst man sie nutzt. Wer sie als Ergänzung und nicht als Ersatz versteht, wird keine Einbußen an echten Beziehungen erleiden.",
        tr: "Günümüz toplumunda sosyal medyanın gerçek arkadaşlıkları zayıflatıp zayıflatmadığı sık tartışılır. Bence bu soru nüanslı ele alınmalı. Bir yandan Instagram veya WhatsApp gibi platformlar, arkadaşlarla uzaktan iletişimi sağlar. Özellikle küreselleşme çağında bu paha biçilmez bir avantaj. Diğer yandan araştırmalar gösteriyor ki özellikle gençler sürekli karşılaştırma yüzünden özgüven sorunu yaşıyor. Bir başka boyut iletişim kalitesi. Kısa bir like derin bir sohbeti karşılamaz. Mimik ve sesin algılandığı yüz yüze buluşmalar vazgeçilmez. Sonuç olarak sosyal medya arkadaşlıkları doğrudan zayıflatmıyor. Belirleyici olan bilinçli kullanım. Sosyal medyayı tamamlayıcı, yerine geçmez olarak gören kimse gerçek ilişkilerinde kayıp yaşamaz."
      }
    },
    sprechen: {
      format: "2 bölüm: 1) Bireysel sunum (~4 dk + partner sorusu), 2) Tartışma (anlaşmazlıkla sona eren konu).",
      teile: [
        {
          teil: "Teil 1 — Sunum",
          task: "Tek sayfa kart verilir, 2 alternatif konu arasından seç. Kart yapısı: a) Konuyu kısa tanımla, b) Kişisel deneyim, c) Avantaj/dezavantaj, d) Ülkendeki durum, e) Kendi görüşün + gerekçe.",
          useful: [
            "Mein Thema ist …",
            "Ich möchte das Thema in vier Punkten behandeln.",
            "Aus eigener Erfahrung kann ich sagen, dass …",
            "Ein wichtiger Vorteil ist … . Dem gegenüber steht der Nachteil, dass …",
            "In der Türkei ist die Situation ähnlich / deutlich anders.",
            "Meine persönliche Einschätzung ist, dass …",
            "Zusammenfassend plädiere ich dafür, dass …"
          ]
        },
        {
          teil: "Teil 2 — Tartışma",
          task: "Partneerle bir konu üzerinde farklı görüşlerle tartışacaksınız (örn. 'Atom enerjisi?'). Savun, karşı tarafı duy, kısmen kabul et, kendi pozisyonunu koru.",
          useful: [
            "Ich bin da völlig anderer Meinung.",
            "Da muss ich dir widersprechen.",
            "Das sehe ich nicht so.",
            "Du hast insofern recht, dass … — aber …",
            "Ich gebe zu, dass … . Dennoch meine ich, dass …",
            "Können Sie mir erklären, warum Sie …?",
            "Lass uns das aus einer anderen Perspektive betrachten.",
            "Wir sollten einen Kompromiss finden."
          ]
        }
      ]
    }
  }
};
