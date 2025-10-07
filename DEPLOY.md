# Руководство по развертыванию приложения "Денежный поток"

## Варианты развертывания

### 1. Локальное использование
Самый простой способ - открыть файл `index.html` непосредственно в браузере.

**Шаги:**
1. Скачайте все файлы проекта
2. Дважды щелкните по файлу `index.html`
3. Приложение откроется в браузере по умолчанию

### 2. Локальный веб-сервер

#### Python (если установлен)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js (если установлен)
```bash
# Установить http-server глобально
npm install -g http-server

# Запустить сервер
http-server -p 8000
```

#### PHP (если установлен)
```bash
php -S localhost:8000
```

После запуска откройте http://localhost:8000 в браузере.

### 3. Развертывание на хостинге

#### GitHub Pages (бесплатно)
1. Создайте репозиторий на GitHub
2. Загрузите все файлы
3. Перейдите в Settings → Pages
4. Выберите источник: Deploy from a branch → main
5. Сайт будет доступен по адресу: `https://ваш-username.github.io/название-репозитория`

#### Netlify (бесплатно)
1. Зарегистрируйтесь на netlify.com
2. Перетащите папку с проектом в панель развертывания
3. Получите уникальный URL для приложения

#### Vercel (бесплатно)
1. Установите Vercel CLI: `npm i -g vercel`
2. В папке проекта выполните: `vercel`
3. Следуйте инструкциям в терминале

#### Surge.sh (бесплатно)
```bash
# Установить surge
npm install -g surge

# Развернуть
surge
```

### 4. Развертывание на VPS/выделенном сервере

#### Nginx
Пример конфигурации:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/cash_flow_app;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Apache
Создайте файл `.htaccess`:
```apache
DirectoryIndex index.html

# Кэширование
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Сжатие
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

## Оптимизация для продакшена

### 1. Минификация CSS и JavaScript
Используйте инструменты для сжатия:

**Для CSS:**
```bash
# С помощью cssnano
npx cssnano styles.css styles.min.css
```

**Для JavaScript:**
```bash
# С помощью terser
npx terser script.js -o script.min.js
```

### 2. Оптимизация изображений
Если добавите изображения, сжимайте их:
- PNG: используйте TinyPNG или ImageOptim
- JPG: качество 80-85%
- SVG: минифицируйте через SVGOMG

### 3. Service Worker для оффлайн работы
Создайте файл `sw.js`:
```javascript
const CACHE_NAME = 'cash-flow-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Slab:wght@300;400;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
```

Затем зарегистрируйте его в `index.html`:
```html
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => console.log('SW registered'))
      .catch(registrationError => console.log('SW registration failed'));
  });
}
</script>
```

## Настройка домена и SSL

### Бесплатный SSL от Let's Encrypt
```bash
# Установить certbot
sudo apt install certbot python3-certbot-nginx

# Получить сертификат
sudo certbot --nginx -d your-domain.com
```

### Настройка DNS
Укажите A-запись на IP вашего сервера:
```
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600
```

## Мониторинг и аналитика

### Google Analytics 4
Добавьте в `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Yandex.Metrica
```html
<!-- Yandex.Metrica counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(COUNTER_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
```

## Безопасность

### Content Security Policy (CSP)
Добавьте в `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  script-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  connect-src 'self';
">
```

### Дополнительные заголовки безопасности
Для Nginx:
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header X-XSS-Protection "1; mode=block" always;
```

## Проверка развертывания

### Чек-лист перед запуском:
- [ ] Все файлы загружены на сервер
- [ ] Приложение открывается в браузере
- [ ] Все экраны работают корректно
- [ ] Регистрация и валидация функционируют
- [ ] Игровая механика работает для обеих игр
- [ ] Сохранение данных работает
- [ ] Адаптивность на мобильных устройствах
- [ ] SSL сертификат установлен (для HTTPS)
- [ ] Настроена аналитика (опционально)

### Тестирование производительности:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest.org

### Инструменты для проверки:
- W3C Markup Validator (валидация HTML)
- W3C CSS Validator (валидация CSS)
- Browser DevTools (консоль ошибок)

## Обновления

### Создание резервных копий:
```bash
# Создать архив
tar -czf cash_flow_backup_$(date +%Y%m%d).tar.gz /path/to/cash_flow_app/

# Загрузить в облако (пример с rclone)
rclone copy cash_flow_backup_*.tar.gz remote:backups/
```

### Процедура обновления:
1. Создайте резервную копию текущей версии
2. Загрузите новые файлы в отдельную папку
3. Протестируйте новую версию
4. Переключите указатель веб-сервера на новую версию
5. При необходимости откатитесь к предыдущей версии

---

**Удачного развертывания! 🚀**