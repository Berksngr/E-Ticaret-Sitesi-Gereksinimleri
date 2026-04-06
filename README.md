# E-Ticaret Projesi - Takım Görevleri ve Raporu

**Frontend Canlı Link:** [https://e-ticaret-sitesi-gereksinimleri.vercel.app](https://e-ticaret-sitesi-gereksinimleri.vercel.app)
**Backend (API) Canlı Link:** [https://e-ticaret-sitesi-10gw.onrender.com](https://e-ticaret-sitesi-10gw.onrender.com)

---

## 👨‍💻 Berk Sungur - Üstlendiği Görevler ve API Dokümantasyonu

Aşağıda tarafımca (Berk Sungur) geliştirilen/entegre edilen Backend API rotaları ve Frontend gereksinimleri listelenmektedir:

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

## 👩‍💻 Nilsu Bozkurt - Üstlendiği Görevler ve Bileşenler

Aşağıda tarafımca (Nilsu Bozkurt) geliştirilen önyüz (frontend) ve arkayüz (backend) bileşenleri listelenmektedir:

### 1. Kimlik Doğrulama (Auth) Arayüzleri ve Sistemi
Sisteme farklı kullanıcı tiplerinin (Kullanıcı, Satıcı, Admin) giriş yapabilmesi için gerekli arayüzlerin tasarlanması ve API entegrasyonu tarafımca yapılmıştır.
- **Admin Login:** `/src/components/Auth/Login/AdminLogin.jsx`
- **User Login:** `/src/components/Auth/Login/UserLogin.jsx`
- **Seller Login:** `/src/components/Auth/Login/SellerLogin.jsx`
- **Genel Login Bileşeni ve CSS:** `/src/components/Auth/Login/Login.jsx` ve `Login.css`

### 2. Admin Siparişleri Görüntüleme Arayüzü (Order Page)
- **Dosya:** `/src/pages/Admin/OrderPage.jsx`
- **Açıklama:** Admin panelinde verilen siparişlerin ve durumlarının düzenli olarak listelendiği sayfanın geliştirilmesi ve entegrasyonu tamamlanmıştır.

### 3. Backend Yönlendirmeleri (Routes)
- **Dosya:** `/backend/routes/index.js`
- **Açıklama:** Geliştirilen yeni API uçlarının ana yönlendiriciye eklenmesi ve yapılandırılması tamamlanmıştır.

---
**Not:** API testleri için kullanılan Postman koleksiyonu projedeki `Berksngr-Postman.json` dosyasında yer almaktadır.
