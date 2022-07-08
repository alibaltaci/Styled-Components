# Styled Components 

https://styled-components.com/docs/basics

# Motivation

* React ve React Native componetlerimizi stillendirmek için yazılmış bir kütüphanedir.

* **Automatic critical CSS:** Render edilen componentlerin bir listesini tutar ve bunların styleları ile birlikte gelmesini ya da silinirse styleları ile birlikte silinmesini sağlar. Yüklenmesi gereken kodları yükler (code spliting). İşi olmayan CSS ler yüklenmez.

* **No Class Name Bugs:** Style Components, stilleriniz için benzersiz sınıf adları oluşturur. Çoğaltma, çakışma veya yazım hataları konusunda asla endişelenmenize gerek yok.

* **Easier Deletion of CSS:** Bileşen kullanılmıyorsa (hangi takım algılayabilir) ve silinirse, tüm stilleri onunla birlikte silinir. 

* **Simple Dynamic Styling.** Styled Components prop alabilir ve bunlara bir theme geçebiliriz. Alınan sınıfa göre stil belirlenir. Düzinelerce sınıfı manuel olarak yönetmek zorunda kalmadan basit ve sezgiseldir.

* **Painless Maintenance:** (Sorunsuz Bakım) Componentler ve stiller birbirine bağlı. Bileşeninizi etkileyen stili bulmak için asla farklı dosyalar arasında arama yapmanız gerekmez, bu nedenle kod tabanınız ne kadar büyük olursa olsun bakım çocuk oyuncağıdır.

* **Automatic Vendor Prefixing:** CSS'nizi mevcut standarda yazın ve gerisini stil bileşenlerinin halletmesine izin verin.

# Installation

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

` import Styled from "styled-components"; `