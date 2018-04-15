# БЭМ

DEMO: https://dry-sea-25967.herokuapp.com/  
_При смене устройства желатльно обновлять кэш cmd+shift+r так как ServiceWorker делаеь свою работу_

## Команды

Поставить зависимости `npm install` <br>
Запустить приложение в режиме разработки `npm run start-bem`<br>
Собрать приложение `npm run build`<br>

Поднять приложение на node.js `npm run start`

### Описание работы

Приложение реализовано на основе [bem-react-boilerplate](https://github.com/bem/bem-react-boilerplate)

Сервер реализован с помощью [express.js](http://expressjs.com/)

Собрано три бандла для desktop, mobile и tablet.

Тип сборки выбирается на стороне сервера (express.js) основе user-agent. 

Фиды загружаются https://udobnaja.github.io/lesson-1/api/feed/data.json


