# Deutsch Alltag — Intensiv Almanca Öğrenme

Almanya'da günlük hayatta işine yarayacak Almanca cümleleri **SM-2 aralıklı tekrar (Anki mantığı) + çok modlu test** ile öğreten tek sayfa uygulama. Backend yok, her şey tarayıcıda (`localStorage`).

## Dosya Yapısı

- `index.html` — Tek sayfa, üç görünüm (Öğren / Gramer / Gözat)
- `styles.css` — Tüm stiller, açık/koyu tema, responsive
- `data.js` — Cümle veri kaynağı (Goethe / telc müfredatına uygun)
- `grammar.js` — Gramer konuları (A1–B2), her konu: başlık + açıklama + tablo + örnekler
- `verbs.js` — ~105 sık fiil: Infinitiv, Präsens (er), Präteritum, Partizip II, yardımcı (haben/sein), tip + her 4 form için `ex` (örnek cümle de/tr). Hücreye tıklayınca o formun örneği açılır.
- `exam.js` — Goethe A1-B2 sınav hazırlığı. Her seviye için `format` (süreler), `themes` (konu listesi), `lesen`/`hoeren` (metin + soru + açıklama), `schreiben` (şablonlar + örnek cevap), `sprechen` (görev + hazır ifadeler).
- `srs.js` — SM-2 algoritması, kart durumu, günlük istatistik (localStorage: `german_srs_v1`)
- `script.js` — Gözat + Gramer görünümü, tab geçişi
- `study.js` — Öğren görünümü (oturum kuyruğu, mod seçimi, UI render)

## Öğrenme Modu (intensiv)

Her kart durum makinesinde ilerler: `new → learning → review → (relearning)`. Kartın durumuna göre farklı modda test edilir:

- **📖 flip** — yeni kart, Almancasını göster → çevir, anlamını öğret. "Zaten biliyorum" butonu ile direkt review'e düşürülebilir (quality=3).
- **👁 recognize** — Almanca göster → 4 Türkçe şık
- **🧠 recall** — Türkçe göster → 4 Almanca şık
- **⌨ type** — Türkçe göster → Almancasını yaz (ä→ae, ü→ue, ö→oe, ß→ss kabul)
- **👂 listen** — sesi çal → duyulanı yaz
- **✏️ cloze** — Türkçe ipucu + Almanca cümle, bir içerik kelimesi boş; o kelimeyi yaz. `pickClozeWord` stopwords dışında ≥4 harfli kelime seçer.

**Hızlı oturum:** Ana ekrandaki ⚡ butonu 5 kartlık mikro oturum başlatır (boş vaktin olmadığında).

Yanlış cevap → kart kuyruğun sonuna eklenir (o oturumda tekrar gelir). SM-2 ease/interval güncellenir.

## SM-2 Parametreleri (`srs.js`)

- Yeni kart learning step'leri: `[1 dk, 10 dk]`
- Graduating interval: 1 gün (İyi), 4 gün (Kolay)
- Başlangıç ease: 2.5, min ease: 1.3
- Zor: interval × 1.2, ease −0.15
- İyi: interval × ease
- Kolay: interval × ease × 1.3, ease +0.15
- Tekrar (lapse, review'den): ease −0.2, relearning step'e düş

## Klavye

- `1–4` — seçenek/değerlendirme butonu
- `Boşluk` — flip modunda çevir
- `Enter` — yazma modunda gönder

## Seviyeler (müfredat uyumlu)

- **A1** — Start Deutsch 1: Tanışma, aile, sayı, saat, alışveriş, yemek, ev, rutin, hobi
- **A2** — Start Deutsch 2: Yön, seyahat, restoran, doktor, telefon, ev kirası, Perfekt, buluşma
- **B1** — Zertifikat B1: İş/başvuru, Amt, banka, görüş, şikayet, medya, çevre, sağlık
- **B2** — Goethe B2: Resmi yazı, argüman, mülakat, Konjunktiv, soyut, deyim, ekonomi

## LocalStorage Anahtarları

- `german_srs_v1` — tüm SRS verisi (kartlar, daily, stats, settings)
- `german_active_session_v1` — yarım kalan oturum (kuyruk, idx, stats, levels). Her `nextCard`'da güncellenir, `finishSession`'da silinir.
- `german_favs` — gözat modundaki favoriler
- `german_theme` — `light` | `dark`

## Çalıştırma

Build yok. `index.html`'i tarayıcıda aç.

```bash
start index.html
```

## Veri Ekleme

Yeni cümle: `data.js` içindeki ilgili `{seviye}.{kategori}` dizisine `{ de, tr }` objesi ekle. Otomatik olarak hem Gözat'ta hem Öğren'de görünür.
