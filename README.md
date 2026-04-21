# Deutsch Alltag 🇩🇪

Almanya'da günlük hayatta işine yarayacak Almanca cümleleri **aralıklı tekrar (SM-2 / Anki mantığı) + çok modlu test** ile öğreten, tek sayfa bir web uygulaması. Backend yok, her şey tarayıcıda çalışır.

🌐 **[Siteyi aç](./index.html)** · Build yok, kurulum yok — `index.html`'i çift tıkla.

---

## Ne var bu sitede?

- 📚 **613 cümle** — Goethe/telc A1–B2 müfredatına uygun, kategorilere ayrılmış
- 📖 **41 gramer konusu** — A1'den B2'ye, her biri açıklama + tablo + örnek + seslendirme
- 🔤 **113 fiil** — Infinitiv, Präsens, Präteritum, Partizip II + her form için örnek cümle
- 📝 **Sınav hazırlık** — Goethe A1/A2/B1/B2 formatında Lesen, Hören, Schreiben şablonları, Sprechen kalıpları
- ⚡ **6 öğrenme modu** — Tanı (flip), tanıma, hatırlama, yazma, dinleme, boşluk doldurma
- 🔥 **Seri & ilerleme** — Günlük streak, seviye başına bilinen kart, yarım kalan oturum
- 🌙 **Açık/koyu tema**, Almanca TTS ile seslendirme, tam klavye desteği

## Nasıl kullanılır

1. **📚 Öğren** — Seviye seç, ⚡ "Oturuma Başla" → SM-2 algoritması sana hangi kartı ne zaman göstereceğine karar verir
2. **📖 Gramer** — Seviye seç, konu kartlarını aç → kuralı öğren, örnekleri dinle
3. **🔤 Fiiller** — Tabloda bir çekim hücresine tıkla, o formla bir örnek cümle açılır
4. **📝 Sınav** — Seviyeni seç, Lesen/Hören örnekleri çöz, Schreiben şablonlarını ezberle
5. **🔍 Gözat** — Tüm cümleleri kategori + arama ile tara, favorilere ekle

## Klavye kısayolları

| Tuş | İşlev |
|-----|-------|
| `1`–`4` | Seçenek ya da değerlendirme (Tekrar/Zor/İyi/Kolay) |
| `Boşluk` | Flip modunda çevir |
| `Enter` | Yazma modunda gönder |

## Seviyeler (Goethe / telc)

- **A1** — Start Deutsch 1: Selamlaşma, aile, sayılar, alışveriş, yemek, günlük rutin
- **A2** — Start Deutsch 2: Yön, seyahat, doktor, telefon, ev, Perfekt, buluşma
- **B1** — Zertifikat B1: İş, Amt, banka, göç, medya, çevre, sağlık
- **B2** — Goethe B2: Resmi yazı, argüman, mülakat, Konjunktiv, deyim, ekonomi, politika

## Teknoloji

Saf vanilla HTML/CSS/JS. Harici kütüphane yok. Veri `localStorage`'da saklanır:
- `german_srs_v1` — SRS durumu
- `german_active_session_v1` — yarım kalan oturum
- `german_favs` — favoriler
- `german_theme` — açık/koyu

## Dosya yapısı

```
index.html     → Tek sayfa, 5 görünüm (Öğren / Gramer / Fiiller / Sınav / Gözat)
styles.css     → Tüm stiller, responsive, dark mode
data.js        → 613 cümle
grammar.js     → 41 gramer konusu
verbs.js       → 113 fiil + 4 örnek cümle
exam.js        → Goethe A1-B2 sınav içeriği
srs.js         → SM-2 algoritması, localStorage
study.js       → Öğrenme oturumu, mod rotasyonu
script.js      → Gözat, Gramer, Fiiller, Sınav render + tab geçişi
```

## Katkı & lisans

Kişisel kullanım için yapıldı. Cümle eklemek için `data.js`'e istediğin seviye/kategori altına `{ de: "...", tr: "..." }` objesi ekle — otomatik hem Gözat'ta hem Öğren'de görünür.

---

Almanca öğrenmek uzun yol — her gün 15 dakika, yılda bir seviye. Viel Erfolg! 💪
