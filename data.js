// Günlük Almanca cümleler - Goethe/telc müfredatına göre seviye ve konu
// A1 = Start Deutsch 1, A2 = Start Deutsch 2, B1 = Zertifikat B1, B2 = Goethe-Zertifikat B2
const phrases = {
  A1: {
    "Selamlaşma & Veda": [
      { de: "Hallo!", tr: "Merhaba!" },
      { de: "Guten Morgen!", tr: "Günaydın!" },
      { de: "Guten Tag!", tr: "İyi günler!" },
      { de: "Guten Abend!", tr: "İyi akşamlar!" },
      { de: "Gute Nacht!", tr: "İyi geceler!" },
      { de: "Tschüss!", tr: "Görüşürüz! (samimi)" },
      { de: "Auf Wiedersehen!", tr: "Hoşça kal! (resmi)" },
      { de: "Bis später!", tr: "Sonra görüşürüz!" },
      { de: "Bis morgen!", tr: "Yarın görüşürüz!" },
      { de: "Wie geht's?", tr: "Nasılsın?" },
      { de: "Mir geht es gut, danke.", tr: "İyiyim, teşekkürler." },
      { de: "Und dir?", tr: "Ya sen?" },
      { de: "Schönen Tag noch!", tr: "İyi günler dilerim!" }
    ],
    "Kendini Tanıtma": [
      { de: "Wie heißt du?", tr: "Adın ne?" },
      { de: "Ich heiße Ahmet.", tr: "Benim adım Ahmet." },
      { de: "Wie ist Ihr Name?", tr: "Adınız nedir? (resmi)" },
      { de: "Woher kommst du?", tr: "Nerelisin?" },
      { de: "Ich komme aus der Türkei.", tr: "Ben Türkiye'denim." },
      { de: "Wo wohnst du?", tr: "Nerede yaşıyorsun?" },
      { de: "Ich wohne in Berlin.", tr: "Berlin'de yaşıyorum." },
      { de: "Wie alt bist du?", tr: "Kaç yaşındasın?" },
      { de: "Ich bin 25 Jahre alt.", tr: "25 yaşındayım." },
      { de: "Was bist du von Beruf?", tr: "Mesleğin ne?" },
      { de: "Ich bin Student.", tr: "Ben öğrenciyim." },
      { de: "Freut mich!", tr: "Memnun oldum!" },
      { de: "Sprechen Sie Englisch?", tr: "İngilizce konuşuyor musunuz?" },
      { de: "Ich spreche ein bisschen Deutsch.", tr: "Biraz Almanca konuşuyorum." }
    ],
    "Aile & Arkadaşlar": [
      { de: "Das ist meine Familie.", tr: "Bu benim ailem." },
      { de: "Ich habe einen Bruder.", tr: "Bir erkek kardeşim var." },
      { de: "Ich habe eine Schwester.", tr: "Bir kız kardeşim var." },
      { de: "Ich habe keine Kinder.", tr: "Çocuğum yok." },
      { de: "Ich bin verheiratet.", tr: "Evliyim." },
      { de: "Ich bin ledig.", tr: "Bekarım." },
      { de: "Mein Vater heißt Ali.", tr: "Babamın adı Ali." },
      { de: "Meine Mutter ist Lehrerin.", tr: "Annem öğretmen." },
      { de: "Das ist mein Freund.", tr: "Bu benim arkadaşım/erkek arkadaşım." }
    ],
    "Sayılar, Saat & Tarih": [
      { de: "Wie spät ist es?", tr: "Saat kaç?" },
      { de: "Es ist drei Uhr.", tr: "Saat üç." },
      { de: "Es ist halb acht.", tr: "Saat yedi buçuk." },
      { de: "Es ist Viertel nach zehn.", tr: "On'u çeyrek geçiyor." },
      { de: "Welcher Tag ist heute?", tr: "Bugün hangi gün?" },
      { de: "Heute ist Montag.", tr: "Bugün Pazartesi." },
      { de: "Morgen ist Dienstag.", tr: "Yarın Salı." },
      { de: "Welches Datum haben wir heute?", tr: "Bugünün tarihi ne?" },
      { de: "Heute ist der 15. März.", tr: "Bugün 15 Mart." },
      { de: "Ich habe am 3. Mai Geburtstag.", tr: "Doğum günüm 3 Mayıs." }
    ],
    "Alışveriş (Temel)": [
      { de: "Was kostet das?", tr: "Bu ne kadar?" },
      { de: "Das kostet zehn Euro.", tr: "Bu on Euro." },
      { de: "Ich möchte das hier.", tr: "Bunu istiyorum." },
      { de: "Haben Sie das in Größe M?", tr: "Bu bedeni M'de var mı?" },
      { de: "Kann ich mit Karte zahlen?", tr: "Kartla ödeyebilir miyim?" },
      { de: "Ich zahle bar.", tr: "Nakit ödüyorum." },
      { de: "Wo ist die Kasse?", tr: "Kasa nerede?" },
      { de: "Eine Tüte, bitte.", tr: "Bir poşet, lütfen." },
      { de: "Brauchen Sie einen Kassenbon?", tr: "Fiş ister misiniz?" },
      { de: "Ich schaue mich nur um.", tr: "Sadece bakıyorum." }
    ],
    "Yemek & İçecek": [
      { de: "Ich habe Hunger.", tr: "Acıktım." },
      { de: "Ich habe Durst.", tr: "Susadım." },
      { de: "Guten Appetit!", tr: "Afiyet olsun!" },
      { de: "Das schmeckt gut.", tr: "Lezzetli." },
      { de: "Ein Wasser, bitte.", tr: "Bir su, lütfen." },
      { de: "Einen Kaffee, bitte.", tr: "Bir kahve, lütfen." },
      { de: "Ich esse gern Pizza.", tr: "Pizza yemeyi severim." },
      { de: "Ich trinke keinen Alkohol.", tr: "Alkol içmem." },
      { de: "Die Rechnung, bitte!", tr: "Hesap, lütfen!" },
      { de: "Zum Mitnehmen, bitte.", tr: "Paket olsun lütfen." }
    ],
    "Ev & Oda": [
      { de: "Das ist mein Zimmer.", tr: "Bu benim odam." },
      { de: "Die Wohnung hat drei Zimmer.", tr: "Dairenin üç odası var." },
      { de: "Die Küche ist klein.", tr: "Mutfak küçük." },
      { de: "Das Bad ist neu.", tr: "Banyo yeni." },
      { de: "Ich wohne im dritten Stock.", tr: "Üçüncü katta oturuyorum." },
      { de: "Es gibt einen Aufzug.", tr: "Asansör var." },
      { de: "Wo ist die Toilette?", tr: "Tuvalet nerede?" }
    ],
    "Günlük Rutin": [
      { de: "Ich stehe um 7 Uhr auf.", tr: "Saat 7'de kalkıyorum." },
      { de: "Ich frühstücke zu Hause.", tr: "Evde kahvaltı yapıyorum." },
      { de: "Ich fahre mit dem Bus zur Arbeit.", tr: "İşe otobüsle gidiyorum." },
      { de: "Ich arbeite von 9 bis 17 Uhr.", tr: "9'dan 17'ye kadar çalışıyorum." },
      { de: "Am Abend sehe ich fern.", tr: "Akşam televizyon izliyorum." },
      { de: "Ich gehe um 23 Uhr ins Bett.", tr: "Saat 23'te yatıyorum." }
    ],
    "Hobi & Boş Zaman": [
      { de: "Was machst du in deiner Freizeit?", tr: "Boş zamanlarında ne yapıyorsun?" },
      { de: "Ich lese gern Bücher.", tr: "Kitap okumayı severim." },
      { de: "Ich spiele Fußball.", tr: "Futbol oynuyorum." },
      { de: "Ich höre gern Musik.", tr: "Müzik dinlemeyi severim." },
      { de: "Ich gehe gern ins Kino.", tr: "Sinemaya gitmeyi severim." },
      { de: "Magst du Sport?", tr: "Spor sever misin?" }
    ],
    "Nezaket İfadeleri": [
      { de: "Bitte.", tr: "Lütfen / Rica ederim." },
      { de: "Danke!", tr: "Teşekkürler!" },
      { de: "Danke schön!", tr: "Çok teşekkürler!" },
      { de: "Vielen Dank!", tr: "Çok teşekkür ederim!" },
      { de: "Bitte schön.", tr: "Bir şey değil." },
      { de: "Entschuldigung!", tr: "Affedersiniz!" },
      { de: "Es tut mir leid.", tr: "Özür dilerim." },
      { de: "Kein Problem.", tr: "Sorun değil." },
      { de: "Gern geschehen.", tr: "Rica ederim." }
    ],
    "Vücut & Sağlık (Temel)": [
      { de: "Mein Kopf tut weh.", tr: "Başım ağrıyor." },
      { de: "Meine Augen sind müde.", tr: "Gözlerim yorgun." },
      { de: "Ich habe Zahnschmerzen.", tr: "Diş ağrım var." },
      { de: "Mein Bein tut weh.", tr: "Bacağım ağrıyor." },
      { de: "Mein Bauch tut weh.", tr: "Karnım ağrıyor." },
      { de: "Ich bin krank.", tr: "Hastayım." },
      { de: "Gute Besserung!", tr: "Geçmiş olsun!" },
      { de: "Ich fühle mich besser.", tr: "Kendimi daha iyi hissediyorum." }
    ],
    "Giysi & Renkler": [
      { de: "Das T-Shirt ist blau.", tr: "Tişört mavi." },
      { de: "Ich trage eine schwarze Hose.", tr: "Siyah bir pantolon giyiyorum." },
      { de: "Die Jacke ist rot.", tr: "Ceket kırmızı." },
      { de: "Wie viel kostet dieses Hemd?", tr: "Bu gömlek ne kadar?" },
      { de: "Haben Sie das in Weiß?", tr: "Bunun beyazı var mı?" },
      { de: "Meine Schuhe sind neu.", tr: "Ayakkabılarım yeni." },
      { de: "Ich suche einen warmen Pullover.", tr: "Sıcak bir kazak arıyorum." },
      { de: "Welche Farbe magst du?", tr: "Hangi rengi seviyorsun?" }
    ],
    "Hava Durumu (A1)": [
      { de: "Es regnet.", tr: "Yağmur yağıyor." },
      { de: "Es ist kalt.", tr: "Soğuk." },
      { de: "Es ist warm.", tr: "Sıcak." },
      { de: "Die Sonne scheint.", tr: "Güneş parlıyor." },
      { de: "Es schneit.", tr: "Kar yağıyor." },
      { de: "Wie ist das Wetter heute?", tr: "Bugün hava nasıl?" },
      { de: "Es ist windig.", tr: "Rüzgar var." }
    ],
    "Ülkeler & Diller": [
      { de: "Meine Heimat ist die Türkei.", tr: "Benim memleketim Türkiye." },
      { de: "Ich spreche Türkisch und Deutsch.", tr: "Türkçe ve Almanca konuşuyorum." },
      { de: "Er ist Deutscher.", tr: "O Alman." },
      { de: "Sie ist Türkin.", tr: "O Türk (kadın)." },
      { de: "Welche Sprachen sprichst du?", tr: "Hangi dilleri konuşuyorsun?" },
      { de: "Ich lerne seit einem Jahr Deutsch.", tr: "Bir yıldır Almanca öğreniyorum." },
      { de: "Deutschland ist ein schönes Land.", tr: "Almanya güzel bir ülke." }
    ],
    "Ulaşım (A1)": [
      { de: "Ich fahre mit dem Bus.", tr: "Otobüsle gidiyorum." },
      { de: "Nehmen Sie die U-Bahn!", tr: "Metroyu kullanın!" },
      { de: "Wo ist die Haltestelle?", tr: "Durak nerede?" },
      { de: "Ein Ticket, bitte.", tr: "Bir bilet, lütfen." },
      { de: "Ich gehe zu Fuß.", tr: "Yürüyerek gidiyorum." },
      { de: "Der Zug ist pünktlich.", tr: "Tren dakik." }
    ],
    "Küçük Sohbet (A1)": [
      { de: "Schönes Wochenende!", tr: "İyi hafta sonları!" },
      { de: "Viel Spaß!", tr: "İyi eğlenceler!" },
      { de: "Viel Glück!", tr: "Bol şans!" },
      { de: "Herzlichen Glückwunsch!", tr: "Tebrikler!" },
      { de: "Alles Gute!", tr: "Her şey gönlünce olsun!" },
      { de: "Prost!", tr: "Şerefe!" },
      { de: "Gesundheit!", tr: "Çok yaşa! (hapşırınca)" },
      { de: "Willkommen!", tr: "Hoş geldiniz!" }
    ],
    "Anlama & Yardım İsteme": [
      { de: "Ich verstehe nicht.", tr: "Anlamıyorum." },
      { de: "Können Sie das wiederholen?", tr: "Tekrar eder misiniz?" },
      { de: "Sprechen Sie bitte langsam.", tr: "Lütfen yavaş konuşun." },
      { de: "Was bedeutet das?", tr: "Bu ne anlama geliyor?" },
      { de: "Wie sagt man das auf Deutsch?", tr: "Bu Almanca nasıl söylenir?" },
      { de: "Können Sie mir helfen?", tr: "Bana yardım edebilir misiniz?" },
      { de: "Ich habe eine Frage.", tr: "Bir sorum var." },
      { de: "Ich weiß nicht.", tr: "Bilmiyorum." }
    ]
  },

  A2: {
    "Yön Sorma & Ulaşım": [
      { de: "Entschuldigung, wo ist der Bahnhof?", tr: "Affedersiniz, tren istasyonu nerede?" },
      { de: "Wie komme ich zum Zentrum?", tr: "Merkeze nasıl giderim?" },
      { de: "Ist es weit von hier?", tr: "Buradan uzak mı?" },
      { de: "Gehen Sie geradeaus.", tr: "Dümdüz gidin." },
      { de: "Biegen Sie links ab.", tr: "Sola dönün." },
      { de: "Biegen Sie rechts ab.", tr: "Sağa dönün." },
      { de: "Es ist gleich um die Ecke.", tr: "Hemen köşede." },
      { de: "Welche Linie fährt zum Flughafen?", tr: "Havalimanına hangi hat gidiyor?" },
      { de: "Wo muss ich umsteigen?", tr: "Nerede aktarma yapmam lazım?" },
      { de: "Wann kommt der nächste Bus?", tr: "Bir sonraki otobüs ne zaman?" },
      { de: "Eine Fahrkarte nach München, bitte.", tr: "Münih'e bir bilet, lütfen." }
    ],
    "Seyahat & Tatil": [
      { de: "Ich mache nächste Woche Urlaub.", tr: "Önümüzdeki hafta tatile çıkıyorum." },
      { de: "Ich fliege nach Istanbul.", tr: "İstanbul'a uçuyorum." },
      { de: "Ich habe ein Hotelzimmer gebucht.", tr: "Bir otel odası ayırttım." },
      { de: "Wann ist der Check-in?", tr: "Giriş saati ne zaman?" },
      { de: "Haben Sie ein Zimmer frei?", tr: "Boş odanız var mı?" },
      { de: "Eine Nacht kostet 80 Euro.", tr: "Bir gece 80 Euro." },
      { de: "Ist das Frühstück inklusive?", tr: "Kahvaltı dahil mi?" },
      { de: "Können Sie ein Taxi rufen?", tr: "Taksi çağırabilir misiniz?" }
    ],
    "Restoran": [
      { de: "Einen Tisch für zwei Personen, bitte.", tr: "İki kişilik bir masa, lütfen." },
      { de: "Haben Sie reserviert?", tr: "Rezervasyonunuz var mı?" },
      { de: "Die Speisekarte, bitte.", tr: "Menü, lütfen." },
      { de: "Was können Sie empfehlen?", tr: "Ne tavsiye edersiniz?" },
      { de: "Ich nehme das Schnitzel.", tr: "Ben şnitzel alayım." },
      { de: "Ohne Zwiebeln, bitte.", tr: "Soğansız olsun lütfen." },
      { de: "Ich bin Vegetarier.", tr: "Ben vejetaryenim." },
      { de: "Haben Sie vegetarische Gerichte?", tr: "Vejetaryen yemekleriniz var mı?" },
      { de: "Das Essen war sehr lecker.", tr: "Yemek çok lezzetliydi." },
      { de: "Stimmt so.", tr: "Üstü kalsın." },
      { de: "Getrennt oder zusammen?", tr: "Ayrı mı birlikte mi (ödeme)?" }
    ],
    "Doktor & Eczane": [
      { de: "Ich fühle mich nicht gut.", tr: "Kendimi iyi hissetmiyorum." },
      { de: "Ich habe Kopfschmerzen.", tr: "Başım ağrıyor." },
      { de: "Ich habe Bauchschmerzen.", tr: "Karnım ağrıyor." },
      { de: "Ich habe Fieber.", tr: "Ateşim var." },
      { de: "Ich bin erkältet.", tr: "Üşüttüm/nezle oldum." },
      { de: "Ich brauche einen Arzt.", tr: "Bir doktora ihtiyacım var." },
      { de: "Haben Sie einen Termin?", tr: "Randevunuz var mı?" },
      { de: "Ich möchte einen Termin vereinbaren.", tr: "Randevu almak istiyorum." },
      { de: "Haben Sie etwas gegen Husten?", tr: "Öksürük için bir şeyiniz var mı?" },
      { de: "Brauche ich ein Rezept?", tr: "Reçete gerekiyor mu?" },
      { de: "Wie oft soll ich das nehmen?", tr: "Bunu ne sıklıkta almam lazım?" }
    ],
    "Telefonda Konuşma": [
      { de: "Hallo, hier spricht Ahmet.", tr: "Alo, ben Ahmet." },
      { de: "Kann ich bitte mit Frau Müller sprechen?", tr: "Bayan Müller ile konuşabilir miyim?" },
      { de: "Einen Moment bitte.", tr: "Bir dakika lütfen." },
      { de: "Sie ist gerade nicht da.", tr: "Şu an burada değil." },
      { de: "Kann ich eine Nachricht hinterlassen?", tr: "Mesaj bırakabilir miyim?" },
      { de: "Ich rufe später zurück.", tr: "Daha sonra tekrar ararım." },
      { de: "Können Sie das bitte buchstabieren?", tr: "Heceleyebilir misiniz?" },
      { de: "Die Verbindung ist schlecht.", tr: "Bağlantı kötü." }
    ],
    "Ev Arama & Kira": [
      { de: "Ich suche eine Wohnung.", tr: "Daire arıyorum." },
      { de: "Wie hoch ist die Miete?", tr: "Kira ne kadar?" },
      { de: "Inklusive Nebenkosten?", tr: "Giderler dahil mi?" },
      { de: "Wie viele Zimmer hat die Wohnung?", tr: "Dairenin kaç odası var?" },
      { de: "Gibt es einen Balkon?", tr: "Balkon var mı?" },
      { de: "Wann kann ich sie besichtigen?", tr: "Ne zaman görebilirim?" },
      { de: "Die Heizung funktioniert nicht.", tr: "Kalorifer çalışmıyor." },
      { de: "Das Licht geht nicht.", tr: "Işık yanmıyor." },
      { de: "Ich muss den Müll runterbringen.", tr: "Çöpü aşağı çıkarmam lazım." }
    ],
    "Geçmişi Anlatma (Perfekt)": [
      { de: "Was hast du gestern gemacht?", tr: "Dün ne yaptın?" },
      { de: "Ich habe gearbeitet.", tr: "Çalıştım." },
      { de: "Ich bin ins Kino gegangen.", tr: "Sinemaya gittim." },
      { de: "Ich habe einen Film gesehen.", tr: "Bir film izledim." },
      { de: "Wir haben im Restaurant gegessen.", tr: "Restoranda yedik." },
      { de: "Ich bin früh aufgestanden.", tr: "Erken kalktım." },
      { de: "Das Wochenende war sehr schön.", tr: "Hafta sonu çok güzeldi." }
    ],
    "Hava Durumu & Sohbet": [
      { de: "Was für ein schönes Wetter!", tr: "Ne güzel hava!" },
      { de: "Es regnet heute.", tr: "Bugün yağmur yağıyor." },
      { de: "Es ist sehr kalt.", tr: "Çok soğuk." },
      { de: "Morgen soll es schneien.", tr: "Yarın kar yağacakmış." },
      { de: "Die Sonne scheint.", tr: "Güneş parlıyor." },
      { de: "Es ist bewölkt.", tr: "Bulutlu." },
      { de: "Im Sommer ist es hier sehr warm.", tr: "Yazın burası çok sıcak olur." }
    ],
    "Buluşma & Randevu": [
      { de: "Hast du am Samstag Zeit?", tr: "Cumartesi vaktin var mı?" },
      { de: "Wollen wir ins Kino gehen?", tr: "Sinemaya gidelim mi?" },
      { de: "Das klingt gut!", tr: "Kulağa güzel geliyor!" },
      { de: "Leider kann ich nicht.", tr: "Maalesef gelemiyorum." },
      { de: "Wann treffen wir uns?", tr: "Ne zaman buluşalım?" },
      { de: "Wo treffen wir uns?", tr: "Nerede buluşalım?" },
      { de: "Um 19 Uhr vor dem Kino.", tr: "19.00'da sinemanın önünde." }
    ],
    "Günlük İşler": [
      { de: "Ich muss einkaufen gehen.", tr: "Alışverişe gitmem lazım." },
      { de: "Wann schließt der Supermarkt?", tr: "Süpermarket ne zaman kapanıyor?" },
      { de: "Ist am Sonntag geöffnet?", tr: "Pazar günü açık mı?" },
      { de: "Ich muss zur Post.", tr: "Postaneye gitmem lazım." },
      { de: "Wie viel kostet der Versand?", tr: "Kargo ne kadar?" },
      { de: "Ich möchte Geld abheben.", tr: "Para çekmek istiyorum." }
    ],
    "Giysi & Moda (A2)": [
      { de: "Welche Größe haben Sie?", tr: "Hangi bedeni kullanıyorsunuz?" },
      { de: "Kann ich das anprobieren?", tr: "Deneyebilir miyim?" },
      { de: "Das ist mir zu eng.", tr: "Bu bana dar geliyor." },
      { de: "Haben Sie das eine Nummer größer?", tr: "Bunun bir büyüğü var mı?" },
      { de: "Die Farbe gefällt mir nicht.", tr: "Renk hoşuma gitmiyor." },
      { de: "Ich möchte das umtauschen.", tr: "Bunu değiştirmek istiyorum." },
      { de: "Haben Sie einen Kassenbon?", tr: "Fişiniz var mı?" },
      { de: "Das ist leider kaputt.", tr: "Maalesef bozuk." },
      { de: "Ich möchte mein Geld zurück.", tr: "Param geri istiyorum." }
    ],
    "Bayram & Kutlama": [
      { de: "Frohe Weihnachten!", tr: "Mutlu Noeller!" },
      { de: "Frohes neues Jahr!", tr: "Mutlu yıllar!" },
      { de: "Herzlichen Glückwunsch zum Geburtstag!", tr: "Doğum günün kutlu olsun!" },
      { de: "Wir feiern Silvester bei Freunden.", tr: "Yılbaşını arkadaşlarda kutluyoruz." },
      { de: "An Ostern bekommen die Kinder Schokoladeneier.", tr: "Paskalyada çocuklara çikolata yumurta verilir." },
      { de: "Im Ramadan fastet man den ganzen Tag.", tr: "Ramazan'da bütün gün oruç tutulur." },
      { de: "Wir haben eine große Geburtstagsparty gemacht.", tr: "Büyük bir doğum günü partisi yaptık." },
      { de: "Ich habe ein Geschenk für dich.", tr: "Senin için bir hediyem var." }
    ],
    "Spor & Hareket": [
      { de: "Ich gehe zweimal pro Woche ins Fitnessstudio.", tr: "Haftada iki kez spor salonuna gidiyorum." },
      { de: "Ich jogge jeden Morgen im Park.", tr: "Her sabah parkta koşu yapıyorum." },
      { de: "Meine Lieblingssportart ist Fußball.", tr: "Favori sporum futbol." },
      { de: "Ich schwimme gern im Sommer.", tr: "Yazın yüzmeyi severim." },
      { de: "Wir spielen am Wochenende Tennis.", tr: "Hafta sonu tenis oynuyoruz." },
      { de: "Ich mache Yoga zur Entspannung.", tr: "Rahatlamak için yoga yapıyorum." },
      { de: "Nach dem Sport fühle ich mich besser.", tr: "Spordan sonra kendimi daha iyi hissediyorum." },
      { de: "Ich laufe jeden Tag 10.000 Schritte.", tr: "Her gün 10 bin adım yürüyorum." }
    ],
    "Hayvanlar & Doğa": [
      { de: "Wir haben einen Hund zu Hause.", tr: "Evde bir köpeğimiz var." },
      { de: "Katzen sind sehr unabhängig.", tr: "Kediler çok bağımsız." },
      { de: "Ich gehe gern in den Wald spazieren.", tr: "Ormanda yürüyüş yapmayı severim." },
      { de: "Im Zoo haben wir viele Tiere gesehen.", tr: "Hayvanat bahçesinde birçok hayvan gördük." },
      { de: "Das Meer beruhigt mich.", tr: "Deniz beni sakinleştiriyor." },
      { de: "Die Berge sind im Winter wunderschön.", tr: "Dağlar kışın muhteşem." },
      { de: "Ich liebe die Natur.", tr: "Doğayı seviyorum." }
    ],
    "Boş Zaman (Geniş)": [
      { de: "Am Wochenende gehen wir oft ins Museum.", tr: "Hafta sonu sık müzeye gideriz." },
      { de: "Gestern war ich auf einem Konzert.", tr: "Dün bir konserdeydim." },
      { de: "Ich lese jeden Abend vor dem Schlafen.", tr: "Her akşam uyumadan önce okuyorum." },
      { de: "Wir sind ins Theater gegangen.", tr: "Tiyatroya gittik." },
      { de: "Ich spiele Gitarre als Hobby.", tr: "Hobi olarak gitar çalıyorum." },
      { de: "Am Sonntag frühstücken wir gemütlich.", tr: "Pazar keyifle kahvaltı yapıyoruz." },
      { de: "Wir haben einen Ausflug gemacht.", tr: "Bir gezi yaptık." }
    ],
    "Şehir & Kasaba": [
      { de: "Ich wohne lieber in der Stadt.", tr: "Şehirde yaşamayı tercih ederim." },
      { de: "Auf dem Land ist es ruhiger.", tr: "Köyde daha sakin." },
      { de: "Berlin ist sehr multikulturell.", tr: "Berlin çok çok kültürlü." },
      { de: "In kleinen Städten kennt jeder jeden.", tr: "Küçük şehirlerde herkes herkesi tanır." },
      { de: "Die Luft ist auf dem Land sauberer.", tr: "Köyde hava daha temiz." },
      { de: "In der Stadt gibt es mehr Möglichkeiten.", tr: "Şehirde daha çok olanak var." },
      { de: "Ich vermisse manchmal mein Dorf.", tr: "Köyümü bazen özlüyorum." }
    ],
    "Okul & Eğitim": [
      { de: "Mein Kind geht in die Grundschule.", tr: "Çocuğum ilkokula gidiyor." },
      { de: "Der Unterricht beginnt um acht Uhr.", tr: "Ders saat 8'de başlıyor." },
      { de: "Mein Lieblingsfach ist Mathematik.", tr: "En sevdiğim ders matematik." },
      { de: "Ich habe eine wichtige Prüfung morgen.", tr: "Yarın önemli bir sınavım var." },
      { de: "Die Lehrerin ist sehr freundlich.", tr: "Öğretmen çok kibar." },
      { de: "Ich habe viele Hausaufgaben.", tr: "Çok ödevim var." },
      { de: "Die Ferien beginnen nächste Woche.", tr: "Tatil önümüzdeki hafta başlıyor." },
      { de: "Ich lerne für die Abschlussprüfung.", tr: "Final sınavı için çalışıyorum." }
    ],
    "Vücut & Sağlık (A2)": [
      { de: "Ich habe mir den Arm gebrochen.", tr: "Kolumu kırdım." },
      { de: "Der Zahnarzt tut mir weh!", tr: "Diş doktoru canımı acıtıyor!" },
      { de: "Ich muss öfter Sport machen.", tr: "Daha sık spor yapmalıyım." },
      { de: "Ich habe eine Grippe.", tr: "Gripim." },
      { de: "Mein Arzt hat mich krankgeschrieben.", tr: "Doktorum beni raporlu yazdı." },
      { de: "Ich muss die Tabletten dreimal am Tag nehmen.", tr: "İlaçları günde üç kez almam gerek." },
      { de: "Ich fühle mich schwach und müde.", tr: "Halsiz ve yorgun hissediyorum." }
    ],
    "Küçük Sohbet (Geniş)": [
      { de: "Was machst du am Wochenende?", tr: "Hafta sonu ne yapıyorsun?" },
      { de: "Wie läuft es bei dir?", tr: "Senin işler nasıl?" },
      { de: "Hast du schon Urlaub geplant?", tr: "Tatil planladın mı?" },
      { de: "Wie lange machst du das schon?", tr: "Bunu ne zamandır yapıyorsun?" },
      { de: "Das klingt interessant, erzähl mehr!", tr: "Kulağa ilginç geliyor, anlat!" },
      { de: "Ich muss leider los.", tr: "Maalesef gitmem lazım." },
      { de: "Lass uns bald mal wieder treffen.", tr: "Yakında tekrar buluşalım." }
    ]
  },

  B1: {
    "İş Hayatı & Başvuru": [
      { de: "Ich interessiere mich für diese Stelle.", tr: "Bu pozisyonla ilgileniyorum." },
      { de: "Ich habe drei Jahre Berufserfahrung.", tr: "Üç yıllık iş tecrübem var." },
      { de: "Meine Stärken sind Teamarbeit und Zuverlässigkeit.", tr: "Güçlü yönlerim ekip çalışması ve güvenilirliktir." },
      { de: "Ich arbeite gerne im Team.", tr: "Takım halinde çalışmayı severim." },
      { de: "Wann könnte ich anfangen?", tr: "Ne zaman başlayabilirim?" },
      { de: "Wie sind die Arbeitszeiten?", tr: "Çalışma saatleri nasıl?" },
      { de: "Wie hoch ist das Gehalt?", tr: "Maaş ne kadar?" },
      { de: "Gibt es eine Probezeit?", tr: "Deneme süresi var mı?" },
      { de: "Ich habe Erfahrung in diesem Bereich.", tr: "Bu alanda tecrübem var." },
      { de: "Ich bin flexibel und lerne schnell.", tr: "Esneğim ve çabuk öğrenirim." },
      { de: "Ich suche eine neue Herausforderung.", tr: "Yeni bir zorluk arıyorum." }
    ],
    "Resmi Daire (Amt)": [
      { de: "Ich möchte mich anmelden.", tr: "Adres kaydı yaptırmak istiyorum." },
      { de: "Welche Unterlagen brauche ich?", tr: "Hangi evraklar gerekiyor?" },
      { de: "Ich habe einen Termin um 10 Uhr.", tr: "Saat 10'da randevum var." },
      { de: "Wo kann ich das Formular ausfüllen?", tr: "Formu nerede doldurabilirim?" },
      { de: "Ich brauche eine Bescheinigung.", tr: "Bir belgeye ihtiyacım var." },
      { de: "Können Sie mir erklären, wie das funktioniert?", tr: "Bunun nasıl işlediğini açıklayabilir misiniz?" },
      { de: "Ich möchte meinen Aufenthaltstitel verlängern.", tr: "Oturma iznimi uzatmak istiyorum." },
      { de: "Ich habe die Unterlagen dabei.", tr: "Evrakları yanımda getirdim." },
      { de: "Wohin muss ich das schicken?", tr: "Bunu nereye göndermem lazım?" }
    ],
    "Banka & Finans": [
      { de: "Ich möchte ein Konto eröffnen.", tr: "Hesap açtırmak istiyorum." },
      { de: "Welche Gebühren fallen an?", tr: "Hangi masraflar oluyor?" },
      { de: "Ich habe meine Karte verloren.", tr: "Kartımı kaybettim." },
      { de: "Ich möchte meine Karte sperren lassen.", tr: "Kartımı bloke ettirmek istiyorum." },
      { de: "Wie lange dauert eine Überweisung?", tr: "Havale ne kadar sürüyor?" },
      { de: "Mein Konto ist überzogen.", tr: "Hesabım eksiye düşmüş." },
      { de: "Ich hätte gerne einen Kredit.", tr: "Kredi almak isterim." }
    ],
    "Görüş Bildirme & Tartışma": [
      { de: "Ich bin der Meinung, dass…", tr: "…olduğunu düşünüyorum." },
      { de: "Ich finde das eine gute Idee.", tr: "Bunun iyi bir fikir olduğunu düşünüyorum." },
      { de: "Da bin ich anderer Meinung.", tr: "Bu konuda farklı düşünüyorum." },
      { de: "Das sehe ich genauso.", tr: "Ben de öyle görüyorum." },
      { de: "Einerseits… andererseits…", tr: "Bir yandan… diğer yandan…" },
      { de: "Meiner Meinung nach…", tr: "Bence…" },
      { de: "Das hängt davon ab.", tr: "Duruma göre değişir." },
      { de: "Ich kann das gut nachvollziehen.", tr: "Bunu çok iyi anlayabiliyorum." },
      { de: "Stimmst du mir zu?", tr: "Bana katılıyor musun?" }
    ],
    "Sorun Çözme & Şikayet": [
      { de: "Ich habe ein Problem mit…", tr: "…ile ilgili bir sorunum var." },
      { de: "Können wir eine Lösung finden?", tr: "Bir çözüm bulabilir miyiz?" },
      { de: "Ich möchte mich beschweren.", tr: "Şikayet etmek istiyorum." },
      { de: "Das Gerät funktioniert nicht richtig.", tr: "Cihaz düzgün çalışmıyor." },
      { de: "Ich möchte es umtauschen.", tr: "Değiştirmek istiyorum." },
      { de: "Kann ich den Kaufbetrag zurückbekommen?", tr: "Ödediğim parayı geri alabilir miyim?" },
      { de: "Wer ist dafür zuständig?", tr: "Bundan kim sorumlu?" },
      { de: "Was schlagen Sie vor?", tr: "Ne öneriyorsunuz?" }
    ],
    "Randevu & Plan (Resmi)": [
      { de: "Können wir einen Termin ausmachen?", tr: "Randevu ayarlayabilir miyiz?" },
      { de: "Passt Ihnen Mittwoch um 15 Uhr?", tr: "Çarşamba saat 15 size uygun mu?" },
      { de: "Leider kann ich nicht kommen.", tr: "Maalesef gelemiyorum." },
      { de: "Ich muss den Termin verschieben.", tr: "Randevuyu ertelemem gerekiyor." },
      { de: "Ich komme gerne vorbei.", tr: "Seve seve uğrarım." },
      { de: "Sagen Sie mir Bescheid, wenn es klappt.", tr: "Olursa bana haber verin." }
    ],
    "Medya & İnternet": [
      { de: "Ich lese jeden Tag die Nachrichten.", tr: "Her gün haberleri okuyorum." },
      { de: "Ich benutze soziale Medien nicht viel.", tr: "Sosyal medyayı çok kullanmıyorum." },
      { de: "Im Internet findet man alles.", tr: "İnternette her şey bulunur." },
      { de: "Ich habe das online gelesen.", tr: "Onu internette okudum." },
      { de: "Man sollte nicht alles glauben.", tr: "İnsan her şeye inanmamalı." },
      { de: "Das Video ist viral gegangen.", tr: "Video viral oldu." }
    ],
    "Çevre & Toplum": [
      { de: "Wir müssen die Umwelt schützen.", tr: "Çevreyi korumalıyız." },
      { de: "Ich trenne den Müll.", tr: "Çöpleri ayrıştırıyorum." },
      { de: "Ich fahre mit dem Fahrrad zur Arbeit.", tr: "İşe bisikletle gidiyorum." },
      { de: "Der Klimawandel ist ein großes Problem.", tr: "İklim değişikliği büyük bir sorun." },
      { de: "Man sollte weniger Plastik benutzen.", tr: "Daha az plastik kullanmalıyız." }
    ],
    "Göç & Entegrasyon": [
      { de: "Ich lebe seit drei Jahren in Deutschland.", tr: "Üç yıldır Almanya'da yaşıyorum." },
      { de: "Ich habe einen Aufenthaltstitel.", tr: "Oturma iznim var." },
      { de: "Ich mache einen Integrationskurs.", tr: "Entegrasyon kursuna gidiyorum." },
      { de: "Ich möchte die deutsche Staatsbürgerschaft beantragen.", tr: "Alman vatandaşlığı için başvurmak istiyorum." },
      { de: "Meine Muttersprache ist Türkisch.", tr: "Anadilim Türkçe." },
      { de: "Ich fühle mich hier zu Hause.", tr: "Burada kendimi evimde hissediyorum." },
      { de: "Die deutsche Kultur ist anders.", tr: "Alman kültürü farklı." },
      { de: "Ich habe viele deutsche Freunde.", tr: "Birçok Alman arkadaşım var." },
      { de: "Das Einbürgerungstest ist nicht leicht.", tr: "Vatandaşlık testi kolay değil." },
      { de: "Ich möchte mein Diplom anerkennen lassen.", tr: "Diplomamı denklik yaptırmak istiyorum." },
      { de: "Die Sprachbarriere ist manchmal schwer.", tr: "Dil bariyeri bazen zor." },
      { de: "Ich engagiere mich in einem Kulturverein.", tr: "Bir kültür derneğinde aktifim." },
      { de: "In Deutschland gibt es viele Möglichkeiten.", tr: "Almanya'da birçok fırsat var." },
      { de: "Mein Umzug war eine große Veränderung.", tr: "Taşınmam büyük bir değişiklikti." }
    ],
    "Eğitim & Meslek Eğitimi": [
      { de: "Ich mache eine Ausbildung als Krankenpfleger.", tr: "Hemşirelik eğitimi alıyorum." },
      { de: "Ich studiere Informatik an der Uni.", tr: "Üniversitede bilgisayar okuyorum." },
      { de: "Die Prüfung war schwieriger als erwartet.", tr: "Sınav beklediğimden zordu." },
      { de: "Ich möchte eine Weiterbildung machen.", tr: "Meslek içi eğitim almak istiyorum." },
      { de: "Das Studium dauert drei Jahre.", tr: "Eğitim üç yıl sürüyor." },
      { de: "Ich habe mein Abitur mit guten Noten bestanden.", tr: "Abitur sınavımı iyi notlarla geçtim." },
      { de: "Nebenbei arbeite ich als Werkstudent.", tr: "Yan iş olarak öğrenci olarak çalışıyorum." },
      { de: "Ich möchte später promovieren.", tr: "İleride doktora yapmak istiyorum." },
      { de: "Die Anerkennung meines Abschlusses dauert lange.", tr: "Diplomamın denkliği uzun sürüyor." },
      { de: "Praktika sind sehr wichtig für den Lebenslauf.", tr: "Stajlar özgeçmiş için çok önemli." }
    ],
    "Medya & İnternet (Geniş)": [
      { de: "Ich informiere mich online über aktuelle Themen.", tr: "Güncel konuları internetten takip ediyorum." },
      { de: "Soziale Medien haben Vor- und Nachteile.", tr: "Sosyal medyanın artıları ve eksileri var." },
      { de: "Ich folge einigen Podcasts regelmäßig.", tr: "Düzenli olarak bazı podcastleri takip ediyorum." },
      { de: "Fake News sind ein großes Problem.", tr: "Sahte haberler büyük bir sorun." },
      { de: "Man sollte Quellen immer prüfen.", tr: "Kaynaklar her zaman kontrol edilmeli." },
      { de: "Ich verbringe zu viel Zeit am Handy.", tr: "Telefonumda çok vakit geçiriyorum." },
      { de: "Streaming-Dienste ersetzen das Fernsehen.", tr: "Yayın servisleri TV'nin yerini alıyor." },
      { de: "Datenschutz ist mir wichtig.", tr: "Veri gizliliği benim için önemli." },
      { de: "Online-Werbung ist oft lästig.", tr: "Online reklamlar sıkça rahatsız edici." },
      { de: "Ich habe mich von sozialen Medien abgemeldet.", tr: "Sosyal medyadan hesabımı sildim." }
    ],
    "Çevre & İklim": [
      { de: "Der Klimawandel betrifft uns alle.", tr: "İklim değişikliği hepimizi etkiliyor." },
      { de: "Ich versuche, weniger Müll zu produzieren.", tr: "Daha az çöp üretmeye çalışıyorum." },
      { de: "Ich kaufe oft regional und saisonal.", tr: "Sık sık bölgesel ve mevsimlik alıyorum." },
      { de: "Öffentliche Verkehrsmittel sind umweltfreundlicher.", tr: "Toplu taşıma çevreye daha dost." },
      { de: "Plastik sollte man möglichst vermeiden.", tr: "Plastikten mümkün olduğunca kaçınmalı." },
      { de: "Die Mülltrennung ist in Deutschland streng.", tr: "Almanya'da çöp ayrıştırma katı." },
      { de: "Erneuerbare Energien sind die Zukunft.", tr: "Yenilenebilir enerji geleceğin kaynağı." },
      { de: "Viele Menschen essen heute vegetarisch.", tr: "Bugün birçok insan vejetaryen besleniyor." },
      { de: "Ich fahre lieber Fahrrad als Auto.", tr: "Arabadan çok bisiklet sürmeyi tercih ederim." },
      { de: "Wir müssen Energie sparen.", tr: "Enerji tasarrufu yapmalıyız." }
    ],
    "Sağlık & Beslenme (Geniş)": [
      { de: "Gesunde Ernährung ist mir wichtig.", tr: "Sağlıklı beslenme benim için önemli." },
      { de: "Ich gehe regelmäßig zur Vorsorgeuntersuchung.", tr: "Düzenli check-up'a gidiyorum." },
      { de: "Ich habe eine Allergie gegen Nüsse.", tr: "Fındığa alerjim var." },
      { de: "Stress macht auf Dauer krank.", tr: "Stres uzun vadede hasta eder." },
      { de: "Ich schlafe mindestens sieben Stunden pro Nacht.", tr: "Gecede en az yedi saat uyuyorum." },
      { de: "Meditation hilft mir beim Entspannen.", tr: "Meditasyon rahatlamama yardım ediyor." },
      { de: "Ich versuche, weniger Zucker zu essen.", tr: "Daha az şeker yemeye çalışıyorum." },
      { de: "Psychische Gesundheit ist genauso wichtig.", tr: "Ruh sağlığı da aynı derecede önemli." },
      { de: "Ich war zwei Wochen krankgeschrieben.", tr: "İki hafta raporluydum." },
      { de: "Sport ist die beste Medizin.", tr: "Spor en iyi ilaç." }
    ],
    "İş Hayatı (Geniş)": [
      { de: "Ich arbeite in einem internationalen Unternehmen.", tr: "Uluslararası bir şirkette çalışıyorum." },
      { de: "Homeoffice ist seit der Pandemie normal.", tr: "Pandemiden beri evden çalışma normal." },
      { de: "Wir haben jede Woche eine Teambesprechung.", tr: "Her hafta ekip toplantımız var." },
      { de: "Ich bekomme dreißig Tage Urlaub im Jahr.", tr: "Yılda otuz gün izin alıyorum." },
      { de: "Mein Chef ist sehr verständnisvoll.", tr: "Patronum çok anlayışlı." },
      { de: "Ich habe eine Gehaltserhöhung bekommen.", tr: "Maaş artışı aldım." },
      { de: "Work-Life-Balance ist mir wichtig.", tr: "İş-yaşam dengesi benim için önemli." },
      { de: "Ich möchte mich beruflich verändern.", tr: "Meslek değiştirmek istiyorum." },
      { de: "Die Arbeitsatmosphäre ist sehr angenehm.", tr: "İş atmosferi çok hoş." },
      { de: "Ich habe Überstunden gemacht.", tr: "Fazla mesai yaptım." }
    ],
    "Seyahat & Tatil Deneyimi": [
      { de: "Wir sind letztes Jahr nach Italien gefahren.", tr: "Geçen yıl İtalya'ya gittik." },
      { de: "Der Flug war leider verspätet.", tr: "Uçuş maalesef gecikti." },
      { de: "Ich habe viele Sehenswürdigkeiten besichtigt.", tr: "Birçok turistik yer gezdim." },
      { de: "Das Hotel war sauber und zentral.", tr: "Otel temiz ve merkezi idi." },
      { de: "Die Einheimischen waren sehr freundlich.", tr: "Yerel halk çok sıcakkanlı idi." },
      { de: "Ich reise lieber individuell als mit einer Gruppe.", tr: "Grup yerine bireysel gezmeyi tercih ederim." },
      { de: "Das Essen war ein echtes Highlight.", tr: "Yemek gerçek bir doruk noktasıydı." },
      { de: "Wir haben viele Erinnerungsfotos gemacht.", tr: "Birçok hatıra fotoğrafı çektik." },
      { de: "Reisen erweitert den Horizont.", tr: "Seyahat ufkunu açıyor." },
      { de: "Nächstes Jahr möchte ich nach Japan.", tr: "Önümüzdeki yıl Japonya'ya gitmek istiyorum." }
    ],
    "Aile & İlişkiler": [
      { de: "Meine Familie bedeutet mir sehr viel.", tr: "Ailem benim için çok şey ifade ediyor." },
      { de: "Wir sehen uns einmal im Monat.", tr: "Ayda bir görüşüyoruz." },
      { de: "Ich habe eine enge Beziehung zu meiner Schwester.", tr: "Kız kardeşimle yakın ilişkim var." },
      { de: "Meine Eltern wohnen in der Türkei.", tr: "Ailem Türkiye'de yaşıyor." },
      { de: "Ich bin seit fünf Jahren verheiratet.", tr: "Beş yıldır evliyim." },
      { de: "Wir möchten bald Kinder bekommen.", tr: "Yakında çocuk sahibi olmak istiyoruz." },
      { de: "Freundschaft ist genauso wichtig wie Familie.", tr: "Arkadaşlık aile kadar önemli." },
      { de: "Ich habe einen besten Freund seit der Schulzeit.", tr: "Okul zamanından beri en iyi arkadaşım var." },
      { de: "Konflikte soll man in Ruhe besprechen.", tr: "Çatışmalar sakince konuşulmalı." },
      { de: "Vertrauen ist die Basis jeder Beziehung.", tr: "Güven her ilişkinin temeli." }
    ],
    "Teknoloji & Dijital Yaşam": [
      { de: "Ohne Smartphone geht heute fast nichts mehr.", tr: "Akıllı telefonsuz bugün neredeyse hiçbir şey olmuyor." },
      { de: "Ich erledige meine Bankgeschäfte online.", tr: "Banka işlerimi internetten hallediyorum." },
      { de: "Künstliche Intelligenz verändert unsere Arbeit.", tr: "Yapay zeka işimizi değiştiriyor." },
      { de: "Ich lerne Sprachen mit einer App.", tr: "Uygulamayla dil öğreniyorum." },
      { de: "Online-Meetings sparen viel Zeit.", tr: "Online toplantılar çok zaman tasarrufu sağlıyor." },
      { de: "Ich mache Backups meiner wichtigen Daten.", tr: "Önemli verilerimin yedeğini alıyorum." },
      { de: "Digitale Detox ist manchmal nötig.", tr: "Dijital detoks bazen gerekli." },
      { de: "Passwörter sollten sicher sein.", tr: "Şifreler güvenli olmalı." }
    ],
    "Alışveriş & Finanslar": [
      { de: "Ich vergleiche die Preise, bevor ich kaufe.", tr: "Almadan önce fiyatları karşılaştırıyorum." },
      { de: "Ich kaufe oft online ein.", tr: "Sık sık internetten alışveriş yapıyorum." },
      { de: "Secondhand ist nachhaltiger und billiger.", tr: "İkinci el daha sürdürülebilir ve ucuz." },
      { de: "Ich spare monatlich einen festen Betrag.", tr: "Aylık sabit bir miktar biriktiriyorum." },
      { de: "Mit Kreditkarte gerät man leicht in Schulden.", tr: "Kredi kartıyla kolay borca girilir." },
      { de: "Ich führe ein Haushaltsbuch.", tr: "Bütçe defteri tutuyorum." },
      { de: "Versicherungen sind in Deutschland Pflicht.", tr: "Almanya'da sigortalar zorunlu." },
      { de: "Die Miete verschlingt die Hälfte meines Gehalts.", tr: "Kira maaşımın yarısını götürüyor." }
    ],
    "Kültür & Festivaller": [
      { de: "In Deutschland feiert man Weihnachten groß.", tr: "Almanya'da Noel büyük kutlanır." },
      { de: "Oktoberfest ist weltberühmt.", tr: "Oktoberfest dünyaca ünlü." },
      { de: "Ich feiere sowohl deutsche als auch türkische Feste.", tr: "Hem Alman hem Türk bayramlarını kutluyorum." },
      { de: "Silvester verbringen wir mit Freunden.", tr: "Yılbaşını arkadaşlarla geçiriyoruz." },
      { de: "Die deutsche Kultur respektiert Pünktlichkeit.", tr: "Alman kültürü dakikliğe saygı duyar." },
      { de: "Ich gehe gern ins Theater und ins Museum.", tr: "Tiyatroya ve müzeye gitmeyi severim." },
      { de: "Literatur öffnet neue Welten.", tr: "Edebiyat yeni dünyalar açıyor." },
      { de: "Regionale Traditionen sollte man bewahren.", tr: "Bölgesel gelenekler korunmalı." }
    ],
    "Ev & Komşuluk": [
      { de: "Die Nachbarn sind sehr nett.", tr: "Komşular çok kibar." },
      { de: "Wir haben eine gute Hausgemeinschaft.", tr: "İyi bir apartman cemaati var." },
      { de: "Nach 22 Uhr muss es leise sein.", tr: "22'den sonra sessiz olunmalı." },
      { de: "Jeden Samstag mache ich den Hausputz.", tr: "Her Cumartesi ev temizliği yapıyorum." },
      { de: "Die Wohnung ist klein, aber gemütlich.", tr: "Daire küçük ama rahat." },
      { de: "Ich möchte einen Garten haben.", tr: "Bir bahçem olsun istiyorum." },
      { de: "Der Vermieter ist sehr hilfsbereit.", tr: "Ev sahibi çok yardımsever." }
    ],
    "Duygular & Karakter": [
      { de: "Ich bin heute glücklich.", tr: "Bugün mutluyum." },
      { de: "Er ist sehr zuverlässig.", tr: "Çok güvenilir biri." },
      { de: "Ich bin enttäuscht.", tr: "Hayal kırıklığına uğradım." },
      { de: "Sie ist immer freundlich.", tr: "Her zaman kibar." },
      { de: "Ich bin stolz auf dich.", tr: "Seninle gurur duyuyorum." },
      { de: "Er ist ein bisschen schüchtern.", tr: "Biraz utangaç." },
      { de: "Ich ärgere mich über das.", tr: "Buna kızıyorum." },
      { de: "Sie ist sehr ehrgeizig.", tr: "Çok hırslı." }
    ],
    "Sağlık & Yaşam": [
      { de: "Ich achte auf meine Gesundheit.", tr: "Sağlığıma dikkat ediyorum." },
      { de: "Ich treibe regelmäßig Sport.", tr: "Düzenli spor yapıyorum." },
      { de: "Ich versuche, gesund zu essen.", tr: "Sağlıklı beslenmeye çalışıyorum." },
      { de: "Ich habe mit dem Rauchen aufgehört.", tr: "Sigarayı bıraktım." },
      { de: "Stress macht krank.", tr: "Stres insanı hasta eder." }
    ]
  },

  B2: {
    "Resmi Yazışma": [
      { de: "Sehr geehrte Damen und Herren,", tr: "Sayın Bay/Bayanlar," },
      { de: "Ich wende mich an Sie mit folgendem Anliegen.", tr: "Size şu konuyla ilgili yazıyorum." },
      { de: "Hiermit bestätige ich den Erhalt Ihrer E-Mail.", tr: "Mail'inizin ulaştığını onaylıyorum." },
      { de: "Ich bitte um eine zeitnahe Rückmeldung.", tr: "En kısa zamanda geri dönüş rica ediyorum." },
      { de: "Für weitere Fragen stehe ich gerne zur Verfügung.", tr: "Başka sorular için her zaman ulaşabilirsiniz." },
      { de: "Mit freundlichen Grüßen", tr: "Saygılarımla" },
      { de: "Ich beziehe mich auf Ihr Schreiben vom…", tr: "…tarihli yazınıza istinaden…" },
      { de: "Anbei sende ich Ihnen die Unterlagen.", tr: "Evrakları ekte gönderiyorum." }
    ],
    "Argüman & Tartışma (İleri)": [
      { de: "Ein wesentlicher Aspekt dabei ist…", tr: "Bu konudaki önemli bir nokta…" },
      { de: "Das Argument überzeugt mich nicht ganz.", tr: "Bu argüman beni tamamen ikna etmiyor." },
      { de: "Es gibt sowohl Vor- als auch Nachteile.", tr: "Hem avantajları hem de dezavantajları var." },
      { de: "Dafür spricht, dass…", tr: "Bunu destekleyen şey…" },
      { de: "Dagegen spricht, dass…", tr: "Buna karşı olan nokta…" },
      { de: "Zusammenfassend lässt sich sagen, dass…", tr: "Özetle şunu söyleyebiliriz ki…" },
      { de: "Man sollte nicht außer Acht lassen, dass…", tr: "…olduğu gözden kaçırılmamalı." },
      { de: "Im Gegensatz zu Ihrer Auffassung…", tr: "Sizin görüşünüzün aksine…" },
      { de: "Das lässt sich nicht verallgemeinern.", tr: "Bu genellenemez." }
    ],
    "Mülakat (İleri Seviye)": [
      { de: "Erzählen Sie etwas über sich.", tr: "Kendinizden bahseder misiniz?" },
      { de: "Warum sollten wir gerade Sie einstellen?", tr: "Neden sizi işe alalım?" },
      { de: "Wo sehen Sie sich in fünf Jahren?", tr: "Kendinizi beş yıl sonra nerede görüyorsunuz?" },
      { de: "Was sind Ihre Schwächen?", tr: "Zayıf yönleriniz neler?" },
      { de: "Ich arbeite sehr strukturiert.", tr: "Çok düzenli çalışırım." },
      { de: "Ich möchte mich fachlich weiterentwickeln.", tr: "Mesleki olarak kendimi geliştirmek istiyorum." },
      { de: "Ich bin belastbar und konfliktfähig.", tr: "Baskıya dayanıklıyım ve çatışma yönetebilirim." },
      { de: "Ich habe mich gut auf das Gespräch vorbereitet.", tr: "Bu görüşmeye iyi hazırlandım." }
    ],
    "Karmaşık Durumlar (Konjunktiv)": [
      { de: "Das lässt sich so pauschal nicht sagen.", tr: "Bu o kadar genel söylenemez." },
      { de: "Ich würde das gerne differenzierter betrachten.", tr: "Bunu daha detaylı ele almak isterim." },
      { de: "Es kommt auf den Kontext an.", tr: "Bağlama göre değişir." },
      { de: "An Ihrer Stelle würde ich es anders machen.", tr: "Sizin yerinizde farklı yapardım." },
      { de: "Ich hätte das nicht gedacht.", tr: "Bunu düşünmezdim." },
      { de: "Das könnte man auch anders sehen.", tr: "Bu başka türlü de görülebilir." },
      { de: "Wir sollten das in Ruhe besprechen.", tr: "Bunu sakince konuşmalıyız." },
      { de: "Ich möchte Missverständnisse vermeiden.", tr: "Yanlış anlaşılmaları önlemek istiyorum." }
    ],
    "Soyut Konular & Toplum": [
      { de: "Das spiegelt sich in der Gesellschaft wider.", tr: "Bu kendini toplumda yansıtıyor." },
      { de: "Diese Entwicklung ist bemerkenswert.", tr: "Bu gelişme dikkat çekici." },
      { de: "Es handelt sich um ein komplexes Thema.", tr: "Bu karmaşık bir konu." },
      { de: "Das Thema wird kontrovers diskutiert.", tr: "Bu konu tartışmalı bir şekilde ele alınıyor." },
      { de: "Ich teile diese Einschätzung nicht uneingeschränkt.", tr: "Bu değerlendirmeye tamamen katılmıyorum." },
      { de: "Langfristig wird sich zeigen, ob…", tr: "Uzun vadede …olup olmayacağı görülecek." },
      { de: "Die Ursachen sind vielfältig.", tr: "Nedenleri çok çeşitli." }
    ],
    "Şikayet & İtiraz (Resmi)": [
      { de: "Ich lege hiermit Widerspruch ein.", tr: "Bununla itiraz ediyorum." },
      { de: "Die Rechnung ist nicht korrekt.", tr: "Fatura doğru değil." },
      { de: "Ich fordere eine Stellungnahme.", tr: "Bir açıklama talep ediyorum." },
      { de: "Ich behalte mir rechtliche Schritte vor.", tr: "Yasal yollara başvurma hakkımı saklı tutuyorum." },
      { de: "Das entspricht nicht unserer Vereinbarung.", tr: "Bu anlaşmamıza uygun değil." },
      { de: "Ich erwarte eine zeitnahe Klärung.", tr: "Kısa sürede bir çözüm bekliyorum." }
    ],
    "Deyimler & Kalıplar": [
      { de: "Das ist mir Wurst.", tr: "Benim için fark etmez. (mecaz)" },
      { de: "Daumen drücken!", tr: "Şans dilerim! / Bol şans!" },
      { de: "Ich habe die Nase voll.", tr: "Bıktım usandım." },
      { de: "Das ist ein Kinderspiel.", tr: "Çocuk oyuncağı." },
      { de: "Das kommt mir spanisch vor.", tr: "Bana tuhaf geliyor." },
      { de: "Tomaten auf den Augen haben.", tr: "Göz göre göre görmemek." },
      { de: "Jetzt geht's um die Wurst.", tr: "İş ciddiye bindi." }
    ],
    "Ekonomi & Çalışma Hayatı": [
      { de: "Die Wirtschaft wächst langsamer.", tr: "Ekonomi daha yavaş büyüyor." },
      { de: "Die Inflation steigt weiter.", tr: "Enflasyon artmaya devam ediyor." },
      { de: "Viele Unternehmen suchen Fachkräfte.", tr: "Birçok şirket uzman eleman arıyor." },
      { de: "Homeoffice ist heute normal geworden.", tr: "Evden çalışma artık normal hâle geldi." },
      { de: "Das Gehalt ist verhandelbar.", tr: "Maaş pazarlığa açık." },
      { de: "Der Arbeitsmarkt ist angespannt.", tr: "İş piyasası gergin." }
    ],
    "Politika & Toplum": [
      { de: "Die Demokratie lebt von der Beteiligung aller Bürger.", tr: "Demokrasi tüm vatandaşların katılımıyla yaşar." },
      { de: "Die Wahlbeteiligung war in diesem Jahr höher als erwartet.", tr: "Bu yılki seçim katılımı beklenenden yüksekti." },
      { de: "Politische Debatten werden zunehmend polarisiert geführt.", tr: "Siyasi tartışmalar giderek kutuplaşarak yürütülüyor." },
      { de: "Die Regierung plant eine umfassende Reform des Rentensystems.", tr: "Hükümet emeklilik sisteminde kapsamlı bir reform planlıyor." },
      { de: "Der gesellschaftliche Zusammenhalt steht auf dem Prüfstand.", tr: "Toplumsal dayanışma sınanıyor." },
      { de: "Minderheiten brauchen besonderen Schutz.", tr: "Azınlıkların özel korumaya ihtiyacı var." },
      { de: "Die Schere zwischen Arm und Reich geht immer weiter auseinander.", tr: "Zengin-fakir uçurumu giderek büyüyor." },
      { de: "Die Pressefreiheit ist ein hohes Gut.", tr: "Basın özgürlüğü yüksek bir değerdir." }
    ],
    "Bilim & Araştırma": [
      { de: "Eine aktuelle Studie belegt, dass …", tr: "Güncel bir çalışma kanıtlıyor ki …" },
      { de: "Die Ergebnisse der Forschung sind eindeutig.", tr: "Araştırmanın sonuçları nettir." },
      { de: "Wissenschaftler warnen vor den Folgen des Klimawandels.", tr: "Bilim insanları iklim değişikliğinin sonuçlarından uyarıyor." },
      { de: "Es besteht ein enger Zusammenhang zwischen den beiden Phänomenen.", tr: "İki fenomen arasında yakın bir bağ vardır." },
      { de: "Die Hypothese konnte experimentell bestätigt werden.", tr: "Hipotez deneysel olarak doğrulandı." },
      { de: "Die Datenlage ist nicht ausreichend, um endgültige Schlüsse zu ziehen.", tr: "Veriler kesin sonuç çıkarmaya yetmiyor." },
      { de: "Künstliche Intelligenz revolutioniert viele Forschungsbereiche.", tr: "Yapay zeka birçok araştırma alanında devrim yaratıyor." },
      { de: "Grundlagenforschung ist langfristig unverzichtbar.", tr: "Temel araştırma uzun vadede vazgeçilmezdir." }
    ],
    "Kültür, Sanat & Edebiyat": [
      { de: "Der Roman behandelt zentrale Fragen unserer Zeit.", tr: "Roman çağımızın merkezi sorularını ele alıyor." },
      { de: "Die Ausstellung hat einen bleibenden Eindruck hinterlassen.", tr: "Sergi kalıcı bir izlenim bıraktı." },
      { de: "Die Kritiker waren sich überwiegend einig.", tr: "Eleştirmenler büyük ölçüde hemfikirdi." },
      { de: "Der Film thematisiert die Identitätskrise eines jungen Mannes.", tr: "Film genç bir adamın kimlik krizini ele alıyor." },
      { de: "Kunst hat die Macht, die Gesellschaft zu verändern.", tr: "Sanatın toplumu değiştirme gücü vardır." },
      { de: "Klassische Musik ist auch bei Jugendlichen beliebter geworden.", tr: "Klasik müzik gençler arasında da popüler oldu." },
      { de: "Die Autorin wurde mit einem renommierten Preis ausgezeichnet.", tr: "Yazar saygın bir ödüle layık görüldü." },
      { de: "Literatur spiegelt den Zeitgeist wider.", tr: "Edebiyat zamanın ruhunu yansıtır." }
    ],
    "Dijitalleşme & Medya Eleştirisi": [
      { de: "Falschinformationen verbreiten sich in sozialen Medien rasend schnell.", tr: "Yanlış bilgiler sosyal medyada hızla yayılıyor." },
      { de: "Die Nutzer sollten Informationsquellen stets kritisch hinterfragen.", tr: "Kullanıcılar kaynakları her zaman eleştirel sorgulamalı." },
      { de: "Algorithmen bestimmen zunehmend, was wir zu sehen bekommen.", tr: "Algoritmalar giderek ne göreceğimizi belirliyor." },
      { de: "Die Abhängigkeit vom Smartphone ist besorgniserregend.", tr: "Akıllı telefon bağımlılığı endişe verici." },
      { de: "Datenschutz wird häufig vernachlässigt.", tr: "Veri gizliliği sık sık ihmal ediliyor." },
      { de: "Die digitale Spaltung vertieft soziale Ungleichheit.", tr: "Dijital uçurum sosyal eşitsizliği derinleştiriyor." },
      { de: "Medienkompetenz sollte schon in der Schule vermittelt werden.", tr: "Medya okuryazarlığı okuldan itibaren verilmeli." }
    ],
    "Küreselleşme & Göç (İleri)": [
      { de: "Die Globalisierung hat Gewinner und Verlierer.", tr: "Küreselleşmenin kazananları ve kaybedenleri var." },
      { de: "Migration bereichert die Gesellschaft kulturell.", tr: "Göç toplumu kültürel olarak zenginleştirir." },
      { de: "Die Integration erfordert Anstrengung von beiden Seiten.", tr: "Entegrasyon iki tarafın da çaba göstermesini gerektirir." },
      { de: "Fachkräfte aus dem Ausland sind unverzichtbar geworden.", tr: "Yurt dışından uzmanlar vazgeçilmez hâle geldi." },
      { de: "Vorurteile entstehen oft aus Unwissenheit.", tr: "Önyargılar çoğunlukla bilgisizlikten doğar." },
      { de: "Interkulturelle Kompetenz wird immer wichtiger.", tr: "Kültürlerarası yetkinlik giderek daha önemli." },
      { de: "Das Asylrecht ist in der Verfassung verankert.", tr: "Sığınma hakkı anayasada güvence altında." }
    ],
    "Sürdürülebilirlik & İklim (İleri)": [
      { de: "Der Klimawandel stellt die größte Herausforderung unserer Zeit dar.", tr: "İklim değişikliği çağımızın en büyük sorunudur." },
      { de: "Nachhaltigkeit muss in alle Lebensbereiche integriert werden.", tr: "Sürdürülebilirlik hayatın her alanına entegre edilmeli." },
      { de: "Die CO2-Emissionen müssen drastisch reduziert werden.", tr: "CO2 emisyonları ciddi şekilde azaltılmalı." },
      { de: "Erneuerbare Energien sind die Lösung, nicht das Problem.", tr: "Yenilenebilir enerji çözümdür, sorun değil." },
      { de: "Ein bewusster Konsum schont Ressourcen.", tr: "Bilinçli tüketim kaynakları korur." },
      { de: "Die junge Generation fordert zu Recht mehr Klimaschutz.", tr: "Genç kuşak haklı olarak daha çok iklim koruma talep ediyor." },
      { de: "Ökologie und Ökonomie müssen Hand in Hand gehen.", tr: "Ekoloji ve ekonomi el ele gitmeli." }
    ],
    "İş Dünyasındaki Dönüşüm": [
      { de: "Die Digitalisierung verändert Berufsbilder grundlegend.", tr: "Dijitalleşme meslekleri temelden değiştiriyor." },
      { de: "Viele traditionelle Jobs werden durch Automatisierung ersetzt.", tr: "Birçok geleneksel meslek otomasyonla yer değiştiriyor." },
      { de: "Flexibilität ist heute wichtiger als jemals zuvor.", tr: "Esneklik bugün her zamankinden önemli." },
      { de: "Lebenslanges Lernen ist zur Pflicht geworden.", tr: "Yaşam boyu öğrenme zorunluluk hâline geldi." },
      { de: "Homeoffice bietet Chancen, aber auch Herausforderungen.", tr: "Evden çalışma fırsat da meydan okuma da." },
      { de: "Die Work-Life-Balance ist ein zentrales Thema.", tr: "İş-yaşam dengesi merkezi bir konudur." },
      { de: "Die Vier-Tage-Woche wird ernsthaft diskutiert.", tr: "Dört günlük çalışma haftası ciddi biçimde tartışılıyor." }
    ],
    "Psikoloji & Kişisel Gelişim": [
      { de: "Selbstreflexion ist der Schlüssel zur persönlichen Entwicklung.", tr: "Özdüşünüm kişisel gelişimin anahtarıdır." },
      { de: "Mentale Gesundheit verdient die gleiche Aufmerksamkeit wie körperliche.", tr: "Ruh sağlığı bedensel sağlık kadar önemsenmeli." },
      { de: "Achtsamkeit hilft, im gegenwärtigen Moment zu leben.", tr: "Mindfulness anda yaşamaya yardım eder." },
      { de: "Resilienz lässt sich trainieren.", tr: "Dayanıklılık geliştirilebilir." },
      { de: "Die digitale Reizüberflutung belastet viele Menschen.", tr: "Dijital uyarı fazlalığı birçok kişiyi yıpratıyor." },
      { de: "Der Umgang mit Stress ist eine wichtige Kompetenz.", tr: "Stres yönetimi önemli bir yetkinliktir." },
      { de: "Therapie ist kein Zeichen von Schwäche, sondern von Stärke.", tr: "Terapi zayıflığın değil, gücün göstergesidir." }
    ],
    "Toplumsal Eğilimler": [
      { de: "Die Gesellschaft altert zunehmend.", tr: "Toplum giderek yaşlanıyor." },
      { de: "Individualismus prägt die moderne Lebensweise.", tr: "Bireycilik modern yaşam tarzını şekillendiriyor." },
      { de: "Die Generation Z hat andere Werte als frühere Generationen.", tr: "Z kuşağının değerleri önceki kuşaklardan farklı." },
      { de: "Traditionen verlieren in urbanen Räumen an Bedeutung.", tr: "Gelenekler kentsel alanlarda önem kaybediyor." },
      { de: "Die Bedeutung der Familie wandelt sich.", tr: "Aile kavramı değişiyor." },
      { de: "Konsumverhalten spiegelt den Zeitgeist wider.", tr: "Tüketim davranışı zamanın ruhunu yansıtır." },
      { de: "Minimalismus ist eine Reaktion auf die Überflussgesellschaft.", tr: "Minimalizm bolluk toplumuna bir tepkidir." }
    ]
  }
};
