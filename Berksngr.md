# Berk Süngür - Proje Görevleri ve API Dokümantasyon Raporu

**Frontend Canlı Link:** [BURAYA_FRONTEND_VERCEL_LINKINI_YAZ]
**Backend (API) Canlı Link:** [BURAYA_BACKEND_CANLI_LINKINI_YAZ]
**YouTube Kanıt Videosu:** [BURAYA_YOUTUBE_LINKINI_YAZ]

## Üstlendiğim Görevler ve API Endpoint'leri

Aşağıda tarafımca geliştirilen/entegre edilen Backend API rotaları ve Frontend gereksinimleri listelenmektedir:

### 1. Ürün Paneli ve Yönetimi (Frontend)
Admin kullanıcısı için ürünlerin listelendiği, yenilerinin eklenebildiği ve mevcut olanların güncellendiği yönetim ekranının tasarlanması ve API ile haberleştirilmesi.

### 2. Ürün Ekleme
- **Metot:** `POST`
- **Yol (Path):** `/api/products`
- **Açıklama:** Sisteme yeni bir ürün (ad, fiyat, stok, kategori) kaydedilmesi.
- **Request Body (Örnek):**
  ```json
  {
    "name": "Kablosuz Kulaklık",
    "price": 1200,
    "stock": 50,
    "category": "Elektronik"
  }
  ```

### 3. Ürün Güncelleme
- **Metot:** `PUT`
- **Yol (Path):** `/api/products/:id`
- **Açıklama:** Mevcut bir ürünün fiyat veya stok gibi bilgilerinin değiştirilmesi.
- **Request Body (Örnek):**
  ```json
  {
    "price": 1150,
    "stock": 45
  }
  ```

### 4. Ürün Silme
- **Metot:** `DELETE`
- **Yol (Path):** `/api/products/:id`
- **Açıklama:** Satışı durdurulan bir ürünün veya hatalı ürünün sistemden tamamen kaldırılması.

### 5. Ürün Görüntüleme
- **Metot:** `GET`
- **Yol (Path):** `/api/products/:id`
- **Açıklama:** Kullanıcının belirli bir ürünün detaylarını (fiyat, açıklama vb.) görüntüleme sayfası için verilerin çekilmesi.

### 6. Kategori Listeleme
- **Metot:** `GET`
- **Yol (Path):** `/api/categories`
- **Açıklama:** Ürünlerin "Elektronik", "Gıda", "Giyim" gibi belli sınıflara ayrılarak menüde ve sayfalarda listelenmesi.

### 7. Ürün Arama
- **Metot:** `GET`
- **Yol (Path):** `/api/products/search?q=arama_kelimesi`
- **Açıklama:** Kullanıcının arama çubuğunu kullanarak yazılı metin aracılığıyla ürün bulabilmesi.

### 8. Sipariş Durumu Görüntüleme
- **Metot:** `GET`
- **Yol (Path):** `/api/orders/:id/status`
- **Açıklama:** Sepeti onaylayıp verilen siparişin güncel aşamasının ("Hazırlanıyor", "Kargoda", "Teslim Edildi") panel üzerinden takip edilmesi.

---
**Not:** Bu projedeki Postman test koleksiyonum, projeye eklenen `Berksngr-Postman.json` dosyasında yer almaktadır.
